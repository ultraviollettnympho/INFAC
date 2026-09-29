import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AppLink } from "@/components/app-link";
import { Input } from "@/components/ui/input";
import { resources } from "@/data/catalog";

export const Route = createFileRoute("/provisions/")({
  head: () => ({ meta: [{ title: "Provisions — INFAC" }] }),
  component: ProvisionsIndex,
});

const FILTERS = [
  { id: "all", label: "All" },
  { id: "harm-reduction", label: "Harm reduction" },
  { id: "housing", label: "Housing" },
  { id: "food", label: "Food" },
  { id: "care", label: "Care" },
  { id: "crisis", label: "Crisis" },
] as const;

function ProvisionsIndex() {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("all");

  const list = useMemo(() => {
    const query = q.trim().toLowerCase();
    return resources.filter((r) => {
      if (filter !== "all" && r.category !== filter) return false;
      if (!query) return true;
      const hay = `${r.title} ${r.summary} ${r.items.map((i) => `${i.name} ${i.what} ${i.phone ?? ""}`).join(" ")}`.toLowerCase();
      return hay.includes(query);
    });
  }, [q, filter]);

  return (
    <main className="mx-auto max-w-2xl px-5 pb-28 pt-4 md:px-8">
      <p className="chamber-kicker">this room is quiet on purpose</p>
      <h1 className="mt-2 font-sans text-3xl font-medium tracking-tight text-bone md:text-4xl">
        Provisions
      </h1>
      <p className="mt-4 max-w-[52ch] text-bone-dim">
        Essential numbers and directories. Confirm before you go. Mystery is optional. Function is
        not.
      </p>

      <div className="mt-8">
        <label htmlFor="provision-search" className="font-sans text-sm text-bone">
          Search resources
        </label>
        <Input
          id="provision-search"
          className="mt-2 border-bone-mute focus-visible:outline-bone"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="naloxone, shelter, food, 988…"
          type="search"
          autoComplete="off"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2" role="tablist" aria-label="Filter by type">
        {FILTERS.map((f) => {
          const on = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={on}
              className={
                on
                  ? "min-h-11 border border-bone bg-bone px-3 text-sm text-void"
                  : "min-h-11 border border-bone-mute px-3 text-sm text-bone hover:border-bone"
              }
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <ul className="mt-8 m-0 list-none p-0">
        {list.map((r) => (
          <li key={r.id} className="border-b border-rule py-5 first:border-t">
            <AppLink to={`/provisions/${r.id}`} className="block no-underline">
              <p className="font-sans text-xl font-medium text-bone">{r.title}</p>
              <p className="mt-1 text-sm text-bone-dim">{r.summary}</p>
              {r.urgent ? (
                <p className="mt-2 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-bone">
                  Needed now
                </p>
              ) : null}
            </AppLink>
          </li>
        ))}
      </ul>
      {list.length === 0 ? (
        <p className="mt-8 text-bone-dim">No matches. Try a broader word, or call 211.</p>
      ) : null}

      <p className="mt-12 text-sm text-bone-dim">
        If you are in immediate danger, contact local emergency services. INFAC does not operate
        these hotlines.
      </p>
    </main>
  );
}
