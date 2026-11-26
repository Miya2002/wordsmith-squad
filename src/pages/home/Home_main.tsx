
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/utils/cn";
import { Book3D } from "@/components/Book3D";
import { WsMark } from "@/components/Logo";
import {
  Button,
  CountUp,
  Reveal,
  Words,
  usePageMeta,
} from "@/components/ui";
import { TrailerPlayer } from "@/components/trailer/TrailerPlayer";
import {
  IconArrowUpRight,
  IconGlobe,
  SERVICE_ICONS,
  WHY_ICONS,
} from "@/components/Icons";
import {
  BOOKS,
  EDITORIAL,
  PROCESS_STEPS,
  SERVICES,
  WHY_US,
} from "@/lib/data";

// ====================================================
// WORDSMITH SQUAD — COMPLETE HOMEPAGE
// Testimonials included directly.
// No import from components/Sections.
// FinalCTA removed.
// ====================================================

const WRAP =
  "mx-auto w-full max-w-[1450px] px-6 sm:px-8 md:px-10 lg:px-14 xl:px-16 2xl:px-20";

const SECTION = "py-14 md:py-16 lg:py-20";

const rd = (ms: number) =>
  ({ "--rd": `${ms}ms` }) as CSSProperties;

const depth = (n: number) =>
  ({ "--depth": n }) as CSSProperties;

const STEP_TAGS = [
  "Discovery call · Vision brief",
  "Outline · Manuscript",
  "Editorial letter · Polish",
  "Cover · Layout · Publishing files",
  "Launch plan · Author brand",
];

const MEDIA_NAMES = [
  "NBC",
  "ABC",
  "HBO",
  "The New York Times",
  "Forbes",
  "Esquire",
  "The New Yorker",
  "Random House",
  "Paramount",
  "POLITICO",
  "The Wall Street Journal",
  "People",
  "Newsweek",
  "Los Angeles Times",
  "BBC",
];

// Placeholder content only — not actual client testimonials.
const TESTIMONIAL_SLIDES = [
  {
    category: "The Writing Journey",
    quote: "A genuine author's story will be featured here.",
    description:
      "A personal reflection on transforming an idea into a carefully crafted manuscript. This is placeholder copy, not a client review.",
    author: "Future Featured Author",
    role: "Writing experience · Review forthcoming",
  },
  {
    category: "The Publishing Experience",
    quote: "Every publishing journey deserves to be heard.",
    description:
      "Reserved for an author's own perspective on the publishing process. A verified review will replace this placeholder.",
    author: "Future Published Author",
    role: "Publishing experience · Review forthcoming",
  },
  {
    category: "The Creative Partnership",
    quote: "The best stories are made with care and collaboration.",
    description:
      "A future testimonial about the creative relationship between an author and their publishing team. No testimonial has been supplied yet.",
    author: "Future Wordsmith Author",
    role: "Creative partnership · Review forthcoming",
  },
];

export default function Home() {
  usePageMeta(
    "Wordsmith Squad — Your Story. Our Craft.",
    "Professional ghostwriting, editing, publishing, book design and marketing services."
  );

  const navigate = useNavigate();

  // ====================================================
  // HERO SPOTLIGHT
  // ====================================================

  const heroRef = useRef<HTMLElement>(null);
  const torchRef = useRef<HTMLDivElement>(null);

  const onPageMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;

    const torch = torchRef.current;
    if (!torch) return;

    torch.style.left = `${e.clientX}px`;
    torch.style.top = `${e.clientY}px`;
    torch.style.opacity = "1";
  };

  const onPageLeave = () => {
    if (torchRef.current) {
      torchRef.current.style.opacity = "0";
    }
  };

  const onHeroMove = (e: PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return;

    const el = heroRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    el.style.setProperty("--px", String((x - 0.5) * 2));
    el.style.setProperty("--py", String((y - 0.5) * 2));
    el.style.setProperty("--hx", `${x * 100}%`);
    el.style.setProperty("--hy", `${y * 100}%`);
  };

  const onHeroLeave = () => {
    heroRef.current?.style.setProperty("--px", "0");
    heroRef.current?.style.setProperty("--py", "0");
  };

  // ====================================================
  // BOOK DATA
  // ====================================================

  const heroMain = BOOKS.find((book) => book.id === "ember");
  const heroLeft = BOOKS.find((book) => book.id === "salt");
  const heroRight = BOOKS.find((book) => book.id === "empire");

  const featured = [
    "ember",
    "cartographer",
    "empire",
    "letters",
  ]
    .map((id) => BOOKS.find((book) => book.id === id))
    .filter(
      (book): book is (typeof BOOKS)[number] => Boolean(book)
    );

  // ====================================================
  // SERVICES CAROUSEL
  // ====================================================

  const servicesSliderRef = useRef<HTMLDivElement>(null);
  const servicesPausedRef = useRef(false);

  const [serviceIndex, setServiceIndex] = useState(0);
  const [canSlide, setCanSlide] = useState(false);

  useEffect(() => {
    const slider = servicesSliderRef.current;
    if (!slider) return;

    const update = () => {
      const overflow =
        slider.scrollWidth > slider.clientWidth + 2;

      setCanSlide(overflow);

      if (!overflow) setServiceIndex(0);
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(slider);

    if (slider.firstElementChild) {
      observer.observe(slider.firstElementChild);
    }

    window.addEventListener("resize", update);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollToService = (index: number) => {
    const slider = servicesSliderRef.current;
    if (!slider) return;

    const cards = slider.querySelectorAll<HTMLElement>(
      "[data-service-card]"
    );

    if (!cards.length) return;

    const maxScroll = Math.max(
      0,
      slider.scrollWidth - slider.clientWidth
    );

    if (maxScroll <= 2) return;

    if (index >= cards.length) {
      slider.scrollTo({ left: 0, behavior: "smooth" });
      setServiceIndex(0);
      return;
    }

    if (index < 0) {
      slider.scrollTo({
        left: maxScroll,
        behavior: "smooth",
      });
      setServiceIndex(cards.length - 1);
      return;
    }

    const firstCard = cards[0];
    const targetCard = cards[index];

    if (!firstCard || !targetCard) return;

    const target = Math.min(
      targetCard.offsetLeft - firstCard.offsetLeft,
      maxScroll
    );

    slider.scrollTo({
      left: target,
      behavior: "smooth",
    });

    setServiceIndex(index);
  };

  useEffect(() => {
    if (!canSlide) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (reducedMotion.matches) return;

    const timer = window.setInterval(() => {
      if (servicesPausedRef.current) return;

      const slider = servicesSliderRef.current;
      if (!slider) return;

      const cards = slider.querySelectorAll<HTMLElement>(
        "[data-service-card]"
      );

      if (!cards.length) return;

      const maxScroll =
        slider.scrollWidth - slider.clientWidth;

      if (maxScroll <= 2) return;

      if (slider.scrollLeft >= maxScroll - 5) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
        setServiceIndex(0);
        return;
      }

      const firstCard = cards[0];
      if (!firstCard) return;

      const nextIndex = Array.from(cards).findIndex(
        (card) =>
          card.offsetLeft - firstCard.offsetLeft >
          slider.scrollLeft + 5
      );

      if (nextIndex < 0) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
        setServiceIndex(0);
        return;
      }

      const targetCard = cards[nextIndex];
      if (!targetCard) return;

      slider.scrollTo({
        left: Math.min(
          targetCard.offsetLeft - firstCard.offsetLeft,
          maxScroll
        ),
        behavior: "smooth",
      });

      setServiceIndex(nextIndex);
    }, 3500);

    return () => window.clearInterval(timer);
  }, [canSlide]);

  const syncServiceIndex = () => {
    const slider = servicesSliderRef.current;
    if (!slider) return;

    const cards = slider.querySelectorAll<HTMLElement>(
      "[data-service-card]"
    );

    const firstCard = cards[0];
    if (!firstCard) return;

    let nearest = 0;
    let nearestDistance = Infinity;

    cards.forEach((card, index) => {
      const left =
        card.offsetLeft - firstCard.offsetLeft;

      const distance = Math.abs(slider.scrollLeft - left);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearest = index;
      }
    });

    setServiceIndex(nearest);
  };

  // ====================================================
  // TESTIMONIAL CAROUSEL STATE — FIXED
  // ====================================================

  const [activeReview, setActiveReview] = useState(0);

  const currentReview = TESTIMONIAL_SLIDES[activeReview];

  const changeReview = (direction: number) => {
    setActiveReview(
      (previous) =>
        (previous + direction + TESTIMONIAL_SLIDES.length) %
        TESTIMONIAL_SLIDES.length
    );
  };

  // ====================================================
  // HOMEPAGE JSX
  // ====================================================

  return (
    <div
      className="relative w-full min-w-0 overflow-x-clip bg-ink-950"
      onPointerMove={onPageMove}
      onPointerLeave={onPageLeave}
    >
      {/* =========================================== */}
      {/* GOLD CURSOR SPOTLIGHT */}
      {/* =========================================== */}

      <div
        ref={torchRef}
        aria-hidden="true"
        className={cn(
          "pointer-events-none fixed z-[90]",
          "hidden md:block",
          "h-[300px] w-[300px]",
          "-translate-x-1/2 -translate-y-1/2",
          "rounded-full opacity-0",
          "transition-opacity duration-200",
          "motion-reduce:hidden"
        )}
        style={{
          background:
            "radial-gradient(circle, rgba(249,215,150,0.20) 0%, rgba(198,163,106,0.10) 26%, rgba(198,163,106,0.035) 48%, transparent 72%)",
          mixBlendMode: "screen",
        }}
      />

      {/* =========================================== */}
      {/* HERO */}
      {/* =========================================== */}

      <section
        ref={heroRef}
        onPointerMove={onHeroMove}
        onPointerLeave={onHeroLeave}
        className="relative isolate overflow-hidden bg-ink-950"
      >
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="bg-dots absolute inset-0 opacity-60" />

          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(540px circle at var(--hx,70%) var(--hy,35%),rgba(198,163,106,0.12),transparent 68%)",
            }}
          />

          <WsMark
            tone="monoIvory"
            className="absolute -right-[12%] top-[4%] h-[40rem] w-[40rem] opacity-[0.025]"
          />

          <div className="absolute right-[5%] top-[12%] h-80 w-80 rounded-full bg-gold/[0.07] blur-[110px]" />
        </div>

        <div
          className={cn(
            WRAP,
            "relative grid items-center",
            "grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]",
            "gap-8 lg:gap-6 xl:gap-8",
            "pt-28 pb-12 sm:pt-28 sm:pb-14",
            "lg:min-h-[620px]",
            "lg:pt-28 lg:pb-14",
            "xl:min-h-[650px]"
          )}
        >
          {/* LEFT HERO */}

          <div className="relative z-10 min-w-0 lg:-mt-6">
           

            <h1
              className={cn(
                "font-display font-bold text-ivory",
                "max-w-[690px]",
                "text-[clamp(2.5rem,4.4vw,4.65rem)]",
                "leading-[1.08]",
                "tracking-[-0.035em]"
              )}
            >
              <Words
                text="Every Great Book Begins With a"
                delay={180}
              />{" "}
              <span className="relative inline-block whitespace-nowrap">
                <Words
                  text="Story."
                  inner="text-sheen italic font-semibold"
                  delay={780}
                />

                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 20"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-2.5 w-full"
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

            <p
              className="rise mt-6 max-w-[550px] text-[14px] leading-[1.8] text-ivory/65 sm:text-[15px]"
              style={rd(520)}
            >
              From the first spark of an idea to
              the final published masterpiece,
              Wordsmith Squad brings your vision
              to life through professional writing,
              editing, publishing, design, and
              marketing services.
            </p>

            <div
              className="rise mt-6 flex flex-wrap items-center gap-3"
              style={rd(660)}
            >
              <Button to="/contact" variant="gold">
                Start Your Book Journey
              </Button>

              <Button to="/services" variant="outline-light">
                Explore Our Services
              </Button>
            </div>

          
{/* INTERNATIONAL REACH */}

<div
  className="rise mt-7 max-w-md"
  style={rd(800)}
>
  <div className="flex items-baseline gap-2">
    <span className="font-display text-[34px] font-semibold leading-none tracking-tight text-gold-light">
      50+
    </span>

    <span className="font-display text-[21px] text-ivory">
      countries
    </span>
  </div>

  <p className="mt-2 max-w-sm text-[12px] leading-relaxed text-ivory/55">
    Supporting authors and bringing stories to readers worldwide.
  </p>

  <div className="mt-4 h-px w-full bg-ivory/10" />

 
</div>

          </div>

          {/* RIGHT HERO BOOKS */}

          <div
            className="rise relative mx-auto w-full max-w-[440px] lg:max-w-[550px]"
            style={rd(380)}
          >
            <div className="relative aspect-[10/10.5]">
              <div
                aria-hidden="true"
                className="absolute inset-[4%] rounded-full border border-gold/15"
              />

              <div
                aria-hidden="true"
                className="absolute inset-[16%] animate-[spin_70s_linear_infinite] rounded-full border border-dashed border-gold/25 motion-reduce:animate-none"
              />

              {heroLeft && (
                <div
                  className="parallax absolute left-0 top-[28%] z-10 w-[36%]"
                  style={depth(0.6)}
                >
                  <Book3D
                    book={heroLeft}
                    ry={20}
                    float
                    floatDelay="-2.4s"
                    priority
                  />
                </div>
              )}

              {heroMain && (
                <div
                  className="parallax absolute left-[54%] top-[20%] z-20 w-[43%] -translate-x-1/2"
                  style={depth(1)}
                >
                  <Book3D book={heroMain} ry={25} float priority />
                </div>
              )}

              {heroRight && (
                <div
                  className="parallax absolute right-0 top-[47%] z-30 w-[34%]"
                  style={depth(1.5)}
                >
                  <Book3D
                    book={heroRight}
                    ry={30}
                    float
                    floatDelay="-4.8s"
                    priority
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================== */}
      {/* MEDIA MARQUEE */}
      {/* =========================================== */}

      <section
        className="marquee relative overflow-hidden border-y border-ivory/10 bg-ink-950 py-5 md:py-7"
        aria-label="Media and publishing names"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-ink-950 to-transparent md:w-28"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-ink-950 to-transparent md:w-28"
        />

        <div
          className="marquee-track"
          style={{ "--md": "65s" } as CSSProperties}
        >
          {[0, 1].map((duplicate) => (
            <div
              key={duplicate}
              className="flex shrink-0 items-center"
              aria-hidden={duplicate === 1}
            >
              {MEDIA_NAMES.map((name, index) => (
                <span
                  key={`${duplicate}-${name}`}
                  className="flex shrink-0 items-center gap-7 whitespace-nowrap pr-7 md:gap-10 md:pr-10"
                >
                  <span
                    className={cn(
                      "font-display text-[29px] font-semibold leading-tight md:text-[45px]",
                      index % 2 === 0
                        ? "text-sheen italic"
                        : "text-outline"
                    )}
                  >
                    {name}
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-base text-gold/60"
                  >
                    ✦
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* =========================================== */}
      {/* TRAILER */}
      {/* =========================================== */}

      <section
        id="trailer"
        className="relative overflow-hidden bg-[#100F0D] py-14 sm:py-16 lg:py-20"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_45%,rgba(198,163,106,0.07),transparent_55%)]"
        />

        <div className="relative mx-auto w-full max-w-[1250px] px-6 sm:px-8 lg:px-12 xl:px-14">
          <div className="mb-8 border-b border-[#C6A36A]/15 pb-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D1AD73]">
              Inside Wordsmith Squad
            </span>
          </div>

          <div className="grid items-center gap-9 md:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <Reveal>
              <div className="max-w-[450px]">
                <h2 className="font-display text-[clamp(2rem,3.1vw,3.25rem)] font-semibold leading-[1.13] tracking-[-0.035em] text-[#F5F0E8]">
                  Where Stories{" "}
                  <span className="italic text-[#D9B980]">
                    Take Shape.
                  </span>
                </h2>

                <p className="mt-5 max-w-[400px] text-[13px] leading-[1.9] text-[#B8AEA1] sm:text-[14px]">
                  Every book begins with a vision.
                  Discover the creative thinking,
                  careful writing, and craftsmanship
                  that bring stories from the first
                  idea to the final page.
                </p>

                <Link
                  to="/contact"
                  className="group mt-7 inline-flex items-center gap-2 border-b border-[#C6A36A]/55 pb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#D9B980]"
                >
                  Start Your Book Journey
                  <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="relative min-w-0">
                <div className="overflow-hidden rounded-[18px] border border-[#C6A36A]/25 bg-black shadow-[0_25px_65px_-30px_rgba(0,0,0,0.9)]">
                  <TrailerPlayer
                    pauseOffscreen
                    className="relative w-full !rounded-none !border-0"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================== */}
      {/* ABOUT */}
      {/* =========================================== */}

      <section className="relative overflow-hidden bg-[#F5F0E8] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1320px] px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid items-center gap-10 md:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            <Reveal>
              <div className="relative mx-auto w-full max-w-[485px] pb-8 pr-8 sm:pb-10 sm:pr-10 md:mx-0">
                <div className="relative overflow-hidden rounded-[17px] bg-[#D9D0C1]">
                  <img
                    src={EDITORIAL.typewriter}
                    alt="Writer working at a vintage typewriter"
                    loading="lazy"
                    className="h-[320px] w-full object-cover sm:h-[375px] lg:h-[410px]"
                  />
                </div>

                <div className="absolute bottom-0 right-0 w-[37%] overflow-hidden rounded-[14px] border-[5px] border-[#F5F0E8] bg-[#332A20] shadow-xl">
                  <img
                    src={EDITORIAL.library}
                    alt="Classic library shelves"
                    loading="lazy"
                    className="aspect-[4/4.5] w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="min-w-0">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#947649]">
                  Welcome to Wordsmith Squad
                </p>

                <h2 className="font-display max-w-[660px] text-[clamp(2rem,3vw,3.35rem)] font-semibold leading-[1.14] tracking-[-0.035em] text-[#24201B]">
                  More Than a Publishing Partner.
                  <span className="mt-1 block italic text-[#A27C43]">
                    Your Creative Squad.
                  </span>
                </h2>

                <div className="mt-5 h-[2px] w-12 bg-[#B7955E]" />

                <p className="mt-5 max-w-[560px] text-[13px] leading-[1.95] text-[#6D665C] sm:text-[14px]">
                  At Wordsmith Squad, we believe
                  every story deserves to be told
                  beautifully. We bring together
                  writing, editing, publishing,
                  design, and marketing expertise
                  to help authors turn their ideas
                  into thoughtfully crafted books.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Aspiring & established authors",
                    "Entrepreneurs & business owners",
                    "Memoirists & life storytellers",
                    "Fiction & nonfiction writers",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#E2D9CB] bg-white/75 px-3 py-2 text-[11px] font-medium text-[#514A41]"
                    >
                      <span className="mr-2 text-[#AD8B52]">
                        ✦
                      </span>
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-7">
                  <Button to="/about" variant="ink">
                    Meet the Squad
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ABOUT STATISTICS */}

          <div className="mt-14 grid grid-cols-2 gap-3 border-t border-[#DDD3C5] pt-8 sm:grid-cols-4 sm:gap-4">
            {[
              { to: 5, pad: 2, suffix: "", label: "Core Disciplines" },
              { to: 50, pad: 0, suffix: "+", label: "Countries Served" },
              {
                to: 100,
                pad: 0,
                suffix: "%",
                label: "Rights Retained by You",
              },
              {
                to: 1,
                pad: 2,
                suffix: "",
                label: "Dedicated Squad per Book",
              },
            ].map((stat, index) => (
              <Reveal key={stat.label} delay={index * 70}>
                <div className="rounded-[14px] border border-[#E5DCCD] bg-white/60 px-3 py-5 text-center sm:px-5">
                  <CountUp
                    to={stat.to}
                    pad={stat.pad}
                    suffix={stat.suffix}
                    className="font-display block text-[27px] font-semibold leading-none text-[#A27C43] sm:text-[32px]"
                  />
                  <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#776E61] sm:text-[10px]">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================== */}
      {/* SERVICES */}
      {/* =========================================== */}

      <section
        id="services"
        className="relative isolate overflow-hidden bg-[#F5F0E8] pb-14 sm:pb-16 lg:pb-20"
      >
        <div className="relative bg-gradient-to-r from-[#D4B782] via-[#C6A36A] to-[#B08A56] px-6 pb-28 pt-12 text-center sm:pb-32 sm:pt-14">
          <div className="relative mx-auto max-w-[650px]">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#49351E]">
              WORDSMITH SQUAD
            </p>

            <h2 className="font-display text-[clamp(2rem,3.3vw,3.25rem)] font-semibold leading-tight text-[#211B15]">
              Our Services
            </h2>

            <p className="mx-auto mt-3 max-w-[510px] text-[13px] leading-relaxed text-[#493A29] sm:text-[14px]">
              Professional writing, editing,
              publishing, design and marketing
              for every stage of your book.
            </p>
          </div>
        </div>

        <div className="relative z-10 mx-auto -mt-20 w-full max-w-[1500px] px-5 sm:-mt-24 sm:px-8 lg:px-10 xl:px-12">
          {/* CAROUSEL CONTROLS */}

          {canSlide && (
            <div className="mb-4 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => scrollToService(serviceIndex - 1)}
                aria-label="Previous service"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C6A36A]/40 bg-white text-[#977142] transition-colors hover:border-[#C6A36A] hover:bg-[#C6A36A] hover:text-[#211B15] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9F793F]"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() => scrollToService(serviceIndex + 1)}
                aria-label="Next service"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C6A36A]/40 bg-white text-[#977142] transition-colors hover:border-[#C6A36A] hover:bg-[#C6A36A] hover:text-[#211B15] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9F793F]"
              >
                →
              </button>
            </div>
          )}

          {/* SERVICE CARDS */}

          <div
            ref={servicesSliderRef}
            onScroll={syncServiceIndex}
            onMouseEnter={() => {
              servicesPausedRef.current = true;
            }}
            onMouseLeave={() => {
              servicesPausedRef.current = false;
            }}
            onFocusCapture={() => {
              servicesPausedRef.current = true;
            }}
            onBlurCapture={(event) => {
              if (
                !event.currentTarget.contains(
                  event.relatedTarget as Node | null
                )
              ) {
                servicesPausedRef.current = false;
              }
            }}
            onTouchStart={() => {
              servicesPausedRef.current = true;
            }}
            onTouchEnd={() => {
              servicesPausedRef.current = false;
            }}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden motion-reduce:scroll-auto"
          >
            {SERVICES.map((service) => {
              const Icon = SERVICE_ICONS[service.id];

              return (
                <Link
                  key={service.id}
                  data-service-card
                  to="/services"
                  state={{ anchor: service.id }}
                  className={cn(
                    "group relative flex shrink-0 snap-start flex-col",
                    "min-h-[270px] w-[85%]",
                    "sm:w-[calc((100%-1rem)/2)]",
                    "lg:w-[calc((100%-3rem)/4)]",
                    "xl:w-[calc((100%-4rem)/5)]",
                    "items-center overflow-hidden",
                    "rounded-[17px] border border-[#E4DBCE]",
                    "bg-[#FFFCF7] px-5 py-7 text-center",
                    "shadow-[0_15px_35px_-22px_rgba(34,25,15,0.3)]",
                    "transition-all duration-500",
                    "hover:-translate-y-1 hover:border-[#C6A36A]",
                    "focus-visible:outline-2 focus-visible:outline-offset-2"
                  )}
                >
                  <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-[#C6A36A] transition-transform duration-500 group-hover:scale-x-100" />

                  <div className="mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#251F19] text-[#D8B87E] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#C6A36A] group-hover:text-[#211B15]">
                    {Icon && <Icon className="h-6 w-6" />}
                  </div>

                  <h3 className="font-display text-[18px] font-semibold leading-[1.3] text-[#25201B]">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 text-[12px] leading-[1.75] text-[#766D61]">
                    {service.short}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#94703F]">
                    Learn More
                    <IconArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>

          {/* SLIDER INDICATORS */}

          {canSlide && (
            <div className="mt-2 flex justify-center gap-2">
              {SERVICES.map((service, index) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => scrollToService(index)}
                  aria-label={`Show ${service.title}`}
                  aria-current={
                    serviceIndex === index ? "true" : undefined
                  }
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    serviceIndex === index
                      ? "w-6 bg-[#A27C43]"
                      : "w-1.5 bg-[#C6A36A]/35"
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* =========================================== */}
      {/* PROCESS — NO EYEBROW OR GOLD DOT */}
      {/* =========================================== */}

      <section className={cn("relative bg-ivory", SECTION)}>
        <div
          className={cn(
            WRAP,
            "grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14"
          )}
        >
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="max-w-[650px]">
              <h2 className="font-display text-[clamp(2.2rem,3.6vw,3.8rem)] font-semibold leading-[1.12] tracking-[-0.035em] text-[#25201B]">
                From First Spark to{" "}
                <em className="italic text-gold-dark">
                  Finished Spine.
                </em>
              </h2>

              <p className="mt-5 max-w-[550px] text-[14px] leading-[1.85] text-[#746B60] sm:text-[15px]">
                A five-step journey tailored to your book,
                with you involved in every important decision.
              </p>
            </div>

            <div className="mt-7">
              <Button to="/contact" variant="ink">
                Start With Step One
              </Button>
            </div>
          </div>

          <ol className="space-y-4 pb-4">
            {PROCESS_STEPS.map((step, index) => {
              const theme =
                index === 4
                  ? "gold"
                  : index % 2 === 0
                    ? "ink"
                    : "paper";

              return (
                <li
                  key={step.num}
                  className="sticky"
                  style={{
                    top: `calc(6rem + ${index * 0.9}rem)`,
                  }}
                >
                  <article
                    className={cn(
                      "relative flex min-h-[245px] flex-col justify-between",
                      "overflow-hidden rounded-2xl p-6 shadow-xl",
                      "md:min-h-[270px] md:p-8",
                      theme === "ink" && "bg-ink text-ivory",
                      theme === "paper" &&
                        "border border-beige bg-paper text-ink",
                      theme === "gold" && "bg-gold text-ink-950"
                    )}
                  >
                    <p className="relative text-[10px] font-semibold uppercase tracking-[0.14em] opacity-70">
                      Phase {step.num}
                    </p>

                    <div className="relative mt-10 max-w-md">
                      <h3 className="font-display text-2xl font-semibold md:text-3xl">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-[13px] leading-[1.8] opacity-70">
                        {step.text}
                      </p>

                      <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.12em] opacity-75">
                        {STEP_TAGS[index]}
                      </p>
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* =========================================== */}
      {/* FEATURED WORK — BADGE REMOVED */}
      {/* =========================================== */}

      <section
        className={cn(
          "relative overflow-hidden bg-ink-950",
          SECTION
        )}
      >
        <div className={WRAP}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-[850px]">
              <h2 className="font-display text-[clamp(2.2rem,3.6vw,3.8rem)] font-semibold leading-[1.12] tracking-[-0.035em] text-ivory">
                A Shelf Worth{" "}
                <em className="text-sheen italic">
                  Staring At.
                </em>
              </h2>

              <p className="mt-5 max-w-[760px] text-[14px] leading-[1.85] text-ivory/60 sm:text-[15px]">
                Concept titles showcasing different
                genres and design styles. Fictional
                samples only.
              </p>
            </div>

            <Button to="/portfolio" variant="outline-light">
              View Full Portfolio
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {featured.map((book, index) => (
              <Reveal key={book.id} delay={index * 100}>
                <button
                  type="button"
                  onClick={() =>
                    navigate("/portfolio", {
                      state: { book: book.id },
                    })
                  }
                  className="group block w-full rounded-2xl border border-ivory/10 bg-ivory/[0.035] px-3 pb-5 pt-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 sm:px-5 sm:pt-9"
                >
                  <Book3D
                    book={book}
                    shadow="dark"
                    ry={26}
                    className="mx-auto max-w-28 sm:max-w-36"
                  />

                  <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.15em] text-gold">
                    {book.genre}
                  </p>

                  <h3 className="font-display mt-2 text-sm font-semibold text-ivory sm:text-base">
                    {book.title}
                  </h3>

                  <p className="mt-1.5 text-[11px] text-ivory/40">
                    {book.author} · Sample title
                  </p>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================== */}
      {/* WHY WORDSMITH SQUAD — PREMIUM REFINED */}
      {/* =========================================== */}

      <section className="relative isolate overflow-hidden bg-[#F5F0E8] py-14 sm:py-16 lg:py-20">
        <div className="relative mx-auto w-full max-w-[1320px] px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid items-stretch gap-5 lg:grid-cols-[0.86fr_1.14fr] lg:gap-6">
            {/* LEFT — DARK FEATURE PANEL */}

            <Reveal className="h-full">
              <div className="group/intro relative flex h-full min-h-[470px] flex-col overflow-hidden rounded-[20px] bg-[#1B1916] p-7 text-[#F5F0E8] sm:p-9 lg:min-h-0">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 overflow-hidden rounded-[20px]"
                >
                  <div className="absolute -right-24 top-10 h-64 w-64 rounded-full bg-[#C6A36A]/[0.09] blur-[90px] transition-transform duration-1000 group-hover/intro:-translate-x-8 motion-reduce:transition-none" />

                  <div className="absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-[#C6A36A]/[0.055] blur-[90px]" />
                </div>

                <div className="relative z-10">
                  <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C6A36A]">
                    The Wordsmith Difference
                  </p>

                  <h2 className="font-display max-w-[460px] text-[clamp(2rem,2.8vw,3.15rem)] font-semibold leading-[1.14] tracking-[-0.035em]">
                    Built Around{" "}
                    <span className="italic text-[#D7B77F]">
                      Your Story.
                    </span>
                  </h2>

                  <div className="mt-6 h-[2px] w-12 bg-[#C6A36A] transition-[width] duration-700 group-hover/intro:w-24 motion-reduce:transition-none" />

                  <p className="mt-5 max-w-[385px] text-[13px] leading-[1.85] text-[#B8B0A5]">
                    Great books deserve more than a
                    standard publishing process.
                    We bring professional expertise,
                    personal attention, and creative
                    collaboration to every author's journey.
                  </p>
                </div>

                {/* CENTER — DECORATIVE BOOK */}

                <div
                  aria-hidden="true"
                  className="relative z-10 my-6 flex min-h-[140px] flex-1 items-center justify-center overflow-hidden"
                >
                  <div className="absolute h-[190px] w-[190px] rounded-full border border-[#C6A36A]/10 sm:h-[210px] sm:w-[210px]" />

                  <div className="absolute h-[145px] w-[145px] rounded-full border border-dashed border-[#C6A36A]/15 sm:h-[160px] sm:w-[160px]" />

                  <div className="relative -rotate-6 transition-transform duration-700 ease-out group-hover/intro:-translate-y-2 group-hover/intro:-rotate-3 motion-reduce:transform-none">
                    <div className="absolute inset-x-4 bottom-[-13px] h-6 rounded-full bg-black/60 blur-xl" />

                    <div className="relative h-[130px] w-[97px] rounded-[3px_10px_10px_3px] border border-[#D2B17A]/45 bg-gradient-to-br from-[#5D4931] via-[#30271D] to-[#17130F] shadow-[10px_12px_25px_rgba(0,0,0,0.45)]">
                      <div className="absolute inset-y-0 left-0 w-[10px] border-r border-[#D2B17A]/20 bg-black/25" />

                      <div className="absolute inset-[10px] left-[17px] rounded-[2px] border border-[#D2B17A]/35" />

                      <div className="absolute inset-x-0 top-[30px] text-center">
                        <span className="font-display text-[24px] italic text-[#D2B17A]">
                          W
                        </span>
                        <span className="font-display ml-[-5px] text-[23px] italic text-[#E5C795]">
                          S
                        </span>
                      </div>

                      <div className="absolute left-[34px] right-[25px] top-[74px] h-px bg-[#D2B17A]/50" />

                      <div className="absolute bottom-[22px] left-[29px] right-[20px] space-y-[4px]">
                        <div className="h-px bg-[#D2B17A]/25" />
                        <div className="mx-2 h-px bg-[#D2B17A]/20" />
                      </div>

                      <div className="absolute inset-y-[5px] -right-[4px] w-[4px] rounded-r-sm bg-[#D2C5A9]" />
                    </div>
                  </div>
                </div>

                {/* BOTTOM BRAND PROMISE */}

                <div className="relative z-10 mt-auto border-t border-white/15 pt-5">
                  <p className="font-display max-w-[410px] text-[15px] italic leading-[1.6] text-[#D8C6AA]">
                    Your voice. Your vision.
                    A book that's truly yours.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* RIGHT — BENEFIT CARDS */}

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:auto-rows-fr lg:gap-4">
              {WHY_US.map((item, index) => {
                const Icon = WHY_ICONS[item.icon];

                return (
                  <Reveal
                    key={item.title}
                    delay={index * 75}
                    className="h-full"
                  >
                    <article className="group/card relative flex h-full min-h-[185px] flex-col overflow-hidden rounded-[16px] border border-[#E3DACE] bg-[#FFFCF8] p-5 transition-[transform,box-shadow,border-color,background-color] duration-500 ease-out hover:-translate-y-1 hover:border-[#C6A36A]/70 hover:bg-white hover:shadow-[0_16px_32px_-23px_rgba(55,37,15,0.36)] motion-reduce:transform-none sm:min-h-[198px] lg:p-6">
                      <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-[#C6A36A] transition-transform duration-500 group-hover/card:scale-x-100" />

                      <div className="mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] border border-[#E7DDCD] bg-[#F3EBDF] text-[#A17D49] transition-all duration-500 group-hover/card:scale-105 group-hover/card:border-[#C6A36A]/45 group-hover/card:bg-[#EBDDCA]">
                        {Icon && (
                          <Icon className="h-[19px] w-[19px]" />
                        )}
                      </div>

                      <h3 className="font-display text-[17px] font-semibold leading-[1.3] tracking-[-0.015em] text-[#29231D] transition-colors duration-300 group-hover/card:text-[#98703D] sm:text-[18px]">
                        {item.title}
                      </h3>

                      <p className="mt-2.5 max-w-[320px] text-[12px] leading-[1.75] text-[#756D62]">
                        {item.text}
                      </p>

                      <div className="mt-auto pt-4">
                        <span className="block h-px w-7 bg-[#C6A36A]/35 transition-[width,background-color] duration-500 group-hover/card:w-14 group-hover/card:bg-[#C6A36A]" />
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================== */}
      {/* PREMIUM ANIMATED TESTIMONIAL CAROUSEL */}
      {/* =========================================== */}

      <section
        id="testimonials"
        aria-labelledby="testimonials-heading"
        className="ws-testimonials relative isolate overflow-hidden bg-[#11100E] py-16 sm:py-20 lg:py-24"
      >
        <style>
          {`
            @keyframes wsTestimonialEnter {
              from {
                opacity: 0;
                transform: translateY(18px);
                filter: blur(5px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
                filter: blur(0);
              }
            }

            @keyframes wsTestimonialGlow {
              0%, 100% {
                opacity: .35;
                transform: translate(0, 0);
              }
              50% {
                opacity: .7;
                transform: translate(-16px, 12px);
              }
            }

            @keyframes wsTestimonialLine {
              from { transform: scaleX(0); }
              to { transform: scaleX(1); }
            }

            .ws-testimonials .ws-slide-enter {
              animation: wsTestimonialEnter .65s
                cubic-bezier(.2,.8,.2,1) both;
            }

            .ws-testimonials .ws-gold-glow {
              animation: wsTestimonialGlow 8s
                ease-in-out infinite;
            }

            .ws-testimonials .ws-progress-active {
              transform-origin: left;
              animation: wsTestimonialLine .55s
                ease-out both;
            }

            @media (prefers-reduced-motion: reduce) {
              .ws-testimonials .ws-slide-enter,
              .ws-testimonials .ws-gold-glow,
              .ws-testimonials .ws-progress-active {
                animation: none !important;
                filter: none !important;
                transform: none !important;
              }
            }
          `}
        </style>

        {/* AMBIENT BACKGROUND */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="ws-gold-glow absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#C6A36A]/10 blur-[120px]" />

          <div className="absolute -bottom-52 -left-40 h-[400px] w-[400px] rounded-full bg-[#C6A36A]/[0.045] blur-[120px]" />
        </div>

        <div className="relative mx-auto w-full max-w-[1320px] px-6 sm:px-8 lg:px-12 xl:px-16">
          {/* HEADING AND NAVIGATION */}

          <Reveal>
            <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:mb-12 md:flex-row md:items-end">
              <div className="max-w-[750px]">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#C6A36A]" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C6A36A]">
                    Author Testimonials
                  </p>
                </div>

                <h2
                  id="testimonials-heading"
                  className="font-display text-[clamp(2.1rem,3.7vw,3.8rem)] font-semibold leading-[1.12] tracking-[-0.035em] text-[#F5F0E8]"
                >
                  Every Voice Has{" "}
                  <span className="italic text-[#D6B77E]">
                    a Story.
                  </span>
                </h2>

                <p className="mt-5 max-w-[590px] text-[13px] leading-[1.9] text-[#AFA69A] sm:text-[14px]">
                  The most meaningful part of publishing
                  is hearing from the people behind the
                  pages. Real author experiences will
                  find their home here.
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-3">
                <span className="mr-2 text-[11px] font-medium tracking-[0.1em] text-[#AFA18D]">
                  {String(activeReview + 1).padStart(2, "0")}
                  <span className="mx-2 text-[#756852]">/</span>
                  {String(TESTIMONIAL_SLIDES.length).padStart(2, "0")}
                </span>

                <button
                  type="button"
                  onClick={() => changeReview(-1)}
                  aria-label="Previous testimonial"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#C6A36A]/35 text-[#D6B77E] transition-all duration-300 hover:-translate-x-1 hover:border-[#C6A36A] hover:bg-[#C6A36A] hover:text-[#17130F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6A36A] motion-reduce:transform-none"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="m14 6-6 6 6 6" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={() => changeReview(1)}
                  aria-label="Next testimonial"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#C6A36A]/35 text-[#D6B77E] transition-all duration-300 hover:translate-x-1 hover:border-[#C6A36A] hover:bg-[#C6A36A] hover:text-[#17130F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6A36A] motion-reduce:transform-none"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="m10 6 6 6-6 6" />
                  </svg>
                </button>
              </div>
            </div>
          </Reveal>

          {/* MAIN TESTIMONIAL PANEL */}

          <Reveal delay={120}>
            <div className="grid overflow-hidden rounded-[22px] border border-[#C6A36A]/25 shadow-[0_25px_75px_-35px_rgba(0,0,0,0.65)] lg:grid-cols-[1.4fr_0.6fr]">
              {/* LEFT — FEATURED REVIEW */}

              <div className="relative flex min-h-[400px] flex-col justify-between overflow-hidden bg-[#F0E9DE] p-7 sm:min-h-[445px] sm:p-10 lg:p-12">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 overflow-hidden"
                >
                  <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[#C6A36A]/15" />
                  <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#C6A36A]/10" />
                </div>

                <div
                  key={`review-content-${activeReview}`}
                  className="ws-slide-enter relative z-10 flex flex-1 flex-col"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#987447]">
                      {currentReview.category}
                    </p>

                    <svg
                      viewBox="0 0 32 32"
                      fill="currentColor"
                      className="h-8 w-8 text-[#B19160]"
                      aria-hidden="true"
                    >
                      <path d="M13 7C7 10 4 15 4 23h10V13H9c1-2 3-4 6-5L13 7Zm15 0c-6 3-9 8-9 16h10V13h-5c1-2 3-4 6-5L28 7Z" />
                    </svg>
                  </div>

                  <div className="my-10 flex flex-1 flex-col justify-center sm:my-12">
                    <p className="font-display max-w-[730px] text-[clamp(2rem,3.3vw,3.5rem)] font-medium italic leading-[1.23] tracking-[-0.025em] text-[#28231C]">
                      {currentReview.quote}
                    </p>

                    <div className="mt-7 h-px w-14 bg-[#B18B56]" />

                    <p className="mt-6 max-w-[535px] text-[13px] leading-[1.95] text-[#766C5D] sm:text-[14px]">
                      {currentReview.description}
                    </p>
                  </div>

                  {/* AUTHOR IDENTITY */}

                  <div className="flex flex-wrap items-center gap-4 border-t border-[#D7CCBC] pt-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#CBB99D] bg-[#E0D2BD] text-[#977343]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 21a8 8 0 0 1 16 0" />
                      </svg>
                    </div>

                    <div className="min-w-0">
                      <p className="font-display text-[17px] font-semibold text-[#2A241D]">
                        {currentReview.author}
                      </p>

                      <p className="mt-1 text-[11px] text-[#827464]">
                        {currentReview.role}
                      </p>
                    </div>

                   
                  </div>
                </div>
              </div>

              {/* RIGHT — NAVIGATION AND BRAND PANEL */}

              <div className="relative flex flex-col justify-between overflow-hidden border-t border-[#C6A36A]/20 bg-[#242019] p-7 text-[#F5F0E8] sm:p-9 lg:border-l lg:border-t-0 lg:p-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                >
                  <div className="ws-gold-glow absolute -right-20 top-0 h-64 w-64 rounded-full bg-[#C6A36A]/10 blur-[85px]" />
                  <div className="absolute inset-[16px] rounded-[14px] border border-[#C6A36A]/[0.08]" />
                </div>

                <div className="relative z-10">
                  <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#D1AF78]">
                    Behind Every Book
                  </p>

                  <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-[16px] border border-[#C6A36A]/30 bg-[#C6A36A]/10 text-[#D6B77E] transition-all duration-500 hover:rotate-[-5deg] hover:scale-105">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8"
                      aria-hidden="true"
                    >
                      <path d="M12 7v14" />
                      <path d="M3 18V4.5A1.5 1.5 0 0 1 4.5 3H8a4 4 0 0 1 4 4 4 4 0 0 1 4-4h3.5A1.5 1.5 0 0 1 21 4.5V18" />
                      <path d="M3 18h5a4 4 0 0 1 4 3 4 4 0 0 1 4-3h5" />
                    </svg>
                  </div>

                  <h3 className="font-display max-w-[270px] text-[clamp(1.45rem,2vw,2.1rem)] font-medium italic leading-[1.35] text-[#F2E9D9]">
                    The next chapter is yours to write.
                  </h3>

                  <p className="mt-5 max-w-[290px] text-[12px] leading-[1.9] text-[#ACA091] sm:text-[13px]">
                    Genuine stories, honest reflections,
                    and author experiences — shared
                    in their own words.
                  </p>
                </div>

                {/* CAROUSEL INDICATORS */}

                <div className="relative z-10 mt-12">
                  <p className="mb-4 text-[10px] uppercase tracking-[0.14em] text-[#AA967A]">
                    Explore Author Experiences
                  </p>

                  <div className="flex items-center gap-2">
                    {TESTIMONIAL_SLIDES.map((slide, index) => (
                      <button
                        key={slide.category}
                        type="button"
                        onClick={() => setActiveReview(index)}
                        aria-label={`Show ${slide.category}`}
                        aria-current={
                          activeReview === index ? "true" : undefined
                        }
                        className="group relative h-4 min-w-0 flex-1 py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6B77E]"
                      >
                        <span className="block h-[3px] w-full overflow-hidden rounded-full bg-[#786348]/50">
                          {activeReview === index && (
                            <span
                              key={`progress-${index}`}
                              className="ws-progress-active block h-full w-full rounded-full bg-[#D6B77E]"
                            />
                          )}
                        </span>
                      </button>
                    ))}
                  </div>

                  
                </div>
              </div>
            </div>
          </Reveal>

          {/* FOOTER */}

          
        </div>
      </section>

      {/* FINAL CTA REMOVED */}
    </div>
  );
}
