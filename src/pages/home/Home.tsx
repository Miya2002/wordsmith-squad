import { useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/utils/cn";
import { Book3D } from "@/components/Book3D";
import { WsMark } from "@/components/Logo";
import { Button, CountUp, Eyebrow, Reveal, SectionHead, Words, usePageMeta } from "@/components/ui";
import { FinalCTA, Testimonials } from "@/components/Sections";
import { TrailerPlayer } from "@/components/trailer/TrailerPlayer";
import { TrailerModal } from "@/components/trailer/TrailerModal";
import { TOTAL, fmtTime } from "@/lib/trailer";
import {
  IconArrowUpRight,
  IconCheck,
  IconGlobe,
  IconPlay,
  SERVICE_ICONS,
  WHY_ICONS,
} from "@/components/Icons";
import { BOOKS, EDITORIAL, MARQUEE_ITEMS, PROCESS_STEPS, SERVICES, WHY_US } from "@/lib/data";

const rd = (ms: number) => ({ "--rd": `${ms}ms` }) as CSSProperties;
const depth = (n: number) => ({ "--depth": n }) as CSSProperties;

/* rotating literary seal */
function Seal({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
      <div className="relative h-full w-full animate-[spin_24s_linear_infinite]">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <defs>
            <path id="sealcircle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
          </defs>
          <circle cx="50" cy="50" r="49" fill="rgba(13,12,10,0.7)" stroke="#C6A36A" strokeOpacity="0.4" strokeWidth="0.75" />
          <text fill="#C6A36A" fontSize="8.2" letterSpacing="2.6" fontFamily="Inter, sans-serif" fontWeight="600">
            <textPath href="#sealcircle">YOUR STORY · OUR CRAFT · ONE MASTERPIECE ·</textPath>
          </text>
        </svg>
      </div>
      <WsMark tone="onDark" className="absolute top-1/2 left-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}

/* ---------- service bento ---------- */
const BENTO = [
  "md:col-span-2 lg:col-span-3 lg:row-span-2",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2",
];

const STEP_TAGS = [
  "Discovery call · Vision brief",
  "Outline · Manuscript",
  "Editorial letter · Polish",
  "Cover · Layout · Publishing files",
  "Launch plan · Author brand",
];

const WHY_LAYOUT = [
  { span: "md:col-span-4", tone: "ink" },
  { span: "md:col-span-2", tone: "paper" },
  { span: "md:col-span-2", tone: "paper" },
  { span: "md:col-span-4", tone: "gold" },
  { span: "md:col-span-3", tone: "paper" },
  { span: "md:col-span-3", tone: "ink" },
] as const;

export default function Home() {
  usePageMeta(
    "Wordsmith Squad — Your Story. Our Craft. One Masterpiece.",
    "Full-service creative writing & publishing agency: ghostwriting, editing, publishing, book design and marketing for authors, entrepreneurs and brands."
  );
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement>(null);
  const [trailerOpen, setTrailerOpen] = useState(false);

  const onHeroMove = (e: PointerEvent<HTMLElement>) => {
    if (e.pointerType === "touch") return;
    const el = heroRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--px", String((x - 0.5) * 2));
    el.style.setProperty("--py", String((y - 0.5) * 2));
    el.style.setProperty("--hx", `${x * 100}%`);
    el.style.setProperty("--hy", `${y * 100}%`);
  };
  const onHeroLeave = () => {
    const el = heroRef.current;
    if (!el) return;
    el.style.setProperty("--px", "0");
    el.style.setProperty("--py", "0");
  };

  const featured = ["ember", "cartographer", "empire", "letters"].map((id) => BOOKS.find((b) => b.id === id)!);
  const heroMain = BOOKS.find((b) => b.id === "ember")!;
  const heroLeft = BOOKS.find((b) => b.id === "salt")!;
  const heroRight = BOOKS.find((b) => b.id === "empire")!;

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        ref={heroRef}
        onPointerMove={onHeroMove}
        onPointerLeave={onHeroLeave}
        className="relative isolate overflow-hidden bg-ink-950"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="bg-dots absolute inset-0" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(620px circle at var(--hx, 72%) var(--hy, 32%), rgba(198,163,106,0.14), transparent 62%)",
            }}
          />
          <WsMark tone="monoIvory" className="absolute top-[4%] right-[-14%] h-[48rem] w-[48rem] opacity-[0.025]" />
          <div className="animate-glow absolute top-[10%] right-[2%] h-130 w-130 rounded-full bg-gold/[0.08] blur-[140px]" />
          <div className="absolute bottom-[-10%] left-[-10%] h-110 w-110 rounded-full bg-gold/[0.05] blur-[130px]" />
        </div>

        <div className="wrap relative grid min-h-svh items-center gap-14 pt-36 pb-28 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6 lg:pt-40 lg:pb-32">
          {/* copy */}
          <div className="min-w-0">
            <div className="rise" style={rd(60)}>
              <Eyebrow tone="light">Creative Writing &amp; Publishing Agency</Eyebrow>
            </div>

            <h1 className="font-display mt-8 text-[clamp(2.75rem,6.3vw,5.9rem)] leading-[1.02] font-bold text-ivory">
              <Words text="Every Great Book Begins With a" delay={180} />{" "}
              <span className="relative inline-block">
                <Words text="Story." inner="text-sheen italic font-semibold" delay={780} />
                <svg
                  aria-hidden
                  viewBox="0 0 300 20"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-3 w-full"
                >
                  <path
                    className="draw"
                    pathLength={400}
                    d="M3 14C60 4 150 2 297 11"
                    fill="none"
                    stroke="#C6A36A"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="rise mt-9 max-w-xl text-base leading-relaxed text-ivory/65 md:text-[1.075rem]" style={rd(520)}>
              From the first spark of an idea to the final published masterpiece, Wordsmith Squad brings your
              vision to life through professional writing, editing, publishing, design, and marketing services.
            </p>

            <div className="rise mt-10 flex flex-wrap items-center gap-4" style={rd(660)}>
              <Button to="/contact" variant="gold">
                Start Your Book Journey
              </Button>
              <Button to="/services" variant="outline-light">
                Explore Our Services
              </Button>
              <button
                onClick={() => setTrailerOpen(true)}
                className="group inline-flex cursor-pointer items-center gap-3.5 rounded-full py-1 pr-3 pl-1 text-left transition-colors"
                aria-label={`Watch the trailer, ${fmtTime(TOTAL)}`}
              >
                <span className="relative flex h-13 w-13 items-center justify-center">
                  <span className="absolute inset-0 animate-ping rounded-full bg-gold/30" />
                  <span className="relative flex h-full w-full items-center justify-center rounded-full border border-gold/60 bg-gold/10 text-gold transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-ink-950">
                    <IconPlay className="ml-0.5 h-4 w-4" />
                  </span>
                </span>
                <span>
                  <span className="block text-[0.8125rem] font-semibold text-ivory transition-colors group-hover:text-gold-light">
                    Watch the Trailer
                  </span>
                  <span className="mt-0.5 block text-[0.625rem] font-semibold tracking-[0.22em] text-ivory/40 uppercase">
                    {fmtTime(TOTAL)} · with sound
                  </span>
                </span>
              </button>
            </div>

            <div className="rise mt-12 inline-flex flex-wrap items-center gap-x-4 gap-y-2 rounded-full border border-ivory/10 bg-ivory/[0.04] py-2.5 pr-6 pl-3" style={rd(800)}>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/15 text-gold">
                <IconGlobe className="h-4 w-4" />
              </span>
              <p className="text-[0.6875rem] font-semibold tracking-[0.2em] text-ivory/45 uppercase">Serving authors in</p>
              <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-gold-light">
                US <span className="text-gold/50">·</span> UK <span className="text-gold/50">·</span> CANADA{" "}
                <span className="text-gold/50">·</span> AUSTRALIA
              </p>
            </div>
          </div>

          {/* book stage */}
          <div className="rise relative mx-auto w-full max-w-136 lg:max-w-none" style={rd(380)}>
            <div className="relative aspect-[10/11]">
              {/* orbit rings */}
              <div aria-hidden className="absolute inset-[3%] rounded-full border border-gold/15" />
              <div aria-hidden className="absolute inset-[16%] animate-[spin_70s_linear_infinite] rounded-full border border-dashed border-gold/25" />
              <div aria-hidden className="absolute top-1/2 left-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.07] blur-3xl" />

              <Seal className="absolute -top-2 right-[2%] z-40 hidden h-24 w-24 sm:block" />

              <div className="parallax absolute top-[12%] left-0 z-10 w-[36%]" style={depth(0.6)}>
                <div style={{ filter: "brightness(0.92)" }}>
                  <Book3D book={heroLeft} ry={20} float floatDelay="-2.4s" priority />
                </div>
              </div>
              <div className="parallax absolute top-0 left-[54%] z-20 w-[44%] -translate-x-1/2" style={depth(1)}>
                <Book3D book={heroMain} ry={25} float priority />
              </div>
              <div className="parallax absolute top-[26%] right-0 z-30 w-[34%]" style={depth(1.5)}>
                <Book3D book={heroRight} ry={30} float floatDelay="-4.8s" priority />
              </div>

              {/* floating glass chips */}
              <div className="parallax absolute top-[-2%] left-[-4%] z-40 hidden sm:block" style={depth(2)}>
                <div className="glass animate-floaty flex items-center gap-2.5 rounded-2xl py-2.5 pr-4 pl-2.5" style={{ "--fd": "-1s" } as CSSProperties}>
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gold text-ink-950">
                    <IconCheck className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-semibold text-ivory">Draft complete</span>
                </div>
              </div>
              <div className="parallax absolute bottom-[14%] left-[-3%] z-40 hidden sm:block" style={depth(2.2)}>
                <div className="glass animate-floaty flex items-center gap-3 rounded-2xl py-3 pr-5 pl-4" style={{ "--fd": "-3.4s" } as CSSProperties}>
                  <span className="flex -space-x-1.5">
                    <i className="h-5 w-5 rounded-full border-2 border-ink-950 bg-gold" />
                    <i className="h-5 w-5 rounded-full border-2 border-ink-950 bg-ivory" />
                    <i className="h-5 w-5 rounded-full border-2 border-ink-950 bg-ink-600" />
                  </span>
                  <span className="text-xs font-semibold text-ivory">Cover approved</span>
                </div>
              </div>
              <div className="parallax absolute right-[-2%] bottom-[2%] z-40 hidden sm:block" style={depth(1.8)}>
                <div className="glass animate-floaty rounded-2xl py-3 pr-4 pl-4" style={{ "--fd": "-5.5s" } as CSSProperties}>
                  <span className="block text-xs font-semibold text-ivory">Print + eBook ready</span>
                  <span className="mt-1.5 flex gap-1.5">
                    {["PDF", "EPUB", "ISBN"].map((t) => (
                      <span key={t} className="rounded-md bg-gold/15 px-1.5 py-0.5 text-[0.5625rem] font-semibold tracking-wider text-gold">
                        {t}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            </div>

            {/* journey tracker */}
            <div className="glass mt-9 rounded-3xl px-6 pt-5 pb-4 lg:mt-5">
              <ol className="relative flex items-start justify-between">
                <span aria-hidden className="absolute top-[0.4rem] right-4 left-4 h-px bg-ivory/15" />
                <span aria-hidden className="absolute top-[0.4rem] left-4 h-px w-[78%] bg-gradient-to-r from-gold to-gold/30" />
                {["Idea", "Write", "Edit", "Design", "Publish"].map((s, i) => (
                  <li
                    key={s}
                    className="relative z-10 flex flex-col items-center gap-2.5 text-[0.5625rem] font-semibold tracking-[0.2em] text-ivory/60 uppercase"
                  >
                    <span className="relative flex h-3 w-3">
                      {i === 4 && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />}
                      <span className={cn("relative h-3 w-3 rounded-full border border-gold", i < 4 ? "bg-gold" : "bg-ink-950")} />
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-center text-[0.5625rem] tracking-[0.22em] text-ivory/30 uppercase">
                Concept covers &amp; interface · Illustrative only
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex" aria-hidden>
          <span className="text-[0.5625rem] tracking-[0.4em] text-ivory/35 uppercase">Scroll</span>
          <div className="scroll-cue-line h-12 w-px bg-ivory/10">
            <span />
          </div>
        </div>
      </section>

      {/* ================= MARQUEE ================= */}
      <section className="marquee relative overflow-hidden border-y border-ivory/10 bg-ink-950 py-9 md:py-12" aria-hidden>
        <div className="marquee-track" style={{ "--md": "55s" } as CSSProperties}>
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center">
              {MARQUEE_ITEMS.map((item, i) => (
                <span key={`${dup}-${item}`} className="flex items-center gap-8 pr-8 whitespace-nowrap md:gap-12 md:pr-12">
                  <span
                    className={cn(
                      "font-display text-5xl font-semibold md:text-7xl",
                      i % 2 ? "text-sheen italic" : "text-outline"
                    )}
                  >
                    {item}
                  </span>
                  <span className="text-xl text-gold/60 md:text-2xl">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ================= TRAILER ================= */}
      <section id="trailer" className="relative overflow-hidden bg-ink-950 pt-20 pb-28 md:pt-28 md:pb-40">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="animate-glow absolute top-[40%] left-1/2 h-150 w-250 -translate-x-1/2 rounded-full bg-gold/[0.09] blur-[150px]" />
        </div>
        <div className="wrap relative">
          <SectionHead
            tone="light"
            align="center"
            eyebrow="The Trailer"
            title={
              <>
                Your Book, <em className="text-sheen italic">in Under 40 Seconds.</em>
              </>
            }
            text="From the first spark of an idea to a finished masterpiece — watch how the squad turns a story into a book."
          />
          <Reveal delay={120} className="relative mx-auto mt-14 max-w-5xl">
            <div aria-hidden className="absolute -inset-4 rounded-[3rem] bg-gold/[0.1] blur-3xl" />
            <TrailerPlayer
              pauseOffscreen
              className="relative border border-gold/25 shadow-[0_60px_140px_-50px_rgba(198,163,106,0.5)]"
            />
          </Reveal>
          <p className="mt-8 text-center text-xs tracking-wide text-ivory/40">
            Prefer the big screen?{" "}
            <Link to="/trailer" className="font-semibold text-gold underline-offset-4 hover:underline">
              Open cinema mode →
            </Link>
          </p>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="relative rounded-t-[2.5rem] bg-ivory py-24 md:rounded-t-[3.5rem] md:py-36">
        <div className="wrap grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
          <Reveal className="relative pr-6 pb-14 md:pr-12">
            <img
              src={EDITORIAL.typewriter}
              alt="A writer's hands at a vintage typewriter, manuscript pages and coffee nearby"
              loading="lazy"
              className="img-editorial aspect-[4/5] w-full rounded-[2rem] object-cover md:rounded-[2.5rem]"
            />
            <img
              src={EDITORIAL.library}
              alt="Antique library shelves in warm light"
              loading="lazy"
              className="img-editorial absolute right-0 bottom-0 aspect-square w-[46%] rounded-[1.75rem] border-[6px] border-ivory object-cover shadow-[0_30px_60px_-24px_rgba(23,23,23,0.5)]"
            />
            <div className="absolute top-8 -left-3 rounded-full bg-ink px-5 py-3 text-[0.625rem] font-semibold tracking-[0.22em] text-gold uppercase shadow-xl md:-left-6">
              ✦ One roof, every craft
            </div>
            <div className="absolute bottom-20 -left-3 hidden rounded-3xl bg-paper px-6 py-4 shadow-[0_24px_50px_-20px_rgba(23,23,23,0.4)] md:-left-8 md:block">
              <p className="font-display text-3xl font-semibold text-gold-dark">100%</p>
              <p className="mt-0.5 text-[0.625rem] font-semibold tracking-[0.2em] text-ink/55 uppercase">Rights stay yours</p>
            </div>
          </Reveal>

          <div>
            <SectionHead
              eyebrow="Welcome to Wordsmith Squad"
              title={
                <>
                  More Than a Publishing Partner. <em className="text-gold-dark italic">Your Creative Squad.</em>
                </>
              }
            />
            <Reveal delay={120}>
              <p className="mt-7 text-lg leading-relaxed text-ink/70">
                At Wordsmith Squad, we believe every story deserves to be told beautifully. Our team combines
                creativity, expertise, and industry knowledge to help authors turn ideas into professionally
                crafted books that leave a lasting impression.
              </p>
              <ul className="mt-8 flex flex-wrap gap-2.5">
                {[
                  "Aspiring & established authors",
                  "Entrepreneurs & business owners",
                  "Memoirists & life storytellers",
                  "Fiction & nonfiction writers",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-full border border-beige bg-paper px-4 py-2.5 text-[0.8125rem] font-medium text-ink/75"
                  >
                    <span className="text-[0.6rem] text-gold-dark">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-11 flex flex-wrap items-center gap-8">
                <Button to="/about" variant="ink">
                  Meet the Squad
                </Button>
                <p className="font-display text-xl text-ink/55 italic">— one squad, one masterpiece.</p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* stat bento */}
        <div className="wrap mt-20 md:mt-28">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
            {[
              { to: 5, pad: 2, suffix: "", label: "Core disciplines" },
              { to: 4, pad: 2, suffix: "", label: "Countries served" },
              { to: 100, pad: 0, suffix: "%", label: "Rights retained by you" },
              { to: 1, pad: 2, suffix: "", label: "Dedicated squad per book" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div className="spot rounded-[1.75rem] border border-beige bg-paper px-6 py-8 text-center transition-transform duration-500 hover:-translate-y-1 md:py-10">
                  <CountUp to={s.to} pad={s.pad} suffix={s.suffix} className="font-display block text-5xl font-semibold text-gold-dark md:text-6xl" />
                  <p className="mt-3 text-[0.625rem] font-semibold tracking-[0.24em] text-ink/55 uppercase">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES (bento) ================= */}
      <section className="round-top relative overflow-hidden bg-ink-900 pt-24 pb-28 md:pt-36 md:pb-40">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="bg-dots absolute inset-0 opacity-50" />
          <div className="animate-glow absolute top-[10%] left-[-10%] h-130 w-130 rounded-full bg-gold/[0.07] blur-[140px]" />
        </div>
        <div className="wrap relative">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHead
              tone="light"
              eyebrow="What We Do"
              title={
                <>
                  Five Crafts. <em className="text-sheen italic">One Masterpiece.</em>
                </>
              }
              text="Every service stands alone — and works even better together. Take one, or take the whole journey from idea to launch."
            />
            <Reveal delay={200} className="pb-1">
              <Button to="/services" variant="outline-light">
                All Services in Detail
              </Button>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
            {SERVICES.map((s, i) => {
              const Icon = SERVICE_ICONS[s.id];
              const big = i === 0;
              return (
                <Reveal key={s.id} delay={i * 90} className={BENTO[i]}>
                  <Link
                    to="/services"
                    state={{ anchor: s.id }}
                    className="spot group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-ivory/10 bg-ivory/[0.035] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/30 md:p-10"
                  >
                    <div className="flex items-start justify-between">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/12 text-gold transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-ink-950">
                        <Icon className="h-7 w-7" />
                      </span>
                      <span className="font-display text-5xl text-outline italic" style={{ "--so": "rgba(245,240,232,0.18)" } as CSSProperties}>
                        {s.num}
                      </span>
                    </div>
                    <h3 className={cn("font-display mt-8 font-semibold text-ivory", big ? "text-3xl md:text-4xl" : "text-2xl")}>
                      {s.title}
                    </h3>
                    <p className={cn("mt-4 leading-relaxed text-ivory/60", big ? "max-w-md text-base" : "flex-1 text-sm")}>
                      {s.short}
                    </p>

                    {big && (
                      <div className="mt-8 flex-1">
                        <div className="rounded-2xl border border-ivory/10 bg-ink-950/70 p-6">
                          <p className="flex items-center gap-2 text-[0.625rem] font-semibold tracking-[0.26em] text-gold uppercase">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" /> Draft · Chapter One
                          </p>
                          <p className="font-display mt-4 text-xl leading-relaxed text-ivory/85 italic">
                            &ldquo;The harbor smelled of salt and unfinished sentences, and Mara had come to settle both
                            <span className="caret" aria-hidden />
                          </p>
                          <div className="mt-5 flex items-center gap-2 text-[0.625rem] tracking-widest text-ivory/35 uppercase">
                            <span className="rounded-full bg-gold/15 px-2.5 py-1 text-gold">Your voice</span>
                            <span className="rounded-full bg-ivory/5 px-2.5 py-1">Our pen</span>
                          </div>
                        </div>
                      </div>
                    )}

                    <span className="mt-8 inline-flex items-center gap-3 text-[0.6875rem] font-semibold tracking-[0.2em] text-gold uppercase">
                      Learn More
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-ink-950">
                        <IconArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </span>
                  </Link>
                </Reveal>
              );
            })}

            <Reveal delay={450} className="md:col-span-2 lg:col-span-2">
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] bg-gold p-8 text-ink-950 md:p-10">
                <WsMark tone="monoInk" className="absolute -right-8 -bottom-10 h-52 w-52 opacity-[0.1]" />
                <div className="relative">
                  <p className="eyebrow text-ink-950/70">Not sure where to begin?</p>
                  <h3 className="font-display mt-5 text-2xl leading-snug font-semibold">
                    Tell us about your idea. We&rsquo;ll map the journey — free.
                  </h3>
                </div>
                <div className="relative mt-8">
                  <Button to="/contact" variant="ink">
                    Free Consultation
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= PROCESS (stacking cards) ================= */}
      <section className="round-top relative bg-ivory pt-24 pb-28 md:pt-36 md:pb-40">
        <div className="wrap grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHead
              eyebrow="How We Work"
              title={
                <>
                  From First Spark to <em className="text-gold-dark italic">Finished Spine.</em>
                </>
              }
              text="A proven five-step journey, tailored to your book — with you at the table for every decision that matters."
            />
            <Reveal delay={160} className="mt-10 flex flex-wrap items-center gap-6">
              <Button to="/contact" variant="ink">
                Start With Step One
              </Button>
              <p className="text-[0.6875rem] font-semibold tracking-[0.2em] text-ink/45 uppercase">Scroll the stack ↓</p>
            </Reveal>
          </div>

          <ol className="space-y-6 pb-4">
            {PROCESS_STEPS.map((step, i) => {
              const theme = i === 4 ? "gold" : i % 2 === 0 ? "ink" : "paper";
              return (
                <li key={step.num} className="sticky" style={{ top: `calc(6.5rem + ${i * 1.15}rem)` }}>
                  <article
                    className={cn(
                      "relative flex min-h-[19rem] flex-col justify-between overflow-hidden rounded-[2rem] p-8 shadow-[0_-24px_50px_-28px_rgba(23,23,23,0.45)] md:min-h-[21rem] md:rounded-[2.5rem] md:p-12",
                      theme === "ink" && "bg-ink text-ivory",
                      theme === "paper" && "border border-beige bg-paper text-ink",
                      theme === "gold" && "bg-gold text-ink-950"
                    )}
                  >
                    <span
                      aria-hidden
                      className="font-display text-outline pointer-events-none absolute -top-4 right-5 text-[8.5rem] leading-none font-bold italic md:text-[12rem]"
                      style={
                        {
                          "--so":
                            theme === "ink"
                              ? "rgba(198,163,106,0.5)"
                              : theme === "paper"
                                ? "rgba(140,107,45,0.35)"
                                : "rgba(23,23,23,0.35)",
                        } as CSSProperties
                      }
                    >
                      {step.num}
                    </span>
                    <p
                      className={cn(
                        "eyebrow relative inline-flex w-fit rounded-full border px-4 py-2",
                        theme === "ink" && "border-gold/30 text-gold",
                        theme === "paper" && "border-gold-dark/30 text-gold-dark",
                        theme === "gold" && "border-ink-950/25 text-ink-950/80"
                      )}
                    >
                      Step {step.num} / 05
                    </p>
                    <div className="relative mt-16 max-w-md">
                      <h3 className="font-display text-3xl font-semibold md:text-4xl">{step.title}</h3>
                      <p
                        className={cn(
                          "mt-4 leading-relaxed",
                          theme === "ink" && "text-ivory/65",
                          theme === "paper" && "text-ink/65",
                          theme === "gold" && "text-ink-950/75"
                        )}
                      >
                        {step.text}
                      </p>
                      <p
                        className={cn(
                          "mt-6 text-[0.6875rem] font-semibold tracking-[0.2em] uppercase",
                          theme === "ink" && "text-gold-light",
                          theme === "paper" && "text-gold-dark",
                          theme === "gold" && "text-ink-950"
                        )}
                      >
                        ✦ {STEP_TAGS[i]}
                      </p>
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ================= FEATURED WORK ================= */}
      <section className="round-top relative overflow-hidden bg-ink-950 pt-24 pb-28 md:pt-36 md:pb-40">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <span className="font-display absolute top-24 left-1/2 -translate-x-1/2 text-[16rem] leading-none font-bold text-ivory/[0.025] italic select-none md:text-[30rem]">
            Shelf
          </span>
          <div className="animate-glow absolute top-1/2 left-1/2 h-150 w-225 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.08] blur-[150px]" />
        </div>
        <div className="wrap relative">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHead
              tone="light"
              eyebrow="Featured Work"
              title={
                <>
                  A Shelf Worth <em className="text-sheen italic">Staring At.</em>
                </>
              }
              text="Concept titles created by our studio to demonstrate range across genres. Fictional samples only — your book belongs here next."
            />
            <Reveal delay={200} className="pb-1">
              <Button to="/portfolio" variant="outline-light">
                View Full Portfolio
              </Button>
            </Reveal>
          </div>

          <div className="mt-20 grid grid-cols-2 items-start gap-4 sm:gap-6 lg:grid-cols-4">
            {featured.map((b, i) => (
              <Reveal key={b.id} delay={i * 110} className="lg:[&:nth-child(even)]:mt-16">
                <button
                  onClick={() => navigate("/portfolio", { state: { book: b.id } })}
                  className="spot group block w-full cursor-pointer rounded-[1.75rem] border border-ivory/10 bg-ivory/[0.035] px-4 pt-10 pb-7 text-center transition-all duration-500 hover:-translate-y-2 hover:border-gold/30 sm:rounded-[2rem] sm:px-6 sm:pt-12"
                  aria-label={`See ${b.title} in the portfolio`}
                >
                  <Book3D book={b} shadow="dark" ry={26} className="mx-auto max-w-40 sm:max-w-44" />
                  <p className="mt-10 text-[0.625rem] font-semibold tracking-[0.24em] text-gold uppercase">{b.genre}</p>
                  <h3 className="font-display mt-2 text-base leading-snug font-semibold text-ivory transition-colors group-hover:text-gold-light sm:text-lg">
                    {b.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-ivory/40">{b.author} · Sample title</p>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY US (bento) ================= */}
      <section className="round-top relative bg-ivory pt-24 pb-28 md:pt-36 md:pb-40">
        <div className="wrap">
          <SectionHead
            align="center"
            eyebrow="Why Wordsmith Squad"
            title={
              <>
                Built Like a Publishing House. <em className="text-gold-dark italic">Run Like a Creative Studio.</em>
              </>
            }
            text="The rigor of a traditional house, the imagination of a modern agency — and a process that keeps your name, voice and rights at the center of everything."
          />

          <div className="mt-16 grid gap-5 md:grid-cols-6">
            {WHY_US.map((w, i) => {
              const Icon = WHY_ICONS[w.icon];
              const l = WHY_LAYOUT[i];
              return (
                <Reveal key={w.title} delay={i * 80} className={l.span}>
                  <div
                    className={cn(
                      "spot group relative h-full overflow-hidden rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-1.5 md:p-10",
                      l.tone === "ink" && "bg-ink text-ivory",
                      l.tone === "paper" && "border border-beige bg-paper text-ink hover:border-gold-dark/40",
                      l.tone === "gold" && "bg-gold text-ink-950"
                    )}
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "font-display absolute top-5 right-7 text-6xl leading-none italic",
                        l.tone === "ink" && "text-ivory/[0.07]",
                        l.tone === "paper" && "text-ink/[0.06]",
                        l.tone === "gold" && "text-ink-950/10"
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110",
                        l.tone === "ink" && "bg-gold/15 text-gold",
                        l.tone === "paper" && "bg-gold/15 text-gold-dark",
                        l.tone === "gold" && "bg-ink-950 text-gold"
                      )}
                    >
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="font-display mt-7 text-2xl font-semibold">{w.title}</h3>
                    <p
                      className={cn(
                        "mt-3 max-w-md text-sm leading-relaxed",
                        l.tone === "ink" && "text-ivory/60",
                        l.tone === "paper" && "text-ink/65",
                        l.tone === "gold" && "text-ink-950/75"
                      )}
                    >
                      {w.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <Testimonials />

      {/* ================= FINAL CTA ================= */}
      <FinalCTA />

      {trailerOpen && <TrailerModal onClose={() => setTrailerOpen(false)} />}
    </>
  );
}