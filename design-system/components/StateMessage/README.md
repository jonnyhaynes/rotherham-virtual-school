# StateMessage

The empty, error, loading and success states for any dynamic region — lists, search, filters, dashboards.

## Props
| Prop | Type | Notes |
|---|---|---|
| `state` | `'empty' \| 'error' \| 'loading' \| 'success' \| 'info'` | |
| `title` | string | |
| `children` | node | explanation and next step |
| `action` | node | e.g. "Try again" |
| `skeleton` | number | loading placeholder rows instead of a spinner |
| `compact`, `icon` | | |

## Usage
- **Empty**: say what's empty and what to try — never just "No results".
- **Error**: say it's our problem, what to do, and offer a retry. Role `alert`.
- **Loading**: spinner for short waits, skeleton for lists. Role `status`; motion slows under reduced-motion.
