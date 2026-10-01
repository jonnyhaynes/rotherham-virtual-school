# Dialog

An accessible modal: focus moves in and is trapped, Escape and the close button dismiss it, focus returns to the trigger.

## Props
`open`, `onClose`, `title` (required — labels the dialog), `children`, `actions`, `size` (`'sm' | 'md' | 'lg'`), `alert` (role `alertdialog` for destructive confirmations), `dismissible` (backdrop click, true), `inline` (positions inside a relative container — previews only).

## Usage
Use sparingly: confirming a destructive action, a session timeout warning. Never for content people need to read or for forms. Mark the safest action with `data-autofocus`.
