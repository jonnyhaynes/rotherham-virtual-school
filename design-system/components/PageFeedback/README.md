# PageFeedback

"Is this page useful?" at the foot of every content page: Yes / No, and "Report a problem with this page" opening a two-question form. Matches the prototype's `PageFeedback` and GOV.UK's pattern.

## Props
`state` (`'ask' | 'thanks' | 'form'`), `onAnswer(yes|no)`, `onSubmit()`.

## Usage
Wire the answers to the prototype's `/api/feedback` endpoint. Never ask for personal information here — the hint says so.
