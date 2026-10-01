# Site map

The redesign follows the prototype repository (github.com/jonnyhaynes/rotherham-virtual-school — Astro + EmDash), not the current live site, which is out of date. Routes and copy come from the prototype; pages marked **client request** come from the Virtual School workshop (see Client requirements) and aren't in the prototype yet.

Navigation is the five audiences, as in the prototype's `primary` menu: **Young people** (teal, Pupil Zone), **Parents and carers** (coral), **Schools** (yellow), **Social workers** (purple), **Professionals** (navy). Cross-cutting pages live in the footer.

| Page | Route | Template | Source |
|---|---|---|---|
| Home | `/` | Template: Home | prototype |
| Children and young people (Pupil Zone) | `/children-young-people/` | Template: Pupil Zone | prototype |
| Going to college or work | `/children-young-people/college-and-work/` | Template: Post-16 | client request |
| Parents and carers | `/parents-carers/` | Template: Audience page | prototype |
| Schools and designated teachers | `/schools/` | Template: Audience page | prototype |
| How to complete a PEP (and other how-to guides) | `/schools/how-to-complete-a-pep/` | Template: How-to guide | client request |
| Social workers | `/social-workers/` | Template: Audience page | prototype |
| Other professionals | `/professionals/` | Template: Audience page | prototype |
| Starting school and moving on | `/phases/` | Template: Phases | client request |
| About us | `/about/` | Template: About | prototype |
| Our team | `/our-team/` | Template: Our team | prototype |
| Training and events | `/training-events/` | Template: Training and events | prototype |
| Training event | `/training-events/[slug]` | Template: Event detail | prototype |
| News | `/news/` | Template: News | prototype |
| News article | `/news/[slug]` | Template: News article | prototype |
| Documents | `/documents/` | Template: Documents | prototype |
| Outcomes | `/reports/` | Template: Outcomes | prototype (placeholder figures) |
| Words we use | `/words-we-use/` | Template: Words we use | client request |
| Useful links | `/useful-links/` | Template: Useful links | client request |
| Contact us | `/contact/` | Template: Contact | prototype |
| Accessibility statement | `/accessibility-statement/` | Template: Legal and long-form | prototype (draft) |
| Privacy and cookies | `/privacy-cookies/` | Template: Legal and long-form | prototype (draft) |
| Any CMS page (e.g. Complaints and compliments) | `/[slug]` | Template: Content page | prototype |
| Search | `/search/` | Template: Search | prototype |
| Page not found | 404 | Template: Error page | prototype |
| Sign in (optional) | `/sign-in/` | Template: Sign in | client request, only if commissioned |
| Ask for help (multi-step form, optional) | — | Template: Multi-step form | pattern for future forms |

## Redirects from the live site

The prototype's seed already redirects the live site's main URLs: `/about-1` → `/about/`, `/vision-statement/vision/1` → `/about/`, `/contact-2/contact/1` → `/contact/`, `/policies-procedures/policies/1` → `/documents/`, `/about-1/accessibility-statement/1` → `/accessibility-statement/`. Also add: `/support/*` → `/schools/` (or a new support page if kept), `/professionals` (the live "Resources" page) → `/documents/`, `/account/signin` and `/register` → `/` unless a login is commissioned.

## Decisions to confirm with the Virtual School

- **Contact details.** The prototype gives email and Riverside House, Main Street, Rotherham S60 1AE, with no phone number. The live site gives Rockingham Professional Development Centre and 01709 334610. This system follows the prototype.
- **Visual identity.** The prototype themes GOV.UK with Rotherham Council's palette (navy #002554, Mulish) and different audience colours (purple, navy, blue, maroon, grey). This system replaces that with the Virtual School's own brand (the brand board): see the brand book. Swap the prototype's `_tokens.scss` for this system's tokens.
- **Outcome figures** in the prototype are invented placeholders.
- **Quotes and stories** must be real and used with consent.
- **Shine** link and the list of IFAs need supplying.
- **Council logo.** The prototype includes `public/brand/rmbc-logo-white.svg` — use it in the Footer `partner` slot, with the council's permission.
