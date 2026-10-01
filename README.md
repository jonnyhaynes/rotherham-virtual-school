# Rotherham Virtual School — website

> ## ⚠️ This is a prototype, not a live website
>
> This repository is an **exploratory prototype / demonstration build**. It is **not** the live
> website of Rotherham Virtual School, and it is **not affiliated with, commissioned by or endorsed
> by** Rotherham Metropolitan Borough Council or Rotherham Virtual School.
>
> Nothing here is production-ready: the content was written for demonstration purposes, the
> statistics on the outcomes page are **invented placeholder figures** rather than real data, and
> some details are known to be unverified or unresolved (see [Outstanding items](#outstanding-items)).
>
> Do not deploy this as the Virtual School's real website without the council's involvement and
> consent.

A prototype rebuild of the Rotherham Virtual School website, exploring how an accessible,
GOV.UK-informed service site could work for a local authority virtual school — arranged around the
audiences it serves rather than a flat set of links.

The current live site is a single page with four links. This prototype proposes an audience-first
information architecture and a content-managed build.

- **Framework:** Astro 7 (server output) + TypeScript
- **CMS:** [EmDash](https://emdashcms.com) — Astro-native, database-backed, with an admin UI
- **Design system:** GOV.UK Design System (`govuk-frontend`) for structure and accessibility, with a
  Virtual School brand layer on top (palette, mark, components)
- **Styling:** SCSS with design tokens exposed as CSS custom properties
- **Hosting:** Vercel (`@astrojs/vercel`), with libSQL/Turso for content and S3-compatible storage
  for media

## Design approach

Four layers:

1. **GOV.UK structure** — skip link, header, service navigation, breadcrumbs, buttons, inset and
   warning text, details, summary lists, tables. This buys WCAG 2.2 AA compliance for free.
2. **The Virtual School brand** — its own palette, mark and type, sitting alongside GOV.UK rather
   than recolouring it. See [Brand and design system](#brand-and-design-system).
3. **Reusable components** — a token-driven component library (`src/components/ui`,
   `src/components/content`, `src/components/nav`) that every page composes from.
4. **The Virtual School twist** — an audience router, a distinct **Pupil Zone** sub-brand written
   for children, a plain-English outcomes page, and inline glossary definitions of jargon.

### Brand and design system

The brand is defined in **[`design-system/`](design-system/)** — a design-system artifact authored
separately (brand book, token file, component specs, a React reference implementation and page
templates). **That folder is the source of truth for the visual language**; this repository
implements it.

Where it is implemented:

| Layer | Where | Notes |
|---|---|---|
| Tokens | `src/styles/_tokens.scss` | Generated from `design-system/tokens.json`. Token names are the design system's (`--navy`, `--teal-700`, `--space-4`, …). |
| GOV.UK theming | `src/styles/main.scss` | GOV.UK Frontend is configured from the same tokens, so `.govuk-*` and `.rvs-*` share one palette, one type family and one 1140px grid. |
| Component styles | `src/styles/_design-system.scss` | Vendored verbatim from `design-system/components/bundle.css`, minus the Google Fonts `@import` and the preview-only `.rvs-demo*` rules. Re-sync from the source file rather than editing rules in place. |
| Components | `src/components/ds/` | Astro ports of the reference implementations, keeping the prop names (`components/index.d.ts`), the class names and the markup/ARIA. |
| Assets | `public/assets/rvs/` | The logo and illustration PNG extracts, served from the path the design system expects. |
| Templates | `src/layouts/AudienceLanding.astro` | The audience landing pattern (`design-system/components/TemplateAudienceLanding`). |

- **Colour.** `navy` is the backbone (header, footer, headings, body). `teal`, `yellow` and `coral`
  are **graphic** colours — illustration, icon badges, pattern, accents — and none reaches 4.5:1
  with white, so they never carry text; their accessible partners are `teal-700` (6.3:1), `coral-700`
  and `yellow-800`. `success` is teal, off the red–green axis, so it never depends on telling red
  from green.
- **Type.** One family: **Noto Sans** (400/600/700), self-hosted from `public/fonts/`. The design
  system loads it from Google Fonts; this repository self-hosts it for the same privacy reason it
  self-hosted the previous face — a public-sector site should not send visitor IP addresses to
  Google to render its own text. A metric-matched fallback (measured, not guessed) means the swap
  does not reflow the page.
- **Audience accents.** `data-audience` on a container switches the accent tokens:
  children and young people → teal, carers → coral, schools → yellow, professionals → navy. Accents
  mark a section; words carry the meaning.
- **GOV.UK.** Components that `design-system/inventory.md` maps to GOV.UK Frontend are themed rather
  than reimplemented — buttons, forms, error summary, accordion, tabs, pagination, cookie banner,
  notification banner. Everything else is composed from `src/components/ds/`.
- **Accessibility floor.** GOV.UK's focus treatment, semantic markup, visible focus, 40–44px
  targets, reduced-motion support and the prototype safeguards are unchanged. Pages must work
  without JavaScript; the script only enhances (see the masthead, below).

#### Migration status

The design system arrived after the site was built, so it is being adopted page by page rather than
in one change.

- **On the design system:** the audience landing template and `/parents-carers/`.
- **Still on the earlier layer:** the other routes. They keep working because `_tokens.scss` carries
  a transitional block aliasing the older `--rvs-*` token names onto the design-system tokens, and
  because `BaseLayout` takes a `chrome` prop (`govuk` | `design-system`) to pick the masthead.
- **To finish:** move each remaining route onto `src/components/ds`, then delete the alias block in
  `src/styles/_tokens.scss` and the older components. The `/style-guide/` page documents the earlier
  layer and will need rebuilding against the design system.


### Navigation

The primary navigation is the **audience axis itself** — one short item per audience — matching how
peer virtual schools organise their sites (Achieving for Children, for example, navigates by
Schools, Parents and Carers, Social Workers and Pupils).

The cross-cutting destinations (news, training and events, documents) live in the footer rather than
the top bar. A service navigation that mixes audiences with content types is both harder to scan and
physically too wide: GOV.UK's navigation list is `display: flex; flex-wrap: wrap`, and its items carry
a 30px right margin at desktop, so seven long labels come to roughly 1130px against a 960px page.
Five short audience labels come to about 754px, which leaves enough headroom to stay on one line.

The menu is CMS-managed (`primary` in `seed/seed.json`), so editors can change it without a deploy.

Below the tablet breakpoint GOV.UK collapses the list behind a "Menu" button automatically — the JS
drives that from the presence of the toggle button and its `aria-controls`, so no extra wiring is
needed.

## Getting started

```bash
npm install
npm run dev
```

Visit <http://localhost:4321>. The admin UI is at
<http://localhost:4321/_emdash/admin> — the first visit runs EmDash's setup wizard.

Content lives in an EmDash database. Locally that is a SQLite-compatible file (`data.db`), created
and migrated on first run.

```bash
npm run seed      # apply the content model and starter content from seed/seed.json
npm run types     # regenerate emdash-env.d.ts from the seed
```

`npm run types` exists because `npx emdash types` talks to the HTTP API and needs an authenticated
admin session; this generates the types offline instead, so CI never needs credentials.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the Astro dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build |
| `npm run typecheck` | `astro check` — types and diagnostics across all `.astro` files |
| `npm run types` | Regenerate `emdash-env.d.ts` from the seed |
| `npm run seed` | Apply `seed/seed.json` to the database |

## Project structure

```
astro.config.mjs        Astro config: Vercel adapter, libSQL, S3/local storage, sessions
vercel.json             Prototype safeguard: X-Robots-Tag header on every route
seed/seed.json          Content model (collections, fields, menus, redirects) + starter content
scripts/env-types.mjs   Offline emdash-env.d.ts generation
design-system/          Design-system source of truth: brand book, tokens, component specs,
                        React reference bundle and page templates (see Brand and design system)
src/layouts/            BaseLayout, AudienceLanding
src/components/ds/      Design-system components ported to Astro (Header, Footer, Hero, Card, Panel, …)
src/components/         Site components: AudienceAside, OfstedRecognition, PrototypeNotice
src/pages/              Routes (see below)
src/styles/             Tokens, vendored design-system stylesheet, overrides
src/data/               audiences.ts (information architecture), brand.ts, ds-nav.ts
src/utils/              site.ts (site defaults and identity)
```

### Routes

```
/                              Home: hero, audience router, what we do, news, contact
/children-young-people/        Pupil Zone (separate sub-brand)
/parents-carers/               Parents and carers
/schools/                      Schools and designated teachers
/social-workers/               Social workers
/professionals/                Other professionals
/our-team/                     Team roles and remits
/training-events/              Training and events, with detail pages
/news/                         News, with detail pages
/documents/                    Policies, guidance, forms and reports
/outcomes/                     Outcomes dashboard (placeholder figures)
/about/  /contact/             About and contact
/accessibility-statement/      Statutory accessibility statement (draft)
/privacy-cookies/              Privacy and cookies notice (draft)
/style-guide/                  Internal design-system reference (unlinked, noindex)
/[slug]                        Generic CMS-managed pages
```

## Content model

Defined in `seed/seed.json` and applied to the database:

| Collection | Purpose |
|---|---|
| `pages` | Ad-hoc pages managed by the team |
| `news` | News and newsletters |
| `events` | Training, workshops and network meetings (`kind` distinguishes them) |
| `documents` | Policies, guidance, forms, reports — either an uploaded file or an external link |
| `team_members` | Who's who, with remits (no personal names in the seed) |
| `outcomes` | Headline figures for the outcomes dashboard |

Field and collection slugs must be `snake_case`; EmDash reserves some slugs (for example `version`,
`status`, `created_at`).

**All starter content is illustrative.** Team entries are role-based rather than named individuals,
and the outcome figures were invented to demonstrate the layout.

## Deploying to Vercel

EmDash requires `output: "server"`, so this deploys as a server-rendered app rather than a static
export. **Vercel's filesystem is ephemeral**, which means three external services are mandatory —
there is no zero-dependency deployment:

| Service | Why it is required | Vercel variables |
|---|---|---|
| **Remote database** — Turso (libSQL), or Postgres | Content lives in a database. A SQLite file on Vercel is lost between requests. | `TURSO_DATABASE_URL`, `TURSO_AUTH_TOKEN` (the Turso integration injects these; `LIBSQL_DATABASE_URL` / `LIBSQL_AUTH_TOKEN` are accepted as aliases) |
| **S3-compatible storage** — AWS S3, Backblaze B2, Supabase Storage, … | Media must survive the serverless filesystem. (Vercel Blob is *not* S3-compatible, so EmDash's `s3()` adapter cannot use it.) | `S3_ENDPOINT`, `S3_BUCKET`, `S3_ACCESS_KEY_ID`, `S3_SECRET_ACCESS_KEY`, `S3_REGION`, `S3_PUBLIC_URL` |
| **Redis** — Upstash or Vercel KV | EmDash keeps signed-in admin users in the Astro session. The Vercel adapter provides **no** session driver, so without this, admin login fails. | `REDIS_URL` |

> **The Supabase integration does not supply S3 credentials.** It injects Postgres and Supabase API
> keys, which EmDash's `s3()` adapter cannot use. Supabase Storage *is* S3-compatible, but you must
> create a bucket and generate its S3 access keys separately (Supabase → *Project Settings* →
> *Storage* → *S3 Connection*), then set the `S3_*` variables yourself.

Plus `EMDASH_ENCRYPTION_KEY` (encrypts plugin secrets — generate with `npx emdash secrets generate`
and back it up separately; losing it makes those values unreadable).

All four DB/storage/Redis providers above have free tiers, and Turso, Upstash, Neon and Supabase are
available from the Vercel Marketplace.

The build **fails fast with a list of missing variables** rather than an opaque adapter error, so a
half-configured project tells you what it needs.

### Steps

1. **Provision the services.** In the Vercel dashboard, *Storage* → Marketplace, add:
   - **Turso** (the database EmDash supports natively)
   - **Upstash for Redis** (sessions)
   - an S3-compatible store for media — Supabase, or AWS S3 / Backblaze B2

   This step needs a human: the CLI's `vercel integration accept-terms` requires an interactive
   terminal and confirmation of the providers' legal terms.
2. **Import the repository** at <https://vercel.com/new> and connect it to the provider resources —
   Vercel injects the variables automatically for marketplace integrations.
3. **Add `EMDASH_ENCRYPTION_KEY`** manually (it has no integration).
4. **Deploy**, then verify (below).

### Verifying a deployment

- `GET /health` returns `{"status":"ok","checks":{"app":"ok","database":"ok"}}`, or `503` with
  `database: "unreachable"`. It checks the database, not just the process.
- `npx emdash migrate --check` must report no pending migrations.
- Sign in at `/_emdash/admin` (this is the check that catches a missing `REDIS_URL`), publish a
  disposable draft, and confirm the public page shows the change.

### Known limitations on Vercel

- **Scheduled publishing does not run.** EmDash's scheduler only ticks while a process is alive.
  The work is done by `runScheduledTasks`, which is **not exported** from the `emdash` package and
  has no public subpath, so wiring a Vercel Cron job would mean importing EmDash internals — not
  worth the brittleness for a prototype. Scheduled drafts therefore need publishing by hand.
- **Sandboxed plugins are unavailable** (they need a long-running `workerd` runner). Use native
  plugins.
- **Use a separate database per environment** so a preview deployment can never migrate or modify
  production content.

## Accessibility

Targeting **WCAG 2.2 AA**, against the Public Sector Bodies (Websites and Mobile Applications)
(No. 2) Accessibility Regulations 2018. The build uses semantic landmarks, a skip link, keyboard-
operable navigation, visible focus (the brand focus treatment — a sunshine block with an ink bar),
and the GOV.UK type scale.

**Contrast is documented and measured.** Every brand colour is listed on `/style-guide/` with its
ratio against white, computed live from the value in the palette. Text needs 4.5:1 and UI or
graphical objects 3:1; teal (`#00a6a6`, 3.0:1) and coral (`#f26b5b`, 3.0:1) are therefore marked as
UI-only, and the darker `-text` shades (`#00706b`, 5.9:1 and `#c0392b`, 5.4:1) carry any text. GOV.UK's
success colour is set to `#2a6b3c` because GOV.UK uses it both as a confirmation panel background
behind white text *and* as a success link, so it must clear 4.5:1 both ways.

**Reflow has been checked.** No route overflows horizontally at 320, 375 or 768px.

**Keyboard and structure have been checked.** An automated pass over all 18 routes (Chromium)
focused every reachable control: 640 focusable elements, none without a visible focus indicator. The
same pass found no unlabelled form controls, no images without an `alt` attribute, no links or
buttons without an accessible name, no duplicate `id`s, and exactly one `h1` with no skipped heading
levels on every route. This is a structural check, not a compliance audit — it does not replace
axe-core or a manual screen-reader pass, both still outstanding.

**Links have been checked.** All internal links resolve, and every external link resolves.

The accessibility statement at `/accessibility-statement/` follows the
[GOV.UK model accessibility statement](https://www.gov.uk/guidance/model-accessibility-statement),
keeping the legally required wording intact, with `[TODO before publication]` markers for the facts
only the council can supply.

**Not yet done:** automated axe-core testing and manual screen-reader passes. Both need a browser,
which was not available in the build environment. Do not claim a compliance status until they are
complete.

## Outstanding items

- [ ] Complete the EmDash setup wizard and create the admin account (locally and in production)
- [ ] Provision Turso, S3-compatible storage and Redis, and set the environment variables — see
      [Deploying to Vercel](#deploying-to-vercel). Needs a human: the marketplace integrations
      require accepting the providers' terms
- [ ] Import the repo at <https://vercel.com/new> and deploy
- [ ] Publish scheduled drafts by hand — EmDash's scheduler cannot run on Vercel (see
      [Known limitations](#known-limitations-on-vercel))
- [ ] Replace all illustrative content with real, verified content
- [ ] Replace or obtain a licence for the council-derived wording describing the Virtual School's
      duties — see [LICENSE](LICENSE) section 2 for the files affected
- [ ] Replace the invented outcome figures with real published data (or remove the page)
- [ ] Confirm names, roles and contact details for the team page
- [ ] Complete the accessibility statement — fill in the `[TODO before publication]` markers
      (compliance status, testing description, contact details, dates) and have it reviewed
- [ ] Run axe-core in CI and do manual keyboard and screen-reader testing
- [ ] Review the Pupil Zone content for plain-language readability
- [ ] Have the council's Data Protection Officer review the privacy and cookies notice
- [ ] Decide whether to reinstate the Open Government Licence statement in the footer. It was
      removed from this prototype, but the council's own site carries one, and OGL attribution is
      normally expected for council content
- [ ] Point the domain at the deployment only with the council's agreement

## Known build warning

`npm run build` logs one warning:

```
/assets/images/govuk-crest.svg referenced in ... didn't resolve at build time
```

This is expected and harmless. GOV.UK Frontend's footer styles reference the GOV.UK crest from a
rule (`.govuk-footer__copyright-logo`) that this project deliberately does not use — a council
service should not carry GOV.UK branding. No element on the site has that class, so the graphic is
never requested by a browser; only the build-time reference is unresolved. The crest file is not
included in this repository.

## Licence

This repository contains material owned by more than one party. See [LICENSE](LICENSE) for the full
text.

**Code and original content — proprietary, all rights reserved.** The source code, and all content
written for this prototype (page copy, information architecture, component design, the Pupil Zone
concept, the placeholder statistics), is the exclusive property of Jonny Haynes. **No permission is
granted** to use, copy, modify, distribute or otherwise exploit it, in whole or in part, for any
purpose — including using it to build or host a website. Viewing the source on GitHub does not grant
you any rights to it.

**Council-derived content and branding — Rotherham Metropolitan Borough Council.** The description
of the Virtual School's purpose and duties is reproduced or adapted from the service's published
website (see `LICENSE` for the files), as are the service name and the Rotherham brand identity.
This includes the council's logo — `public/brand/rmbc-logo-white.svg`, used in the site footer to
mark the parent organisation — taken from the council's public
[`rothgov/images`](https://github.com/rothgov/images) repository. This is **not** covered by the
paragraph above, is included for demonstration purposes only, and is reproduced **without any
licence from the council**. Replace it with licensed or original wording before any real use.

**Third-party components.** This project depends on open source packages licensed to you directly
by their authors — principally Astro, EmDash, GOV.UK Frontend and React, all MIT. Those licences are
unaffected by the above, and nothing here restricts rights you hold under them.

## Disclaimer

Provided as-is, with no warranty of any kind. This is unaffiliated prototype work and does not
represent Rotherham Council or Rotherham Virtual School. If you are looking for the real service,
use [rotherham.gov.uk](https://www.rotherham.gov.uk/).

## Prototype safeguards

Because this is a prototype rather than the Virtual School's real website, it is deliberately kept
out of search engines and clearly labelled:

- A dismissible **notice bar** is fixed to the bottom of every page
  (`src/components/PrototypeNotice.astro`).
- `<meta name="robots">` is set to `noindex, nofollow`, with `noimageindex` for Googlebot
  (`src/layouts/BaseLayout.astro`).
- `robots.txt` disallows all crawlers (`public/robots.txt`).
- An **`X-Robots-Tag` HTTP header** is sent for every route (`vercel.json`) — the most reliable of
  the mechanisms, as it does not depend on a crawler parsing the page.
- `sitemap-index.xml` is still generated, but is not advertised and is disallowed.

To take the site live for real, remove the notice bar, the two `robots` meta tags, the
`X-Robots-Tag` header in `vercel.json`, and replace `public/robots.txt` with a normal policy.
