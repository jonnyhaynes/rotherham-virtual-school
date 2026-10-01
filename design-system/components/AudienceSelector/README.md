# AudienceSelector

Routes people to the section written for them. The site is organised around five audiences, each with its own accent colour.

## Props
| Prop | Type | Default | Notes |
|---|---|---|---|
| `audiences` | `{id: 'young-people'\|'parents-carers'\|'schools'\|'social-workers'\|'professionals', label, description?, href, icon?}[]` | — | |
| `variant` | `'cards' \| 'pills'` | `'cards'` | pills: compact switcher at the top of shared pages |
| `current` | audience id | — | marks `aria-current="page"` |
| `heading` / `headingLevel` | string / number | — / 2 | |
| `label` | string | `'Who is this for?'` | nav landmark name |

## Audience accents
| Audience | id | Graphic | Text | Ground | Icon |
|---|---|---|---|---|---|
| Children and young people | `young-people` | `accent-young-people` (teal) | `accent-young-people-text` | `accent-young-people-soft` | user |
| Parents and carers | `parents-carers` | `accent-parents-carers` (coral) | `accent-parents-carers-text` | `accent-parents-carers-soft` | users |
| Schools | `schools` | `accent-schools` (yellow) | `accent-schools-text` | `accent-schools-soft` | school |
| Social workers | `social-workers` | `accent-social-workers` (purple) | `accent-social-workers-text` | `accent-social-workers-soft` | clipboard |
| Professionals | `professionals` | `accent-professionals` (navy) | navy | pale-blue | briefcase |

Set `data-audience="<id>"` on any container to apply the accent to the components inside it. Accents mark a section; the words always carry the meaning.
