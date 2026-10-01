# ChoiceGroup

A fieldset of radios (one answer) or checkboxes (any answers) with legend, hint, error, per-option hints, dividers, inline and small sizes. Also the building block of questionnaires and cookie settings.

## Props
| Prop | Type | Default |
|---|---|---|
| `type` | `'radio' \| 'checkbox'` | `'radio'` |
| `legend` | string | — |
| `legendSize` | `'m' \| 'l'` | — | `l` renders the legend as the page `h1` (one question per page) |
| `options` | `{value, label, hint?, disabled?}[]` or `{divider: 'or'}` | — |
| `value` / `defaultValue` / `onChange` | string \| string[] | — |
| `hint`, `error`, `inline`, `size ('small')`, `name` | | |

## Usage
40px targets by default; `small` only in dense filters. Put "None of these" after an `or` divider.

## GOV.UK
Themes `govuk-radios` and `govuk-checkboxes` (sizes and markup preserved).
