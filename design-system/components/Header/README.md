# Header

The site masthead: reversed stacked logo on `navy`, audience navigation, and a search toggle. It collapses to a Menu button when its own width is under 860px (a container query, so it also adapts inside narrow layouts).

## Props
| Prop | Type | Default | Notes |
|---|---|---|---|
| `navigation` | `{label, href, active?}[]` | `[]` | 4–6 items; the active one gets a yellow underline and `aria-current="page"` |
| `search` | boolean | `true` | shows the search toggle and panel |
| `searchOpen` | boolean | `false` | initial state |
| `onSearch` | `(query) => void` | — | otherwise submits `GET /search?q=` |
| `searchAction` | string | `'/search'` | form action |
| `logoHref` | string | `'/'` | |

## Usage
- Put `SkipLink` immediately before it, and `id="main-content"` on `<main>`.
- Navigation items are audiences and "About us" — not every page. Use `QuickLinks` for depth.
- The header sits on `navy` with a 4px `teal` base rule. Never place the full-colour (non-reversed) logo on navy.

## Accessibility
Menu and search toggles are buttons with `aria-expanded` and `aria-controls`; the nav is a labelled landmark; targets are at least 44px.

## GOV.UK
Replaces `govuk-header` + `govuk-service-navigation` with the brand's navy bar; keeps their behaviour.
