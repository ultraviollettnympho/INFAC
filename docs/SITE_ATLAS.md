# SITE ATLAS — INFAC V0.2

The metaphor is spatial (chambers). The architecture is a website.

## Destinations (pages)

| Path | Chamber | What it is |
|---|---|---|
| `/` | Signal | Current condition. Not a welcome brochure. |
| `/work` | Work | Index of projects |
| `/work/:slug` | Work | Project |
| `/theory` | Theory | Dispatches, positions, questions |
| `/theory/:slug` | Theory | A text |
| `/correspondences` | Correspondences | Ways in + the graph |
| `/artists/:slug` | Correspondences | Collective / person |
| `/places/:slug` | Correspondences | Site |
| `/events/:slug` | Correspondences | Gathering (including lost ones) |
| `/provisions` | Provisions | Clear-channel directory |
| `/provisions/:slug` | Provisions | One resource with phones, hours, verify notes |
| `/residue` | Residue | Archaeological index |
| `/residue/:slug` | Residue | One fragment |
| `/corpus` | Corpus | Zine library |
| `/corpus/:issue` | Corpus | Issue object + reader |
| `/corpus/:issue/:article` | Corpus | One article, persistent URL |
| unmatched | Lost Room | 404 that yields a residue fragment |

Deep links skip the Threshold. `/` may show it once per session.

## Modules (not pages)

- Threshold overlay (home only, skippable)
- Instrument: seal + chamber marker + Find + Rooms
- Correspondence rail (on entities)
- Find / terminal (`/` or Ctrl/Cmd+K)
- Rooms index (spatial menu, not a 7-button navbar)

## Registers

- **Signal** — `/`, work, theory, correspondences, residue, artists, places, events
- **Corpus** — `/corpus*`
- **Provisions** — `/provisions*`
