
import {
  useEffect,
  useRef,
  useState,
  type PointerEvent,
  type ReactNode,
} from "react";
import { Link } from "react-router-dom";
import { Reveal, usePageMeta } from "@/components/ui";
import { EDITORIAL } from "@/lib/data";

import ember from "@/assets/covers/ember.jpg";
import salt from "@/assets/covers/salt.jpg";
import letters from "@/assets/covers/letters.jpg";
import cartographer from "@/assets/covers/cartographer.jpg";

/* ==========================================
   WORDSMITH SQUAD — CREATIVE WRITING ATELIER
   ========================================== */

const services = [
  {
    no: "01",
    name: "Story Writing",
    type: "SHORT FORM",
    desc: "Memorable characters, immersive worlds and stories that stay with readers.",
    path: "/creative-writing/story-writing",
    icon: "✦",
    image: letters,
  },
  {
    no: "02",
    name: "Novel Writing",
    type: "LONG FORM",
    desc: "Build a complete fictional universe with compelling characters and narrative depth.",
    path: "/creative-writing/novel-writing",
    icon: "◇",
    image: ember,
  },
  {
    no: "03",
    name: "Poetry Writing",
    type: "EXPRESSIVE ART",
    desc: "Give emotion and imagination a distinctive rhythm through carefully crafted verse.",
    path: "/creative-writing/poetry-writing",
    icon: "❋",
    image: salt,
  },
  {
    no: "04",
    name: "Screenwriting",
    type: "FOR THE SCREEN",
    desc: "Bring ideas to cinematic life through visual storytelling, scenes and dialogue.",
    path: "/creative-writing/screenwriting",
    icon: "◈",
    image: cartographer,
  },
  {
    no: "05",
    name: "Script Writing",
    type: "PERFORMANCE",
    desc: "Shape concepts into engaging scripts with purposeful pacing and natural dialogue.",
    path: "/creative-writing/script-writing",
    icon: "✧",
    image: letters,
  },
  {
    no: "06",
    name: "Book Outlining",
    type: "STORY STRUCTURE",
    desc: "Turn scattered ideas into a confident narrative direction before writing begins.",
    path: "/creative-writing/book-outlining",
    icon: "▤",
    image: ember,
  },
] as const;

const inspirations = [
  {
    genre: "LITERARY FICTION",
    title: "The Unsent Letter",
    prompt:
      "A forgotten letter arrives twenty years late, carrying a secret that could change an entire family's history.",
    mood: "Emotional · Reflective · Intimate",
  },
  {
    genre: "MYSTERY",
    title: "The Last Passenger",
    prompt:
      "Every evening, the same stranger boards the final train. One night, the station disappears from the map.",
    mood: "Mysterious · Atmospheric · Suspenseful",
  },
  {
    genre: "FANTASY",
    title: "The Keeper of Stars",
    prompt:
      "In a world where memories become constellations, a young cartographer discovers a star that belongs to nobody.",
    mood: "Magical · Adventurous · Imaginative",
  },
  {
    genre: "POETRY",
    title: "Between Two Seasons",
    prompt:
      "Write about a place that remembers someone long after everyone else has forgotten them.",
    mood: "Poetic · Nostalgic · Gentle",
  },
];

/* ==========================================
   CURSOR-RESPONSIVE HERO
   ========================================== */

function CreativeDesk() {
  const desk = useRef<HTMLDivElement>(null);

  const move = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !desk.current) return;

    const rect = desk.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    desk.current.style.setProperty("--desk-x", `${x * 9}deg`);
    desk.current.style.setProperty("--desk-y", `${-y * 7}deg`);
  };

  const reset = () => {
    desk.current?.style.setProperty("--desk-x", "0deg");
    desk.current?.style.setProperty("--desk-y", "0deg");
  };

  return (
    <div
      ref={desk}
      onPointerMove={move}
      onPointerLeave={reset}
      className="cw-desk"
      aria-label="Illustrated creative writing studio with floating manuscript pages"
    >
      <div className="cw-desk-glow" />
      <div className="cw-desk-orbit" />

      {/* Background photo */}
      <div className="cw-photo-back">
        <img
          src={EDITORIAL.moodyWriter}
          alt="A writer working in a creative studio"
        />
      </div>

      {/* Decorative notebook */}
      <div className="cw-notebook">
        <div className="cw-notebook-binding" />

        <div className="cw-notebook-inner">
          <span className="cw-notebook-top">
            WORDSMITH / NOTES 001
          </span>

          <span className="cw-notebook-symbol">✳</span>

          <span className="cw-notebook-title">
            The Art
            <br />
            of Becoming
          </span>

          <span className="cw-notebook-caption">
            A COLLECTION OF IDEAS
          </span>

          <div className="cw-notebook-rule" />

          <span className="cw-notebook-quote">
            "Every great story begins
            with a little imagination."
          </span>

          <span className="cw-notebook-page">01 — 24</span>
        </div>
      </div>

      {/* Floating handwritten paper */}
      <div className="cw-paper">
        <div className="cw-paper-header">
          CHAPTER ONE
        </div>

        <div className="cw-paper-title">
          Once upon
          <br />
          a thought...
        </div>

        <div className="cw-paper-lines">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="cw-paper-signature">
          ✦ Let the words wander
        </div>
      </div>

      {/* Floating ornaments */}
      <div className="cw-floating-note cw-note-one">
        <span>✦</span>
        Stories start here
      </div>

      <div className="cw-floating-note cw-note-two">
        <span>01 / IMAGINE</span>
        <strong>Write beyond ordinary.</strong>
      </div>

      <div className="cw-desk-star">✧</div>
    </div>
  );
}

/* ==========================================
   INTERACTIVE STORY GENERATOR
   ========================================== */

function StoryLab() {
  const [active, setActive] = useState(0);
  const [changing, setChanging] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const select = (index: number) => {
    if (index === active) return;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setChanging(true);

    timeoutRef.current = setTimeout(() => {
      setActive(index);
      setChanging(false);
    }, 170);
  };

  const next = () => {
    select((active + 1) % inspirations.length);
  };

  const idea = inspirations[active];

  return (
    <div className="cw-lab">
      <div className="cw-lab-left">
        <div className="cw-lab-topline">
          <span>THE IMAGINATION LAB</span>
          <span>EXPERIMENT / 001</span>
        </div>

        <div className="cw-lab-art">
          <div className="cw-lab-ring cw-ring-one" />
          <div className="cw-lab-ring cw-ring-two" />

          <span className="cw-lab-big-symbol">✳</span>

          <div className="cw-lab-art-caption">
            NO LIMITS.
            <br />
            JUST IDEAS.
          </div>
        </div>

        <div className="cw-lab-art-footer">
          <span>CREATIVITY IN MOTION</span>
          <span>✦</span>
        </div>
      </div>

      <div className="cw-lab-right">
        <div className="cw-lab-eyebrow">
          AN EXERCISE IN IMAGINATION
        </div>

        <h3>
          What if your
          <br />
          next story started <em>here?</em>
        </h3>

        <p className="cw-lab-description">
          Choose a direction, explore a story seed,
          and see where your imagination takes you.
        </p>

        <div className="cw-genre-pills">
          {inspirations.map((item, index) => (
            <button
              type="button"
              key={item.title}
              onClick={() => select(index)}
              className={active === index ? "active" : ""}
              aria-pressed={active === index}
            >
              {item.genre}
            </button>
          ))}
        </div>

        <div
          className={`cw-idea-card ${changing ? "is-changing" : ""}`}
          aria-live="polite"
        >
          <div className="cw-idea-card-top">
            <span>STORY SEED / 0{active + 1}</span>
            <span>✧</span>
          </div>

          <h4>{idea.title}</h4>

          <p>{idea.prompt}</p>

          <div className="cw-idea-mood">{idea.mood}</div>
        </div>

        <div className="cw-lab-actions">
          <button type="button" onClick={next}>
            Another inspiration <span>↗</span>
          </button>
          <span>CURATED STORY PROMPTS</span>
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   SERVICE CARD
   ========================================== */

function CreativeCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  return (
    <Reveal delay={(index % 3) * 80} className="cw-card-wrap">
      <Link to={service.path} className="cw-service-card">
        <div className="cw-service-top">
          <span>{service.no} / 06</span>
          <span className="cw-card-icon">{service.icon}</span>
        </div>

        <div className="cw-service-photo">
          <img src={service.image} alt={`${service.name} visual inspiration`} loading="lazy" />
          <div className="cw-photo-overlay" />
        </div>

        <div className="cw-service-bottom">
          <span className="cw-service-type">{service.type}</span>

          <h3>{service.name}</h3>

          <p>{service.desc}</p>

          <div className="cw-service-link">
            <span>EXPLORE SERVICE</span>
            <span>↗</span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

/* ==========================================
   SECTION HEADING
   ========================================== */

function SectionHeading({
  label,
  children,
  description,
  dark = false,
}: {
  label: string;
  children: ReactNode;
  description: string;
  dark?: boolean;
}) {
  return (
    <Reveal className={`cw-section-heading ${dark ? "cw-heading-dark" : ""}`}>
      <div className="cw-eyebrow">
        <span />
        {label}
      </div>

      <h2>{children}</h2>

      <p>{description}</p>
    </Reveal>
  );
}

/* ==========================================
   MAIN CREATIVE WRITING PAGE
   ========================================== */

export default function Overview() {
  usePageMeta(
    "Creative Writing Services | Wordsmith Squad",
    "Explore story writing, novel writing, poetry, screenwriting, script writing and book outlining at Wordsmith Squad."
  );

  const cursorRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const moveCursor = (e: PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return;

    const x = e.clientX;
    const y = e.clientY;

    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate3d(${x - 150}px, ${y - 150}px, 0)`;

        cursorRef.current.style.opacity = "1";
      }

      rafRef.current = null;
    });
  };

  return (
    <main
      className="cw-page"
      onPointerMove={moveCursor}
      onPointerLeave={() => {
        if (cursorRef.current) cursorRef.current.style.opacity = "0";
      }}
    >
      <style>{creativeStyles}</style>

      <div ref={cursorRef} className="cw-cursor" aria-hidden="true" />

      {/* ===============================
          HERO
      =============================== */}

      <section className="cw-hero">
        <div className="cw-hero-dots" />

        <div className="cw-container cw-hero-grid">
          <div className="cw-hero-copy">
            <Reveal>
              <div className="cw-hero-badge">
                <span className="cw-badge-dot" />
                THE CREATIVE WRITING ATELIER
              </div>
            </Reveal>

            <Reveal delay={90}>
              <h1>
                Where Ideas
                <br />
                Become <em>Art.</em>
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <p className="cw-hero-description">
                Every remarkable story begins with an idea.
                We help shape yours into words that inspire,
                characters that live, and narratives that stay
                with readers long after the last page.
              </p>
            </Reveal>

            <Reveal delay={230}>
              <div className="cw-actions">
                <Link to="/contact" className="cw-primary-button">
                  Start Your Story <span>↗</span>
                </Link>

                <a href="#cw-services" className="cw-secondary-button">
                  Explore Services <span>↓</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="cw-hero-meta">
                <span>✦ YOUR IMAGINATION</span>
                <span>✦ OUR CRAFT</span>
                <span>✦ ENDLESS POSSIBILITIES</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={170}>
            <CreativeDesk />
          </Reveal>
        </div>

        <div className="cw-hero-bottom" />
      </section>

      {/* ===============================
          MOVING INSPIRATION STRIP
      =============================== */}

      <div className="cw-marquee">
        <div className="cw-marquee-track" aria-hidden="true">
          {[0, 1].map((group) => (
            <div className="cw-marquee-group" key={group}>
              {[
                "IMAGINE",
                "EXPLORE",
                "CREATE",
                "EXPRESS",
                "WRITE",
              ].map((word) => (
                <span key={word}>
                  {word} <i>✳</i>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ===============================
          EDITORIAL INTRODUCTION
      =============================== */}

      <section className="cw-intro cw-section">
        <div className="cw-container cw-intro-grid">
          <Reveal className="cw-intro-visual">
            <div className="cw-image-frame">
              <img
                src={EDITORIAL.typewriter}
                alt="Vintage typewriter in an atmospheric writing studio"
                loading="lazy"
              />
            </div>

            <div className="cw-image-caption">
              <span>✦</span>
              THE BEAUTY OF WORDS
            </div>
          </Reveal>

          <div>
            <SectionHeading
              dark
              label="THE ART BEHIND THE WORDS"
              description="Creative writing is the meeting point between imagination, emotion and craft."
            >
              Not Just Words.
              <br />
              <em>Entire Worlds.</em>
            </SectionHeading>

            <Reveal delay={130}>
              <p className="cw-intro-copy">
                A beautifully written story has the power to transport,
                challenge, inspire and connect. Whether you're imagining
                a novel, crafting a screenplay or exploring poetry,
                we help bring structure and expression to your vision.
              </p>

              <div className="cw-intro-features">
                {[
                  "Original creative direction",
                  "Character & world development",
                  "Thoughtful narrative structure",
                  "Voice, emotion & expression",
                ].map((item) => (
                  <div key={item}>
                    <span>✦</span>
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===============================
          SERVICES
      =============================== */}

      <section id="cw-services" className="cw-services cw-section">
        <div className="cw-container">
          <SectionHeading
            label="EXPLORE OUR CREATIVE DISCIPLINES"
            description="Six distinct ways to transform imagination into beautifully crafted writing."
          >
            A Place for
            <br />
            Every <em>Kind of Story.</em>
          </SectionHeading>

          <div className="cw-services-grid">
            {services.map((service, index) => (
              <CreativeCard
                key={service.path}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===============================
          EDITORIAL STATEMENT
      =============================== */}

      <section className="cw-statement">
        <div className="cw-statement-glow" />

        <div className="cw-container">
          <Reveal>
            <span className="cw-statement-kicker">
              THE MAGIC OF STORYTELLING
            </span>

            <h2>
              Some Stories Are Written.
              <br />
              Others Are <em>Felt.</em>
            </h2>

            <div className="cw-statement-line" />

            <p>
              We believe the best creative work comes from
              curiosity, courage and a little imagination.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===============================
          INTERACTIVE INSPIRATION LAB
      =============================== */}

      <section className="cw-lab-section cw-section">
        <div className="cw-container">
          <SectionHeading
            dark
            label="THE INSPIRATION STUDIO"
            description="Creativity begins with a question. Explore original story prompts in our interactive writing studio."
          >
            Every Idea Holds
            <br />
            a <em>Possibility.</em>
          </SectionHeading>

          <Reveal>
            <StoryLab />
          </Reveal>
        </div>
      </section>

      {/* ===============================
          CREATIVE PROCESS
      =============================== */}

      <section className="cw-process cw-section">
        <div className="cw-container">
          <SectionHeading
            label="OUR CREATIVE APPROACH"
            description="A simple, collaborative journey from the earliest idea to a more complete story."
          >
            The Journey from
            <br />
            <em>Thought to Page.</em>
          </SectionHeading>

          <div className="cw-process-grid">
            {[
              {
                number: "01",
                title: "Imagine",
                copy: "We discover your idea, your inspiration and the story you want to tell.",
              },
              {
                number: "02",
                title: "Shape",
                copy: "We establish characters, structure, tone and the creative direction.",
              },
              {
                number: "03",
                title: "Create",
                copy: "The story takes form through thoughtful writing and creative exploration.",
              },
              {
                number: "04",
                title: "Refine",
                copy: "We polish the language and details while preserving your vision.",
              },
            ].map((step, index) => (
              <Reveal delay={index * 75} key={step.number}>
                <div className="cw-process-card">
                  <span className="cw-process-number">
                    {step.number}
                  </span>

                  <div className="cw-process-rule" />

                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===============================
          FINAL CTA
      =============================== */}

      <section className="cw-final">
        <div className="cw-final-circle" />

        <div className="cw-container">
          <Reveal>
            <span className="cw-final-kicker">
              YOUR NEXT CHAPTER STARTS HERE
            </span>

            <h2>
              Have an Idea?
              <br />
              Let's Make It <em>Extraordinary.</em>
            </h2>

            <p>
              From a single spark of inspiration to a complete
              creative work, let's explore where your story could go.
            </p>

            <Link to="/contact" className="cw-final-button">
              Begin Your Creative Journey <span>↗</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

/* ==========================================
   COMPLETE PAGE-SCOPED CSS
   ========================================== */

const creativeStyles = `
.cw-page {
  --cw-gold: #c6a36a;
  --cw-cream: #f4efe6;
  --cw-ink: #11100e;
  position: relative;
  isolation: isolate;
  overflow: clip;
  background: #11100e;
  color: var(--cw-cream);
  font-family: Inter, sans-serif;
}

.cw-page * {
  box-sizing: border-box;
}

.cw-page a {
  text-decoration: none;
}

.cw-page button {
  cursor: pointer;
  font: inherit;
}

.cw-page h1,
.cw-page h2,
.cw-page h3,
.cw-page h4 {
  font-family: "Playfair Display", Georgia, serif;
  font-weight: 500;
  letter-spacing: -.035em;
}

.cw-page em {
  color: var(--cw-gold);
  font-weight: 400;
}

.cw-container {
  width: min(100% - 48px, 1230px);
  margin-inline: auto;
}

.cw-section {
  padding: 100px 0;
}

/* CURSOR */

.cw-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  z-index: 20;
  pointer-events: none;
  opacity: 0;
  border-radius: 50%;
  background:
    radial-gradient(
      circle,
      rgba(198,163,106,.16),
      rgba(198,163,106,.04) 45%,
      transparent 73%
    );
  transition: opacity .3s ease;
  will-change: transform;
}

/* HERO */

.cw-hero {
  position: relative;
  min-height: 710px;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 145px 0 70px;
  background:
    radial-gradient(
      ellipse at 76% 40%,
      #292016 0%,
      #11100e 55%,
      #0d0c0b 100%
    );
}

.cw-hero-dots {
  position: absolute;
  inset: 0;
  opacity: .27;
  pointer-events: none;
  background-image:
    radial-gradient(#bb9d6d .7px, transparent .7px);
  background-size: 30px 30px;
  mask-image: linear-gradient(
    to bottom,
    transparent,
    black 30%,
    black 75%,
    transparent
  );
}

.cw-hero-grid {
  display: grid;
  grid-template-columns: 1fr .95fr;
  align-items: center;
  gap: 40px;
  position: relative;
  z-index: 1;
}

.cw-hero-badge {
  display: inline-flex;
  gap: 11px;
  align-items: center;
  border: 1px solid rgba(198,163,106,.32);
  background: rgba(198,163,106,.08);
  border-radius: 99px;
  padding: 11px 17px;
  color: #d4b47f;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .16em;
}

.cw-badge-dot {
  height: 7px;
  width: 7px;
  background: #c6a36a;
  border-radius: 50%;
  box-shadow: 0 0 0 rgba(198,163,106,.5);
  animation: cwPulse 2.5s infinite;
}

.cw-hero h1 {
  font-size: clamp(3.5rem, 5.4vw, 5.9rem);
  line-height: 1.08;
  margin: 30px 0 25px;
}

.cw-hero h1 em {
  background: linear-gradient(
    100deg,
    #ecd29e,
    #b98e50,
    #ffe4b4
  );
  background-size: 200% 100%;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: cwGoldShift 5s ease-in-out infinite alternate;
}

.cw-hero-description {
  color: #b5aba0;
  font-size: 15px;
  line-height: 1.9;
  max-width: 505px;
}

.cw-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 33px;
}

.cw-primary-button,
.cw-secondary-button {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  min-height: 51px;
  border-radius: 50px;
  padding: 10px 11px 10px 22px;
  font-size: 12px;
  font-weight: 700;
  transition:
    transform .35s,
    box-shadow .35s,
    background .35s;
}

.cw-primary-button {
  color: #22180f;
  background: #c6a36a;
}

.cw-secondary-button {
  color: #f4efe6;
  border: 1px solid #655a4e;
}

.cw-primary-button span,
.cw-secondary-button span {
  display: grid;
  place-items: center;
  height: 31px;
  width: 31px;
  border-radius: 50%;
  background: rgba(0,0,0,.12);
  font-size: 17px;
  transition: transform .35s;
}

.cw-secondary-button span {
  background: #302b24;
}

.cw-primary-button:hover,
.cw-secondary-button:hover {
  transform: translateY(-4px);
}

.cw-primary-button:hover {
  box-shadow: 0 16px 38px rgba(198,163,106,.22);
}

.cw-secondary-button:hover {
  background: rgba(198,163,106,.10);
}

.cw-primary-button:hover span {
  transform: rotate(45deg);
}

.cw-hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  border-top: 1px solid rgba(255,255,255,.11);
  padding-top: 22px;
  margin-top: 44px;
  color: #9f968d;
  font-size: 9px;
  letter-spacing: .08em;
}

.cw-hero-bottom {
  position: absolute;
  inset: auto 0 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(198,163,106,.5),
    transparent
  );
}

/* CREATIVE DESK */

.cw-desk {
  position: relative;
  width: 100%;
  height: 475px;
  perspective: 1000px;
}

.cw-desk-glow {
  position: absolute;
  inset: 12%;
  border-radius: 50%;
  background: rgba(198,163,106,.15);
  filter: blur(75px);
  animation: cwBreathe 7s infinite ease-in-out;
}

.cw-desk-orbit {
  position: absolute;
  inset: 7%;
  border-radius: 50%;
  border: 1px dashed rgba(198,163,106,.25);
  animation: cwOrbit 85s linear infinite;
}

.cw-photo-back {
  position: absolute;
  top: 7%;
  right: 4%;
  width: 63%;
  height: 75%;
  overflow: hidden;
  border-radius: 13px;
  transform: rotate(9deg);
  border: 1px solid rgba(198,163,106,.35);
  box-shadow: 0 30px 60px rgba(0,0,0,.5);
}

.cw-photo-back img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: sepia(.25) brightness(.55);
  transition: transform .8s, filter .8s;
}

.cw-desk:hover .cw-photo-back img {
  transform: scale(1.07);
  filter: sepia(.15) brightness(.75);
}

.cw-notebook {
  position: absolute;
  left: 11%;
  top: 15%;
  width: 53%;
  height: 70%;
  z-index: 3;
  transform:
    rotateX(var(--desk-y,0deg))
    rotateY(var(--desk-x,0deg))
    rotate(-9deg);
  transition: transform .35s ease-out;
  background: #261d15;
  border: 1px solid #9b7546;
  border-radius: 5px 11px 11px 5px;
  padding: 13px;
  box-shadow: 20px 35px 70px rgba(0,0,0,.7);
  animation: cwBookFloat 7s ease-in-out infinite;
}

.cw-notebook-binding {
  position: absolute;
  inset: 0 auto 0 0;
  width: 12px;
  background: linear-gradient(90deg,#090807,#8a6434,#21190f);
}

.cw-notebook-inner {
  height: 100%;
  border: 1px solid rgba(198,163,106,.55);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 22px 12px;
}

.cw-notebook-top,
.cw-notebook-caption,
.cw-notebook-page {
  font-size: 7px;
  letter-spacing: .20em;
  color: #d5b57c;
}

.cw-notebook-symbol {
  color: #c6a36a;
  font-size: 43px;
  animation: cwOrbit 24s linear infinite;
}

.cw-notebook-title {
  font-family: "Playfair Display", Georgia, serif;
  font-size: clamp(1.5rem,2.7vw,2.6rem);
  line-height: 1.15;
  color: #f0d9ac;
}

.cw-notebook-rule {
  width: 50px;
  height: 1px;
  background: #9c7b4d;
}

.cw-notebook-quote {
  font: italic 12px Georgia,serif;
  line-height: 1.6;
  color: #cbb698;
}

.cw-paper {
  position: absolute;
  width: 43%;
  height: 55%;
  right: 3%;
  bottom: 1%;
  z-index: 5;
  background: #eee5d4;
  border-radius: 3px;
  padding: 23px 17px;
  transform: rotate(8deg);
  box-shadow: 15px 25px 45px rgba(0,0,0,.55);
  animation: cwPaperFloat 6s ease-in-out infinite;
}

.cw-paper-header {
  font-size: 8px;
  letter-spacing: .17em;
  color: #998061;
  padding-bottom: 10px;
  border-bottom: 1px solid #c5b69e;
}

.cw-paper-title {
  margin-top: 24px;
  font: italic clamp(1.15rem,2.4vw,2rem) Georgia,serif;
  line-height: 1.2;
  color: #34271b;
}

.cw-paper-lines {
  margin-top: 23px;
  display: flex;
  flex-direction: column;
  gap: 11px;
}

.cw-paper-lines span {
  height: 2px;
  background: rgba(117,100,77,.25);
  width: 100%;
}

.cw-paper-lines span:nth-child(2) { width: 90%; }
.cw-paper-lines span:nth-child(3) { width: 96%; }
.cw-paper-lines span:nth-child(4) { width: 75%; }
.cw-paper-lines span:nth-child(5) { width: 55%; }

.cw-paper-signature {
  margin-top: 20px;
  font: italic 10px Georgia,serif;
  color: #987544;
}

.cw-floating-note {
  position: absolute;
  z-index: 7;
  border: 1px solid rgba(198,163,106,.3);
  background: rgba(20,17,14,.95);
  backdrop-filter: blur(12px);
  color: #eee3d2;
  border-radius: 13px;
  padding: 12px 15px;
  box-shadow: 0 15px 35px rgba(0,0,0,.4);
}

.cw-note-one {
  top: 1%;
  left: 0;
  font-size: 11px;
  animation: cwPaperFloat 5s ease-in-out infinite;
}

.cw-note-one span {
  color: #c6a36a;
  margin-right: 7px;
}

.cw-note-two {
  bottom: 2%;
  left: 2%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  animation: cwPaperFloat 6s ease-in-out infinite reverse;
}

.cw-note-two span {
  color: #c6a36a;
  font-size: 9px;
  letter-spacing: .1em;
}

.cw-note-two strong {
  font: italic 15px Georgia,serif;
}

.cw-desk-star {
  position: absolute;
  right: 2%;
  top: 13%;
  font-size: 37px;
  color: #c6a36a;
  animation: cwOrbit 25s linear infinite;
}

/* MOVING STRIP */

.cw-marquee {
  background: #c6a36a;
  overflow: hidden;
  padding: 15px 0;
}

.cw-marquee-track {
  display: flex;
  width: max-content;
  animation: cwMarquee 35s linear infinite;
}

.cw-marquee-group {
  display: flex;
  align-items: center;
  gap: 31px;
  padding-right: 31px;
  flex-shrink: 0;
}

.cw-marquee-group span {
  display: flex;
  align-items: center;
  gap: 31px;
  font-family: Georgia,serif;
  color: #251b11;
  font-size: 20px;
  white-space: nowrap;
  letter-spacing: .06em;
}

.cw-marquee-group i {
  font-size: 14px;
  font-style: normal;
}

.cw-marquee:hover .cw-marquee-track {
  animation-play-state: paused;
}

/* SECTION HEADINGS */

.cw-section-heading {
  max-width: 750px;
  margin-bottom: 39px;
}

.cw-eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .2em;
  color: #c6a36a;
}

.cw-eyebrow span {
  width: 29px;
  height: 1px;
  background: currentColor;
}

.cw-section-heading h2 {
  font-size: clamp(2.3rem,4.2vw,4.25rem);
  line-height: 1.13;
  margin: 22px 0 20px;
}

.cw-section-heading > p {
  color: #aba198;
  line-height: 1.8;
  max-width: 610px;
  font-size: 14px;
}

.cw-heading-dark h2 { color: #221b15; }
.cw-heading-dark .cw-eyebrow { color: #977444; }
.cw-heading-dark > p { color: #766a5d; }
.cw-heading-dark em { color: #a17b43; }

/* INTRO */

.cw-intro {
  background: #f2ecdf;
  color: #231b15;
}

.cw-intro-grid {
  display: grid;
  grid-template-columns: .95fr 1.05fr;
  gap: 75px;
  align-items: center;
}

.cw-intro-visual {
  position: relative;
}

.cw-image-frame {
  overflow: hidden;
  border-radius: 17px;
  border: 9px solid #e7dbc7;
  box-shadow: 0 25px 60px rgba(53,36,14,.15);
}

.cw-image-frame img {
  width: 100%;
  aspect-ratio: 5/4;
  object-fit: cover;
  transition: transform .85s ease, filter .85s;
}

.cw-image-frame:hover img {
  transform: scale(1.07);
  filter: sepia(.25);
}

.cw-image-caption {
  position: absolute;
  right: -10px;
  bottom: -21px;
  padding: 15px 20px;
  background: #211a13;
  border-radius: 9px;
  color: #eee5d7;
  font-size: 10px;
  letter-spacing: .13em;
  box-shadow: 0 15px 35px rgba(0,0,0,.2);
}

.cw-image-caption span {
  color: #c6a36a;
  margin-right: 8px;
}

.cw-intro-copy {
  color: #74685d;
  font-size: 14px;
  line-height: 1.9;
}

.cw-intro-features {
  display: grid;
  grid-template-columns: repeat(2,minmax(0,1fr));
  gap: 10px;
  margin-top: 26px;
}

.cw-intro-features > div {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fffaf2;
  border: 1px solid #e4d9c8;
  border-radius: 9px;
  padding: 14px;
  font-size: 12px;
  font-weight: 600;
}

.cw-intro-features span { color: #a47e48; }

/* SERVICE CARDS */

.cw-services {
  background: #12100e;
  scroll-margin-top: 110px;
}

.cw-services-grid {
  display: grid;
  grid-template-columns: repeat(3,minmax(0,1fr));
  gap: 18px;
}

.cw-service-card {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #3c3022;
  border-radius: 15px;
  overflow: hidden;
  background: #1d1914;
  transition:
    transform .45s,
    border-color .45s,
    box-shadow .45s;
}

.cw-service-card:hover {
  transform: translateY(-8px);
  border-color: #b18c55;
  box-shadow: 0 23px 55px rgba(198,163,106,.11);
}

.cw-service-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 21px;
  color: #c6a36a;
  font-size: 10px;
  letter-spacing: .13em;
}

.cw-card-icon {
  font-size: 23px;
  transition: transform .5s;
}

.cw-service-card:hover .cw-card-icon {
  transform: rotate(45deg);
}

.cw-service-photo {
  height: 166px;
  position: relative;
  overflow: hidden;
}

.cw-service-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 36%;
  filter: brightness(.65) sepia(.14);
  transition: transform .75s, filter .75s;
}

.cw-service-card:hover .cw-service-photo img {
  transform: scale(1.1);
  filter: brightness(.9);
}

.cw-photo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg,#1d1914,transparent 85%);
}

.cw-service-bottom {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 23px;
}

.cw-service-type {
  color: #c6a36a;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .15em;
}

.cw-service-bottom h3 {
  color: #f5eee3;
  font-size: 24px;
  margin: 10px 0 11px;
}

.cw-service-bottom p {
  color: #a79b8e;
  font-size: 12px;
  line-height: 1.8;
  flex: 1;
}

.cw-service-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #453829;
  padding-top: 15px;
  margin-top: 23px;
  color: #d1ac76;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .1em;
}

.cw-service-link span:last-child {
  font-size: 19px;
  transition: transform .3s;
}

.cw-service-card:hover .cw-service-link span:last-child {
  transform: translate(4px,-4px);
}

/* STATEMENT */

.cw-statement {
  position: relative;
  background: #292016;
  overflow: hidden;
  text-align: center;
  padding: 90px 0;
}

.cw-statement-glow {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      ellipse at center,
      rgba(198,163,106,.15),
      transparent 70%
    );
  animation: cwBreathe 7s ease-in-out infinite;
}

.cw-statement .cw-container { position: relative; }

.cw-statement-kicker {
  font-size: 10px;
  color: #d3b17b;
  letter-spacing: .22em;
  font-weight: 700;
}

.cw-statement h2 {
  font-size: clamp(2.3rem,4.5vw,4.75rem);
  line-height: 1.2;
  margin: 26px 0;
}

.cw-statement-line {
  width: 66px;
  height: 1px;
  margin: 24px auto;
  background: #c6a36a;
}

.cw-statement p {
  color: #b4a798;
  font-size: 14px;
  line-height: 1.8;
}

/* INTERACTIVE LAB */

.cw-lab-section {
  background: #f3ede2;
}

.cw-lab {
  display: grid;
  grid-template-columns: .8fr 1.2fr;
  background: #fffaf3;
  border: 1px solid #dfd1bb;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 25px 65px rgba(71,48,19,.1);
}

.cw-lab-left {
  min-height: 480px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  background: #1d1712;
  color: #e9dcc9;
  position: relative;
  overflow: hidden;
}

.cw-lab-topline,
.cw-lab-art-footer {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-size: 9px;
  letter-spacing: .12em;
  color: #c6a36a;
  position: relative;
  z-index: 2;
}

.cw-lab-art {
  position: relative;
  display: grid;
  place-items: center;
  flex: 1;
  min-height: 290px;
}

.cw-lab-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(198,163,106,.3);
}

.cw-ring-one {
  width: 250px;
  height: 250px;
  animation: cwOrbit 60s linear infinite;
}

.cw-ring-two {
  width: 185px;
  height: 185px;
  border-style: dashed;
  animation: cwOrbit 42s linear infinite reverse;
}

.cw-lab-big-symbol {
  font-size: 110px;
  color: #c6a36a;
  animation: cwOrbit 30s linear infinite;
  text-shadow: 0 0 45px rgba(198,163,106,.22);
}

.cw-lab-art-caption {
  position: absolute;
  left: 5px;
  bottom: 4px;
  color: #b5a085;
  font-family: Georgia,serif;
  font-style: italic;
  font-size: 18px;
  line-height: 1.25;
}

.cw-lab-right {
  padding: 38px;
  color: #241c15;
  min-width: 0;
}

.cw-lab-eyebrow {
  color: #947244;
  letter-spacing: .18em;
  font-size: 10px;
  font-weight: 700;
}

.cw-lab-right h3 {
  font-size: clamp(2rem,3vw,3.15rem);
  line-height: 1.2;
  margin: 17px 0;
}

.cw-lab-right em {
  color: #a67d45;
}

.cw-lab-description {
  color: #796f62;
  font-size: 13px;
  line-height: 1.8;
}

.cw-genre-pills {
  display: flex;
  gap: 7px;
  flex-wrap: wrap;
  margin: 24px 0;
}

.cw-genre-pills button {
  border: 1px solid #dfd2c0;
  background: #f3eee5;
  color: #695b48;
  padding: 9px 12px;
  border-radius: 99px;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .06em;
  transition: all .25s;
}

.cw-genre-pills button:hover {
  border-color: #9f8050;
}

.cw-genre-pills button.active {
  color: #fff4e5;
  background: #251c13;
  border-color: #b4935c;
}

.cw-idea-card {
  background: #f4ecdd;
  border: 1px solid #dac8aa;
  border-left: 3px solid #b08a52;
  border-radius: 9px;
  padding: 22px;
  min-height: 190px;
  transition: opacity .2s, transform .2s;
}

.cw-idea-card.is-changing {
  opacity: 0;
  transform: translateY(9px);
}

.cw-idea-card-top {
  display: flex;
  justify-content: space-between;
  color: #94734b;
  font-size: 9px;
  letter-spacing: .14em;
}

.cw-idea-card h4 {
  font-size: 22px;
  margin: 14px 0 9px;
}

.cw-idea-card p {
  font: italic 14px/1.8 Georgia,serif;
  color: #5f5245;
}

.cw-idea-mood {
  font-size: 10px;
  margin-top: 16px;
  color: #987a52;
}

.cw-lab-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
}

.cw-lab-actions button {
  border: 0;
  background: #241b13;
  color: #f5e6ce;
  border-radius: 50px;
  padding: 12px 17px;
  display: inline-flex;
  align-items: center;
  gap: 17px;
  font-size: 11px;
  font-weight: 700;
  transition: transform .3s, background .3s;
}

.cw-lab-actions button:hover {
  transform: translateY(-3px);
  background: #59412a;
}

.cw-lab-actions > span {
  color: #9d8c76;
  font-size: 9px;
  letter-spacing: .09em;
  text-align: right;
}

/* PROCESS */

.cw-process {
  background: #14110e;
}

.cw-process-grid {
  display: grid;
  grid-template-columns: repeat(4,minmax(0,1fr));
  gap: 13px;
}

.cw-process-card {
  height: 100%;
  padding: 27px 23px;
  border: 1px solid #453625;
  border-radius: 12px;
  background: #1d1914;
  transition: transform .4s, border-color .4s;
}

.cw-process-card:hover {
  transform: translateY(-6px);
  border-color: #bc985d;
}

.cw-process-number {
  color: #c6a36a;
  font: italic 38px Georgia,serif;
}

.cw-process-rule {
  height: 1px;
  background: #493b2b;
  margin: 18px 0;
}

.cw-process-card h3 {
  font-size: 23px;
  margin-bottom: 12px;
}

.cw-process-card p {
  color: #a59a8c;
  font-size: 12px;
  line-height: 1.85;
}

/* FINAL CTA */

.cw-final {
  position: relative;
  text-align: center;
  padding: 95px 0;
  background: #c6a36a;
  color: #22180f;
  overflow: hidden;
}

.cw-final-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  border: 1px solid rgba(67,43,17,.16);
  transform: translate(-50%,-50%);
  box-shadow:
    0 0 0 75px rgba(255,255,255,.04),
    0 0 0 150px rgba(255,255,255,.03);
}

.cw-final .cw-container { position: relative; }

.cw-final-kicker {
  font-size: 10px;
  letter-spacing: .22em;
  font-weight: 700;
}

.cw-final h2 {
  font-size: clamp(2.7rem,5vw,5rem);
  line-height: 1.12;
  margin: 25px auto;
}

.cw-final h2 em {
  color: #644621;
}

.cw-final p {
  max-width: 560px;
  margin: auto;
  color: #513b24;
  font-size: 14px;
  line-height: 1.85;
}

.cw-final-button {
  display: inline-flex;
  align-items: center;
  gap: 24px;
  background: #21180f;
  color: #f7eadd;
  border-radius: 50px;
  padding: 11px 12px 11px 22px;
  font-size: 12px;
  font-weight: 700;
  margin-top: 28px;
  transition: transform .3s,box-shadow .3s;
}

.cw-final-button span {
  display: grid;
  place-items: center;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background: #4b3824;
}

.cw-final-button:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 35px rgba(40,23,9,.25);
}

/* ANIMATIONS */

@keyframes cwPulse {
  70% {
    box-shadow: 0 0 0 9px rgba(198,163,106,0);
  }
}

@keyframes cwGoldShift {
  to { background-position: 100% 50%; }
}

@keyframes cwBreathe {
  50% { opacity: .55; transform: scale(1.05); }
}

@keyframes cwOrbit {
  to { rotate: 360deg; }
}

@keyframes cwBookFloat {
  50% {
    translate: 0 -10px;
  }
}

@keyframes cwPaperFloat {
  50% {
    translate: 0 11px;
  }
}

@keyframes cwMarquee {
  to { transform: translateX(-50%); }
}

/* RESPONSIVE — TABLET */

@media (max-width: 1000px) {
  .cw-hero-grid { gap: 15px; }
  .cw-desk { height: 400px; }
  .cw-intro-grid { gap: 40px; }
  .cw-process-grid {
    grid-template-columns: repeat(2,minmax(0,1fr));
  }
}

/* RESPONSIVE — SMALL TABLET */

@media (max-width: 760px) {
  .cw-container {
    width: min(100% - 36px,650px);
  }

  .cw-section { padding: 75px 0; }

  .cw-hero {
    padding: 130px 0 65px;
    min-height: auto;
  }

  .cw-hero-grid {
    grid-template-columns: 1fr;
  }

  .cw-hero h1 {
    font-size: clamp(3rem,8vw,4.8rem);
  }

  .cw-desk {
    height: 460px;
    max-width: 510px;
    margin: 15px auto 0;
  }

  .cw-intro-grid {
    grid-template-columns: 1fr;
  }

  .cw-intro-visual {
    max-width: 550px;
  }

  .cw-services-grid {
    grid-template-columns: repeat(2,minmax(0,1fr));
  }

  .cw-lab {
    grid-template-columns: 1fr;
  }

  .cw-lab-left {
    min-height: 310px;
  }

  .cw-lab-art {
    min-height: 230px;
  }

  .cw-section-heading h2 {
    font-size: clamp(2.25rem,6vw,3.4rem);
  }
}

/* RESPONSIVE — MOBILE */

@media (max-width: 500px) {
  .cw-container {
    width: calc(100% - 32px);
  }

  .cw-section { padding: 65px 0; }

  .cw-hero {
    padding: 125px 0 40px;
  }

  .cw-hero h1 {
    font-size: clamp(2.85rem,10.5vw,4rem);
  }

  .cw-hero-description {
    font-size: 14px;
    line-height: 1.8;
  }

  .cw-actions { gap: 10px; }

  .cw-primary-button,
  .cw-secondary-button {
    font-size: 11px;
  }

  .cw-hero-meta {
    gap: 10px;
    font-size: 8px;
  }

  .cw-desk {
    height: 345px;
  }

  .cw-notebook {
    padding: 9px;
  }

  .cw-notebook-inner {
    padding: 14px 8px;
  }

  .cw-notebook-symbol {
    font-size: 30px;
  }

  .cw-notebook-title {
    font-size: 1.5rem;
  }

  .cw-notebook-quote {
    font-size: 9px;
  }

  .cw-paper {
    padding: 15px 11px;
  }

  .cw-paper-title {
    margin-top: 16px;
    font-size: 1.1rem;
  }

  .cw-paper-lines {
    gap: 8px;
    margin-top: 13px;
  }

  .cw-paper-signature {
    margin-top: 12px;
    font-size: 8px;
  }

  .cw-floating-note {
    padding: 9px 10px;
  }

  .cw-note-one { font-size: 9px; }

  .cw-note-two strong { font-size: 11px; }

  .cw-intro-features {
    grid-template-columns: 1fr 1fr;
  }

  .cw-intro-features > div {
    font-size: 10px;
    padding: 11px;
  }

  .cw-services-grid {
    grid-template-columns: 1fr;
  }

  .cw-service-photo { height: 180px; }

  .cw-service-bottom { padding: 21px; }

  .cw-service-bottom h3 {
    font-size: 23px;
  }

  .cw-statement {
    padding: 75px 0;
  }

  .cw-lab-right {
    padding: 25px 20px;
  }

  .cw-lab-left {
    min-height: 280px;
  }

  .cw-lab-right h3 {
    font-size: 2rem;
  }

  .cw-lab-actions {
    align-items: flex-start;
    flex-direction: column;
  }

  .cw-lab-actions > span { text-align: left; }

  .cw-process-grid {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .cw-process-card {
    padding: 20px 15px;
  }

  .cw-process-number { font-size: 29px; }

  .cw-process-card h3 { font-size: 20px; }

  .cw-process-card p { font-size: 11px; }

  .cw-final {
    padding: 75px 0;
  }

  .cw-final h2 {
    font-size: clamp(2.5rem,9vw,3.6rem);
  }
}

/* ACCESSIBILITY */

.cw-page a:focus-visible,
.cw-page button:focus-visible {
  outline: 2px solid #c6a36a;
  outline-offset: 4px;
}

@media (hover:none),(pointer:coarse) {
  .cw-cursor { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  .cw-page *,
  .cw-page *::before,
  .cw-page *::after {
    animation: none !important;
    transition-duration: .01ms !important;
    scroll-behavior: auto !important;
  }

  .cw-cursor { display: none; }
}
`;
