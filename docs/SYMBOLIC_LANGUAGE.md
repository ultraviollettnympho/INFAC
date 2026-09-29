# INFAC SYMBOLIC LANGUAGE

The current interface uses provisional marks. They are placeholders, not finished INFAC sigils.

The canonical registry lives in `src/data/symbols.ts`.

## Foundry rule

A symbol becomes canonical only when its:

1. visual form,
2. semantic role,
3. contextual meaning,
4. acceptable uses,
5. forbidden uses,
6. relationship to the larger INFAC symbolic grammar

have been documented.

## Replacement protocol

When the symbolic language is ready:

1. update the canonical registry,
2. replace the glyph paths in `src/components/glyph.tsx`,
3. run a repository search for `data-infac-symbol`,
4. inspect every occurrence visually,
5. remove obsolete placeholder paths,
6. preserve discarded marks as Residue when they have historical value.

## Design prohibition

Do not fill uncertainty with generic occult vocabulary, pentagrams, Baphomet silhouettes, fake Latin, random alchemical marks, or stock ritual imagery.

The symbolic system should be authored rather than assembled from an occult starter pack.

## Ritual / interface boundary

Symbolic language can shape attention, mood, memory, and navigation.

It must not obscure practical information or impersonate factual authority.
