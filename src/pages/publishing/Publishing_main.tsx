
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
   WORDSMITH SQUAD — PUBLISHING MAIN PAGE

   Approved SEO Content Source:
   Wordssmith Squad SEO for website.pdf
   Pages 42–59

   Original layout, animation, typography,
   color palette and visual design retained.
============================================ */

const SERVICES = [
  {
    number: "01",
    title: "Book Publishing Services",
    subtitle: "PUBLISHING GUIDANCE & SUPPORT",
    description:
      "Our book publishing services take your finished manuscript through the steps between done writing and live on sale. Choose your publishing path, prepare files, set up retailer listings, and plan your launch.",
    path: "/publishing/book-publishing-services",
    symbol: "✦",
  },
  {
    number: "02",
    title: "Self Publishing",
    subtitle: "CONTROL, RIGHTS & ROYALTIES",
    description:
      "Self-publishing gives you speed, control and the freedom to keep your rights. We guide you through editing, design, formatting, uploading, pricing and marketing.",
    path: "/publishing/self-publishing",
    symbol: "◇",
  },
  {
    number: "03",
    title: "eBook Publishing",
    subtitle: "DIGITAL BOOK PUBLISHING",
    description:
      "Ebook publishing is one of the fastest and most affordable ways to get a book to market. We prepare your e-book for Kindle, Apple Books, Kobo and other platforms.",
    path: "/publishing/ebook-publishing",
    symbol: "▣",
  },
  {
    number: "04",
    title: "Audiobook Publishing",
    subtitle: "NARRATION & AUDIO DISTRIBUTION",
    description:
      "Audiobook publishing involves more than recording. We help prepare, edit, master and check your audio files to meet platform quality standards.",
    path: "/publishing/audiobook-publishing",
    symbol: "◈",
  },
  {
    number: "05",
    title: "Self Publishing Consultants",
    subtitle: "ONE-ON-ONE PUBLISHING GUIDANCE",
    description:
      "Our self publishing consultants offer one-on-one guidance to help you pick a path, avoid common mistakes and plan your launch.",
    path: "/publishing/self-publishing-consultants",
    symbol: "✧",
  },
  {
    number: "06",
    title: "Print on Demand Books",
    subtitle: "PAPERBACKS & HARDCOVERS",
    description:
      "Print on demand books are printed only when a customer orders. We help you choose a trim size, paper type and cover finish that fit your book and budget.",
    path: "/publishing/self-publishing",
    symbol: "↗",
  },
] as const;

/*
   The PDF describes a four-step publishing path:
   Review manuscript, choose path, prepare files,
   publish and launch.
*/

const STEPS = [
  {
    n: "01",
    title: "Review Your Manuscript",
    description:
      "Is it edited and ready, or does it need more work first?",
  },
  {
    n: "02",
    title: "Choose Your Path",
    description:
      "Traditional, hybrid or self-publishing.",
  },
  {
    n: "03",
    title: "Prepare Your Files",
    description:
      "Formatting, cover files and metadata.",
  },
  {
    n: "04",
    title: "Publish and Launch",
    description:
      "Upload, proof, release and promote.",
  },
];

/* ============================================
   GOLD CURSOR GLOW
   Original animation retained
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
   Existing design retained
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
            backgroundImage: `linear-gradient(
              180deg,
              rgba(55,31,17,.30),
              rgba(33,19,11,.65)
            ),url("${EDITORIAL.library}")`,
          }}
        />

        <div className="relative flex h-full flex-col items-center justify-between px-2 py-7 text-center text-[#f2e0bb]">
          <span className="text-[7px] tracking-[.25em] uppercase">
            Wordsmith Squad
          </span>

          <span className="font-display text-[clamp(1rem,2.2vw,1.7rem)] leading-tight">
            BOOK
            <br />
            PUBLISHING
            <br />
            SERVICES
          </span>

          <span className="text-[7px] tracking-[.2em] uppercase">
            Publishing Guidance
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
            Wordsmith Squad
          </span>

          <div>
            <div className="mx-auto mb-5 h-px w-16 bg-gold/60" />

            <span className="font-display text-[clamp(1.4rem,3vw,1.5rem)] leading-[1.18] text-[#e8c68c]">
              YOUR
              <br />
              BOOK
              <br />
              PUBLISHED
            </span>

            <div className="mx-auto mt-5 h-px w-16 bg-gold/60" />

            <span className="mt-5 block font-display text-lg text-gold/65 italic">
              ✦
            </span>
          </div>

          <span className="text-[7px] tracking-[.25em] text-gold/80 uppercase sm:text-[9px]">
            Print & Digital
          </span>
        </div>

        {/* Cover shine */}
        <div className="pointer-events-none absolute inset-0 rounded-r-lg bg-gradient-to-br from-white/10 via-transparent to-transparent" />
      </div>

      {/* Ivory book */}
      <div className="pub-float-slow absolute top-[31%] right-[2%] z-30 flex h-[53%] w-[31%] rotate-[12deg] flex-col items-center justify-between rounded-r-lg border border-[#d8c5a2] bg-[#eee7d7] px-3 py-7 text-center shadow-[15px_20px_40px_rgba(0,0,0,.65)]">
        <span className="text-[7px] tracking-[.2em] text-[#8c714c] uppercase">
          Self Publishing
        </span>

        <div>
          <span className="font-display text-[clamp(1rem,2vw,1.7rem)] leading-[1.1] font-semibold text-[#28221b]">
            YOUR
            <br />
            CREATIVE
            <br />
            CONTROL
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
          Book Publishing
        </span>
      </div>
    </div>
  );
}

/* ============================================
   PUBLISHING SERVICE CARD
   Existing visual style retained
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
    "Book Publishing Guidance and Support for Authors in the USA | Wordsmith Squad",
    "Book publishing services for authors in the USA. Traditional, hybrid and self-publishing guidance, Amazon KDP, eBook publishing, audiobook publishing and print-on-demand support."
  );

  const { cursor, move, leave } = useGoldCursor();

  return (
    <main
      className="relative isolate overflow-hidden bg-ink-950"
      onPointerMove={move}
      onPointerLeave={leave}
    >
      {/* Original scoped animations */}
      <style>
        {`
          @keyframes pubFloat {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-15px);
            }
          }

          @keyframes pubFloatSlow {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(12px);
            }
          }

          @keyframes pubOrbit {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
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

      {/* Gold cursor glow */}
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

      {/* ==================================
          1 — CINEMATIC HERO
      ================================== */}

      <section className="relative min-h-[780px] overflow-hidden pt-36 pb-24 sm:pt-40 lg:flex lg:min-h-[850px] lg:items-center lg:pt-32">
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
                Book Publishing Services
              </Eyebrow>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-9 max-w-[750px] font-display text-[clamp(3.35rem,6.2vw,7rem)] leading-[1.04] font-semibold tracking-[-.045em] text-ivory">
                Book Publishing
                <br />
                Guidance and
                <br />
                <em className="text-sheen italic">
                  Support.
                </em>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-9 max-w-[580px] text-base leading-8 text-ivory/60 sm:text-lg">
                Finishing a manuscript is a big milestone.
                Getting it into readers' hands is the next one,
                and the options can feel confusing.
                At Wordsmith Squad, we help you understand
                your options, prepare your book properly
                and publish it the way that fits your goals.
                You keep your rights and your creative control.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button to="/contact">
                  Book Your Free Consultation
                </Button>

                <a
                  href="#publishing-services"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-ivory/25 px-6 py-3 text-sm font-semibold text-ivory transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold"
                >
                  Explore Publishing Services
                  <span aria-hidden>↘</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-ivory/10 pt-7">
                {[
                  "You keep your rights and files",
                  "Transparent pricing",
                  "Publishing guidance",
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

      {/* ==================================
          2 — PUBLISHING INTRODUCTION
      ================================== */}

      <section className="relative bg-[#f3eee4] py-24 md:py-36">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <SectionHead
              eyebrow="Book Publishing Company"
              title={
                <>
                  Publish Your
                  <br />
                  <em className="text-gold-dark italic">
                    Book.
                  </em>
                </>
              }
              text="Our book publishing services take your finished manuscript through the steps between done writing and live on sale."
            />

            <Reveal delay={130}>
              <p className="mt-8 max-w-xl text-base leading-8 text-ink/65">
                Depending on your needs, this can include
                choosing a publishing path, preparing files,
                setting up your book on retail platforms,
                writing your book description, selecting
                categories and keywords, and planning your
                launch.
              </p>

              <p className="mt-5 max-w-xl text-base leading-8 text-ink/65">
                Wordsmith Squad works as a book publishing
                company in the sense of a service partner:
                we support you through each stage while
                you remain the publisher of record
                and keep your rights.
              </p>

              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {[
                  "Traditional publishing",
                  "Hybrid publishing",
                  "Self-publishing",
                  "Amazon publishing",
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
                  You keep your rights.
                </p>

                <p className="mt-2 text-[10px] tracking-[.18em] text-ivory/50 uppercase">
                  Book Publishing Support
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================================
          3 — PUBLISHING SERVICES
      ================================== */}

      <section
        id="publishing-services"
        className="relative scroll-mt-28 overflow-hidden bg-[#100f0d] py-24 md:py-36"
      >
        <div className="bg-dots pointer-events-none absolute inset-0 opacity-25" />

        <div className="pointer-events-none absolute top-24 right-[-250px] h-[600px] w-[600px] rounded-full bg-gold/[0.055] blur-[110px]" />

        <div className="wrap relative">
          <SectionHead
            tone="light"
            eyebrow="Book Publishing Services"
            title={
              <>
                Publishing
                <br />
                <em className="text-sheen italic">
                  Services.
                </em>
              </>
            }
            text="Choose your publishing path, prepare your manuscript, create professional files and reach readers through print, e-book and audiobook formats."
          />

          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((service, index) => (
              <PublishingCard
                key={service.number}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ==================================
          4 — PUBLISHING STATEMENT
      ================================== */}

      <section className="relative overflow-hidden border-y border-gold/20 bg-[#211b15] py-24 text-center md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(198,163,106,.12),transparent_65%)]" />

        <div className="wrap relative">
          <Reveal>
            <span className="font-display text-7xl leading-none text-gold/60">
              “
            </span>

            <h2 className="mx-auto -mt-3 max-w-4xl font-display text-[clamp(2.1rem,4.5vw,4.6rem)] leading-[1.2] font-medium text-ivory">
              You keep your rights
              <br />
              <em className="text-gold italic">
                and your creative control.
              </em>
            </h2>

            <div className="mx-auto mt-10 h-px w-20 bg-gold/60" />

            <p className="mt-6 text-xs font-semibold tracking-[.28em] text-gold/70 uppercase">
              Wordsmith Squad
            </p>
          </Reveal>
        </div>
      </section>

      {/* ==================================
          5 — PUBLISHING PROCESS
      ================================== */}

      <section className="bg-[#f6f1e8] py-24 md:py-36">
        <div className="wrap">
          <SectionHead
            eyebrow="Publish My Book"
            title={
              <>
                How We Help You
                <br />
                <em className="text-gold-dark italic">
                  Publish Your Book.
                </em>
              </>
            }
            text="Many authors simply search publish my book because they want a clear next step. Here is how we help."
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
                    Step {step.n}
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

      {/* ==================================
          6 — WHY CHOOSE WORDSMITH SQUAD
      ================================== */}

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
                You keep your rights.
              </p>

              <p className="mt-1 text-[10px] tracking-[.15em] text-ivory/50 uppercase">
                Why Choose Wordsmith Squad
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow tone="light">
                Why Choose Wordsmith Squad
              </Eyebrow>

              <h2 className="mt-7 font-display text-[clamp(2.7rem,5vw,5rem)] leading-[1.08] text-ivory">
                Honest Guidance.
                <br />
                Full Ownership.
                <br />
                <em className="text-sheen italic">
                  Transparent Pricing.
                </em>
              </h2>
            </Reveal>

            <Reveal delay={130}>
              <p className="mt-8 max-w-xl text-base leading-8 text-ivory/60">
                Wordsmith Squad provides honest guidance on
                every option, including those we don't sell.
                You keep your rights and your files, with
                a full-service team for writing, editing,
                formatting and publishing.
              </p>

              <div className="mt-9 space-y-4">
                {[
                  "Honest guidance on every option, including those we don't sell",
                  "You keep your rights and your files",
                  "Transparent pricing with no hidden fees",
                  "A full-service team for writing, editing, formatting and publishing",
                  "Strict confidentiality through a signed NDA",
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
                  Discover Our Story
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================================
          7 — FINAL CTA
      ================================== */}

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
              Ready to Publish Your Book?
            </p>

            <h2 className="mx-auto mt-7 max-w-4xl font-display text-[clamp(2.9rem,6vw,6.5rem)] leading-[1.05] font-semibold tracking-[-.04em] text-[#17130e]">
              Ready to Publish
              <br />
              <em className="italic">
                Your Book?
              </em>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#3e3020] sm:text-lg">
              Not sure which publishing path is right
              for you? Book a free consultation and
              we'll recommend a path based on your
              goals, budget and timeline.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="ink">
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
