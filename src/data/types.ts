export type Register = "signal" | "corpus" | "provisions";

export type EntityKind =
  | "project"
  | "artist"
  | "place"
  | "event"
  | "resource"
  | "theory"
  | "residue"
  | "issue"
  | "article"
  | "transmission";

export type EntityStatus =
  | "active"
  | "dormant"
  | "unfinished"
  | "archived"
  | "contested"
  | "transformed"
  | "lost";

/** Provisional transformation tags — not INFAC doctrine. Stored, rarely shown. */
export type ProcessState = "nigredo" | "albedo" | "citrinitas" | "rubedo";

export type EntityRef = {
  kind: EntityKind;
  id: string;
};

export type Correspondence = {
  from: EntityRef;
  to: EntityRef;
  relation: string;
};

export type BaseEntity = {
  id: string;
  kind: EntityKind;
  title: string;
  summary: string;
  status: EntityStatus;
  process?: ProcessState;
  tags: string[];
  image?: string;
  imageAlt?: string;
};

export type Project = BaseEntity & {
  kind: "project";
  tag: string;
  body: string[];
};

export type Artist = BaseEntity & {
  kind: "artist";
  role: string;
  body: string[];
};

export type Place = BaseEntity & {
  kind: "place";
  locationNote: string;
  body: string[];
};

export type EventRecord = BaseEntity & {
  kind: "event";
  when: string;
  body: string[];
};

export type ResourceItem = {
  name: string;
  what: string;
  phone?: string;
  phoneAlt?: string;
  url?: string;
  hours?: string;
  how?: string;
  verify: string;
};

export type Resource = BaseEntity & {
  kind: "resource";
  category: "harm-reduction" | "housing" | "food" | "care" | "crisis" | "directory";
  urgent: boolean;
  items: ResourceItem[];
  body: string[];
};

export type Theory = BaseEntity & {
  kind: "theory";
  form: "dispatch" | "position" | "question" | "text";
  pull?: string;
  body: string[];
};

export type Residue = BaseEntity & {
  kind: "residue";
  media: "flyer" | "audio" | "object" | "note" | "design" | "photograph";
  origin: string;
  catalogId: string;
  body: string[];
};

export type Article = {
  id: string;
  issueId: string;
  title: string;
  kicker: string;
  body: string[];
  scrawl?: string;
  cutup?: { text: string; size: "big" | "small" }[];
};

export type Issue = BaseEntity & {
  kind: "issue";
  number: string;
  published: string;
  pages: number;
  contributors: number;
  cover: string;
  coverAlt: string;
  articles: Article[];
};

export type Transmission = BaseEntity & {
  kind: "transmission";
  dated: string;
  body: string[];
};

export type ChamberId =
  | "signal"
  | "work"
  | "theory"
  | "correspondences"
  | "provisions"
  | "residue"
  | "corpus";

export type Chamber = {
  id: ChamberId;
  path: string;
  name: string;
  glyph: string;
  desc: string;
  register: Register;
};
