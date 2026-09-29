import { createFileRoute, notFound } from "@tanstack/react-router";
import { Chamber, Prose } from "@/components/chamber";
import { CorrespondenceRail } from "@/components/correspondence-rail";
import { getTheory } from "@/data/catalog";

export const Route = createFileRoute("/theory/$slug")({
  loader: ({ params }) => {
    const text = getTheory(params.slug);
    if (!text) throw notFound();
    return text;
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.title ?? "Theory"} — INFAC` }],
  }),
  component: TheoryDetail,
});

function TheoryDetail() {
  const text = Route.useLoaderData();
  return (
    <Chamber kicker={text.form} title={text.title}>
      {text.pull ? <p className="pull-quote">{text.pull}</p> : null}
      <Prose>
        {text.body.map((p) => (
          <p key={p.slice(0, 32)}>{p}</p>
        ))}
      </Prose>
      <CorrespondenceRail kind="theory" id={text.id} />
    </Chamber>
  );
}
