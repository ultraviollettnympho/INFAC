import type {
  Article,
  Artist,
  Chamber,
  EventRecord,
  Issue,
  Place,
  Project,
  Residue,
  Resource,
  Theory,
  Transmission,
} from "./types";

export const CHAMBERS: Chamber[] = [
  {
    id: "signal",
    path: "/",
    name: "Signal",
    glyph: "INFAC-SIGNAL-GLYPH",
    desc: "the current condition of INFAC — today's surface of an ongoing organism.",
    register: "signal",
  },
  {
    id: "work",
    path: "/work",
    name: "Work",
    glyph: "INFAC-WORK-GLYPH",
    desc: "the objects and interventions the collective has made, and the traces they left behind.",
    register: "signal",
  },
  {
    id: "theory",
    path: "/theory",
    name: "Theory",
    glyph: "INFAC-THEORY-GLYPH",
    desc: "the reasoning underneath the work — dispatches, positions, arguments still open.",
    register: "signal",
  },
  {
    id: "correspondences",
    path: "/correspondences",
    name: "Correspondences",
    glyph: "INFAC-CORRESPONDENCE-GLYPH",
    desc: "the ways in, and the relationships that make the rest of this make sense.",
    register: "signal",
  },
  {
    id: "provisions",
    path: "/provisions",
    name: "Provisions",
    glyph: "INFAC-PROVISIONS-GLYPH",
    desc: "harm reduction, housing, food, care — kept plain on purpose, because someone reading this at 3am needs it to work.",
    register: "provisions",
  },
  {
    id: "residue",
    path: "/residue",
    name: "Residue",
    glyph: "INFAC-RESIDUE-GLYPH",
    desc: "what's left over — ephemera, half-finished experiments, things not yet resolved.",
    register: "signal",
  },
  {
    id: "corpus",
    path: "/corpus",
    name: "Corpus",
    glyph: "INFAC-CORPUS-GLYPH",
    desc: "the underground press — a library, not a page called Zines.",
    register: "corpus",
  },
];

export const transmissions: Transmission[] = [
  {
    id: "t-2026-09-25",
    kind: "transmission",
    title: "INFAC has entered a new transmission",
    dated: "09.25.26",
    summary: "The website is one of the works.",
    status: "active",
    tags: ["signal", "threshold"],
    body: [
      "What was behind the scenes is now a public chamber. The site is not a brochure for INFAC. It is one of INFAC's works.",
      "The Corpus exists because the press needed a library, not a page called Zines. Provisions exists because mystery is optional and function is not. Correspondences exist because nothing here is an island.",
      "Some of this is unfinished on purpose. Unfinished is a legitimate state.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "still-buried",
    kind: "project",
    title: "Still Buried",
    tag: "street intervention · undated",
    summary:
      "Wheatpaste appearing overnight along the transit corridor, gone again by morning.",
    status: "archived",
    process: "nigredo",
    tags: ["street", "wheatpaste", "ephemeral"],
    image: "/images/still-buried.jpg",
    imageAlt:
      "Night photograph of a transit wall thick with layered wheatpaste posters, torn paper, glue stains, and wet concrete.",
    body: [
      "The posters never announced a show. They announced a presence. Layers went up after the last train and were gone — or half-gone — by the first one.",
      "What remains is the wall's memory of paper: glue ghosts, a corner that wouldn't tear, a geometric mark that survived two municipal scrapes.",
      "The corridor is still there. The work is not. That is not a failure of the work.",
    ],
  },
  {
    id: "long-table",
    kind: "project",
    title: "The Long Table",
    tag: "communal piece",
    summary:
      "A table that kept growing as people carried in what they could, until it needed its own room.",
    status: "dormant",
    process: "albedo",
    tags: ["commons", "care", "furniture"],
    image: "/images/long-table.jpg",
    imageAlt:
      "A very long mismatched wooden table in a dim industrial room, empty chairs, papers and dishes, one hanging bulb.",
    body: [
      "It started as one table. Then another was carried in. Then a door came off its hinges and became a leaf. Nobody designed the final length. The final length was a consequence of showing up.",
      "What was served changed. What didn't change: you could sit without being asked what you were for.",
      "The room is still used. The table is stacked against a wall. It can be rebuilt in an afternoon, which is the point.",
    ],
  },
  {
    id: "signal-bleed",
    kind: "project",
    title: "Signal Bleed",
    tag: "video / sound",
    summary: "Footage of past gatherings, cut down until only the crowd noise is left.",
    status: "active",
    process: "citrinitas",
    tags: ["video", "sound", "archive"],
    image: "/images/signal-bleed.jpg",
    imageAlt:
      "Close-up of a CRT screen filled with phosphor-green video noise and unidentifiable motion smear.",
    body: [
      "The picture was removed on purpose. Faces become a liability; noise does not. What you hear is a room that used to be full.",
      "Fourteen seconds of unlabeled audio in Residue may be an outtake. Nobody currently wants to confirm that.",
      "If you recognize the room, you were probably there. If you don't, you can still sit with the sound.",
    ],
  },
  {
    id: "threshold-edition",
    kind: "project",
    title: "Threshold Edition",
    tag: "interface / publication · 2026",
    summary: "This website. An INFAC work that also has to function as a website.",
    status: "active",
    process: "rubedo",
    tags: ["interface", "press", "commons"],
    image: "/images/threshold.jpg",
    imageAlt:
      "A nearly dark interior with a single small phosphorescent point of light in the distance.",
    body: [
      "INFAC is not represented by the website. The website is one of INFAC's works.",
      "It has to hold a press, an archive, a resource instrument, and a ritual of entry without confusing those jobs. The weirdness happens around the utility. The utility does not get to be weird.",
      "V0.2 is the Threshold Edition. It is coherent enough to publish and unfinished enough to keep living. That is not a contradiction. It is the brief.",
    ],
  },
];

export const artists: Artist[] = [
  {
    id: "infac-field",
    kind: "artist",
    title: "INFAC Field",
    role: "collective credit",
    summary:
      "Work signed this way was made by more than one pair of hands, not all of them named.",
    status: "active",
    tags: ["collective"],
    body: [
      "INFAC is a collective, a commons, and a looser artist network. Those are not the same thing, and the difference matters.",
      "The collective makes decisions. The commons holds resources. The network is whoever is in correspondence — including people who will never attend a meeting.",
      "Named authorship appears when it is wanted. Field credit appears when it is truer.",
    ],
  },
];

export const places: Place[] = [
  {
    id: "transit-corridor",
    kind: "place",
    title: "Transit corridor",
    locationNote: "city, unnamed on purpose",
    summary: "The wall that held Still Buried, and holds glue ghosts now.",
    status: "active",
    tags: ["street", "night"],
    image: "/images/transit.jpg",
    imageAlt:
      "Empty night transit stop with wet pavement, fluorescent tubes, and a corridor receding into darkness.",
    body: [
      "A corridor is a place people don't stay. That made it useful. Work that needs to be seen by people who aren't looking for art tends to live where looking is accidental.",
      "Municipal cleaning is part of the medium. So is rain.",
    ],
  },
  {
    id: "the-room",
    kind: "place",
    title: "The room",
    locationNote: "ask around",
    summary: "Where the Long Table grew until it needed the whole floor.",
    status: "dormant",
    tags: ["interior", "commons"],
    image: "/images/long-table.jpg",
    imageAlt: "Dim industrial room that held a communal table.",
    body: [
      "Addresses in this archive are withheld when publishing them would burn the place. If you need the room, you already know someone who can walk you there.",
      "If you don't, start with Provisions and with the press. The room is not a secret handshake. It is a liability when listed.",
    ],
  },
  {
    id: "the-press",
    kind: "place",
    title: "The press",
    locationNote: "wherever the table is",
    summary: "Not a shopfront. A worktable, an ink roller, a stack of paper.",
    status: "active",
    tags: ["print", "zine"],
    image: "/images/press.jpg",
    imageAlt:
      "Overhead photograph of a zine-making table with ink roller, paper stacks, stamp pad, and metal type.",
    body: [
      "The press is a practice more than a lease. Issue 001 was assembled on a table that also held dinner. That is not a charming anecdote. It is the production budget.",
    ],
  },
];

export const events: EventRecord[] = [
  {
    id: "meeting-moved",
    kind: "event",
    title: "The meeting that moved",
    when: "undated · location crossed out twice",
    summary: "A gathering whose address was rewritten until the flyer became Residue.",
    status: "lost",
    tags: ["unconfirmed"],
    body: [
      "Gatherings are listed here as they're confirmed, not before. This one was confirmed, then moved, then moved again, then the paper was more honest than the calendar.",
      "If a current gathering exists, it will appear on Signal. It is not here.",
    ],
  },
];

export const resources: Resource[] = [
  {
    id: "harm-reduction",
    kind: "resource",
    title: "Harm reduction",
    category: "harm-reduction",
    urgent: true,
    summary: "Supplies, testing, overdose response. No lectures.",
    status: "active",
    tags: ["urgent", "health"],
    body: [
      "This list is national. Local hours change. Confirm before you go. INFAC is not the operator of these services.",
    ],
    items: [
      {
        name: "Never Use Alone",
        what: "US overdose response line. An operator stays on the phone while you use. If you stop responding, they call EMS.",
        phone: "800-484-3731",
        phoneAlt: "877-696-1996",
        url: "https://neverusealone.com/",
        hours: "24/7",
        how: "Call before you use. You will be asked for a location so EMS can be sent if needed. Confidential. Operators have lived experience.",
        verify: "Confirm on neverusealone.com — last reviewed 2026-09",
      },
      {
        name: "Safe Spot",
        what: "Another US overdose prevention line. Same idea: someone stays with you.",
        phone: "800-972-0590",
        url: "https://safe-spot.me/",
        hours: "24/7",
        verify: "Confirm on safe-spot.me — last reviewed 2026-09",
      },
      {
        name: "NEXT Distro",
        what: "Mail-based harm reduction: naloxone, test strips, sterile supply where available.",
        url: "https://nextdistro.org/",
        how: "Order through the site. Availability depends on where you are.",
        verify: "Confirm on nextdistro.org",
      },
      {
        name: "NASEN syringe directory",
        what: "Directory of syringe service programs in the US.",
        url: "https://nasen.org/",
        how: "Look up programs near you. Listings go stale — call before you travel.",
        verify: "Confirm on nasen.org; listings are maintained by each program",
      },
      {
        name: "National Harm Reduction Coalition",
        what: "Training, policy, and connections — not a drop-in clinic.",
        url: "https://harmreduction.org/",
        how: "Use their site to find local programs. Their office does not offer direct services.",
        verify: "harmreduction.org",
      },
    ],
  },
  {
    id: "housing",
    kind: "resource",
    title: "Housing and shelter",
    category: "housing",
    urgent: true,
    summary: "Where to go tonight, and who to ask.",
    status: "active",
    tags: ["urgent", "shelter"],
    body: [
      "We do not publish a fake local bed list. A wrong address at midnight is worse than a directory. Start here, then verify tonight's intake.",
    ],
    items: [
      {
        name: "211",
        what: "Local information line for shelter, food, and other essentials in much of the US and Canada.",
        phone: "211",
        url: "https://www.211.org/",
        hours: "Often 24/7 — varies by region",
        how: "Call 211 or use 211.org and enter a zip code.",
        verify: "If 211 does not pick up, use HUD Find Shelter",
      },
      {
        name: "HUD Find Shelter",
        what: "US directory of shelters and services.",
        url: "https://www.hud.gov/findshelter",
        how: "Search by location. Call the listed intake number before traveling.",
        verify: "hud.gov/findshelter",
      },
      {
        name: "National Runaway Safeline",
        what: "For young people who have left home or might.",
        phone: "800-786-2929",
        url: "https://www.1800runaway.org/",
        hours: "24/7",
        verify: "1800runaway.org",
      },
    ],
  },
  {
    id: "food",
    kind: "resource",
    title: "Food",
    category: "food",
    urgent: true,
    summary: "Free meals and pantries — find them by where you are, not by vibe.",
    status: "active",
    tags: ["food"],
    body: [
      "Pantry hours move. A printed list in a zine goes stale. Use a finder, then call.",
    ],
    items: [
      {
        name: "Feeding America food bank finder",
        what: "Locate a food bank and, from there, pantries and meal sites.",
        url: "https://www.feedingamerica.org/find-your-local-foodbank",
        how: "Enter a zip code on the site.",
        verify: "feedingamerica.org",
      },
      {
        name: "WhyHunger / Hunger Hotline",
        what: "Help finding food in your area.",
        phone: "800-548-6479",
        url: "https://whyhunger.org/",
        hours: "Check current hours on the site",
        verify: "whyhunger.org",
      },
      {
        name: "211",
        what: "Also routes food questions locally.",
        phone: "211",
        url: "https://www.211.org/",
        verify: "211.org",
      },
    ],
  },
  {
    id: "care",
    kind: "resource",
    title: "Community care",
    category: "care",
    urgent: false,
    summary: "Check-ins, rides, the unglamorous stuff. Plus the lines that pick up at 3am.",
    status: "active",
    tags: ["care"],
    body: [
      "Mutual aid is local. National lines are here because they work when the group chat is asleep. INFAC care among people who already know each other is not listed — ask through Correspondences.",
    ],
    items: [
      {
        name: "988 Suicide & Crisis Lifeline",
        what: "Call or text 988 in the US for distress, suicidal thoughts, or if you are worried about someone.",
        phone: "988",
        url: "https://988lifeline.org/",
        hours: "24/7",
        how: "Call or text 988. Veterans: dial 988 then press 1.",
        verify: "988lifeline.org",
      },
      {
        name: "SAMHSA National Helpline",
        what: "Treatment referral and information for mental health and substance use, English and Spanish.",
        phone: "800-662-4357",
        url: "https://www.samhsa.gov/find-help/national-helpline",
        hours: "24/7",
        how: "Call 1-800-662-HELP (4357). TTY: 1-800-487-4889. Text your zip to 435748 (HELP4U).",
        verify: "samhsa.gov",
      },
      {
        name: "Trans Lifeline",
        what: "Peer support line run by and for trans people. They do not call emergency services without consent.",
        phone: "877-565-8860",
        url: "https://translifeline.org/",
        hours: "Check current hours on the site",
        verify: "translifeline.org — hours change",
      },
      {
        name: "The Trevor Project",
        what: "Crisis support for LGBTQ young people.",
        phone: "866-488-7386",
        url: "https://www.thetrevorproject.org/",
        hours: "24/7",
        how: "Call, text START to 678-678, or chat on the site.",
        verify: "thetrevorproject.org",
      },
    ],
  },
  {
    id: "crisis",
    kind: "resource",
    title: "Crisis and violence",
    category: "crisis",
    urgent: true,
    summary: "Domestic violence, sexual assault, immediate danger.",
    status: "active",
    tags: ["urgent", "crisis"],
    body: [
      "If you are in immediate danger, call local emergency services. The lines below are for support, planning, and accompaniment.",
    ],
    items: [
      {
        name: "National Domestic Violence Hotline",
        what: "24/7 support, safety planning, local referrals.",
        phone: "800-799-7233",
        url: "https://www.thehotline.org/",
        hours: "24/7",
        how: "Call 1-800-799-SAFE (7233), text START to 88788, or chat on the site. Use a safe device.",
        verify: "thehotline.org",
      },
      {
        name: "RAINN",
        what: "National Sexual Assault Hotline.",
        phone: "800-656-4673",
        url: "https://www.rainn.org/",
        hours: "24/7",
        how: "Call 1-800-656-HOPE (4673) or chat on rainn.org.",
        verify: "rainn.org",
      },
    ],
  },
  {
    id: "directory",
    kind: "resource",
    title: "How to verify a local resource",
    category: "directory",
    urgent: false,
    summary: "A method, not a list of invented addresses.",
    status: "active",
    tags: ["method"],
    body: [
      "INFAC will not invent a shelter that does not exist in order to make this chamber look complete. The method is the resource.",
    ],
    items: [
      {
        name: "The method",
        what: "1. Start with 211 or a national finder. 2. Call the intake number the same day. 3. Ask hours, ID requirements, accessibility, and whether you can arrive after dark. 4. If a flyer contradicts a phone call, believe the phone call. 5. If someone in the network walked there yesterday, believe them more than a homepage.",
        verify: "This method is INFAC's. The services it points to are not.",
      },
    ],
  },
];

export const theory: Theory[] = [
  {
    id: "illegible",
    kind: "theory",
    title: "On Refusing to Be Legible",
    form: "dispatch",
    pull: "Some of this is written to be hard to skim. That is not the same as being hard to use.",
    summary: "Why some of this is written to be hard to skim.",
    status: "active",
    tags: ["dispatch", "form"],
    body: [
      "Institutions prefer collectives that can be summarized in a paragraph, scheduled in a CMS, and filed under a genre. Legibility is often extracted from people who cannot afford to be seen that clearly.",
      "INFAC refuses a certain kind of clarity: the kind that makes a scene easy to brand, police, or sell back to itself. It does not refuse the other kind — the kind that gets someone to a bed, a meal, a naloxone kit.",
      "That is why the site has two registers that must not collapse into each other. The esoteric register can afford density. The clear channel cannot.",
      "If you came here for a manifesto with a donation button, you will be underfed. If you came here for a door, keep walking. Doors are marked.",
    ],
  },
  {
    id: "care-infrastructure",
    kind: "theory",
    title: "Care as Infrastructure",
    form: "dispatch",
    pull: "Mutual aid is not charity. It is a form of resistance.",
    summary: "Notes toward treating survival as a shared, ongoing build.",
    status: "active",
    tags: ["dispatch", "care"],
    body: [
      "Charity moves resources downward and asks to be thanked. Mutual aid moves resources laterally and asks to be continued.",
      "A table that grows because people carry pieces of it is infrastructure. A hotline that is answered at 3am is infrastructure. A zine that tells you which door is open this week is infrastructure. Art that only looks like care is not.",
      "The Provisions chamber is deliberately boring. That boredom is an ethic. Nobody should have to decode a sigil to find shelter.",
      "The rest of the site is allowed to be strange because this part is not.",
    ],
  },
  {
    id: "mess",
    kind: "theory",
    title: "A Short Defense of Mess",
    form: "text",
    pull: "A clean archive is often a violent one.",
    summary: "Unfinished, contradictory, and abandoned material belongs in public.",
    status: "active",
    tags: ["archive", "residue"],
    body: [
      "Most cultural websites imply that finished work is the meaningful work. Residue says the opposite without making a speech about it: process, mistakes, fragments, traces, and abandoned things are part of the work too.",
      "INFAC's archive is allowed to contain corrections, conflicting memories, and designs that failed a test. Failed symbols are not deleted. They go to Residue. Discarded things are still history.",
      "This is not an aesthetic of decay for its own sake. It is a refusal to launder a living collective into a portfolio.",
    ],
  },
  {
    id: "signal-owes",
    kind: "theory",
    title: "What the Signal Owes the Commons",
    form: "dispatch",
    pull: "Atmosphere is a privilege. It is never allowed to hide a resource.",
    summary: "The living surface of the site has debts to the people who use it.",
    status: "active",
    tags: ["dispatch", "interface"],
    body: [
      "Signal is the current condition of INFAC. It can be haunted, phosphorescent, unstable. It cannot be a maze with the exits painted shut.",
      "The Signal owes the commons: a way in that does not require initiation. A way to Provisions that does not require decoding. A way to the press that does not require a login. A way back.",
      "If the website is a work, then the work has to survive contact with a person who is tired, scared, or using a screen reader. That contact is not a compromise with the concept. It is the concept, tested.",
    ],
  },
  {
    id: "infidelic",
    kind: "theory",
    title: "Infidelic, in practice",
    form: "position",
    pull: "Nothing is sacred merely because it is inherited. Test it. Change it. Break it. See what happens.",
    summary: "Not a mashed-up occult religion. A way of handling inherited tools.",
    status: "active",
    tags: ["position"],
    body: [
      "Infidelic does not mean collecting other people's sacred objects and calling the pile a brand. Gnosticism, Thelema, Satanism, Luciferianism, and chaos magick are not one tradition, and INFAC is not the sequel to any of them.",
      "They are technologies for thinking about knowledge, autonomy, transformation, rebellion, perception, embodiment, symbolism, and liberation. INFAC studies them as such, then makes its own language.",
      "In practice that means: the person is not receiving doctrine. They are given tools, knowledge, resources, connections, art, and questions. They construct meaning. The interface should reveal possible paths, not dictate one route.",
      "Adversarial design, here, is not hostility toward the visitor. It is hostility toward the assumption that a website must behave like a store, a feed, or a church.",
    ],
  },
  {
    id: "open-questions",
    kind: "theory",
    title: "Open questions",
    form: "question",
    summary: "The constitution is not closed. These remain unfinished on purpose.",
    status: "unfinished",
    tags: ["question"],
    body: [
      "What is INFAC, today, as distinct from last year and from the rumor of it?",
      "What does INFAC refuse, and what does it refuse to refuse?",
      "What does INFAC protect, and who is left out of that protection?",
      "What does INFAC make that could not be made by a conventional collective, press, or aid group?",
      "What does INFAC share, and what must not be published?",
      "What does INFAC remember, including the parts that contradict the nicer story?",
      "What can art actually do here — not in general, here?",
      "What is the difference, in practice, between INFAC the collective, INFAC the commons, and the looser artist network?",
      "These are not prompts for a branding workshop. They are live. Answers that pretend to be final will be filed under Residue.",
    ],
  },
];

const issue001Articles: Article[] = [
  {
    id: "operations",
    issueId: "001",
    title: "Operations",
    kicker: "field notes",
    body: [
      "Field notes from actions — what happened, what nearly didn't, what we'd do differently.",
      "OP.003 — night drop. Supplies moved between three sites before the weather turned. Nothing logged that didn't need to be. The corridor was used as a pause, not a stage. One wheatpaste sheet went up because the wall was already wet and the glue would take. That sheet is not in this issue. The glue ghost might still be.",
      "OP.004 — the table. Two extra leaves arrived without discussion. A person who had not eaten sat first. The rest of the night arranged itself around that fact.",
    ],
    scrawl: "— still not sure OP.003 worked",
  },
  {
    id: "relics",
    issueId: "001",
    title: "Relics",
    kicker: "things that survived",
    body: [
      "A burned flyer. A confiscated banner. A photograph nobody will explain.",
      "The banner (returned). Someone brought it back in April. No note attached. It had been folded small enough to be a jacket. The crease is now part of the object.",
      "The unlabeled audio. Fourteen seconds. See Residue R-002. If you know what it is, you do not have to say. If you want it gone, say that through Correspondences.",
    ],
  },
  {
    id: "transmission",
    issueId: "001",
    title: "Transmission",
    kicker: "cut-up",
    body: ["Cut from notices, group chats, and a wall. Printed anyway."],
    cutup: [
      { text: "A NEW SAFE HOUSE", size: "big" },
      { text: "ask around, not online", size: "small" },
      { text: "the meeting moved again", size: "small" },
      { text: "STILL HAPPENING", size: "big" },
      { text: "unconfirmed, take it seriously anyway", size: "small" },
    ],
  },
  {
    id: "infidelic-corpus",
    issueId: "001",
    title: "The Infidelic Corpus",
    kicker: "accumulated texts",
    body: [
      "The accumulated texts — old and new, contradicting each other on purpose.",
      "This issue points into Theory rather than reprinting it all. Read: On Refusing to Be Legible. Care as Infrastructure. A Short Defense of Mess. What the Signal Owes the Commons. Infidelic, in practice. Open questions.",
      "The Corpus is a library. It will take more issues. Issue 001 is a threshold, not a greatest-hits.",
    ],
  },
  {
    id: "colophon",
    issueId: "001",
    title: "Colophon",
    kicker: "about the press",
    body: [
      "Printed in the browser. Designed to survive without the atmosphere layer. Readable without sound, without motion, without a mouse.",
      "Symbolic marks in this edition are placeholders in a registry. They are not borrowed occult insignia. They are waiting for the INFAC foundry to finish a language.",
      "Contradictions between Signal, Corpus, and Provisions are structural. Report errors of fact in Provisions immediately. Report errors of taste through the press.",
    ],
  },
];

export const issues: Issue[] = [
  {
    id: "001",
    kind: "issue",
    number: "001",
    title: "The Threshold Edition",
    published: "2026",
    pages: 36,
    contributors: 12,
    summary: "First public issue of the INFAC press. A threshold, not a greatest-hits.",
    status: "active",
    tags: ["corpus", "001"],
    cover: "/images/corpus-001.jpg",
    coverAlt:
      "Xeroxed zine cover: torn black paper, misregistered print layers, a broken circle, ink splatters, a red stamp smear.",
    articles: issue001Articles,
  },
];

export const residue: Residue[] = [
  {
    id: "r-001",
    kind: "residue",
    catalogId: "R-001",
    title: "The meeting that moved",
    media: "flyer",
    origin: "undated · damaged",
    summary: "Location crossed out twice, rewritten once.",
    status: "lost",
    tags: ["flyer", "event"],
    image: "/images/flyer-residue.jpg",
    imageAlt:
      "Damaged xeroxed flyer on a table, stained, torn corner, coffee ring, handwritten lines crossed out.",
    body: [
      "The paper is more reliable than the memory. Someone kept it because throwing it away felt like disappearing the meeting.",
      "Corresponds to an event that is listed as lost.",
    ],
  },
  {
    id: "r-002",
    kind: "residue",
    catalogId: "R-002",
    title: "14 seconds, unlabeled",
    media: "audio",
    origin: "audio / 00:14 / unidentified",
    summary: "Nobody currently remembers what this was for.",
    status: "unfinished",
    tags: ["audio", "signal-bleed"],
    body: [
      "A file with no name worth repeating. Room tone, then a laugh cut off, then a chair. It may belong to Signal Bleed. It may not.",
      "There is no player here. Playing it without consent of the people in the room would be a different project.",
    ],
  },
  {
    id: "r-003",
    kind: "residue",
    catalogId: "R-003",
    title: "Circle, triangle, axes",
    media: "design",
    origin: "interface v0.1 · discarded",
    summary:
      "The first threshold mark. It could have belonged to any 'mystical tech' project. It failed the INFAC test.",
    status: "archived",
    tags: ["symbol", "rejected"],
    body: [
      "A circle, a triangle, a central point, two axes. It worked. It also looked like a thousand other loading screens.",
      "No symbol enters the canonical system merely because it looks cool. This one failed the third test: could it belong only to INFAC?",
      "It is not destroyed. Discarded symbols are still INFAC history. The anti-sigil is the operation that marks that refusal.",
    ],
  },
  {
    id: "r-004",
    kind: "residue",
    catalogId: "R-004",
    title: "The ghost of a navbar",
    media: "note",
    origin: "interface v0.1 · discarded",
    summary: "A bottom navigation bar wearing a black robe.",
    status: "archived",
    tags: ["interface", "rejected"],
    body: [
      "Seven buttons along the floor of the screen. Cleverer than a header. Still a menu. The chamber metaphor was being illustrated rather than used.",
      "What replaced it: a seal, a chamber marker, a rooms index, a correspondence rail. The seven destinations remain. They are no longer a costume.",
    ],
  },
  {
    id: "r-005",
    kind: "residue",
    catalogId: "R-005",
    title: "Photograph, location unknown",
    media: "photograph",
    origin: "print box · undated",
    summary: "Negatives, a manila folder, faces turned down.",
    status: "unfinished",
    tags: ["photograph"],
    image: "/images/archive.jpg",
    imageAlt:
      "Archival table with film negatives, face-down torn photographs, rusted paperclips, a manila folder.",
    body: [
      "The box was labeled with a year that does not match the paper inside it. Until someone claims a frame, it stays Residue.",
    ],
  },
  {
    id: "r-093",
    kind: "residue",
    catalogId: "R-093",
    title: "093",
    media: "object",
    origin: "numeric · unexplained",
    summary: "A number that keeps turning up on envelopes.",
    status: "contested",
    tags: ["93", "hidden"],
    body: [
      "Not a doctrine. A recurrence. If you arrived here by searching, you already know why you wanted to.",
    ],
  },
  {
    id: "r-418",
    kind: "residue",
    catalogId: "R-418",
    title: "Room 418",
    media: "object",
    origin: "key · no door",
    summary: "The room number appears on a key that no longer opens anything.",
    status: "lost",
    tags: ["418", "hidden"],
    body: [
      "Filed here until a door claims it. Return is a legitimate operation even when the lock is gone.",
    ],
  },
];

export function getProject(id: string) {
  return projects.find((p) => p.id === id);
}
export function getArtist(id: string) {
  return artists.find((a) => a.id === id);
}
export function getPlace(id: string) {
  return places.find((p) => p.id === id);
}
export function getEvent(id: string) {
  return events.find((e) => e.id === id);
}
export function getResource(id: string) {
  return resources.find((r) => r.id === id);
}
export function getTheory(id: string) {
  return theory.find((t) => t.id === id);
}
export function getResidue(id: string) {
  return residue.find((r) => r.id === id);
}
export function getIssue(id: string) {
  return issues.find((i) => i.id === id);
}
export function getArticle(issueId: string, articleId: string) {
  const issue = getIssue(issueId);
  return issue?.articles.find((a) => a.id === articleId);
}
export function getTransmission() {
  return transmissions[0];
}

export function allSearchable() {
  const rows: { title: string; href: string; kind: string; haystack: string }[] = [];
  for (const p of projects) {
    rows.push({
      title: p.title,
      href: `/work/${p.id}`,
      kind: "work",
      haystack: `${p.title} ${p.summary} ${p.tag} ${p.body.join(" ")} ${p.tags.join(" ")}`,
    });
  }
  for (const t of theory) {
    rows.push({
      title: t.title,
      href: `/theory/${t.id}`,
      kind: "theory",
      haystack: `${t.title} ${t.summary} ${t.body.join(" ")} ${t.tags.join(" ")} ${t.pull ?? ""}`,
    });
  }
  for (const r of resources) {
    rows.push({
      title: r.title,
      href: `/provisions/${r.id}`,
      kind: "resource",
      haystack: `${r.title} ${r.summary} ${r.items.map((i) => `${i.name} ${i.what} ${i.phone ?? ""}`).join(" ")}`,
    });
  }
  for (const r of residue) {
    rows.push({
      title: `${r.catalogId} ${r.title}`,
      href: `/residue/${r.id}`,
      kind: "residue",
      haystack: `${r.catalogId} ${r.title} ${r.summary} ${r.body.join(" ")} ${r.tags.join(" ")}`,
    });
  }
  for (const i of issues) {
    rows.push({
      title: `Issue ${i.number} ${i.title}`,
      href: `/corpus/${i.id}`,
      kind: "corpus",
      haystack: `${i.title} ${i.summary} ${i.articles.map((a) => a.title).join(" ")}`,
    });
    for (const a of i.articles) {
      rows.push({
        title: a.title,
        href: `/corpus/${i.id}/${a.id}`,
        kind: "article",
        haystack: `${a.title} ${a.kicker} ${a.body.join(" ")}`,
      });
    }
  }
  for (const p of places) {
    rows.push({
      title: p.title,
      href: `/places/${p.id}`,
      kind: "place",
      haystack: `${p.title} ${p.summary} ${p.body.join(" ")}`,
    });
  }
  for (const a of artists) {
    rows.push({
      title: a.title,
      href: `/artists/${a.id}`,
      kind: "artist",
      haystack: `${a.title} ${a.summary} ${a.body.join(" ")}`,
    });
  }
  for (const e of events) {
    rows.push({
      title: e.title,
      href: `/events/${e.id}`,
      kind: "event",
      haystack: `${e.title} ${e.summary} ${e.body.join(" ")}`,
    });
  }
  for (const c of CHAMBERS) {
    rows.push({
      title: c.name,
      href: c.path,
      kind: "chamber",
      haystack: `${c.name} ${c.desc} ${c.id}`,
    });
  }
  return rows;
}
