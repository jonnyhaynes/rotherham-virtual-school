# CookieBanner

The cookie consent banner: essential-only statement, accept or reject analytics, then a confirmation with a link to cookie settings.

## Props
`serviceName` ('Rotherham Virtual School'), `onAccept`, `onReject`, `settingsHref` ('/cookies'), `state` (`'ask' | 'accepted' | 'rejected' | 'hidden'`), `sticky`.

## Usage
Show on every page until answered; don't set analytics cookies before consent. The cookie settings page is a `Prose` page with a `ChoiceGroup` ("Use cookies that measure my website use": Yes / No) and a "Save cookie settings" button, then a success `NotificationBanner`.

## GOV.UK
Mirrors `govuk-cookie-banner` wording and flow.
