# TeamProfile

A one-page profile of a team member: photo (or initials), role, name, remit, phases covered, an optional short biography and contact. Answers "Meet the team — biography and photos".

## Props
`role` (required), `name`, `pronouns`, `photo` (URL; 1:1, at least 240px), `remit`, `covers` (string[] — phases or areas), `bio` (node, collapsed in a Details), `email` (defaults to the team inbox), `audience` (ring colour), `variant` (`'default' | 'compact'`), `headingLevel` (2).

## Usage
Lead with the role — people look for "who covers secondary?" before a name. Use photos only with the person's consent; fall back to initials. Keep contact on the team inbox unless the person agrees to list their own email.
