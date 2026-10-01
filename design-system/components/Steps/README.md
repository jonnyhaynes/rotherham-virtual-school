# Steps

An ordered sequence someone follows or moves through. `vertical` is the PEP process and any support pathway; `journey` is the learning journey and education milestones, horizontal on wide containers and vertical under 560px.

## Props
| Prop | Type | Default | Notes |
|---|---|---|---|
| `steps` | `{title, label?, text?, items?: string[], href?, linkLabel?, icon?}[]` | — | |
| `variant` | `'vertical' \| 'journey'` | `'vertical'` | |
| `current` | number (1-based) | — | marks done / current (`aria-current="step"`) / upcoming |
| `heading`, `intro`, `headingLevel` | | | |

## Usage
- **PEP process**: three steps — before, during, after — each with 2–4 bullets written to the audience ("you").
- **Support pathway**: steps with `href` to each service, in the order someone would use them.
- **Learning journey / milestones**: `journey` with an age `label` per stage; set `current` for a personalised view.
Numbers are teal-700 discs with white numerals (6.3:1); the connector is brand `teal`. Screen readers hear "Step 1: Before the meeting".

## GOV.UK
A simplified sibling of the step-by-step navigation pattern — use that pattern if steps need expandable detail.
