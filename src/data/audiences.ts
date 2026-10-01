import { AUDIENCE_MARKS, type AudienceId, type AudienceMarkName } from "./brand";

// The five audiences the Virtual School serves. This is the backbone of the
// site's information architecture: the home page routes by audience, and every
// audience zone is themed with its own accent colour.
//
// Accents come from the Virtual School palette (see src/styles/_tokens.scss).
// They are used for card accent rules, marks and icons, never as a background
// for body text, so every pairing keeps WCAG 2.2 AA contrast against white.
// Each audience also has a distinct icon, so meaning is never carried by colour
// alone.

export interface Audience {
	/** Stable identifier, also used as the theme class suffix. */
	id: AudienceId;
	/** Card heading, phrased as the reader. */
	title: string;
	href: string;
	/** Short, plain-English promise of what the reader will find. */
	description: string;
	/** CSS custom property holding the accent colour. */
	accent: string;
	/** Icon from `brand/AudienceMark.astro`. */
	mark: AudienceMarkName;
}

export const AUDIENCES: Audience[] = [
	{
		id: "young-people",
		title: "You are a child or young person",
		href: "/children-young-people/",
		description:
			"What a virtual school is, what your PEP means, and who you can talk to if you need help.",
		accent: "var(--accent-young-people)",
		mark: AUDIENCE_MARKS["young-people"],
	},
	{
		id: "parents-carers",
		title: "You are a parent, carer or kinship carer",
		href: "/parents-carers/",
		description:
			"How we support your child's education, what the PEP is, and how to ask for help.",
		accent: "var(--accent-parents-carers)",
		mark: AUDIENCE_MARKS["parents-carers"],
	},
	{
		id: "schools",
		title: "You work in a school",
		href: "/schools/",
		description:
			"Designated teacher guidance, PEP deadlines, Pupil Premium Plus, training and admissions.",
		accent: "var(--accent-schools)",
		mark: AUDIENCE_MARKS.schools,
	},
	{
		id: "social-workers",
		title: "You are a social worker",
		href: "/social-workers/",
		description:
			"Your part in the PEP, how to refer a child, and how we work together to improve outcomes.",
		accent: "var(--accent-social-workers)",
		mark: AUDIENCE_MARKS["social-workers"],
	},
	{
		id: "professionals",
		title: "You are another professional",
		href: "/professionals/",
		description:
			"Information for health, early help, virtual partners and anyone supporting a child in care.",
		accent: "var(--accent-professionals)",
		mark: AUDIENCE_MARKS.professionals,
	},
];
