import type { APIRoute } from "astro";

/**
 * Receives "report a problem with this page" submissions.
 *
 * TODO before launch: this only writes to the server log, which is ephemeral on
 * Vercel. It needs a real destination — an inbox or a form service — before the
 * feedback form is shown to the public. See the README's outstanding items.
 */
export const POST: APIRoute = async ({ request }) => {
	const json = (body: unknown, status: number) =>
		new Response(JSON.stringify(body), {
			status,
			headers: {
				"content-type": "application/json",
				"cache-control": "no-store",
			},
		});

	let payload: Record<string, unknown>;
	try {
		payload = (await request.json()) as Record<string, unknown>;
	} catch {
		return json({ error: "Expected a JSON body." }, 400);
	}

	// Honeypot: bots fill every field. Real submissions never include this.
	if (typeof payload.website === "string" && payload.website.trim() !== "") {
		return json({ ok: true }, 202);
	}

	const message = typeof payload.message === "string" ? payload.message.trim() : "";
	const pageUrl = typeof payload.url === "string" ? payload.url.slice(0, 500) : "";

	if (message === "") {
		return json({ error: "A message is required." }, 422);
	}

	// Truncated so an oversized body cannot flood the log.
	console.log(
		JSON.stringify({
			event: "page-feedback",
			pageUrl,
			message: message.slice(0, 2000),
			receivedAt: new Date().toISOString(),
		}),
	);

	return json({ ok: true }, 200);
};
