# Footer

The site footer on `navy`: reversed logo, support links (accessibility, privacy, cookies, contact), an optional partner slot and the copyright line.

## Props
| Prop | Type | Default | Notes |
|---|---|---|---|
| `links` | `{label, href}[]` | `[]` | keep to support pages |
| `partner` | node | — | the council attribution. Pass the official Rotherham Metropolitan Borough Council logo here as an `<img>` supplied by the council — it is **not** part of this system |
| `copyright` | string | `© <year> Rotherham Virtual School. All rights reserved.` | |
| `children` | node | — | an extra row (e.g. an Open Government Licence line) |

## Usage
Always link Accessibility statement, Privacy notice, Cookies and Contact us. Text is `text-inverse` on `navy` (14:1).

## GOV.UK
Replaces `govuk-footer` visuals; same structure.
