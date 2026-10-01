# Pagination

Numbered pagination for result lists, or previous/next links between the pages of a multi-page guide.

## Props
`page`, `total`, `hrefFor(page)` (default `?page=n`), `onChange(page)`, `variant` (`'numbered' | 'prev-next'`), `prev`/`next` (`{href, label}`, prev-next only), `label` ('Results pages').

## Usage
Numbered shows first, last and neighbours with ellipses. Hidden when `total` is 1. The current page has `aria-current="page"`.

## GOV.UK
Themes `govuk-pagination` (both forms).
