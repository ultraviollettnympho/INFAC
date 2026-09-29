import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Chamber({
  kicker,
  title,
  children,
  wide = false,
  className,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
  wide?: boolean;
  className?: string;
}) {
  return (
    <article className={cn("px-5 pb-24 pt-6 md:px-10", wide ? "max-w-5xl" : "max-w-3xl", className)}>
      <p className="chamber-kicker">{kicker}</p>
      <h1 className="mt-2 font-display text-4xl text-bone md:text-5xl">{title}</h1>
      <div className="mt-8">{children}</div>
    </article>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-4 text-base leading-relaxed text-bone md:text-[1.0625rem]">
      {children}
    </div>
  );
}
