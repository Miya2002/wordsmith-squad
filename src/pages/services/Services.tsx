import { useEffect, useState, type CSSProperties } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/utils/cn";
import { PageHero, FinalCTA } from "@/components/Sections";
import { Button, Eyebrow, Reveal, usePageMeta } from "@/components/ui";
import { Book3D } from "@/components/Book3D";
import { WsMark } from "@/components/Logo";
import { SERVICE_ICONS, IconCheck } from "@/components/Icons";
import { BOOKS, SERVICES, type Service } from "@/lib/data";

const TILE_LABELS: Record<string, string> = {
  ghostwriting: "Ghostwriting",
  editing: "Editing",
  publishing: "Publishing",
  design: "Design",
  marketing: "Marketing",
};

const chip =
  "rounded-full border border-gold-dark/35 bg-paper px-4 py-2 text-[0.625rem] font-semibold tracking-[0.16em] text-ink/70 uppercase";

/* Bespoke visual accents for individual services */
function ServiceVisual({ id }: { id: string }) {
  if (id === "ghostwriting")
    return (
      <div className="relative mt-9 rounded-3xl border border-beige bg-paper p-7 shadow-[0_24px_50px_-28px_rgba(23,23,23,0.3)]">
        <p className="text-[0.5625rem] font-semibold tracking-[0.3em] text-ink/40 uppercase">
          Manuscript · Draft III · Voice-matched
        </p>
        <p className="font-display mt-4 text-lg leading-relaxed text-ink/80 italic">
          &ldquo;The harbor smelled of salt and unfinished sentences, and Mara had come to settle both
          <span className="caret" aria-hidden />
        </p>
        <p className="absolute -top-3 right-6 rounded-full bg-gold px-3.5 py-1.5 text-[0.5625rem] font-semibold tracking-[0.2em] text-ink-950 uppercase">
          Your voice, our pen
        </p>
      </div>
    );
  if (id === "editing")
    return (
      <div className="mt-9 rounded-3xl border border-beige bg-paper p-7 shadow-[0_24px_50px_-28px_rgba(23,23,23,0.3)]">
        <p className="text-[0.5625rem] font-semibold tracking-[0.3em] text-ink/40 uppercase">Line edit · Before / After</p>
        <p className="font-display mt-4 text-lg leading-relaxed text-ink/45">
          <del className="decoration-danger/70">She walked slowly and in a tired manner toward the door of the house.</del>
        </p>
        <p className="font-display mt-3 text-lg leading-relaxed text-ink/85">
          <span className="border-b-2 border-gold">She dragged her dusk toward the door.</span>
        </p>
      </div>
    );
  if (id === "publishing")
    return (
      <div className="mt-9 flex flex-wrap gap-2.5">
        {["Print PDF", "EPUB", "ISBN guidance", "Metadata", "KDP setup", "IngramSpark", "Proof review"].map((f) => (
          <span key={f} className={chip}>
            {f}
          </span>
        ))}
      </div>
    );
  if (id === "design") {
    const a = BOOKS.find((b) => b.id === "vellum")!;
    const b = BOOKS.find((b) => b.id === "meridian")!;
    return (
      <div className="mt-12 flex items-end justify-center gap-8 pr-4">
        <Book3D book={a} ry={22} shadow="light" className="w-32 sm:w-36" />
        <Book3D book={b} ry={28} shadow="light" className="w-32 sm:w-36" />
      </div>
    );
  }
  return (
    <div className="mt-9 flex flex-wrap gap-2.5">
      {["Author brand kit", "Launch calendar", "Amazon listing", "Social kit", "Press release", "Ad creatives"].map((f) => (
        <span key={f} className={chip}>
          {f}
        </span>
      ))}
    </div>
  );
}

function ServiceSection({ service, index }: { service: Service; index: number }) {
  const Icon = SERVICE_ICONS[service.id];
  const flip = index % 2 === 1;
  return (
    <section id={service.id} className={cn("scroll-mt-36 py-20 md:py-28", flip ? "bg-ivory-deep" : "bg-ivory")}>
      <div className="wrap grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        {/* narrative */}
        <div className={cn(flip && "lg:order-2")}>
          <Reveal>
            <div className="flex items-center gap-5">
              <span
                className="font-display text-outline text-7xl font-semibold italic md:text-8xl"
                style={{ "--so": "rgba(140,107,45,0.45)" } as CSSProperties}
              >
                {service.num}
              </span>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ink text-gold">
                <Icon className="h-8 w-8" />
              </div>
            </div>
            <h2 className="font-display mt-7 text-4xl font-semibold text-ink md:text-5xl">{service.title}</h2>
            <p className="font-display mt-3 text-2xl text-gold-dark italic">{service.tagline}</p>
            <p className="mt-7 text-lg leading-relaxed text-ink/75">{service.intro}</p>
            <p className="mt-4 leading-relaxed text-ink/65">{service.detail}</p>
            <ServiceVisual id={service.id} />
            <div className="mt-10">
              <Button to="/contact" state={{ service: service.title }} variant="ink">
                Inquire About {service.id === "design" ? "Design" : service.title.split(" ")[0]}
              </Button>
            </div>
          </Reveal>
        </div>

        {/* benefits + deliverables */}
        <div className={cn("space-y-5", flip && "lg:order-1")}>
          <Reveal delay={120}>
            <div className="spot relative overflow-hidden rounded-[2rem] bg-ink p-8 md:p-10">
              <WsMark tone="monoIvory" className="absolute -right-6 -bottom-8 h-40 w-40 opacity-[0.05]" />
              <Eyebrow tone="light">Why It Matters</Eyebrow>
              <ul className="relative mt-7 space-y-4">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-ivory/75">
                    <span className="mt-1 text-[0.6rem] text-gold">✦</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={220}>
            <div className="rounded-[2rem] border border-beige bg-paper p-8 md:p-10">
              <Eyebrow>What You Receive</Eyebrow>
              <ul className="mt-7 space-y-3.5">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3.5 text-sm leading-relaxed text-ink/75">
                    <span className="mt-0.5 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold-dark">
                      <IconCheck className="h-3 w-3" />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  usePageMeta(
    "Services — Wordsmith Squad",
    "Ghostwriting, editing & proofreading, book publishing, cover & interior design, and book marketing — benefits, deliverables and inquiry options."
  );
  const location = useLocation();
  const [active, setActive] = useState(SERVICES[0].id);

  useEffect(() => {
    const anchor = (location.state as { anchor?: string } | null)?.anchor;
    if (anchor) {
      const t = window.setTimeout(() => {
        document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
      return () => window.clearTimeout(t);
    }
  }, [location.state]);

  /* highlight the tab for the section currently in view */
  useEffect(() => {
    const onScroll = () => {
      let current = SERVICES[0].id;
      for (const s of SERVICES) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 220) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const jump = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        ghost="Craft"
        title={
          <>
            The Craft, <em className="text-sheen italic">In Detail.</em>
          </>
        }
        text="Five disciplines, one standard. Explore what each service includes, what you receive, and how it moves your book closer to a reader's hands."
        aside={
          <div className="grid grid-cols-3 gap-4">
            {SERVICES.map((s, i) => {
              const Icon = SERVICE_ICONS[s.id];
              return (
                <button
                  key={s.id}
                  onClick={() => jump(s.id)}
                  className={cn(
                    "spot group flex aspect-square cursor-pointer flex-col items-center justify-center gap-3 rounded-3xl border border-ivory/10 bg-ivory/[0.04] p-3 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40",
                    i % 3 === 1 && "translate-y-6 hover:translate-y-4.5"
                  )}
                >
                  <Icon className="h-8 w-8 text-gold transition-transform duration-500 group-hover:scale-110" />
                  <span className="text-[0.625rem] leading-tight font-semibold tracking-[0.12em] text-ivory/70 uppercase">
                    {TILE_LABELS[s.id]}
                  </span>
                </button>
              );
            })}
            <div className="flex aspect-square items-center justify-center rounded-3xl bg-gold">
              <WsMark tone="monoInk" className="h-14 w-14" />
            </div>
          </div>
        }
      />

      {/* sticky section tabs */}
      <div className="sticky top-[4.6rem] z-30 border-b border-beige/70 bg-ivory shadow-[0_12px_30px_-24px_rgba(23,23,23,0.4)] sm:top-[5.1rem]">
        <div className="wrap">
          <div className="-mx-1 flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]" role="tablist" aria-label="Services">
            {SERVICES.map((s) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={active === s.id}
                onClick={() => jump(s.id)}
                className={cn(
                  "shrink-0 cursor-pointer rounded-full border px-5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-300",
                  active === s.id
                    ? "border-ink bg-ink text-gold"
                    : "border-ink/15 text-ink/60 hover:border-gold-dark hover:text-gold-dark"
                )}
              >
                <span className="mr-2 opacity-60">{s.num}</span>
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {SERVICES.map((s, i) => (
        <ServiceSection key={s.id} service={s} index={i} />
      ))}

      {/* full package band */}
      <section className="bg-ivory-deep pt-4 pb-28 md:pb-36">
        <div className="wrap">
          <Reveal>
            <div className="relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[2.5rem] bg-ink p-10 text-center md:flex-row md:p-14 md:text-left">
              <WsMark tone="monoIvory" className="absolute -top-10 -right-10 h-56 w-56 opacity-[0.05]" />
              <div className="relative">
                <p className="eyebrow text-gold">Better together</p>
                <h2 className="font-display mt-3 max-w-xl text-3xl leading-tight font-semibold text-ivory md:text-4xl">
                  The Full Journey — <em className="text-sheen italic">idea to launch,</em> one squad, one plan.
                </h2>
              </div>
              <Button to="/contact" state={{ service: "Full Package — Idea to Launch" }} variant="gold" className="relative shrink-0">
                Plan My Full Package
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA
        title={
          <>
            Choose Your Craft. <em className="font-semibold italic">We&rsquo;ll Bring the Rest.</em>
          </>
        }
        button="Get a Free Consultation"
      />
    </>
  );
}