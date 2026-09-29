import { createFileRoute, notFound } from "@tanstack/react-router";
import { Chamber, Prose } from "@/components/chamber";
import { CorrespondenceRail } from "@/components/correspondence-rail";
import { getEvent } from "@/data/catalog";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = getEvent(params.slug);
    if (!event) throw notFound();
    return event;
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.title ?? "Event"} — INFAC` }],
  }),
  component: EventDetail,
});

function EventDetail() {
  const event = Route.useLoaderData();
  return (
    <Chamber kicker={event.when} title={event.title}>
      <Prose>
        {event.body.map((p) => (
          <p key={p.slice(0, 32)}>{p}</p>
        ))}
      </Prose>
      <CorrespondenceRail kind="event" id={event.id} />
    </Chamber>
  );
}
