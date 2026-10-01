# Panel

A tinted or ruled container for a message that sits apart from the body text. Covers the PEP information panel, "If something isn't going right", advice and eligibility boxes, GOV.UK inset text and warning text.

## Props
| Prop | Type | Default | Notes |
|---|---|---|---|
| `tone` | `'info' \| 'pep' \| 'help' \| 'advice' \| 'neutral' \| 'warning'` | `'info'` | |
| `title` | string | — | |
| `icon` | icon name \| `null` | per tone | `null` removes it |
| `actions` | node | — | a `Link variant="arrow"` or `Button` |
| `headingLevel` | 2–6 | 2 | |
| `label` | string | — | accessible name when there's no title |

## Tones
- **info / pep** — `pale-blue` ground, teal icon. Key explanations, "Your role in the PEP".
- **help** — no ground, `coral` alert disc. Reassurance and routes to help. Always include a way to get help.
- **advice** — `yellow-50` ground. Tips, eligibility, "Need advice?".
- **neutral** — GOV.UK inset text (10px `border` rule). Asides.
- **warning** — navy "!" disc, bold text, hidden "Warning:" prefix. Legal or deadline consequences only.

## GOV.UK
`neutral` = `govuk-inset-text`; `warning` = `govuk-warning-text`.
