import type { APIRoute } from "astro";
import { getSiteSettings } from "emdash";

/**
 * Health check for the deployment.
 *
 * Deliberately checks the database rather than just returning 200: on Vercel the
 * process starting proves very little, and the most likely failure is the
 * remote database or storage being unreachable.
 *
 * It does not verify storage, migration state or the plugin sandbox — check
 * those separately. See "Deploying to Vercel" in README.md.
 */
export const GET: APIRoute = async () => {
	const checks: Record<string, string> = { app: "ok" };

	try {
		await getSiteSettings();
		checks.database = "ok";
	} catch {
		checks.database = "unreachable";
	}

	const healthy = Object.values(checks).every((value) => value === "ok");

	return new Response(
		JSON.stringify({ status: healthy ? "ok" : "degraded", checks }),
		{
			status: healthy ? 200 : 503,
			headers: {
				"content-type": "application/json",
				"cache-control": "no-store",
			},
		},
	);
};
