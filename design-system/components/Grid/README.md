# Grid

A responsive auto-fill grid for cards, audience tiles and resources: columns appear as space allows, never narrower than `min`.

## Props
| Prop | Type | Default |
|---|---|---|
| `min` | CSS length | `'240px'` |
| `gap` | CSS length | `var(--space-5)` |
| `as` | `'div' \| 'ul'` | `'div'` |

Use `as="ul"` with `<li>` children when the cards are a list of links.
