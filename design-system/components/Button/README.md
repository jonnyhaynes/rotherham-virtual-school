# Button

Use a button for an action — submit, save, start, open — and a link for navigation; Button renders an `<a role="button">` only when given `href` for "Start now"-style calls to action.

## Props
| Prop | Type | Default | Notes |
|---|---|---|---|
| `variant` | `'primary' \| 'secondary' \| 'secondary-dark' \| 'warning' \| 'inverse' \| 'tertiary'` | `'primary'` | |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | `lg` for a single start action only |
| `icon` | icon name | — | `arrow-right` for forward actions |
| `iconPosition` | `'start' \| 'end'` | `'end'` | |
| `href` | string | — | renders a link styled as a button |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | |
| `loading` | boolean | `false` | shows a spinner, sets `aria-disabled`, keeps the label |
| `disabled` | boolean | `false` | avoid — prefer validation messages |
| `fullWidth` | boolean | `false` | mobile forms |

`ButtonGroup` lays buttons and links out in a wrapping row with the right gaps.

## Usage
- **Primary** (`teal-700` fill, `text-inverse` label, 6.3:1) once per view, for the thing the page is for.
- **Secondary** for alternatives beside a primary. **Secondary-dark** (navy) for compact contact actions on tinted panels.
- **Inverse** only on `navy` grounds (CTA banners, hero on dark).
- **Warning** (`error`) only for destructive actions, and only on a confirmation step.
- **Tertiary** for page utilities (print, copy) — it looks like a link but behaves as a button.
- Labels: verb first, sentence case, no full stop — "Find out about your PEP", not "Click here".
- Never fill a button with brand `teal` behind white text: 3.0:1 fails.

## States
Hover darkens (`teal-800`); keyboard focus is the system focus state (`focus` fill, `focus-text` bar); `loading` announces "Loading" to screen readers; `disabled` is 50% opacity and not focusable.

## GOV.UK
Themes `govuk-button` (primary, secondary, warning, start button with arrow). Adds a 4px radius (`radius-sm`) and drops the bottom shadow to match the brand's flat style.
