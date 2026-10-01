# SectionNav

Side navigation listing the pages in the current section, with the current page highlighted in the audience accent. Use on content pages that have siblings (Support programmes, Policies and guidance, About).

## Props
| Prop | Type | Notes |
|---|---|---|
| `title`, `titleHref` | string | the section's index page |
| `items` | `{label, href, current?, children?}[]` | one level of `children` at most |
| `audience` | audience id | accent for the current item |
| `label` | string | landmark name, default "Pages in <title>" |

## Usage
Left column on desktop (260px, see `rvs-sidebar-layout`), after the content on mobile so the page itself comes first. Current page has `aria-current="page"`. Keep labels the same as the pages' `h1`s.
