# Hero

The top of a landing or content page: breadcrumbs, audience eyebrow, `h1`, lead paragraph, one or two actions, and an illustration from the Illustrations asset group.

## Props
| Prop | Type | Default | Notes |
|---|---|---|---|
| `title` | string | — | the page `h1` |
| `eyebrow` | string | — | audience label, e.g. "For carers" |
| `lead` | string | — | one or two sentences |
| `actions` | node | — | usually one primary `Button` |
| `illustration` | `{name?: 'home'\|'children'\|'parents-carers'\|'schools', src?, alt?}` | — | decorative: leave `alt` empty |
| `audience` | `'young-people' \| 'parents-carers' \| 'schools' \| 'professionals'` | — | colours the eyebrow (`accent-*-text`) |
| `breadcrumbs` | `{label, href?}[]` | — | |
| `variant` | `'default' \| 'home' \| 'compact'` | `'default'` | `home`: pale-blue ground and hills divider; `compact`: content pages, smaller title, no art |

## Responsive
Two columns above 700px of its own width; below, the illustration moves above the text and the title steps down to 32px. Without an illustration, default/home variants show a `BrandPattern` block that hides on mobile.

## Usage
One hero per page. Keep titles to ~8 words. Illustrations are decorative — the title and lead carry the meaning.
