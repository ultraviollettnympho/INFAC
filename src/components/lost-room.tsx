import { useEffect, useState } from "react";
import { AppLink } from "@/components/app-link";
import { Glyph } from "@/components/glyph";
import { residue } from "@/data/catalog";
import type { Residue } from "@/data/types";

function pickFragment(): Residue | undefined {
  const visible = residue.filter((r) => !r.tags.includes("hidden"));
  const pool = visible.length ? visible : residue;
  return pool[Math.floor(Math.random() * pool.length)];
}

export function LostRoom() {
  const [fragment, setFragment] = useState<Residue | undefined>(residue[0]);

  useEffect(() => {
    setFragment(pickFragment());
  }, []);

  return (
    <main className="mx-auto max-w-xl px-5 py-20">
      <Glyph id="INFAC-RESIDUE-GLYPH" className="size-12 text-phosphor" title="Residue" />
      <p className="chamber-kicker mt-6">lost room</p>
      <h1 className="mt-3 font-display text-4xl text-bone">
        The room you seek has been removed.
      </h1>
      <p className="mt-4 font-display italic text-xl text-bone-dim">The trace remains.</p>
      {fragment ? (
        <AppLink
          to={`/residue/${fragment.id}`}
          className="mt-10 block border border-rule p-5 no-underline hover:border-phosphor"
        >
          <p className="meta-id">{fragment.catalogId}</p>
          <p className="mt-2 font-display text-2xl text-bone">{fragment.title}</p>
          <p className="mt-2 text-sm text-bone-dim">{fragment.summary}</p>
        </AppLink>
      ) : null}
      <div className="mt-10 flex flex-wrap gap-4">
        <AppLink to="/" className="min-h-11 font-mono text-xs uppercase tracking-[0.16em] text-phosphor">
          Return to Signal
        </AppLink>
        <AppLink
          to="/residue"
          className="min-h-11 font-mono text-xs uppercase tracking-[0.16em] text-bone-dim hover:text-phosphor"
        >
          Wander Residue
        </AppLink>
        <AppLink
          to="/provisions"
          className="min-h-11 font-mono text-xs uppercase tracking-[0.16em] text-bone-dim hover:text-phosphor"
        >
          Provisions
        </AppLink>
      </div>
    </main>
  );
}
