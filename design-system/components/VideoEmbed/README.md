# VideoEmbed

A privacy-first video player: shows a branded placeholder with a play button and a cookie note, and loads the YouTube (no-cookie) player only when the viewer chooses to play.

## Props
`title` (required — also the iframe title), `videoId` (YouTube) or `src` (any embed URL), `thumbnail`, `duration`, `transcriptHref`, `consentText`.

## Usage
Every video needs a transcript link and captions. Say how long it is. Don't autoplay on load.
