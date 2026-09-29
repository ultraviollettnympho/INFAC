import { createFileRoute, notFound } from "@tanstack/react-router";
import { Chamber, Prose } from "@/components/chamber";
import { CorrespondenceRail } from "@/components/correspondence-rail";
import { getProject } from "@/data/catalog";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.title ?? "Work"} — INFAC` }],
  }),
  component: WorkDetail,
});

function WorkDetail() {
  const project = Route.useLoaderData();
  return (
    <Chamber kicker={project.tag} title={project.title}>
      {project.image ? (
        <img
          src={project.image}
          alt={project.imageAlt}
          className="mb-8 aspect-wide w-full object-cover"
        />
      ) : null}
      <Prose>
        {project.body.map((p) => (
          <p key={p.slice(0, 32)}>{p}</p>
        ))}
      </Prose>
      <CorrespondenceRail kind="project" id={project.id} />
    </Chamber>
  );
}
