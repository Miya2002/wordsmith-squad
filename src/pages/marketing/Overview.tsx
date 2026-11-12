
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/components/ui";

import ember from "@/assets/covers/ember.jpg";
import salt from "@/assets/covers/salt.jpg";
import empire from "@/assets/covers/empire.jpg";
import letters from "@/assets/covers/letters.jpg";
import cartographer from "@/assets/covers/cartographer.jpg";

const GOLD = "#c6a36a";

const campaigns = [
  {
    book: "A Crown of Ember and Ash",
    type: "Fantasy campaign",
    line: "A world waiting to be discovered.",
    image: ember,
    background: "#3b2415",
  },
  {
    book: "Salt in the Lantern Light",
    type: "Literary campaign",
    line: "Some stories stay with us.",
    image: salt,
    background: "#4b392b",
  },
  {
    book: "The Quiet Empire",
    type: "Business campaign",
    line: "Big ideas deserve a bigger stage.",
    image: empire,
    background: "#51483a",
  },
  {
    book: "The Cartographer",
    type: "Adventure campaign",
    line: "Every journey begins somewhere.",
    image: cartographer,
    background: "#352c24",
  },
];

const services = [
  {
    num: "01",
    title: "Book Marketing",
    label: "THE BIG PICTURE",
    description:
      "A distinctive marketing direction that brings your book, audience, and message into focus.",
    image: ember,
    url: "/marketing/book-marketing",
  },
  {
    num: "02",
    title: "Author Branding",
    label: "BUILD YOUR IDENTITY",
    description:
      "Create a memorable author presence through expressive messaging, visual identity, and consistency.",
    image: salt,
    url: "/marketing/author-branding",
  },
  {
    num: "03",
    title: "Social Media Promotion",
    label: "SPARK CONVERSATIONS",
    description:
      "Introduce your story through engaging social content and creative campaigns that connect with readers.",
    image: letters,
    url: "/marketing/social-media-promotion",
  },
  {
    num: "04",
    title: "Book Launch Campaigns",
    label: "MAKE AN ENTRANCE",
    description:
      "Turn your publication into a coordinated launch experience, from anticipation to release.",
    image: cartographer,
    url: "/marketing/book-launch-campaigns",
  },
  {
    num: "05",
    title: "Amazon Book Promotion",
    label: "BE DISCOVERED",
    description:
      "Explore marketplace visibility, promotional opportunities, and stronger book presentation.",
    image: empire,
    url: "/marketing/amazon-book-promotion",
  },
];

const stages = [
  {
    title: "Discover",
    eyebrow: "01 / RESEARCH",
    text: "Understand the readers, genre, positioning, and promise of your book.",
    note: "Every remarkable campaign begins with understanding.",
  },
  {
    title: "Create",
    eyebrow: "02 / CRAFT",
    text: "Shape the visual direction, campaign language, and promotional assets.",
    note: "Make your book's personality impossible to overlook.",
  },
  {
    title: "Launch",
    eyebrow: "03 / ACTIVATE",
    text: "Coordinate your release communications, creative moments, and outreach.",
    note: "Give your story an introduction worth remembering.",
  },
  {
    title: "Evolve",
    eyebrow: "04 / REFINE",
    text: "Review feedback, assess campaign signals, and refine the next steps.",
    note: "The final page is only the beginning.",
  },
];

/* Scroll-triggered animation observer */
function useScrollReveals() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(
      ".mkx .mk-reveal"
    );

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduced || !("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("mk-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("mk-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);
}

/* Mouse-following gold spotlight */
function useCursorLight() {
  const cursor = useRef<HTMLDivElement>(null);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (raf.current !== null) cancelAnimationFrame(raf.current);
    };
  }, []);

  const move = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") return;
    if (raf.current !== null) cancelAnimationFrame(raf.current);

    const x = event.clientX;
    const y = event.clientY;

    raf.current = requestAnimationFrame(() => {
      if (cursor.current) {
        cursor.current.style.transform =
          `translate3d(${x - 190}px, ${y - 190}px, 0)`;
        cursor.current.style.opacity = "1";
      }
      raf.current = null;
    });
  };

  const leave = () => {
    if (cursor.current) cursor.current.style.opacity = "0";
  };

  return { cursor, move, leave };
}

/* Reusable section label */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="mk-label">
      <span className="mk-label-line" />
      {children}
    </div>
  );
}

/* 3D book visual */
function FloatingBook({
  src,
  className = "",
  alt,
}: {
  src: string;
  className?: string;
  alt: string;
}) {
  return (
    <div className={`mk-book ${className}`}>
      <div className="mk-book-spine" />
      <img src={src} alt={alt} />
      <div className="mk-book-glint" />
    </div>
  );
}

/* Cinematic hero */
function MarketingHero() {
  const stageRef = useRef<HTMLDivElement>(null);

  const tilt = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || !stageRef.current) return;

    const r = stageRef.current.getBoundingClientRect();
    const x = (event.clientX - r.left) / r.width - 0.5;
    const y = (event.clientY - r.top) / r.height - 0.5;

    stageRef.current.style.setProperty("--rx", `${-y * 9}deg`);
    stageRef.current.style.setProperty("--ry", `${x * 11}deg`);
  };

  const reset = () => {
    stageRef.current?.style.setProperty("--rx", "0deg");
    stageRef.current?.style.setProperty("--ry", "0deg");
  };

  return (
    <section className="mk-hero">
      <div className="mk-hero-grain" />
      <div className="mk-hero-halo" />

      <div className="mk-container mk-hero-grid">
        <div className="mk-hero-copy">
          <div className="mk-reveal">
            <div className="mk-pill">
              <span className="mk-pulse" />
              THE WORDSMITH MARKETING STUDIO
            </div>
          </div>

          <h1 className="mk-hero-title mk-reveal">
            Great Stories
            <br />
            Deserve to
            <br />
            <em>Be Seen.</em>
          </h1>

          <p className="mk-hero-description mk-reveal">
            Your book is more than a publication.
            It's a world, a vision, an experience.
            We create beautiful marketing journeys
            that introduce your story to the readers
            who will connect with it.
          </p>

          <div className="mk-hero-actions mk-reveal">
            <Link to="/contact" className="mk-button-gold">
              Market My Book
              <span>↗</span>
            </Link>

            <a href="#mk-services" className="mk-button-outline">
              Explore Expertise
              <span>↘</span>
            </a>
          </div>

          <div className="mk-hero-footer mk-reveal">
            <span>✦ CREATIVE STRATEGY</span>
            <span>✦ AUTHOR BRANDING</span>
            <span>✦ CAMPAIGN DESIGN</span>
          </div>
        </div>

        <div
          className="mk-hero-visual"
          ref={stageRef}
          onPointerMove={tilt}
          onPointerLeave={reset}
        >
          <div className="mk-orbit mk-orbit-one" />
          <div className="mk-orbit mk-orbit-two" />
          <div className="mk-visual-stage">
            <FloatingBook
              src={salt}
              alt="Salt in the Lantern Light concept cover"
              className="mk-hero-book mk-book-back"
            />
            <FloatingBook
              src={ember}
              alt="A Crown of Ember and Ash concept cover"
              className="mk-hero-book mk-book-center"
            />
            <FloatingBook
              src={empire}
              alt="The Quiet Empire concept cover"
              className="mk-hero-book mk-book-front"
            />

            <div className="mk-float-card mk-float-top">
              <span className="mk-card-symbol">✦</span>
              <div>
                <strong>Creative campaign</strong>
                <small>Designed to be remembered</small>
              </div>
            </div>

            <div className="mk-float-card mk-float-bottom">
              <span className="mk-signal">
                <i />
                <i />
                <i />
                <i />
                <i />
              </span>
              <div>
                <strong>Beyond the bookshelf</strong>
                <small>Your story, amplified</small>
              </div>
            </div>

            <div className="mk-hero-stamp">
              W<span>✦</span>S
            </div>
          </div>
        </div>
      </div>

      <div className="mk-hero-bottomline" />
    </section>
  );
}

/* Auto-transitioning campaign carousel */
function CampaignShowcase() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % campaigns.length);
    }, 4800);

    return () => window.clearInterval(timer);
  }, [playing]);

  return (
    <div className="mk-showcase">
      <div className="mk-showcase-top">
        <span>CAMPAIGN CONCEPTS</span>
        <span>
          {String(active + 1).padStart(2, "0")} / 04
        </span>
      </div>

      <div className="mk-showcase-main">
        {campaigns.map((campaign, index) => (
          <div
            key={campaign.book}
            className={`mk-showcase-slide ${
              active === index ? "mk-slide-active" : ""
            }`}
            aria-hidden={active !== index}
            style={
              {
                "--slide-accent": campaign.background,
              } as React.CSSProperties
            }
          >
            <div className="mk-slide-ambient" />

            <div className="mk-slide-book-wrap">
              <FloatingBook
                src={campaign.image}
                alt={campaign.book}
                className="mk-slide-book"
              />
            </div>

            <div className="mk-slide-copy">
              <span className="mk-slide-tag">{campaign.type}</span>
              <h3>{campaign.line}</h3>
              <p>
                An editorial marketing concept crafted
                around a unique book identity.
              </p>
              <div className="mk-slide-rule" />
              <span className="mk-slide-brand">
                WORDSMITH SQUAD / CREATIVE STUDIO
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mk-showcase-controls">
        <div className="mk-showcase-dots">
          {campaigns.map((campaign, index) => (
            <button
              key={campaign.book}
              type="button"
              className={`mk-dot ${active === index ? "is-active" : ""}`}
              aria-label={`Show ${campaign.book}`}
              aria-pressed={active === index}
              onClick={() => setActive(index)}
            />
          ))}
        </div>

        <div className="mk-showcase-buttons">
          <button
            onClick={() => setPlaying((v) => !v)}
            aria-label={playing ? "Pause slideshow" : "Play slideshow"}
          >
            {playing ? "Ⅱ" : "▶"}
          </button>
          <button
            onClick={() =>
              setActive((v) => (v + campaigns.length - 1) % campaigns.length)
            }
            aria-label="Previous campaign"
          >
            ←
          </button>
          <button
            onClick={() => setActive((v) => (v + 1) % campaigns.length)}
            aria-label="Next campaign"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

/* Interactive marketing service tile */
function ServiceTile({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const move = (e: PointerEvent<HTMLAnchorElement>) => {
    if (e.pointerType !== "mouse" || !ref.current) return;

    const r = ref.current.getBoundingClientRect();

    ref.current.style.setProperty("--cx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--cy", `${e.clientY - r.top}px`);
  };

  return (
    <Link
      ref={ref}
      to={service.url}
      onPointerMove={move}
      className="mk-service mk-reveal"
      style={{ transitionDelay: `${(index % 3) * 110}ms` }}
    >
      <div className="mk-service-light" />

      <div className="mk-service-image">
        <img src={service.image} alt={`${service.title} campaign concept`} />
        <div className="mk-service-image-shade" />
        <span className="mk-service-number">{service.num}</span>
      </div>

      <div className="mk-service-content">
        <span className="mk-service-label">{service.label}</span>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <div className="mk-service-bottom">
          <span>EXPLORE SERVICE</span>
          <span className="mk-service-arrow">↗</span>
        </div>
      </div>
    </Link>
  );
}

/* Interactive strategy flow */
function StrategyFlow() {
  const [selected, setSelected] = useState(0);
  const current = stages[selected];

  return (
    <div className="mk-strategy-grid">
      <div className="mk-strategy-nav">
        {stages.map((stage, index) => (
          <button
            key={stage.title}
            onClick={() => setSelected(index)}
            className={`mk-strategy-option ${
              selected === index ? "selected" : ""
            }`}
            aria-pressed={selected === index}
          >
            <span>0{index + 1}</span>
            <strong>{stage.title}</strong>
            <span>↗</span>
          </button>
        ))}
      </div>

      <div className="mk-strategy-panel">
        <div className="mk-strategy-grid-lines" />

        <div key={selected} className="mk-strategy-inner">
          <span className="mk-strategy-eyebrow">{current.eyebrow}</span>
          <h3>{current.title}<em>.</em></h3>
          <p>{current.text}</p>

          <div className="mk-strategy-quote">
            <span>“</span>
            {current.note}
          </div>

          <div className="mk-strategy-progress">
            <div>
              <span>THE CREATIVE JOURNEY</span>
              <span>0{selected + 1} / 04</span>
            </div>
            <div className="mk-progress-track">
              <div style={{ width: `${(selected + 1) * 25}%` }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Main page */
export default function Overview() {
  usePageMeta(
    "Luxury Book Marketing Services | Wordsmith Squad",
    "Creative book marketing, author branding, promotional campaigns, social media and Amazon book promotion."
  );

  useScrollReveals();
  const { cursor, move, leave } = useCursorLight();

  return (
    <main
      className="mkx"
      onPointerMove={move}
      onPointerLeave={leave}
    >
      <style>{styles}</style>

      <div className="mk-cursor" ref={cursor} aria-hidden="true" />

      <MarketingHero />

      {/* Moving gold typography */}
      <div className="mk-marquee-band" aria-label="Discover, connect, inspire, launch">
        <div className="mk-marquee-track" aria-hidden="true">
          {[0, 1].map((group) => (
            <div className="mk-marquee-group" key={group}>
              {["DISCOVER", "CONNECT", "INSPIRE", "LAUNCH", "BE REMEMBERED"].map(
                (word) => (
                  <span key={word}>
                    {word} <i>✦</i>
                  </span>
                )
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Campaign gallery */}
      <section className="mk-section mk-dark mk-campaign-section">
        <div className="mk-container">
          <div className="mk-section-head mk-reveal">
            <Label>THE ART OF VISIBILITY</Label>
            <h2>
              A Book Is a Story.
              <br />
              A Campaign Is an <em>Experience.</em>
            </h2>
            <p>
              Thoughtful visuals, compelling messaging, and a distinct creative
              direction help your book become more than another title on a shelf.
            </p>
          </div>
          <div className="mk-reveal">
            <CampaignShowcase />
          </div>
        </div>
      </section>

      {/* Editorial statement */}
      <section className="mk-editorial">
        <div className="mk-container mk-editorial-grid">
          <div className="mk-reveal">
            <Label>BEYOND THE LAST PAGE</Label>
            <h2>
              You Wrote
              <br />
              the Story.
              <br />
              <em>Let's Make It Heard.</em>
            </h2>
          </div>

          <div className="mk-editorial-side mk-reveal">
            <div className="mk-editorial-symbol">✳</div>
            <p>
              Powerful marketing is not about being everywhere. It's about
              creating the right impression, speaking to the right readers,
              and helping your story find its place in the world.
            </p>
            <Link to="/contact">
              DISCUSS YOUR BOOK <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Service gallery */}
      <section id="mk-services" className="mk-section mk-services-section">
        <div className="mk-container">
          <div className="mk-section-head mk-reveal">
            <Label>OUR MARKETING EXPERTISE</Label>
            <h2>
              Every Great Book
              <br />
              Needs the Right <em>Spotlight.</em>
            </h2>
            <p>
              Explore five ways we can help shape your book's introduction,
              identity, and promotional journey.
            </p>
          </div>

          <div className="mk-services-grid">
            {services.map((service, index) => (
              <ServiceTile key={service.url} service={service} index={index} />
            ))}

            <Link to="/contact" className="mk-service-cta mk-reveal">
              <span>THE NEXT CHAPTER</span>
              <div className="mk-cta-orb">✦</div>
              <h3>
                Let's Create
                <br />
                Something
                <br />
                <em>Remarkable.</em>
              </h3>
              <p>
                Your next campaign begins with a conversation.
              </p>
              <div>LET'S TALK <span>↗</span></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Kinetic message */}
      <section className="mk-kinetic">
        <div className="mk-kinetic-glow" />
        <div className="mk-container mk-reveal">
          <span>THE WORDSMITH PHILOSOPHY</span>
          <h2>
            DON'T JUST
            <br />
            <em>PUBLISH.</em>
            <br />
            MAKE AN
            <br />
            <strong>IMPRESSION.</strong>
          </h2>
          <div className="mk-kinetic-rule" />
          <p>
            A creative approach to reaching the people
            who will care about your work.
          </p>
        </div>
      </section>

      {/* Strategy */}
      <section className="mk-section mk-strategy-section">
        <div className="mk-container">
          <div className="mk-section-head mk-reveal">
            <Label>FROM CONCEPT TO CONNECTION</Label>
            <h2>
              Every Campaign
              <br />
              Has a <em>Story Arc.</em>
            </h2>
            <p>
              Explore our four-stage creative framework. Select a chapter
              to discover what happens along the journey.
            </p>
          </div>

          <div className="mk-reveal">
            <StrategyFlow />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mk-final">
        <div className="mk-final-orb" />
        <div className="mk-container mk-reveal">
          <span>YOUR NEXT CHAPTER BEGINS HERE</span>
          <h2>
            The World Is
            <br />
            Waiting for
            <br />
            <em>Your Story.</em>
          </h2>
          <p>
            You've created something worth sharing.
            Let's give it an introduction worth remembering.
          </p>
          <Link to="/contact" className="mk-final-button">
            START YOUR MARKETING JOURNEY <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

/* All styling belongs to this page */
const styles = `
.mkx {
  --mk-gold: #c6a36a;
  --mk-ivory: #f4efe6;
  --mk-dark: #0e0c0a;
  background: var(--mk-dark);
  color: var(--mk-ivory);
  overflow: clip;
  isolation: isolate;
  position: relative;
  font-family: Inter, sans-serif;
}
.mkx * { box-sizing: border-box; }
.mkx a { text-decoration: none; }
.mk-container {
  width: min(100% - 48px, 1420px);
  margin-inline: auto;
}
.mkx h1,.mkx h2,.mkx h3 {
  font-family: "Playfair Display", Georgia, serif;
  letter-spacing: -.045em;
}
.mkx em { font-weight: 400; color: var(--mk-gold); }
.mk-section { padding: 128px 0; }
.mk-dark { background: #11100e; }
.mk-label {
  display: inline-flex;
  align-items: center;
  gap: 13px;
  color: #c6a36a;
  font-size: 11px;
  letter-spacing: .22em;
  font-weight: 700;
}
.mk-label-line { width: 33px; height: 1px; background: currentColor; }
.mk-section-head { max-width: 920px; margin-bottom: 60px; }
.mk-section-head h2 {
  font-size: clamp(2.5rem,5vw,5.6rem);
  line-height: 1.12;
  margin: 25px 0;
}
.mk-section-head p {
  max-width: 670px;
  color: #a59d94;
  line-height: 1.9;
  font-size: 16px;
}

/* Reveal transitions */
.mk-reveal {
  opacity: 0;
  transform: translateY(45px);
  filter: blur(7px);
  transition: opacity .85s ease, transform .95s cubic-bezier(.2,.8,.2,1), filter .9s ease;
}
.mk-reveal.mk-visible {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

/* Gold follower */
.mk-cursor {
  position: fixed;
  width: 380px;
  height: 380px;
  top: 0;
  left: 0;
  z-index: 30;
  pointer-events: none;
  opacity: 0;
  border-radius: 50%;
  background: radial-gradient(circle,rgba(210,167,91,.19),rgba(210,167,91,.055) 38%,transparent 73%);
  transition: opacity .3s ease;
  will-change: transform;
}

/* Hero */
.mk-hero {
  min-height: 850px;
  display: flex;
  align-items: center;
  position: relative;
  padding: 150px 0 95px;
  overflow: hidden;
  background: radial-gradient(ellipse at 78% 45%,#292015 0%,#0d0c0a 55%,#090909 100%);
}
.mk-hero-grain {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: radial-gradient(rgba(200,164,106,.13) .7px,transparent .7px);
  background-size: 31px 31px;
  mask-image: linear-gradient(to bottom, transparent,#000 30%,#000 70%,transparent);
}
.mk-hero-halo {
  position: absolute;
  right: -160px;
  top: 0;
  width: 820px;
  height: 820px;
  background: radial-gradient(circle,rgba(181,131,55,.12),transparent 65%);
  animation: mkBreath 7s ease-in-out infinite;
}
.mk-hero-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.05fr .95fr;
  align-items: center;
  gap: 35px;
}
.mk-pill {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  border: 1px solid rgba(198,163,106,.32);
  border-radius: 99px;
  padding: 13px 19px;
  background: rgba(198,163,106,.075);
  color: #d3b27c;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .19em;
}
.mk-pulse {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #d6b575;
  box-shadow: 0 0 0 0 rgba(214,181,117,.5);
  animation: mkPulse 2.5s infinite;
}
.mk-hero-title {
  font-size: clamp(3.5rem,6vw,7.6rem);
  line-height: 1.045;
  margin: 34px 0 30px;
}
.mk-hero-title em {
  background: linear-gradient(95deg,#ecd3a1,#ba9155,#ffe0a6);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: mkGradient 6s ease-in-out infinite alternate;
}
.mk-hero-description {
  color: #a9a29a;
  font-size: 17px;
  line-height: 1.9;
  max-width: 555px;
}
.mk-hero-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 38px; }
.mk-button-gold,.mk-button-outline {
  display: inline-flex;
  min-height: 56px;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  border-radius: 50px;
  padding: 11px 12px 11px 25px;
  font-size: 13px;
  font-weight: 700;
  transition: transform .35s, box-shadow .35s, background .35s;
}
.mk-button-gold {
  background: #c6a36a;
  color: #17110b;
  box-shadow: 0 16px 40px rgba(198,163,106,.17);
}
.mk-button-outline { color: #f4efe6; border: 1px solid #655b4f; }
.mk-button-gold span,.mk-button-outline span {
  width: 35px; height: 35px;
  display: grid; place-items: center;
  border-radius: 50%;
  background: rgba(0,0,0,.10);
  font-size: 18px;
  transition: transform .35s;
}
.mk-button-outline span { background: #292622; }
.mk-button-gold:hover,.mk-button-outline:hover { transform: translateY(-5px); }
.mk-button-gold:hover { box-shadow: 0 25px 55px rgba(198,163,106,.28); }
.mk-button-outline:hover { background: rgba(198,163,106,.10); }
.mk-button-gold:hover span,.mk-button-outline:hover span { transform: rotate(45deg); }
.mk-hero-footer {
  border-top: 1px solid rgba(255,255,255,.12);
  margin-top: 60px;
  padding-top: 22px;
  display: flex; flex-wrap: wrap; gap: 22px;
  color: #a9a19a;
  font-size: 9px; font-weight: 600; letter-spacing: .12em;
}
.mk-hero-visual {
  min-width: 0;
  height: 600px;
  perspective: 1000px;
  position: relative;
}
.mk-orbit { position: absolute; border-radius: 50%; pointer-events: none; }
.mk-orbit-one { inset: 9%; border: 1px solid rgba(198,163,106,.18); }
.mk-orbit-two {
  inset: 18%;
  border: 1px dashed rgba(198,163,106,.28);
  animation: mkSpin 85s linear infinite;
}
.mk-visual-stage {
  position: absolute; inset: 0;
  transform: rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg));
  transform-style: preserve-3d;
  transition: transform .35s ease-out;
}
.mk-book {
  position: relative;
  border-radius: 2px 6px 6px 2px;
  box-shadow: 18px 28px 50px rgba(0,0,0,.65);
  isolation: isolate;
}
.mk-book > img { width: 100%; height: 100%; object-fit: cover; border-radius: inherit; }
.mk-book-spine {
  position: absolute; inset: 0 auto 0 0; width: 8px; z-index: 2;
  background: linear-gradient(90deg,#15100c,#ad8852,#261c13);
}
.mk-book-glint {
  position: absolute; inset: 0; border-radius: inherit; pointer-events: none;
  background: linear-gradient(115deg,rgba(255,255,255,.15),transparent 35%,transparent 70%,rgba(255,255,255,.07));
}
.mk-hero-book { position: absolute; }
.mk-book-back {
  left: 5%; top: 24%; width: 39%; height: 54%;
  transform: rotate(-13deg);
  animation: mkBookBack 7s ease-in-out infinite;
}
.mk-book-center {
  left: 31%; top: 11%; width: 46%; height: 74%; z-index: 2;
  transform: rotate(3deg);
  animation: mkBookMain 6s ease-in-out infinite;
}
.mk-book-front {
  right: 0; top: 34%; width: 35%; height: 51%; z-index: 3;
  transform: rotate(12deg);
  animation: mkBookFront 8s ease-in-out infinite;
}
.mk-float-card {
  position: absolute; z-index: 5;
  display: flex; align-items: center; gap: 12px;
  padding: 13px 17px;
  border: 1px solid rgba(198,163,106,.25);
  border-radius: 17px;
  background: rgba(18,16,14,.91);
  backdrop-filter: blur(16px);
  box-shadow: 0 18px 40px rgba(0,0,0,.45);
  animation: mkFloat 6s ease-in-out infinite;
}
.mk-float-card strong { display: block; font-size: 12px; color: #eee6dc; }
.mk-float-card small { display: block; font-size: 9px; color: #b1a296; margin-top: 4px; }
.mk-card-symbol {
  width: 36px; height: 36px; border-radius: 12px;
  display: grid; place-items: center; color: #17110b; background: #c6a36a;
}
.mk-float-top { top: 5%; right: 0; }
.mk-float-bottom { bottom: 4%; left: 4%; animation-delay: -3s; }
.mk-signal { display: flex; align-items: end; gap: 3px; height: 30px; }
.mk-signal i { background: #c6a36a; width: 4px; height: 30%; border-radius: 3px; animation: mkSignal 1.3s ease-in-out infinite alternate; }
.mk-signal i:nth-child(2) { height: 55%; animation-delay: .2s; }
.mk-signal i:nth-child(3) { height: 90%; animation-delay: .4s; }
.mk-signal i:nth-child(4) { height: 65%; animation-delay: .1s; }
.mk-signal i:nth-child(5) { height: 75%; animation-delay: .3s; }
.mk-hero-stamp {
  position: absolute; z-index: 4; right: 6%; top: 22%;
  width: 65px; height: 65px; border: 1px solid #997a49;
  background: #17120d; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-family: Georgia,serif; font-size: 23px; color: #d1ae77;
  animation: mkBreath 5s ease-in-out infinite;
}
.mk-hero-stamp span { font-size: 10px; margin: 0 3px; }
.mk-hero-bottomline { position:absolute;bottom:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,#9b7948,transparent); }

/* Marquee */
.mk-marquee-band { overflow: hidden; background: #c6a36a; padding: 20px 0; }
.mk-marquee-track { display: flex; width: max-content; animation: mkMarquee 38s linear infinite; }
.mk-marquee-group { display: flex; gap: 38px; padding-right: 38px; flex: 0 0 auto; }
.mk-marquee-group span {
  display: inline-flex; align-items:center;gap:38px;white-space:nowrap;
  font: 600 26px Georgia,serif; letter-spacing: .07em; color: #241b11;
}
.mk-marquee-group i { font-size: 17px; font-style: normal; }
.mk-marquee-band:hover .mk-marquee-track { animation-play-state: paused; }

/* Campaign carousel */
.mk-campaign-section { background: #11100e; }
.mk-showcase { border: 1px solid #51412c; padding: 14px; border-radius: 27px; background: #1b1712; }
.mk-showcase-top,.mk-showcase-controls { display:flex;justify-content:space-between;align-items:center;gap:20px;padding:16px 12px;color:#c6a36a;font-size:10px;letter-spacing:.18em; }
.mk-showcase-main { position:relative;height:510px;overflow:hidden;border-radius:15px;background:#1e1913; }
.mk-showcase-slide { position:absolute;inset:0;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:5%;padding:55px 8%;opacity:0;visibility:hidden;transform:scale(1.045);transition:opacity .85s ease,transform 1.15s ease,visibility 1.15s; }
.mk-slide-active { opacity:1;visibility:visible;transform:scale(1);z-index:1; }
.mk-slide-ambient { position:absolute;inset:0;background:radial-gradient(circle at 36% 50%,var(--slide-accent),#17130f 72%);opacity:.85; }
.mk-slide-book-wrap { position:relative;display:flex;justify-content:center;align-items:center;min-width:0;height:100%; }
.mk-slide-book { width:min(65%,235px);aspect-ratio:2/3;transform:rotate(-7deg); }
.mk-slide-active .mk-slide-book { animation:mkGalleryBook 1.2s cubic-bezier(.2,.8,.2,1) both; }
.mk-slide-copy { position:relative;z-index:2; }
.mk-slide-tag { font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:#dab47d; }
.mk-slide-copy h3 { font-size:clamp(2rem,4vw,4.6rem);line-height:1.13;margin:25px 0;color:#f5efe4; }
.mk-slide-copy p { color:#c0b5a9;max-width:370px;line-height:1.8; }
.mk-slide-rule { width:80px;height:1px;background:#d3aa69;margin:30px 0; }
.mk-slide-brand { font-size:9px;letter-spacing:.16em;color:#d2ba94; }
.mk-showcase-dots { display:flex;gap:9px; }
.mk-dot { width:9px;height:9px;border-radius:50%;border:1px solid #a68b5f;background:transparent;cursor:pointer;transition:.3s; }
.mk-dot.is-active { background:#c6a36a;width:29px;border-radius:99px; }
.mk-showcase-buttons { display:flex;gap:8px; }
.mk-showcase-buttons button {
  cursor:pointer;width:38px;height:38px;border-radius:50%;
  border:1px solid #645138;background:#282117;color:#e1bf88;
  transition:background .3s,transform .3s;
}
.mk-showcase-buttons button:hover { background:#594228;transform:translateY(-3px); }

/* Editorial */
.mk-editorial { background:#f0e9dd;color:#1e1813;padding:140px 0; }
.mk-editorial-grid { display:grid;grid-template-columns:1.3fr .7fr;gap:110px;align-items:end; }
.mk-editorial h2 { font-size:clamp(3rem,5.6vw,6.5rem);line-height:1.08;margin:30px 0 0; }
.mk-editorial em { color:#a27e4a; }
.mk-editorial-side { padding-bottom:10px; }
.mk-editorial-symbol { font-size:95px;color:#a88350;line-height:1;animation:mkSpin 70s linear infinite;width:max-content; }
.mk-editorial-side p { color:#655b51;line-height:2;font-size:16px; }
.mk-editorial-side a { color:#8e6838;display:flex;justify-content:space-between;border-bottom:1px solid #c3ac88;padding:20px 0;margin-top:30px;font-size:11px;font-weight:700;letter-spacing:.13em; }
.mk-editorial-side a span { font-size:20px;transition:transform .3s; }
.mk-editorial-side a:hover span { transform:translate(4px,-4px); }

/* Services */
.mk-services-section { background:#0e0c0a;scroll-margin-top:120px; }
.mk-services-grid { display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px; }
.mk-service { position:relative;display:flex;flex-direction:column;overflow:hidden;border:1px solid #3b3022;border-radius:23px;background:#1a1612;color:#f4efe6;transition:transform .45s,border-color .45s,box-shadow .45s; }
.mk-service:hover { transform:translateY(-12px);border-color:#b7965b;box-shadow:0 30px 70px rgba(181,135,65,.12); }
.mk-service-light { position:absolute;z-index:2;inset:0;pointer-events:none;opacity:0;background:radial-gradient(380px circle at var(--cx,50%) var(--cy,50%),rgba(217,173,99,.18),transparent 60%);transition:opacity .35s; }
.mk-service:hover .mk-service-light { opacity:1; }
.mk-service-image { position:relative;height:250px;overflow:hidden; }
.mk-service-image img { width:100%;height:100%;object-fit:cover;object-position:center 35%;filter:brightness(.72);transition:transform .9s,filter .8s; }
.mk-service:hover .mk-service-image img { transform:scale(1.12);filter:brightness(.95); }
.mk-service-image-shade { position:absolute;inset:0;background:linear-gradient(0deg,#1a1612,transparent 75%); }
.mk-service-number { position:absolute;bottom:8px;right:22px;font:italic 50px Georgia,serif;color:#d4b37b; }
.mk-service-content { padding:30px;flex:1;display:flex;flex-direction:column;position:relative;z-index:3; }
.mk-service-label { font-size:10px;letter-spacing:.18em;color:#c6a36a; }
.mk-service-content h3 { font-size:clamp(1.8rem,2.4vw,2.4rem);margin:15px 0;line-height:1.13; }
.mk-service-content p { color:#a89f94;line-height:1.8;font-size:13px;flex:1; }
.mk-service-bottom { margin-top:30px;padding-top:19px;border-top:1px solid #40362a;display:flex;justify-content:space-between;align-items:center;color:#d7b47d;font-size:10px;letter-spacing:.13em;font-weight:700; }
.mk-service-arrow { font-size:23px;transition:transform .3s; }
.mk-service:hover .mk-service-arrow { transform:translate(5px,-5px); }
.mk-service-cta { min-height:460px;background:#c6a36a;color:#24180d;border-radius:23px;padding:35px;display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden;transition:transform .45s; }
.mk-service-cta:hover { transform:translateY(-12px); }
.mk-service-cta > span { font-size:10px;font-weight:700;letter-spacing:.17em; }
.mk-cta-orb { position:absolute;right:-70px;top:40px;width:250px;height:250px;border:1px solid rgba(47,30,11,.25);border-radius:50%;display:grid;place-items:center;font-size:90px;color:rgba(47,30,11,.08);animation:mkSpin 50s linear infinite; }
.mk-service-cta h3 { position:relative;font-size:clamp(2.5rem,3.6vw,4rem);line-height:1.1;margin-top:40px; }
.mk-service-cta em { color:#473018; }
.mk-service-cta p { position:relative;line-height:1.8;font-size:14px;max-width:230px; }
.mk-service-cta > div:last-child { position:relative;display:flex;justify-content:space-between;padding-top:20px;border-top:1px solid #8b6e47;font-size:11px;letter-spacing:.15em;font-weight:800; }
.mk-service-cta > div:last-child span { font-size:23px; }

/* Kinetic editorial statement */
.mk-kinetic { position:relative;overflow:hidden;background:#21190f;text-align:center;padding:145px 0; }
.mk-kinetic-glow { position:absolute;inset:0;background:radial-gradient(ellipse at center,rgba(194,143,62,.20),transparent 65%);animation:mkBreath 7s ease-in-out infinite; }
.mk-kinetic .mk-container { position:relative; }
.mk-kinetic .mk-container > span { color:#cfac76;font-size:11px;letter-spacing:.24em;font-weight:700; }
.mk-kinetic h2 { font-family:Inter,sans-serif;letter-spacing:-.07em;font-size:clamp(3.4rem,8.2vw,10rem);line-height:.99;font-weight:850;margin:40px auto; }
.mk-kinetic h2 em { font-family:Georgia,serif; }
.mk-kinetic h2 strong { font-weight:850;color:#c6a36a; }
.mk-kinetic-rule { width:85px;height:1px;background:#c6a36a;margin:42px auto; }
.mk-kinetic p { color:#bbb0a4;line-height:1.8; }

/* Interactive strategy */
.mk-strategy-section { background:#f4eee4;color:#231b13; }
.mk-strategy-section .mk-section-head p { color:#70675e; }
.mk-strategy-section .mk-label { color:#9c7949; }
.mk-strategy-grid { display:grid;grid-template-columns:.8fr 1.2fr;gap:25px; }
.mk-strategy-nav { display:flex;flex-direction:column;gap:12px; }
.mk-strategy-option { cursor:pointer;display:flex;align-items:center;gap:20px;text-align:left;border:1px solid #dfd1bc;border-radius:15px;padding:25px;background:white;color:#3b3025;min-height:96px;transition:background .35s,transform .35s,border-color .35s; }
.mk-strategy-option > span:first-child { font:italic 28px Georgia,serif;color:#ad8e5e; }
.mk-strategy-option strong { font:600 25px Georgia,serif;flex:1; }
.mk-strategy-option > span:last-child { font-size:20px; }
.mk-strategy-option:hover { transform:translateX(7px);border-color:#ac8b58; }
.mk-strategy-option.selected { background:#211a13;color:#eedec5;border-color:#c6a36a; }
.mk-strategy-panel { position:relative;background:#19140e;border-radius:23px;min-height:420px;overflow:hidden;color:#f4eee3; }
.mk-strategy-grid-lines { position:absolute;inset:0;opacity:.25;background-image:linear-gradient(rgba(198,163,106,.13) 1px,transparent 1px),linear-gradient(90deg,rgba(198,163,106,.13) 1px,transparent 1px);background-size:35px 35px;mask-image:linear-gradient(100deg,transparent,#000); }
.mk-strategy-inner { position:relative;padding:55px;animation:mkPanelIn .55s ease both; }
.mk-strategy-eyebrow { font-size:10px;letter-spacing:.2em;color:#c6a36a; }
.mk-strategy-inner h3 { font-size:clamp(3rem,5vw,5.8rem);margin:35px 0 20px; }
.mk-strategy-inner h3 em { color:#c6a36a; }
.mk-strategy-inner > p { color:#b4a89a;line-height:1.9;max-width:520px; }
.mk-strategy-quote { margin-top:35px;padding-left:20px;border-left:2px solid #c6a36a;color:#e7d6bf;font:italic 19px Georgia,serif; }
.mk-strategy-quote span { font-size:28px;color:#c6a36a;margin-right:8px; }
.mk-strategy-progress { margin-top:45px; }
.mk-strategy-progress > div:first-child { display:flex;justify-content:space-between;gap:10px;color:#c6a36a;font-size:9px;letter-spacing:.15em; }
.mk-progress-track { margin-top:15px;height:4px;border-radius:5px;background:#44372a;overflow:hidden; }
.mk-progress-track > div { height:100%;background:linear-gradient(90deg,#876437,#e4c18b);transition:width .65s ease; }

/* Final */
.mk-final { position:relative;text-align:center;overflow:hidden;background:#c6a36a;color:#21180f;padding:145px 0; }
.mk-final-orb { position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:850px;height:850px;border:1px solid rgba(46,30,14,.15);border-radius:50%;box-shadow:0 0 0 90px rgba(255,255,255,.04),0 0 0 180px rgba(255,255,255,.025); }
.mk-final .mk-container { position:relative; }
.mk-final .mk-container > span { letter-spacing:.25em;font-size:11px;font-weight:800; }
.mk-final h2 { font-size:clamp(3rem,6.5vw,7.5rem);line-height:1.06;margin:35px 0; }
.mk-final h2 em { color:#5c3b1c; }
.mk-final p { max-width:570px;margin:0 auto;color:#4d3924;line-height:1.9;font-size:17px; }
.mk-final-button { display:inline-flex;align-items:center;justify-content:space-between;gap:30px;background:#1e1710;color:#f0e7d8;margin-top:35px;padding:12px 13px 12px 25px;border-radius:50px;font-weight:700;font-size:11px;letter-spacing:.09em;transition:transform .35s,box-shadow .35s; }
.mk-final-button span { width:36px;height:36px;border-radius:50%;background:#3b3024;display:grid;place-items:center;font-size:21px; }
.mk-final-button:hover { transform:translateY(-5px);box-shadow:0 20px 45px rgba(50,30,10,.28); }

/* Motion */
@keyframes mkBreath { 50% { opacity:.55;scale:1.06; } }
@keyframes mkPulse { 70% { box-shadow:0 0 0 11px rgba(214,181,117,0); } }
@keyframes mkGradient { to { background-position:100% 50%; } }
@keyframes mkSpin { to { transform:rotate(360deg); } }
@keyframes mkFloat { 50% { translate:0 -12px; } }
@keyframes mkSignal { to { height:100%; } }
@keyframes mkBookBack { 50% { transform:rotate(-16deg) translateY(-11px); } }
@keyframes mkBookMain { 50% { transform:rotate(5deg) translateY(-18px); } }
@keyframes mkBookFront { 50% { transform:rotate(9deg) translateY(13px); } }
@keyframes mkMarquee { to { transform:translateX(-50%); } }
@keyframes mkGalleryBook { from { opacity:0;transform:translateY(45px) rotate(-15deg) scale(.88); } to { opacity:1;transform:translateY(0) rotate(-7deg) scale(1); } }
@keyframes mkPanelIn { from { opacity:0;transform:translateY(18px); } to { opacity:1;transform:translateY(0); } }

/* Responsiveness */
@media(max-width:1150px) {
  .mk-hero-grid { grid-template-columns:1fr 1fr;gap:0; }
  .mk-hero-title { font-size:clamp(3rem,5.6vw,5.3rem); }
  .mk-hero-visual { height:480px; }
  .mk-editorial-grid { gap:60px; }
  .mk-services-grid { grid-template-columns:repeat(2,minmax(0,1fr)); }
}
@media(max-width:850px) {
  .mk-container { width:min(100% - 38px,680px); }
  .mk-section { padding:90px 0; }
  .mk-hero { padding:155px 0 80px; }
  .mk-hero-grid { grid-template-columns:1fr; }
  .mk-hero-title { font-size:clamp(3.8rem,9vw,6rem); }
  .mk-hero-visual { height:550px;max-width:580px;width:100%;margin:auto; }
  .mk-editorial { padding:90px 0; }
  .mk-editorial-grid { grid-template-columns:1fr;gap:35px; }
  .mk-showcase-main { height:440px; }
  .mk-strategy-grid { grid-template-columns:1fr; }
  .mk-strategy-nav { display:grid;grid-template-columns:repeat(2,minmax(0,1fr)); }
  .mk-strategy-option { min-height:75px;padding:17px; }
  .mk-strategy-option strong { font-size:21px; }
  .mk-kinetic { padding:100px 0; }
  .mk-final { padding:105px 0; }
}
@media(max-width:580px) {
  .mk-container { width:calc(100% - 36px); }
  .mk-section { padding:75px 0; }
  .mk-section-head { margin-bottom:35px; }
  .mk-section-head h2 { font-size:clamp(2.35rem,10vw,3.5rem); }
  .mk-section-head p { font-size:14px; }
  .mk-hero { padding:135px 0 55px;min-height:0; }
  .mk-hero-title { font-size:clamp(3.15rem,12vw,5rem); }
  .mk-hero-description { font-size:15px;line-height:1.8; }
  .mk-hero-visual { height:370px; }
  .mk-float-card { padding:9px 10px;gap:7px; }
  .mk-float-card strong { font-size:9px; }
  .mk-float-card small { font-size:7px; }
  .mk-card-symbol { width:27px;height:27px; }
  .mk-float-bottom { left:0;bottom:2%; }
  .mk-hero-stamp { width:42px;height:42px;font-size:15px; }
  .mk-hero-stamp span { font-size:8px; }
  .mk-hero-footer { margin-top:35px;gap:13px;font-size:8px; }
  .mk-marquee-group span { font-size:19px; }
  .mk-showcase { padding:8px;border-radius:17px; }
  .mk-showcase-main { height:550px; }
  .mk-showcase-slide { grid-template-columns:1fr;grid-template-rows:1.05fr .95fr;padding:20px;gap:0; }
  .mk-slide-book { width:140px; }
  .mk-slide-copy { text-align:center;align-self:start; }
  .mk-slide-copy h3 { font-size:clamp(1.9rem,8vw,2.8rem);margin:14px 0; }
  .mk-slide-copy p { font-size:12px;margin:auto; }
  .mk-slide-rule { margin:15px auto; }
  .mk-slide-brand { font-size:7px; }
  .mk-editorial { padding:75px 0; }
  .mk-editorial h2 { font-size:clamp(2.8rem,11vw,4.5rem); }
  .mk-editorial-symbol { font-size:65px; }
  .mk-services-grid { grid-template-columns:1fr; }
  .mk-service-image { height:215px; }
  .mk-service-cta { min-height:400px; }
  .mk-kinetic { padding:85px 0; }
  .mk-kinetic h2 { font-size:clamp(3rem,11.2vw,5rem); }
  .mk-strategy-option { gap:8px;min-height:72px;padding:12px; }
  .mk-strategy-option strong { font-size:18px; }
  .mk-strategy-option > span:first-child { font-size:21px; }
  .mk-strategy-inner { padding:30px 24px; }
  .mk-strategy-panel { min-height:440px; }
  .mk-strategy-inner h3 { font-size:3.4rem; }
  .mk-final { padding:85px 0; }
  .mk-final h2 { font-size:clamp(2.9rem,11vw,4.5rem); }
  .mk-final p { font-size:15px; }
}
@media (hover:none),(pointer:coarse) {
  .mk-cursor { display:none; }
  .mk-service-light { display:none; }
}
@media(prefers-reduced-motion:reduce) {
  .mkx *, .mkx *::before, .mkx *::after {
    animation:none !important;
    transition-duration:.01ms !important;
    scroll-behavior:auto !important;
  }
  .mk-reveal { opacity:1;filter:none;transform:none; }
}
`;
