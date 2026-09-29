# IMPLEMENTATION NOTES — INFAC V0.2

## Prototype inspection (v0.1 HTML)

Kept: Threshold; rooms metaphor; Provisions as quiet channel; Residue; zine register; correspondences as a way in; reduced-motion instinct; visible focus.

Transformed: chamber-switching JS → file routes; bottom navbar → seal + chamber marker + Rooms + Find; generic circle/triangle sigil → placeholder INFAC glyphs (old mark filed as R-003); miniature fake zine → Corpus library with Issue 001.

Removed: auto-enter after 6.5s with no skip; `role=button` on a non-button; violet as a third accent; blackletter body; invented local shelter addresses.

## Technical

- Auth off. Database off. Content is typed modules in `src/data/`.
- TanStack Start file routes. `getRouter()` in `src/router.tsx`.
- Three registers via `data-register` on the shell.
- Symbols only through `<Glyph id="…" />`.
- Find is cmdk. Secret terms are data, not a second app.
- No WebGL. Atmosphere is CSS (grain, phosphor point, torn paper clip-path).
- Provisions phone links are `tel:`. External sites open in a new tab.

## Extension points

- Swap glyph inners when the foundry delivers.
- Add issues by appending to `issues[]`.
- Add graph edges without touching page components.
- Alchemical process tags are stored, not shown.
- Correspondence constellation can become an SVG/canvas map later; the list is the accessible original.
- Sound remains off until it has a toggle and a reason.

## Known V0.2 limits

- One issue in the library.
- No community submission backend (Correspondences says so).
- No live map of local beds (method + national finders instead of fake pins).
- Hidden layer is light by design.
