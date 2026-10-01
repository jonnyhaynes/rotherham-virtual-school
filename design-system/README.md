Rotherham Virtual School supports children and young people in care, those previously looked after, and care leavers — working with their carers, schools and the professionals around them. The brand is **warm, optimistic and trustworthy**: the clarity and accessibility of GOV.UK, with a visual identity of its own. Build every page from the GOV.UK Design System's patterns, themed with these tokens and components.

> Every child. Every possibility.

## Content fundamentals

- **Plain English, GOV.UK style.** Short sentences, common words, active voice. Explain acronyms on first use: "Personal Education Plan (PEP)", "Pupil Premium Plus (PP+)".
- **Talk to the reader as "you".** Write each audience section for that audience: young people ("Your education. Your voice. Your future."), parents and carers ("Helping the child in your care thrive"), schools ("Working together for better outcomes"), social workers and professionals (plain, procedural, deadline-first). The service is "we".
- **Sentence case** everywhere — headings, buttons, navigation. No title case, no all-caps except the `eyebrow` style.
- **Warm, not jolly.** Reassure and be specific: "If you're worried about your education, need advice or something isn't working, please get in touch. We're here to help." No exclamation marks, no emoji, no slang.
- **Children's privacy.** Never name, picture or identify a child in care. Quote young people by age or year group only, with consent.
- **Fewer words, more pictures.** The team's own brief was "cut the crap" and "less words, more images and diagrams". One idea per paragraph, three to five bullets, a diagram (`Explainer`, `Steps`) before a wall of text, and every acronym explained the first time (`Term`, Words we use).
- **Dates and times** as GOV.UK: "22 September 2026", "9am to 5pm", "Monday to Friday".
- **Links say where they go** — "Find out more about your PEP", never "click here". Contact details are written out in full: virtualschool@rotherham.gov.uk; Rotherham Virtual School, Riverside House, Main Street, Rotherham S60 1AE (the prototype's details — see the Site map section for what to confirm).

## Visual foundations

### Colour
The brand colours are `navy` (Ink Navy #172B4D), `teal` (#00A6A6), `yellow` (#FFC857), `coral` (#F26B5B) and `pale-blue` (#EAF4F7), plus `purple` (Soft Purple #A58BDA), added so each of the five audiences has its own colour.

- `navy` is the backbone: header, footer, headings and body text (`text`, 14:1 on white).
- Brand `teal`, `yellow`, `coral` and `purple` are **graphic colours**: illustration, icon badges, the pattern, dividers, rules. None of them reaches 4.5:1 with white, so never set small text in them or put white text on them. For text and fills behind white text use the accessible partners: `teal-700` (buttons, links, 6.3:1), `coral-700`, `yellow-800`, `purple-700`.
- `pale-blue` is the main tinted ground (hero, panels, feature cards). The `-50` tints (`teal-50`, `coral-50`, `yellow-50`, `purple-50`) are for audience cards, advice panels and status backgrounds.
- `text-secondary` (#4A5A73) for descriptions and metadata on white and every tint (6.1:1+).
- `border` for decorative hairlines only; control boundaries use `border-strong` (5.1:1).
- Status: `error` (#B42318) and `success` (= `teal-700`). Success is teal, not green, so success and error never depend on telling red from green; both always carry an icon and a word.

### Audience accents
The site is organised around five audiences, each owning one colour, applied with `data-audience` on a container: children and young people (`young-people`) → `teal`; parents and carers (`parents-carers`) → `coral`; schools (`schools`) → `yellow`; social workers (`social-workers`) → `purple`; professionals, including governors (`professionals`) → `navy`. Purple is an audience colour only — it is not used in the brand pattern, illustrations or the logo. Each has `accent-*` (graphics), `accent-*-text` (eyebrows, text) and `accent-*-soft` (grounds). Accents mark a section; words always carry the meaning.

### The Pupil Zone
The children and young people's section is a sub-brand, as in the prototype's `PupilLayout`. Wrap it in `data-zone="pupil"`: body copy steps up to 21/30, headings to 30/36, cards and panels take `radius-lg`, and navigation uses big `PupilCard` tiles. Write to "you", in short sentences a 10-year-old can follow, and include the voice of care-experienced young people (`Quote` student-voice) — real words, with consent.

### Typography
One family: **Noto Sans** (Google Fonts, 400/600/700), the recommended open alternative to GOV.UK's Transport, with Helvetica/Arial fallback. Use the GOV.UK type scale unchanged: `heading-xl` 48/50 for hero titles, `heading-l` 36/40 content `h1`, `heading-m` 24/30 `h2`, `heading-s` 19/25 `h3` and card titles, `lead` 24/30, `body` 19/25, `body-s` 16/20, `caption` 14/20. Each steps down below 641px (body 16/20, `h1` 32/35). `eyebrow` (14px bold, 0.08em tracking, uppercase) sits above hero titles in the audience text colour. `tagline` is for the brand line only. Keep line length within `measure` (38em).

### Spacing and layout
The GOV.UK static scale: `space-1` 5px to `space-9` 60px. Card padding `space-5`, grid gaps `space-4`/`space-5`, between components `space-7`, between sections `space-9`. Content width `page-width` 1140px with a `space-4` gutter. Breakpoints `bp-tablet` 641px and `bp-desktop` 769px; the header, hero, steps and key facts also respond to their own width (container queries).

### Shape, borders, shadows
Softer than GOV.UK, never bubbly: `radius-sm` 4px on buttons and tags, `radius-md` 8px on cards and panels, `radius-lg` 16px on illustration frames and CTA banners, `radius-pill` for step numbers and icon badges. Form inputs, tables and the focus bar stay square (`radius-none`), as GOV.UK. Borders do the work; `shadow-card` is a hairline lift, `shadow-raised` only for dialogs and sticky banners. No gradients.

### Focus and states
Keyboard focus is the GOV.UK focus state in brand yellow: `focus` fill with a 4px `focus-text` (navy) bar underneath; inputs get a `focus` outline with a navy inset. It is solid on every ground (navy on yellow 9.2:1). Hover darkens fills (`teal-800`, `navy-900`) and thickens link underlines. Disabled is 50% opacity. Motion is limited to small transitions and spinners, slowed under `prefers-reduced-motion`.

### Imagery and brand motifs
- **Illustrations** (Assets → Illustrations, SVG and PNG): flat, warm scenes of young people seen from behind, looking toward a rising sun over rolling hills and a road. Always decorative (`alt=""`); use the matching audience scene on each landing page. No photos of children in care; no stock photography of children.
- **The brand pattern** (Assets → Brand pattern; `BrandPattern` component): quarter-circles, leaves and half-rounds in teal, yellow, coral and pale blue. Decorative, one pattern area per screen, never under text.
- **Hills** (`SectionDivider`): the landscape from the logo, used once per page to join a white section to a pale-blue one.
- **Corner arcs** (`CtaBanner`): concentric quarter-circles in yellow, teal and coral, bottom-right of CTA banners.

## Logo

Use the files in Assets → Logos via the `Logo` component, which serves the SVG versions. On white or `pale-blue`: `primary` (with strapline) for hero moments, `horizontal` for narrow bands, `mark` when the name is already on screen, `one-colour` for single-ink print. On `navy`: the `reversed` versions — the header and footer use `stacked` reversed. `app-icon` for favicons and avatars. Minimum height 32px; clear space equal to the sun's height; never recolour, stretch, outline or set the full-colour logo on navy or photos. Every logo comes as SVG and PNG. The SVGs were traced from the brand board image, with colours snapped to the exact brand values — good for screen and most print, but small details (the strapline's i-dots at small sizes) are softened. Replace them with the designer's master vector artwork when available.

The Rotherham Metropolitan Borough Council logo is not part of this system: request it from the council and place it in the Footer's `partner` slot.

## Iconography

`Icon` is a 54-glyph line set on a 24px grid with 2px round strokes, drawn in `currentColor`. It was drawn for this system to match the solid, friendly icons on the brand board — the board's own icon artwork was not supplied, so treat this set as a stand-in until the brand icons are delivered. Icons always sit beside words. Colour them with text tokens (`navy`, `teal-700`, `text-inverse`); for a coloured disc use `IconBadge` (navy glyph on teal, yellow or coral; white on navy). Sizes: 18–20px inline, 24px in controls, 32–40px in cards and signposts. No emoji.

## Using this system

- The site is built on the prototype repository (Astro + EmDash + GOV.UK Frontend). Its audience ids match the tokens: `young-people`, `parents-carers`, `schools`, `social-workers`, `professionals`.
- Components live in `components/bundle.js` as `window.RVS` and need React 18 (`react`, `react-dom`) on the page; load `tokens.css` then `components/bundle.css` (which imports Noto Sans from Google Fonts).
- Compose pages from the templates (Components → Page templates): Home, Pupil Zone, Audience page, About, Our team, Training and events, Event detail, News, News article, Documents, Outcomes, Contact, Legal and long-form, Content page, Phases, How-to guide, Post-16, Words we use, Useful links, Search, Error page, and the optional Sign in and Multi-step form. The **Site map** section lists every route — from the prototype repository, which this redesign is based on — and its template; **Client requirements** traces each workshop request to where it's met.
- Before adding a component, check whether GOV.UK Frontend or an existing component (with a variant) already solves it — see the Component inventory section for what was built, what maps to GOV.UK, and what is deliberately deferred.
- Every component takes content through props; none contains page-specific copy. Headings take `headingLevel` so the outline stays correct.
- Accessibility target: WCAG 2.2 AA. Every text pair in the tokens meets 4.5:1 (checked); every interactive element is keyboard operable with the focus state above; targets are at least 40–44px.
