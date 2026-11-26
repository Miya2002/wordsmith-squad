
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
   GHOSTWRITING OVERVIEW

   Content source:
   Wordsmith Squad SEO for Website.pdf
   Pages 1–28, 50–52, 77–80

   Original page layout and animations retained.
========================================== */

const G = "/explore/ghostwriting";

const SERVICES = [
  {
    title: "Medical Ghostwriters",
    category: "Professional",
    desc: "Patient education articles, practice blogs, health newsletters, physician thought leadership and website content that is accurate, clear and compassionate.",
    slug: "medical-ghostwriters",
  },
  {
    title: "Screenplay Script Writing",
    category: "Creative",
    desc: "Turn your film or TV concept into a properly formatted screenplay with strong structure, dialogue and visual storytelling.",
    slug: "screenplay-script-writing",
  },
  {
    title: "Children's Book Writing",
    category: "Creative",
    desc: "Turn your idea into a polished manuscript with the right vocabulary, rhythm and page-by-page pacing for young readers.",
    slug: "childrens-book-writing",
  },
  {
    title: "Speech Script Writing",
    category: "Professional",
    desc: "Keynotes, wedding toasts, eulogies, graduation speeches and executive remarks written to sound natural when spoken.",
    slug: "speech-script-writing",
  },
  {
    title: "Comic Book Writing",
    category: "Creative",
    desc: "Panel-by-panel scripts with story arcs, dialogue and pacing built for artists, graphic novels, webcomics and series launches.",
    slug: "comic-book-writing",
  },
  {
    title: "Song Writing",
    category: "Creative",
    desc: "Original lyrics for artists, brands, weddings, tributes and special projects, with strong hooks and emotional impact.",
    slug: "song-writing",
  },
  {
    title: "Real Life Story Writing",
    category: "Books & Stories",
    desc: "Turn remarkable real-life experiences into books with a clear narrative arc and emotional depth.",
    slug: "real-life-story-writing",
  },
  {
    title: "Book Publishing Services",
    category: "Books & Stories",
    desc: "Choose your publishing path, prepare your book files, set up retailer listings and plan your launch.",
    slug: "book-publishing-services",
  },
  {
    title: "Corporate Writing Services",
    category: "Business & Digital",
    desc: "Company profiles, reports, executive communications, case studies, policy documents and corporate announcements.",
    slug: "corporate-writing-services",
  },
  {
    title: "Technical Ghostwriting",
    category: "Professional",
    desc: "White papers, case studies, documentation overviews, how-to guides, technical blog posts and industry articles.",
    slug: "technical-ghostwriting",
  },
  {
    title: "Podcast Script Writing",
    category: "Creative",
    desc: "Episode outlines, introductions, interview questions, solo episode scripts and show notes.",
    slug: "podcast-script-writing",
  },
  {
    title: "Brand Storytelling",
    category: "Business & Digital",
    desc: "Founder stories, mission statements, company histories and campaign narratives that build a real connection with your audience.",
    slug: "brand-storytelling",
  },
  {
    title: "Legal Ghostwriting",
    category: "Professional",
    desc: "Attorney bios, blog posts, client guides, newsletters, thought leadership articles and website content.",
    slug: "legal-ghostwriting",
  },
  {
    title: "Twitter Ghostwriting",
    category: "Business & Digital",
    desc: "Sharp posts, threads and engagement replies that strengthen your professional voice on X.",
    slug: "twitter-ghostwriting",
  },
  {
    title: "Instagram Ghostwriting",
    category: "Business & Digital",
    desc: "Captions, carousel text, bios and story scripts that match your brand, tone and visual style.",
    slug: "instagram-ghostwriting",
  },
  {
    title: "Facebook Ghostwriting",
    category: "Business & Digital",
    desc: "Page posts, group content, event promotions and community updates that spark conversation.",
    slug: "facebook-ghostwriting",
  },
  {
    title: "LinkedIn Ghostwriting",
    category: "Business & Digital",
    desc: "Profile copy, thought leadership posts, articles and carousels that position you as a trusted voice in your industry.",
    slug: "linkedin-ghostwriting",
  },
  {
    title: "Scientific Ghostwriting",
    category: "Professional",
    desc: "Research and data transformed into clear articles, white papers, grant support content, investor summaries and public explainers.",
    slug: "scientific-ghostwriting",
  },
  {
    title: "Find a Literary Agent",
    category: "Books & Stories",
    desc: "Query letters, book proposals, targeted submission lists and professional materials to help you approach literary agents.",
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

/*
 * PDF process has five steps.
 * Writer matching and planning are combined here
 * to preserve the original four-card design.
 */

const PROCESS = [
  {
    n: "01",
    title: "Free Consultation",
    text: "Share your goals, topic and timeline. Tell us about your book, your audience and the message you want to communicate.",
  },
  {
    n: "02",
    title: "Writer Match & Planning",
    text: "We pair you with a writer suited to your project, build an outline and learn how you think and speak.",
  },
  {
    n: "03",
    title: "Drafting & Feedback",
    text: "You review each stage, provide feedback and shape the direction of the writing.",
  },
  {
    n: "04",
    title: "Revision & Final Delivery",
    text: "We refine the work according to the agreed revisions and deliver the finished manuscript or content.",
  },
];

/* ==========================================
   CURSOR LIGHT
   Original animation retained
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
   Original design retained
========================================== */

function ManuscriptArt() {
  return (
    <div className="gw-scene relative mx-auto h-[420px] w-full max-w-[520px] sm:h-[520px] lg:h-[600px]">
      <div
        aria-hidden
        className="pointer-events-none absolute top-[16%] left-[12%] h-[70%] w-[80%] rounded-full bg-gold/15 blur-[85px]"
      />

      <div className="gw-orbit absolute inset-[8%] rounded-full border border-gold/20" />

      <div className="absolute inset-[16%] rounded-full border border-dashed border-gold/15" />

      <div className="absolute top-[18%] left-[15%] h-[66%] w-[59%] rotate-[-12deg] rounded-lg border border-[#b99f75] bg-[#d2bd96] shadow-[0_35px_65px_rgba(0,0,0,.55)]">
        <div className="absolute inset-4 rounded-sm border border-[#93774e]/30" />
      </div>

      <div className="gw-paper absolute top-[10%] left-[25%] z-10 h-[73%] w-[63%] rotate-[5deg] overflow-hidden rounded-lg border border-[#d4c4a5] bg-[#f3ecdc] shadow-[15px_45px_90px_rgba(0,0,0,.7)]">
        <div className="absolute inset-y-0 left-0 w-2 bg-[#b9a784]/30" />

        <div className="flex h-full flex-col px-5 py-7 sm:px-9 sm:py-10">
          <div className="flex justify-between border-b border-[#a89067]/40 pb-3 text-[7px] font-semibold tracking-[.2em] text-[#846b46] uppercase sm:text-[9px]">
            <span>Wordsmith Squad</span>
            <span>Manuscript 01</span>
          </div>

          <p className="mt-9 text-center font-display text-[clamp(1.3rem,3vw,2.3rem)] leading-[1.2] font-semibold text-[#30271c]">
            Your Story
            <br />
            Your Voice
          </p>

          <p className="mt-3 text-center font-display text-xs text-[#957448] italic sm:text-sm">
            Professional Book Ghostwriting
          </p>

          <div className="mx-auto mt-7 h-px w-14 bg-[#b18a52]" />

          <p className="mt-8 font-display text-[clamp(.8rem,1.5vw,1.1rem)] leading-[1.8] text-[#4d3e2b] italic">
            You have a story
            worth telling.
            We help turn your ideas
            into a finished manuscript.
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

      <div className="gw-pen absolute top-[26%] right-[7%] z-20 h-[53%] w-[10px] rotate-[34deg] rounded-full bg-gradient-to-r from-[#6d4a21] via-[#e7c384] to-[#8c602e] shadow-[10px_10px_25px_rgba(0,0,0,.6)]">
        <div className="absolute top-[9%] left-0 h-[3px] w-full bg-[#3d2a16]" />
        <div className="absolute right-0 bottom-[-15px] left-0 mx-auto h-5 w-[7px] rounded-b-full bg-[#b78b4d]" />
      </div>

      <div className="absolute right-[4%] bottom-[18%] z-20 flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-[#181510] font-display text-2xl text-gold italic shadow-xl sm:h-20 sm:w-20 sm:text-3xl">
        W
      </div>
    </div>
  );
}

/* ==========================================
   GHOSTWRITING SERVICE CARD
   Original component retained
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
          className="absolute -top-8 -right-2 font-display text-[7.5rem] leading-none text-gold/[.045] transition-colors duration-500 group-hover:text-gold/[.11]"
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
    "Professional Ghostwriting Services for Authors, Founders and Brands | Wordsmith Squad",
    "Professional ghostwriting services for authors, entrepreneurs, executives and first-time authors across the USA. Book ghostwriting, thought leadership, speeches and brand content."
  );

  const visibleServices =
    filter === "All"
      ? SERVICES
      : SERVICES.filter(
          (service) => service.category === filter
        );

  return (
    <main
      className="relative isolate overflow-x-clip bg-ink-950"
      onPointerMove={move}
      onPointerLeave={leave}
    >
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

      {/* GOLD CURSOR EFFECT */}
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
                  Core Ghostwriting Services
                </span>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="mt-9 max-w-[800px] font-display text-[clamp(3.2rem,6.3vw,7rem)] leading-[1.035] font-semibold tracking-[-.045em] text-ivory">
                Professional
                <br />
                Ghostwriting
                <br />
                <em className="text-sheen italic">
                  Services.
                </em>
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <p className="mt-9 max-w-[590px] text-base leading-8 text-ivory/60 sm:text-lg">
                Everyone has ideas worth sharing, but not everyone
                has the time or the skill to turn them into polished
                writing. At Wordsmith Squad, our ghostwriting team
                writes books, articles, speeches, thought leadership
                and more in your voice, under your name, with
                complete confidentiality.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button to="/contact">
                  Book Your Free Consultation
                </Button>

                <a
                  href="#ghostwriting-services"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-ivory/25 px-6 py-3 text-sm font-semibold text-ivory transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold"
                >
                  Explore Our Services
                  <span aria-hidden="true">↘</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={310}>
              <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-ivory/10 pt-7 text-xs text-ivory/55">
                {[
                  "Your voice, always",
                  "Genre-specific writers",
                  "Clear communication",
                ].map((item) => (
                  <span key={item}>
                    <span className="mr-2 text-gold">
                      ✦
                    </span>
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
          SECTION 2 — ABOUT GHOSTWRITING
      ====================================== */}

      <section className="relative bg-[#f5f0e7] py-24 md:py-36">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div>
            <SectionHead
              eyebrow="What Is a Ghostwriter?"
              title={
                <>
                  What Is a
                  <br />
                  <em className="text-gold-dark italic">
                    Ghostwriter?
                  </em>
                </>
              }
              text="A ghostwriter is a professional writer who creates content on someone else's behalf. You receive the credit and the ownership, while the writer works behind the scenes under a confidentiality agreement."
            />

            <Reveal delay={120}>
              <p className="mt-8 max-w-xl text-base leading-8 text-ink/65">
                Ghostwriters have long helped CEOs,
                politicians, doctors, athletes and
                creators share their expertise and
                stories. When you work with Wordsmith
                Squad, the finished piece sounds like
                you at your clearest and most confident.
              </p>

              <p className="mt-5 max-w-xl text-base leading-8 text-ink/65">
                Looking for a ghostwriter for hire?
                After a free consultation, we match
                you with a writer who knows your
                subject, understands your audience
                and can capture your tone.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {[
                  "Books, memoirs and ebooks",
                  "Articles, blogs and LinkedIn writing",
                  "Speeches and presentations",
                  "Website and brand copy",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-[#e0d4c0] bg-white/65 px-4 py-4 text-sm font-medium text-ink/80"
                  >
                    <span className="text-gold-dark">
                      ✦
                    </span>
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
                  Your voice, always.
                </p>

                <p className="mt-2 text-[10px] tracking-[.15em] text-ivory/50 uppercase">
                  You bring the vision. We bring the craft.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======================================
          SECTION 3 — SERVICE CARDS
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
            eyebrow="Professional Ghostwriting Services We Offer"
            title={
              <>
                Ghostwriting
                <br />
                <em className="text-sheen italic">
                  Services We Offer.
                </em>
              </>
            }
            text="Our professional ghostwriting services are designed to meet your goals from the first idea to the final draft. Explore books, thought leadership, speech writing, business content and specialized ghostwriting."
          />

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
              Showing {visibleServices.length} of{" "}
              {SERVICES.length} specialized services
            </p>

            <Link
              to="/contact"
              className="text-sm font-semibold text-gold transition-colors hover:text-ivory"
            >
              Book Your Free Consultation ↗
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================
          SECTION 4 — PDF BRAND STATEMENT
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
              You Bring the Vision.
              <br />
              <em className="text-gold italic">
                We Bring the Craft.
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
            eyebrow="How to Hire a Ghostwriter"
            title={
              <>
                Our Simple
                <br />
                <em className="text-gold-dark italic">
                  Process.
                </em>
              </>
            }
            text="Wondering how to hire a ghostwriter you can trust? Start with a free consultation, then move through writer matching, planning, drafting, feedback and final delivery."
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
          SECTION 6 — WHY CHOOSE US
      ====================================== */}

      <section className="relative overflow-hidden bg-[#14120f] py-24 md:py-36">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[.95fr_1.05fr] lg:gap-24">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-gold/20">
              <img
                src={EDITORIAL.typewriter}
                alt="Vintage typewriter representing book ghostwriting"
                loading="lazy"
                className="gw-photo aspect-[5/4] w-full object-cover lg:aspect-[4/5]"
              />
            </div>

            <div className="absolute -right-3 -bottom-5 rounded-2xl border border-gold/25 bg-[#1c1812] px-6 py-4 shadow-2xl sm:-right-6">
              <p className="font-display text-2xl text-gold italic">
                Your voice, not ours.
              </p>

              <p className="mt-1 text-[10px] tracking-[.15em] text-ivory/50 uppercase">
                Why Authors Choose Wordsmith Squad
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow tone="light">
                Why Hire a Ghostwriter?
              </Eyebrow>

              <h2 className="mt-7 font-display text-[clamp(2.7rem,5vw,5rem)] leading-[1.08] font-semibold text-ivory">
                Save Time.
                <br />
                Stay in Control.
                <br />
                <em className="text-sheen italic">
                  Protect Your Privacy.
                </em>
              </h2>
            </Reveal>

            <Reveal delay={130}>
              <p className="mt-8 max-w-xl text-base leading-8 text-ivory/60">
                Writing takes hours you could spend
                running your business. A professional
                shapes your ideas into clear, persuasive
                writing, keeps your project moving
                and helps you finish what you start.
              </p>

              <div className="mt-9 space-y-4">
                {[
                  "Your voice, not ours",
                  "Experienced writers matched to your needs",
                  "Clear communication and regular updates",
                  "Strict confidentiality through a signed NDA",
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
                <Button
                  to="/about"
                  variant="outline-light"
                >
                  Discover Our Story
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ======================================
          SECTION 7 — FINAL CTA
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
              Ready to Work With a Ghostwriter?
            </p>

            <h2 className="mx-auto mt-7 max-w-5xl font-display text-[clamp(2.9rem,6vw,6.4rem)] leading-[1.05] font-semibold tracking-[-.04em] text-[#17130e]">
              Your Ideas Deserve
              <br />
              to Be{" "}
              <em className="italic">
                Heard.
              </em>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#3e3020] sm:text-lg">
              Let Wordsmith Squad turn them into clear,
              compelling writing that represents you well.
              Reach out today for a free consultation.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button
                to="/contact"
                variant="ink"
              >
                Book Your Free Consultation
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
