import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import { defineConfig, sessionDrivers } from "astro/config";
import emdash, { local, s3 } from "emdash/astro";
import { libsql } from "emdash/db";

// Vercel sets VERCEL=1 at build and runtime. Locally we fall back to the
// filesystem, which Vercel cannot provide (its filesystem is ephemeral).
const onVercel = Boolean(process.env.VERCEL);

// Database credentials. The Vercel Turso integration injects
// TURSO_DATABASE_URL / TURSO_AUTH_TOKEN, so those are the primary names;
// LIBSQL_* are accepted as aliases and match EmDash's own documentation.
// (EmDash's migration command also defaults to TURSO_AUTH_TOKEN.)
const databaseUrl =
	process.env.TURSO_DATABASE_URL ?? process.env.LIBSQL_DATABASE_URL;
const databaseAuthToken =
	process.env.TURSO_AUTH_TOKEN ?? process.env.LIBSQL_AUTH_TOKEN;

// Storage driver. Vercel must use S3-compatible storage (AWS S3, Backblaze B2,
// Supabase Storage, ...). EMDASH_STORAGE=local is an escape hatch for a local
// production build; on Vercel it would lose every upload, because the
// serverless filesystem is read-only and discarded between requests.
const storageDriver = process.env.EMDASH_STORAGE ?? (onVercel ? "s3" : "local");
const useS3 = storageDriver === "s3";

// Fail at build time with a list of what is missing, rather than letting
// EmDash throw an opaque error from deep inside the adapter. A half-configured
// Vercel project otherwise produces a confusing build failure.
if (onVercel) {
	// Names are collected first, then filtered by whether they are actually
	// set. (Pushing names conditionally instead would report S3 as missing even
	// when it is configured.)
	const required = [
		"EMDASH_ENCRYPTION_KEY",
		"REDIS_URL",
		...(useS3
			? [
					"S3_ENDPOINT",
					"S3_BUCKET",
					"S3_ACCESS_KEY_ID",
					"S3_SECRET_ACCESS_KEY",
				]
			: []),
	];
	if (!databaseUrl) required.push("TURSO_DATABASE_URL");
	if (!databaseAuthToken) required.push("TURSO_AUTH_TOKEN");

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
				"  - a remote database (Turso) for content",
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

// Locally this is a libSQL file; on Vercel it must be a remote libSQL server,
// because nothing is written to disk between requests.
const database = libsql({
	url: databaseUrl ?? "file:./data.db",
	authToken: databaseAuthToken,
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
			// The CMS admin, the health endpoint and the API are not content.
			filter: (page) =>
				!page.includes("/_emdash/") &&
				!page.includes("/health") &&
				!page.includes("/api/"),
		}),
		emdash({
			database,
			storage,
		}),
	],
	// GOV.UK Frontend ships a legacy IE "zero hack" media query that
	// LightningCSS refuses to minify, so use esbuild for CSS minification.
	//
	// Note: sanitize-html (an EmDash dependency) is left to the default SSR
	// handling on purpose, so Vercel's dependency tracing copies it and its
	// dependency tree into the serverless function. Bundling it stops those
	// dependencies being traced and the function fails with MODULE_NOT_FOUND.
	// Its ESM/CJS problem is fixed by the `overrides` entry in package.json.
	vite: {
		build: {
			cssMinify: "esbuild",
		},
	},
	devToolbar: { enabled: false },
});
