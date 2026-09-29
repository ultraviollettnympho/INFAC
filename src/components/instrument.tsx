import { Link, useRouterState } from "@tanstack/react-router";
import { Glyph } from "@/components/glyph";
import { CHAMBERS } from "@/data/catalog";
import { useInstrument } from "@/lib/instrument-store";
import { cn } from "@/lib/utils";

function chamberFromPath(pathname: string) {
  if (pathname === "/") return CHAMBERS[0];
  const found = CHAMBERS.find((c) => c.id !== "signal" && pathname.startsWith(c.path));
  if (found) return found;
  if (pathname.startsWith("/artists") || pathname.startsWith("/places") || pathname.startsWith("/events")) {
    return CHAMBERS.find((c) => c.id === "correspondences");
  }
  return CHAMBERS[0];
}

export function Instrument() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const chamber = chamberFromPath(pathname) ?? CHAMBERS[0];
  const setRooms = useInstrument((s) => s.setRooms);
  const setFind = useInstrument((s) => s.setFind);
  const isProvisions = chamber.id === "provisions";

  return (
    <header className="pointer-events-none sticky top-0 z-40 flex items-start justify-between gap-3 px-3 pt-3 md:px-6 md:pt-5">
      <div className="pointer-events-auto flex items-center gap-3">
        <Link
          to="/"
          aria-label="INFAC — return to Signal"
          className={cn(
            "grid size-12 place-items-center text-phosphor no-underline",
            isProvisions && "text-bone",
          )}
        >
          <Glyph id="INFAC-SEAL-IDENTITY" title="INFAC" className="size-10" />
        </Link>
        <div className="leading-tight">
          <p className="chamber-kicker">{chamber.id === "signal" ? "current" : "chamber"}</p>
          <p
            className={cn(
              "font-display text-xl tracking-wide text-bone",
              isProvisions && "font-sans text-lg font-medium",
            )}
          >
            {chamber.name}
          </p>
        </div>
      </div>
      <div className="pointer-events-auto flex items-center gap-1">
        <button
          type="button"
          className="min-h-11 px-3 font-mono text-xs uppercase tracking-[0.16em] text-bone-dim hover:text-phosphor"
          onClick={() => setFind(true)}
        >
          Find
        </button>
        <button
          type="button"
          className="min-h-11 px-3 font-mono text-xs uppercase tracking-[0.16em] text-bone-dim hover:text-phosphor"
          onClick={() => setRooms(true)}
        >
          Rooms
        </button>
      </div>
    </header>
  );
}

export function useCurrentChamber() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return chamberFromPath(pathname) ?? CHAMBERS[0];
}
