# INFAC ARCHITECTURE

## System boundary

The current application is intentionally small:

```text
INFAC ecosystem
      │
      ▼
Typed content + correspondence graph
      │
      ▼
TanStack Start / React application
      │
      ├── Signal
      ├── Work
      ├── Theory
      ├── Correspondences
      ├── Provisions
      ├── Residue
      └── Corpus
```

The software is an interface to the ecosystem, not a replacement for it.

## Current technical stack

- React
- TypeScript
- TanStack Start / Router
- Vite
- Tailwind CSS
- Nitro / Vercel-compatible deployment
- local typed content modules

No authentication, database, analytics, or external CMS is required by the current public prototype.

## Why static data first

The first iteration needs to prove:

1. the information architecture works,
2. the design grammar works,
3. people can actually use Provisions,
4. correspondence navigation is meaningful,
5. the content model survives real additions,
6. the site can be published without an infrastructure tax.

A backend becomes justified when manual editing or community contribution becomes the bottleneck.

## Architectural invariants

### Identity is not infrastructure

INFAC must not depend on Grok, OpenAI, GitHub, Vercel, a social platform, or any single provider to define what INFAC is.

### Data relationships are first-class

Use the correspondence graph rather than page-specific related-content logic.

### Symbols are centralized

All symbolic marks use the canonical registry and `Glyph` component.

### Practical content is independently legible

Provisions must remain understandable without Signal's atmospheric layer.

### Local knowledge requires stewardship

A future place/resource layer must support verification, provenance, sensitivity, and visibility levels rather than assuming every location is public.

## Future expansion seams

The current model can grow toward:

- submission workflows
- moderation and stewardship
- event management
- richer artist/network profiles
- resource verification history
- map layers
- neighborhood knowledge
- contribution records
- publication tooling
- archival provenance
- federated or portable content exports

These are extension points, not current requirements.
