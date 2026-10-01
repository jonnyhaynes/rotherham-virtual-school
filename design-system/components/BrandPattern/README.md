# BrandPattern

The reusable abstract brand motif: a grid of quarter-circles, leaves and half-rounds in teal, yellow, coral and pale blue, generated as SVG so it scales crisply and recolours with the tokens.

## Props
`rows` (3), `cols` (8), `unit` (48 — tile size in px), `gap` (4), `seed` (any number: a different arrangement), `tones` (array from `'teal' | 'yellow' | 'coral' | 'pale' | 'navy'`), `height`, `width`.

## Usage
- Decorative only (`aria-hidden`). Use behind or beside content, never under text.
- Hero art when there's no illustration, video placeholders, feature media, section edges.
- One pattern area per screen. Restrict `tones` to one or two colours for quieter uses or an audience section.
The original artwork is in Assets → Brand pattern; this component is its code equivalent.
