# Table

Tabular data with a caption, row headers, numeric alignment and a scrollable wrapper for narrow screens. The `comparison` variant compares options with tick/dash cells (screen readers hear "Yes"/"No").

## Props
`caption`, `columns` (`{key, label, numeric?}[]`), `rows` (objects keyed by column; `true`/`false` become tick/dash), `variant` (`'default' | 'comparison'`), `striped`, `firstColumnHeader` (true).

## Usage
Always caption tables. Never use tables for layout. The wrapper is a focusable, labelled region so keyboard users can scroll it.

## GOV.UK
Themes `govuk-table`.
