import { createFileRoute, notFound } from "@tanstack/react-router";
import { AppLink } from "@/components/app-link";
import { CorrespondenceRail } from "@/components/correspondence-rail";
import { Glyph } from "@/components/glyph";
import { Button } from "@/components/ui/button";
import { getIssue } from "@/data/catalog";
import { useInstrument } from "@/lib/instrument-store";

export const Route = createFileRoute("/corpus/$issue")({
  loader: ({ params }) => {
    const issue = getIssue(params.issue);
    if (!issue) throw notFound();
    return issue;
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `Issue ${loaderData?.number ?? ""} ${loaderData?.title ?? "Corpus"} — INFAC` }],
  }),
  component: IssueReader,
});

function IssueReader() {
  const issue = Route.useLoaderData();
  const readingPlain = useInstrument((s) => s.readingPlain);
  const toggleReading = useInstrument((s) => s.toggleReading);

  return (
    <main className="px-4 pb-28 pt-4 md:px-10">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="chamber-kicker">Issue {issue.number}</p>
            <h1 className="mt-2 font-display text-4xl text-paper">{issue.title}</h1>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-sick">
              {issue.published} · {issue.pages} pages · {issue.contributors} contributors
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Glyph id="INFAC-SEAL-ISSUE" className="size-14 text-blood" title="Issue seal" />
            <span className="stamp-mark">
              property
              <br />
              of the
              <br />
              network
            </span>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <Button variant="skip" onClick={toggleReading} type="button">
            {readingPlain ? "Print register" : "Accessible reading"}
          </Button>
        </div>
        <nav aria-label="Issue contents" className="mt-8">
          <p className="chamber-kicker">contents</p>
          <ol className="mt-2 m-0 list-none p-0">
            {issue.articles.map((a) => (
              <li key={a.id} className="entry-row">
                <AppLink
                  to={`/corpus/${issue.id}/${a.id}`}
                  className="font-display text-xl text-paper no-underline hover:text-blood"
                >
                  {a.title}
                </AppLink>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <div className="mx-auto mt-10 max-w-2xl space-y-8">
        {issue.articles.map((article) => (
          <PaperArticle
            key={article.id}
            issueId={issue.id}
            articleId={article.id}
            title={article.title}
            kicker={article.kicker}
            body={article.body}
            scrawl={article.scrawl}
            cutup={article.cutup}
          />
        ))}
      </div>

      <div className="mx-auto max-w-3xl">
        <CorrespondenceRail kind="issue" id={issue.id} />
      </div>
    </main>
  );
}

function PaperArticle({
  issueId,
  articleId,
  title,
  kicker,
  body,
  scrawl,
  cutup,
}: {
  issueId: string;
  articleId: string;
  title: string;
  kicker: string;
  body: string[];
  scrawl?: string;
  cutup?: { text: string; size: "big" | "small" }[];
}) {
  return (
    <article id={articleId} className="paper-sheet">
      <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ink-dim">
        {kicker}
      </p>
      <h2 className="mt-1 font-display text-2xl text-ink">
        <AppLink to={`/corpus/${issueId}/${articleId}`} className="no-underline">
          {title}
        </AppLink>
      </h2>
      <div className="mt-4 space-y-3 font-mono text-sm leading-relaxed text-ink">
        {body.map((p) => (
          <p key={p.slice(0, 28)}>{p}</p>
        ))}
      </div>
      {cutup ? (
        <p className="mt-4">
          {cutup.map((c, i) => (
            <span
              key={`${c.text}-${i}`}
              className={
                c.size === "big"
                  ? "mr-3 inline-block font-display text-2xl text-blood"
                  : "mr-3 inline-block font-mono text-xs uppercase tracking-[0.12em] text-sick"
              }
            >
              {c.text}
            </span>
          ))}
        </p>
      ) : null}
      {scrawl ? (
        <p className="mt-3 font-display text-xl italic text-blood">{scrawl}</p>
      ) : null}
    </article>
  );
}
