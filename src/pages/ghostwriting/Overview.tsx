
import {
  useRef,
  useState,
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
import { EDITORIAL } from "@/lib/data";

/* ==========================================
   WORDSMITH SQUAD
   LUXURY GHOSTWRITING EXPERIENCE
========================================== */

const G = "/ghostwriting";

const SERVICES = [
  {
    title: "Medical Ghostwriters",
    category: "Professional",
    desc: "Transform complex medical knowledge into clear, compelling writing.",
    slug: "medical-ghostwriters",
  },
  {
    title: "Screenplay Script Writing",
    category: "Creative",
    desc: "Bring characters, dialogue, and cinematic stories to life.",
    slug: "screenplay-script-writing",
  },
  {
    title: "Children's Book Writing",
    category: "Creative",
    desc: "Create imaginative stories that inspire younger readers.",
    slug: "childrens-book-writing",
  },
  {
    title: "Speech Script Writing",
    category: "Professional",
    desc: "Find the right words for moments that deserve to be remembered.",
    slug: "speech-script-writing",
  },
  {
    title: "Comic Book Writing",
    category: "Creative",
    desc: "Build dynamic narratives, memorable characters, and powerful scenes.",
    slug: "comic-book-writing",
  },
  {
    title: "Song Writing",
    category: "Creative",
    desc: "Shape your ideas and emotions into expressive original lyrics.",
    slug: "song-writing",
  },
  {
    title: "Real Life Story Writing",
    category: "Books & Stories",
    desc: "Preserve meaningful experiences in a beautifully written narrative.",
    slug: "real-life-story-writing",
  },
  {
    title: "Book Publishing Services",
    category: "Books & Stories",
    desc: "Explore the next steps for preparing and publishing your manuscript.",
    slug: "book-publishing-services",
  },
  {
    title: "Corporate Writing Services",
    category: "Business & Digital",
    desc: "Communicate business ideas with clarity, purpose, and authority.",
    slug: "corporate-writing-services",
  },
  {
    title: "Technical Ghostwriting",
    category: "Professional",
    desc: "Turn specialized information into accessible, structured content.",
    slug: "technical-ghostwriting",
  },
  {
    title: "Podcast Script Writing",
    category: "Creative",
    desc: "Craft engaging episodes with a confident and recognizable voice.",
    slug: "podcast-script-writing",
  },
  {
    title: "Brand Storytelling",
    category: "Business & Digital",
    desc: "Express the purpose and personality behind your brand.",
    slug: "brand-storytelling",
  },
  {
    title: "Legal Ghostwriting",
    category: "Professional",
    desc: "Develop carefully structured legal-industry content and narratives.",
    slug: "legal-ghostwriting",
  },
  {
    title: "Twitter Ghostwriting",
    category: "Business & Digital",
    desc: "Create concise posts that communicate ideas and spark conversations.",
    slug: "twitter-ghostwriting",
  },
  {
    title: "Instagram Ghostwriting",
    category: "Business & Digital",
    desc: "Build an engaging written voice for your visual content.",
    slug: "instagram-ghostwriting",
  },
  {
    title: "Facebook Ghostwriting",
    category: "Business & Digital",
    desc: "Connect with your audience through thoughtful social storytelling.",
    slug: "facebook-ghostwriting",
  },
  {
    title: "LinkedIn Ghostwriting",
    category: "Business & Digital",
    desc: "Turn professional experience into impactful thought leadership.",
    slug: "linkedin-ghostwriting",
  },
  {
    title: "Scientific Ghostwriting",
    category: "Professional",
    desc: "Present scientific concepts through clear and accurate communication.",
    slug: "scientific-ghostwriting",
  },
  {
    title: "Find a Literary Agent",
    category: "Books & Stories",
    desc: "Explore preparation and guidance for your literary representation journey.",
    slug: "find-a-literary-agent",
  },
] as const;

const FILTERS = [
  "All",
  "Books & Stories",
  "Creative",
  "Professional",
  "Business & Digital",
] as const;

type Filter = (typeof FILTERS)[number];

const PROCESS = [
  {
    n: "01",
    title: "The Conversation",
    text: "We begin by listening. Share your ideas, vision, audience, preferred tone, and goals.",
  },
  {
    n: "02",
    title: "The Blueprint",
    text: "Together, we shape the direction, structure, and creative foundation of your project.",
  },
  {
    n: "03",
    title: "The Writing",
    text: "Your dedicated writing process begins, bringing research, storytelling, and craftsmanship together.",
  },
  {
    n: "04",
    title: "The Refinement",
    text: "We review your feedback and refine the work until the message feels unmistakably yours.",
  },
];

/* ==========================================
   CURSOR LIGHT
   Smooth, subtle and performance-friendly
========================================== */

function useGoldSpotlight() {
  const lightRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const positionRef = useRef({ x: -500, y: -500 });

  const move = (e: PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return;

    positionRef.current = {
      x: e.clientX,
      y: e.clientY,
    };

    if (rafRef.current !== null) return;

    rafRef.current = requestAnimationFrame(() => {
      const light = lightRef.current;

      if (light) {
        light.style.transform = `translate3d(${
          positionRef.current.x - 190
        }px, ${positionRef.current.y - 190}px, 0)`;
        light.style.opacity = "1";
      }

      rafRef.current = null;
    });
  };

  const leave = () => {
    if (lightRef.current) {
      lightRef.current.style.opacity = "0";
    }

    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  return { lightRef, move, leave };
}

/* ==========================================
   HERO MANUSCRIPT VISUAL
========================================== */

function ManuscriptArt() {
  return (
    <div className="gw-scene relative mx-auto h-[420px] w-full max-w-[520px] sm:h-[520px] lg:h-[600px]">
      {/* Ambient golden light */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[16%] left-[12%] h-[70%] w-[80%] rounded-full bg-gold/15 blur-[85px]"
      />

      {/* Decorative orbit */}
      <div className="gw-orbit absolute inset-[8%] rounded-full border border-gold/20" />

      <div className="absolute inset-[16%] rounded-full border border-dashed border-gold/15" />

      {/* Back paper */}
      <div className="absolute top-[18%] left-[15%] h-[66%] w-[59%] rotate-[-12deg] rounded-lg border border-[#b99f75] bg-[#d2bd96] shadow-[0_35px_65px_rgba(0,0,0,.55)]">
        <div className="absolute inset-4 rounded-sm border border-[#93774e]/30" />
      </div>

      {/* Main manuscript */}
      <div className="gw-paper absolute top-[10%] left-[25%] z-10 h-[73%] w-[63%] rotate-[5deg] overflow-hidden rounded-lg border border-[#d4c4a5] bg-[#f3ecdc] shadow-[15px_45px_90px_rgba(0,0,0,.7)]">
        <div className="absolute inset-y-0 left-0 w-2 bg-[#b9a784]/30" />

        <div className="flex h-full flex-col px-5 py-7 sm:px-9 sm:py-10">
          <div className="flex justify-between border-b border-[#a89067]/40 pb-3 text-[7px] font-semibold tracking-[.2em] text-[#846b46] uppercase sm:text-[9px]">
            <span>Wordsmith Squad</span>
            <span>Manuscript 01</span>
          </div>

          <p className="mt-9 text-center font-display text-[clamp(1.3rem,3vw,2.3rem)] leading-[1.2] font-semibold text-[#30271c]">
            The Stories
            <br />
            We Carry
          </p>

          <p className="mt-3 text-center font-display text-xs text-[#957448] italic sm:text-sm">
            An unwritten masterpiece
          </p>

          <div className="mx-auto mt-7 h-px w-14 bg-[#b18a52]" />

          <p className="mt-8 font-display text-[clamp(.8rem,1.5vw,1.1rem)] leading-[1.8] text-[#4d3e2b] italic">
            Every story begins with a whisper.
            An idea, a memory, a moment
            waiting to become something
            unforgettable...
          </p>

          <div className="mt-6 space-y-3" aria-hidden>
            {[
              "w-full",
              "w-[94%]",
              "w-full",
              "w-[78%]",
              "w-[92%]",
              "w-[64%]",
            ].map((width, index) => (
              <div
                key={index}
                className={`h-[3px] rounded-full bg-[#a9997e]/40 ${width}`}
              />
            ))}
          </div>

          <div className="mt-auto flex items-center justify-between border-t border-[#b6a688]/40 pt-3 text-[7px] tracking-widest text-[#8c795d] uppercase">
            <span>First Draft</span>
            <span>01</span>
          </div>
        </div>
      </div>

      {/* Gold pen */}
      <div className="gw-pen absolute top-[26%] right-[7%] z-20 h-[53%] w-[10px] rotate-[34deg] rounded-full bg-gradient-to-r from-[#6d4a21] via-[#e7c384] to-[#8c602e] shadow-[10px_10px_25px_rgba(0,0,0,.6)]">
        <div className="absolute top-[9%] left-0 h-[3px] w-full bg-[#3d2a16]" />
        <div className="absolute right-0 bottom-[-15px] left-0 mx-auto h-5 w-[7px] rounded-b-full bg-[#b78b4d]" />
      </div>

      {/* Floating details */}
      <div className="gw-float absolute top-[5%] right-[1%] z-30 rounded-2xl border border-gold/30 bg-[#191612]/95 px-4 py-3 shadow-2xl backdrop-blur-xl sm:px-5">
        <p className="text-[10px] tracking-[.15em] text-gold uppercase">
          ✦ A story in the making
        </p>
        <p className="mt-1 text-xs font-semibold text-ivory">
          Your vision, beautifully told.
        </p>
      </div>

      <div className="gw-float-delayed absolute bottom-[5%] left-[1%] z-30 rounded-2xl border border-ivory/15 bg-[#17140f]/95 px-5 py-4 shadow-2xl backdrop-blur-xl">
        <p className="font-display text-xl text-gold italic sm:text-2xl">
          Crafted with intention.
        </p>
        <p className="mt-1 text-[9px] tracking-[.17em] text-ivory/45 uppercase">
          Behind every remarkable story
        </p>
      </div>

      <div className="absolute right-[4%] bottom-[18%] z-20 flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-[#181510] font-display text-2xl text-gold italic shadow-xl sm:h-20 sm:w-20 sm:text-3xl">
        W
      </div>
    </div>
  );
}

/* ==========================================
   GHOSTWRITING SERVICE CARD
========================================== */

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  return (
    <Reveal delay={(index % 3) * 70} className="h-full">
      <Link
        to={`${G}/${service.slug}`}
        className="gw-card group relative flex h-full min-h-[275px] flex-col overflow-hidden rounded-[1.6rem] border border-gold/15 bg-[#1a1713] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:bg-[#231d16] hover:shadow-[0_25px_60px_rgba(198,163,106,.1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:p-8"
      >
        <span
          aria-hidden
          className="absolute -top-8 -right-2 font-display text-[7.5rem] leading-none text-gold/[.045] italic transition-colors duration-500 group-hover:text-gold/[.11]"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="relative flex items-center justify-between">
          <span className="font-display text-2xl text-gold/65 italic">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-lg text-gold transition-all duration-300 group-hover:-rotate-45 group-hover:bg-gold group-hover:text-[#17130e]">
            ↗
          </span>
        </div>

        <p className="relative mt-6 text-[10px] font-semibold tracking-[.18em] text-gold uppercase">
          {service.category}
        </p>

        <h3 className="relative mt-3 font-display text-[clamp(1.5rem,2vw,2rem)] leading-tight font-semibold text-ivory">
          {service.title}
        </h3>

        <p className="relative mt-4 flex-1 text-sm leading-7 text-ivory/55">
          {service.desc}
        </p>

        <div className="relative mt-7 flex items-center gap-2 border-t border-ivory/10 pt-5 text-xs font-semibold text-gold">
          Discover this service
          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

/* ==========================================
   MAIN GHOSTWRITING PAGE
========================================== */

export default function Overview() {
  const [filter, setFilter] = useState<Filter>("All");
  const { lightRef, move, leave } = useGoldSpotlight();

  usePageMeta(
    "Professional Ghostwriting Services | Wordsmith Squad",
    "Premium book, creative, business, professional, and digital ghostwriting services. Bring your story to life with Wordsmith Squad."
  );

  const visibleServices =
    filter === "All"
      ? SERVICES
      : SERVICES.filter((service) => service.category === filter);

  return (
    <main
      className="relative isolate overflow-x-clip bg-ink-950"
      onPointerMove={move}
      onPointerLeave={leave}
    >
      {/* PAGE-ONLY ANIMATIONS */}
      <style>
        {`
          @keyframes gwFloat {
            0%,100% { transform:translateY(0); }
            50% { transform:translateY(-13px); }
          }

          @keyframes gwFloatDelayed {
            0%,100% { transform:translateY(0); }
            50% { transform:translateY(10px); }
          }

          @keyframes gwOrbit {
            from { transform:rotate(0deg); }
            to { transform:rotate(360deg); }
          }

          @keyframes gwReveal {
            from { opacity:0; transform:translateY(25px); }
            to { opacity:1; transform:translateY(0); }
          }

          .gw-float {
            animation:gwFloat 6s ease-in-out infinite;
          }

          .gw-float-delayed {
            animation:gwFloatDelayed 7s ease-in-out infinite;
          }

          .gw-paper {
            animation:gwFloat 8s ease-in-out infinite;
          }

          .gw-pen {
            animation:gwFloatDelayed 6.5s ease-in-out infinite;
          }

          .gw-orbit {
            animation:gwOrbit 90s linear infinite;
          }

          .gw-card {
            animation:gwReveal .55s ease-out both;
          }

          .gw-photo {
            transition:transform 900ms cubic-bezier(.2,.8,.2,1);
          }

          .gw-photo:hover {
            transform:scale(1.045);
          }

          @media (hover:none),(pointer:coarse) {
            .gw-cursor { display:none !important; }
          }

          @media (prefers-reduced-motion:reduce) {
            .gw-float,
            .gw-float-delayed,
            .gw-paper,
            .gw-pen,
            .gw-orbit,
            .gw-card {
              animation:none !important;
            }

            .gw-photo {
              transition:none !important;
            }
          }
        `}
      </style>

      {/* FOLLOWING GOLDEN CURSOR LIGHT */}
      <div
        ref={lightRef}
        aria-hidden="true"
        className="gw-cursor pointer-events-none fixed top-0 left-0 z-30 hidden h-[380px] w-[380px] rounded-full opacity-0 transition-opacity duration-300 lg:block"
        style={{
          background:
            "radial-gradient(circle,rgba(211,171,98,.15) 0%,rgba(211,171,98,.055) 38%,transparent 72%)",
          transform: "translate3d(-500px,-500px,0)",
          willChange: "transform",
        }}
      />

      {/* ======================================
          SECTION 1 — CINEMATIC HERO
      ====================================== */}

      <section className="relative min-h-[780px] overflow-hidden pt-36 pb-24 sm:pt-44 lg:flex lg:min-h-[830px] lg:items-center lg:pt-32">
        <div className="bg-dots pointer-events-none absolute inset-0 opacity-35" />

        <div className="pointer-events-none absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full bg-gold/[.075] blur-[120px]" />

        <div className="pointer-events-none absolute -bottom-60 -left-32 h-[500px] w-[500px] rounded-full bg-[#735333]/10 blur-[120px]" />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-[5%] bottom-0 hidden font-display text-[27vw] leading-none text-ivory/[.025] italic select-none lg:block"
        >
          Story
        </span>

        <div className="wrap relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-5">
          <div>
            <Reveal>
              <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-gold/25 bg-gold/[.07] px-5 py-3">
                <span className="h-2 w-2 shrink-0 rounded-full bg-gold" />
                <span className="text-[10px] font-bold tracking-[.19em] text-gold uppercase sm:text-xs">
                  The Art of Invisible Storytelling
                </span>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="mt-9 max-w-[800px] font-display text-[clamp(3.2rem,6.3vw,7rem)] leading-[1.035] font-semibold tracking-[-.045em] text-ivory">
                Your Vision.
                <br />
                Our Words.
                <br />
                <em className="text-sheen italic">
                  Your Story.
                </em>
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <p className="mt-9 max-w-[590px] text-base leading-8 text-ivory/60 sm:text-lg">
                You have the story. We bring the words.
                Together, we turn extraordinary ideas,
                lived experiences, and ambitious visions
                into writing that leaves a lasting impression.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button to="/contact">
                  Bring Your Story to Life
                </Button>

                <a
                  href="#ghostwriting-services"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-ivory/25 px-6 py-3 text-sm font-semibold text-ivory transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold"
                >
                  Explore Our Expertise
                  <span aria-hidden="true">↘</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={310}>
              <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-ivory/10 pt-7 text-xs text-ivory/55">
                {[
                  "Your voice",
                  "Your vision",
                  "Our craftsmanship",
                ].map((item) => (
                  <span key={item}>
                    <span className="mr-2 text-gold">✦</span>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={170}>
            <ManuscriptArt />
          </Reveal>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </section>

      {/* ======================================
          SECTION 2 — THE GHOSTWRITING ART
      ====================================== */}

      <section className="relative bg-[#f5f0e7] py-24 md:py-36">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div>
            <SectionHead
              eyebrow="The art of telling your story"
              title={
                <>
                  Your Ideas.
                  <br />
                  Beautifully{" "}
                  <em className="text-gold-dark italic">
                    Expressed.
                  </em>
                </>
              }
              text="Ghostwriting is more than putting words on a page. It's the art of understanding another person's vision and bringing it to life."
            />

            <Reveal delay={120}>
              <p className="mt-8 max-w-xl text-base leading-8 text-ink/65">
                Whether you have a book waiting to be written,
                a personal story worth preserving, or a
                professional message ready to reach the world,
                our writing approach begins with listening.
              </p>

              <p className="mt-5 max-w-xl text-base leading-8 text-ink/65">
                We focus on the ideas, experiences, and
                personality behind every project, so that
                the final words reflect what you truly
                want to say.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {[
                  "Personalized storytelling",
                  "Collaborative writing",
                  "Voice and tone consistency",
                  "Thoughtful revisions",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-[#e0d4c0] bg-white/65 px-4 py-4 text-sm font-medium text-ink/80"
                  >
                    <span className="text-gold-dark">✦</span>
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={170} className="relative">
            <div className="relative">
              <div className="absolute -top-5 -right-5 h-36 w-36 rounded-full border border-gold-dark/25" />

              <div className="overflow-hidden rounded-[2rem] shadow-[0_35px_75px_rgba(40,25,9,.2)]">
                <img
                  src={EDITORIAL.moodyWriter}
                  loading="lazy"
                  alt="A writer working thoughtfully on a manuscript"
                  className="gw-photo aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
                />
              </div>

              <div className="absolute -bottom-6 left-3 max-w-[300px] rounded-2xl border border-gold/30 bg-[#181511] px-6 py-5 shadow-2xl sm:-left-6">
                <p className="font-display text-2xl text-gold italic">
                  Words with purpose.
                </p>
                <p className="mt-2 text-[10px] tracking-[.15em] text-ivory/50 uppercase">
                  Every story deserves its voice
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======================================
          SECTION 3 — SERVICES
      ====================================== */}

      <section
        id="ghostwriting-services"
        className="relative scroll-mt-28 overflow-hidden bg-[#100f0d] py-24 md:py-36"
      >
        <div className="bg-dots pointer-events-none absolute inset-0 opacity-25" />

        <div className="pointer-events-none absolute top-20 -right-60 h-[550px] w-[550px] rounded-full bg-gold/[.055] blur-[110px]" />

        <div className="wrap relative z-10">
          <SectionHead
            tone="light"
            eyebrow="Discover our writing expertise"
            title={
              <>
                Every Story Has
                <br />
                <em className="text-sheen italic">
                  Its Own Language.
                </em>
              </>
            }
            text="From books and creative scripts to professional and digital content, discover the writing service that matches your vision."
          />

          {/* Functional service filters */}
          <div
            className="mt-12 flex flex-wrap gap-2.5"
            role="group"
            aria-label="Filter ghostwriting services"
          >
            {FILTERS.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                aria-pressed={filter === item}
                className={`rounded-full border px-4 py-2.5 text-xs font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:px-5 ${
                  filter === item
                    ? "border-gold bg-gold text-[#17130e]"
                    : "border-ivory/15 bg-white/[.035] text-ivory/60 hover:border-gold/50 hover:text-gold"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visibleServices.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                index={SERVICES.indexOf(service)}
              />
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-ivory/10 pt-7">
            <p className="text-xs text-ivory/45">
              Showing {visibleServices.length} of {SERVICES.length}{" "}
              specialized services
            </p>

            <Link
              to="/contact"
              className="text-sm font-semibold text-gold transition-colors hover:text-ivory"
            >
              Not sure what you need? Let's talk ↗
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================
          SECTION 4 — EDITORIAL QUOTE
      ====================================== */}

      <section className="relative overflow-hidden border-y border-gold/20 bg-[#231c14] py-24 text-center md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(198,163,106,.13),transparent_70%)]" />

        <div className="wrap relative">
          <Reveal>
            <span
              aria-hidden="true"
              className="font-display text-7xl leading-none text-gold/55"
            >
              “
            </span>

            <h2 className="mx-auto -mt-2 max-w-5xl font-display text-[clamp(2rem,4.3vw,4.5rem)] leading-[1.2] font-medium text-ivory">
              The most powerful stories
              <br />
              begin with{" "}
              <em className="text-gold italic">
                someone willing to tell them.
              </em>
            </h2>

            <div className="mx-auto mt-10 h-px w-20 bg-gold/60" />

            <p className="mt-6 text-xs font-bold tracking-[.28em] text-gold/70 uppercase">
              Wordsmith Squad
            </p>
          </Reveal>
        </div>
      </section>

      {/* ======================================
          SECTION 5 — OUR PROCESS
      ====================================== */}

      <section className="bg-[#f6f1e8] py-24 md:py-36">
        <div className="wrap">
          <SectionHead
            eyebrow="The collaborative journey"
            title={
              <>
                From Your First Idea
                <br />
                to{" "}
                <em className="text-gold-dark italic">
                  The Final Word.
                </em>
              </>
            }
            text="A thoughtful writing journey centered on your vision, collaboration, and a shared understanding of your story."
          />

          <div className="relative mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {PROCESS.map((step, index) => (
              <Reveal key={step.n} delay={index * 90}>
                <div className="group relative h-full min-h-[320px] rounded-[1.75rem] border border-[#e3d7c5] bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-gold-dark/45 hover:shadow-[0_25px_55px_rgba(75,52,24,.12)] sm:p-8">
                  <span className="font-display text-[5rem] leading-none text-gold-dark/20 transition-colors group-hover:text-gold-dark/50">
                    {step.n}
                  </span>

                  <div className="mt-8 h-px bg-[#e6daca]" />

                  <p className="mt-7 text-[10px] font-bold tracking-[.2em] text-gold-dark uppercase">
                    Stage {step.n}
                  </p>

                  <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-ink/60">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================
          SECTION 6 — WRITING PHILOSOPHY
      ====================================== */}

      <section className="relative overflow-hidden bg-[#14120f] py-24 md:py-36">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[.95fr_1.05fr] lg:gap-24">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-gold/20">
              <img
                src={EDITORIAL.typewriter}
                alt="Vintage typewriter symbolizing thoughtful storytelling"
                loading="lazy"
                className="gw-photo aspect-[5/4] w-full object-cover lg:aspect-[4/5]"
              />
            </div>

            <div className="absolute -right-3 -bottom-5 rounded-2xl border border-gold/25 bg-[#1c1812] px-6 py-4 shadow-2xl sm:-right-6">
              <p className="font-display text-2xl text-gold italic">
                Your voice matters.
              </p>

              <p className="mt-1 text-[10px] tracking-[.15em] text-ivory/50 uppercase">
                An author-first philosophy
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow tone="light">
                The philosophy behind our words
              </Eyebrow>

              <h2 className="mt-7 font-display text-[clamp(2.7rem,5vw,5rem)] leading-[1.08] font-semibold text-ivory">
                Written by Us.
                <br />
                Inspired by You.
                <br />
                <em className="text-sheen italic">
                  Always Yours.
                </em>
              </h2>
            </Reveal>

            <Reveal delay={130}>
              <p className="mt-8 max-w-xl text-base leading-8 text-ivory/60">
                No two voices are alike. Your personality,
                perspective, and purpose shape the entire
                creative process. Our role is to help express
                them with precision and imagination.
              </p>

              <div className="mt-9 space-y-4">
                {[
                  "Writing informed by your ideas and experiences",
                  "Clear communication and collaborative feedback",
                  "Careful attention to authenticity and tone",
                  "Thoughtfully structured, polished content",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs text-gold">
                      ✓
                    </span>

                    <span className="text-sm leading-6 text-ivory/75">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Button to="/about" variant="outline-light">
                  Discover Our Story
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ======================================
          SECTION 7 — FINAL GOLD CTA
      ====================================== */}

      <section className="relative overflow-hidden bg-[#c6a36a] py-24 text-center md:py-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,.23),transparent_65%)]" />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -bottom-28 font-display text-[23rem] leading-none text-black/[.035] italic select-none"
        >
          W
        </span>

        <div className="wrap relative">
          <Reveal>
            <p className="text-[11px] font-bold tracking-[.3em] text-[#38291a] uppercase">
              Every masterpiece begins somewhere
            </p>

            <h2 className="mx-auto mt-7 max-w-5xl font-display text-[clamp(2.9rem,6vw,6.4rem)] leading-[1.05] font-semibold tracking-[-.04em] text-[#17130e]">
              Your Story Deserves
              <br />
              to Be{" "}
              <em className="italic">
                Told.
              </em>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#3e3020] sm:text-lg">
              You don't have to find every word alone.
              Share your vision with us, and let's explore
              how to turn your ideas into something extraordinary.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="ink">
                Start Your Ghostwriting Project
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
