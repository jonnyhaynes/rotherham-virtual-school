# ErrorSummary

Lists every error at the top of a form after submission, each linking to its field. Takes focus when it appears.

## Props
`errors` (`{href: '#field-id', text}[]`; renders nothing when empty), `title` ('There is a problem'), `autoFocus` (true).

## Usage
Show with field-level `error` messages using the same wording. Prefix the page `<title>` with "Error: ".

## GOV.UK
Themes `govuk-error-summary`.
