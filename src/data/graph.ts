import type { Correspondence, EntityKind, EntityRef } from "./types";
import {
  artists,
  events,
  getArticle,
  getArtist,
  getEvent,
  getIssue,
  getPlace,
  getProject,
  getResidue,
  getResource,
  getTheory,
  issues,
  places,
  projects,
  residue,
  resources,
  theory,
  transmissions,
} from "./catalog";
import { hrefFor } from "@/lib/href";

export const CORRESPONDENCES: Correspondence[] = [
  { from: { kind: "project", id: "still-buried" }, to: { kind: "place", id: "transit-corridor" }, relation: "sited at" },
  { from: { kind: "project", id: "still-buried" }, to: { kind: "artist", id: "infac-field" }, relation: "credited to" },
  { from: { kind: "project", id: "still-buried" }, to: { kind: "residue", id: "r-001" }, relation: "left" },
  { from: { kind: "project", id: "still-buried" }, to: { kind: "project", id: "signal-bleed" }, relation: "shares a night with" },
  { from: { kind: "project", id: "long-table" }, to: { kind: "place", id: "the-room" }, relation: "grew inside" },
  { from: { kind: "project", id: "long-table" }, to: { kind: "artist", id: "infac-field" }, relation: "credited to" },
  { from: { kind: "project", id: "long-table" }, to: { kind: "theory", id: "care-infrastructure" }, relation: "enacts" },
  { from: { kind: "project", id: "long-table" }, to: { kind: "resource", id: "food" }, relation: "fed people from" },
  { from: { kind: "project", id: "signal-bleed" }, to: { kind: "residue", id: "r-002" }, relation: "may include" },
  { from: { kind: "project", id: "signal-bleed" }, to: { kind: "artist", id: "infac-field" }, relation: "credited to" },
  { from: { kind: "project", id: "threshold-edition" }, to: { kind: "issue", id: "001" }, relation: "publishes as" },
  { from: { kind: "project", id: "threshold-edition" }, to: { kind: "residue", id: "r-003" }, relation: "refused" },
  { from: { kind: "project", id: "threshold-edition" }, to: { kind: "residue", id: "r-004" }, relation: "refused" },
  { from: { kind: "project", id: "threshold-edition" }, to: { kind: "theory", id: "signal-owes" }, relation: "is bound by" },
  { from: { kind: "project", id: "threshold-edition" }, to: { kind: "theory", id: "infidelic" }, relation: "attempts" },
  { from: { kind: "issue", id: "001" }, to: { kind: "place", id: "the-press" }, relation: "made at" },
  { from: { kind: "issue", id: "001" }, to: { kind: "theory", id: "illegible" }, relation: "indexes" },
  { from: { kind: "issue", id: "001" }, to: { kind: "theory", id: "care-infrastructure" }, relation: "indexes" },
  { from: { kind: "issue", id: "001" }, to: { kind: "theory", id: "mess" }, relation: "indexes" },
  { from: { kind: "issue", id: "001" }, to: { kind: "residue", id: "r-002" }, relation: "mentions" },
  { from: { kind: "resource", id: "care" }, to: { kind: "theory", id: "care-infrastructure" }, relation: "is the instrument of" },
  { from: { kind: "resource", id: "harm-reduction" }, to: { kind: "theory", id: "care-infrastructure" }, relation: "is the instrument of" },
  { from: { kind: "resource", id: "food" }, to: { kind: "project", id: "long-table" }, relation: "supplied" },
  { from: { kind: "residue", id: "r-001" }, to: { kind: "event", id: "meeting-moved" }, relation: "is the paper of" },
  { from: { kind: "residue", id: "r-001" }, to: { kind: "place", id: "transit-corridor" }, relation: "was posted at" },
  { from: { kind: "residue", id: "r-003" }, to: { kind: "residue", id: "r-004" }, relation: "discarded with" },
  { from: { kind: "residue", id: "r-005" }, to: { kind: "place", id: "the-press" }, relation: "found near" },
  { from: { kind: "event", id: "meeting-moved" }, to: { kind: "place", id: "the-room" }, relation: "may have been" },
  { from: { kind: "theory", id: "mess" }, to: { kind: "residue", id: "r-003" }, relation: "explains why we kept" },
  { from: { kind: "theory", id: "open-questions" }, to: { kind: "theory", id: "infidelic" }, relation: "unsettles" },
  { from: { kind: "artist", id: "infac-field" }, to: { kind: "place", id: "the-press" }, relation: "works at" },
  { from: { kind: "transmission", id: "t-2026-09-25" }, to: { kind: "project", id: "threshold-edition" }, relation: "announces" },
  { from: { kind: "transmission", id: "t-2026-09-25" }, to: { kind: "issue", id: "001" }, relation: "opens" },
];

export function relatedTo(kind: EntityKind, id: string): { ref: EntityRef; relation: string; inbound: boolean }[] {
  const out: { ref: EntityRef; relation: string; inbound: boolean }[] = [];
  for (const c of CORRESPONDENCES) {
    if (c.from.kind === kind && c.from.id === id) {
      out.push({ ref: c.to, relation: c.relation, inbound: false });
    } else if (c.to.kind === kind && c.to.id === id) {
      out.push({ ref: c.from, relation: c.relation, inbound: true });
    }
  }
  return out;
}

export function titleFor(ref: EntityRef): string {
  switch (ref.kind) {
    case "project":
      return getProject(ref.id)?.title ?? ref.id;
    case "artist":
      return getArtist(ref.id)?.title ?? ref.id;
    case "place":
      return getPlace(ref.id)?.title ?? ref.id;
    case "event":
      return getEvent(ref.id)?.title ?? ref.id;
    case "resource":
      return getResource(ref.id)?.title ?? ref.id;
    case "theory":
      return getTheory(ref.id)?.title ?? ref.id;
    case "residue":
      return getResidue(ref.id)?.title ?? ref.id;
    case "issue":
      return getIssue(ref.id)?.title ?? ref.id;
    case "article": {
      const [issueId, articleId] = ref.id.split("/");
      return getArticle(issueId ?? "", articleId ?? "")?.title ?? ref.id;
    }
    case "transmission":
      return transmissions.find((t) => t.id === ref.id)?.title ?? ref.id;
    default:
      return ref.id;
  }
}

export function hrefForEntity(ref: EntityRef): string {
  if (ref.kind === "article") {
    const [issueId, articleId] = ref.id.split("/");
    return hrefFor("article", articleId ?? ref.id, issueId);
  }
  return hrefFor(ref.kind, ref.id);
}

export function graphNodes() {
  return [
    ...projects.map((e) => ({ ref: { kind: e.kind, id: e.id } as EntityRef, title: e.title })),
    ...artists.map((e) => ({ ref: { kind: e.kind, id: e.id } as EntityRef, title: e.title })),
    ...places.map((e) => ({ ref: { kind: e.kind, id: e.id } as EntityRef, title: e.title })),
    ...events.map((e) => ({ ref: { kind: e.kind, id: e.id } as EntityRef, title: e.title })),
    ...resources.map((e) => ({ ref: { kind: e.kind, id: e.id } as EntityRef, title: e.title })),
    ...theory.map((e) => ({ ref: { kind: e.kind, id: e.id } as EntityRef, title: e.title })),
    ...residue.map((e) => ({ ref: { kind: e.kind, id: e.id } as EntityRef, title: e.title })),
    ...issues.map((e) => ({ ref: { kind: e.kind, id: e.id } as EntityRef, title: e.title })),
  ];
}
