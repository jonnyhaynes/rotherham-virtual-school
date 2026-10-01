# EventCard

A training event or course: date tile, booking status, format, title, time, location and audience. Covers the training event card and event listings (a `Grid` of EventCards with `FilterPanel`).

## Props
`title`, `href`, `date` (ISO), `time`, `location`, `format` (`'online' | 'in-person'`), `audience`, `text`, `status` (`'open' | 'few' | 'full' | 'closed'`), `headingLevel` (3).

## Usage
Status is always a word ("Fully booked"), never colour alone. Show full events until their date so people can join a waiting list.
