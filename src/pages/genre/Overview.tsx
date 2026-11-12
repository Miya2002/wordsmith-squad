
import { useEffect, useState, type PointerEvent, type CSSProperties } from "react";
import { Link } from "react-router-dom";

const genres = [
  { id: "01", name: "Fantasy", subtitle: "Worlds beyond imagination.", description: "Create extraordinary worlds filled with magic, mythical creatures, unforgettable characters and adventures that transport readers beyond reality.", mood: "MAGICAL WORLDS", symbol: "✧", services: ["Epic Fantasy", "Dark Fantasy", "Urban Fantasy", "Fairy Tales"], color: "#b69a70" },
  { id: "02", name: "Romance", subtitle: "Stories written by the heart.", description: "Craft emotionally captivating love stories, unforgettable relationships and meaningful journeys that stay with readers long after the final page.", mood: "THE ART OF LOVE", symbol: "♡", services: ["Contemporary Romance", "Historical Romance", "Romantic Drama", "Young Adult Romance"], color: "#c58c86" },
  { id: "03", name: "Mystery", subtitle: "Every secret has a story.", description: "Build intricate mysteries, clever clues and unexpected revelations that keep readers turning pages until the final discovery.", mood: "SECRETS & DISCOVERIES", symbol: "⌕", services: ["Detective Fiction", "Cozy Mystery", "Crime Mystery", "Psychological Mystery"], color: "#9b9c8a" },
  { id: "04", name: "Thriller", subtitle: "Keep every page unpredictable.", description: "Develop gripping plots, intense suspense and high-stakes storytelling that keeps audiences on the edge of their seats.", mood: "SUSPENSE IN EVERY PAGE", symbol: "◈", services: ["Psychological Thriller", "Crime Thriller", "Political Thriller", "Action Thriller"], color: "#a77d62" },
  { id: "05", name: "Science Fiction", subtitle: "Imagine what comes next.", description: "Explore futuristic civilizations, advanced technology, alternate realities and thought-provoking possibilities through imaginative storytelling.", mood: "BEYOND THE POSSIBLE", symbol: "◎", services: ["Space Opera", "Dystopian Fiction", "Cyberpunk", "Time Travel"], color: "#91a6a8" },
  { id: "06", name: "Horror", subtitle: "Some stories never leave you.", description: "Create atmospheric, unsettling narratives that explore fear, the unknown and the darker corners of human imagination.", mood: "DARKNESS & FEAR", symbol: "☽", services: ["Supernatural Horror", "Gothic Horror", "Psychological Horror", "Paranormal Fiction"], color: "#987d78" },
  { id: "07", name: "Children's Books", subtitle: "Little readers. Big imaginations.", description: "Bring stories to life for young audiences through engaging characters, imaginative adventures and meaningful lessons.", mood: "A WORLD OF WONDER", symbol: "✿", services: ["Picture Books", "Early Readers", "Middle Grade", "Educational Stories"], color: "#c5a36f" },
  { id: "08", name: "Memoir", subtitle: "Real lives. Powerful stories.", description: "Turn personal experiences, defining moments and extraordinary life journeys into authentic, beautifully structured narratives.", mood: "STORIES FROM LIFE", symbol: "❧", services: ["Personal Memoir", "Autobiography", "Life Stories", "Inspirational Memoir"], color: "#a88e70" },
  { id: "09", name: "Poetry", subtitle: "Where words become emotion.", description: "Express thoughts, emotions and experiences through carefully crafted language, poetic rhythm and meaningful imagery.", mood: "THE LANGUAGE OF FEELING", symbol: "❋", services: ["Free Verse", "Love Poetry", "Narrative Poetry", "Poetry Collections"], color: "#ad91a5" },
];

export default function Genre() {
  const [activeGenre, setActiveGenre] = useState(0);
  const [mouse, setMouse] = useState({ x: 70, y: 40 });

  useEffect(() => {
    const elements = document.querySelectorAll(".genre-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach(el => el.classList.add("genre-visible"));
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("genre-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handlePointer = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();

    setMouse({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  const selectGenre = (index: number) => {
    setActiveGenre(index);
    document.getElementById("genre-library")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const selected = genres[activeGenre];

  return (
    <main className="genre-page">
      <style>{genreStyles}</style>

      {/* =====================================
          NEW HERO — THE GENRE ATLAS
      ====================================== */}

      <section
        className="atlas-hero"
        onPointerMove={handlePointer}
        style={{
          "--gx": `${mouse.x}%`,
          "--gy": `${mouse.y}%`,
        } as CSSProperties}
      >
        <div className="atlas-grain" />
        <div className="atlas-cursor-light" />

        <div className="genre-container">

          <div className="atlas-topline">
            <Link to="/">← BACK TO HOME</Link>
            <span>WORDSMITH SQUAD / LITERARY ARCHIVE</span>
            <span className="atlas-edition">EDITION NO. 09</span>
          </div>

          <div className="atlas-main">

            {/* Left editorial title */}

            <div className="atlas-heading">
              <div className="atlas-overline">
                <span className="atlas-overline-dot" />
                A COLLECTION OF CREATIVE WORLDS
              </div>

              <div className="atlas-title-wrap">
                <span className="atlas-vertical-text">
                  EXPLORE THE ART OF STORYTELLING
                </span>

                <h1>
                  THE
                  <br />
                  GENRE
                  <br />
                  <em>ATLAS</em>
                  <span className="atlas-title-period">.</span>
                </h1>
              </div>

              <div className="atlas-heading-bottom">
                <div className="atlas-heading-line" />
                <p>
                  Nine literary worlds. Endless possibilities.
                  Discover the creative direction that gives
                  your story its identity.
                </p>
              </div>

              <a href="#genre-library" className="atlas-explore">
                EXPLORE THE COLLECTION
                <span>↓</span>
              </a>
            </div>

            {/* Right interactive genre directory */}

            <div className="atlas-directory">

              <div className="atlas-directory-heading">
                <div>
                  <span>THE COLLECTION</span>
                  <h2>Choose your world.</h2>
                </div>
                <span className="atlas-directory-count">09 / 09</span>
              </div>

              <div className="atlas-directory-list">
                {genres.map((genre, index) => (
                  <button
                    type="button"
                    key={genre.id}
                    className={
                      activeGenre === index
                        ? "atlas-directory-item atlas-item-active"
                        : "atlas-directory-item"
                    }
                    onClick={() => setActiveGenre(index)}
                    style={{
                      "--item-color": genre.color,
                    } as CSSProperties}
                  >
                    <span className="atlas-item-number">{genre.id}</span>

                    <span className="atlas-item-symbol">
                      {genre.symbol}
                    </span>

                    <span className="atlas-item-name">
                      {genre.name}
                      <small>{genre.mood}</small>
                    </span>

                    <span className="atlas-item-arrow">↗</span>
                  </button>
                ))}
              </div>

              <div className="atlas-directory-footer">
                <span>SELECT A GENRE TO EXPLORE</span>
                <span>01 — 09</span>
              </div>

            </div>
          </div>

          {/* Selected genre preview */}

          <div className="atlas-selection">
            <div className="atlas-selection-symbol" key={selected.id}>
              {selected.symbol}
            </div>

            <div className="atlas-selection-copy" key={`copy-${selected.id}`}>
              <span>CURRENTLY EXPLORING</span>
              <strong>{selected.name}</strong>
              <small>{selected.subtitle}</small>
            </div>

            <button
              type="button"
              onClick={() => {
                document.getElementById("genre-library")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              VIEW COLLECTION <span>↘</span>
            </button>
          </div>

          <div className="atlas-bottomline">
            <span>IMAGINATION HAS NO BOUNDARIES</span>
            <span>YOUR STORY · OUR CRAFT</span>
            <span>W / S — EST. FOR STORYTELLERS</span>
          </div>

        </div>
      </section>

      {/* =====================================
          GENRE LIBRARY
      ====================================== */}

      <section className="genre-library" id="genre-library">
        <div className="genre-container">

          <div className="genre-library-heading genre-reveal">
            <div>
              <span className="genre-dark-eyebrow">
                THE LITERARY COLLECTION / 001—009
              </span>

              <h2>
                Discover your
                <br />
                <em>kind of story.</em>
              </h2>
            </div>

            <div className="genre-library-intro">
              <span>THE RIGHT GENRE CHANGES EVERYTHING.</span>
              <p>
                Every genre creates a different experience.
                Explore our collection and find the perfect
                creative direction for your next book.
              </p>
            </div>
          </div>

          <div className="genre-card-grid">
            {genres.map((genre, index) => (
              <button
                type="button"
                key={genre.id}
                onClick={() => setActiveGenre(index)}
                className={[
                  "genre-card",
                  `genre-card-${genre.id}`,
                  activeGenre === index ? "genre-card-active" : "",
                ].join(" ")}
                style={{
                  "--genre-accent": genre.color,
                } as CSSProperties}
                aria-pressed={activeGenre === index}
              >
                <div className="genre-card-art">
                  <span className="genre-card-number">{genre.id}</span>
                  <span className="genre-card-symbol">{genre.symbol}</span>
                  <span className="genre-card-mood">{genre.mood}</span>
                  <div className="genre-card-art-line" />
                </div>

                <div className="genre-card-information">
                  <div>
                    <h3>{genre.name}</h3>
                    <p>{genre.subtitle}</p>
                  </div>
                  <span className="genre-card-arrow">↗</span>
                </div>
              </button>
            ))}
          </div>

          <div className="genre-library-bottom genre-reveal">
            <span>09 GENRES</span>
            <span>ONE UNLIMITED IMAGINATION</span>
          </div>
        </div>
      </section>

      {/* =====================================
          SELECTED GENRE DETAIL
      ====================================== */}

      <section className="genre-detail">
        <div className="genre-container">

          <div className="genre-detail-heading genre-reveal">
            <span className="genre-eyebrow">YOUR CREATIVE DIRECTION</span>
            <span className="genre-detail-counter">
              COLLECTION {selected.id} / 09
            </span>
          </div>

          <div className="genre-detail-content" key={selected.id}>

            <div className={`genre-detail-visual genre-detail-${selected.id}`}>
              <span className="genre-detail-watermark">{selected.symbol}</span>

              <div className="genre-detail-visual-inner">
                <span>THE WORDSMITH SQUAD</span>
                <strong>{selected.name}</strong>
                <i>{selected.mood}</i>
              </div>

              <div className="genre-detail-visual-footer">
                <span>SELECTED COLLECTION</span>
                <span>{selected.id} / 09</span>
              </div>
            </div>

            <div className="genre-detail-copy">
              <span className="genre-eyebrow">EXPLORE THE GENRE</span>

              <h2>{selected.name}<em>.</em></h2>
              <h3>{selected.subtitle}</h3>
              <p>{selected.description}</p>

              <div className="genre-subgenres">
                <span>EXPLORE THE POSSIBILITIES</span>

                {selected.services.map((service, index) => (
                  <div key={service}>
                    <span>0{index + 1}</span>
                    <strong>{service}</strong>
                    <i>↗</i>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="genre-detail-button">
                DISCUSS YOUR STORY <span>↗</span>
              </Link>
            </div>
          </div>

          <div className="genre-detail-navigation">
            <button
              type="button"
              onClick={() => setActiveGenre((activeGenre + 8) % 9)}
            >
              ← PREVIOUS GENRE
            </button>

            <div className="genre-detail-dots">
              {genres.map((genre, index) => (
                <button
                  type="button"
                  key={genre.id}
                  aria-label={`Select ${genre.name}`}
                  aria-pressed={activeGenre === index}
                  className={
                    activeGenre === index
                      ? "genre-dot genre-dot-active"
                      : "genre-dot"
                  }
                  onClick={() => setActiveGenre(index)}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => setActiveGenre((activeGenre + 1) % 9)}
            >
              NEXT GENRE →
            </button>
          </div>
        </div>
      </section>

      {/* =====================================
          CREATIVE APPROACH
      ====================================== */}

      <section className="genre-approach">
        <div className="genre-container">

          <div className="genre-approach-heading genre-reveal">
            <span className="genre-eyebrow">BEHIND EVERY GREAT STORY</span>

            <h2>
              Your genre.
              <br />
              <em>Our expertise.</em>
            </h2>

            <p>
              A great book is more than a category. It is an
              experience, an emotion and a world waiting
              to be discovered.
            </p>
          </div>

          <div className="genre-approach-grid">
            {[
              {
                number: "01",
                title: "Understand",
                text: "We explore your vision, audience and the kind of experience you want to create.",
                icon: "◉",
              },
              {
                number: "02",
                title: "Develop",
                text: "We shape your concept with the right storytelling direction and creative approach.",
                icon: "✧",
              },
              {
                number: "03",
                title: "Create",
                text: "We turn your ideas into a carefully crafted manuscript that reflects your vision.",
                icon: "❋",
              },
            ].map(item => (
              <div className="genre-approach-card genre-reveal" key={item.number}>
                <div className="genre-approach-top">
                  <span>{item.number}</span>
                  <i>{item.icon}</i>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="genre-approach-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          FINAL CTA
      ====================================== */}

      <section className="genre-final">
        <div className="genre-final-decoration">W</div>

        <div className="genre-container">
          <span className="genre-dark-eyebrow">
            YOUR STORY DESERVES TO BE TOLD
          </span>

          <div className="genre-final-content">
            <h2>
              Every great story
              <br />
              begins <em>somewhere.</em>
            </h2>

            <div>
              <p>
                Have an idea but aren't sure which genre
                is right for your book? Let's explore
                the possibilities together.
              </p>

              <Link to="/contact" className="genre-final-button">
                LET'S DISCUSS YOUR IDEA <span>↗</span>
              </Link>
            </div>
          </div>

          <div className="genre-final-footer">
            <span>WORDSMITH SQUAD</span>
            <span>YOUR STORY · OUR CRAFT</span>
            <Link to="/">BACK TO HOME ↑</Link>
          </div>
        </div>
      </section>

    </main>
  );
}

/* ============================================
   COMPLETE GENRE PAGE STYLES
============================================ */

const genreStyles = `

.genre-page {
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

.genre-page * { box-sizing:border-box; }
.genre-page a { text-decoration:none; }
.genre-page button { font:inherit; }
.genre-page h1,
.genre-page h2,
.genre-page h3 {
  font-family:"Playfair Display",Georgia,serif;
  font-weight:400;
  letter-spacing:-.045em;
}
.genre-page em { color:var(--gold); font-weight:400; }

.genre-container {
  width:min(1120px,calc(100% - 48px));
  margin:auto;
}

.genre-eyebrow,
.genre-dark-eyebrow {
  display:inline-flex;
  align-items:center;
  gap:10px;
  font-size:9px;
  font-weight:700;
  letter-spacing:.2em;
}

.genre-eyebrow { color:var(--gold); }
.genre-dark-eyebrow { color:#977345; }

.genre-reveal {
  opacity:0;
  transform:translateY(22px);
  transition:opacity .8s ease,transform .8s ease;
}
.genre-visible { opacity:1; transform:translateY(0); }

/* NEW ATLAS HERO */

.atlas-hero {
  min-height:760px;
  position:relative;
  padding:112px 0 24px;
  overflow:hidden;
  background:
    radial-gradient(500px circle at var(--gx,70%) var(--gy,40%),
    rgba(197,161,106,.13),transparent 75%),
    linear-gradient(130deg,#11100e,#19140f 65%,#100e0c);
}

.atlas-grain {
  position:absolute;
  inset:0;
  pointer-events:none;
  opacity:.12;
  background-image:radial-gradient(#c5a16a .7px,transparent .7px);
  background-size:7px 7px;
}

.atlas-cursor-light {
  position:absolute;
  top:var(--gy,40%);
  left:var(--gx,70%);
  width:260px;
  height:260px;
  transform:translate(-50%,-50%);
  border:1px solid rgba(197,161,106,.09);
  border-radius:50%;
  pointer-events:none;
  transition:top .15s,left .15s;
}

.atlas-topline {
  position:relative;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:15px;
  padding-bottom:17px;
  border-bottom:1px solid rgba(197,161,106,.25);
  color:#988d7e;
  font-size:8px;
  letter-spacing:.15em;
}

.atlas-topline a { color:var(--gold); }
.atlas-edition { color:#c6a775; }

.atlas-main {
  position:relative;
  display:grid;
  grid-template-columns:.85fr 1.15fr;
  gap:65px;
  padding:70px 0 45px;
  align-items:center;
}

/* Left title */

.atlas-heading { position:relative; }

.atlas-overline {
  display:flex;
  align-items:center;
  gap:10px;
  color:#c5a16a;
  font-size:8px;
  letter-spacing:.2em;
  margin-bottom:30px;
}

.atlas-overline-dot {
  width:6px;
  height:6px;
  background:#c5a16a;
  border-radius:50%;
  box-shadow:0 0 12px #c5a16a;
}

.atlas-title-wrap {
  position:relative;
  padding-left:24px;
}

.atlas-vertical-text {
  position:absolute;
  left:-2px;
  top:12px;
  writing-mode:vertical-rl;
  transform:rotate(180deg);
  color:#82715b;
  font-size:7px;
  letter-spacing:.2em;
}

.atlas-heading h1 {
  margin:0;
  font-size:clamp(70px,8vw,105px);
  line-height:.87;
  letter-spacing:-.075em;
  color:#eee7da;
}

.atlas-heading h1 em {
  display:inline-block;
  background:linear-gradient(120deg,#f0d9ac,#b58b50,#e9d1a6);
  background-size:200%;
  background-clip:text;
  -webkit-background-clip:text;
  color:transparent;
  animation:atlas-shimmer 6s ease infinite alternate;
}

.atlas-title-period { color:#c5a16a; }

.atlas-heading-bottom {
  margin-top:33px;
  display:flex;
  align-items:flex-start;
  gap:14px;
}

.atlas-heading-line {
  flex-shrink:0;
  width:35px;
  height:1px;
  margin-top:9px;
  background:#b89560;
}

.atlas-heading-bottom p {
  max-width:290px;
  margin:0;
  font-size:11px;
  line-height:1.9;
  color:#a99e90;
}

.atlas-explore {
  display:inline-flex;
  align-items:center;
  gap:20px;
  margin-top:32px;
  padding-bottom:9px;
  border-bottom:1px solid #a88753;
  color:#e1c08b;
  font-size:8px;
  letter-spacing:.15em;
  transition:gap .3s;
}

.atlas-explore:hover { gap:30px; }

.atlas-explore span {
  font-size:16px;
}

/* Right directory */

.atlas-directory {
  position:relative;
  padding:25px 26px 18px;
  border:1px solid rgba(197,161,106,.25);
  background:linear-gradient(145deg,rgba(48,38,27,.45),rgba(18,16,13,.78));
  box-shadow:0 25px 70px rgba(0,0,0,.25);
  backdrop-filter:blur(12px);
}

.atlas-directory::before {
  content:"";
  position:absolute;
  top:-1px;
  left:25px;
  width:70px;
  height:2px;
  background:#c5a16a;
}

.atlas-directory-heading {
  display:flex;
  align-items:end;
  justify-content:space-between;
  margin-bottom:20px;
}

.atlas-directory-heading>div>span {
  font-size:7px;
  color:#b99763;
  letter-spacing:.2em;
}

.atlas-directory-heading h2 {
  margin:7px 0 0;
  font-size:29px;
  color:#eee7da;
}

.atlas-directory-count {
  color:#a98b60;
  font:italic 13px Georgia,serif;
}

.atlas-directory-list {
  display:grid;
  grid-template-columns:1fr 1fr;
  column-gap:25px;
}

.atlas-directory-item {
  position:relative;
  display:flex;
  align-items:center;
  gap:12px;
  min-width:0;
  padding:13px 4px;
  border:0;
  border-bottom:1px solid rgba(197,161,106,.13);
  background:transparent;
  text-align:left;
  color:#c5b9a8;
  cursor:pointer;
  transition:padding .3s,color .3s,background .3s;
}

.atlas-directory-item:hover,
.atlas-item-active {
  color:#f0dfc2;
  padding-left:10px;
  background:linear-gradient(90deg,rgba(197,161,106,.12),transparent);
}

.atlas-item-number {
  color:#a58454;
  font:italic 10px Georgia,serif;
}

.atlas-item-symbol {
  display:grid;
  place-items:center;
  width:25px;
  height:25px;
  border:1px solid rgba(197,161,106,.22);
  border-radius:50%;
  color:var(--item-color);
  font-size:16px;
  transition:background .3s,transform .3s;
}

.atlas-item-active .atlas-item-symbol,
.atlas-directory-item:hover .atlas-item-symbol {
  background:rgba(197,161,106,.16);
  transform:rotate(15deg);
}

.atlas-item-name {
  display:flex;
  flex:1;
  flex-direction:column;
  gap:4px;
  min-width:0;
  font:17px Georgia,serif;
}

.atlas-item-name small {
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  font:6px Inter,Arial,sans-serif;
  letter-spacing:.1em;
  color:#8f806c;
}

.atlas-item-arrow {
  color:#b99662;
  font-size:13px;
  opacity:.35;
  transition:opacity .3s,transform .3s;
}

.atlas-item-active .atlas-item-arrow,
.atlas-directory-item:hover .atlas-item-arrow {
  opacity:1;
  transform:translate(3px,-3px);
}

.atlas-directory-footer {
  display:flex;
  justify-content:space-between;
  padding-top:15px;
  color:#8f806c;
  font-size:7px;
  letter-spacing:.14em;
}

/* Current selection strip */

.atlas-selection {
  position:relative;
  display:flex;
  align-items:center;
  gap:18px;
  padding:17px 20px;
  border:1px solid rgba(197,161,106,.22);
  background:rgba(197,161,106,.045);
}

.atlas-selection-symbol {
  display:grid;
  place-items:center;
  width:42px;
  height:42px;
  flex-shrink:0;
  border:1px solid rgba(197,161,106,.4);
  color:#d7b783;
  font-size:25px;
  animation:atlas-symbol-in .5s ease both;
}

.atlas-selection-copy {
  display:flex;
  flex-direction:column;
  gap:3px;
  animation:atlas-symbol-in .5s ease both;
}

.atlas-selection-copy>span {
  color:#9c835e;
  font-size:7px;
  letter-spacing:.15em;
}

.atlas-selection-copy strong {
  color:#eee0c8;
  font:20px Georgia,serif;
}

.atlas-selection-copy small {
  color:#938777;
  font-size:8px;
}

.atlas-selection>button {
  display:flex;
  align-items:center;
  gap:15px;
  margin-left:auto;
  border:0;
  background:none;
  color:#d1b17c;
  font-size:8px;
  letter-spacing:.12em;
  cursor:pointer;
}

.atlas-selection>button span {
  font-size:18px;
  transition:transform .3s;
}

.atlas-selection>button:hover span {
  transform:translate(4px,4px);
}

.atlas-bottomline {
  display:flex;
  justify-content:space-between;
  gap:15px;
  padding-top:20px;
  color:#817565;
  font-size:7px;
  letter-spacing:.15em;
}

@keyframes atlas-shimmer {
  to { background-position:100%; }
}

@keyframes atlas-symbol-in {
  from { opacity:0; transform:translateY(8px); }
  to { opacity:1; transform:translateY(0); }
}

/* LIBRARY */

.genre-library {
  padding:105px 0;
  background:var(--cream);
  color:#211a13;
}

.genre-library-heading {
  display:flex;
  justify-content:space-between;
  align-items:end;
  gap:30px;
  margin-bottom:48px;
}

.genre-library-heading h2 {
  margin:20px 0 0;
  font-size:clamp(52px,6vw,73px);
  line-height:1.02;
}

.genre-library-heading h2 em { color:#a17a48; }

.genre-library-intro { max-width:320px; }

.genre-library-intro>span {
  color:#9a774c;
  font-size:8px;
  letter-spacing:.14em;
  font-weight:700;
}

.genre-library-intro p {
  font-size:11px;
  line-height:1.9;
  color:#7d7060;
}

.genre-card-grid {
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:19px;
}

.genre-card {
  min-width:0;
  padding:0;
  border:1px solid #d3c7b6;
  background:#e8dfd0;
  text-align:left;
  cursor:pointer;
  overflow:hidden;
  transition:transform .4s,box-shadow .4s,border-color .4s;
}

.genre-card:hover {
  transform:translateY(-7px);
  box-shadow:0 18px 35px rgba(62,43,20,.12);
  border-color:var(--genre-accent);
}

.genre-card-active {
  border-color:#a77f4a;
  background:#e1d5c2;
  box-shadow:inset 0 0 0 1px #a77f4a;
}

.genre-card-art {
  position:relative;
  height:170px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  overflow:hidden;
  background:radial-gradient(circle at 50% 45%,color-mix(in srgb,var(--genre-accent) 50%,#31271e),#211b15 75%);
  color:var(--genre-accent);
}

.genre-card-art::before {
  content:"";
  position:absolute;
  inset:10px;
  border:1px solid color-mix(in srgb,var(--genre-accent) 35%,transparent);
  transition:inset .5s;
}

.genre-card:hover .genre-card-art::before { inset:17px; }

.genre-card-number {
  position:absolute;
  left:20px;
  top:18px;
  color:#d7c3a2;
  font:italic 11px Georgia,serif;
}

.genre-card-symbol {
  position:relative;
  font:95px Georgia,serif;
  line-height:1;
  opacity:.8;
  transition:transform .6s;
}

.genre-card:hover .genre-card-symbol {
  transform:scale(1.16) rotate(-8deg);
}

.genre-card-mood {
  position:absolute;
  bottom:22px;
  font-size:7px;
  letter-spacing:.2em;
  color:#d5c09a;
}

.genre-card-art-line {
  position:absolute;
  width:70%;
  height:1px;
  background:var(--genre-accent);
  bottom:42px;
  opacity:.4;
}

.genre-card-information {
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:8px;
  padding:17px 16px;
}

.genre-card-information h3 {
  margin:0;
  font-size:21px;
  color:#261f17;
}

.genre-card-information p {
  margin:6px 0 0;
  color:#897d6d;
  font-size:9px;
}

.genre-card-arrow {
  display:grid;
  place-items:center;
  flex-shrink:0;
  width:30px;
  height:30px;
  border:1px solid #c9b99f;
  border-radius:50%;
  color:#967044;
  transition:background .3s,color .3s,transform .3s;
}

.genre-card:hover .genre-card-arrow,
.genre-card-active .genre-card-arrow {
  background:#a7804c;
  color:white;
  transform:rotate(45deg);
}

.genre-library-bottom {
  display:flex;
  justify-content:space-between;
  padding-top:20px;
  margin-top:28px;
  border-top:1px solid #cbbda8;
  color:#9a8b77;
  font-size:8px;
  letter-spacing:.15em;
}

/* SELECTED GENRE */

.genre-detail {
  padding:105px 0;
  background:#17130f;
}

.genre-detail-heading {
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:30px;
}

.genre-detail-counter {
  color:#9a8669;
  font-size:8px;
  letter-spacing:.15em;
}

.genre-detail-content {
  display:grid;
  grid-template-columns:.9fr 1.1fr;
  min-height:380px;
  border:1px solid #473a2a;
  animation:genre-detail-in .55s ease both;
}

.genre-detail-visual {
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
  overflow:hidden;
  background:radial-gradient(ellipse at center,var(--detail-color,#786042),#211b14 80%);
}

.genre-detail-visual-inner {
  position:relative;
  z-index:2;
  width:75%;
  min-height:260px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:20px;
  border:1px solid rgba(222,193,147,.55);
  background:rgba(22,18,13,.45);
  text-align:center;
}

.genre-detail-visual-inner>span {
  color:#d8c09a;
  font-size:7px;
  letter-spacing:.2em;
}

.genre-detail-visual-inner strong {
  font:clamp(32px,4vw,49px) Georgia,serif;
  color:#f0e5d0;
}

.genre-detail-visual-inner i {
  color:#d1ad77;
  font-size:8px;
  letter-spacing:.18em;
  font-style:normal;
}

.genre-detail-watermark {
  position:absolute;
  font:300px Georgia,serif;
  color:rgba(225,194,145,.1);
}

.genre-detail-visual-footer {
  position:absolute;
  bottom:17px;
  left:20px;
  right:20px;
  display:flex;
  justify-content:space-between;
  color:#d3b78d;
  font-size:7px;
  letter-spacing:.13em;
}

.genre-detail-01 { --detail-color:#7b6444; }
.genre-detail-02 { --detail-color:#865a5b; }
.genre-detail-03 { --detail-color:#666858; }
.genre-detail-04 { --detail-color:#75533d; }
.genre-detail-05 { --detail-color:#496d75; }
.genre-detail-06 { --detail-color:#634a49; }
.genre-detail-07 { --detail-color:#987347; }
.genre-detail-08 { --detail-color:#7b6249; }
.genre-detail-09 { --detail-color:#775b72; }

.genre-detail-copy { padding:42px; }

.genre-detail-copy h2 {
  margin:16px 0 7px;
  font-size:54px;
}

.genre-detail-copy h2 em { color:var(--gold); }

.genre-detail-copy h3 {
  font-size:17px;
  font-style:italic;
  color:#d2b27e;
  margin:0 0 15px;
  letter-spacing:0;
}

.genre-detail-copy>p {
  color:#a99e90;
  font-size:11px;
  line-height:1.9;
}

.genre-subgenres { margin-top:25px; }

.genre-subgenres>span {
  display:block;
  margin-bottom:9px;
  color:#b49568;
  font-size:8px;
  letter-spacing:.14em;
}

.genre-subgenres>div {
  display:flex;
  align-items:center;
  gap:12px;
  padding:10px 0;
  border-top:1px solid #493b2b;
}

.genre-subgenres>div span {
  color:var(--gold);
  font:italic 11px Georgia,serif;
}

.genre-subgenres>div strong {
  font-size:9px;
  font-weight:400;
  color:#d8ccba;
}

.genre-subgenres>div i {
  margin-left:auto;
  color:var(--gold);
  font-style:normal;
}

.genre-detail-button {
  display:inline-flex;
  gap:20px;
  align-items:center;
  margin-top:24px;
  padding-bottom:9px;
  border-bottom:1px solid var(--gold);
  color:var(--gold-light);
  font-size:9px;
  letter-spacing:.13em;
  transition:gap .3s;
}

.genre-detail-button:hover { gap:30px; }

.genre-detail-navigation {
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:15px;
  margin-top:25px;
}

.genre-detail-navigation>button {
  padding:9px 0;
  background:none;
  border:0;
  color:#c6a775;
  font-size:8px;
  letter-spacing:.1em;
  cursor:pointer;
}

.genre-detail-dots {
  display:flex;
  align-items:center;
  gap:8px;
}

.genre-dot {
  width:6px;
  height:6px;
  padding:0;
  border:0;
  border-radius:10px;
  background:#6a5a45;
  cursor:pointer;
  transition:width .3s,background .3s;
}

.genre-dot-active {
  width:24px;
  background:var(--gold);
}

/* APPROACH */

.genre-approach {
  padding:100px 0;
  background:#eee7da;
  color:#211a13;
}

.genre-approach-heading { max-width:650px; }

.genre-approach-heading h2 {
  margin:20px 0;
  font-size:clamp(53px,6vw,75px);
  line-height:1.03;
}

.genre-approach-heading h2 em { color:#a17a48; }

.genre-approach-heading>p {
  max-width:420px;
  color:#837766;
  font-size:11px;
  line-height:1.9;
}

.genre-approach-grid {
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:20px;
  margin-top:45px;
}

.genre-approach-card {
  padding:24px 20px;
  background:#e4daca;
  border:1px solid #d2c5b0;
  transition:transform .4s,background .4s;
}

.genre-approach-card:hover {
  transform:translateY(-6px);
  background:#e0d2bd;
}

.genre-approach-top {
  display:flex;
  justify-content:space-between;
  align-items:center;
}

.genre-approach-top span {
  color:#9a774c;
  font:italic 14px Georgia,serif;
}

.genre-approach-top i {
  color:#aa8755;
  font-size:24px;
  font-style:normal;
}

.genre-approach-card h3 {
  font-size:27px;
  margin:30px 0 10px;
}

.genre-approach-card p {
  min-height:55px;
  color:#817565;
  font-size:10px;
  line-height:1.8;
}

.genre-approach-line {
  height:1px;
  margin-top:25px;
  background:#c5b49a;
  position:relative;
}

.genre-approach-line::after {
  content:"";
  position:absolute;
  left:0;
  top:0;
  width:35%;
  height:1px;
  background:#a17a48;
  transition:width .4s;
}

.genre-approach-card:hover .genre-approach-line::after {
  width:100%;
}

/* FINAL CTA */

.genre-final {
  position:relative;
  padding:85px 0 24px;
  overflow:hidden;
  background:#c3a06d;
  color:#21170d;
}

.genre-final-decoration {
  position:absolute;
  right:5%;
  top:-120px;
  font:420px Georgia,serif;
  color:rgba(47,30,13,.055);
  pointer-events:none;
}

.genre-final>.genre-container {
  position:relative;
  z-index:1;
}

.genre-final .genre-dark-eyebrow { color:#62482b; }

.genre-final-content {
  display:grid;
  grid-template-columns:1fr 310px;
  align-items:center;
  gap:40px;
  margin:30px 0 65px;
}

.genre-final-content h2 {
  margin:0;
  font-size:clamp(52px,6vw,76px);
  line-height:1.04;
}

.genre-final-content h2 em { color:#f1e1c5; }

.genre-final-content p {
  color:#57432a;
  font-size:11px;
  line-height:1.9;
}

.genre-final-button {
  display:inline-flex;
  align-items:center;
  gap:20px;
  padding:13px 17px;
  border:1px solid #725531;
  border-radius:30px;
  margin-top:10px;
  color:#24190e;
  font-size:9px;
  letter-spacing:.1em;
  transition:background .3s,color .3s;
}

.genre-final-button:hover {
  background:#24190e;
  color:#e8d5b3;
}

.genre-final-footer {
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

.genre-final-footer a { color:inherit; }

@keyframes genre-detail-in {
  from { opacity:0; transform:translateY(15px); }
  to { opacity:1; transform:translateY(0); }
}

/* TABLET */

@media(max-width:850px) {
  .atlas-main {
    grid-template-columns:.8fr 1.2fr;
    gap:30px;
  }

  .atlas-heading h1 { font-size:75px; }
  .atlas-directory { padding:20px 15px; }
  .atlas-item-name { font-size:14px; }
}

/* MOBILE */

@media(max-width:600px) {
  .genre-container { width:calc(100% - 34px); }

  .atlas-hero {
    padding-top:105px;
    min-height:auto;
  }

  .atlas-topline {
    font-size:6px;
    gap:8px;
  }

  .atlas-edition { display:none; }

  .atlas-main {
    grid-template-columns:1fr;
    gap:40px;
    padding:60px 0 30px;
  }

  .atlas-heading h1 {
    font-size:clamp(76px,16vw,96px);
  }

  .atlas-heading-bottom p { font-size:10px; }

  .atlas-directory { padding:20px 14px; }

  .atlas-directory-heading h2 { font-size:25px; }

  .atlas-directory-list { column-gap:12px; }

  .atlas-directory-item { gap:7px; padding:12px 2px; }

  .atlas-item-name { font-size:14px; }
  .atlas-item-name small { font-size:5px; }
  .atlas-item-symbol { width:23px; height:23px; }

  .atlas-selection { padding:13px 10px; gap:10px; }
  .atlas-selection-symbol { width:34px; height:34px; }
  .atlas-selection-copy strong { font-size:17px; }

  .atlas-selection>button {
    gap:5px;
    font-size:6px;
  }

  .atlas-bottomline {
    font-size:5px;
    gap:7px;
  }

  .genre-library,
  .genre-detail,
  .genre-approach { padding:75px 0; }

  .genre-library-heading {
    flex-direction:column;
    align-items:flex-start;
    gap:20px;
  }

  .genre-library-heading h2 { font-size:54px; }

  .genre-card-grid {
    grid-template-columns:repeat(2,minmax(0,1fr));
    gap:12px;
  }

  .genre-card-art { height:135px; }
  .genre-card-symbol { font-size:75px; }

  .genre-card-information { padding:13px 10px; }
  .genre-card-information h3 { font-size:17px; }
  .genre-card-information p { font-size:8px; line-height:1.5; }
  .genre-card-arrow { width:25px; height:25px; }

  .genre-library-bottom { font-size:6px; }

  .genre-detail-content { grid-template-columns:1fr; }
  .genre-detail-visual { min-height:290px; }
  .genre-detail-copy { padding:25px 20px; }
  .genre-detail-copy h2 { font-size:47px; }

  .genre-detail-navigation>button { font-size:7px; }
  .genre-detail-dots { gap:5px; }
  .genre-dot { width:5px; height:5px; }
  .genre-dot-active { width:17px; }

  .genre-approach-heading h2 { font-size:54px; }

  .genre-approach-grid {
    grid-template-columns:1fr;
    gap:12px;
  }

  .genre-approach-card { padding:21px; }
  .genre-approach-card h3 { margin-top:20px; }
  .genre-approach-card p { min-height:0; }

  .genre-final-content {
    grid-template-columns:1fr;
    gap:20px;
    margin-bottom:45px;
  }

  .genre-final-content h2 { font-size:54px; }
  .genre-final-footer { font-size:7px; }
  .genre-final-decoration { font-size:250px; top:-45px; }
}

/* SMALL PHONES */

@media(max-width:370px) {
  .atlas-heading h1 { font-size:67px; }
  .atlas-directory-item { gap:5px; }
  .atlas-item-name { font-size:12px; }
  .genre-card-grid { gap:8px; }
  .genre-card-information h3 { font-size:15px; }
  .genre-card-art { height:115px; }
  .genre-detail-navigation>button { font-size:6px; }
}

/* ACCESSIBILITY */

@media(prefers-reduced-motion:reduce) {
  .genre-page *,
  .genre-page *::before,
  .genre-page *::after {
    animation:none!important;
    transition:none!important;
    scroll-behavior:auto!important;
  }

  .genre-reveal {
    opacity:1;
    transform:none;
  }
}

`;
