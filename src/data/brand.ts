/** The five audiences, as used by the audience mark registry. */
export type AudienceId =
	| "young-people"
	| "parents-carers"
	| "schools"
	| "social-workers"
	| "professionals";

/** The icon set available to `brand/AudienceMark.astro`. */
export type AudienceMarkName = "sun" | "people" | "building" | "conversation" | "network";

/**
 * One icon per audience. The icons are what makes the audience router
 * distinguishable without relying on colour alone — the accents are secondary.
 */
export const AUDIENCE_MARKS: Record<AudienceId, AudienceMarkName> = {
	"young-people": "sun",
	"parents-carers": "people",
	schools: "building",
	"social-workers": "conversation",
	professionals: "network",
};
