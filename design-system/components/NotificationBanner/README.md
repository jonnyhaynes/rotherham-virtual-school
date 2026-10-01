# NotificationBanner

A banner for things people need to know about the site or service. Covers branded notification banners, success banners, emergency announcements, service status and maintenance notices.

## Props
| Prop | Type | Default |
|---|---|---|
| `tone` | `'info' \| 'important' \| 'success' \| 'emergency' \| 'maintenance' \| 'status'` | `'info'` |
| `title` | string | — |
| `label` | string | per tone ("Important", "Success", "Emergency", "Planned maintenance", "Service status") |
| `children` | node | — |
| `dismissible`, `onDismiss` | | false |

## Usage
- One banner per page, above the `h1` (emergency: above the header, full width).
- **success** after an action (role `alert`); **emergency** only for closures or safety messages, set on `coral-700` with white text (5.7:1).
- **maintenance** on `yellow` label with navy text (9.2:1).
- Text is plain sentences; say what's happening, when, and what to do.

## GOV.UK
Themes `govuk-notification-banner` (`--success` included) and adds emergency, maintenance and status tones.
