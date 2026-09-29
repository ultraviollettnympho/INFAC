import { createFileRoute } from "@tanstack/react-router";
import { AppLink } from "@/components/app-link";
import { Chamber } from "@/components/chamber";
import { Glyph } from "@/components/glyph";
import { artists, events, places } from "@/data/catalog";
import { CORRESPONDENCES, hrefForEntity, titleFor } from "@/data/graph";
import { kindLabel } from "@/lib/href";

export const Route = createFileRoute("/correspondences/")({
  head: () => ({ meta: [{ title: "Correspondences — INFAC" }] }),
  component: Correspondences,
});

const WAYS = [
  {
    title: "Collaborate",
    body: "Bring a project, a skill, or a question. We'll figure out where it fits.",
  },
  {
    title: "Submit",
    body: "Zine pieces, field notes, art, corrections to things we got wrong. The press is a table, not a portal.",
  },
  {
    title: "Attend",
    body: "Gatherings are listed on Signal as they're confirmed, not before.",
  },
  {
    title: "Reach us",
    body: "Slowly, and through people, more than through a form. If you already know someone, that's the door. If you don't, start with a contribution or with Provisions.",
  },
];

export function Correspondences() {
  return (
    <Chamber kicker="the ways in, and the graph underneath" title="Correspondences">
      <p className="max-w-[54ch] text-bone-dim">
        In older languages, correspondence names a relation between things. Here it is also an
        architecture: artist, project, event, place, resource, theory, zine, residue — each can
        open onto the others.
      </p>

      <ul className="mt-10 m-0 list-none p-0">
        {WAYS.map((w) => (
          <li key={w.title} className="entry-row">
            <p className="font-display text-2xl text-bone">{w.title}</p>
            <p className="mt-1 max-w-[50ch] text-sm text-bone-dim">{w.body}</p>
          </li>
        ))}
      </ul>

      <section className="mt-14">
        <p className="chamber-kicker">people / places / time</p>
        <div className="mt-4 grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-bone-mute">
              artists
            </p>
            {artists.map((a) => (
              <AppLink key={a.id} to={`/artists/${a.id}`} className="mt-2 block font-display text-xl no-underline hover:text-phosphor">
                {a.title}
              </AppLink>
            ))}
          </div>
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-bone-mute">
              places
            </p>
            {places.map((p) => (
              <AppLink key={p.id} to={`/places/${p.id}`} className="mt-2 block font-display text-xl no-underline hover:text-phosphor">
                {p.title}
              </AppLink>
            ))}
          </div>
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-bone-mute">
              events
            </p>
            {events.map((e) => (
              <AppLink key={e.id} to={`/events/${e.id}`} className="mt-2 block font-display text-xl no-underline hover:text-phosphor">
                {e.title}
              </AppLink>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14">
        <p className="chamber-kicker flex items-center gap-2">
          <Glyph id="INFAC-CORRESPONDENCE-GLYPH" className="size-4" />
          constellation
        </p>
        <ul className="mt-4 m-0 list-none p-0">
          {CORRESPONDENCES.map((c) => (
            <li
              key={`${c.from.kind}-${c.from.id}-${c.to.kind}-${c.to.id}-${c.relation}`}
              className="entry-row font-display text-lg"
            >
              <AppLink to={hrefForEntity(c.from)} className="text-bone no-underline hover:text-phosphor">
                {titleFor(c.from)}
              </AppLink>
              <span className="mx-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-bone-mute">
                {c.relation}
              </span>
              <AppLink to={hrefForEntity(c.to)} className="text-bone no-underline hover:text-phosphor">
                {titleFor(c.to)}
              </AppLink>
              <span className="ml-2 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-bone-mute">
                {kindLabel(c.from.kind)} → {kindLabel(c.to.kind)}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </Chamber>
  );
}
