/* ------------------------------------------------------------------ */
/*  Wordsmith Squad — brand trailer: timeline, media & sound cues      */
/*  Everything is driven by one master clock (ms), so the trailer can  */
/*  be paused, scrubbed and chapter-skipped deterministically.         */
/* ------------------------------------------------------------------ */

/** Cross-dissolve length between scenes (ms) */
export const OVERLAP = 450;

export type SceneMeta = { id: string; label: string; start: number; dur: number };

const RAW = [
  { id: "prologue", label: "Prologue", dur: 5200 },
  { id: "spark", label: "The Spark", dur: 5200 },
  { id: "craft", label: "The Craft", dur: 7700 },
  { id: "books", label: "The Books", dur: 8000 },
  { id: "process", label: "The Process", dur: 5600 },
  { id: "squad", label: "The Squad", dur: 7600 },
];

export const SCENES: SceneMeta[] = (() => {
  let start = 0;
  return RAW.map((r) => {
    const m = { ...r, start };
    start += r.dur;
    return m;
  });
})();

export const TOTAL = SCENES.reduce((a, s) => a + s.dur, 0);

/** The frame shown behind the play button before the trailer starts */
export const POSTER_T = 4100;

export function sceneAt(t: number) {
  for (let i = SCENES.length - 1; i >= 0; i--) if (t >= SCENES[i].start) return i;
  return 0;
}

export function fmtTime(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

/* ------------------------------------------------------------------ */
/*  Footage (Pexels, free licence). Lighter 960×540 renditions.        */
/*  Swap these URLs for your own brand footage at any time.            */
/* ------------------------------------------------------------------ */
export const FOOTAGE = {
  typing: {
    src: "https://videos.pexels.com/video-files/6980918/6980918-sd_960_540_25fps.mp4",
    poster:
      "https://images.pexels.com/videos/6980918/pexels-photo-6980918.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
    credit: "KoolShooters",
  },
  pages: {
    src: "https://videos.pexels.com/video-files/6979935/6979935-sd_960_540_25fps.mp4",
    poster:
      "https://images.pexels.com/videos/6979935/1-man-adult-atmosphere-atmospheric-6979935.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
    credit: "KoolShooters",
  },
  ribbon: {
    src: "https://videos.pexels.com/video-files/2750099/2750099-sd_960_540_24fps.mp4",
    poster:
      "https://images.pexels.com/videos/2750099/free-video-2750099.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
    credit: "Miguel Á. Padriñán",
  },
};

/* ------------------------------------------------------------------ */
/*  Per-scene timings (ms, relative to each scene's start)             */
/* ------------------------------------------------------------------ */
export const T = {
  s0: {
    eyebrow: 300,
    type: 1300,
    step: 52,
    rule: 3500,
    text: "Every great book begins with a story.",
  },
  s1: { a: 300, aOut: 2300, b: 2800, tag: 4200 },
  s2: { first: 300, beat: 1400 },
  s3: { book0: 300, bookStep: 180, chips: 700, head: 2300, sub: 3900 },
  s4: { head: 200, line: 800, lineDur: 3600, node0: 1000, nodeStep: 700, closing: 4500 },
  s5: {
    ring: 200,
    mark: 300,
    word: 1200,
    squad: 1700,
    type: 2400,
    step: 46,
    cta: 4700,
    fine: 5400,
    text: "Your Story. Our Craft. One Masterpiece.",
  },
};

/* ------------------------------------------------------------------ */
/*  Sound cues, generated from the same timings as the visuals         */
/* ------------------------------------------------------------------ */
export type CueKind = "tick" | "pluck" | "whoosh" | "boom" | "chime";
export type Cue = { t: number; kind: CueKind; n?: number };

export const CUES: Cue[] = (() => {
  const c: Cue[] = [];
  const st = (i: number) => SCENES[i].start;

  // typewriter ticks — one per typed character
  [...T.s0.text].forEach((ch, i) => {
    if (ch !== " ") c.push({ t: st(0) + T.s0.type + i * T.s0.step, kind: "tick" });
  });

  // scene transitions
  for (let i = 1; i < SCENES.length; i++) c.push({ t: st(i) - 120, kind: "whoosh" });

  // five crafts — a rising pentatonic pluck per beat
  for (let i = 0; i < 5; i++) c.push({ t: st(2) + T.s2.first + i * T.s2.beat, kind: "pluck", n: i });

  // books rise
  c.push({ t: st(3) + 250, kind: "boom" });
  for (let i = 0; i < 5; i++) c.push({ t: st(3) + T.s3.book0 + i * T.s3.bookStep, kind: "pluck", n: i + 1 });

  // process nodes
  for (let i = 0; i < 5; i++) c.push({ t: st(4) + T.s4.node0 + i * T.s4.nodeStep, kind: "pluck", n: i });

  // logo reveal + tagline typing
  c.push({ t: st(5) + 250, kind: "boom" });
  c.push({ t: st(5) + 800, kind: "chime" });
  [...T.s5.text].forEach((ch, i) => {
    if (ch !== " ") c.push({ t: st(5) + T.s5.type + i * T.s5.step, kind: "tick" });
  });

  return c.sort((a, b) => a.t - b.t);
})();
