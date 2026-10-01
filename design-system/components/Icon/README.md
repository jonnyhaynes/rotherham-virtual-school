# Icon

The system's line icon set: 24px grid, 2px round strokes, drawn in `currentColor` so it takes the text colour it sits in.

## Props
`name` (see the grid), `size` (24), `strokeWidth` (2), `title` (makes the icon meaningful: role `img` with a title; otherwise it is hidden from assistive technology), `className`.

## Usage
- Icons support words; they don't replace them. A button with only an icon needs a visually hidden label.
- Colour icons with the text tokens: `navy`, `teal-700`, `coral-700`, or `text-inverse` on dark grounds. Brand `teal`, `yellow` and `coral` are fine for icons at 24px+ on white only where they aren't the only cue (3:1 non-text).
- Put a coloured disc behind an icon with `IconBadge`.
- Sizes: 18–20px inline with text, 24px in controls, 32–40px in cards and signposts.
