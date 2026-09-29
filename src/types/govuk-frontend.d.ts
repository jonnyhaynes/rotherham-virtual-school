// govuk-frontend ships no type declarations, so declare the surface we use.
// https://frontend.design-system.service.gov.uk/javascript-api-reference/
declare module "govuk-frontend" {
	export interface InitAllOptions {
		/** Scope to initialise components within. Defaults to the whole document. */
		scope?: Element | Document;
		/** Enable configurable components defined in markup. Defaults to every component. */
		enableAllComponents?: boolean;
	}

	export function initAll(options?: InitAllOptions): void;
}
