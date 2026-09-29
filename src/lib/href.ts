import type { EntityKind, EntityRef } from "@/data/types";

export function hrefFor(kind: EntityKind, id: string, extra?: string): string {
  switch (kind) {
    case "project":
      return `/work/${id}`;
    case "artist":
      return `/artists/${id}`;
    case "place":
      return `/places/${id}`;
    case "event":
      return `/events/${id}`;
    case "resource":
      return `/provisions/${id}`;
    case "theory":
      return `/theory/${id}`;
    case "residue":
      return `/residue/${id}`;
    case "issue":
      return `/corpus/${id}`;
    case "article":
      return extra ? `/corpus/${extra}/${id}` : `/corpus/${id}`;
    case "transmission":
      return "/";
    default:
      return "/";
  }
}

export function hrefForRef(ref: EntityRef, extra?: string): string {
  return hrefFor(ref.kind, ref.id, extra);
}

export function kindLabel(kind: EntityKind): string {
  switch (kind) {
    case "project":
      return "work";
    case "artist":
      return "artist";
    case "place":
      return "place";
    case "event":
      return "event";
    case "resource":
      return "resource";
    case "theory":
      return "theory";
    case "residue":
      return "residue";
    case "issue":
      return "issue";
    case "article":
      return "article";
    case "transmission":
      return "transmission";
  }
}
