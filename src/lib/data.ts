import coverEmber from "../assets/covers/ember.jpg";
import coverCartographer from "../assets/covers/cartographer.jpg";
import coverSalt from "../assets/covers/salt.jpg";
import coverEmpire from "../assets/covers/empire.jpg";
import coverBegin from "../assets/covers/begin.jpg";
import coverLetters from "../assets/covers/letters.jpg";

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */
export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
];

/* ------------------------------------------------------------------ */
/*  Services                                                           */
/* ------------------------------------------------------------------ */
export type Service = {
  id: string;
  num: string;
  title: string;
  short: string;
  tagline: string;
  intro: string;
  detail: string;
  benefits: string[];
  deliverables: string[];
};

export const SERVICES: Service[] = [
  {
    id: "ghostwriting",
    num: "01",
    title: "Ghostwriting",
    short:
      "Turn your ideas, experiences, and expertise into professionally written books with the help of experienced writers.",
    tagline: "Your voice. Our pen.",
    intro:
      "You bring the story — we bring the craft. Our ghostwriters interview you deeply, research thoroughly, and write a manuscript that sounds unmistakably like you, only sharper.",
    detail:
      "Whether it is a novel that has lived in your head for years, a memoir your family deserves, or a business book that cements your authority, we pair you with a genre-specialist writer and a structured collaboration process. You approve every milestone; your name goes on the cover; your rights stay yours.",
    benefits: [
      "A voice that is authentically yours, captured through deep-dive interviews",
      "Genre-specialist writers for fiction, memoir, business and more",
      "Complete confidentiality and 100% author-owned copyright",
      "Milestone-based delivery — you steer the story at every stage",
    ],
    deliverables: [
      "Discovery & voice-mapping interviews",
      "Chapter-by-chapter outline and narrative architecture",
      "Complete, original manuscript",
      "Structured revision rounds with your feedback",
      "Research, fact-checking and citation notes",
    ],
  },
  {
    id: "editing",
    num: "02",
    title: "Editing & Proofreading",
    short:
      "Refine your manuscript with professional editing, proofreading, and editorial guidance.",
    tagline: "Every sentence earns its place.",
    intro:
      "A great manuscript is rewritten, not written. Our editors move from the architecture of your story down to the punctuation — structure, pacing, voice, clarity, and polish.",
    detail:
      "Choose the depth your manuscript needs: developmental editing for structure and story, line editing for rhythm and style, copyediting for grammar and consistency, and a final proofread before release. You receive clear editorial letters, tracked changes, and a style sheet that keeps your book consistent to the last page.",
    benefits: [
      "Four levels of editorial care, from story structure to final proof",
      "Honest, constructive feedback that respects your voice",
      "Consistency in tone, timeline, terminology and character",
      "A manuscript that reads like it came from a major house",
    ],
    deliverables: [
      "Developmental edit with a comprehensive editorial letter",
      "Line & copy edit with tracked changes",
      "Custom style sheet for your book",
      "Final proofreading pass on the designed layout",
      "Follow-up consultation on revisions",
    ],
  },
  {
    id: "publishing",
    num: "03",
    title: "Book Publishing",
    short:
      "Navigate the publishing journey with professional formatting, ISBN guidance, and publishing support.",
    tagline: "From manuscript to market.",
    intro:
      "Publishing is a maze of formats, files, metadata and platforms. We walk it with you — preparing your book for print and digital shelves and setting it up to be found.",
    detail:
      "We handle interior formatting for print and eBook, guide your ISBN and imprint decisions, prepare copyright and front matter, and manage uploads and distribution setup across major self-publishing platforms. You keep full control of your rights and royalties while we handle the technical heavy lifting.",
    benefits: [
      "Flawless print & eBook formatting that meets retailer specifications",
      "Clear guidance on ISBNs, imprints, rights and royalties",
      "Distribution setup across major platforms and stores",
      "You retain 100% ownership and creative control",
    ],
    deliverables: [
      "Print-ready interior files (PDF) and reflowable eBook (EPUB)",
      "ISBN, metadata & category guidance",
      "Copyright page, front & back matter",
      "Platform setup and distribution support",
      "Proof review and pre-launch checklist",
    ],
  },
  {
    id: "design",
    num: "04",
    title: "Book Cover & Interior Design",
    short:
      "Make your book stand out with captivating covers, professional interior layouts, and custom illustrations.",
    tagline: "Judged by its cover. Loved for its pages.",
    intro:
      "Readers do judge a book by its cover — in a thumbnail, at arm's length, in half a second. We design covers that stop the scroll and interiors that honor the words.",
    detail:
      "Our designers study your genre's visual language, then find the angle that makes your book unmistakable. From typography and foil-worthy emblems to custom illustration and chapter ornaments, every detail is considered — and delivered as press-ready files with 3D mockups for your marketing.",
    benefits: [
      "Genre-aware cover concepts designed for thumbnail impact",
      "Typography-led interiors crafted for comfortable reading",
      "Custom illustration, ornaments and map design where it serves the story",
      "Files ready for every printer, platform and promo channel",
    ],
    deliverables: [
      "Three distinct cover directions to choose from",
      "Full wraparound cover: front, spine & back",
      "Professional interior typesetting & chapter design",
      "Custom illustrations & decorative elements",
      "Print-ready files + eBook cover + 3D promo mockups",
    ],
  },
  {
    id: "marketing",
    num: "05",
    title: "Book Marketing",
    short:
      "Build your author brand, increase visibility, and connect your book with the right audience.",
    tagline: "Written to be read.",
    intro:
      "A published book is a beginning, not an ending. We build the author brand and launch strategy that carry your book to the readers it was written for.",
    detail:
      "From your Amazon listing and author bio to launch campaigns, press materials and social content, we position your book with the same care we wrote it. Every campaign is tailored to your genre, goals and audience — no boilerplate, no vanity metrics.",
    benefits: [
      "A coherent author brand across every platform",
      "Launch strategy built around your genre and goals",
      "Retail listings optimized for discovery and conversion",
      "Marketing assets you can keep using long after launch",
    ],
    deliverables: [
      "Author brand kit: bio, positioning & visual identity",
      "Launch plan & promotional calendar",
      "Optimized book description, keywords & categories",
      "Social media kit & ad creatives",
      "Press release and outreach materials",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Process                                                            */
/* ------------------------------------------------------------------ */
export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discover Your Vision",
    text: "A deep-dive consultation to understand your story, your goals, your audience — and the voice only you can bring.",
  },
  {
    num: "02",
    title: "Plan & Create",
    text: "We shape the outline and craft the manuscript, keeping you involved at every milestone from first chapter to final draft.",
  },
  {
    num: "03",
    title: "Refine & Perfect",
    text: "Rigorous editing meets your feedback. We polish structure, rhythm and detail until every sentence earns its place.",
  },
  {
    num: "04",
    title: "Design & Publish",
    text: "Cover, interior, formatting and publishing setup — a book that looks as considered as it reads, on every shelf.",
  },
  {
    num: "05",
    title: "Promote & Grow",
    text: "Launch strategy, author branding and marketing that carry your book to the readers it was written for.",
  },
];

/* ------------------------------------------------------------------ */
/*  Why choose us                                                      */
/* ------------------------------------------------------------------ */
export const WHY_US = [
  {
    icon: "layers",
    title: "End-to-End Book Solutions",
    text: "One squad from blank page to bookshelf — writing, editing, design, publishing and marketing under a single roof.",
  },
  {
    icon: "compass",
    title: "Dedicated Project Support",
    text: "A single point of contact who knows your book as well as you do, from first call to launch day.",
  },
  {
    icon: "users",
    title: "Professional Creative Team",
    text: "Writers, editors, designers and strategists who live and breathe books — matched to your genre.",
  },
  {
    icon: "gem",
    title: "Personalized Approach",
    text: "No templates, no assembly lines. Every engagement is shaped around your story, voice and ambitions.",
  },
  {
    icon: "shield",
    title: "Quality-Focused Delivery",
    text: "Milestone reviews and exacting standards at every stage. Nothing ships until it deserves your name.",
  },
  {
    icon: "heart",
    title: "Author-First Philosophy",
    text: "You keep your rights, your voice and the final word. Always. We succeed when your book does.",
  },
];

/* ------------------------------------------------------------------ */
/*  Testimonials — deliberately placeholders, never fabricated reviews */
/* ------------------------------------------------------------------ */
export const TESTIMONIALS = [
  {
    quote:
      "This space is reserved for a future author's words — their story, their book, their experience of the journey, told entirely in their own voice.",
    name: "Reserved for a Future Author",
    role: "Client testimonial · Coming soon",
  },
  {
    quote:
      "We don't borrow praise. Every testimonial that appears on this page will come from a real author, about a real book we built together.",
    name: "Reserved for a Client Review",
    role: "Client testimonial · Coming soon",
  },
  {
    quote:
      "Imagine your name here, beside the title we crafted together. We are saving you the seat — and the dedication page.",
    name: "Your Name Could Be Here",
    role: "Future Wordsmith author",
  },
];

/* ------------------------------------------------------------------ */
/*  Portfolio — fictional concept projects for demonstration only.     */
/*  Replace entries here with real client work as it is completed.     */
/* ------------------------------------------------------------------ */
export type TypoCover = {
  bg: string;
  fg: string;
  accent: string;
  motif: "rule" | "moon" | "meridian";
  label: string;
};

export type Book = {
  id: string;
  title: string;
  author: string;
  genre: string;
  category: string;
  year: string;
  cover?: string;
  typo?: TypoCover;
  spine: string;
  spineFg: string;
  description: string;
  services: string[];
};

export const BOOKS: Book[] = [
  {
    id: "ember",
    title: "A Crown of Ember and Ash",
    author: "R. E. Holloway",
    genre: "Epic Fantasy",
    category: "Fantasy",
    year: "Concept · 2026",
    cover: coverEmber,
    spine: "#17130e",
    spineFg: "#c6a36a",
    description:
      "A foil-stamped emblem cover for an epic fantasy cycle — engraved gold linework, drifting embers and a crown that reads at thumbnail size and rewards a second look in hand.",
    services: ["Ghostwriting", "Book Design", "Book Marketing"],
  },
  {
    id: "cartographer",
    title: "The Cartographer of Lost Hours",
    author: "Eleanor Voss",
    genre: "Literary Fiction",
    category: "Fiction",
    year: "Concept · 2026",
    cover: coverCartographer,
    spine: "#1d3226",
    spineFg: "#e9ddc2",
    description:
      "Literary fiction dressed like a prize winner: deep forest green, an antique compass rose and cartographic contours that echo a novel about mapping the hours we lose.",
    services: ["Editing & Proofreading", "Book Design", "Publishing"],
  },
  {
    id: "letters",
    title: "Letters We Never Sent",
    author: "Charlotte Reyes",
    genre: "Contemporary Romance",
    category: "Romance",
    year: "Concept · 2026",
    cover: coverLetters,
    spine: "#a97a74",
    spineFg: "#fdf3ee",
    description:
      "Blush tones, drifting airmail envelopes and a wax-seal red — an illustrated romance cover that promises tenderness before the first page is turned.",
    services: ["Ghostwriting", "Book Design", "Book Marketing"],
  },
  {
    id: "salt",
    title: "Salt in the Lantern Light",
    author: "Margaret Ellison",
    genre: "Memoir",
    category: "Memoir",
    year: "Concept · 2026",
    cover: coverSalt,
    spine: "#463625",
    spineFg: "#f0e5cf",
    description:
      "A memoir cover built from a single sepia photograph — lighthouse, mist and lantern glow — with quiet ivory type that lets a life story breathe.",
    services: ["Ghostwriting", "Editing & Proofreading", "Publishing"],
  },
  {
    id: "empire",
    title: "The Quiet Empire",
    author: "Daniel Okafor",
    genre: "Business & Leadership",
    category: "Business",
    year: "Concept · 2026",
    cover: coverEmpire,
    spine: "#e6ddc8",
    spineFg: "#171717",
    description:
      "Ivory, architectural gold lines and confident charcoal serif type — a business book designed to sit spine-out on an executive's shelf.",
    services: ["Ghostwriting", "Book Design", "Book Marketing"],
  },
  {
    id: "begin",
    title: "Begin Again, Softly",
    author: "Dr. Maya Sterling",
    genre: "Self-Help & Wellbeing",
    category: "Self-Help",
    year: "Concept · 2026",
    cover: coverBegin,
    spine: "#d3bd9c",
    spineFg: "#4a3423",
    description:
      "A rising sun of hand-drawn arcs in terracotta and gold — a self-help cover that feels like the first calm morning of a new habit.",
    services: ["Editing & Proofreading", "Book Design", "Publishing"],
  },
  {
    id: "longnow",
    title: "The Long Now of Us",
    author: "Prof. Adrian Hale",
    genre: "Narrative Nonfiction",
    category: "Nonfiction",
    year: "Concept · 2026",
    typo: { bg: "#1c1a16", fg: "#f5f0e8", accent: "#c6a36a", motif: "rule", label: "Essays on time, memory & inheritance" },
    spine: "#1c1a16",
    spineFg: "#c6a36a",
    description:
      "A typography-only cover for narrative nonfiction — stacked serif lines and hairline rules, proof that restraint can be the loudest voice on the table.",
    services: ["Editing & Proofreading", "Book Design"],
  },
  {
    id: "vellum",
    title: "Vellum & Bone",
    author: "Isolde Marsh",
    genre: "Poetry",
    category: "Poetry",
    year: "Concept · 2026",
    typo: { bg: "#e9dfcc", fg: "#57281e", accent: "#9c3d2e", motif: "moon", label: "Poems" },
    spine: "#e9dfcc",
    spineFg: "#57281e",
    description:
      "A poetry collection in vellum tones and oxblood ink, a single eclipsed moon holding the whole cover together — designed to be read by lamplight.",
    services: ["Editing & Proofreading", "Book Design"],
  },
  {
    id: "meridian",
    title: "Midnight at the Meridian",
    author: "Theo Cross",
    genre: "Thriller",
    category: "Fiction",
    year: "Concept · 2026",
    typo: { bg: "#101c2c", fg: "#dce4ee", accent: "#8fa8c4", motif: "meridian", label: "A thriller" },
    spine: "#101c2c",
    spineFg: "#8fa8c4",
    description:
      "Midnight blue, a silver meridian line and one star fixed at zero degrees — a thriller cover built from pure geometry and suspense.",
    services: ["Ghostwriting", "Book Design", "Book Marketing"],
  },
];

export const PORTFOLIO_FILTERS = [
  "All",
  "Fiction",
  "Fantasy",
  "Romance",
  "Memoir",
  "Business",
  "Self-Help",
  "Nonfiction",
  "Poetry",
];

/* ------------------------------------------------------------------ */
/*  Editorial photography (Pexels)                                     */
/* ------------------------------------------------------------------ */
export const EDITORIAL = {
  typewriter:
    "https://images.pexels.com/photos/9572418/pexels-photo-9572418.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  moodyWriter:
    "https://images.pexels.com/photos/6037576/pexels-photo-6037576.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  leatherBooks:
    "https://images.pexels.com/photos/8391464/pexels-photo-8391464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  library:
    "https://images.pexels.com/photos/29626802/pexels-photo-29626802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  sunShelf:
    "https://images.pexels.com/photos/7912968/pexels-photo-7912968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  desk:
    "https://images.pexels.com/photos/7969735/pexels-photo-7969735.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
};

/* ------------------------------------------------------------------ */
/*  Contact form options & details                                     */
/* ------------------------------------------------------------------ */
export const SERVICE_OPTIONS = [
  "Ghostwriting",
  "Editing & Proofreading",
  "Book Publishing",
  "Book Cover & Interior Design",
  "Book Marketing",
  "Full Package — Idea to Launch",
  "Not sure yet — advise me",
];

export const GENRE_OPTIONS = [
  "Literary Fiction",
  "Fantasy",
  "Science Fiction",
  "Romance",
  "Thriller / Mystery",
  "Memoir / Autobiography",
  "Business / Leadership",
  "Self-Help / Wellbeing",
  "Nonfiction (Other)",
  "Poetry",
  "Children's / Young Adult",
  "Other / Undecided",
];

export const BUDGET_OPTIONS = [
  "Under $3,000",
  "$3,000 – $7,500",
  "$7,500 – $15,000",
  "$15,000 – $30,000",
  "$30,000+",
  "Not sure yet",
];

/* Placeholder contact details — replace with live channels before launch */
export const CONTACT_INFO = {
  email: "hello@wordsmithsquad.com",
  phone: "+1 (000) 000-0000",
  regions: "United States · United Kingdom · Canada · Australia",
  hours: "Monday – Friday, 9am – 6pm (EST)",
};

export const SOCIALS = [
  { id: "instagram", label: "Instagram" },
  { id: "linkedin", label: "LinkedIn" },
  { id: "x", label: "X (Twitter)" },
  { id: "facebook", label: "Facebook" },
];

/* ------------------------------------------------------------------ */
/*  About page                                                         */
/* ------------------------------------------------------------------ */
export const PHILOSOPHY = [
  {
    num: "I",
    title: "Story before formula",
    text: "Trends fade; stories endure. We chase what is true in your book, not what is momentarily fashionable on a chart.",
  },
  {
    num: "II",
    title: "Craft is a discipline",
    text: "Inspiration starts the book. Rigorous outlining, rewriting and editing are what finish it — beautifully.",
  },
  {
    num: "III",
    title: "The author owns the room",
    text: "We advise with candor and execute with precision, but every final decision belongs to the name on the cover.",
  },
  {
    num: "IV",
    title: "Beauty is functional",
    text: "A cover must sell, an interior must invite, a sentence must carry. We design elegance that works for a living.",
  },
];

export const SQUAD_ROLES = [
  {
    title: "The Ghostwriters",
    text: "Novelists, memoirists and business writers who can inhabit any voice — and disappear behind yours.",
  },
  {
    title: "The Editors",
    text: "Developmental thinkers and line-level perfectionists who treat your manuscript like it matters. Because it does.",
  },
  {
    title: "The Designers",
    text: "Cover artists, typographers and illustrators fluent in the visual dialects of every genre.",
  },
  {
    title: "The Publishers & Strategists",
    text: "Formatting specialists, launch planners and marketers who turn a finished file into a finished book — and a read one.",
  },
];

export const MARQUEE_ITEMS = [
  "Ghostwriting",
  "Editing & Proofreading",
  "Book Publishing",
  "Cover Design",
  "Book Marketing",
  "Memoirs",
  "Literary Fiction",
  "Business Books",
  "Fantasy & Romance",
  "Author Branding",
];