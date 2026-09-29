/** Resolved media reference from EmDash's getSiteSettings() */
export interface MediaReference {
	mediaId: string;
	alt?: string;
	url?: string;
}

export interface SiteIdentitySettings {
	title?: string;
	tagline?: string;
	logo?: MediaReference;
	favicon?: MediaReference;
}

export const SITE_DEFAULTS = {
	title: "Rotherham Virtual School",
	tagline:
		"Champions for the education of children in care and care leavers in Rotherham",
	/** Short name used in the header lock-up. */
	shortName: "Virtual School",
	/** Parent organisation, shown in the header and footer. */
	organisation: "Rotherham Metropolitan Borough Council",
	email: "virtualschool@rotherham.gov.uk",
} as const;

export function resolveSiteIdentity(settings?: SiteIdentitySettings) {
	return {
		siteTitle: settings?.title || SITE_DEFAULTS.title,
		siteTagline: settings?.tagline || SITE_DEFAULTS.tagline,
		siteLogo: settings?.logo?.url ? settings.logo : null,
	};
}
