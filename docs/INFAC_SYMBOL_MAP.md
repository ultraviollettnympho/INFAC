# INFAC SYMBOL MAP — placeholders

Canonical registry: `src/data/symbols.ts`
Drawn by: `src/components/glyph.tsx` (`data-infac-symbol` + `data-infac-symbol-status`)

**Status of every mark below: PLACEHOLDER.** Replacement protocol: update registry → swap inner paths in `glyph.tsx` → grep `data-infac-symbol` → remove leftovers.

Do not scatter new SVG paths in pages.

| ID | Role | Used in | Replacement |
|---|---|---|---|
| INFAC-SEAL-IDENTITY | identity | instrument, og/favicon target | final identity seal |
| INFAC-THRESHOLD-SIGIL | threshold | threshold overlay | final threshold sigil |
| INFAC-SIGNAL-GLYPH | signal | rooms, chamber marker | final signal glyph |
| INFAC-WORK-GLYPH | work | rooms, work | final work glyph |
| INFAC-THEORY-GLYPH | theory | rooms, theory | final theory glyph |
| INFAC-CORRESPONDENCE-GLYPH | correspondence | rooms, rails, graph heading | final correspondence glyph |
| INFAC-PROVISIONS-GLYPH | provisions | rooms, provisions | final provisions glyph |
| INFAC-RESIDUE-GLYPH | residue | rooms, residue, 404 | final residue glyph |
| INFAC-CORPUS-GLYPH | corpus | rooms, corpus | final corpus glyph |
| INFAC-TRANSMISSION-GLYPH | transmission | signal | final transmission glyph |
| INFAC-PERSON-GLYPH | person | artists, rails | final person glyph |
| INFAC-PLACE-GLYPH | place | places, rails | final place glyph |
| INFAC-EVENT-GLYPH | event | events, rails | final event glyph |
| INFAC-UNFINISHED-GLYPH | unfinished | (available) | final unfinished glyph |
| INFAC-ANTI-SIGIL | refusal | residue R-003, errors | final anti-sigil |
| INFAC-SEAL-ISSUE | publication mark | issue reader | final issue seal |
| INFAC-V01-DISCARDED | discarded v0.1 | residue R-003 only | keep as residue, not brand |

v0.1 circle+triangle+axes is **not** in the canonical registry. It is residue.
