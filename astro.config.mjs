import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import { defineConfig, sessionDrivers } from "astro/config";
import emdash, { local, s3 } from "emdash/astro";
import { libsql } from "emdash/db";

// Content database. Locally this is a libSQL file; in production point
// LIBSQL_DATABASE_URL / LIBSQL_AUTH_TOKEN at Turso (or any libSQL server).
const database = libsql({
	url: process.env.LIBSQL_DATABASE_URL ?? "file:./data.db",
	authToken: process.env.LIBSQL_AUTH_TOKEN,
});

// Vercel sets VERCEL=1 at build and runtime. Locally we fall back to the
// filesystem, which Vercel cannot provide (its filesystem is ephemeral).
const onVercel = Boolean(process.env.VERCEL);

// Media storage. Production on Vercel must use S3-compatible storage
// (AWS S3, Backblaze B2, Supabase Storage, ...). Override with
// EMDASH_STORAGE=local to force the filesystem for a local production build.
const storageDriver =
	process.env.EMDASH_STORAGE ?? (onVercel ? "s3" : "local");
const storage =
	storageDriver === "s3"
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
	// admin users in the Astro session. Redis on Vercel, in-memory locally.
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
			filter: (page) => !page.includes("/_emdash/"),
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
