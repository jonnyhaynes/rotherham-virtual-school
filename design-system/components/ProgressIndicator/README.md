# ProgressIndicator

Shows where someone is in a multi-step form or wizard: labelled steps, or a compact "Step 3 of 5" bar.

## Props
`steps` (labels), `current` (1-based), `total` (bar variant), `stepLabel`, `variant` (`'steps' | 'bar'`).

## Usage
Only for journeys with a fixed number of steps; for branching questionnaires use the `bar` with an honest total or omit it. Steps are not links. Under 520px only the current label shows.
