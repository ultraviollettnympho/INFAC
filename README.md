# INFAC

**Infidelic Art Collective / underground press / commons / archive / artist network**

INFAC is an evolving infrastructure for artists, outsiders, organizers, drifters, workers, addicts, weirdos, and other people who keep making things after the normal systems have decided there is no sensible place for them.

The website is one of the works.

It is simultaneously a publication, archive, resource instrument, correspondence map, and interface to a living collective and looser artist network. It is not intended to be a polished brochure pretending the conditions around art are clean.

## The interface

The current site is organized into registers:

- **Signal** — the current condition, projects, theory, correspondence, and field material.
- **Corpus** — publications and the underground press.
- **Provisions** — practical resources: harm reduction, housing, food, care, crisis support, and directories.
- **Residue** — unfinished, discarded, lost, or unresolved material.

The interface can be atmospheric. Essential information stays legible.

> Mystery is optional. Function is not.

## The ecosystem

INFAC has three deliberately different social layers:

**Collective:** people and projects participating in the committed INFAC body.

**Commons:** practical infrastructure, knowledge, tools, mutual aid, and care that should remain useful beyond the boundaries of the collective.

**Network:** a looser field of artists, places, events, collaborators, and projects in correspondence with INFAC. A link is not an invitation to claim someone else's affiliation.

These distinctions are part of the architecture, not branding copy.

## Development

The application is a TanStack Start + React + TypeScript project using Vite, Tailwind CSS, and Nitro for deployment.

Content is currently typed data under `src/data/`. There is intentionally no required CMS, auth system, tracking stack, or database for the first public iteration.

Start locally:

```sh
npm install
npm run dev
```

Quality checks:

```sh
npm run typecheck
npm test
npm run lint
npm run build
```

## Documentation

- `docs/VISION.md` — what INFAC is becoming.
- `docs/PRINCIPLES.md` — operating principles.
- `docs/ARCHITECTURE.md` — technical and social architecture.
- `docs/CONTENT_MODEL.md` — typed content model.
- `docs/CORRESPONDENCE_GRAPH.md` — relationship model.
- `docs/DESIGN_CONSTITUTION.md` — interface rules.
- `docs/SYMBOLIC_LANGUAGE.md` — provisional symbolic system and replacement protocol.
- `docs/COMMUNITY_MODEL.md` — collective / commons / network boundaries.
- `docs/PROVISIONS.md` — resource stewardship rules.
- `docs/ROADMAP.md` — staged development plan.
- `docs/archive/` — provenance from the Grok prototype extraction.

## Provenance

The first implementation was prototyped in Grok Build as an App Builder workspace. That prototype contained a strong content model and visual grammar but also included host-specific authentication, connector, database, PWA, and preview infrastructure.

The current repository extracts the INFAC application from that host environment. The prototype is preserved as design archaeology rather than treated as the permanent architecture.
