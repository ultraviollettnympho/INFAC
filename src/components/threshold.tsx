import { useEffect, useRef, useState } from "react";
import { Glyph } from "@/components/glyph";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "infac.threshold.v02";

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Threshold({ enabled }: { enabled: boolean }) {
  const [open, setOpen] = useState(enabled);
  const enterRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!enabled) {
      try {
        sessionStorage.setItem(STORAGE_KEY, "passed");
      } catch {
        /* ignore */
      }
      setOpen(false);
      return;
    }
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "passed") {
        setOpen(false);
        return;
      }
    } catch {
      /* ignore */
    }
    setOpen(true);
  }, [enabled]);

  useEffect(() => {
    if (!open) return;
    const id = window.setTimeout(() => enterRef.current?.focus(), 80);
    return () => window.clearTimeout(id);
  }, [open]);

  function pass() {
    try {
      sessionStorage.setItem(STORAGE_KEY, "passed");
    } catch {
      /* ignore */
    }
    setOpen(false);
  }

  if (!open) return null;

  const reduced = prefersReducedMotion();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="threshold-title"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-void px-6"
    >
      <Glyph
        id="INFAC-THRESHOLD-SIGIL"
        title="Threshold"
        className={cn("size-28 text-phosphor md:size-32", !reduced && "sigil-drift")}
      />
      <div className="mt-10 text-center">
        <p
          className={cn(
            "font-display text-sm lowercase tracking-[0.18em] text-bone-dim",
            !reduced && "line-invoke",
          )}
        >
          you have reached a threshold
        </p>
        <h1
          id="threshold-title"
          className={cn(
            "mt-4 font-display text-5xl font-medium tracking-[0.18em] text-bone md:text-6xl",
            !reduced && "line-invoke",
          )}
          style={!reduced ? { animationDelay: "0.9s" } : undefined}
        >
          INFAC
        </h1>
        <p
          className={cn(
            "mt-6 font-display italic text-lg text-bone-dim",
            !reduced && "line-invoke",
          )}
          style={!reduced ? { animationDelay: "1.7s" } : undefined}
        >
          the website is one of the works
        </p>
      </div>
      <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
        <Button ref={enterRef} variant="enter" onClick={pass}>
          Enter
        </Button>
        <Button variant="skip" onClick={pass}>
          Skip threshold
        </Button>
      </div>
      <p className="mt-8 max-w-sm text-center font-mono text-[0.68rem] uppercase tracking-[0.16em] text-bone-mute">
        Sound is off. Motion respects your system. Deep links skip this room.
      </p>
    </div>
  );
}
