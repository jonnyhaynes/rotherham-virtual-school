# Client requirements

What the Virtual School team asked for in the website workshop (four flip-chart sheets), and where each request is met in this system. Items the team starred or crossed are marked ★. The site structure and copy follow the prototype repository (Astro + EmDash), not the current live site.

## Who we are

| Request | Where it's met |
|---|---|
| Who we are / what we do ★, "What is a VS?" ★ | Home "What we do"; About template; `Explainer` ("What is a virtual school?") |
| VS staff and intro, Meet the team, biography and photos, one-page profiles | Our team template; `TeamProfile` (photo, role, remit, contact) |
| Team flowchart | Our team template: `Steps` journey showing who does what across phases |
| Role, responsibility, key responsibilities | About template ("What we are responsible for"); audience pages ("Your role in the PEP") |
| Mission statement / motto | About template (vision); the brand strapline "Every child. Every possibility." |
| Virtual school jingle | Out of scope for the design system — an audio/video asset, embed with `VideoEmbed` if produced |
| REDO LOGO | The brand board's new logo (Assets → Logos) |
| VS offer | About template; audience pages ("What we do for your child") |

## How it works

| Request | Where it's met |
|---|---|
| What is a PEP? ★, PEP meetings, how we support | `Explainer`; audience pages ("The PEP: what to expect"); Pupil Zone ("Your PEP") |
| How-to guides ★, e.g. how to fill in a PEP | How-to guide template (numbered steps, short video, "Is this page useful?") |
| PP+ funding, PP+ statement and government funding | Schools page; How-to guide; `KeyFacts` |
| Starting school, school readiness ★, explanation of phases, phase transfer | Phases template (`Steps` journey + `Tabs` by phase) |
| SEND process | Phases template (SEND section) and Useful links (Local Offer) |
| Previously looked-after children | Parents and carers page (adoption, special guardianship) |
| Post-16 ★: process for colleges, what's out there, current job roles, career guidance, university applications, Student Finance England, role of the personal adviser, leaving care services | Post-16 template (Pupil Zone styling, external links to reputable sites) |
| Idiot's guide to lingo, acronyms and what they mean | Glossary template; `Glossary`; inline `Term` definitions |
| Info on trauma-informed practice, SEMH info and resources | Schools page ("Attachment, trauma and inclusion"); Documents; Useful links |

## Audiences and navigation

| Request | Where it's met |
|---|---|
| Different sections: carers/parents, schools, children/young people; FC section; professional section | Five audiences: Young people, Parents and carers, Schools, Social workers, Professionals (`AudienceSelector`, header navigation) |
| Children (circled), kids section — voice of care-experienced young people | Pupil Zone (`data-zone="pupil"`): simpler words, bigger type, rounder cards; `Quote` student-voice |
| Pupil voice | `Quote` student-voice; Pupil Zone |
| Tab based for groups | `Tabs` and `AudienceSelector` pills on shared pages (Training, Phases) |
| Interactive, easy to navigate ★, "less words, more images/diagrams → navigate!" | `Explainer`, `Steps`, `IconBadge`, illustrations; short pages; GOV.UK navigation patterns |
| "Cut the crap" | Content rules in the brand book (plain English, short sentences, one idea per section) |

## Resources, training and support

| Request | Where it's met |
|---|---|
| Useful resources, resources for teachers | Documents template (grouped by type, links to national originals) |
| Resources with login (training / feedback) | Optional Sign in template — only if a login is commissioned; the prototype has no accounts |
| Events / training (with recordings), specialist section | Training and events template; `EventCard` with "Recording available"; event detail template |
| 1–2 minute videos for professionals, foster carers and social workers; training videos (shorts, 10–15 minutes) | `VideoEmbed` (consent-first, transcript link); Training template "Watch again" section |
| Links to support and other services: Kooth, Shine, family hubs | Useful links template (`Card` with `external`) |
| Links to guidance: DfE, IFAs | Documents template; Useful links |
| Links to policies, government, Local Offer | Documents; Useful links |
| Curriculum resources / online learning: SATs booster, Bitesize | Useful links ("Learning at home") |
| Connections to wider professionals | Professionals page; Useful links |
| Feedback from people we've supported — quotes, success stories | `Quote`; `EditorialFeature` case study; News |
| FAQ | `Accordion` (the prototype's `FaqList`), on every audience page |
| Useful hints and tips | `Panel` advice tone ("Show us the impact"); How-to guide |
| Contacts | Contact template; `ContactPanel` |
