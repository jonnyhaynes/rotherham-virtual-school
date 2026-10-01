# ContactPanel

The Virtual School's address, phone and email, in a sidebar (`stacked`) or a full-width strip (`inline`, "Need advice?").

## Props
| Prop | Type | Default | Notes |
|---|---|---|---|
| `title` | string | `'Need to get in touch?'` | |
| `address` | string \| string[] | — | one line per array item, rendered in `<address>` |
| `phone` | string | — | |
| `phoneHours` | string | — | only show hours that are published |
| `email` | string | — | |
| `contactHref` | string | — | link to the contact page |
| `variant` | `'stacked' \| 'inline'` | `'stacked'` | |

## Usage
Phone numbers are `tel:` links, email `mailto:`. The live details are: Virtual School Rotherham, Rockingham Professional Development Centre, Roughwood Road, Rotherham S61 4HY · 01709 334610 · virtualschool@rotherham.gov.uk. `stacked` sits on `pale-blue`; `inline` on `yellow-50` at the end of audience pages.
