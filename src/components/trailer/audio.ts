import type { CueKind } from "@/lib/trailer";

/**
 * Tiny in-browser sound designer for the trailer.
 * No audio files: an ambient chord pad, typewriter ticks, plucks, whooshes,
 * a low boom and a bell chime are all synthesized with the Web Audio API.
 */

// one chord per scene (Hz)
const CHORDS = [
  [146.83, 174.61, 220.0], // Dm
  [116.54, 146.83, 174.61], // Bb
  [98.0, 116.54, 146.83, 196.0], // Gm
  [174.61, 220.0, 261.63, 349.23], // F  (lift)
  [116.54, 174.61, 233.08], // Bb
  [146.83, 185.0, 220.0, 293.66], // D  (resolve)
];
const PENTA = [293.66, 329.63, 369.99, 440.0, 493.88, 587.33];

type WebkitWindow = Window & { webkitAudioContext?: typeof AudioContext };

export class TrailerAudio {
  private ctx: AudioContext | null = null;
  private master!: GainNode;
  private fx!: GainNode;
  private noise!: AudioBuffer;
  private chords: GainNode[] = [];
  private chordIdx = 0;
  private on = false;
  private suspendTimer: number | undefined;

  private init(): boolean {
    try {
      const AC = window.AudioContext || (window as WebkitWindow).webkitAudioContext;
      if (!AC) return false;
      const ctx = new AC();
      this.ctx = ctx;

      const master = ctx.createGain();
      master.gain.value = 0;
      master.connect(ctx.destination);
      this.master = master;

      // noise buffer for ticks / whooshes
      const buf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      this.noise = buf;

      // ambient pad
      const padFilter = ctx.createBiquadFilter();
      padFilter.type = "lowpass";
      padFilter.frequency.value = 900;
      padFilter.Q.value = 0.6;
      padFilter.connect(master);

      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.07;
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = 260;
      lfo.connect(lfoGain);
      lfoGain.connect(padFilter.frequency);
      lfo.start();

      CHORDS.forEach((freqs) => {
        const g = ctx.createGain();
        g.gain.value = 0;
        g.connect(padFilter);
        freqs.forEach((f, k) => {
          (
            [
              ["sine", 0, 0.5],
              ["triangle", k % 2 ? 7 : -7, 0.22],
            ] as const
          ).forEach(([type, det, level]) => {
            const o = ctx.createOscillator();
            o.type = type;
            o.frequency.value = f;
            o.detune.value = det;
            const og = ctx.createGain();
            og.gain.value = level;
            o.connect(og);
            og.connect(g);
            o.start();
          });
        });
        this.chords.push(g);
      });

      // sub drone
      const sub = ctx.createOscillator();
      sub.type = "sine";
      sub.frequency.value = 36.71;
      const sg = ctx.createGain();
      sg.gain.value = 0.2;
      sub.connect(sg);
      sg.connect(master);
      sub.start();

      // pluck / chime bus with a soft echo
      const fx = ctx.createGain();
      fx.connect(master);
      const delay = ctx.createDelay(1);
      delay.delayTime.value = 0.32;
      const fb = ctx.createGain();
      fb.gain.value = 0.38;
      const wet = ctx.createGain();
      wet.gain.value = 0.5;
      fx.connect(delay);
      delay.connect(fb);
      fb.connect(delay);
      delay.connect(wet);
      wet.connect(master);
      this.fx = fx;

      return true;
    } catch {
      this.ctx = null;
      return false;
    }
  }

  setActive(on: boolean) {
    this.on = on;
    if (on) {
      if (!this.ctx && !this.init()) return;
      const ctx = this.ctx!;
      window.clearTimeout(this.suspendTimer);
      ctx.resume().catch(() => {});
      this.master.gain.cancelScheduledValues(ctx.currentTime);
      this.master.gain.setTargetAtTime(0.9, ctx.currentTime, 0.25);
      this.chord(this.chordIdx);
    } else if (this.ctx) {
      const ctx = this.ctx;
      this.master.gain.cancelScheduledValues(ctx.currentTime);
      this.master.gain.setTargetAtTime(0, ctx.currentTime, 0.1);
      this.suspendTimer = window.setTimeout(() => ctx.suspend().catch(() => {}), 450);
    }
  }

  chord(i: number) {
    this.chordIdx = i;
    const ctx = this.ctx;
    if (!ctx) return;
    this.chords.forEach((g, k) => g.gain.setTargetAtTime(k === i ? 0.075 : 0, ctx.currentTime, 0.7));
  }

  cue(kind: CueKind, n = 0) {
    if (!this.on || !this.ctx || this.ctx.state !== "running") return;
    switch (kind) {
      case "tick":
        return this.tick();
      case "pluck":
        return this.pluck(n);
      case "whoosh":
        return this.whoosh();
      case "boom":
        return this.boom();
      case "chime":
        return this.chime();
    }
  }

  private tick() {
    const ctx = this.ctx!;
    const t = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noise;
    const bp = ctx.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.value = 2400 + Math.random() * 1800;
    bp.Q.value = 1.4;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.3, t + 0.002);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.045);
    src.connect(bp);
    bp.connect(g);
    g.connect(this.master);
    src.start(t, Math.random() * 0.5, 0.06);

    const o = ctx.createOscillator();
    o.type = "sine";
    o.frequency.setValueAtTime(170, t);
    o.frequency.exponentialRampToValueAtTime(80, t + 0.06);
    const og = ctx.createGain();
    og.gain.setValueAtTime(0.0001, t);
    og.gain.exponentialRampToValueAtTime(0.16, t + 0.003);
    og.gain.exponentialRampToValueAtTime(0.0001, t + 0.07);
    o.connect(og);
    og.connect(this.master);
    o.start(t);
    o.stop(t + 0.09);
  }

  private pluck(n: number) {
    const ctx = this.ctx!;
    const t = ctx.currentTime;
    const o = ctx.createOscillator();
    o.type = "triangle";
    o.frequency.value = PENTA[n % PENTA.length];
    const lp = ctx.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 2200;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.15, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.4);
    o.connect(lp);
    lp.connect(g);
    g.connect(this.fx);
    o.start(t);
    o.stop(t + 1.5);
  }

  private whoosh() {
    const ctx = this.ctx!;
    const t = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noise;
    const bp = ctx.createBiquadFilter();
    bp.type = "bandpass";
    bp.Q.value = 0.8;
    bp.frequency.setValueAtTime(250, t);
    bp.frequency.exponentialRampToValueAtTime(3000, t + 0.7);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.14, t + 0.35);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.8);
    src.connect(bp);
    bp.connect(g);
    g.connect(this.master);
    src.start(t, 0, 0.9);
  }

  private boom() {
    const ctx = this.ctx!;
    const t = ctx.currentTime;
    const o = ctx.createOscillator();
    o.type = "sine";
    o.frequency.setValueAtTime(110, t);
    o.frequency.exponentialRampToValueAtTime(32, t + 1.1);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.5, t + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.5);
    o.connect(g);
    g.connect(this.master);
    o.start(t);
    o.stop(t + 1.6);
  }

  private chime() {
    const ctx = this.ctx!;
    const t = ctx.currentTime;
    [587.33, 880, 1108.73, 1174.66].forEach((f, i) => {
      const o = ctx.createOscillator();
      o.type = "sine";
      o.frequency.value = f;
      const g = ctx.createGain();
      const s = t + i * 0.07;
      g.gain.setValueAtTime(0.0001, s);
      g.gain.exponentialRampToValueAtTime(0.07, s + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, s + 3.2);
      o.connect(g);
      g.connect(this.fx);
      o.start(s);
      o.stop(s + 3.3);
    });
  }

  dispose() {
    window.clearTimeout(this.suspendTimer);
    this.on = false;
    this.ctx?.close().catch(() => {});
    this.ctx = null;
    this.chords = [];
  }
}
