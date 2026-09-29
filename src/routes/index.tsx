import { createFileRoute } from "@tanstack/react-router";
import { AppLink } from "@/components/app-link";
import { Glyph } from "@/components/glyph";
import {
  CHAMBERS,
  getTransmission,
  issues,
  projects,
  residue,
  resources,
} from "@/data/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ title: "INFAC — Signal" }],
  }),
  component: Signal,
});

function Signal() {
  const transmission = getTransmission();
  const featured = projects.find((p) => p.id === "threshold-edition") ?? projects[0];
  const work = projects.find((p) => p.id === "still-buried");
  const issue = issues[0];
  const resource = resources.find((r) => r.id === "harm-reduction");
  const recent = residue.filter((r) => !r.tags.includes("hidden")).slice(0, 2);

  return (
    <main className="px-5 pb-28 pt-4 md:px-10">
      <section className="stagger-in mx-auto max-w-3xl">
        <p className="chamber-kicker flex items-center gap-2">
          <Glyph id="INFAC-TRANSMISSION-GLYPH" className="size-4" />
          Field transmission · {transmission?.dated}
        </p>
        <h1 className="mt-4 font-display text-4xl leading-[1.1] text-bone md:text-6xl">
          {transmission?.title}
        </h1>
        <p className="mt-6 font-display text-2xl italic text-phosphor">
          {transmission?.summary}
        </p>
        <div className="mt-6 space-y-4 text-bone">
          {transmission?.body.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </section>

      {featured ? (
        <section className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-12 md:items-end">
          <figure className="relative md:col-span-7">
            <img
              src={featured.image}
              alt={featured.imageAlt}
              className="aspect-wide w-full object-cover"
            />
            <span className="phosphor-point right-6 top-6" aria-hidden="true" />
          </figure>
          <div className="md:col-span-5">
            <p className="chamber-kicker">featured work</p>
            <h2 className="mt-2 font-display text-3xl">{featured.title}</h2>
            <p className="mt-3 text-bone-dim">{featured.summary}</p>
            <AppLink
              to={`/work/${featured.id}`}
              className="mt-5 inline-flex min-h-11 items-center font-mono text-xs uppercase tracking-[0.16em] text-phosphor no-underline"
            >
              Unseal work
            </AppLink>
          </div>
        </section>
      ) : null}

      <section className="mx-auto mt-16 grid max-w-5xl gap-px bg-rule md:grid-cols-3">
        {work ? (
          <AppLink to={`/work/${work.id}`} className="block bg-void p-5 no-underline hover:bg-void-2">
            <p className="chamber-kicker">work</p>
            <p className="mt-3 font-display text-2xl text-bone">{work.title}</p>
            <p className="mt-2 text-sm text-bone-dim">{work.tag}</p>
          </AppLink>
        ) : null}
        {issue ? (
          <AppLink to={`/corpus/${issue.id}`} className="block bg-void p-5 no-underline hover:bg-void-2">
            <p className="chamber-kicker">corpus</p>
            <p className="mt-3 font-display text-2xl text-bone">
              Issue {issue.number}
            </p>
            <p className="mt-2 text-sm text-bone-dim">{issue.title}</p>
          </AppLink>
        ) : null}
        {resource ? (
          <AppLink to={`/provisions/${resource.id}`} className="block bg-void p-5 no-underline hover:bg-void-2">
            <p className="chamber-kicker">provisions</p>
            <p className="mt-3 font-display text-2xl text-bone">{resource.title}</p>
            <p className="mt-2 text-sm text-bone-dim">{resource.summary}</p>
          </AppLink>
        ) : null}
      </section>

      <section className="mx-auto mt-16 max-w-3xl">
        <p className="chamber-kicker">recent residue</p>
        <ul className="mt-4 m-0 list-none p-0">
          {recent.map((r) => (
            <li key={r.id} className="entry-row">
              <AppLink to={`/residue/${r.id}`} className="no-underline">
                <span className="meta-id">{r.catalogId}</span>
                <span className="residue-flicker mt-1 block font-display text-xl text-bone">
                  {r.title}
                </span>
                <span className="mt-1 block text-sm text-bone-dim">{r.summary}</span>
              </AppLink>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto mt-16 max-w-3xl">
        <p className="chamber-kicker">no site map. only rooms.</p>
        <ul className="mt-4 m-0 list-none p-0">
          {CHAMBERS.filter((c) => c.id !== "signal").map((c) => (
            <li key={c.id} className="entry-row">
              <AppLink to={c.path} className="group flex items-start gap-4 no-underline">
                <Glyph id={c.glyph} className="mt-1 size-7 text-bone-mute group-hover:text-phosphor" />
                <span>
                  <span className="block font-display text-xl text-bone group-hover:text-phosphor">
                    {c.name}
                  </span>
                  <span className="mt-1 block max-w-[46ch] text-sm text-bone-dim">{c.desc}</span>
                </span>
              </AppLink>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
