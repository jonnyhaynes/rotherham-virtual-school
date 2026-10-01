# Logo

Renders the Rotherham Virtual School logo from the Logos asset group, in full colour on light grounds or reversed on navy.

## Props
| Prop | Type | Default | Notes |
|---|---|---|---|
| `variant` | `'primary' \| 'stacked' \| 'horizontal' \| 'mark' \| 'one-colour' \| 'app-icon'` | `'stacked'` | |
| `reversed` | boolean | `false` | white wordmark and road, for `navy` |
| `height` | number (px) | 48 | width follows the aspect ratio |
| `href` | string | — | wraps in a home link |
| `alt` | string | 'Rotherham Virtual School' | `''` when the name is next to it in text |
| `src`, `assetBase` | string | — | override when hosting the files elsewhere |

## Variants
- **primary** — mark, name and "Every child. Every possibility." Hero moments, print, the About page.
- **stacked** — mark and name, no strapline. Header and footer (reversed).
- **horizontal** — single-line lockup with strapline. Letterheads, email signatures, narrow bands.
- **mark** — the sun, figures and road alone, when the name is already on screen.
- **one-colour** — navy (or white) only, for single-colour print and embossing.
- **app-icon** — the mark on a navy rounded square: favicons and social avatars.

## Rules
Minimum height 32px (mark 24px). Clear space around the logo at least the height of the sun. Never recolour, stretch, outline or place the full-colour logo on navy or a busy image.
