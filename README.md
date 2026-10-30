# RBS Building Maintenance — website prototype

Early website prototype for RBS Building Maintenance in Austin, Texas. Static HTML, CSS and JavaScript, published through this repository’s existing GitHub Pages configuration (`main`, repository root).

Preview: https://cosmhyccc.github.io/rbs-austin-concept/

## Run locally

From the repository directory:

```sh
python3 -m http.server 8766 --bind 127.0.0.1
```

Open http://127.0.0.1:8766/ while the server is running.

## Features

- Responsive navigation and service sections, native expandable FAQs.
- Service links preselect an inquiry type.
- Inquiry builder validates fields and prepares a local draft. Users review it, copy it, or open their email app to send it themselves.
- No backend submission, analytics or inquiry storage. Preparing a draft does not request or confirm a booking.

## Prototype status

The blue skyline logo is a proposed design, pending final client approval. `assets/rbs-skyline-logo-transparent.png` is the transparent artwork used in both header and footer.

Business details and the existing architectural photograph were sourced from https://www.rbsbuildingmaintenance.com/. The photograph is labeled illustrative and is not presented as an RBS client project. Client project photography is still pending. No testimonials, performance metrics or guarantees are implied.

Before final launch: confirm client-approved branding, copy, contact details and photography, and decide whether to connect the inquiry form to a delivery service.

## Checks

October 30, 2026: checked responsive layout at 320, 390 and 430 pixels and desktop at 1440 pixels; no horizontal overflow. Checked mobile menu opening/closing, Escape, reopening and navigation. Verified local resources, anchor targets, JavaScript syntax, blue-and-white colors and text contrast. The current hero retains the approved headline and body paragraphs, with one service summary and two trust ticks.

Asset URLs include content hashes; update those hashes whenever their corresponding files change. No test inquiries were sent.
