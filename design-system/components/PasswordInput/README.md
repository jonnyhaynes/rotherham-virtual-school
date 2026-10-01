# PasswordInput

A password field with a Show/Hide toggle, announced to screen readers ("Your password is visible").

## Props
`label`, `hint`, `error`, `autoComplete` (`'current-password'` to sign in, `'new-password'` to register), `id`, `name`, `value`/`defaultValue`, `onChange`, `disabled`.

## Usage
With Show/Hide there's no need for a "confirm password" field. Don't block paste. Set the minimum, not a maximum — the live register form's "6–30 characters" rule should become "8 or more" (NCSC guidance).

## GOV.UK
Mirrors the GOV.UK password input component.
