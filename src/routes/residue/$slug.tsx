import { createFileRoute, notFound } from "@tanstack/react-router";
import { Chamber, Prose } from "@/components/chamber";
import { CorrespondenceRail } from "@/components/correspondence-rail";
import { Glyph } from "@/components/glyph";
import { getResidue } from "@/data/catalog";

export const Route = createFileRoute("/residue/$slug")({
  loader: ({ params }) => {
    const item = getResidue(params.slug);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.catalogId ?? "R"} ${loaderData?.title ?? "Residue"} — INFAC` }],
  }),
  component: ResidueDetail,
});

function ResidueDetail() {
  const item = Route.useLoaderData();
  return (
    <Chamber kicker={`${item.catalogId} · ${item.origin}`} title={item.title}>
      {item.image ? (
        <img
          src={item.image}
          alt={item.imageAlt}
          className="mb-8 aspect-cover max-w-md object-cover"
        />
      ) : null}
      {item.id === "r-003" ? (
        <div className="mb-8 flex items-center gap-8">
          <Glyph
            id="INFAC-V01-DISCARDED"
            title="Discarded v0.1 mark"
            className="size-28 text-bone-mute"
          />
          <Glyph id="INFAC-ANTI-SIGIL" title="Refusal" className="size-16 text-blood" />
        </div>
      ) : null}
      <Prose>
        {item.body.map((p) => (
          <p key={p.slice(0, 32)}>{p}</p>
        ))}
      </Prose>
      <CorrespondenceRail kind="residue" id={item.id} />
    </Chamber>
  );
}
