import { createFileRoute, notFound } from "@tanstack/react-router";
import { AppLink } from "@/components/app-link";
import { CorrespondenceRail } from "@/components/correspondence-rail";
import { getArticle, getIssue } from "@/data/catalog";
import { Button } from "@/components/ui/button";
import { useInstrument } from "@/lib/instrument-store";

export const Route = createFileRoute("/corpus/$issue/$article")({
  loader: ({ params }) => {
    const issue = getIssue(params.issue);
    const article = getArticle(params.issue, params.article);
    if (!issue || !article) throw notFound();
    return { issue, article };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.article.title ?? "Article"} — Issue ${loaderData?.issue.number ?? ""} — INFAC`,
      },
    ],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  const { issue, article } = Route.useLoaderData();
  const readingPlain = useInstrument((s) => s.readingPlain);
  const toggleReading = useInstrument((s) => s.toggleReading);
  const index = issue.articles.findIndex((a) => a.id === article.id);
  const prev = index > 0 ? issue.articles[index - 1] : undefined;
  const next = index >= 0 ? issue.articles[index + 1] : undefined;

  return (
    <main className="px-4 pb-28 pt-4 md:px-10">
      <div className="mx-auto max-w-2xl">
        <AppLink
          to={`/corpus/${issue.id}`}
          className="font-mono text-xs uppercase tracking-[0.16em] text-sick no-underline"
        >
          Issue {issue.number} · {issue.title}
        </AppLink>
        <div className="mt-4 flex justify-end">
          <Button variant="skip" onClick={toggleReading} type="button">
            {readingPlain ? "Print register" : "Accessible reading"}
          </Button>
        </div>
        <article className="paper-sheet mt-6">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ink-dim">
            {article.kicker}
          </p>
          <h1 className="mt-1 font-display text-3xl text-ink">{article.title}</h1>
          <div className="mt-5 space-y-3 font-mono text-sm leading-relaxed text-ink">
            {article.body.map((p) => (
              <p key={p.slice(0, 28)}>{p}</p>
            ))}
          </div>
          {article.cutup ? (
            <p className="mt-4">
              {article.cutup.map((c, i) => (
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
          {article.scrawl ? (
            <p className="mt-3 font-display text-xl italic text-blood">{article.scrawl}</p>
          ) : null}
        </article>
        <nav className="mt-8 flex flex-wrap justify-between gap-4" aria-label="Article">
          {prev ? (
            <AppLink
              to={`/corpus/${issue.id}/${prev.id}`}
              className="min-h-11 font-mono text-xs uppercase tracking-[0.14em] text-paper no-underline"
            >
              ← {prev.title}
            </AppLink>
          ) : (
            <span />
          )}
          {next ? (
            <AppLink
              to={`/corpus/${issue.id}/${next.id}`}
              className="min-h-11 font-mono text-xs uppercase tracking-[0.14em] text-paper no-underline"
            >
              {next.title} →
            </AppLink>
          ) : (
            <span />
          )}
        </nav>
        <CorrespondenceRail kind="issue" id={issue.id} />
      </div>
    </main>
  );
}
