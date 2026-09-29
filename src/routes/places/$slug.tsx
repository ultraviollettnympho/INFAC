import { createFileRoute, notFound } from "@tanstack/react-router";
import { Chamber, Prose } from "@/components/chamber";
import { CorrespondenceRail } from "@/components/correspondence-rail";
import { getPlace } from "@/data/catalog";

export const Route = createFileRoute("/places/$slug")({
  loader: ({ params }) => {
    const place = getPlace(params.slug);
    if (!place) throw notFound();
    return place;
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.title ?? "Place"} — INFAC` }],
  }),
  component: PlaceDetail,
});

function PlaceDetail() {
  const place = Route.useLoaderData();
  return (
    <Chamber kicker={place.locationNote} title={place.title}>
      {place.image ? (
        <img
          src={place.image}
          alt={place.imageAlt}
          className="mb-8 aspect-wide w-full object-cover"
        />
      ) : null}
      <Prose>
        {place.body.map((p) => (
          <p key={p.slice(0, 32)}>{p}</p>
        ))}
      </Prose>
      <CorrespondenceRail kind="place" id={place.id} />
    </Chamber>
  );
}
