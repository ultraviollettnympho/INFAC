import { createFileRoute } from "@tanstack/react-router";
import { AppLink } from "@/components/app-link";
import { Glyph } from "@/components/glyph";
import { issues } from "@/data/catalog";

export const Route = createFileRoute("/corpus/")({
  head: () => ({ meta: [{ title: "Corpus — INFAC" }] }),
  component: CorpusIndex,
});

function CorpusIndex() {
  const current = issues[0];
  return (
    <main className="px-5 pb-28 pt-4 md:px-10">
      <div className="mx-auto max-w-3xl">
        <p className="chamber-kicker">underground press · library</p>
        <h1 className="mt-2 font-display text-4xl text-paper md:text-5xl">Corpus</h1>
        <p className="mt-4 max-w-[50ch] text-bone-dim">
          A publication system, not a blog. Each issue is an object with a seal, a body, and
          correspondences.
        </p>
      </div>

      {current ? (
        <section className="mx-auto mt-12 grid max-w-4xl items-start gap-8 md:grid-cols-12">
          <figure className="md:col-span-5">
            <img
              src={current.cover}
              alt={current.coverAlt}
              className="aspect-cover w-full object-cover"
            />
          </figure>
          <div className="md:col-span-7">
            <p className="chamber-kicker">current issue</p>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-sick">
              Issue {current.number}
            </p>
            <h2 className="mt-2 font-display text-4xl text-paper">{current.title}</h2>
            <p className="mt-3 text-bone-dim">
              published / {current.published} · {current.pages} pages · {current.contributors}{" "}
              contributors
            </p>
            <p className="mt-4 max-w-[46ch] text-bone">{current.summary}</p>
            <AppLink
              to={`/corpus/${current.id}`}
              className="mt-6 inline-flex min-h-11 items-center font-mono text-xs uppercase tracking-[0.16em] text-blood no-underline"
            >
              Open issue
            </AppLink>
            <ul className="mt-8 m-0 list-none p-0">
              {current.articles.map((a) => (
                <li key={a.id} className="entry-row">
                  <AppLink
                    to={`/corpus/${current.id}/${a.id}`}
                    className="flex items-baseline justify-between gap-3 no-underline"
                  >
                    <span className="font-display text-xl text-paper">{a.title}</span>
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-sick">
                      {a.kicker}
                    </span>
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="mx-auto mt-16 max-w-3xl">
        <p className="chamber-kicker flex items-center gap-2">
          <Glyph id="INFAC-CORPUS-GLYPH" className="size-4" />
          zine library
        </p>
        <ul className="mt-4 m-0 list-none p-0">
          {issues.map((i) => (
            <li key={i.id} className="entry-row">
              <AppLink to={`/corpus/${i.id}`} className="no-underline">
                <span className="meta-id">Issue {i.number} · {i.published}</span>
                <span className="mt-1 block font-display text-2xl text-paper">{i.title}</span>
              </AppLink>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-bone-mute">
          Fragments and contributions enter through Correspondences. About the press lives in the
          colophon of Issue 001.
        </p>
      </section>
    </main>
  );
}
