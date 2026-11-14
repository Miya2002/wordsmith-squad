import { useState } from "react";
import { TrailerPlayer } from "@/components/trailer/TrailerPlayer";
import { Button, Eyebrow, Reveal, usePageMeta } from "@/components/ui";
import { IconCheck } from "@/components/Icons";
import { FOOTAGE, SCENES, TOTAL, fmtTime } from "@/lib/trailer";

export default function Trailer() {
  usePageMeta(
    "The Trailer — Wordsmith Squad",
    "Watch the Wordsmith Squad brand trailer: from the first spark of an idea to a finished, published masterpiece."
  );
  const [loop, setLoop] = useState(false);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = url;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const credits = Array.from(new Set(Object.values(FOOTAGE).map((f) => f.credit)));

  return (
    <section className="relative overflow-hidden bg-ink-950 pt-32 pb-24 md:pt-40 md:pb-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-dots absolute inset-0" />
        <div className="animate-glow absolute top-[10%] left-1/2 h-150 w-225 -translate-x-1/2 rounded-full bg-gold/[0.1] blur-[150px]" />
      </div>

      <div className="wrap relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="rise" style={{ "--rd": "60ms" } as React.CSSProperties}>
            <Eyebrow tone="light">Brand Trailer · {fmtTime(TOTAL)}</Eyebrow>
          </div>
          <h1
            className="rise font-display mt-7 text-[clamp(2.4rem,5.6vw,4.6rem)] leading-[1.04] font-bold text-balance text-ivory"
            style={{ "--rd": "180ms" } as React.CSSProperties}
          >
            Every Great Book Begins With a <em className="text-sheen italic">Story.</em>
          </h1>
          <p className="rise mt-6 text-base leading-relaxed text-ivory/60 md:text-lg" style={{ "--rd": "300ms" } as React.CSSProperties}>
            Press play, turn the sound on, and go fullscreen. Cinema mode for the Wordsmith Squad story.
          </p>
        </div>

        <div className="rise relative mx-auto mt-12 max-w-6xl" style={{ "--rd": "420ms" } as React.CSSProperties}>
          <div aria-hidden className="absolute -inset-5 rounded-[3rem] bg-gold/[0.1] blur-3xl" />
          <TrailerPlayer loop={loop} className="relative border border-gold/25 shadow-[0_60px_140px_-50px_rgba(198,163,106,0.5)]" />
        </div>

        {/* toolbar */}
        <Reveal className="mx-auto mt-8 flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setLoop((l) => !l)}
              aria-pressed={loop}
              className={
                "cursor-pointer rounded-full border px-5 py-2.5 text-xs font-semibold tracking-wide transition-all " +
                (loop ? "border-gold bg-gold text-ink-950" : "border-ivory/20 text-ivory/70 hover:border-gold hover:text-gold")
              }
            >
              {loop ? "Loop: on" : "Loop: off"}
            </button>
            <button
              onClick={copy}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-ivory/20 px-5 py-2.5 text-xs font-semibold tracking-wide text-ivory/70 transition-all hover:border-gold hover:text-gold"
            >
              {copied ? (
                <>
                  <IconCheck className="h-3.5 w-3.5" /> Link copied
                </>
              ) : (
                "Copy link to share"
              )}
            </button>
          </div>
          <p className="text-[0.6875rem] tracking-wide text-ivory/35">
            Keys: <kbd className="text-ivory/60">Space</kbd> play · <kbd className="text-ivory/60">M</kbd> sound ·{" "}
            <kbd className="text-ivory/60">F</kbd> fullscreen · <kbd className="text-ivory/60">←→</kbd> seek
          </p>
        </Reveal>

        {/* chapters */}
        <Reveal className="mx-auto mt-14 max-w-6xl">
          <p className="eyebrow text-gold">Chapters</p>
          <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {SCENES.map((s, i) => (
              <li key={s.id} className="rounded-2xl border border-ivory/10 bg-ivory/[0.035] px-4 py-4">
                <span className="font-display text-2xl text-gold/70 italic">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-1 text-sm font-medium text-ivory">{s.label}</p>
                <p className="mt-0.5 text-[0.6875rem] text-ivory/40 tabular-nums">{fmtTime(s.start)}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="mt-14 text-center" delay={100}>
          <Button to="/contact" variant="gold">
            Start Your Book Journey
          </Button>
          <p className="mx-auto mt-8 max-w-xl text-[0.6875rem] leading-relaxed text-ivory/30">
            Footage: Pexels ({credits.join(", ")}). Ambient score, typewriter and sound effects are synthesized live in
            your browser. Book covers are fictional concept designs.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
