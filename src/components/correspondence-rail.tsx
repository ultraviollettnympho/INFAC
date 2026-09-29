import { AppLink } from "@/components/app-link";
import { Glyph } from "@/components/glyph";
import type { EntityKind } from "@/data/types";
import { hrefForEntity, relatedTo, titleFor } from "@/data/graph";
import { kindLabel } from "@/lib/href";

const GLYPH_FOR: Record<string, string> = {
  project: "INFAC-WORK-GLYPH",
  artist: "INFAC-PERSON-GLYPH",
  place: "INFAC-PLACE-GLYPH",
  event: "INFAC-EVENT-GLYPH",
  resource: "INFAC-PROVISIONS-GLYPH",
  theory: "INFAC-THEORY-GLYPH",
  residue: "INFAC-RESIDUE-GLYPH",
  issue: "INFAC-CORPUS-GLYPH",
  article: "INFAC-CORPUS-GLYPH",
  transmission: "INFAC-TRANSMISSION-GLYPH",
};

export function CorrespondenceRail({ kind, id }: { kind: EntityKind; id: string }) {
  const rel = relatedTo(kind, id);
  if (rel.length === 0) return null;

  return (
    <aside className="mt-12 border-t border-rule pt-6">
      <p className="chamber-kicker flex items-center gap-2">
        <Glyph id="INFAC-CORRESPONDENCE-GLYPH" className="size-4" />
        Correspondences
      </p>
      <ul className="mt-4 m-0 list-none p-0">
        {rel.map((r) => (
          <li key={`${r.ref.kind}-${r.ref.id}-${r.relation}`} className="entry-row">
            <AppLink
              to={hrefForEntity(r.ref)}
              className="group flex flex-wrap items-baseline justify-between gap-3 no-underline"
            >
              <span>
                <span className="block font-mono text-[0.65rem] uppercase tracking-[0.14em] text-bone-mute">
                  {kindLabel(r.ref.kind)} · {r.relation}
                </span>
                <span className="font-display text-xl text-bone group-hover:text-phosphor">
                  {titleFor(r.ref)}
                </span>
              </span>
              <Glyph
                id={GLYPH_FOR[r.ref.kind] ?? "INFAC-CORRESPONDENCE-GLYPH"}
                className="size-6 text-bone-mute group-hover:text-phosphor"
              />
            </AppLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
