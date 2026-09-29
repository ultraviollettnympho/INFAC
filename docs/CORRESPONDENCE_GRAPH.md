# CORRESPONDENCE GRAPH — INFAC V0.2

Edges live in `src/data/graph.ts` as `{ from, to, relation }`.

The visitor can move laterally: project → artist → place → resource → theory → zine → residue.

The `/correspondences` chamber lists the full edge set as a constellation (readable list first; visualization can arrive later without rewriting the model).

Entity pages render a **Correspondence rail** from the same graph.

## Example paths

- Still Buried → Transit corridor → R-001 → The meeting that moved
- The Long Table → The room → Care as Infrastructure → Food
- Threshold Edition → Issue 001 → refused R-003 / R-004
- Signal Bleed → R-002 (may include)

Adding an entity later: give it an id, a route, and edges. Do not hardcode related-posts per page.
