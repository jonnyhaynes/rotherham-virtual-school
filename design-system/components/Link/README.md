# Link

The inline text link: teal-700 (`link`) underlined, thicker underline on hover, the system focus state on keyboard focus.

## Props
| Prop | Type | Default | Notes |
|---|---|---|---|
| `href` | string | — | required |
| `variant` | `'default' \| 'arrow' \| 'inverse' \| 'no-underline'` | `'default'` | `arrow` = the "Find out more →" call to action |
| `external` | boolean | `false` | opens in a new tab, adds the external icon and "(opens in new tab)" for screen readers |
| `current` | boolean | `false` | sets `aria-current="page"` |

## Usage
- Link text says where it goes — never "click here" or a bare URL.
- Use `arrow` once per card or panel, at the end.
- Mark links to other websites `external` only when they open a new tab; prefer same-tab.
- `inverse` on navy; `link-visited` purple applies inside `Prose` body copy only.

## GOV.UK
Mirrors `govuk-link` (including `--inverse` and `--no-underline`) with the brand teal.
