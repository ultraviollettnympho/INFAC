import type { ErrorComponentProps } from "@tanstack/react-router";
import { Glyph } from "@/components/glyph";

const FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "string" && error) return error;
  return FALLBACK_MESSAGE;
}

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-void px-6 text-center text-bone">
      <Glyph id="INFAC-ANTI-SIGIL" className="size-12 text-blood" />
      <h1 className="font-display text-2xl">The room failed to hold.</h1>
      <p className="max-w-md font-mono text-sm break-words text-bone-dim">
        {errorMessage(error)}
      </p>
    </main>
  );
}
