# FilterPanel

Filter and sort controls for search results, resource collections and event listings: a sort select and collapsible checkbox groups with counts and "Clear filters".

## Props
| Prop | Type | Notes |
|---|---|---|
| `groups` | `{id, legend, open?, options: {value, label, count?}[]}[]` | |
| `selected` / `defaultSelected` | `{[groupId]: string[]}` | controlled / uncontrolled |
| `onChange` | (selected) => void | |
| `sortOptions`, `sort`, `onSortChange` | | omit to hide sorting |
| `heading` | string | 'Filter' |

## Usage
Apply filters as they change and announce the new result count (SearchResults does this). Without JavaScript, wrap in a `<form method="get">` with an "Apply filters" button. On mobile, place above results; groups collapse.
