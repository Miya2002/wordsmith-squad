
import { useRef, type PointerEvent } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Eyebrow,
  Reveal,
  SectionHead,
  usePageMeta,
} from "@/components/ui";
import { EDITORIAL } from "@/lib/data";

/* ============================================
   WORDSMITH SQUAD — PREMIUM PUBLISHING PAGE
   Uses existing project theme & components
============================================ */

const SERVICES = [
  {
    number: "01",
    title: "Book Publishing Services",
    subtitle: "From manuscript to masterpiece",
    description:
      "A guided publishing experience bringing editorial preparation, design, production and launch planning together.",
    path: "/publishing/book-publishing-services",
    symbol: "✦",
  },
  {
    number: "02",
    title: "Self Publishing",
    subtitle: "Your book. Your ownership.",
    description:
      "Bring your story to readers while retaining creative control over your manuscript and publishing decisions.",
    path: "/publishing/self-publishing",
    symbol: "◇",
  },
  {
    number: "03",
    title: "eBook Publishing",
    subtitle: "Stories without boundaries",
    description:
      "Transform your manuscript into a professionally prepared digital edition designed for modern reading experiences.",
    path: "/publishing/ebook-publishing",
    symbol: "▣",
  },
  {
    number: "04",
    title: "Print on Demand",
    subtitle: "Made for the reader",
    description:
      "Prepare print-ready editions and explore flexible production options without committing to large initial print runs.",
    path: "/publishing/print-on-demand",
    symbol: "◈",
  },
  {
    number: "05",
    title: "ISBN & Distribution",
    subtitle: "Prepare for the marketplace",
    description:
      "Navigate book identifiers, publishing metadata and distribution considerations with informed guidance.",
    path: "/publishing/isbn-and-distribution",
    symbol: "✧",
  },
  {
    number: "06",
    title: "Amazon KDP Publishing",
    subtitle: "Your publishing journey online",
    description:
      "Prepare your book for Amazon Kindle Direct Publishing with support for formatting, metadata and submission.",
    path: "/publishing/amazon-kdp-publishing",
    symbol: "↗",
  },
];

const STEPS = [
  {
    n: "01",
    title: "The Manuscript",
    description:
      "We begin with your book, your audience and your publishing ambitions.",
  },
  {
    n: "02",
    title: "The Refinement",
    description:
      "Editorial review, preparation and careful attention to the reading experience.",
  },
  {
    n: "03",
    title: "The Creation",
    description:
      "Cover design, interior formatting and preparation of your final editions.",
  },
  {
    n: "04",
    title: "The Publication",
    description:
      "Platform preparation, distribution planning and the exciting next chapter.",
  },
];

/* ============================================
   GOLD CURSOR GLOW
   Only active on fine pointer devices
============================================ */

function useGoldCursor() {
  const cursor = useRef<HTMLDivElement>(null);

  const move = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") return;

    const element = cursor.current;
    if (!element) return;

    element.style.transform = `translate3d(${
      event.clientX - 180
    }px, ${event.clientY - 180}px, 0)`;
    element.style.opacity = "1";
  };

  const leave = () => {
    if (cursor.current) {
      cursor.current.style.opacity = "0";
    }
  };

  return { cursor, move, leave };
}

/* ============================================
   ANIMATED BOOK SHOWCASE
============================================ */

function BookShowcase() {
  return (
    <div className="pub-books relative mx-auto h-[390px] w-full max-w-[510px] sm:h-[470px] lg:h-[545px]">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute top-[18%] left-[12%] h-[65%] w-[75%] rounded-full bg-gold/15 blur-[80px]"
      />

      {/* Orbit rings */}
      <div
        aria-hidden
        className="pub-orbit absolute inset-[7%] rounded-full border border-gold/20"
      />

      <div
        aria-hidden
        className="absolute inset-[16%] rounded-full border border-dashed border-gold/20"
      />

      {/* Back book */}
      <div className="pub-float-slow absolute top-[22%] left-[7%] z-10 h-[55%] w-[35%] -rotate-[13deg] rounded-r-lg border border-[#8b7552] bg-[#72513a] shadow-[20px_25px_45px_rgba(0,0,0,.6)]">
        <div className="absolute inset-y-0 left-0 w-2 bg-black/25" />

        <div
          className="absolute inset-0 rounded-r-lg bg-cover bg-center opacity-70"
          style={{
            backgroundImage: `linear-gradient(180deg,rgba(55,31,17,.30),rgba(33,19,11,.65)),url("${EDITORIAL.library}")`,
          }}
        />

        <div className="relative flex h-full flex-col items-center justify-between px-2 py-7 text-center text-[#f2e0bb]">
          <span className="text-[7px] tracking-[.25em] uppercase">
            A literary journey
          </span>

          <span className="font-display text-[clamp(1rem,2.2vw,1.7rem)] leading-tight">
            THE
            <br />
            LAST
            <br />
            CHAPTER
          </span>

          <span className="text-[7px] tracking-[.2em] uppercase">
            An original story
          </span>
        </div>
      </div>

      {/* Main feature book */}
      <div className="pub-float absolute top-[8%] left-[33%] z-20 h-[75%] w-[43%] rotate-[5deg] rounded-r-lg border border-gold/40 bg-[#11100d] shadow-[25px_35px_70px_rgba(0,0,0,.8)]">
        {/* Spine */}
        <div className="absolute inset-y-0 left-0 w-[9px] bg-gradient-to-r from-black via-[#5b4829] to-[#211b13]" />

        {/* Gold frame */}
        <div className="absolute inset-3 rounded-sm border border-gold/45 sm:inset-5" />

        <div className="absolute inset-5 rounded-sm border border-gold/15 sm:inset-7" />

        {/* Book typography */}
        <div className="relative flex h-full flex-col items-center justify-between px-4 py-9 text-center sm:py-12">
          <span className="text-[7px] font-semibold tracking-[.3em] text-gold uppercase sm:text-[9px]">
            Wordsmith Squad Presents
          </span>

          <div>
            <div className="mx-auto mb-5 h-px w-16 bg-gold/60" />

            <span className="font-display text-[clamp(1.4rem,3vw,2.8rem)] leading-[1.18] text-[#e8c68c]">
              THE ART
              <br />
              OF
              <br />
              BECOMING
            </span>

            <div className="mx-auto mt-5 h-px w-16 bg-gold/60" />

            <span className="mt-5 block font-display text-lg text-gold/65 italic">
              ✦
            </span>
          </div>

          <span className="text-[7px] tracking-[.25em] text-gold/80 uppercase sm:text-[9px]">
            A Story Worth Telling
          </span>
        </div>

        {/* Cover shine */}
        <div className="pointer-events-none absolute inset-0 rounded-r-lg bg-gradient-to-br from-white/10 via-transparent to-transparent" />
      </div>

      {/* Ivory book */}
      <div className="pub-float-slow absolute top-[31%] right-[2%] z-30 flex h-[53%] w-[31%] rotate-[12deg] flex-col items-center justify-between rounded-r-lg border border-[#d8c5a2] bg-[#eee7d7] px-3 py-7 text-center shadow-[15px_20px_40px_rgba(0,0,0,.65)]">
        <span className="text-[7px] tracking-[.2em] text-[#8c714c] uppercase">
          A New Perspective
        </span>

        <div>
          <span className="font-display text-[clamp(1rem,2vw,1.7rem)] leading-[1.1] font-semibold text-[#28221b]">
            BETWEEN
            <br />
            THE
            <br />
            LINES
          </span>

          <div className="mx-auto mt-6 flex flex-col items-center gap-1.5">
            {[40, 52, 64, 76].map((width) => (
              <span
                key={width}
                className="h-7 rounded-t-full border border-[#b4935a]/70"
                style={{ width: `${width}%` }}
              />
            ))}
          </div>
        </div>

        <span className="text-[7px] tracking-[.2em] text-[#8c714c] uppercase">
          A Literary Collection
        </span>
      </div>

      {/* Floating status cards */}
      <div className="pub-float-slow absolute top-[2%] right-[1%] z-40 flex items-center gap-3 rounded-2xl border border-ivory/15 bg-[#171512]/90 px-4 py-3 shadow-xl backdrop-blur-xl">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold text-lg text-ink-950">
          ✓
        </span>

        <div>
          <p className="text-xs font-semibold text-ivory">
            Manuscript ready
          </p>
          <p className="text-[10px] text-ivory/45">
            The next chapter begins
          </p>
        </div>
      </div>

      <div className="pub-float absolute bottom-[2%] left-[8%] z-40 rounded-2xl border border-gold/25 bg-[#171512]/90 px-5 py-3 shadow-xl backdrop-blur-xl">
        <span className="text-[10px] tracking-[.15em] text-gold uppercase">
          ✦ Publishing journey
        </span>

        <p className="mt-1 font-display text-xl text-ivory italic">
          Made to be read.
        </p>
      </div>
    </div>
  );
}

/* ============================================
   PUBLISHING SERVICE CARD
============================================ */

function PublishingCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  return (
    <Reveal delay={(index % 3) * 90} className="h-full">
      <Link
        to={service.path}
        className="group relative flex h-full min-h-[330px] flex-col overflow-hidden rounded-[1.75rem] border border-gold/15 bg-[#191713] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:bg-[#221d16] hover:shadow-[0_20px_55px_rgba(198,163,106,.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:p-9"
      >
        {/* Spotlight */}
        <div className="pointer-events-none absolute -top-20 -right-20 h-52 w-52 rounded-full bg-gold/10 opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative flex items-start justify-between">
          <span className="font-display text-3xl text-gold/65 italic">
            {service.number}
          </span>

          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/25 text-2xl text-gold transition-all duration-500 group-hover:rotate-45 group-hover:bg-gold group-hover:text-ink-950">
            {service.symbol}
          </span>
        </div>

        <div className="relative mt-10">
          <p className="text-[10px] font-semibold tracking-[.2em] text-gold uppercase">
            {service.subtitle}
          </p>

          <h3 className="mt-4 font-display text-[clamp(1.65rem,2.2vw,2.15rem)] leading-tight font-semibold text-ivory">
            {service.title}
          </h3>

          <p className="mt-5 text-sm leading-7 text-ivory/55">
            {service.description}
          </p>
        </div>

        <div className="relative mt-auto flex items-center justify-between border-t border-ivory/10 pt-6 text-xs font-semibold text-gold">
          <span>Explore this service</span>

          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

/* ============================================
   MAIN PAGE
============================================ */

export default function Overview() {
  usePageMeta(
    "Professional Book Publishing Services — Wordsmith Squad",
    "Explore book publishing, self-publishing, eBook publishing, print-on-demand, ISBN and distribution, and Amazon KDP publishing services."
  );

  const { cursor, move, leave } = useGoldCursor();

  return (
    <main
      className="relative isolate overflow-hidden bg-ink-950"
      onPointerMove={move}
      onPointerLeave={leave}
    >
      {/* Scoped animations and reduced-motion support */}
      <style>
        {`
          @keyframes pubFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }

          @keyframes pubFloatSlow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(12px); }
          }

          @keyframes pubOrbit {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          .pub-float {
            animation: pubFloat 6s ease-in-out infinite;
          }

          .pub-float-slow {
            animation: pubFloatSlow 7s ease-in-out infinite;
          }

          .pub-orbit {
            animation: pubOrbit 70s linear infinite;
          }

          .pub-image {
            transition: transform 900ms cubic-bezier(.2,.8,.2,1);
          }

          .pub-image:hover {
            transform: scale(1.045);
          }

          @media (prefers-reduced-motion: reduce) {
            .pub-float,
            .pub-float-slow,
            .pub-orbit {
              animation: none !important;
            }

            .pub-image {
              transition: none !important;
            }
          }

          @media (hover: none), (pointer: coarse) {
            .pub-cursor {
              display: none !important;
            }
          }
        `}
      </style>

      {/* Gold cursor glow — desktop only */}
      <div
        ref={cursor}
        aria-hidden="true"
        className="pub-cursor pointer-events-none fixed top-0 left-0 z-40 hidden h-[360px] w-[360px] rounded-full opacity-0 transition-opacity duration-500 md:block"
        style={{
          background:
            "radial-gradient(circle, rgba(198,163,106,.16) 0%, rgba(198,163,106,.055) 30%, transparent 68%)",
          transform: "translate3d(-500px,-500px,0)",
          willChange: "transform",
        }}
      />

      {/* ================================== */}
      {/* 1 — CINEMATIC HERO */}
      {/* ================================== */}

      <section className="relative min-h-[780px] overflow-hidden pt-36 pb-24 sm:pt-40 lg:flex lg:min-h-[850px] lg:items-center lg:pt-32">
        {/* Background ambience */}
        <div className="bg-dots pointer-events-none absolute inset-0 opacity-35" />

        <div className="pointer-events-none absolute -top-32 -right-40 h-[600px] w-[600px] rounded-full bg-gold/[0.075] blur-[120px]" />

        <div className="pointer-events-none absolute bottom-0 -left-60 h-[480px] w-[480px] rounded-full bg-[#81603c]/10 blur-[120px]" />

        <span
          aria-hidden
          className="pointer-events-none absolute right-[-6%] bottom-[-10%] hidden font-display text-[28vw] leading-none font-bold text-ivory/[0.025] italic select-none lg:block"
        >
          W
        </span>

        <div className="wrap relative z-10 grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-8">
          {/* Hero text */}
          <div>
            <Reveal>
              <Eyebrow tone="light">
                Creative Publishing &amp; Book Production
              </Eyebrow>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-9 max-w-[750px] font-display text-[clamp(3.35rem,6.2vw,7rem)] leading-[1.04] font-semibold tracking-[-.045em] text-ivory">
                Your Story.
                <br />
                Our Craft.
                <br />
                <em className="text-sheen italic">
                  Published.
                </em>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-9 max-w-[580px] text-base leading-8 text-ivory/60 sm:text-lg">
                From the final manuscript to a beautifully
                produced book, we help transform your vision
                into a publishing experience worth remembering.
                Every detail considered. Every page with purpose.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button to="/contact">
                  Start Your Publishing Journey
                </Button>

                <a
                  href="#publishing-services"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-ivory/25 px-6 py-3 text-sm font-semibold text-ivory transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold"
                >
                  Explore Our Expertise
                  <span aria-hidden>↘</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-ivory/10 pt-7">
                {[
                  "Author-first approach",
                  "Print & digital",
                  "Creative control",
                ].map((text) => (
                  <span
                    key={text}
                    className="flex items-center gap-2 text-xs text-ivory/50"
                  >
                    <span className="text-gold">✦</span>
                    {text}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Hero books */}
          <Reveal delay={180}>
            <BookShowcase />
          </Reveal>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
      </section>

      {/* ================================== */}
      {/* 2 — EDITORIAL INTRODUCTION */}
      {/* ================================== */}

      <section className="relative bg-[#f3eee4] py-24 md:py-36">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <SectionHead
              eyebrow="Beyond the final page"
              title={
                <>
                  A Manuscript Is Written.
                  <br />
                  A Book Is{" "}
                  <em className="text-gold-dark italic">
                    Created.
                  </em>
                </>
              }
              text="Publishing is where creativity meets precision — where an author's hard work becomes something readers can hold, discover and remember."
            />

            <Reveal delay={130}>
              <p className="mt-8 max-w-xl text-base leading-8 text-ink/65">
                Every publishing decision contributes to the
                final experience. From formatting and design to
                publishing platforms and distribution planning,
                our approach brings the important details together
                around your vision.
              </p>

              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {[
                  "Thoughtful book presentation",
                  "Print & digital preparation",
                  "Platform publishing support",
                  "A collaborative experience",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-[#dccfb9] bg-white/65 px-4 py-4 text-sm font-medium text-ink/80"
                  >
                    <span className="text-lg text-gold-dark">
                      ✦
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={180} className="relative">
            <div className="relative">
              <div className="absolute -top-5 -right-5 h-32 w-32 rounded-full border border-gold-dark/25" />

              <div className="overflow-hidden rounded-[2rem] shadow-[0_35px_80px_rgba(31,24,15,.18)]">
                <img
                  src={EDITORIAL.leatherBooks}
                  alt="Beautifully arranged leather-bound books"
                  loading="lazy"
                  className="pub-image aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
                />
              </div>

              <div className="absolute -bottom-7 left-3 max-w-[280px] rounded-2xl border border-gold/30 bg-[#171410] px-6 py-5 shadow-2xl sm:-left-7">
                <p className="font-display text-2xl leading-tight text-gold italic">
                  From idea to edition.
                </p>

                <p className="mt-2 text-[10px] tracking-[.18em] text-ivory/50 uppercase">
                  Made with intention
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================================== */}
      {/* 3 — PUBLISHING SERVICES */}
      {/* ================================== */}

      <section
        id="publishing-services"
        className="relative scroll-mt-28 overflow-hidden bg-[#100f0d] py-24 md:py-36"
      >
        <div className="bg-dots pointer-events-none absolute inset-0 opacity-25" />

        <div className="pointer-events-none absolute top-24 right-[-250px] h-[600px] w-[600px] rounded-full bg-gold/[0.055] blur-[110px]" />

        <div className="wrap relative">
          <SectionHead
            tone="light"
            eyebrow="The publishing collection"
            title={
              <>
                Everything Your Book
                <br />
                Needs to{" "}
                <em className="text-sheen italic">
                  Find Its Place.
                </em>
              </>
            }
            text="Explore publishing solutions tailored to different formats, platforms and stages of your author journey."
          />

          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((service, index) => (
              <PublishingCard
                key={service.path}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================================== */}
      {/* 4 — QUOTE / BRAND MOMENT */}
      {/* ================================== */}

      <section className="relative overflow-hidden border-y border-gold/20 bg-[#211b15] py-24 text-center md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(198,163,106,.12),transparent_65%)]" />

        <div className="wrap relative">
          <Reveal>
            <span className="font-display text-7xl leading-none text-gold/60">
              “
            </span>

            <h2 className="mx-auto -mt-3 max-w-4xl font-display text-[clamp(2.1rem,4.5vw,4.6rem)] leading-[1.2] font-medium text-ivory">
              A great book isn't simply finished.
              <br />
              <em className="text-gold italic">
                It's brought to life.
              </em>
            </h2>

            <div className="mx-auto mt-10 h-px w-20 bg-gold/60" />

            <p className="mt-6 text-xs font-semibold tracking-[.28em] text-gold/70 uppercase">
              Wordsmith Squad
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================================== */}
      {/* 5 — PUBLISHING JOURNEY */}
      {/* ================================== */}

      <section className="bg-[#f6f1e8] py-24 md:py-36">
        <div className="wrap">
          <SectionHead
            eyebrow="The journey from draft to book"
            title={
              <>
                Four Chapters.
                <br />
                <em className="text-gold-dark italic">
                  One Remarkable Journey.
                </em>
              </>
            }
            text="Every book deserves a considered path to publication. Here's how we help shape that journey."
          />

          <div className="relative mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {STEPS.map((step, index) => (
              <Reveal key={step.n} delay={index * 100}>
                <div className="group relative h-full min-h-[300px] overflow-hidden rounded-[1.75rem] border border-[#e3d7c5] bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold-dark/40 hover:shadow-[0_25px_60px_rgba(75,52,24,.12)]">
                  <span className="font-display text-[5rem] leading-none text-gold-dark/20 transition-colors duration-500 group-hover:text-gold-dark/45">
                    {step.n}
                  </span>

                  <div className="mt-8 h-px w-full bg-[#e7dccc]" />

                  <p className="mt-7 text-[10px] font-bold tracking-[.2em] text-gold-dark uppercase">
                    Chapter {step.n}
                  </p>

                  <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-ink/60">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================== */}
      {/* 6 — AUTHOR OWNERSHIP */}
      {/* ================================== */}

      <section className="relative overflow-hidden bg-[#15130f] py-24 md:py-36">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[.95fr_1.05fr] lg:gap-24">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-gold/20">
              <img
                src={EDITORIAL.desk}
                alt="Writer's creative workspace"
                loading="lazy"
                className="pub-image aspect-[5/4] w-full object-cover lg:aspect-[4/5]"
              />
            </div>

            <div className="absolute -right-3 -bottom-5 rounded-2xl border border-gold/25 bg-[#1c1812] px-6 py-4 shadow-2xl sm:-right-6">
              <p className="font-display text-2xl text-gold italic">
                Your vision first.
              </p>

              <p className="mt-1 text-[10px] tracking-[.15em] text-ivory/50 uppercase">
                An author-centered approach
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow tone="light">
                Your story remains yours
              </Eyebrow>

              <h2 className="mt-7 font-display text-[clamp(2.7rem,5vw,5rem)] leading-[1.08] text-ivory">
                Your Name.
                <br />
                Your Vision.
                <br />
                <em className="text-sheen italic">
                  Your Legacy.
                </em>
              </h2>
            </Reveal>

            <Reveal delay={130}>
              <p className="mt-8 max-w-xl text-base leading-8 text-ivory/60">
                Publishing should empower the person behind the
                story. We believe in transparent conversations,
                informed choices and creative collaboration
                throughout the process.
              </p>

              <div className="mt-9 space-y-4">
                {[
                  "Your creative direction comes first",
                  "Clear conversations about platforms and options",
                  "Professional attention to the final presentation",
                ].map((text) => (
                  <div
                    key={text}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs text-gold">
                      ✓
                    </span>

                    <span className="text-sm leading-6 text-ivory/75">
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Button to="/about" variant="outline-light">
                  Discover Our Philosophy
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================================== */}
      {/* 7 — FINAL CALL TO ACTION */}
      {/* ================================== */}

      <section className="relative overflow-hidden bg-[#c6a36a] py-24 text-center md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,.22),transparent_65%)]" />

        <span
          aria-hidden
          className="pointer-events-none absolute -right-10 -bottom-28 font-display text-[23rem] leading-none text-black/[0.035] italic select-none"
        >
          W
        </span>

        <div className="wrap relative">
          <Reveal>
            <p className="text-[11px] font-bold tracking-[.3em] text-[#38291a] uppercase">
              Your next chapter starts here
            </p>

            <h2 className="mx-auto mt-7 max-w-4xl font-display text-[clamp(2.9rem,6vw,6.5rem)] leading-[1.05] font-semibold tracking-[-.04em] text-[#17130e]">
              The World Is Waiting
              <br />
              for <em className="italic">Your Story.</em>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#3e3020] sm:text-lg">
              You've put your heart into the writing.
              Let's discuss how to bring your book to life
              with confidence, care and beautiful craftsmanship.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="ink">
                Get a Free Consultation
              </Button>

              <Link
                to="/portfolio"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#38291a]/40 px-7 py-3 text-sm font-semibold text-[#241b12] transition-all duration-300 hover:border-[#241b12] hover:bg-[#241b12]/10"
              >
                Explore Our Portfolio ↗
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
