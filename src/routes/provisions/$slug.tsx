import { createFileRoute, notFound } from "@tanstack/react-router";
import { CorrespondenceRail } from "@/components/correspondence-rail";
import { Button } from "@/components/ui/button";
import { getResource } from "@/data/catalog";

export const Route = createFileRoute("/provisions/$slug")({
  loader: ({ params }) => {
    const resource = getResource(params.slug);
    if (!resource) throw notFound();
    return resource;
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.title ?? "Provisions"} — INFAC` }],
  }),
  component: ResourceDetail,
});

function ResourceDetail() {
  const resource = Route.useLoaderData();
  return (
    <main className="mx-auto max-w-2xl px-5 pb-28 pt-4 md:px-8">
      <p className="chamber-kicker">provisions · {resource.category.replace("-", " ")}</p>
      <h1 className="mt-2 font-sans text-3xl font-medium text-bone md:text-4xl">
        {resource.title}
      </h1>
      <p className="mt-4 text-bone-dim">{resource.summary}</p>
      <div className="mt-6 space-y-3 text-bone">
        {resource.body.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>

      <ol className="mt-10 m-0 list-none p-0">
        {resource.items.map((item) => (
          <li key={item.name} className="border-b border-rule py-6 first:border-t">
            <h2 className="font-sans text-xl font-medium text-bone">{item.name}</h2>
            <p className="mt-2 text-bone">{item.what}</p>
            {item.how ? <p className="mt-2 text-sm text-bone-dim">{item.how}</p> : null}
            {item.hours ? (
              <p className="mt-2 text-sm text-bone">Hours: {item.hours}</p>
            ) : null}
            <p className="mt-2 text-xs text-bone-mute">{item.verify}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.phone ? (
                <Button variant="provision" asChild>
                  <a href={`tel:${item.phone.replace(/[^\d+]/g, "")}`}>Call {item.phone}</a>
                </Button>
              ) : null}
              {item.phoneAlt ? (
                <Button variant="provisionGhost" asChild>
                  <a href={`tel:${item.phoneAlt.replace(/[^\d+]/g, "")}`}>Alt {item.phoneAlt}</a>
                </Button>
              ) : null}
              {item.url ? (
                <Button variant="provisionGhost" asChild>
                  <a href={item.url} rel="noopener noreferrer" target="_blank">
                    Open site
                  </a>
                </Button>
              ) : null}
            </div>
          </li>
        ))}
      </ol>

      <CorrespondenceRail kind="resource" id={resource.id} />
    </main>
  );
}
