# Prose

Typography for rich text from the CMS — headings, paragraphs, lists, links (with visited state), blockquotes — capped at the reading `measure` (38em).

## Props
`html` (a trusted, sanitised HTML string) or `children`.

## Usage
Wrap every CMS body field in `Prose`. Use `<p class="lead">` once, first. Use `h2` for sections and `h3` below — never skip levels. Accessibility statements, privacy notices and cookie pages are plain `Prose` pages; they need no special component.
