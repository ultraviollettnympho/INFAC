import { createFileRoute } from "@tanstack/react-router";
import { AppLink } from "@/components/app-link";
import { Chamber } from "@/components/chamber";
import { residue } from "@/data/catalog";

export const Route = createFileRoute("/residue/")({
  head: () => ({ meta: [{ title: "Residue — INFAC" }] }),
  component: ResidueIndex,
});

function ResidueIndex() {
  const visible = residue.filter((r) => !r.tags.includes("hidden"));
  return (
    <Chamber kicker="not yet resolved into anything else" title="Residue">
      <p className="max-w-[52ch] text-bone-dim">
        An archaeological index, not a trash folder. Unfinished is a legitimate state.
      </p>
      <ol className="mt-8 m-0 list-none p-0">
        {visible.map((r) => (
          <li key={r.id} className="entry-row">
            <AppLink to={`/residue/${r.id}`} className="block no-underline">
              <span className="meta-id">
                {r.catalogId} · {r.origin}
              </span>
              <span className="residue-flicker mt-1 block font-display text-2xl text-bone hover:text-phosphor">
                {r.title}
              </span>
              <span className="mt-1 block text-sm text-bone-dim">{r.summary}</span>
            </AppLink>
          </li>
        ))}
      </ol>
    </Chamber>
  );
}
