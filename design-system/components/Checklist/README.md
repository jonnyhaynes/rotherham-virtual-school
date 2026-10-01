# Checklist

A list of things to do or bring, either interactive (checkboxes with "2 of 4 done" and a progress bar) or static (ticked list of requirements).

## Props
`items` (`{id, label, hint?, done?}[]`), `heading` ('Checklist'), `interactive` (true), `onChange(doneMap)`, `headingLevel`.

## Usage
Interactive checklists are a personal aid and don't submit — say so if people might expect them to save. Use `interactive={false}` for eligibility and "what you'll need" lists.
