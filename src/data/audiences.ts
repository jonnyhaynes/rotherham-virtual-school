// The five audiences the Virtual School serves. This is the backbone of the
// site's information architecture: the home page routes by audience, and every
// audience zone is themed with its own accent colour.
//
// Colours come from the Rotherham palette. Accents are used for card
// top-borders, rules and icons, never as a background for body text, so each
// pairing keeps WCAG 2.2 AA contrast against white.

export interface Audience {
	/** Stable identifier, also used as the theme class suffix. */
	id: "young-people" | "parents-carers" | "schools" | "social-workers" | "professionals";
	/** Card heading, phrased as the reader. */
	title: string;
	href: string;
	/** Short, plain-English promise of what the reader will find. */
	description: string;
	/** CSS custom property holding the accent colour. */
	accent: string;
}

export const AUDIENCES: Audience[] = [
	{
		id: "young-people",
		title: "You are a child or young person",
		href: "/children-young-people/",
		description:
			"What a virtual school is, what your PEP means, and who you can talk to if you need help.",
		accent: "var(--rvs-audience-young)",
	},
	{
		id: "parents-carers",
		title: "You are a parent, carer or kinship carer",
		href: "/parents-carers/",
		description:
			"How we support your child's education, what the PEP is, and how to ask for help.",
		accent: "var(--rvs-audience-parent)",
	},
	{
		id: "schools",
		title: "You work in a school",
		href: "/schools/",
		description:
			"Designated teacher guidance, PEP deadlines, Pupil Premium Plus, training and admissions.",
		accent: "var(--rvs-audience-school)",
	},
	{
		id: "social-workers",
		title: "You are a social worker",
		href: "/social-workers/",
		description:
			"Your part in the PEP, how to refer a child, and how we work together to improve outcomes.",
		accent: "var(--rvs-audience-social)",
	},
	{
		id: "professionals",
		title: "You are another professional",
		href: "/professionals/",
		description:
			"Information for health, early help, virtual partners and anyone supporting a child in care.",
		accent: "var(--rvs-audience-other)",
	},
];
