import { createFileRoute } from "@tanstack/react-router";
import { AppLink } from "@/components/app-link";
import { Chamber } from "@/components/chamber";
import { projects } from "@/data/catalog";

export const Route = createFileRoute("/work/")({
  head: () => ({ meta: [{ title: "Work — INFAC" }] }),
  component: WorkIndex,
});

function WorkIndex() {
  return (
    <Chamber kicker="projects, artists, and their residue" title="Work">
      <div className="space-y-14">
        {projects.map((p, i) => (
          <AppLink
            key={p.id}
            to={`/work/${p.id}`}
            className="group block no-underline"
          >
            {p.image ? (
              <img
                src={p.image}
                alt={p.imageAlt}
                className={i === 0 ? "aspect-wide w-full object-cover" : "aspect-photo w-full object-cover"}
              />
            ) : null}
            <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-bone-mute">
              {p.tag}
            </p>
            <h2 className="mt-1 font-display text-3xl text-bone group-hover:text-phosphor">
              {p.title}
            </h2>
            <p className="mt-2 max-w-[52ch] text-bone-dim">{p.summary}</p>
          </AppLink>
        ))}
      </div>
    </Chamber>
  );
}
