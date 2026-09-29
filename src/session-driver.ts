import type { SessionDriver } from "astro";
import redisDriver from "unstorage/drivers/redis";

// EmDash keeps signed-in admin users in the Astro session. The Node, Cloudflare
// and Netlify adapters supply a driver automatically, but the Vercel adapter
// does not, so we provide a durable Redis-backed store. Configured as an
// entrypoint so the URL is read at runtime rather than inlined at build time.
export default function (): SessionDriver {
	const url = process.env.REDIS_URL;
	if (!url) {
		throw new Error(
			"REDIS_URL is required: EmDash stores admin sessions in the Astro session, which Vercel cannot back with local storage.",
		);
	}

	const driver = redisDriver({ url, base: "rvs:session" });

	return {
		async getItem(key) {
			return await driver.getItem(key);
		},
		async setItem(key, value) {
			await driver.setItem?.(key, value, {});
		},
		async removeItem(key) {
			await driver.removeItem?.(key, {});
		},
	};
}
