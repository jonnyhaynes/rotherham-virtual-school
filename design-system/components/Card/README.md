# Card

A self-contained block that links to one destination: icon, title, one-line description, optional metadata and "Find out more". The whole card is clickable (the title link stretches over it), with one link in the accessibility tree.

## Props
| Prop | Type | Default | Notes |
|---|---|---|---|
| `title` | string | — | required |
| `href` | string | — | makes the whole card clickable |
| `text` | string | — | one sentence |
| `icon` / `iconTone` | icon name / `'teal'\|'yellow'\|'coral'\|'navy'\|'pale'` | — / `'teal'` | badge on outlined cards, plain glyph on tinted |
| `variant` | `'outlined' \| 'tinted' \| 'plain'` | `'outlined'` | tinted: value/feature boxes, uses the audience `-soft` tint |
| `audience` | audience id | — | tints `tinted` cards |
| `tag` | node | — | a `Tag` above the title |
| `meta` | string | — | e.g. "Updated 12 September 2026" |
| `image` | `{src, alt}` | — | 16:9 media on top (editorial lists) |
| `external` | boolean | `false` | links to another website: opens in a new tab, external icon, "Visit website" |
| `linkLabel` | string \| `false` | `'Find out more'` | visual only; `false` hides it |
| `headingLevel` | 2–6 | 3 | match the page outline |

## Usage
- Put cards in a `Grid`. Keep a row's cards the same variant.
- Title in `navy`/`link`, description in `text-secondary` (7:1).
- Don't put more than one link or a button inside a clickable card.
- Tinted cards are for statements that don't link ("Your voice matters"); outlined cards are for navigation.

## States
Hover: teal-700 border and thicker title underline; focus: the focus colour ring around the whole card.
