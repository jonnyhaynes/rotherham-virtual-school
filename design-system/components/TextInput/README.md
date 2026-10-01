# TextInput

A labelled text field with optional hint, error message, fixed widths, prefix/suffix and a multi-line (textarea) mode.

## Props
| Prop | Type | Notes |
|---|---|---|
| `label` | string | required, always visible |
| `hint` | string | linked by `aria-describedby` |
| `error` | string | red rule, message, `aria-invalid` |
| `type`, `inputMode`, `autoComplete`, `spellCheck` | | set `autoComplete` for personal data |
| `width` | `'20' \| '10' \| '5' \| '4' \| '2'` | characters, to hint the expected length |
| `multiline`, `rows` | | textarea |
| `prefix`, `suffix` | string | e.g. "£" |
| `optional`, `required`, `disabled` | boolean | label "(optional)" rather than marking required fields |
| `id`, `name`, `value`/`defaultValue`, `onChange`, `placeholder` | | |

## Usage
Error messages say what to do ("Enter an email address in the correct format"). Inputs keep square corners and a 2px `border-strong` border (5.1:1), as GOV.UK.

## GOV.UK
Themes `govuk-input`, `govuk-textarea`, `govuk-hint`, `govuk-error-message`.
