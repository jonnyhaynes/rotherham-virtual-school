import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import { defineConfig, sessionDrivers } from "astro/config";
import emdash, { local, s3 } from "emdash/astro";
import { libsql } from "emdash/db";

// Vercel sets VERCEL=1 at build and runtime. Locally we fall back to the
// filesystem, which Vercel cannot provide (its filesystem is ephemeral).
const onVercel = Boolean(process.env.VERCEL);

// Storage driver. Vercel must use S3-compatible storage (AWS S3, Backblaze B2,
// Supabase Storage, ...). EMDASH_STORAGE=local is an escape hatch for a local
// production build; on Vercel it would lose every upload.
const storageDriver = process.env.EMDASH_STORAGE ?? (onVercel ? "s3" : "local");
const useS3 = storageDriver === "s3";

// Fail at build time with a list of what is missing, rather than letting
// EmDash throw an opaque error from deep inside the adapter. A half-configured
// Vercel project otherwise produces a confusing build failure.
if (onVercel) {
	const required = [
		"EMDASH_ENCRYPTION_KEY",
		"LIBSQL_DATABASE_URL",
		"LIBSQL_AUTH_TOKEN",
		"REDIS_URL",
	];
	if (useS3) {
		required.push(
			"S3_ENDPOINT",
			"S3_BUCKET",
			"S3_ACCESS_KEY_ID",
			"S3_SECRET_ACCESS_KEY",
		);
	}

	const missing = required.filter((key) => !process.env[key]);
	if (missing.length > 0) {
		throw new Error(
			[
				"",
				"Cannot build for Vercel: required environment variables are not set.",
				"",
				...missing.map((key) => `  - ${key}`),
				"",
				"Vercel's filesystem is ephemeral, so this project needs:",
				"  - a remote database (libSQL/Turso) for content",
				"  - S3-compatible storage for media",
				"  - Redis for admin sessions (Vercel provides no session driver)",
				"",
				'Settable in the Vercel dashboard, or with `vercel env add`.',
				'See "Deploying to Vercel" in README.md.',
				"",
			].join("\n"),
		);
	}
}

// Content database. Locally this is a libSQL file; on Vercel it must be a
// remote libSQL server, because nothing is written to disk between requests.
const database = libsql({
	url: process.env.LIBSQL_DATABASE_URL ?? "file:./data.db",
	authToken: process.env.LIBSQL_AUTH_TOKEN,
});

const storage = useS3
	? s3()
	: local({
			directory: "./uploads",
			baseUrl: "/_emdash/api/media/file",
		});

export default defineConfig({
	site: "https://www.virtualschoolrotherham.org.uk",
	output: "server",
	adapter: vercel(),
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	// Vercel provides no default session driver, and EmDash stores signed-in
	// admin users in the Astro session, so this cannot be left to the adapter.
	session: onVercel
		? {
				driver: {
					entrypoint: new URL("./src/session-driver.ts", import.meta.url),
				},
			}
		: {
				driver: sessionDrivers.lruCache({ max: 2000 }),
			},
	integrations: [
		react(),
		sitemap({
			// The CMS admin and the health endpoint are not content.
			filter: (page) =>
				!page.includes("/_emdash/") && !page.includes("/health"),
		}),
		emdash({
			database,
			storage,
		}),
	],
	// GOV.UK Frontend ships a legacy IE "zero hack" media query that
	// LightningCSS refuses to minify, so use esbuild for CSS minification.
	vite: {
		build: {
			cssMinify: "esbuild",
		},
	},
	devToolbar: { enabled: false },
});
