import { createFileRoute } from "@tanstack/react-router";
import { AppLink } from "@/components/app-link";
import { Chamber } from "@/components/chamber";
import { theory } from "@/data/catalog";

export const Route = createFileRoute("/theory/")({
  head: () => ({ meta: [{ title: "Theory — INFAC" }] }),
  component: TheoryIndex,
});

function TheoryIndex() {
  const pull = theory.find((t) => t.pull)?.pull;
  return (
    <Chamber kicker="dispatches, positions, arguments still open" title="Theory">
      {pull ? <p className="pull-quote">{pull}</p> : null}
      <ul className="m-0 list-none p-0">
        {theory.map((t) => (
          <li key={t.id} className="entry-row">
            <AppLink to={`/theory/${t.id}`} className="no-underline">
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-bone-mute">
                {t.form}
              </span>
              <span className="mt-1 block font-display text-2xl text-bone hover:text-phosphor">
                {t.title}
              </span>
              <span className="mt-1 block text-sm text-bone-dim">{t.summary}</span>
            </AppLink>
          </li>
        ))}
      </ul>
    </Chamber>
  );
}
