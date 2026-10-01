# MapEmbed

A privacy-first location map: a branded placeholder with the address and a "Get directions" link; the interactive map (Google Maps by default, OpenStreetMap when `lat`/`lng` are given) loads only when the visitor chooses "Show map".

## Props
`title`, `address` (string or lines), `query` (search text; defaults to the address), `lat`/`lng` (use OpenStreetMap), `src` (any embed URL), `directionsHref`, `consentText`.

## Usage
Always write the address out in text too (ContactPanel) — the map is an extra, not the only way to find the building. The live contact page currently embeds Google Maps on load; this component replaces that.
