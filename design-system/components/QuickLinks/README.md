# QuickLinks

A short, titled list of links. Covers quick links, related content, related guidance, statutory guidance, popular content and recently updated content — they differ only in heading and data.

## Props
| Prop | Type | Default | Notes |
|---|---|---|---|
| `heading` | string | — | "Related guidance", "Popular pages", "Recently updated" |
| `links` | `{label, href, icon?, meta?, external?}[]` | `[]` | `meta`: "Updated 22 September 2026"; `external`: other websites (icon + "opens in new tab") |
| `variant` | `'default' \| 'panel'` | `'default'` | panel: pale-blue box for sidebars |
| `columns` | number | — | CSS columns for long lists |
| `emptyText` | string | `'Nothing to show yet.'` | shown when `links` is empty |

## Usage
3–7 links. Popular/recent lists come from analytics or the CMS — sort by date for "Recently updated" and always show the date in `meta`. Group GOV.UK statutory guidance under its own heading and mark it `external`.
