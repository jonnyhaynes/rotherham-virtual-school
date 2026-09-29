// Regenerates `emdash-env.d.ts` from the content model without needing a
// running, authenticated admin session (the `emdash types` CLI command talks to
// the HTTP API and requires a login).
//
// It reuses EmDash's own offline generator: migrate an in-memory database,
// apply this project's seed, and emit types from the resulting schema.
//
// Usage: npm run types
import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const projectRoot = resolve(import.meta.dirname, "..");
const generatorPath = resolve(
	projectRoot,
	"node_modules/emdash/dist/schema/project-env-types.mjs",
);

let generateProjectEnvTypes;
try {
	// Imported by file URL: the path is not part of EmDash's public export map.
	({ generateProjectEnvTypes } = await import(pathToFileURL(generatorPath).href));
} catch (error) {
	console.error(
		`Could not load EmDash's offline type generator at:\n  ${generatorPath}\n` +
			"This path is internal and may have moved. Run `npm run dev` and complete " +
			"the EmDash setup wizard, then use `npx emdash types` instead.\n",
	);
	throw error;
}

const types = await generateProjectEnvTypes(projectRoot);
const outputPath = resolve(projectRoot, "emdash-env.d.ts");
await writeFile(outputPath, types, "utf-8");

const collections = types.match(/interface EmDashCollections \{([\s\S]*?)\}/);
const names = collections
	? [...collections[1].matchAll(/^\s*(\w+):/gm)].map((m) => m[1])
	: [];

console.log(
	`Wrote emdash-env.d.ts (${names.length} collections: ${names.join(", ")})`,
);
