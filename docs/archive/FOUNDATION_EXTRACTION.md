# FOUNDATION EXTRACTION

Date: 2026-09-28

## Source

The initial INFAC implementation was exported from a Grok Build / App Builder workspace.

The source workspace contained 361 files and approximately 11 MB excluding host-generated directories. Its strongest contribution was not the host infrastructure. It was the INFAC content and interaction model.

## Retained

- typed entity model
- correspondence graph
- symbol registry
- Signal / Work / Theory / Correspondences / Provisions / Residue / Corpus structure
- Threshold interaction
- Rooms navigation
- Find interface
- correspondence rails
- accessibility patterns
- visual design system
- prototype imagery
- content and editorial documents

## Removed from application architecture

- Grok authentication
- Grok connector/app-data integration
- Grok preview bridge
- Grok-specific PWA plugin
- Grok sandbox origin logic
- PGlite/database bootstrap
- Better Auth configuration
- Grok-specific preview scripts
- App Builder startup assumptions
- unused host-generated deployment directories

## Preserved for provenance

The original App Builder operating instructions, package manifest, and Vite configuration are retained under `docs/archive/`.

They are historical artifacts and must not be reintroduced into runtime architecture without a documented reason.
