import type { SVGProps } from "react";
import { SYMBOL_REGISTRY } from "@/data/symbols";
import { cn } from "@/lib/utils";

type GlyphProps = SVGProps<SVGSVGElement> & {
  id: string;
  title?: string;
};

function Inner({ id }: { id: string }) {
  switch (id) {
    case "INFAC-SEAL-IDENTITY":
      return (
        <>
          <path d="M14 50 L14 14 L50 14 L50 36" />
          <path d="M18 22 L46 44" />
          <path d="M44 18 L24 46" />
          <circle cx="31" cy="30" r="2.1" fill="currentColor" stroke="none" />
        </>
      );
    case "INFAC-THRESHOLD-SIGIL":
      return (
        <>
          <path d="M20 50 V16" />
          <path d="M44 50 V16" />
          <path d="M20 16 H28" />
          <path d="M36 16 H44" />
          <circle cx="32" cy="33" r="2.2" fill="currentColor" stroke="none" />
        </>
      );
    case "INFAC-SIGNAL-GLYPH":
      return (
        <>
          <circle cx="32" cy="32" r="2" fill="currentColor" stroke="none" />
          <path d="M32 12 V20" />
          <path d="M32 44 V50" />
          <path d="M14 32 H20" />
          <path d="M46 26 L50 24" />
          <path d="M18 18 L22 22" />
          <path d="M44 42 L48 46" />
        </>
      );
    case "INFAC-WORK-GLYPH":
      return (
        <>
          <path d="M16 44 V28" />
          <path d="M24 48 V18" />
          <path d="M32 46 V22" />
          <path d="M40 48 V16" />
          <path d="M48 42 V30" />
        </>
      );
    case "INFAC-THEORY-GLYPH":
      return (
        <>
          <path d="M16 40 A16 16 0 0 1 48 40" />
          <path d="M20 36 A12 12 0 0 1 44 36" />
          <path d="M24 32 A8 8 0 0 1 40 32" />
          <circle cx="32" cy="24" r="1.6" fill="currentColor" stroke="none" />
        </>
      );
    case "INFAC-CORRESPONDENCE-GLYPH":
      return (
        <>
          <path d="M14 22 L50 42" />
          <path d="M18 46 L48 18" />
          <path d="M32 20 V28" />
        </>
      );
    case "INFAC-PROVISIONS-GLYPH":
      return (
        <>
          <path d="M18 18 H46 V46 H18 V30" />
          <path d="M18 24 H18" />
        </>
      );
    case "INFAC-RESIDUE-GLYPH":
      return (
        <>
          <path d="M46 20 A16 16 0 1 0 48 28" />
          <path d="M46 18 L52 14" />
        </>
      );
    case "INFAC-CORPUS-GLYPH":
      return (
        <>
          <path d="M16 22 H48" />
          <path d="M16 32 H40" />
          <path d="M16 42 H44" />
        </>
      );
    case "INFAC-TRANSMISSION-GLYPH":
      return (
        <>
          <circle cx="32" cy="18" r="2.1" fill="currentColor" stroke="none" />
          <path d="M32 22 V48" />
          <path d="M24 30 H40" />
          <path d="M28 38 H36" />
        </>
      );
    case "INFAC-PERSON-GLYPH":
      return (
        <>
          <circle cx="32" cy="22" r="3" />
          <path d="M20 44 A12 10 0 0 1 44 44" />
        </>
      );
    case "INFAC-PLACE-GLYPH":
      return (
        <>
          <path d="M16 42 L32 16 L48 42" />
          <circle cx="32" cy="34" r="1.8" fill="currentColor" stroke="none" />
        </>
      );
    case "INFAC-EVENT-GLYPH":
      return (
        <>
          <path d="M20 40 A12 10 0 0 1 44 28" />
          <path d="M20 28 A12 10 0 0 0 44 40" />
        </>
      );
    case "INFAC-UNFINISHED-GLYPH":
      return (
        <>
          <path d="M14 32 H34" />
          <circle cx="40" cy="32" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="46" cy="32" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="52" cy="32" r="1.2" fill="currentColor" stroke="none" />
        </>
      );
    case "INFAC-ANTI-SIGIL":
      return (
        <>
          <rect x="16" y="16" width="32" height="32" />
          <path d="M14 22 L50 46" />
          <path d="M28 14 L36 50" />
        </>
      );
    case "INFAC-SEAL-ISSUE":
      return (
        <>
          <rect x="14" y="14" width="36" height="36" />
          <path d="M22 26 H42" />
          <path d="M22 32 H36" />
          <path d="M22 38 H40" />
        </>
      );
    case "INFAC-V01-DISCARDED":
      return (
        <>
          <circle cx="32" cy="32" r="22" />
          <circle cx="32" cy="32" r="14" opacity="0.6" />
          <path d="M32 8 L44 44 H20 Z" />
          <path d="M32 8 V56" opacity="0.5" />
          <path d="M8 32 H56" opacity="0.5" />
          <circle cx="32" cy="32" r="2" fill="currentColor" stroke="none" />
        </>
      );
    default:
      return <circle cx="32" cy="32" r="8" />;
  }
}

export function Glyph({ id, className, title, ...props }: GlyphProps) {
  const record = SYMBOL_REGISTRY[id];
  const label = title ?? record?.meaning.primary ?? id;
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      className={cn("inline-block", className)}
      data-infac-symbol={id}
      data-infac-symbol-status={record?.status ?? "unregistered"}
      {...props}
    >
      {title ? <title>{label}</title> : null}
      <Inner id={id} />
    </svg>
  );
}
