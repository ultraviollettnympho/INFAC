# INFAC — Agent Operating Doctrine

INFAC is an independent creative collective, underground press, commons, archive, resource instrument, and artist network. The website is one of the works.

## 1. Core premise

Build infrastructure for people, not an aesthetic around people.

INFAC may be strange, occult, abrasive, poetic, unfinished, funny, political, intimate, or ugly. Its interfaces may carry atmosphere. Essential information may not be obscured by atmosphere.

**Mystery is optional. Function is not.**

## 2. Non-negotiable distinctions

Keep these layers distinct:

- **Collective** — the committed INFAC body: shared work, decisions, stewardship, projects.
- **Commons** — resources, tools, knowledge, care, mutual aid, and infrastructure available to people.
- **Network** — looser correspondence among artists, organizers, venues, projects, places, and collaborators. Membership is not implied by a link.
- **Corpus** — publications, zines, theory, field records, and archive material.
- **Interface** — the website and other software surfaces. The interface serves the ecosystem; it is not the ecosystem.

Do not collapse these into one database concept merely because a framework makes that convenient.

## 3. Design constitution

Preserve the existing INFAC design constitution in `docs/DESIGN_CONSTITUTION.md`.

Important rules:

- Thresholds are skippable and never gate essential information.
- Spatial language is a metaphor, not a replacement for normal URLs and navigation.
- Correspondences are data, not hand-written related-content decorations.
- Unfinished work can remain unfinished.
- Symbols come from the canonical registry.
- Provisions is a clear channel.
- No generic occult starter-pack imagery as INFAC identity.
- No autoplay audio.
- No WebGL cathedral for the sake of spectacle.
- Do not mystify functionality.

## 4. Content integrity

Never invent local resources, addresses, events, people, quotes, histories, affiliations, or community claims.

Distinguish:

- documented fact
- community-supplied information
- editorial interpretation
- uncertainty
- fiction / speculative material
- symbolic or ritual language

When a place could be harmed by publication, do not expose identifying location information merely to make the page feel complete.

Resource information must carry verification notes and dates where practical.

## 5. Data architecture

The typed entity model in `src/data/` is the prototype foundation.

Prefer:

`entity → relationship → entity`

over manually authored page-to-page links.

New entity types require a reason. Do not create a new type because a page needs a different heading.

Symbols are registered centrally in `src/data/symbols.ts` and rendered through `Glyph`. Do not scatter bespoke SVG sigils through page components.

## 6. Product direction

The first public iteration should remain useful with static typed content. A backend is not automatically progress.

Future infrastructure may add:

- community submissions
- moderation / stewardship
- live resource verification
- richer place data
- event publishing
- artist/network profiles
- correspondence visualization
- collaborative editing
- maps
- contribution workflows

Each should be introduced when there is an actual operational need, not because the architecture looks more impressive with another service attached.

## 7. Safety and dignity

INFAC serves people who may be vulnerable to surveillance, displacement, policing, stigma, exploitation, or platform extraction.

Minimize unnecessary personal data.
Do not expose sensitive locations casually.
Do not turn crisis resources into engagement bait.
Do not build surveillance features under the language of community.

## 8. Implementation discipline

Inspect before changing.
Test before claiming success.
Prefer small reversible changes.
Keep decisions documented.
Preserve provenance for imported prototype material.

When replacing prototype behavior, document what was retained, transformed, or intentionally discarded in `docs/archive/` or an appropriate design document.

## 9. What not to do

Do not:

- reintroduce Grok/App Builder authentication or connector infrastructure
- couple INFAC identity to a hosting provider
- add a database before the content model requires one
- add analytics or tracking by default
- hide essential resources behind an interaction layer
- make occult symbolism the prerequisite for understanding ordinary content
- manufacture fake history to make INFAC look older than it is
- turn the network into an implied membership roster
- optimize the interface for engagement at the expense of usefulness

## 10. Working language

Use INFAC terms deliberately. `Signal`, `Work`, `Theory`, `Correspondences`, `Provisions`, `Residue`, and `Corpus` are interface concepts with documented meanings. Do not casually rename them.

The symbolic language is provisional until `docs/SYMBOLIC_LANGUAGE.md` records a foundry-approved mark.
