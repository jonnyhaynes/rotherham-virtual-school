# OnThisPage

A table of contents for long guidance pages: anchor links to each `h2`, optionally sticky, optionally tracking the section in view.

## Props
`items` (`{id, label}[]`, ids of the `h2`s), `heading` ('On this page'), `sticky` (false), `trackActive` (false — uses IntersectionObserver), `activeId`.

## Usage
Use on pages with four or more `h2` sections. Place it in the right column on desktop, above the content on mobile. The current section gets `aria-current="location"`.
