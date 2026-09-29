import { useEffect, useRef } from "react";
import { AppLink } from "@/components/app-link";
import { Glyph } from "@/components/glyph";
import { CHAMBERS } from "@/data/catalog";
import { useInstrument } from "@/lib/instrument-store";
import { cn } from "@/lib/utils";

export function RoomsOverlay({ current }: { current: string }) {
  const open = useInstrument((s) => s.roomsOpen);
  const setRooms = useInstrument((s) => s.setRooms);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setRooms(false);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      prev?.focus();
    };
  }, [open, setRooms]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="rooms-title"
      className="fixed inset-0 z-50 flex items-end bg-void/85 md:items-center md:justify-center"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Close rooms"
        onClick={() => setRooms(false)}
      />
      <div className="relative z-10 max-h-[90vh] w-full overflow-y-auto border-t border-rule bg-void px-5 py-8 md:max-w-xl md:border md:border-rule">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <div>
            <p className="chamber-kicker">no site map. only rooms.</p>
            <h2 id="rooms-title" className="mt-2 font-display text-3xl text-bone">
              Chambers
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="min-h-11 font-mono text-xs uppercase tracking-[0.16em] text-bone-dim hover:text-phosphor"
            onClick={() => setRooms(false)}
          >
            Close
          </button>
        </div>
        <ul className="m-0 list-none p-0">
          {CHAMBERS.map((c) => {
            const active = c.id === current;
            return (
              <li key={c.id} className="border-b border-rule first:border-t">
                <AppLink
                  to={c.path}
                  onClick={() => setRooms(false)}
                  className={cn(
                    "flex items-start gap-4 py-4 no-underline",
                    active ? "text-phosphor" : "text-bone hover:text-phosphor",
                  )}
                >
                  <Glyph id={c.glyph} className="mt-1 size-8 shrink-0" />
                  <span>
                    <span className="block font-display text-xl tracking-wide">
                      {c.name}
                    </span>
                    <span className="mt-1 block max-w-[46ch] text-sm text-bone-dim">
                      {c.desc}
                    </span>
                  </span>
                </AppLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
