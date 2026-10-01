/**
 * Masthead navigation.
 *
 * The labels and order are the live service's own, taken from
 * `virtual-school.colouringcode.com`: Young people · Parents and carers ·
 * Schools · Social workers · Professionals. They are not the design system
 * template's placeholder labels — the copy is the service's, only the design is
 * the design system's.
 */
export const DS_NAV: { label: string; href: string }[] = [
	{ label: "Young people", href: "/children-young-people/" },
	{ label: "Parents and carers", href: "/parents-carers/" },
	{ label: "Schools", href: "/schools/" },
	{ label: "Social workers", href: "/social-workers/" },
	{ label: "Professionals", href: "/professionals/" },
];

/**
 * The footer's three link columns, again as the live service has them.
 * The design system's `Footer` has a single support-link row, so this is the
 * site's own extension of it (`navigationGroups`) rather than a change to any
 * wording.
 */
export const DS_FOOTER_NAV: { heading: string; links: { label: string; href: string }[] }[] = [
	{
		heading: "Virtual School",
		links: [
			{ label: "About us", href: "/about/" },
			{ label: "Our team", href: "/our-team/" },
			{ label: "News", href: "/news/" },
			{ label: "Training and events", href: "/training-events/" },
			{ label: "Documents and policies", href: "/documents/" },
			{ label: "Outcomes", href: "/outcomes/" },
		],
	},
	{
		heading: "For",
		links: [
			{ label: "Children and young people", href: "/children-young-people/" },
			{ label: "Parents and carers", href: "/parents-carers/" },
			{ label: "Schools and teachers", href: "/schools/" },
			{ label: "Social workers", href: "/social-workers/" },
			{ label: "Other professionals", href: "/professionals/" },
		],
	},
	{
		heading: "Rotherham Council",
		links: [
			{ label: "rotherham.gov.uk", href: "https://www.rotherham.gov.uk/" },
			{ label: "Contact the Virtual School", href: "/contact/" },
		],
	},
];

/** The footer's support links, as the live service has them. */
export const DS_FOOTER_LINKS: { label: string; href: string }[] = [
	{ label: "Accessibility statement", href: "/accessibility-statement/" },
	{ label: "Privacy and cookies", href: "/privacy-cookies/" },
	// Not on the live service: this is the only route to the internal style guide.
	{ label: "Design system", href: "/style-guide/" },
	{ label: "Rotherham Council services", href: "https://www.rotherham.gov.uk/site-map" },
];
