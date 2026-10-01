# Breadcrumbs

Shows where a page sits in the site; the last item is the current page and is not a link.

## Props
| Prop | Type | Notes |
|---|---|---|
| `items` | `{label, href?}[]` | last item without `href` gets `aria-current="page"` |
| `inverse` | boolean | on navy |

## Usage
Place above the page title inside `Hero` (pass `breadcrumbs` to Hero). Omit on the home page. Start with "Home".

## GOV.UK
Themes `govuk-breadcrumbs`.
