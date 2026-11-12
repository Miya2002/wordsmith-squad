import { useState } from "react";
import { PageHero, FinalCTA } from "@/components/Sections";
import { Eyebrow, Reveal, SectionHead, usePageMeta } from "@/components/ui";
import { Logo, WsMark } from "@/components/Logo";
import { IconCheck } from "@/components/Icons";

const PALETTE = [
  { name: "Deep Charcoal", hex: "#171717", role: "Primary ink · backgrounds & type", text: "#F5F0E8" },
  { name: "Warm Ivory", hex: "#F5F0E8", role: "Primary paper · light fields", text: "#171717" },
  { name: "Champagne Gold", hex: "#C6A36A", role: "Signature accent · CTAs & rules", text: "#171717" },
  { name: "Muted Beige", hex: "#D8C8B2", role: "Secondary neutral · borders & quiet fills", text: "#171717" },
  { name: "Soft White", hex: "#FFFFFF", role: "Surfaces · cards & forms", text: "#171717" },
];

const PERSONALITY = ["Professional", "Sophisticated", "Creative", "Trustworthy", "Innovative", "Premium", "Approachable"];

/* Standalone SVG exports of the finalized mark */
const W_PATHS = `<path d='M12 30h9.5L33 78h-8.5Z'/><path d='M33 78 43.4 30H46L35.6 78Z'/><path d='M43.4 30h9.5L64.4 78h-8.5Z'/><path d='M64.4 78 74.8 30h2.6L67 78Z'/><rect x='8.5' y='27.2' width='16.5' height='3'/><rect x='71.4' y='27.2' width='9.5' height='3'/>`;
const S_D = "M56.5 45c-3-5.2-17-5.8-19.2 1.6-2.1 7.4 18.5 5 17.3 14-1.2 8.6-16.4 9-19.2 2.8";
const NIB_D = "M48 9c4.2 5.8 7 11.2 7 15.8 0 4-3.1 6.8-7 6.8s-7-2.8-7-6.8C41 20.2 43.8 14.8 48 9Z";

function markSvg(mode: "dark" | "light" | "transparent") {
  const bg = mode === "dark" ? "#171717" : mode === "light" ? "#F5F0E8" : null;
  const w = mode === "dark" ? "#F5F0E8" : "#171717";
  const gold = "#C6A36A";
  const knockout =
    bg !== null
      ? `<path d='${S_D}' fill='none' stroke='${bg}' stroke-width='10' stroke-linecap='round'/>`
      : "";
  const masked =
    bg === null
      ? `<defs><mask id='m'><rect width='96' height='96' fill='#fff'/><path d='${S_D}' fill='none' stroke='#000' stroke-width='10' stroke-linecap='round'/><circle cx='48' cy='22.6' r='2.1' fill='#000'/><path d='M48 24.7v7.9' stroke='#000' stroke-width='1.6'/></mask></defs>`
      : "";
  const hole =
    bg !== null
      ? `<circle cx='48' cy='22.6' r='2.1' fill='${bg}'/><path d='M48 24.7v7.9' stroke='${bg}' stroke-width='1.6'/>`
      : "";
  return `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 96 96'>${masked}${bg ? `<rect width='96' height='96' rx='14' fill='${bg}'/>` : ""}<g mask='${bg === null ? "url(#m)" : ""}' fill='${w}'>${W_PATHS}<path d='${NIB_D}' fill='${gold}'/></g>${hole}${knockout}<path d='${S_D}' fill='none' stroke='${gold}' stroke-width='5' stroke-linecap='round'/></svg>`;
}

function download(mode: "dark" | "light" | "transparent") {
  const blob = new Blob([markSvg(mode)], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `wordsmith-squad-monogram-${mode}.svg`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export default function Brand() {
  usePageMeta(
    "Brand Identity — Wordsmith Squad",
    "The finalized Wordsmith Squad identity: WS monogram, logo variations, palette and typography."
  );
  const [copied, setCopied] = useState<string | null>(null);
  const [downloaded, setDownloaded] = useState<string | null>(null);

  const copy = async (hex: string) => {
    try {
      await navigator.clipboard.writeText(hex);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = hex;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(hex);
    window.setTimeout(() => setCopied((c) => (c === hex ? null : c)), 1800);
  };

  const dl = (mode: "dark" | "light" | "transparent") => {
    download(mode);
    setDownloaded(mode);
    window.setTimeout(() => setDownloaded((d) => (d === mode ? null : d)), 2000);
  };

  return (
    <>
      <PageHero
        eyebrow="Brand Identity"
        ghost="Mark"
        title={
          <>
            The Wordsmith <em className="text-sheen italic">Identity.</em>
          </>
        }
        aside={
          <div className="glass flex items-center justify-center rounded-[2.5rem] px-10 py-16">
            <Logo variant="stacked" tone="onDark" size="lg" />
          </div>
        }
        text="One mark, one voice, everywhere. The finalized system behind every page, cover and calling card — a Didone W crowned with a gold pen nib, interlaced with a woven S."
      />

      {/* ---------- logo system ---------- */}
      <section className="bg-ivory pt-12 pb-24 md:pt-16 md:pb-32">
        <div className="wrap">
          <SectionHead
            eyebrow="The Logo System"
            title={
              <>
                Four Lockups. <em className="text-gold-dark italic">Zero Ambiguity.</em>
              </>
            }
            text="The monogram's central apex rises into a pen nib — the craft — while the S threads through the W like a signature through a manuscript. Use the horizontal lockup by default; the monogram stands alone where space is tight."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              { label: "Primary · Horizontal — light background", dark: false, variant: "horizontal" as const },
              { label: "Primary · Horizontal — dark background", dark: true, variant: "horizontal" as const },
              { label: "Icon-only WS Monogram — light background", dark: false, variant: "mark" as const },
              { label: "Icon-only WS Monogram — dark background", dark: true, variant: "mark" as const },
            ].map((v, i) => (
              <Reveal key={v.label} delay={i * 90}>
                <figure>
                  <div
                    className={
                      "flex h-64 items-center justify-center rounded-3xl border " +
                      (v.dark ? "border-ink bg-ink" : "border-beige bg-paper")
                    }
                  >
                    {v.variant === "horizontal" ? (
                      <Logo variant="horizontal" tone={v.dark ? "onDark" : "onLight"} size="lg" />
                    ) : (
                      <WsMark tone={v.dark ? "onDark" : "onLight"} className="h-32 w-32" />
                    )}
                  </div>
                  <figcaption className="mt-3 text-[0.625rem] font-semibold tracking-[0.24em] text-ink/50 uppercase">
                    {String(i + 1).padStart(2, "0")} · {v.label}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-beige bg-ivory-deep p-10">
                <Logo variant="stacked" tone="onLight" size="lg" />
                <p className="mt-6 text-[0.625rem] font-semibold tracking-[0.24em] text-ink/50 uppercase">
                  05 · Stacked lockup — social avatars &amp; spines
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full rounded-3xl border border-beige bg-paper p-10">
                <Eyebrow>Usage Notes</Eyebrow>
                <ul className="mt-6 space-y-3.5 text-sm leading-relaxed text-ink/70">
                  <li className="tick-item flex items-baseline">Clear space: keep one nib-height of air on all sides.</li>
                  <li className="tick-item flex items-baseline">Minimum size: 24px monogram, 120px horizontal lockup.</li>
                  <li className="tick-item flex items-baseline">The S is always champagne gold; the W takes ivory or charcoal.</li>
                  <li className="tick-item flex items-baseline">Never stretch, rotate, outline or add effects to the mark.</li>
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  {(["dark", "light", "transparent"] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => dl(m)}
                      className="btn btn-outline-dark cursor-pointer py-3! px-5! text-[0.625rem]"
                    >
                      {downloaded === m ? (
                        <>
                          Saved <IconCheck className="h-3.5 w-3.5" />
                        </>
                      ) : (
                        <>SVG · {m}</>
                      )}
                    </button>
                  ))}
                </div>
                <p aria-live="polite" className="mt-3 min-h-4 text-xs text-gold-dark">
                  {downloaded ? "Monogram exported in its current brand colors." : ""}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- palette ---------- */}
      <section className="bg-paper py-24 md:py-28">
        <div className="wrap">
          <SectionHead
            eyebrow="The Palette"
            title={
              <>
                Ink, Ivory &amp; <em className="text-gold-dark italic">Champagne.</em>
              </>
            }
            text="Charcoal carries the room, ivory gives the words air, and gold is spent sparingly — like foil on a spine. Click any swatch to copy its hex."
          />
          <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
            {PALETTE.map((c, i) => (
              <Reveal key={c.hex} delay={i * 80}>
                <button
                  onClick={() => copy(c.hex)}
                  className="group w-full cursor-pointer overflow-hidden rounded-3xl border border-beige bg-ivory text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-25px_rgba(23,23,23,0.4)]"
                  aria-label={`Copy ${c.name} hex value ${c.hex}`}
                >
                  <div
                    className="flex h-36 items-end justify-between p-4"
                    style={{ background: c.hex, color: c.text, border: c.hex === "#FFFFFF" ? "1px solid #D8C8B2" : "none" }}
                  >
                    <span className="text-[0.625rem] font-semibold tracking-[0.2em] uppercase opacity-70">
                      {copied === c.hex ? "Copied ✓" : "Copy hex"}
                    </span>
                    {copied === c.hex && <IconCheck className="h-4 w-4" />}
                  </div>
                  <div className="p-4">
                    <p className="font-display text-base font-semibold text-ink">{c.name}</p>
                    <p className="mt-0.5 font-mono text-xs text-gold-dark">{c.hex}</p>
                    <p className="mt-2 text-[0.6875rem] leading-relaxed text-ink/55">{c.role}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-8 text-xs text-ink/45" aria-live="polite">
              {copied ? `${copied} copied to clipboard.` : "Pairing rule: charcoal on ivory for body text; gold reserved for accents, rules and calls to action."}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- typography ---------- */}
      <section className="bg-ivory-deep py-24 md:py-28">
        <div className="wrap">
          <SectionHead
            eyebrow="Typography"
            title={
              <>
                A Serif That Speaks, <em className="text-gold-dark italic">a Sans That Works.</em>
              </>
            }
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <article className="h-full rounded-3xl border border-beige bg-paper p-10">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-8xl font-semibold text-ink">Aa</span>
                  <span className="font-display text-5xl text-gold-dark italic">Qq&amp;f</span>
                </div>
                <h3 className="font-display mt-8 text-2xl font-semibold text-ink">Playfair Display</h3>
                <p className="mt-1 text-[0.625rem] font-semibold tracking-[0.24em] text-gold-dark uppercase">
                  Headlines · Titles · Pull quotes
                </p>
                <p className="font-display mt-6 text-xl leading-relaxed text-ink/75 italic">
                  &ldquo;Every great book begins with a story — and a typeface worthy of it.&rdquo;
                </p>
                <p className="mt-6 text-sm text-ink/55">
                  Weights 400–900, with true italics for emphasis. Set large, tracked slightly tight, always given room to breathe.
                </p>
              </article>
            </Reveal>
            <Reveal delay={130}>
              <article className="h-full rounded-3xl border border-beige bg-paper p-10">
                <div className="flex items-baseline justify-between">
                  <span className="text-8xl font-semibold text-ink">Aa</span>
                  <span className="text-5xl font-light text-gold-dark">0123</span>
                </div>
                <h3 className="font-display mt-8 text-2xl font-semibold text-ink">Inter</h3>
                <p className="mt-1 text-[0.625rem] font-semibold tracking-[0.24em] text-gold-dark uppercase">
                  Body · Labels · Interface
                </p>
                <p className="mt-6 text-sm leading-relaxed text-ink/75">
                  The quiet workhorse. Body copy at 15–16px with generous line height; eyebrows and buttons in tracked small caps. Inter never competes with the serif — it carries it.
                </p>
                <div className="mt-6 space-y-2 border-t border-beige pt-6">
                  <p className="eyebrow text-gold-dark">Eyebrow · 11px · 0.38em</p>
                  <p className="font-display text-3xl font-semibold text-ink">Heading · Playfair 600</p>
                  <p className="text-sm text-ink/65">Body · Inter 400 · 1.7 line height</p>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- voice ---------- */}
      <section className="relative overflow-hidden bg-ink-950 py-24 md:py-28">
        <div aria-hidden className="animate-glow pointer-events-none absolute top-1/2 left-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.07] blur-[120px]" />
        <div className="wrap relative text-center">
          <Reveal>
            <Eyebrow tone="light" className="justify-center">Brand Personality</Eyebrow>
            <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-3">
              {PERSONALITY.map((p) => (
                <span key={p} className="rounded-full border border-gold/35 px-5 py-2 text-[0.6875rem] font-semibold tracking-[0.24em] text-gold-light uppercase">
                  {p}
                </span>
              ))}
            </div>
            <p className="font-display mx-auto mt-12 max-w-3xl text-3xl leading-snug text-ivory italic md:text-5xl">
              &ldquo;Your Story. Our Craft. <span className="text-sheen">One Masterpiece.</span>&rdquo;
            </p>
            <p className="mt-6 text-[0.625rem] tracking-[0.35em] text-ivory/40 uppercase">
              The brand tagline · Set in Playfair Display Italic
            </p>
          </Reveal>
        </div>
      </section>

      <FinalCTA
        title={
          <>
            Now Let&rsquo;s Put It <em className="text-sheen italic">On Your Cover.</em>
          </>
        }
      />
    </>
  );
}