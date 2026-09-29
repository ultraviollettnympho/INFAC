import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "@tanstack/react-router";
import { Command } from "cmdk";
import { allSearchable, CHAMBERS } from "@/data/catalog";
import { useInstrument } from "@/lib/instrument-store";
import { cn } from "@/lib/utils";

const COMMANDS: { term: string; href: string; note: string }[] = [
  { term: "help", href: "/correspondences", note: "ways in" },
  { term: "signal", href: "/", note: "current condition" },
  { term: "residue", href: "/residue", note: "the unfinished archive" },
  { term: "corpus", href: "/corpus", note: "the press" },
  { term: "correspondence", href: "/correspondences", note: "relations" },
  { term: "unknown", href: "/residue/r-002", note: "14 seconds" },
  { term: "star", href: "/", note: "illumination as an act of seeing" },
  { term: "93", href: "/residue/r-093", note: "unexplained" },
  { term: "418", href: "/residue/r-418", note: "a key without a door" },
];

export function FindDialog() {
  const open = useInstrument((s) => s.findOpen);
  const setFind = useInstrument((s) => s.setFind);
  const router = useRouter();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const items = useMemo(() => allSearchable(), []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        setFind(false);
        return;
      }
      const meta = e.metaKey || e.ctrlKey;
      if ((meta && e.key.toLowerCase() === "k") || (e.key === "/" && !isTyping(e))) {
        e.preventDefault();
        setFind(!open);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setFind]);

  useEffect(() => {
    if (open) {
      setQuery("");
      const id = window.setTimeout(() => inputRef.current?.focus(), 40);
      return () => window.clearTimeout(id);
    }
  }, [open]);

  if (!open) return null;

  const q = query.trim().toLowerCase();
  const secret = COMMANDS.filter((c) => c.term.startsWith(q) && q.length > 0);
  const hits = q
    ? items.filter((i) => i.haystack.toLowerCase().includes(q)).slice(0, 12)
    : CHAMBERS.map((c) => ({
        title: c.name,
        href: c.path,
        kind: "chamber",
        haystack: c.desc,
      }));

  function go(href: string) {
    setFind(false);
    router.history.push(href);
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="find-title"
      className="fixed inset-0 z-50 flex items-start justify-center bg-void/80 px-3 pt-[12vh]"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Close find"
        onClick={() => setFind(false)}
      />
      <Command
        className="relative z-10 w-full max-w-lg border border-rule bg-void-2"
        shouldFilter={false}
        loop
      >
        <div className="flex items-center justify-between border-b border-rule px-3">
          <p id="find-title" className="chamber-kicker py-3">
            Find
          </p>
          <button
            type="button"
            className="min-h-11 font-mono text-xs uppercase tracking-[0.16em] text-bone-dim hover:text-phosphor"
            onClick={() => setFind(false)}
          >
            Close
          </button>
        </div>
        <Command.Input
          ref={inputRef}
          value={query}
          onValueChange={setQuery}
          placeholder="search the archive — or a word you were not given"
          className="min-h-12 w-full border-0 bg-transparent px-3 py-3 font-sans text-base text-bone outline-none placeholder:text-bone-mute"
        />
        <Command.List className="max-h-[50vh] overflow-y-auto px-1 py-2">
          {secret.map((c) => (
            <Command.Item
              key={`cmd-${c.term}`}
              value={`cmd-${c.term}`}
              onSelect={() => go(c.href)}
              className={cn(
                "flex cursor-pointer items-baseline justify-between gap-3 px-3 py-3 text-phosphor data-[selected=true]:bg-void-3",
              )}
            >
              <span className="font-mono text-sm">{c.term}</span>
              <span className="font-display italic text-sm text-bone-dim">{c.note}</span>
            </Command.Item>
          ))}
          {hits.map((h) => (
            <Command.Item
              key={`${h.kind}-${h.href}-${h.title}`}
              value={`${h.kind}-${h.href}`}
              onSelect={() => go(h.href)}
              className="flex cursor-pointer items-baseline justify-between gap-3 px-3 py-3 data-[selected=true]:bg-void-3"
            >
              <span className="font-display text-lg text-bone">{h.title}</span>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-bone-mute">
                {h.kind}
              </span>
            </Command.Item>
          ))}
          {hits.length === 0 && secret.length === 0 ? (
            <p className="px-3 py-6 font-display italic text-bone-dim">
              Nothing under that name. Try residue, or a number.
            </p>
          ) : null}
        </Command.List>
      </Command>
    </div>
  );
}

function isTyping(e: KeyboardEvent) {
  const t = e.target as HTMLElement | null;
  if (!t) return false;
  const tag = t.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || t.isContentEditable;
}
