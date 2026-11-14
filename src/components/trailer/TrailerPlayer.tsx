import { useCallback, useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { cn } from "@/utils/cn";
import { CUES, POSTER_T, SCENES, TOTAL, fmtTime, sceneAt } from "@/lib/trailer";
import { TrailerAudio } from "./audio";
import { SceneView } from "./scenes";
import { WsMark } from "@/components/Logo";
import {
  IconFullscreen,
  IconFullscreenExit,
  IconPause,
  IconPlay,
  IconReplay,
  IconVolume,
  IconVolumeOff,
} from "@/components/Icons";

type Props = {
  /** start playing as soon as the player mounts (use after a user click) */
  autoPlay?: boolean;
  loop?: boolean;
  /** initial sound state — sound only ever starts after a user gesture */
  soundOn?: boolean;
  /** pause automatically when scrolled out of view */
  pauseOffscreen?: boolean;
  onNavigate?: () => void;
  className?: string;
};

const ctrlBtn =
  "flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-ivory/80 transition-colors hover:bg-ivory/10 hover:text-gold focus-visible:outline-2 focus-visible:outline-gold";

export function TrailerPlayer({
  autoPlay = false,
  loop = false,
  soundOn = true,
  pauseOffscreen = false,
  onNavigate,
  className,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const rangeRef = useRef<HTMLInputElement>(null);
  const timeRef = useRef<HTMLSpanElement>(null);
  const tRef = useRef(POSTER_T);
  const curRef = useRef(0);
  const audioRef = useRef<TrailerAudio | null>(null);
  const soundRef = useRef(soundOn);
  const loopRef = useRef(loop);

  const [cur, setCur] = useState(0);
  const [started, setStarted] = useState(false);
  const [armed, setArmed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);
  const [sound, setSound] = useState(soundOn);
  const [fs, setFs] = useState(false);

  useEffect(() => {
    soundRef.current = sound;
    loopRef.current = loop;
  }, [sound, loop]);

  /* ---- paint the master clock into the DOM (no React re-render per frame) ---- */
  const paint = useCallback((t: number) => {
    tRef.current = t;
    stageRef.current?.style.setProperty("--t", String(Math.round(t)));
    const r = rangeRef.current;
    if (r) {
      r.value = String(t);
      r.style.setProperty("--p", `${(t / TOTAL) * 100}%`);
    }
    const label = timeRef.current;
    if (label) {
      const s = fmtTime(t);
      if (label.dataset.s !== s) {
        label.dataset.s = s;
        label.textContent = s;
      }
    }
    const idx = sceneAt(t);
    if (idx !== curRef.current) {
      curRef.current = idx;
      setCur(idx);
    }
  }, []);

  useLayoutEffect(() => {
    paint(POSTER_T);
  }, [paint]);

  /* ---- the clock ---- */
  useEffect(() => {
    if (!playing) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(now - last, 80);
      last = now;
      const prev = tRef.current;
      const next = prev + dt;
      if (soundRef.current && audioRef.current) {
        for (const c of CUES) {
          if (c.t > prev && c.t <= next) audioRef.current.cue(c.kind, c.n);
          else if (c.t > next) break;
        }
      }
      if (next >= TOTAL) {
        if (loopRef.current) {
          paint(0);
        } else {
          paint(TOTAL);
          setPlaying(false);
          setEnded(true);
          return;
        }
      } else {
        paint(next);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, paint]);

  /* ---- sound ---- */
  useEffect(() => {
    if (!audioRef.current) audioRef.current = new TrailerAudio();
    audioRef.current.setActive(playing && sound);
  }, [playing, sound]);
  useEffect(() => {
    audioRef.current?.chord(cur);
  }, [cur]);
  useEffect(
    () => () => {
      audioRef.current?.dispose();
      audioRef.current = null;
    },
    []
  );

  /* ---- transport ---- */
  const play = useCallback(() => {
    setArmed(true);
    if (!started || ended || tRef.current >= TOTAL - 50) {
      paint(0);
      setEnded(false);
    }
    setStarted(true);
    setPlaying(true);
    // the poster button unmounts on play — keep focus inside the player so
    // Space / M / F / arrow shortcuts keep working
    wrapRef.current?.focus({ preventScroll: true });
  }, [started, ended, paint]);

  const toggle = useCallback(() => {
    if (playing) setPlaying(false);
    else play();
  }, [playing, play]);

  const seek = useCallback(
    (t: number) => {
      setArmed(true);
      setStarted(true);
      setEnded(t >= TOTAL);
      paint(t);
    },
    [paint]
  );

  useEffect(() => {
    if (autoPlay) play();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ---- pause when hidden / offscreen ---- */
  useEffect(() => {
    const onVis = () => document.hidden && setPlaying(false);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  useEffect(() => {
    if (!pauseOffscreen || !wrapRef.current || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => !e.isIntersecting && setPlaying(false), { threshold: 0.15 });
    io.observe(wrapRef.current);
    return () => io.disconnect();
  }, [pauseOffscreen]);

  /* ---- fullscreen ---- */
  const canFs = typeof document !== "undefined" && !!document.fullscreenEnabled;
  const toggleFs = () => {
    const el = wrapRef.current;
    if (!el) return;
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    else el.requestFullscreen?.().catch(() => {});
  };
  useEffect(() => {
    const f = () => setFs(document.fullscreenElement === wrapRef.current);
    document.addEventListener("fullscreenchange", f);
    return () => document.removeEventListener("fullscreenchange", f);
  }, []);

  /* ---- keyboard ---- */
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const tag = (e.target as HTMLElement).tagName;
    const k = e.key.toLowerCase();
    if ((k === " " || k === "k") && tag !== "BUTTON" && tag !== "INPUT") {
      e.preventDefault();
      toggle();
    } else if (k === "m") setSound((s) => !s);
    else if (k === "f" && canFs) toggleFs();
    else if (tag !== "INPUT" && (k === "arrowright" || k === "arrowleft")) {
      e.preventDefault();
      seek(Math.max(0, Math.min(TOTAL, tRef.current + (k === "arrowright" ? 5000 : -5000))));
    }
  };

  const onStageClick = (e: MouseEvent) => {
    if ((e.target as HTMLElement).closest("a,button")) return;
    toggle();
  };

  const fit = fs ? { maxWidth: "calc((100svh - 5rem) * 1.7778)" } : undefined;

  return (
    <div
      ref={wrapRef}
      tabIndex={0}
      onKeyDown={onKeyDown}
      role="region"
      aria-label="Wordsmith Squad brand trailer"
      className={cn(
        "relative overflow-hidden bg-black outline-none focus-visible:ring-2 focus-visible:ring-gold",
        fs ? "flex flex-col justify-center" : "rounded-[1.5rem] md:rounded-[2.25rem]",
        className
      )}
    >
      <div className="relative mx-auto aspect-video w-full" style={fit}>
        <div
          ref={stageRef}
          onClick={onStageClick}
          className="trailer-stage absolute inset-0 cursor-pointer overflow-hidden bg-ink-950 select-none"
        >
          {SCENES.map((s, i) =>
            i >= cur - 1 && i <= cur + 1 ? (
              <SceneView key={s.id} i={i} active={i === cur} armed={armed} playing={playing} poster={!started} onCta={onNavigate} />
            ) : null
          )}

          {/* cinema overlays */}
          <div aria-hidden className="trailer-grain z-20" />
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 z-30 flex h-[3.4cqw] items-center bg-black px-[1.8cqw]">
            <WsMark tone="onDark" className="h-[2.2cqw] w-[2.2cqw] opacity-80" />
            <span className="font-body ml-[0.9cqw] hidden font-semibold text-ivory/40 uppercase @lg:block" style={{ fontSize: "0.8cqw", letterSpacing: "0.32em" }}>
              Wordsmith Squad
            </span>
            <span className="font-body ml-auto hidden font-semibold text-gold/70 uppercase @lg:block" style={{ fontSize: "0.8cqw", letterSpacing: "0.32em" }}>
              {String(cur + 1).padStart(2, "0")} · {SCENES[cur].label}
            </span>
          </div>
          <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[3.4cqw] bg-black" />

          {/* poster state */}
          {!started && (
            <button
              onClick={play}
              onPointerEnter={() => setArmed(true)}
              onFocus={() => setArmed(true)}
              aria-label="Play the Wordsmith Squad trailer"
              className="group absolute inset-0 z-40 flex cursor-pointer flex-col items-center justify-center gap-[1.6cqw] bg-ink-950/35 transition-colors hover:bg-ink-950/20"
            >
              <span className="relative flex items-center justify-center" style={{ width: "max(64px, 9cqw)", height: "max(64px, 9cqw)" }}>
                <span className="absolute inset-0 animate-ping rounded-full bg-gold/35" />
                <span className="absolute -inset-[0.9cqw] rounded-full border border-gold/40" />
                <span className="relative flex h-full w-full items-center justify-center rounded-full bg-gold text-ink-950 shadow-[0_20px_60px_-12px_rgba(198,163,106,0.8)] transition-transform duration-500 group-hover:scale-110">
                  <IconPlay className="ml-[6%] h-[38%] w-[38%]" />
                </span>
              </span>
              <span className="text-center">
                <span className="font-display block font-semibold text-ivory" style={{ fontSize: "max(15px, 2.4cqw)" }}>
                  Watch the Trailer
                </span>
                <span
                  className="font-body mt-[0.5cqw] block font-semibold text-gold uppercase"
                  style={{ fontSize: "max(7px, 0.95cqw)", letterSpacing: "0.3em" }}
                >
                  {fmtTime(TOTAL)} · Sound on
                </span>
              </span>
            </button>
          )}

          {/* ended state */}
          {ended && (
            <button
              onClick={play}
              className="font-body absolute top-[5.4cqw] right-[2cqw] z-40 inline-flex cursor-pointer items-center gap-2 rounded-full border border-gold/40 bg-ink-950/80 px-4 py-2 text-[0.6875rem] font-semibold tracking-[0.18em] text-gold uppercase backdrop-blur-md transition-colors hover:bg-gold hover:text-ink-950"
            >
              <IconReplay className="h-4 w-4" /> Replay
            </button>
          )}
        </div>
      </div>

      {/* controls */}
      <div className="bg-ink-950" style={fit ? { ...fit, margin: "0 auto", width: "100%" } : undefined}>
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 sm:gap-3 sm:px-4">
          <button onClick={toggle} aria-label={playing ? "Pause" : ended ? "Replay" : "Play"} className={ctrlBtn}>
            {playing ? <IconPause className="h-4 w-4" /> : ended ? <IconReplay className="h-[1.125rem] w-[1.125rem]" /> : <IconPlay className="h-4 w-4" />}
          </button>
          <span className="font-body w-[5.25rem] shrink-0 text-xs text-ivory/60 tabular-nums">
            <span ref={timeRef}>0:00</span> / {fmtTime(TOTAL)}
          </span>
          <div className="relative min-w-0 flex-1">
            <input
              ref={rangeRef}
              type="range"
              min={0}
              max={TOTAL}
              step={50}
              defaultValue={POSTER_T}
              onInput={(e) => seek(Number((e.target as HTMLInputElement).value))}
              aria-label="Seek through the trailer"
              aria-valuetext={`${fmtTime(tRef.current)} of ${fmtTime(TOTAL)}`}
              className="trailer-range"
            />
            {SCENES.slice(1).map((s) => (
              <span
                key={s.id}
                aria-hidden
                title={s.label}
                className="pointer-events-none absolute top-1/2 h-2.5 w-0.5 -translate-y-1/2 rounded bg-ivory/45"
                style={{ left: `${(s.start / TOTAL) * 100}%` }}
              />
            ))}
          </div>
          <button
            onClick={() => setSound((s) => !s)}
            aria-label={sound ? "Mute sound" : "Turn sound on"}
            aria-pressed={sound}
            title={sound ? "Sound on (M)" : "Sound off (M)"}
            className={ctrlBtn}
          >
            {sound ? <IconVolume className="h-5 w-5" /> : <IconVolumeOff className="h-5 w-5" />}
          </button>
          {canFs && (
            <button onClick={toggleFs} aria-label={fs ? "Exit fullscreen" : "Fullscreen"} title="Fullscreen (F)" className={ctrlBtn}>
              {fs ? <IconFullscreenExit className="h-5 w-5" /> : <IconFullscreen className="h-5 w-5" />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
