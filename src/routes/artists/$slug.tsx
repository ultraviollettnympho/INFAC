import { createFileRoute, notFound } from "@tanstack/react-router";
import { Chamber, Prose } from "@/components/chamber";
import { CorrespondenceRail } from "@/components/correspondence-rail";
import { getArtist } from "@/data/catalog";

export const Route = createFileRoute("/artists/$slug")({
  loader: ({ params }) => {
    const artist = getArtist(params.slug);
    if (!artist) throw notFound();
    return artist;
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.title ?? "Artist"} — INFAC` }],
  }),
  component: ArtistDetail,
});

function ArtistDetail() {
  const artist = Route.useLoaderData();
  return (
    <Chamber kicker={artist.role} title={artist.title}>
      <Prose>
        {artist.body.map((p) => (
          <p key={p.slice(0, 32)}>{p}</p>
        ))}
      </Prose>
      <CorrespondenceRail kind="artist" id={artist.id} />
    </Chamber>
  );
}
