/**
 * Brand assets, from `design-system/components/bundle.js`.
 *
 * The design system's PNG extracts live in `public/assets/rvs/` and are served
 * from that path, which is what the bundle expects. Swap in the master SVG
 * artwork when it is supplied; `Logo` accepts `src`/`assetBase` for that.
 *
 * The council logo is deliberately not here — the design system says it is not
 * part of this system and must be obtained from the council.
 */
export const ASSETS: Record<string, string> = {
	"stacked-reversed": "/assets/rvs/rvs-logo-stacked-reversed.svg",
	stacked: "/assets/rvs/rvs-logo-stacked.svg",
	primary: "/assets/rvs/rvs-logo-primary.svg",
	"primary-reversed": "/assets/rvs/rvs-logo-primary-reversed.svg",
	horizontal: "/assets/rvs/rvs-logo-horizontal.svg",
	"horizontal-reversed": "/assets/rvs/rvs-logo-horizontal-reversed.svg",
	"one-colour": "/assets/rvs/rvs-logo-one-colour.svg",
	"one-colour-reversed": "/assets/rvs/rvs-logo-one-colour-reversed.svg",
	mark: "/assets/rvs/rvs-mark.svg",
	"mark-reversed": "/assets/rvs/rvs-mark-reversed.svg",
	"app-icon": "/assets/rvs/rvs-app-icon.svg",
	"illustration-home": "/assets/rvs/illustration-home.svg",
	"illustration-children": "/assets/rvs/illustration-children.svg",
	// The design system's audience id is `parents-carers`, but its asset file is
	// `illustration-carers`; `Illustration` maps the former onto the latter.
	"illustration-parents-carers": "/assets/rvs/illustration-carers.svg",
	"illustration-schools": "/assets/rvs/illustration-schools.svg",
	pattern: "/assets/rvs/brand-pattern.svg",
};

/**
 * Width-to-height ratio per logo variant, used for the `width` attribute so the
 * `<img>` reserves the right space before it loads.
 */
export const LOGO_RATIO: Record<string, number> = {
	stacked: 3.12,
	primary: 3.12,
	horizontal: 4.1,
	"one-colour": 3.03,
	mark: 0.98,
	"app-icon": 1,
};

/**
 * A unique id for markup that needs one. Astro renders on the server, so this is
 * a per-request counter rather than React's per-instance `useUid`.
 */
let uidCounter = 0;
export function uid(prefix = "rvs"): string {
	uidCounter += 1;
	return `${prefix}-${uidCounter}`;
}

/** Format an ISO date the way the design system does: "22 September 2026". */
const MONTHS = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

export function formatDate(iso?: string | null, short = false): string {
	if (!iso) return "";
	const d = new Date(iso.length === 10 ? `${iso}T12:00:00` : iso);
	if (Number.isNaN(d.getTime())) return iso;
	const m = MONTHS[d.getMonth()];
	return `${d.getDate()} ${short ? m.slice(0, 3) : m} ${d.getFullYear()}`;
}
