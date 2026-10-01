# SearchResults

The result count, a list of results (type, title, summary, updated date) and the empty, loading and error states.

## Props
| Prop | Type | Notes |
|---|---|---|
| `query` | string | echoed in the count |
| `results` | `{title, href, summary?, type?, updated?}[]` | |
| `total` | number | when paginated |
| `loading` | boolean | skeleton rows |
| `error` | boolean | error `StateMessage` with `onRetry` |
| `onRetry` | () => void | |
| `emptyText` | node | replaces the default advice |

## Usage
Pair with `SearchInput` (large), `FilterPanel` and `Pagination` — see the Search template. The count is a live region so filter changes are announced.
