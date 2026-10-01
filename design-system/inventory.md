# Component inventory

The extended component list was treated as an inventory, not a build list. Each item is either **built** as a component, **covered** by a variant or composition of one, **themed GOV.UK** (use GOV.UK Frontend with these tokens), or **deferred** until real content needs it. Add a component only when two or more pages need it and no existing component, variant or GOV.UK component fits.

## Core (built)
Button (+ ButtonGroup), Link, Tag, Header, Footer, Breadcrumbs, Hero, Grid, Card, Signpost, Panel, ContactPanel, Prose.

## Navigation and discovery
| Item | Decision |
|---|---|
| Audience selector | **AudienceSelector** (cards, pills) |
| Quick links | **QuickLinks** |
| Related content, related guidance | QuickLinks with a "Related…" heading, or a Grid of Cards |
| On-page navigation / table of contents | **OnThisPage** |
| Section (sibling page) navigation | **SectionNav** — added for the live site's Support, Guidance and About sections |
| Search interface | **SearchInput** (+ Header search) |
| Search results | **SearchResults** |
| Search filters, sort controls, filter controls | **FilterPanel** |
| Pagination | **Pagination** (numbered, prev-next) |
| Recently updated, popular content | QuickLinks with `meta` dates / analytics order |
| Back-to-top control | **BackToTop** |
| Alphabetical index | **AzIndex** |
| Glossary / acronyms (client: "idiot's guide to lingo") | **Glossary** + inline **Term** |

## Content presentation
| Item | Decision |
|---|---|
| Quote / testimonial | **Quote** |
| Statistics panel | **StatsPanel** |
| Timeline | **Timeline** |
| Comparison table | **Table** `variant="comparison"` |
| Editorial feature | **EditorialFeature** |
| Lead paragraph | `lead` type style (Prose `.lead`, Hero `lead`) |
| Key facts panel, definition list | **KeyFacts** (panel, list) |
| Publication metadata, last reviewed date, content update notice, document metadata | **ContentMeta** |
| Video embed | **VideoEmbed** (consent-first) |
| Location map | **MapEmbed** (consent-first) — added for the Contact page |
| Related guidance | QuickLinks or DocumentLink list |
| Image gallery | *Deferred* — no gallery content today; photos of children in care are not used |
| Author / contributor profile, team profiles (client: "meet the team — biography and photos") | **TeamProfile** |
| "What is a…?" visual explainers (client: "less words, more diagrams") | **Explainer** |
| Before and after comparison | *Deferred* — use Table comparison or two Cards until a real case needs it |

## Education-specific patterns
| Item | Decision |
|---|---|
| PEP process, support pathway | **Steps** `variant="vertical"` |
| Learning journey, education milestones | **Steps** `variant="journey"` with `current` |
| PEP information panel | **Panel** `tone="pep"` |
| Student voice panel | **Quote** `variant="student-voice"` |
| Children's section (Pupil Zone) | `data-zone="pupil"` + **PupilCard** |
| Support checklist | **Checklist** |
| Key dates | **KeyDates** |
| Eligibility information | KeyFacts + Panel `tone="advice"`, Checklist `interactive={false}` |
| Training event card, event listing | **EventCard** in a Grid with FilterPanel |
| Case study | **EditorialFeature** `variant="case-study"` |
| Resource collection, guidance document | **DocumentLink** in a Grid or stack |
| Advice and signposting panel | Panel `tone="help"`/`"advice"`, Signpost, ContactPanel |

## Interactive patterns
| Item | Decision |
|---|---|
| Tabs | **Tabs** |
| Multi-step forms, questionnaire, step-by-step wizard | Composition: ProgressIndicator + ChoiceGroup/TextInput + ErrorSummary + ConfirmationPanel — see the Multi-step form template |
| Form fields | **TextInput**, **PasswordInput**, **Select**, **ChoiceGroup** (themed GOV.UK markup) |
| Account pages (sign in, register, forgotten password) | Sign in and Register templates |
| Accessible modal / dialog | **Dialog** |
| Selectable cards | **SelectableCard** |
| Progress indicator | **ProgressIndicator** |
| Confirmation, success states | **ConfirmationPanel**, NotificationBanner `success`, StateMessage `success` |
| Loading, empty, error states | **StateMessage** (spinner, skeleton), ErrorSummary for forms |
| Copy-to-clipboard, share and print | **PageActions** |
| Page feedback ("Is this page useful?") | **PageFeedback** — matches the prototype |
| Date input, character count, file upload, summary list actions | *Themed GOV.UK* — use GOV.UK Frontend; tokens already match |

## Branding and visual language
| Item | Decision |
|---|---|
| Reusable abstract brand patterns, decorative backgrounds | **BrandPattern** |
| Branded section dividers | **SectionDivider** (hills, pattern, rule) |
| Icon system | **Icon** (54 glyphs) |
| Icon badges | **IconBadge** |
| Illustration containers | **Illustration** |
| Audience-specific colour accents | `accent-*` tokens + `data-audience` — five audiences, purple added for social workers |
| Branded CTA banners, branded page endings | **CtaBanner** (brand, navy, ending) |
| Branded notification banners | **NotificationBanner** |
| Logo | **Logo** |

## Utility
| Item | Decision |
|---|---|
| Skip link | **SkipLink** |
| Cookie consent | **CookieBanner** |
| Cookie settings | Prose page + ChoiceGroup + Button + NotificationBanner `success` |
| Accessibility statement, privacy notice | Prose pages with ContentMeta |
| Emergency announcement, service status, maintenance notice | NotificationBanner `emergency` / `status` / `maintenance` |
| Branded error pages | Error page template |
| External link indicator | Link `external` |
| Exit this page | *Consider* — GOV.UK's "Exit this page" if the site adds sensitive self-referral content for young people |
