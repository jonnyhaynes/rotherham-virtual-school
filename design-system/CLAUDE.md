# Rotherham Virtual School design system — implementation handoff

This folder is the visual design system for the Rotherham Virtual School website. Implement it in the prototype repository **jonnyhaynes/rotherham-virtual-school** (Astro 7 + EmDash + GOV.UK Frontend). Keep the prototype's routes, content model and copy; replace its visual layer.

## Read first
1. `README.md` — brand book and usage rules (colour, type, spacing, focus, Pupil Zone, imagery, logo, icons).
2. `sitemap.md` — every route, its template, and decisions to confirm.
3. `requirements.md` — the Virtual School's workshop brief, mapped to components and templates. New pages marked "client request" need adding to the repo.
4. `inventory.md` — what's built, what maps to GOV.UK Frontend, what's deferred.
5. `tokens.json` / `tokens.css` — design tokens. `components/<Name>/README.md` and `components/index.d.ts` — component specs.

## What the code here is
- `components/bundle.js` + `bundle.css`: a React reference implementation (global `window.RVS`). It is the visual and behavioural spec — port it to `.astro` components; don't ship React for static content.
- `previews/*.html`: runnable examples (`npx serve .`, open `index.html`). Page templates are `components/Template*`.

## How to implement in the repo
1. **Tokens.** Replace `src/styles/_tokens.scss` (Rotherham Council palette, Mulish) with this system's tokens (brand-board palette, Noto Sans). Configure GOV.UK Frontend's settings (brand colour, focus colour, link colours, font) from them; keep token names as CSS custom properties.
2. **Audiences.** `src/data/audiences.ts` ids already match the tokens: `young-people`, `parents-carers`, `schools`, `social-workers`, `professionals`. Point each `accent` at `var(--accent-<id>)`, and apply `data-audience` on `AudienceLayout`'s wrapper.
3. **Pupil Zone.** Add `data-zone="pupil"` in `PupilLayout`; use the PupilCard styles for its cards.
4. **Components.** Restyle the repo's components to match (`HeroBanner`→Hero, `AudienceCard`→AudienceSelector card, `ContactPanel`, `EventCard`, `NewsCard`→Card, `FaqList`→Accordion, `PageFeedback`, `govuk/InsetText`→Panel neutral/info, `govuk/WarningText`→Panel warning). Add new ones from `inventory.md` as pages need them (Explainer, Glossary/Term, TeamProfile, Steps, KeyFacts, DocumentLink, VideoEmbed, MapEmbed). Keep `rvs-*` class names, prop names and ARIA from `bundle.js`.
5. **Content model.** For the client-request pages add collections or fields as needed: `glossary_terms` (term, expansion, definition), team member `photo`/`bio`, event `recording_url`, `guides` (steps).
6. **Assets.** Copy `assets/rvs/` to `public/brand/rvs/` (update `Logo`'s `assetBase`). SVGs are traced from the brand board — replace with master vectors when supplied. The repo's `public/brand/rmbc-logo-white.svg` goes in the Footer partner slot.
7. **Progressive enhancement.** Pages work without JavaScript; JS only enhances toggles, tabs, accordion, glossary search, dialog, copy link.
8. **Verify.** axe/pa11y on every template (WCAG 2.2 AA), keyboard walkthrough, 320px and 1280px, visual comparison with `previews/`.

## Don't
- Put white text on brand `teal`, `yellow`, `coral` or `purple` — use the `-700`/`-800` partners.
- Invent colours, radii or spacing outside `tokens.json`.
- Publish the prototype's placeholder outcome figures, or quotes that aren't real and consented.
- Use photos of children in care, or name or identify them.
