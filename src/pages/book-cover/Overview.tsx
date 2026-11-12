
import {
  useRef,
  useState,
  useEffect,
  type PointerEvent,
} from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Eyebrow,
  Reveal,
  SectionHead,
  usePageMeta,
} from "@/components/ui";

import emberCover from "@/assets/covers/ember.jpg";
import saltCover from "@/assets/covers/salt.jpg";
import empireCover from "@/assets/covers/empire.jpg";
import lettersCover from "@/assets/covers/letters.jpg";
import cartographerCover from "@/assets/covers/cartographer.jpg";

/* =====================================================
   WORDSMITH SQUAD — THE COVER ATELIER
   Premium, responsive, interactive book cover experience
   ===================================================== */

const COVERS = [
  {
    id: "ember",
    title: "A Crown of Ember and Ash",
    genre: "Fantasy",
    description: "Dramatic symbolism. Gold detailing. A powerful first impression.",
    image: emberCover,
    accent: "#d0a35e",
  },
  {
    id: "salt",
    title: "Salt in the Lantern Light",
    genre: "Literary",
    description: "Atmospheric photography and an elegant, reflective mood.",
    image: saltCover,
    accent: "#c8a078",
  },
  {
    id: "empire",
    title: "The Quiet Empire",
    genre: "Business",
    description: "Minimal architecture, sophisticated composition and clarity.",
    image: empireCover,
    accent: "#d7c4a0",
  },
  {
    id: "letters",
    title: "Letters",
    genre: "Literary",
    description: "An intimate editorial aesthetic for a story worth remembering.",
    image: lettersCover,
    accent: "#bea17e",
  },
  {
    id: "cartographer",
    title: "The Cartographer",
    genre: "Adventure",
    description: "Intriguing visual storytelling with a distinctive personality.",
    image: cartographerCover,
    accent: "#c5a36a",
  },
] as const;

const SERVICES = [
  {
    num: "01",
    title: "Book Cover Design",
    description:
      "A distinctive visual identity that reflects your story, genre, and audience.",
    route: "/book-cover/book-cover-design",
    symbol: "✦",
  },
  {
    num: "02",
    title: "Layout & Typesetting",
    description:
      "Carefully composed pages that balance typography, spacing, and readability.",
    route: "/book-cover/layout-design-and-typesetting",
    symbol: "▤",
  },
  {
    num: "03",
    title: "Book Illustration",
    description:
      "Illustrated artwork that adds personality, imagination, and visual depth.",
    route: "/book-cover/book-illustration",
    symbol: "✧",
  },
  {
    num: "04",
    title: "eBook Cover Design",
    description:
      "Striking digital-first covers that remain recognizable at thumbnail size.",
    route: "/book-cover/ebook-cover-design",
    symbol: "◇",
  },
] as const;

const PROCESS = [
  {
    number: "01",
    title: "Discover",
    text: "We explore your story, audience, genre, visual references, and creative direction.",
  },
  {
    number: "02",
    title: "Imagine",
    text: "The design concept begins to take shape through visual storytelling and composition.",
  },
  {
    number: "03",
    title: "Refine",
    text: "Typography, colors, details, and feedback come together to strengthen the final design.",
  },
  {
    number: "04",
    title: "Deliver",
    text: "Your finalized artwork is prepared for the agreed print or digital format.",
  },
];

/* =====================================================
   PAGE CURSOR SPOTLIGHT
   Uses requestAnimationFrame to avoid rerenders.
   ===================================================== */

function useGoldSpotlight() {
  const light = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);
  const latest = useRef({ x: -500, y: -500 });

  useEffect(() => {
    return () => {
      if (frame.current !== null) {
        cancelAnimationFrame(frame.current);
      }
    };
  }, []);

  const onMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") return;

    latest.current = {
      x: event.clientX,
      y: event.clientY,
    };

    if (frame.current !== null) return;

    frame.current = requestAnimationFrame(() => {
      if (light.current) {
        light.current.style.transform = `translate3d(${
          latest.current.x - 210
        }px, ${latest.current.y - 210}px, 0)`;

        light.current.style.opacity = "1";
      }

      frame.current = null;
    });
  };

  const onLeave = () => {
    if (light.current) light.current.style.opacity = "0";
  };

  return { light, onMove, onLeave };
}

/* =====================================================
   REAL BOOK COVER — 3D PRESENTATION
   ===================================================== */

function BookMockup({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`bc-book relative ${className}`}>
      <div className="absolute inset-y-[2%] left-[-7px] w-[9px] rounded-l-sm bg-gradient-to-r from-[#17100a] via-[#a88b63] to-[#33261a] shadow-lg" />

      <div className="absolute top-[2%] right-[-7px] h-full w-[8px] skew-y-[35deg] bg-[#b9a98d]" />

      <img
        src={src}
        alt={alt}
        className="relative h-full w-full rounded-r-[5px] object-cover shadow-[20px_35px_65px_rgba(0,0,0,.65)]"
      />

      <div className="pointer-events-none absolute inset-0 rounded-r-[5px] bg-gradient-to-r from-black/30 via-transparent to-white/[.09]" />
    </div>
  );
}

/* =====================================================
   HERO — FLOATING COVER COLLECTION
   ===================================================== */

function CoverSculpture() {
  return (
    <div className="relative mx-auto h-[365px] w-full max-w-[580px] sm:h-[480px] lg:h-[570px]">
      <div className="pointer-events-none absolute top-[13%] left-[12%] h-[75%] w-[75%] rounded-full bg-[#b18b4f]/15 blur-[85px]" />

      <div className="bc-rotate absolute inset-[9%] rounded-full border border-gold/20" />

      <div className="absolute inset-[18%] rounded-full border border-dashed border-gold/15" />

      <span
        aria-hidden
        className="absolute top-[5%] left-[14%] font-display text-5xl text-gold/50 italic"
      >
        ✦
      </span>

      <span
        aria-hidden
        className="absolute right-[12%] bottom-[7%] font-display text-4xl text-gold/40"
      >
        ✧
      </span>

      <BookMockup
        src={saltCover}
        alt="Salt in the Lantern Light cover design"
        className="bc-float-slow absolute top-[21%] left-[4%] z-10 h-[58%] w-[35%] -rotate-[15deg]"
      />

      <BookMockup
        src={emberCover}
        alt="A Crown of Ember and Ash cover design"
        className="bc-float absolute top-[9%] left-[32%] z-20 h-[76%] w-[43%] rotate-[3deg]"
      />

      <BookMockup
        src={empireCover}
        alt="The Quiet Empire cover design"
        className="bc-float-slow absolute top-[29%] right-[1%] z-30 h-[56%] w-[32%] rotate-[13deg]"
      />

      <div className="bc-float absolute top-[4%] right-0 z-40 rounded-2xl border border-gold/30 bg-[#16130f]/95 px-4 py-3 shadow-xl backdrop-blur-xl sm:px-5">
        <p className="text-[9px] font-bold tracking-[.17em] text-gold uppercase">
          ✦ The cover atelier
        </p>
        <p className="mt-1 text-xs font-medium text-ivory">
          Where stories become art
        </p>
      </div>

      <div className="bc-float-slow absolute bottom-[1%] left-[2%] z-40 rounded-2xl border border-ivory/15 bg-[#171410]/95 px-5 py-4 shadow-2xl backdrop-blur-xl">
        <p className="font-display text-xl text-gold italic sm:text-2xl">
          Designed to be discovered.
        </p>
        <p className="mt-1 text-[9px] tracking-[.15em] text-ivory/45 uppercase">
          A visual first impression
        </p>
      </div>
    </div>
  );
}

/* =====================================================
   INTERACTIVE COVER GALLERY
   ===================================================== */

function CoverGallery() {
  const [active, setActive] = useState(0);
  const cover = COVERS[active];

  return (
    <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
      {/* Interactive preview */}
      <Reveal>
        <div className="bc-gallery-stage relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[2rem] border border-gold/20 bg-[#17130f] p-8 sm:min-h-[550px]">
          <div
            className="pointer-events-none absolute inset-0 opacity-30 blur-[65px] transition-colors duration-500"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${cover.accent}, transparent 65%)`,
            }}
          />

          <div className="absolute inset-5 rounded-[1.4rem] border border-gold/10" />

          <div className="relative flex h-[320px] w-[215px] items-center justify-center sm:h-[405px] sm:w-[270px]">
            <div
              key={cover.id}
              className="bc-switch h-full w-full"
            >
              <BookMockup
                src={cover.image}
                alt={`${cover.title} book cover`}
                className="h-full w-full"
              />
            </div>
          </div>

          <div className="absolute top-6 left-6 rounded-full border border-gold/30 bg-black/40 px-4 py-2 text-[10px] font-bold tracking-[.2em] text-gold uppercase backdrop-blur-md">
            Design study
          </div>

          <div className="absolute right-6 bottom-6 text-right">
            <p className="font-display text-3xl text-gold italic">
              {String(active + 1).padStart(2, "0")}
              <span className="mx-2 text-ivory/30">/</span>
              <span className="text-lg text-ivory/40">05</span>
            </p>
          </div>
        </div>
      </Reveal>

      {/* Selector */}
      <div>
        <Reveal>
          <Eyebrow tone="light">
            The art of the first impression
          </Eyebrow>

          <h3 className="mt-7 font-display text-[clamp(2.4rem,4vw,4rem)] leading-[1.1] text-ivory">
            One Story.
            <br />
            Endless{" "}
            <em className="text-sheen italic">
              Possibilities.
            </em>
          </h3>

          <p className="mt-6 max-w-lg leading-8 text-ivory/55">
            A cover sets the mood before the first page
            is ever turned. Explore how typography,
            photography, color and composition create
            different visual experiences.
          </p>
        </Reveal>

        <div
          className="mt-9 space-y-2"
          role="group"
          aria-label="Select a book cover"
        >
          {COVERS.map((item, index) => {
            const selected = active === index;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(index)}
                aria-pressed={selected}
                className={`group flex w-full items-center gap-4 rounded-xl border px-4 py-3 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-gold ${
                  selected
                    ? "border-gold/65 bg-gold/[.10]"
                    : "border-ivory/10 bg-white/[.025] hover:border-gold/35 hover:bg-white/[.06]"
                }`}
              >
                <img
                  src={item.image}
                  alt=""
                  className="h-14 w-10 shrink-0 rounded-sm object-cover shadow-lg"
                />

                <div className="min-w-0 flex-1">
                  <p
                    className={`truncate text-sm font-semibold ${
                      selected ? "text-gold" : "text-ivory"
                    }`}
                  >
                    {item.title}
                  </p>

                  <p className="mt-1 text-[11px] text-ivory/45">
                    {item.genre} aesthetic
                  </p>
                </div>

                <span
                  className={`text-lg transition-transform duration-300 group-hover:translate-x-1 ${
                    selected ? "text-gold" : "text-ivory/30"
                  }`}
                  aria-hidden
                >
                  ↗
                </span>
              </button>
            );
          })}
        </div>

        <div
          aria-live="polite"
          className="mt-5 rounded-xl border-l-2 border-gold bg-gold/[.055] px-5 py-4"
        >
          <p className="font-display text-xl text-ivory">
            {cover.title}
          </p>
          <p className="mt-2 text-sm leading-6 text-ivory/55">
            {cover.description}
          </p>
        </div>

        <p className="mt-5 text-xs text-ivory/35">
          Portfolio concepts presented for visual inspiration.
        </p>
      </div>
    </div>
  );
}

/* =====================================================
   BEFORE / AFTER DESIGN THINKING
   Interactive and accessible.
   ===================================================== */

function CoverTransformation() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="relative mx-auto mt-14 max-w-[1000px]">
      <div className="grid overflow-hidden rounded-[2rem] border border-[#dfd1b9] bg-white shadow-[0_30px_85px_rgba(54,35,13,.12)] md:grid-cols-2">
        {/* Basic concept */}
        <div className="flex flex-col items-center bg-[#e8e0d2] p-7 sm:p-12">
          <p className="mb-7 text-[10px] font-bold tracking-[.22em] text-[#6e5b46] uppercase">
            01 / The starting point
          </p>

          <div className="flex aspect-[2/3] w-[190px] flex-col items-center justify-center border border-[#9e8c72] bg-[#d2c5b2] p-6 text-center shadow-xl sm:w-[230px]">
            <p className="font-display text-2xl text-[#493c2c]">
              THE
              <br />
              UNTOLD
              <br />
              STORY
            </p>

            <div className="my-7 h-px w-12 bg-[#8b785f]" />

            <p className="text-[9px] tracking-[.2em] text-[#6e5c46] uppercase">
              An original novel
            </p>
          </div>

          <p className="mt-7 text-sm text-[#756553]">
            A simple starting direction
          </p>
        </div>

        {/* Developed concept */}
        <div className="flex flex-col items-center bg-[#17130f] p-7 sm:p-12">
          <p className="mb-7 text-[10px] font-bold tracking-[.22em] text-gold uppercase">
            02 / The refined vision
          </p>

          <div
            className={`bc-refined relative flex aspect-[2/3] w-[190px] flex-col items-center justify-between overflow-hidden border border-gold/55 bg-[#11100e] p-6 text-center shadow-[20px_25px_55px_rgba(0,0,0,.55)] sm:w-[230px] ${
              revealed ? "bc-refined-active" : ""
            }`}
          >
            <div className="absolute inset-3 border border-gold/35" />

            <div className="absolute top-[28%] left-[-35%] h-[180px] w-[180px] rounded-full bg-[#a67a41]/25 blur-[55px]" />

            <p className="relative text-[8px] tracking-[.25em] text-gold/70 uppercase">
              Wordsmith Squad
            </p>

            <div className="relative">
              <span className="mb-4 block font-display text-4xl text-gold">
                ✦
              </span>

              <h4 className="font-display text-[clamp(1.7rem,3vw,2.5rem)] leading-tight text-[#e9d2a8]">
                THE
                <br />
                UNTOLD
                <br />
                <em className="italic">STORY</em>
              </h4>

              <div className="mx-auto mt-5 h-px w-16 bg-gold" />
            </div>

            <p className="relative text-[8px] tracking-[.2em] text-gold/70 uppercase">
              An original novel
            </p>
          </div>

          <p className="mt-7 text-sm text-ivory/60">
            A more intentional identity
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={() => setRevealed((value) => !value)}
          aria-pressed={revealed}
          className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#a88a56] bg-[#17130f] px-7 py-3 text-sm font-semibold text-[#e6c28a] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2b2218] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a88a56]"
        >
          {revealed ? "Pause the cover highlight" : "Illuminate the refined cover"}
          <span aria-hidden>✦</span>
        </button>

        <p className="mt-4 text-xs text-[#7d6b54]">
          Illustrative design exercise showing how visual treatment changes a concept.
        </p>
      </div>
    </div>
  );
}

/* =====================================================
   MAIN PAGE
   ===================================================== */

export default function Overview() {
  usePageMeta(
    "Luxury Book Cover Design | Wordsmith Squad",
    "Explore premium book cover design, illustration, interior layout, typesetting and eBook cover design services."
  );

  const { light, onMove, onLeave } = useGoldSpotlight();

  return (
    <main
      className="relative isolate overflow-x-clip bg-ink-950"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      {/* Page-scoped styles */}
      <style>
        {`
          @keyframes bcFloat {
            0%,100% { translate:0 0; }
            50% { translate:0 -16px; }
          }

          @keyframes bcFloatSlow {
            0%,100% { translate:0 0; }
            50% { translate:0 12px; }
          }

          @keyframes bcOrbit {
            from { rotate:0deg; }
            to { rotate:360deg; }
          }

          @keyframes bcSwitch {
            from {
              opacity:0;
              transform:translateY(18px) rotateY(-12deg) scale(.96);
            }
            to {
              opacity:1;
              transform:translateY(0) rotateY(-7deg) scale(1);
            }
          }

          @keyframes bcShine {
            from { transform:translateX(-170%) skewX(-22deg); }
            to { transform:translateX(300%) skewX(-22deg); }
          }

          .bc-float {
            animation:bcFloat 6s ease-in-out infinite;
          }

          .bc-float-slow {
            animation:bcFloatSlow 8s ease-in-out infinite;
          }

          .bc-rotate {
            animation:bcOrbit 80s linear infinite;
          }

          .bc-switch {
            animation:bcSwitch 650ms cubic-bezier(.2,.8,.2,1) both;
            transform-style:preserve-3d;
          }

          .bc-book {
            transition:filter 450ms ease;
          }

          .bc-book:hover {
            filter:brightness(1.12);
          }

          .bc-refined::after {
            content:"";
            position:absolute;
            inset:-30%;
            width:45%;
            background:linear-gradient(
              90deg,
              transparent,
              rgba(255,222,155,.30),
              transparent
            );
            transform:translateX(-170%) skewX(-22deg);
            pointer-events:none;
          }

          .bc-refined-active::after {
            animation:bcShine 1.7s ease-in-out infinite;
          }

          @media (hover:none),(pointer:coarse) {
            .bc-cursor { display:none !important; }
          }

          @media (prefers-reduced-motion:reduce) {
            .bc-float,
            .bc-float-slow,
            .bc-rotate,
            .bc-switch,
            .bc-refined-active::after {
              animation:none !important;
            }

            .bc-book {
              transition:none !important;
            }
          }
        `}
      </style>

      {/* Soft golden cursor aura */}
      <div
        ref={light}
        aria-hidden="true"
        className="bc-cursor pointer-events-none fixed top-0 left-0 z-30 hidden h-[420px] w-[420px] rounded-full opacity-0 transition-opacity duration-300 lg:block"
        style={{
          background:
            "radial-gradient(circle,rgba(209,169,94,.14),rgba(209,169,94,.045) 40%,transparent 72%)",
          transform: "translate3d(-500px,-500px,0)",
          willChange: "transform",
        }}
      />

      {/* ====================================
          SECTION 1 — COVER ATELIER HERO
      ==================================== */}

      <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44 lg:flex lg:min-h-[830px] lg:items-center lg:pt-32">
        <div className="bg-dots pointer-events-none absolute inset-0 opacity-25" />

        <div className="pointer-events-none absolute -top-32 -right-40 h-[650px] w-[650px] rounded-full bg-gold/[.07] blur-[125px]" />

        <div className="pointer-events-none absolute -bottom-40 -left-36 h-[500px] w-[500px] rounded-full bg-[#76552e]/15 blur-[120px]" />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 bottom-0 hidden font-display text-[24vw] leading-none text-ivory/[.025] italic select-none xl:block"
        >
          Art.
        </span>

        <div className="wrap relative z-10 grid items-center gap-10 lg:grid-cols-[1.08fr_.92fr] lg:gap-5">
          <div>
            <Reveal>
              <Eyebrow tone="light">
                The Wordsmith Cover Atelier
              </Eyebrow>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-9 max-w-[760px] font-display text-[clamp(3.1rem,6vw,6.8rem)] leading-[1.05] font-semibold tracking-[-.045em] text-ivory">
                Don't Just
                <br />
                Tell a Story.
                <br />
                <em className="text-sheen italic">
                  Show One.
                </em>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-8 max-w-[570px] text-base leading-8 text-ivory/60 sm:text-lg">
                The first thing a reader discovers is your
                cover. Make that moment unforgettable with
                exceptional visual storytelling, sophisticated
                typography, and design that feels uniquely yours.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button to="/contact">
                  Design My Book Cover
                </Button>

                <a
                  href="#cover-gallery"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-ivory/25 px-6 py-3 text-sm font-semibold text-ivory transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold"
                >
                  Explore Cover Designs
                  <span aria-hidden>↘</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-ivory/10 pt-7 text-xs text-ivory/55">
                {[
                  "Cover artistry",
                  "Editorial typography",
                  "Print & digital design",
                ].map((value) => (
                  <span key={value}>
                    <span className="mr-2 text-gold">✦</span>
                    {value}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={180}>
            <CoverSculpture />
          </Reveal>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </section>

      {/* ====================================
          SECTION 2 — DESIGN PHILOSOPHY
      ==================================== */}

      <section className="relative overflow-hidden bg-[#f5f0e6] py-24 md:py-36">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <SectionHead
              eyebrow="Art meets literature"
              title={
                <>
                  A Beautiful Book
                  <br />
                  Begins{" "}
                  <em className="text-gold-dark italic">
                    Before Page One.
                  </em>
                </>
              }
              text="A great cover doesn't simply decorate a story. It communicates a feeling, introduces a world, and gives readers a reason to look closer."
            />

            <Reveal delay={120}>
              <p className="mt-8 max-w-xl text-base leading-8 text-ink/65">
                We approach book cover design as a balance of
                storytelling and visual strategy. Every image,
                typeface, color, and detail should contribute
                to a clear and memorable first impression.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {[
                  "Genre-aware concepts",
                  "Expressive typography",
                  "Thoughtful color palettes",
                  "Distinctive compositions",
                ].map((value) => (
                  <div
                    key={value}
                    className="flex items-center gap-3 rounded-xl border border-[#e1d4c0] bg-white/70 px-4 py-4 text-sm font-medium text-ink/80"
                  >
                    <span className="text-gold-dark">✦</span>
                    {value}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="relative mx-auto max-w-[510px]">
              <div className="absolute -top-5 -right-5 h-32 w-32 rounded-full border border-[#b89a63]/35" />

              <div className="relative grid grid-cols-2 gap-3 rounded-[2rem] bg-[#211b14] p-5 shadow-[0_35px_80px_rgba(40,26,12,.25)] sm:gap-4 sm:p-7">
                <div className="space-y-4">
                  <img
                    src={lettersCover}
                    alt="Literary book cover concept"
                    loading="lazy"
                    className="aspect-[2/3] w-full rounded object-cover shadow-xl"
                  />

                  <div className="rounded-lg bg-[#c5a46d] p-4 text-center">
                    <p className="text-[9px] font-bold tracking-[.2em] text-[#34251a] uppercase">
                      The Design
                    </p>
                    <p className="mt-2 font-display text-xl text-[#34251a] italic">
                      Atelier
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-9">
                  <div className="rounded-lg border border-gold/30 p-4">
                    <p className="font-display text-3xl text-gold italic">
                      Aa
                    </p>
                    <p className="mt-3 text-[9px] tracking-widest text-ivory/50 uppercase">
                      Typography
                    </p>
                  </div>

                  <img
                    src={cartographerCover}
                    alt="Adventure book cover concept"
                    loading="lazy"
                    className="aspect-[2/3] w-full rounded object-cover shadow-xl"
                  />
                </div>
              </div>

              <div className="absolute -bottom-6 left-5 rounded-2xl border border-gold/30 bg-[#17130f] px-6 py-4 shadow-xl sm:-left-6">
                <p className="font-display text-xl text-gold italic">
                  Designed with intention.
                </p>
                <p className="mt-1 text-[10px] tracking-[.14em] text-ivory/45 uppercase">
                  Every detail tells a story
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ====================================
          SECTION 3 — INTERACTIVE GALLERY
      ==================================== */}

      <section
        id="cover-gallery"
        className="relative scroll-mt-28 overflow-hidden bg-[#100e0c] py-24 md:py-36"
      >
        <div className="bg-dots pointer-events-none absolute inset-0 opacity-20" />

        <div className="pointer-events-none absolute top-0 right-[-200px] h-[550px] w-[550px] rounded-full bg-gold/[.06] blur-[120px]" />

        <div className="wrap relative">
          <SectionHead
            tone="light"
            eyebrow="Interactive design gallery"
            title={
              <>
                Different Stories.
                <br />
                Different{" "}
                <em className="text-sheen italic">
                  Visual Worlds.
                </em>
              </>
            }
            text="Explore a collection of visual concepts. Select a cover to discover how each design creates its own atmosphere."
          />

          <CoverGallery />
        </div>
      </section>

      {/* ====================================
          SECTION 4 — LARGE TYPOGRAPHY MOMENT
      ==================================== */}

      <section className="relative overflow-hidden border-y border-gold/20 bg-[#251c12] py-24 text-center md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(204,163,92,.12),transparent_70%)]" />

        <Reveal className="wrap relative">
          <p className="text-[10px] font-bold tracking-[.3em] text-gold uppercase">
            Design is storytelling
          </p>

          <h2 className="mx-auto mt-8 max-w-5xl font-display text-[clamp(2.4rem,5vw,5.5rem)] leading-[1.13] text-ivory">
            A Cover Shouldn't
            <br />
            Just Be Seen.
            <br />
            <em className="text-gold italic">
              It Should Be Felt.
            </em>
          </h2>

          <div className="mx-auto mt-10 h-px w-20 bg-gold/60" />

          <p className="mt-6 text-xs tracking-[.23em] text-gold/65 uppercase">
            Wordsmith Squad — Cover Design
          </p>
        </Reveal>
      </section>

      {/* ====================================
          SECTION 5 — SERVICES
      ==================================== */}

      <section className="bg-[#f6f1e8] py-24 md:py-36">
        <div className="wrap">
          <SectionHead
            eyebrow="Our design expertise"
            title={
              <>
                Every Element,
                <br />
                <em className="text-gold-dark italic">
                  Beautifully Considered.
                </em>
              </>
            }
            text="From the exterior cover to the pages within, our design services help bring your book's visual identity together."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {SERVICES.map((service, index) => (
              <Reveal key={service.route} delay={(index % 2) * 100}>
                <Link
                  to={service.route}
                  className="group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[2rem] border border-[#e0d2bd] bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#b79860] hover:shadow-[0_25px_65px_rgba(71,45,18,.13)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b79860] sm:p-10"
                >
                  <span
                    aria-hidden
                    className="absolute -top-12 right-0 font-display text-[11rem] leading-none text-[#b79a6b]/[.065] italic"
                  >
                    {service.num}
                  </span>

                  <div className="relative flex items-center justify-between">
                    <span className="font-display text-4xl text-[#b08d59] italic">
                      {service.num}
                    </span>

                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eee6d9] text-3xl text-[#9b773f] transition-all duration-500 group-hover:rotate-12 group-hover:bg-[#c6a36a] group-hover:text-[#21180f]">
                      {service.symbol}
                    </span>
                  </div>

                  <h3 className="relative mt-10 font-display text-[clamp(1.8rem,2.8vw,2.7rem)] leading-tight font-semibold text-ink">
                    {service.title}
                  </h3>

                  <p className="relative mt-5 max-w-md flex-1 text-sm leading-8 text-ink/60">
                    {service.description}
                  </p>

                  <div className="relative mt-7 flex items-center justify-between border-t border-[#e5d9c6] pt-6">
                    <span className="text-xs font-bold tracking-wide text-[#94713f]">
                      Discover the service
                    </span>

                    <span className="text-xl text-[#94713f] transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================
          SECTION 6 — DESIGN TRANSFORMATION
      ==================================== */}

      <section className="bg-[#eee7dc] py-24 md:py-36">
        <div className="wrap">
          <SectionHead
            eyebrow="The power of design"
            title={
              <>
                From a Simple Idea
                <br />
                to a{" "}
                <em className="text-gold-dark italic">
                  Striking Identity.
                </em>
              </>
            }
            text="Thoughtful design choices can change the way a book feels. Compare a basic concept with a more developed visual direction."
          />

          <CoverTransformation />
        </div>
      </section>

      {/* ====================================
          SECTION 7 — OUR PROCESS
      ==================================== */}

      <section className="relative overflow-hidden bg-[#15120f] py-24 md:py-36">
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-gold/[.06] blur-[120px]" />

        <div className="wrap relative">
          <SectionHead
            tone="light"
            eyebrow="Behind the finished cover"
            title={
              <>
                The Creative
                <br />
                <em className="text-sheen italic">
                  Journey.
                </em>
              </>
            }
            text="Our approach connects your book's meaning with the practical details of a polished design."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {PROCESS.map((step, index) => (
              <Reveal key={step.number} delay={index * 90}>
                <div className="group h-full min-h-[290px] rounded-[1.7rem] border border-gold/15 bg-white/[.035] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-gold/55 hover:bg-gold/[.07]">
                  <span className="font-display text-6xl text-gold/35 italic transition-colors duration-300 group-hover:text-gold">
                    {step.number}
                  </span>

                  <div className="mt-8 h-px bg-gold/20" />

                  <p className="mt-7 text-[10px] font-bold tracking-[.2em] text-gold uppercase">
                    Phase {step.number}
                  </p>

                  <h3 className="mt-3 font-display text-2xl text-ivory">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-ivory/50">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================
          SECTION 8 — FINAL CTA
      ==================================== */}

      <section className="relative overflow-hidden bg-[#c6a36a] py-24 text-center md:py-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,.25),transparent_65%)]" />

        <span
          aria-hidden
          className="pointer-events-none absolute -right-12 -bottom-28 font-display text-[23rem] leading-none text-black/[.04] italic select-none"
        >
          W
        </span>

        <div className="wrap relative">
          <Reveal>
            <p className="text-[11px] font-bold tracking-[.3em] text-[#392919] uppercase">
              Let's create something extraordinary
            </p>

            <h2 className="mx-auto mt-8 max-w-5xl font-display text-[clamp(2.9rem,6vw,6.5rem)] leading-[1.05] font-semibold tracking-[-.04em] text-[#19140e]">
              Your Story Deserves
              <br />
              an{" "}
              <em className="italic">
                Iconic Cover.
              </em>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#44321d] sm:text-lg">
              You've created something worth reading.
              Let's make sure its first impression
              is just as remarkable.
            </p>

            <div className="mt-11 flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="ink">
                Start Your Cover Design
              </Button>

              <Link
                to="/portfolio"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#352717]/40 px-7 py-3 text-sm font-semibold text-[#2b2014] transition-all duration-300 hover:border-[#2b2014] hover:bg-[#2b2014]/10"
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
