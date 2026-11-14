
import { useEffect, useState, type CSSProperties, type PointerEvent } from "react";
import { Link } from "react-router-dom";

const collections = [
  {
    id: "01",
    name: "Writing",
    subtitle: "Every great book begins with an idea.",
    description:
      "Transform your ideas into compelling stories with professional writing, creative development and expert storytelling.",
    services: [
      "Ghostwriting",
      "Creative Writing",
      "Story Development",
      "Book Writing",
    ],
    symbol: "W",
    label: "THE WRITING COLLECTION",
  },
  {
    id: "02",
    name: "Editing",
    subtitle: "Make every word count.",
    description:
      "Refine your manuscript with professional editorial expertise, structural improvements and meticulous attention to detail.",
    services: [
      "Developmental Editing",
      "Copy Editing",
      "Proofreading",
      "Manuscript Review",
    ],
    symbol: "E",
    label: "THE EDITORIAL COLLECTION",
  },
  {
    id: "03",
    name: "Publishing",
    subtitle: "Turn your manuscript into a masterpiece.",
    description:
      "Prepare your book for the world with professional formatting, publishing guidance and production support.",
    services: [
      "Book Formatting",
      "Publishing Support",
      "eBook Preparation",
      "Print Preparation",
    ],
    symbol: "P",
    label: "THE PUBLISHING COLLECTION",
  },
];

const comparison = [
  ["Personalized project assessment", true, true, true],
  ["Professional writing support", true, false, false],
  ["Editorial refinement", false, true, false],
  ["Publishing assistance", false, false, true],
  ["Custom project quotation", true, true, true],
];

export default function Overview() {
  const [selected, setSelected] = useState(0);
  const [showComparison, setShowComparison] = useState(false);
  const [mouse, setMouse] = useState({ x: 70, y: 40 });

  useEffect(() => {
    const elements = document.querySelectorAll(".pricing-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("pricing-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("pricing-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleMouse = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") return;

    const rect = event.currentTarget.getBoundingClientRect();

    setMouse({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <main className="pricing-overview">
      <style>{styles}</style>

      {/* =====================================
          HERO
      ====================================== */}

      <section
        className="pricing-hero"
        onPointerMove={handleMouse}
        style={
          {
            "--mouse-x": `${mouse.x}%`,
            "--mouse-y": `${mouse.y}%`,
          } as CSSProperties
        }
      >
        <div className="pricing-hero-grid" />
        <div className="pricing-hero-glow" />

        <div className="pricing-container">
          <div className="pricing-topline pricing-reveal">
            <Link to="/">← HOME</Link>
            <span>WORDSMITH SQUAD / PRICING EDITION</span>
          </div>

          <div className="pricing-hero-layout">
            <div className="pricing-hero-copy">
              <span className="pricing-eyebrow pricing-reveal">
                A THOUGHTFUL APPROACH TO CREATIVE INVESTMENT
              </span>

              <h1 className="pricing-reveal">
                Your story.
                <br />
                Your vision.
                <br />
                <em>Your investment.</em>
              </h1>

              <p className="pricing-hero-description pricing-reveal">
                Great books are built with intention. Discover
                professional creative services designed around
                your ideas, ambitions and publishing goals.
              </p>

              <a
                href="#pricing-collections"
                className="pricing-explore pricing-reveal"
              >
                EXPLORE OUR COLLECTIONS
                <span>↓</span>
              </a>
            </div>

            <div className="pricing-hero-art pricing-reveal">
              <div className="pricing-orbit orbit-one" />
              <div className="pricing-orbit orbit-two" />

              <div className="pricing-art-card">
                <span>THE ART OF</span>
                <strong>CREATIVE</strong>
                <strong>EXCELLENCE</strong>
                <i>W / S</i>
                <small>YOUR STORY · OUR CRAFT</small>
              </div>

              <div className="pricing-art-stamp">
                <span>EST.</span>
                <strong>W/S</strong>
                <span>YOUR STORY</span>
              </div>

              <div className="pricing-art-caption">
                <span>01 — 03</span>
                <span>THE CREATIVE COLLECTION</span>
              </div>
            </div>
          </div>

          <div className="pricing-hero-bottom">
            <span>CREATIVITY MEETS CRAFTSMANSHIP</span>
            <span>THOUGHTFULLY BUILT FOR EVERY AUTHOR</span>
          </div>
        </div>
      </section>

      {/* =====================================
          COLLECTION SELECTOR
      ====================================== */}

      <section
        className="pricing-collections"
        id="pricing-collections"
      >
        <div className="pricing-container">
          <div className="pricing-section-heading pricing-reveal">
            <div>
              <span className="pricing-eyebrow">
                THE THREE COLLECTIONS
              </span>

              <h2>
                Find your
                <br />
                <em>starting point.</em>
              </h2>
            </div>

            <p>
              Every project has a different requirement.
              Choose the creative discipline that best represents
              the next step in your journey.
            </p>
          </div>

          <div className="pricing-tabs pricing-reveal">
            {collections.map((item, index) => (
              <button
                type="button"
                key={item.id}
                className={
                  selected === index
                    ? "pricing-tab pricing-tab-active"
                    : "pricing-tab"
                }
                onClick={() => setSelected(index)}
                aria-pressed={selected === index}
              >
                <span className="pricing-tab-number">
                  {item.id}
                </span>

                <span className="pricing-tab-name">
                  {item.name}
                </span>

                <span className="pricing-tab-arrow">↗</span>
              </button>
            ))}
          </div>

          {/* DYNAMIC CONTENT */}

          <div
            key={collections[selected].id}
            className="pricing-selected-panel"
          >
            <div className="pricing-panel-art">
              <span className="pricing-panel-index">
                {collections[selected].id} / 03
              </span>

              <span className="pricing-panel-symbol">
                {collections[selected].symbol}
              </span>

              <span className="pricing-panel-label">
                {collections[selected].label}
              </span>

              <div className="pricing-panel-line" />
            </div>

            <div className="pricing-panel-content">
              <span className="pricing-eyebrow">
                YOUR SELECTED DISCIPLINE
              </span>

              <h3>
                {collections[selected].name}
                <i>.</i>
              </h3>

              <h4>{collections[selected].subtitle}</h4>

              <p>{collections[selected].description}</p>

              <div className="pricing-service-list">
                {collections[selected].services.map((service, i) => (
                  <div key={service}>
                    <span>0{i + 1}</span>
                    <span>{service}</span>
                    <span>↗</span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="pricing-panel-button">
                DISCUSS YOUR PROJECT
                <span>↗</span>
              </Link>
            </div>
          </div>

          <div className="pricing-collection-note pricing-reveal">
            <span>01 — 03</span>
            <p>
              Select a discipline above to discover the services
              included in each creative collection.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================
          PRICING PHILOSOPHY
      ====================================== */}

      <section className="pricing-philosophy">
        <div className="pricing-container">
          <div className="pricing-philosophy-grid">
            <div className="pricing-philosophy-heading pricing-reveal">
              <span className="pricing-eyebrow">
                OUR PRICING PHILOSOPHY
              </span>

              <h2>
                Not every story
                <br />
                fits a <em>price tag.</em>
              </h2>

              <div className="pricing-philosophy-decoration">
                W / S
              </div>
            </div>

            <div className="pricing-philosophy-content pricing-reveal">
              <p>
                No two manuscripts are alike. The scope, complexity,
                length and creative direction of each project are
                different.
              </p>

              <p>
                That's why we believe in understanding your
                requirements before preparing a proposal.
                Our goal is to recommend the right professional
                support for your individual project.
              </p>

              <div className="pricing-principles">
                {[
                  ["01", "Your vision comes first"],
                  ["02", "Your requirements shape the scope"],
                  ["03", "Your proposal reflects your project"],
                ].map(([number, title]) => (
                  <div key={number}>
                    <span>{number}</span>
                    <strong>{title}</strong>
                    <i>↗</i>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          COMPARISON
      ====================================== */}

      <section className="pricing-comparison">
        <div className="pricing-container">
          <div className="pricing-comparison-heading pricing-reveal">
            <div>
              <span className="pricing-eyebrow">
                QUICK SERVICE OVERVIEW
              </span>

              <h2>
                Understand
                <br />
                <em>the difference.</em>
              </h2>
            </div>

            <button
              type="button"
              className="pricing-comparison-button"
              onClick={() =>
                setShowComparison((previous) => !previous)
              }
              aria-expanded={showComparison}
            >
              {showComparison
                ? "CLOSE COMPARISON −"
                : "VIEW COMPARISON +"}
            </button>
          </div>

          <div
            className={
              showComparison
                ? "pricing-table-wrapper pricing-table-expanded"
                : "pricing-table-wrapper"
            }
          >
            <div className="pricing-table">
              <div className="pricing-table-row pricing-table-head">
                <span>PROJECT FEATURES</span>
                <span>WRITING</span>
                <span>EDITING</span>
                <span>PUBLISHING</span>
              </div>

              {comparison.map((row) => (
                <div className="pricing-table-row" key={row[0]}>
                  <span>{row[0]}</span>

                  {row.slice(1).map((value, index) => (
                    <span
                      className={value ? "pricing-yes" : "pricing-no"}
                      key={index}
                    >
                      {value ? "✓" : "—"}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <p className="pricing-table-footnote">
            Final service availability and project scope are
            confirmed following individual consultation.
          </p>
        </div>
      </section>

      {/* =====================================
          PROCESS
      ====================================== */}

      <section className="pricing-process">
        <div className="pricing-container">
          <div className="pricing-process-heading pricing-reveal">
            <span className="pricing-eyebrow">
              HOW WE WORK TOGETHER
            </span>

            <h2>
              From first conversation
              <br />
              to <em>final creation.</em>
            </h2>
          </div>

          <div className="pricing-process-list">
            {[
              [
                "01",
                "Tell us your idea",
                "Share your manuscript, creative vision and goals.",
              ],
              [
                "02",
                "Discuss your requirements",
                "We understand your project and its specific needs.",
              ],
              [
                "03",
                "Receive your proposal",
                "Get a personalized project scope and quotation.",
              ],
              [
                "04",
                "Bring your story to life",
                "Move forward with a clear and agreed plan.",
              ],
            ].map(([number, title, description]) => (
              <div
                className="pricing-process-item pricing-reveal"
                key={number}
              >
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <i>↗</i>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          FINAL CALL TO ACTION
      ====================================== */}

      <section className="pricing-final">
        <div className="pricing-container">
          <span className="pricing-eyebrow">
            THE NEXT CHAPTER STARTS HERE
          </span>

          <div className="pricing-final-grid">
            <h2>
              Let's create
              <br />
              something <em>remarkable.</em>
            </h2>

            <div>
              <p>
                Have a manuscript, an idea or a story waiting
                to be told? Let's find the right creative
                partnership for your journey.
              </p>

              <Link to="/contact">
                START A CONVERSATION
                <span>↗</span>
              </Link>
            </div>
          </div>

          <div className="pricing-final-footer">
            <span>WORDSMITH SQUAD</span>
            <span>YOUR STORY · OUR CRAFT</span>
            <Link to="/">BACK TO HOME ↑</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================================
   COMPLETE PAGE STYLING
========================================= */

const styles = `
.pricing-overview {
  --gold:#c5a16a;
  --gold-light:#e3c99b;
  --dark:#14120f;
  --cream:#eee7da;
  --muted:#a99e90;

  background:var(--dark);
  color:var(--cream);
  overflow:clip;
  font-family:Inter,Arial,sans-serif;
}

.pricing-overview * {
  box-sizing:border-box;
}

.pricing-overview a {
  text-decoration:none;
}

.pricing-overview button {
  font:inherit;
}

.pricing-overview h1,
.pricing-overview h2,
.pricing-overview h3 {
  font-family:"Playfair Display",Georgia,serif;
  font-weight:400;
  letter-spacing:-.045em;
}

.pricing-overview em {
  color:var(--gold);
  font-weight:400;
}

.pricing-container {
  width:min(1120px,calc(100% - 48px));
  margin:auto;
}

.pricing-eyebrow {
  color:var(--gold);
  font-size:9px;
  font-weight:700;
  letter-spacing:.2em;
}

.pricing-reveal {
  opacity:0;
  transform:translateY(22px);
  transition:
    opacity .8s ease,
    transform .8s cubic-bezier(.2,.7,.2,1);
}

.pricing-visible {
  opacity:1;
  transform:translateY(0);
}

/* HERO */

.pricing-hero {
  position:relative;
  min-height:640px;
  padding:115px 0 25px;
  overflow:hidden;
  background:
    radial-gradient(
      420px circle at var(--mouse-x,70%) var(--mouse-y,40%),
      rgba(197,161,106,.13),
      transparent 75%
    ),
    #14120f;
  transition:background .15s;
}

.pricing-hero-grid {
  position:absolute;
  inset:0;
  pointer-events:none;
  opacity:.12;
  background-image:
    linear-gradient(rgba(197,161,106,.15) 1px,transparent 1px),
    linear-gradient(90deg,rgba(197,161,106,.15) 1px,transparent 1px);
  background-size:65px 65px;
  mask-image:linear-gradient(90deg,black,transparent);
}

.pricing-hero-glow {
  position:absolute;
  width:350px;
  height:350px;
  border-radius:50%;
  border:1px solid rgba(197,161,106,.13);
  right:8%;
  top:22%;
  pointer-events:none;
  animation:pricing-orbit 24s linear infinite;
}

.pricing-topline,
.pricing-hero-bottom {
  position:relative;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:15px;
  font-size:8px;
  letter-spacing:.16em;
  color:#a99b87;
}

.pricing-topline a {
  color:var(--gold);
}

.pricing-hero-layout {
  position:relative;
  display:grid;
  grid-template-columns:1.2fr .8fr;
  align-items:center;
  gap:50px;
  padding:100px 35px 100px;
}

.pricing-hero-copy h1 {
  font-size:clamp(57px,7vw,88px);
  line-height:1.03;
  margin:25px 0;
}

.pricing-hero-copy h1 em {
  background:linear-gradient(
    110deg,
    #e9d5b3,
    #b28b51,
    #e9d5b3
  );
  background-size:200%;
  background-clip:text;
  -webkit-background-clip:text;
  color:transparent;
  animation:pricing-shine 7s ease infinite alternate;
}

.pricing-hero-description {
  max-width:440px;
  font-size:13px;
  line-height:2;
  color:#aaa093;
}

.pricing-explore {
  display:inline-flex;
  align-items:center;
  gap:25px;
  margin-top:27px;
  padding-bottom:10px;
  border-bottom:1px solid var(--gold);
  color:var(--gold-light);
  font-size:9px;
  letter-spacing:.14em;
}

.pricing-explore span {
  font-size:19px;
  transition:transform .3s;
}

.pricing-explore:hover span {
  transform:translateY(5px);
}

/* HERO ART */

.pricing-hero-art {
  position:relative;
  min-height:340px;
  display:flex;
  justify-content:center;
  align-items:center;
}

.pricing-art-card {
  position:relative;
  z-index:2;
  width:230px;
  height:300px;
  padding:28px 22px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:12px;
  background:
    radial-gradient(circle at 50% 50%,#393024,#17130e 70%);
  border:1px solid rgba(197,161,106,.65);
  box-shadow:0 30px 70px rgba(0,0,0,.5);
  transform:rotate(-5deg);
  transition:transform .6s;
}

.pricing-art-card:hover {
  transform:rotate(0deg) translateY(-10px);
}

.pricing-art-card>span {
  color:#c5a16a;
  font-size:8px;
  letter-spacing:.3em;
}

.pricing-art-card strong {
  font:30px Georgia,serif;
  color:#e7d4ae;
  letter-spacing:.03em;
}

.pricing-art-card i {
  margin-top:25px;
  font:italic 27px Georgia,serif;
  color:var(--gold);
}

.pricing-art-card small {
  font-size:7px;
  letter-spacing:.15em;
  color:#aa9472;
}

.pricing-orbit {
  position:absolute;
  border:1px solid rgba(197,161,106,.2);
  border-radius:50%;
  pointer-events:none;
}

.orbit-one {
  width:320px;
  height:320px;
  animation:pricing-orbit 30s linear infinite;
}

.orbit-two {
  width:370px;
  height:250px;
  transform:rotate(-35deg);
  border-style:dashed;
  animation:pricing-orbit 35s linear infinite reverse;
}

.pricing-art-stamp {
  position:absolute;
  z-index:3;
  right:0;
  top:15px;
  width:88px;
  height:88px;
  border:1px solid var(--gold);
  border-radius:50%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:5px;
  background:#211a11;
  color:var(--gold);
  font-size:7px;
  letter-spacing:.15em;
}

.pricing-art-stamp strong {
  font:23px Georgia,serif;
}

.pricing-art-caption {
  position:absolute;
  bottom:0;
  width:100%;
  display:flex;
  justify-content:space-between;
  color:#a68a5e;
  font-size:7px;
  letter-spacing:.15em;
}

.pricing-hero-bottom {
  border-top:1px solid #443729;
  padding-top:18px;
}

/* COLLECTIONS */

.pricing-collections {
  padding:100px 0;
  background:var(--cream);
  color:#211a13;
}

.pricing-section-heading,
.pricing-comparison-heading {
  display:flex;
  justify-content:space-between;
  align-items:end;
  gap:30px;
  margin-bottom:45px;
}

.pricing-section-heading h2,
.pricing-comparison-heading h2 {
  font-size:clamp(48px,6vw,70px);
  line-height:1.04;
  margin:18px 0 0;
}

.pricing-section-heading h2 em,
.pricing-comparison-heading h2 em {
  color:#a17a48;
}

.pricing-section-heading>p {
  max-width:330px;
  font-size:12px;
  line-height:1.9;
  color:#766b5f;
}

/* TABS */

.pricing-tabs {
  display:grid;
  grid-template-columns:repeat(3,1fr);
  border-top:1px solid #cbbda8;
  border-bottom:1px solid #cbbda8;
}

.pricing-tab {
  min-width:0;
  display:flex;
  align-items:center;
  gap:15px;
  padding:22px 16px;
  border:0;
  background:transparent;
  color:#7b7062;
  cursor:pointer;
  text-align:left;
  transition:
    background .35s,
    color .35s;
}

.pricing-tab+.pricing-tab {
  border-left:1px solid #cbbda8;
}

.pricing-tab-number {
  font:italic 12px Georgia,serif;
  color:#a17a48;
}

.pricing-tab-name {
  font:26px Georgia,serif;
}

.pricing-tab-arrow {
  margin-left:auto;
  transition:transform .35s;
}

.pricing-tab:hover,
.pricing-tab-active {
  background:#e2d7c5;
  color:#211a13;
}

.pricing-tab-active .pricing-tab-arrow {
  transform:translate(4px,-4px);
  color:#a17a48;
}

/* SELECTED PANEL */

.pricing-selected-panel {
  margin-top:30px;
  display:grid;
  grid-template-columns:220px 1fr;
  min-height:340px;
  background:#211c16;
  color:var(--cream);
  animation:pricing-panel-enter .55s cubic-bezier(.2,.7,.2,1);
}

.pricing-panel-art {
  position:relative;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  padding:25px;
  background:linear-gradient(145deg,#cba875,#a78350);
  color:#251a0e;
  overflow:hidden;
}

.pricing-panel-index {
  font-size:10px;
  letter-spacing:.15em;
}

.pricing-panel-symbol {
  position:absolute;
  right:-15px;
  bottom:-40px;
  font:190px Georgia,serif;
  color:rgba(39,26,13,.19);
}

.pricing-panel-label {
  position:relative;
  z-index:1;
  font-size:8px;
  letter-spacing:.14em;
}

.pricing-panel-line {
  height:1px;
  background:rgba(40,27,13,.35);
}

.pricing-panel-content {
  padding:38px 45px;
}

.pricing-panel-content h3 {
  font-size:52px;
  margin:13px 0;
}

.pricing-panel-content h3 i {
  color:var(--gold);
  font-style:normal;
}

.pricing-panel-content h4 {
  font:italic 17px Georgia,serif;
  color:var(--gold);
  margin:0 0 15px;
}

.pricing-panel-content>p {
  max-width:550px;
  color:#b6aa9b;
  font-size:11px;
  line-height:1.9;
}

.pricing-service-list {
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:0 20px;
  margin:22px 0;
}

.pricing-service-list>div {
  display:flex;
  align-items:center;
  gap:12px;
  padding:11px 0;
  border-bottom:1px solid #4b3c2a;
  font-size:9px;
  color:#d0c2ae;
}

.pricing-service-list>div span:first-child {
  color:var(--gold);
  font-size:8px;
}

.pricing-service-list>div span:last-child {
  margin-left:auto;
  color:var(--gold);
}

.pricing-panel-button {
  display:inline-flex;
  gap:25px;
  align-items:center;
  color:#d7b67e;
  font-size:9px;
  letter-spacing:.12em;
  border-bottom:1px solid #a17c4a;
  padding-bottom:9px;
  margin-top:10px;
  transition:gap .3s;
}

.pricing-panel-button:hover {
  gap:35px;
}

.pricing-panel-button span {
  font-size:16px;
}

.pricing-collection-note {
  display:flex;
  gap:20px;
  align-items:center;
  margin-top:25px;
  color:#8c806f;
}

.pricing-collection-note span {
  color:#a17a48;
  font:italic 12px Georgia,serif;
}

.pricing-collection-note p {
  font-size:9px;
}

/* PHILOSOPHY */

.pricing-philosophy {
  padding:105px 0;
  background:#17130f;
  border-block:1px solid #3b3023;
}

.pricing-philosophy-grid {
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:85px;
}

.pricing-philosophy-heading h2 {
  font-size:clamp(49px,6vw,72px);
  line-height:1.08;
  margin:25px 0;
}

.pricing-philosophy-heading h2 em {
  color:var(--gold);
}

.pricing-philosophy-decoration {
  font:italic 90px Georgia,serif;
  color:rgba(197,161,106,.12);
  margin-top:35px;
}

.pricing-philosophy-content>p {
  color:#aaa093;
  font-size:12px;
  line-height:2;
  margin:0 0 20px;
}

.pricing-principles {
  margin-top:35px;
}

.pricing-principles>div {
  display:flex;
  align-items:center;
  gap:18px;
  padding:18px 0;
  border-top:1px solid #493b2b;
}

.pricing-principles span {
  color:var(--gold);
  font:italic 19px Georgia,serif;
}

.pricing-principles strong {
  font-size:10px;
  font-weight:400;
  color:#e0d4c3;
}

.pricing-principles i {
  margin-left:auto;
  color:var(--gold);
  font-style:normal;
}

/* COMPARISON */

.pricing-comparison {
  padding:100px 0;
  background:var(--cream);
  color:#211a13;
}

.pricing-comparison-button {
  padding:14px 18px;
  background:transparent;
  border:1px solid #b59a70;
  color:#8d693d;
  font-size:9px;
  letter-spacing:.12em;
  cursor:pointer;
  transition:background .3s,color .3s;
}

.pricing-comparison-button:hover {
  background:#a98554;
  color:white;
}

.pricing-table-wrapper {
  max-height:0;
  overflow:hidden;
  transition:max-height .7s ease;
}

.pricing-table-expanded {
  max-height:450px;
  overflow-x:auto;
}

.pricing-table {
  min-width:560px;
  border-top:1px solid #cbbda8;
}

.pricing-table-row {
  display:grid;
  grid-template-columns:2fr repeat(3,1fr);
  align-items:center;
  border-bottom:1px solid #d0c3b0;
}

.pricing-table-row>span {
  padding:16px 10px;
  color:#766a5b;
  font-size:10px;
}

.pricing-table-row>span:first-child {
  padding-left:18px;
}

.pricing-table-head>span {
  font-size:8px;
  font-weight:700;
  letter-spacing:.12em;
  color:#8b6b42;
}

.pricing-table-row .pricing-yes,
.pricing-table-row .pricing-no {
  text-align:center;
  font-size:16px;
}

.pricing-table-row .pricing-yes {
  color:#a17a48;
}

.pricing-table-row .pricing-no {
  color:#b4a998;
}

.pricing-table-footnote {
  font-size:9px;
  color:#8c806f;
  margin-top:15px;
}

/* PROCESS */

.pricing-process {
  padding:105px 0;
  background:#17130f;
}

.pricing-process-heading {
  margin-bottom:45px;
}

.pricing-process-heading h2 {
  font-size:clamp(48px,6vw,70px);
  line-height:1.08;
  margin:20px 0;
}

.pricing-process-heading h2 em {
  color:var(--gold);
}

.pricing-process-list {
  border-top:1px solid #50412d;
}

.pricing-process-item {
  display:grid;
  grid-template-columns:65px 1.1fr 1fr 30px;
  align-items:center;
  gap:20px;
  border-bottom:1px solid #50412d;
  padding:22px 5px;
  transition:padding .3s,background .3s;
}

.pricing-process-item:hover {
  padding-left:16px;
  background:rgba(197,161,106,.05);
}

.pricing-process-item>span {
  font:italic 17px Georgia,serif;
  color:var(--gold);
}

.pricing-process-item h3 {
  font-size:23px;
  margin:0;
}

.pricing-process-item p {
  color:#a79a89;
  font-size:10px;
  line-height:1.8;
}

.pricing-process-item>i {
  font-size:18px;
  font-style:normal;
  color:var(--gold);
}

/* FINAL */

.pricing-final {
  padding:85px 0 25px;
  background:#c3a06d;
  color:#21170d;
}

.pricing-final>.pricing-container>.pricing-eyebrow {
  color:#61482b;
}

.pricing-final-grid {
  display:grid;
  grid-template-columns:1fr 300px;
  align-items:center;
  gap:45px;
  margin:30px 0 70px;
}

.pricing-final-grid h2 {
  font-size:clamp(50px,6vw,76px);
  line-height:1.05;
  margin:0;
}

.pricing-final-grid h2 em {
  color:#f0e1c5;
}

.pricing-final-grid p {
  color:#55412a;
  font-size:12px;
  line-height:1.9;
}

.pricing-final-grid a {
  display:inline-flex;
  gap:25px;
  align-items:center;
  margin-top:10px;
  padding:13px 17px;
  border:1px solid #765932;
  border-radius:30px;
  color:#24190e;
  font-size:9px;
  letter-spacing:.08em;
  transition:background .3s,color .3s;
}

.pricing-final-grid a:hover {
  background:#24190e;
  color:#e8d5b3;
}

.pricing-final-footer {
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
  gap:12px;
  padding-top:18px;
  border-top:1px solid rgba(50,32,12,.3);
  color:#60492c;
  font-size:8px;
  letter-spacing:.13em;
}

.pricing-final-footer a {
  color:inherit;
}

/* ANIMATIONS */

@keyframes pricing-shine {
  to {background-position:100%}
}

@keyframes pricing-orbit {
  to {transform:rotate(360deg)}
}

@keyframes pricing-panel-enter {
  from {
    opacity:0;
    transform:translateY(18px);
  }
  to {
    opacity:1;
    transform:translateY(0);
  }
}

/* TABLET */

@media(max-width:850px) {
  .pricing-hero-layout {
    padding-inline:0;
    gap:25px;
  }

  .pricing-art-card {
    width:195px;
    height:270px;
  }

  .pricing-philosophy-grid {
    gap:40px;
  }

  .pricing-selected-panel {
    grid-template-columns:170px 1fr;
  }

  .pricing-panel-content {
    padding:30px;
  }
}

/* MOBILE */

@media(max-width:600px) {
  .pricing-container {
    width:calc(100% - 34px);
  }

  .pricing-hero {
    padding-top:105px;
    min-height:auto;
  }

  .pricing-hero-layout {
    grid-template-columns:1fr;
    padding:75px 0;
    gap:40px;
  }

  .pricing-hero-copy h1 {
    font-size:clamp(52px,12vw,72px);
  }

  .pricing-hero-art {
    min-height:340px;
  }

  .pricing-art-card {
    width:205px;
    height:270px;
  }

  .pricing-art-stamp {
    right:5%;
  }

  .pricing-hero-bottom {
    font-size:6px;
  }

  .pricing-collections,
  .pricing-comparison {
    padding:75px 0;
  }

  .pricing-section-heading,
  .pricing-comparison-heading {
    flex-direction:column;
    align-items:flex-start;
  }

  .pricing-section-heading h2,
  .pricing-comparison-heading h2 {
    font-size:53px;
  }

  .pricing-tabs {
    grid-template-columns:1fr;
  }

  .pricing-tab {
    padding:17px 12px;
  }

  .pricing-tab+.pricing-tab {
    border-left:0;
    border-top:1px solid #cbbda8;
  }

  .pricing-tab-name {
    font-size:25px;
  }

  .pricing-selected-panel {
    grid-template-columns:1fr;
  }

  .pricing-panel-art {
    min-height:115px;
  }

  .pricing-panel-symbol {
    font-size:110px;
    bottom:-30px;
  }

  .pricing-panel-content {
    padding:25px 20px;
  }

  .pricing-panel-content h3 {
    font-size:43px;
  }

  .pricing-service-list {
    grid-template-columns:1fr;
  }

  .pricing-collection-note {
    align-items:flex-start;
  }

  .pricing-philosophy {
    padding:75px 0;
  }

  .pricing-philosophy-grid {
    grid-template-columns:1fr;
    gap:25px;
  }

  .pricing-philosophy-heading h2 {
    font-size:53px;
  }

  .pricing-philosophy-decoration {
    font-size:65px;
  }

  .pricing-comparison-heading {
    gap:20px;
  }

  .pricing-process {
    padding:75px 0;
  }

  .pricing-process-heading h2 {
    font-size:52px;
  }

  .pricing-process-item {
    grid-template-columns:35px 1fr 25px;
    gap:12px;
  }

  .pricing-process-item h3 {
    font-size:19px;
  }

  .pricing-process-item p {
    grid-column:2;
    grid-row:2;
    margin:0;
  }

  .pricing-process-item>i {
    grid-column:3;
    grid-row:1;
  }

  .pricing-final-grid {
    grid-template-columns:1fr;
    gap:20px;
    margin-bottom:45px;
  }

  .pricing-final-grid h2 {
    font-size:54px;
  }

  .pricing-final-footer {
    font-size:7px;
  }
}

@media(max-width:380px) {
  .pricing-hero-copy h1 {
    font-size:47px;
  }

  .pricing-panel-content h3 {
    font-size:38px;
  }

  .pricing-final-grid h2 {
    font-size:46px;
  }
}

/* ACCESSIBILITY */

@media(prefers-reduced-motion:reduce) {
  .pricing-overview *,
  .pricing-overview *::before,
  .pricing-overview *::after {
    animation:none!important;
    transition:none!important;
    scroll-behavior:auto!important;
  }

  .pricing-reveal {
    opacity:1;
    transform:none;
  }
}
`;
