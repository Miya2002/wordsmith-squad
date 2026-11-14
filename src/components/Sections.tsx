import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/utils/cn";
import { Button, Eyebrow, Reveal, SectionHead } from "./ui";
import { WsMark } from "./Logo";
import { TESTIMONIALS } from "@/lib/data";

const rd = (ms: number) => ({ "--rd": `${ms}ms` }) as CSSProperties;

/* ------------------------------------------------------------------ */
/*  Interior page hero                                                 */
/* ------------------------------------------------------------------ */
export function PageHero({
  eyebrow,
  title,
  text,
  ghost,
  children,
  aside,
  curve = "bg-ivory",
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  ghost?: string;
  children?: ReactNode;
  aside?: ReactNode;
  /** colour of the rounded lip that leads into the next section */
  curve?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 pt-36 pb-28 md:pt-48 md:pb-40">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-dots absolute inset-0" />
        {ghost && (
          <span className="font-display absolute top-6 -right-6 text-[11rem] leading-none font-bold text-ivory/[0.035] italic select-none md:text-[19rem]">
            {ghost}
          </span>
        )}
        <div className="animate-glow absolute top-[-25%] left-[10%] h-140 w-140 rounded-full bg-gold/[0.09] blur-[130px]" />
        <div className="absolute right-[-10%] bottom-[-30%] h-100 w-100 rounded-full bg-gold/[0.05] blur-[120px]" />
      </div>

      <div className={cn("wrap relative grid items-center gap-14", aside && "lg:grid-cols-[1.2fr_0.8fr]")}>
        <div className="min-w-0">
          <div className="rise" style={rd(80)}>
            <Eyebrow tone="light">{eyebrow}</Eyebrow>
          </div>
          <h1
            className="rise font-display mt-8 max-w-4xl text-[clamp(2.6rem,6.2vw,5.4rem)] leading-[1.03] font-bold text-balance text-ivory"
            style={rd(200)}
          >
            {title}
          </h1>
          {text && (
            <p className="rise mt-7 max-w-2xl text-base leading-relaxed text-ivory/60 md:text-lg" style={rd(340)}>
              {text}
            </p>
          )}
          {children && (
            <div className="rise mt-9" style={rd(460)}>
              {children}
            </div>
          )}
        </div>
        {aside && (
          <div className="rise hidden lg:block" style={rd(380)}>
            {aside}
          </div>
        )}
      </div>

      <div
        aria-hidden
        className={cn("absolute inset-x-0 bottom-0 h-10 rounded-t-[2.5rem] md:h-14 md:rounded-t-[3.5rem]", curve)}
      />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Testimonials — clearly-labelled placeholders                       */
/* ------------------------------------------------------------------ */
export function Testimonials() {
  return (
    <section className="round-top relative overflow-hidden bg-ink-900 pt-24 pb-28 md:pt-36 md:pb-40">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="font-display absolute top-10 left-1/2 -translate-x-1/2 text-[24rem] leading-none text-gold/[0.05] italic select-none">
          &ldquo;
        </span>
        <div className="animate-glow absolute bottom-[-30%] left-1/2 h-120 w-180 -translate-x-1/2 rounded-full bg-gold/[0.07] blur-[130px]" />
      </div>
      <div className="wrap relative">
        <SectionHead
          tone="light"
          align="center"
          eyebrow="In Their Words — Soon"
          title={
            <>
              Voices From <em className="text-sheen italic">Future Authors.</em>
            </>
          }
          text="We never borrow praise. These cards are reserved for genuine feedback from real authors about real books we build together."
        />
        <Reveal delay={120} className="mt-8 text-center">
          <span className="inline-block rounded-full border border-gold/35 bg-gold/10 px-5 py-2 text-[0.625rem] font-semibold tracking-[0.22em] text-gold uppercase">
            Placeholder · Reserved for genuine client feedback
          </span>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3 md:items-stretch">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 120} className={i === 1 ? "md:-translate-y-8" : ""}>
              <figure
                className={cn(
                  "spot relative flex h-full flex-col rounded-[2rem] border p-8 md:p-9",
                  i === 1 ? "border-gold/35 bg-gold/[0.07]" : "border-ivory/10 bg-ivory/[0.04]"
                )}
              >
                <span aria-hidden className="font-display text-7xl leading-none text-gold/70">
                  &ldquo;
                </span>
                <blockquote className="font-display -mt-2 flex-1 text-lg leading-relaxed text-ivory/80 italic">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-ivory/10 pt-6">
                  <span className="font-display flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-dashed border-gold/55 text-lg text-gold">
                    ?
                  </span>
                  <span>
                    <span className="font-display block text-base font-semibold text-ivory">{t.name}</span>
                    <span className="mt-0.5 block text-[0.625rem] tracking-[0.18em] text-ivory/45 uppercase">
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Final CTA — champagne-gold statement card                          */
/* ------------------------------------------------------------------ */
export function FinalCTA({
  title,
  text = "Let's turn your idea into something extraordinary.",
  button = "Get Started Today",
}: {
  title?: ReactNode;
  text?: string;
  button?: string;
}) {
  return (
    <section className="round-top relative overflow-hidden bg-ink-950 pt-20 pb-20 md:pt-28 md:pb-28">
      <div className="wrap relative">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gold px-6 py-16 text-center text-ink-950 shadow-[0_50px_120px_-40px_rgba(198,163,106,0.6)] md:rounded-[3.5rem] md:px-16 md:py-28">
            {/* decor */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <WsMark tone="monoInk" className="absolute -right-16 -bottom-24 h-[26rem] w-[26rem] opacity-[0.09] md:h-[34rem] md:w-[34rem]" />
              <div className="absolute top-1/2 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink-950/10" />
              <div className="absolute top-1/2 left-1/2 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink-950/[0.07]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.35),transparent_55%)]" />
            </div>

            <div className="relative">
              <p className="eyebrow inline-flex items-center gap-2.5 rounded-full border border-ink-950/25 bg-ink-950/5 px-4 py-2 text-ink-950/80">
                <span className="h-1.5 w-1.5 rounded-full bg-ink-950" /> Begin
              </p>
              <h2 className="font-display mx-auto mt-8 max-w-4xl text-[clamp(2.4rem,6.6vw,5.4rem)] leading-[1.02] font-bold text-balance">
                {title ?? (
                  <>
                    Your Story Deserves to Be <em className="font-semibold italic">Read.</em>
                  </>
                )}
              </h2>
              <p className="mx-auto mt-7 max-w-xl text-lg text-ink-950/75">{text}</p>
              <div className="mt-11 flex justify-center">
                <Button to="/contact" variant="ink" className="px-9! py-3.5!">
                  {button}
                </Button>
              </div>
              <p className="mt-9 text-[0.6875rem] font-semibold tracking-[0.22em] text-ink-950/60 uppercase">
                Free consultation ✦ Author-first process ✦ Your rights, always
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}