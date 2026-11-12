import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/utils/cn";
import { Book3D } from "@/components/Book3D";
import { WsMark } from "@/components/Logo";
import {
  IconArrowRight,
  IconDesign,
  IconEdit,
  IconMarketing,
  IconPublish,
  IconQuill,
} from "@/components/Icons";
import { BOOKS, PROCESS_STEPS } from "@/lib/data";
import { FOOTAGE, OVERLAP, SCENES, T } from "@/lib/trailer";

/* ------------------------------------------------------------------ */
/*  Timeline primitives                                                */
/*  NB: every `.tl` element sets --at / --ad / --ae explicitly, because */
/*  custom properties inherit and would otherwise leak to children.     */
/* ------------------------------------------------------------------ */
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const A = (at = 0, ad = 900, ae = EASE, extra?: CSSProperties) =>
  ({ "--at": at, "--ad": `${ad}ms`, "--ae": ae, ...extra }) as CSSProperties;

type Kind = "fade" | "rise" | "scale" | "grow" | "track" | "out" | "ken" | "ring" | "drift" | "dot";

function Tl({
  k,
  at,
  ad,
  ae,
  className,
  style,
  children,
  as: Tag = "div",
}: {
  k: Kind;
  at?: number;
  ad?: number;
  ae?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  as?: "div" | "span";
}) {
  return (
    <Tag className={cn("tl", `tl-${k}`, className)} style={A(at, ad, ae, style)}>
      {children}
    </Tag>
  );
}

/** Words that rise out of a mask, one after another */
function Rise({
  text,
  at,
  step = 90,
  ad = 1000,
  accent = [],
  className,
}: {
  text: string;
  at: number;
  step?: number;
  ad?: number;
  accent?: string[];
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span key={i}>
          <span
            className="inline-block overflow-hidden align-bottom"
            style={{ paddingBottom: "0.3em", marginBottom: "-0.3em", paddingRight: "0.06em" }}
          >
            <span
              className={cn("tl tl-word inline-block", accent.includes(w) && "text-gold italic")}
              style={A(at + i * step, ad)}
            >
              {w}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </span>
  );
}

/** Typewriter text — one timed span per character (timing mirrors the audio cues) */
function Typed({
  text,
  at,
  step,
  accent = [],
  className,
}: {
  text: string;
  at: number;
  step: number;
  accent?: string[];
  className?: string;
}) {
  let n = 0;
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((w, wi) => {
        const chars = [...w].map((c) => {
          const idx = n++;
          return (
            <span key={idx} className="tl tl-fade" style={A(at + idx * step, 70, "linear")}>
              {c}
            </span>
          );
        });
        n++; // the space after the word
        return (
          <span key={wi}>
            <span className={cn("whitespace-nowrap", accent.includes(w) && "text-gold italic")}>{chars}</span>
            {wi < words.length - 1 ? " " : null}
          </span>
        );
      })}
    </span>
  );
}

const Vignette = () => (
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0"
    style={{ background: "radial-gradient(ellipse at center, transparent 38%, rgba(5,4,3,0.7) 100%)" }}
  />
);

/* ------------------------------------------------------------------ */
/*  Footage layer: poster image underneath, graded video on top        */
/* ------------------------------------------------------------------ */
function Media({
  clip,
  dur,
  armed,
  active,
  playing,
  tint,
  pan = [0, 0, 0, 0],
}: {
  clip: { src: string; poster: string };
  dur: number;
  armed: boolean;
  active: boolean;
  playing: boolean;
  tint: string;
  pan?: [number, number, number, number];
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    if (active && playing) v.play().catch(() => {});
    else v.pause();
  }, [active, playing, armed, ready]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-ink-950">
      <Tl
        k="ken"
        at={0}
        ad={dur + OVERLAP}
        ae="linear"
        className="absolute inset-0"
        style={
          {
            "--kx0": `${pan[0]}%`,
            "--ky0": `${pan[1]}%`,
            "--kx1": `${pan[2]}%`,
            "--ky1": `${pan[3]}%`,
          } as CSSProperties
        }
      >
        <div className="absolute inset-0" style={{ filter: "sepia(0.28) saturate(0.82) contrast(1.06) brightness(0.9)" }}>
          <img src={clip.poster} alt="" draggable={false} className="absolute inset-0 h-full w-full object-cover" />
          {armed && !failed && (
            <video
              ref={ref}
              src={clip.src}
              loop
              muted
              playsInline
              preload="auto"
              onLoadedData={() => setReady(true)}
              onError={() => setFailed(true)}
              className={cn(
                "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
                ready ? "opacity-100" : "opacity-0"
              )}
            />
          )}
        </div>
      </Tl>
      <div className="absolute inset-0" style={{ background: tint }} />
    </div>
  );
}

type MediaProps = { armed: boolean; active: boolean; playing: boolean };

/* ------------------------------------------------------------------ */
/*  Scene 0 — Prologue                                                 */
/* ------------------------------------------------------------------ */
function Scene0({ poster, ...m }: MediaProps & { poster?: boolean }) {
  return (
    <>
      <Media
        clip={FOOTAGE.typing}
        dur={SCENES[0].dur}
        tint="linear-gradient(180deg, rgba(13,12,10,0.8), rgba(13,12,10,0.38) 45%, rgba(13,12,10,0.86))"
        pan={[0, 0, -2, -1]}
        {...m}
      />
      <Vignette />
      {!poster && (
      <div className="absolute inset-0 flex flex-col items-center justify-center px-[9cqw] text-center">
        <Tl
          k="track"
          at={T.s0.eyebrow}
          ad={1500}
          className="font-body font-semibold text-gold uppercase"
          style={{ "--ls": "0.4em", fontSize: "max(7px, 1.1cqw)" } as CSSProperties}
        >
          Wordsmith Squad presents
        </Tl>
        <h2
          className="font-display mt-[2.6cqw] leading-[1.1] font-bold text-ivory"
          style={{ fontSize: "max(19px, 5.5cqw)" }}
        >
          <Typed text={T.s0.text} at={T.s0.type} step={T.s0.step} accent={["story."]} />
        </h2>
        <Tl k="grow" at={T.s0.rule} ad={1100} className="mt-[2.8cqw] h-px w-[14cqw] bg-gold" />
      </div>
      )}
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Scene 1 — The spark                                                */
/* ------------------------------------------------------------------ */
function Scene1(m: MediaProps) {
  return (
    <>
      <Media
        clip={FOOTAGE.pages}
        dur={SCENES[1].dur}
        tint="linear-gradient(180deg, rgba(13,12,10,0.74), rgba(13,12,10,0.52) 50%, rgba(13,12,10,0.8))"
        pan={[2, 0, -2, 0]}
        {...m}
      />
      <Vignette />
      <div className="absolute inset-0 flex items-center justify-center px-[8cqw] text-center">
        <Tl k="out" at={T.s1.aOut} ad={500} ae="ease-in">
          <h2 className="font-display leading-[1.05] font-bold text-ivory" style={{ fontSize: "max(22px, 7.4cqw)" }}>
            <Rise text="Ideas are everywhere." at={T.s1.a} />
          </h2>
        </Tl>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center px-[8cqw] text-center">
        <h2 className="font-display leading-[1.05] font-bold text-ivory" style={{ fontSize: "max(22px, 7.4cqw)" }}>
          <Rise text="Finished books are not." at={T.s1.b} accent={["not."]} />
        </h2>
        <Tl
          k="rise"
          at={T.s1.tag}
          ad={900}
          className="font-body mt-[2.6cqw] font-semibold text-gold uppercase"
          style={{ fontSize: "max(7px, 1.15cqw)", letterSpacing: "0.34em" }}
        >
          That&rsquo;s where we come in
        </Tl>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Scene 2 — The five crafts                                          */
/* ------------------------------------------------------------------ */
const CRAFTS = [
  { word: "Write", sub: "Ghostwriting by experienced writers", Icon: IconQuill },
  { word: "Edit", sub: "Editing, proofreading & editorial guidance", Icon: IconEdit },
  { word: "Design", sub: "Covers, interiors & custom illustration", Icon: IconDesign },
  { word: "Publish", sub: "Formatting, ISBN guidance & distribution", Icon: IconPublish },
  { word: "Promote", sub: "Author branding & book marketing", Icon: IconMarketing },
];

function Scene2(m: MediaProps) {
  return (
    <>
      <Media
        clip={FOOTAGE.ribbon}
        dur={SCENES[2].dur}
        tint="radial-gradient(ellipse at center, rgba(13,12,10,0.66), rgba(13,12,10,0.9) 85%)"
        pan={[0, 1, 0, -1]}
        {...m}
      />
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 h-[46cqw] w-[46cqw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.1] blur-[7cqw]"
      />
      <Vignette />

      <Tl
        k="fade"
        at={100}
        ad={800}
        className="font-body absolute top-[6.2cqw] inset-x-0 text-center font-semibold text-ivory/45 uppercase"
        style={{ fontSize: "max(7px, 1cqw)", letterSpacing: "0.36em" }}
      >
        Five crafts · One squad
      </Tl>

      {CRAFTS.map(({ word, sub, Icon }, i) => {
        const a = T.s2.first + i * T.s2.beat;
        const last = i === CRAFTS.length - 1;
        const inner = (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <Tl
              k="rise"
              at={a}
              ad={700}
              className="font-body font-semibold text-gold"
              style={{ fontSize: "max(7px, 1.1cqw)", letterSpacing: "0.34em" }}
            >
              0{i + 1} / 05
            </Tl>
            <Tl
              k="scale"
              at={a + 80}
              ad={800}
              className="mt-[1.5cqw] flex items-center justify-center rounded-full border border-gold/50 bg-gold/10 text-gold"
              style={{ width: "max(30px, 6.2cqw)", height: "max(30px, 6.2cqw)" }}
            >
              <Icon className="h-[52%] w-[52%]" />
            </Tl>
            <h2
              className="font-display mt-[1.2cqw] flex items-baseline leading-none font-bold text-ivory"
              style={{ fontSize: "max(34px, 13.5cqw)" }}
            >
              <Rise text={word} at={a + 140} />
              <Tl as="span" k="fade" at={a + 520} ad={400} className="text-gold">
                .
              </Tl>
            </h2>
            <Tl
              k="rise"
              at={a + 420}
              ad={700}
              className="font-body mt-[1.8cqw] text-ivory/75"
              style={{ fontSize: "max(9px, 1.75cqw)", letterSpacing: "0.03em" }}
            >
              {sub}
            </Tl>
          </div>
        );
        return last ? (
          <div key={word} className="absolute inset-0">
            {inner}
          </div>
        ) : (
          <Tl key={word} k="out" at={a + 950} ad={500} ae="ease-in" className="absolute inset-0">
            {inner}
          </Tl>
        );
      })}

      <div className="absolute inset-x-0 bottom-[7.5cqw] flex justify-center gap-[1.4cqw]">
        {CRAFTS.map((c, i) => (
          <Tl
            key={c.word}
            as="span"
            k="dot"
            at={T.s2.first + i * T.s2.beat}
            ad={500}
            ae="ease-out"
            className="block rounded-full"
            style={{ width: "max(5px, 0.8cqw)", height: "max(5px, 0.8cqw)" }}
          />
        ))}
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Scene 3 — The books                                                */
/* ------------------------------------------------------------------ */
const PARADE = [
  { id: "salt", w: 12.5, ry: 32 },
  { id: "cartographer", w: 14.2, ry: 24 },
  { id: "ember", w: 17.5, ry: 16 },
  { id: "letters", w: 14.2, ry: -24 },
  { id: "empire", w: 12.5, ry: -32 },
];

function Scene3() {
  return (
    <>
      <div className="absolute inset-0 bg-ink-950" />
      <div className="bg-dots absolute inset-0 opacity-70" aria-hidden />
      <div
        aria-hidden
        className="absolute top-[28%] left-1/2 h-[62cqw] w-[62cqw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.16] blur-[9cqw]"
      />
      <Vignette />

      <Tl
        k="fade"
        at={T.s3.chips}
        ad={900}
        className="font-body absolute top-[6.2cqw] inset-x-0 text-center font-semibold text-gold/85 uppercase"
        style={{ fontSize: "max(6px, 0.95cqw)", letterSpacing: "0.3em" }}
      >
        Fiction ✦ Memoir ✦ Business ✦ Fantasy ✦ Romance ✦ Self-Help
      </Tl>

      <Tl
        k="drift"
        at={0}
        ad={SCENES[3].dur + OVERLAP}
        ae="linear"
        className="absolute inset-x-0 top-[10.5cqw] flex items-center justify-center gap-[3.4cqw]"
      >
        {PARADE.map((p, i) => {
          const book = BOOKS.find((b) => b.id === p.id)!;
          return (
            <Tl key={p.id} k="rise" at={T.s3.book0 + i * T.s3.bookStep} ad={1000} style={{ width: `${p.w}cqw` }}>
              <Book3D book={book} ry={p.ry} hover={false} tilt={false} shadow="dark" priority />
            </Tl>
          );
        })}
      </Tl>

      <div className="absolute inset-x-0 bottom-[8.4cqw] flex flex-col items-center text-center">
        <h2 className="font-display leading-[1.08] font-bold text-ivory" style={{ fontSize: "max(19px, 5.4cqw)" }}>
          <Rise text="From idea to masterpiece." at={T.s3.head} accent={["masterpiece."]} />
        </h2>
        <Tl
          k="rise"
          at={T.s3.sub}
          ad={800}
          className="font-body mt-[1.3cqw] font-semibold text-ivory/60 uppercase"
          style={{ fontSize: "max(7px, 1.05cqw)", letterSpacing: "0.34em" }}
        >
          Designed · Published · Celebrated
        </Tl>
      </div>
      <Tl
        k="fade"
        at={T.s3.sub}
        ad={800}
        className="font-body absolute inset-x-0 bottom-[3.9cqw] text-center text-ivory/30 uppercase"
        style={{ fontSize: "max(5px, 0.78cqw)", letterSpacing: "0.26em" }}
      >
        Concept covers · illustrative only
      </Tl>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Scene 4 — The process                                              */
/* ------------------------------------------------------------------ */
const STEP_TAGS = ["Vision brief", "Outline & draft", "Edit & polish", "Cover & publish", "Launch & grow"];

function Scene4() {
  return (
    <>
      <div className="absolute inset-0 bg-ink-950" />
      <div className="bg-dots absolute inset-0 opacity-60" aria-hidden />
      <div
        aria-hidden
        className="absolute top-[60%] left-1/2 h-[50cqw] w-[70cqw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.09] blur-[8cqw]"
      />
      <Vignette />

      <div className="absolute inset-x-0 top-[8.5cqw] text-center">
        <h2 className="font-display leading-[1.08] font-bold text-ivory" style={{ fontSize: "max(19px, 5.4cqw)" }}>
          <Rise text="One squad. Five steps." at={T.s4.head} accent={["steps."]} />
        </h2>
      </div>

      <div className="absolute top-[31cqw] right-[10%] left-[10%]">
        <div className="h-px w-full bg-ivory/15" />
        <Tl
          k="grow"
          at={T.s4.line}
          ad={T.s4.lineDur}
          ae="cubic-bezier(0.45, 0, 0.25, 1)"
          className="absolute top-0 left-0 h-px w-full origin-left bg-gold"
        />
        {PROCESS_STEPS.map((s, i) => (
          <div key={s.num} className="absolute top-0" style={{ left: `${i * 25}%` }}>
            <Tl
              k="dot"
              as="span"
              at={T.s4.node0 + i * T.s4.nodeStep}
              ad={600}
              ae="ease-out"
              className="absolute top-0 left-0 block -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ width: "max(6px, 1.3cqw)", height: "max(6px, 1.3cqw)" }}
            />
            <div className="absolute bottom-[1.8cqw] left-0 -translate-x-1/2">
              <Tl
                k="rise"
                at={T.s4.node0 + i * T.s4.nodeStep}
                ad={800}
                className="font-display text-outline font-bold italic"
                style={{ fontSize: "max(18px, 5.2cqw)", "--so": "rgba(198,163,106,0.8)" } as CSSProperties}
              >
                {s.num}
              </Tl>
            </div>
            <div className="absolute top-[2.4cqw] left-0 w-[17cqw] -translate-x-1/2 text-center">
              <Tl k="rise" at={T.s4.node0 + i * T.s4.nodeStep + 120} ad={800}>
                <p className="font-display leading-tight font-semibold text-ivory" style={{ fontSize: "max(9px, 1.9cqw)" }}>
                  {s.title}
                </p>
                <p
                  className="font-body mt-[0.6cqw] hidden text-ivory/45 uppercase @lg:block"
                  style={{ fontSize: "max(6px, 0.85cqw)", letterSpacing: "0.22em" }}
                >
                  {STEP_TAGS[i]}
                </p>
              </Tl>
            </div>
          </div>
        ))}
      </div>

      <Tl
        k="rise"
        at={T.s4.closing}
        ad={900}
        className="font-display absolute inset-x-0 bottom-[8.5cqw] text-center text-gold italic"
        style={{ fontSize: "max(11px, 2.7cqw)" }}
      >
        Your voice. Your rights. Always.
      </Tl>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Scene 5 — Logo reveal & call to action                             */
/* ------------------------------------------------------------------ */
function Scene5({ onCta }: { onCta?: () => void }) {
  const navigate = useNavigate();
  const go = () => {
    onCta?.();
    navigate("/contact");
  };
  return (
    <>
      <div className="absolute inset-0 bg-ink-950" />
      <div className="bg-dots absolute inset-0 opacity-60" aria-hidden />
      <div
        aria-hidden
        className="absolute top-[40%] left-1/2 h-[56cqw] w-[56cqw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.15] blur-[9cqw]"
      />
      <Vignette />

      <div className="absolute inset-0 flex flex-col items-center justify-center pt-[1.4cqw]">
        {/* mark + expanding rings */}
        <div className="relative flex items-center justify-center" style={{ width: "13cqw", height: "13cqw" }}>
          {[22, 34, 48].map((d, i) => (
            <div key={d} aria-hidden className="absolute inset-0 flex items-center justify-center">
              <Tl
                k="ring"
                at={T.s5.ring + i * 350}
                ad={2600}
                ae="ease-out"
                className="rounded-full border border-gold/45"
                style={{ width: `${d}cqw`, height: `${d}cqw` }}
              />
            </div>
          ))}
          <Tl k="scale" at={T.s5.mark} ad={1200} className="relative h-full w-full">
            <WsMark tone="onDark" className="h-full w-full" />
          </Tl>
        </div>

        <Tl
          k="track"
          at={T.s5.word}
          ad={1500}
          className="font-display mt-[1.8cqw] leading-none font-semibold text-ivory"
          style={{ "--ls": "0.14em", fontSize: "max(18px, 5cqw)" } as CSSProperties}
        >
          WORDSMITH
        </Tl>
        <Tl
          k="track"
          at={T.s5.squad}
          ad={1500}
          className="font-body mt-[1cqw] leading-none font-semibold text-gold"
          style={{ "--ls": "0.62em", fontSize: "max(8px, 1.6cqw)" } as CSSProperties}
        >
          SQUAD
        </Tl>

        <p
          className="font-display mt-[2.6cqw] text-ivory/90 italic"
          style={{ fontSize: "max(10px, 2.65cqw)" }}
        >
          <Typed text={T.s5.text} at={T.s5.type} step={T.s5.step} />
        </p>

        <Tl k="rise" at={T.s5.cta} ad={900} className="mt-[2.6cqw]">
          <a
            href="#/contact"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              go();
            }}
            className="font-body inline-flex items-center rounded-full bg-gold font-semibold text-ink-950 transition-colors hover:bg-gold-light"
            style={{
              fontSize: "max(9px, 1.5cqw)",
              gap: "max(8px, 1.2cqw)",
              padding: "max(3px, 0.45cqw) max(3px, 0.45cqw) max(3px, 0.45cqw) max(12px, 2cqw)",
            }}
          >
            Start Your Book Journey
            <span
              className="flex items-center justify-center rounded-full bg-ink-950/15"
              style={{ width: "max(20px, 3.2cqw)", height: "max(20px, 3.2cqw)" }}
            >
              <IconArrowRight className="h-[52%] w-[52%]" />
            </span>
          </a>
        </Tl>
        <Tl
          k="fade"
          at={T.s5.fine}
          ad={900}
          className="font-body mt-[1.8cqw] font-semibold text-ivory/45 uppercase"
          style={{ fontSize: "max(6px, 0.95cqw)", letterSpacing: "0.26em" }}
        >
          Free consultation ✦ US · UK · Canada · Australia
        </Tl>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Scene wrapper: cross-dissolve in / out, clock-positioned           */
/* ------------------------------------------------------------------ */
export function SceneView({
  i,
  active,
  armed,
  playing,
  poster,
  onCta,
}: {
  i: number;
  active: boolean;
  armed: boolean;
  playing: boolean;
  /** pre-play state: show clean footage only, so the play button has room */
  poster?: boolean;
  onCta?: () => void;
}) {
  const m = { armed, active, playing };
  const last = i === SCENES.length - 1;
  return (
    <div
      className={cn("absolute inset-0", last ? "tl-scene-last" : "tl-scene")}
      style={{ "--s": SCENES[i].start, "--sd": SCENES[i].dur } as CSSProperties}
    >
      {i === 0 && <Scene0 {...m} poster={poster} />}
      {i === 1 && <Scene1 {...m} />}
      {i === 2 && <Scene2 {...m} />}
      {i === 3 && <Scene3 />}
      {i === 4 && <Scene4 />}
      {i === 5 && <Scene5 onCta={onCta} />}
    </div>
  );
}
