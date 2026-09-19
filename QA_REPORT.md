# Azure Clone — Visual QA Report

## Routes covered
- `/` — Home, compounds listing, inquiry selector, lifestyle sections, contact CTA
- `/about` — About Azure
- `/contact` — Contact form with success state
- `/privacy` — Privacy Policy
- `/compounds/{slug}` — Palma I, Palma II, Qairawan, Narjis, Hittin, Wadi, Takhassusi, Al Reem, Lamara, Rabwah, Asala, Central, KAFD, Galleria, Salamah, Qassim
- fallback 404 route

## Responsive verification matrix
- Desktop: 1280px preview validated
- Mobile: CSS breakpoint implemented for 800px and below; target 430/390/375 behavior covered
- Tablet: CSS fluid layout and breakpoint behavior implemented for 768/1024 widths

## Interaction checklist
- Mobile/desktop menu drawer open/close
- Internal route navigation for compounds, about, contact, home
- External book-a-tour and telephone links
- Compound list “view all/show less” state
- Room selector with selected state and continuation CTA
- Contact form validation and submitted success state
- Reduced-motion media query
- Privacy Policy route and cross-page footer anchors

## Remaining limitations
- The original site’s CMS-driven image set and private animation timing are not fully exposed through public HTML, so the clone uses the accessible Azure image endpoint and CSS motion rather than private source internals. All rendered image elements now resolve to a confirmed accessible Azure asset, avoiding broken-image states.
- Form submission is intentionally local-only in this static frontend; the success state is implemented without sending personal data to a server.
- The homepage Hero and Compounds section were rebuilt after direct visual comparison: full-bleed hero media with lower-right title, then a dark Riyadh map section with a vertical compound list and pins.
- Source-discovered routes `/compounds`, `/corporate`, `/blog`, `/news`, `/contacts`, and `/privacy-policy` now have working counterparts.
