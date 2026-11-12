
import { Link } from "react-router-dom";
import { Button, Eyebrow, Reveal, usePageMeta } from "@/components/ui";
import { FinalCTA } from "@/components/Sections";

export type EditingSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  subsections?: {
    heading: string;
    paragraphs?: string[];
    bullets?: string[];
  }[];
};

export type EditingFAQ = {
  question: string;
  answer: string;
};

export type EditingPageData = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  number: string;
  accent: string;
  sections: EditingSection[];
  faqs: EditingFAQ[];
};

export default function EditingSubpageLayout({
  data,
}: {
  data: EditingPageData;
}) {
  usePageMeta(
    `${data.title} | Wordsmith Squad`,
    data.description
  );

  const contents = data.sections.map((section, index) => ({
    id: `editorial-section-${index}`,
    title: section.heading,
  }));

  return (
    <main className="ws-edit-page">
      <style>{`
        .ws-edit-page {
          --ws-gold: #c6a36d;
          --ws-cream: #eee7db;
          --ws-muted: #a79c8e;
          background: #15120f;
          color: #eee7db;
          overflow: clip;
        }

        .ws-edit-page * { box-sizing: border-box; }

        .ws-wrap {
          width: min(1160px, calc(100% - 48px));
          margin: auto;
        }

        .ws-display {
          font-family: "Playfair Display", Georgia, serif;
          font-weight: 400;
          letter-spacing: -.055em;
        }

        .ws-display em {
          color: var(--ws-gold);
          font-weight: 400;
        }

        .ws-kicker {
          color: var(--ws-gold);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .22em;
          text-transform: uppercase;
        }

        /* UNIQUE HERO */

        .ws-sub-hero {
          position: relative;
          padding: 145px 0 85px;
          background:
            radial-gradient(ellipse at 80% 35%, rgba(177,133,72,.16), transparent 43%),
            linear-gradient(120deg,#100e0c,#201a13 65%,#11100e);
          isolation: isolate;
        }

        .ws-sub-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          opacity: .2;
          background-image: radial-gradient(rgba(198,163,109,.7) .6px,transparent .6px);
          background-size: 9px 9px;
        }

        .ws-breadcrumb {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          color: #8f8374;
          font-size: 10px;
        }

        .ws-breadcrumb a {
          color: var(--ws-gold);
          transition: opacity .3s;
        }

        .ws-breadcrumb a:hover { opacity: .6; }

        .ws-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          align-items: center;
          gap: 65px;
          margin-top: 65px;
        }

        .ws-hero-copy {
          animation: ws-enter .8s ease both;
        }

        .ws-page-number {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          color: var(--ws-gold);
          font: italic 13px Georgia,serif;
        }

        .ws-page-number::after {
          content: "";
          width: 35px;
          height: 1px;
          background: var(--ws-gold);
        }

        .ws-hero-copy h1 {
          margin: 0;
          font-size: clamp(48px,6vw,76px);
          line-height: 1.04;
        }

        .ws-hero-copy > p {
          max-width: 490px;
          margin-top: 23px;
          color: #b1a596;
          font-size: 13px;
          line-height: 2;
        }

        .ws-hero-buttons {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 14px;
          margin-top: 30px;
        }

        .ws-hero-visual {
          position: relative;
          min-height: 390px;
          animation: ws-enter 1s .15s both;
        }

        .ws-hero-visual img {
          position: absolute;
          inset: 0 0 0 35px;
          width: calc(100% - 35px);
          height: 100%;
          object-fit: cover;
          border-radius: 180px 180px 5px 5px;
          border: 1px solid rgba(198,163,109,.35);
          filter: brightness(.75) saturate(.7);
          transition: transform .8s,filter .8s;
        }

        .ws-hero-visual:hover img {
          transform: scale(1.035);
          filter: brightness(.9) saturate(.85);
        }

        .ws-image-label {
          position: absolute;
          bottom: 17px;
          left: 55px;
          right: 18px;
          display: flex;
          justify-content: space-between;
          color: #f0d5a9;
          font-size: 8px;
          letter-spacing: .15em;
        }

        .ws-floating-card {
          position: absolute;
          top: 45px;
          left: -20px;
          max-width: 190px;
          padding: 15px 17px;
          border: 1px solid rgba(198,163,109,.3);
          background: rgba(20,17,13,.94);
          box-shadow: 0 18px 40px rgba(0,0,0,.4);
          backdrop-filter: blur(15px);
          animation: ws-float 5s ease-in-out infinite;
        }

        .ws-floating-card strong {
          display: block;
          color: var(--ws-gold);
          font: 19px Georgia,serif;
        }

        .ws-floating-card span {
          display: block;
          margin-top: 5px;
          color: #c0b3a3;
          font-size: 9px;
        }

        .ws-hero-bottom {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 55px;
          padding-top: 18px;
          border-top: 1px solid rgba(198,163,109,.2);
          color: #887c6d;
          font-size: 8px;
          letter-spacing: .14em;
        }

        /* CONTENT AREA */

        .ws-content-area {
          padding: 95px 0 110px;
          background: #eee7db;
          color: #211a13;
        }

        .ws-content-grid {
          display: grid;
          grid-template-columns: 245px minmax(0,1fr);
          align-items: start;
          gap: 65px;
        }

        .ws-content-nav {
          position: sticky;
          top: 115px;
          padding: 23px 18px;
          border: 1px solid #d4c6b2;
          background: #f4eee4;
        }

        .ws-content-nav > span {
          display: block;
          margin-bottom: 15px;
          color: #a27c4c;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: .18em;
        }

        .ws-content-nav a {
          display: block;
          padding: 11px 0;
          border-top: 1px solid #dfd5c6;
          color: #65594b;
          font-size: 10px;
          line-height: 1.5;
          transition: color .25s,padding .25s;
        }

        .ws-content-nav a:hover {
          padding-left: 5px;
          color: #a27c4c;
        }

        .ws-article-section {
          padding: 0 0 43px;
          margin-bottom: 43px;
          border-bottom: 1px solid #d6c9b7;
          scroll-margin-top: 115px;
        }

        .ws-article-section:last-child {
          border-bottom: 0;
        }

        .ws-article-number {
          color: #a47e4d;
          font: italic 13px Georgia,serif;
        }

        .ws-article-section h2 {
          margin: 12px 0 20px;
          color: #241d16;
          font: 400 clamp(27px,3.4vw,39px)/1.2 "Playfair Display",Georgia,serif;
          letter-spacing: -.04em;
        }

        .ws-article-section h3 {
          margin: 30px 0 12px;
          color: #61482d;
          font: 400 22px Georgia,serif;
        }

        .ws-article-section p {
          margin: 0 0 15px;
          color: #766b5e;
          font-size: 12px;
          line-height: 2;
        }

        .ws-article-section ul {
          display: grid;
          gap: 11px;
          margin: 20px 0;
          padding: 0;
          list-style: none;
        }

        .ws-article-section li {
          position: relative;
          padding-left: 22px;
          color: #685d50;
          font-size: 11px;
          line-height: 1.8;
        }

        .ws-article-section li::before {
          content: "✦";
          position: absolute;
          left: 0;
          color: #b18b58;
        }

        .ws-subsection {
          margin-top: 28px;
          padding: 23px;
          border: 1px solid #d8c9b4;
          background: rgba(255,255,255,.23);
          transition: transform .3s,background .3s;
        }

        .ws-subsection:hover {
          transform: translateY(-3px);
          background: rgba(255,255,255,.55);
        }

        .ws-subsection h3 {
          margin: 0 0 13px;
          font-size: 20px;
        }

        /* EDITORIAL QUOTE */

        .ws-quote {
          position: relative;
          margin: 35px 0;
          padding: 27px 30px;
          border-left: 3px solid #bd965f;
          background: #e3d8c7;
          color: #70563a;
          font: italic 21px/1.55 Georgia,serif;
        }

        /* FAQ */

        .ws-faq {
          padding: 90px 0;
          background: #17130f;
        }

        .ws-faq-heading {
          margin-bottom: 35px;
        }

        .ws-faq-heading h2 {
          margin: 15px 0 0;
          font: 400 clamp(35px,5vw,52px) Georgia,serif;
          letter-spacing: -.05em;
        }

        .ws-faq-list {
          max-width: 850px;
          border-top: 1px solid rgba(198,163,109,.3);
        }

        .ws-faq-list details {
          border-bottom: 1px solid rgba(198,163,109,.22);
        }

        .ws-faq-list summary {
          position: relative;
          padding: 21px 35px 21px 0;
          color: #e9dfd1;
          font: 19px Georgia,serif;
          cursor: pointer;
          list-style: none;
        }

        .ws-faq-list summary::-webkit-details-marker {
          display: none;
        }

        .ws-faq-list summary::after {
          content: "+";
          position: absolute;
          right: 4px;
          color: var(--ws-gold);
          font: 22px Georgia,serif;
          transition: transform .3s;
        }

        .ws-faq-list details[open] summary::after {
          transform: rotate(45deg);
        }

        .ws-faq-list details p {
          max-width: 760px;
          padding: 0 25px 22px 0;
          color: #a99d8d;
          font-size: 12px;
          line-height: 1.9;
        }

        @keyframes ws-enter {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes ws-float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-9px); }
        }

        @media(max-width:850px) {
          .ws-hero-grid { gap: 30px; }
          .ws-content-grid { grid-template-columns: 190px 1fr; gap: 30px; }
          .ws-hero-visual { min-height: 330px; }
        }

        @media(max-width:650px) {
          .ws-wrap { width: calc(100% - 34px); }
          .ws-sub-hero { padding: 120px 0 50px; }
          .ws-hero-grid {
            grid-template-columns: 1fr;
            gap: 25px;
            margin-top: 45px;
          }
          .ws-hero-copy h1 { font-size: clamp(48px,12vw,65px); }
          .ws-hero-copy > p { font-size: 11px; }
          .ws-hero-visual { min-height: 330px; }
          .ws-hero-visual img { left: 45px; width: calc(100% - 45px); }
          .ws-floating-card { left: -4px; top: 30px; }
          .ws-image-label { left: 60px; }
          .ws-hero-bottom { margin-top: 35px; font-size: 7px; }
          .ws-content-area { padding: 65px 0; }
          .ws-content-grid { grid-template-columns: 1fr; gap: 35px; }
          .ws-content-nav {
            position: static;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0 15px;
          }
          .ws-content-nav > span { grid-column: 1/-1; }
          .ws-article-section { padding-bottom: 30px; margin-bottom: 30px; }
          .ws-article-section h2 { font-size: 29px; }
          .ws-article-section p { font-size: 11px; }
          .ws-subsection { padding: 17px; }
          .ws-faq { padding: 65px 0; }
          .ws-faq-list summary { font-size: 16px; }
        }

        @media(prefers-reduced-motion:reduce) {
          .ws-edit-page *,
          .ws-edit-page *::before,
          .ws-edit-page *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="ws-sub-hero">
        <div className="ws-wrap">
          <div className="ws-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/explore/editing">Editing</Link>
            <span>/</span>
            <span>{data.title}</span>
          </div>

          <div className="ws-hero-grid">
            <div className="ws-hero-copy">
              <div className="ws-page-number">
                {data.number} / EDITORIAL SERVICES
              </div>

              <Eyebrow>{data.subtitle}</Eyebrow>

              <h1 className="ws-display">
                {data.title}
                <em>.</em>
              </h1>

              <p>{data.description}</p>

              <div className="ws-hero-buttons">
                <Button to="/contact">Discuss Your Project</Button>
                <a
                  href="#page-content"
                  className="text-xs font-semibold tracking-wider text-[#d6b783] transition-colors hover:text-white"
                >
                  EXPLORE THE DETAILS ↓
                </a>
              </div>
            </div>

            <div className="ws-hero-visual">
              <img src={data.image} alt={data.imageAlt} />
              <div className="ws-floating-card">
                <strong>{data.number}</strong>
                <span>WORDSMITH EDITORIAL COLLECTION</span>
              </div>
              <div className="ws-image-label">
                <span>THE ART OF REFINEMENT</span>
                <span>WS / {data.number}</span>
              </div>
            </div>
          </div>

          <div className="ws-hero-bottom">
            <span>WORDSMITH SQUAD</span>
            <span>PRECISION · PURPOSE · PASSION</span>
            <span>YOUR STORY, OUR CRAFT</span>
          </div>
        </div>
      </section>

      {/* ARTICLE AND CONTENTS */}
      <section className="ws-content-area" id="page-content">
        <div className="ws-wrap ws-content-grid">
          <aside className="ws-content-nav">
            <span>IN THIS CHAPTER</span>
            {contents.map((item, index) => (
              <a key={item.id} href={`#${item.id}`}>
                {String(index + 1).padStart(2, "0")} — {item.title}
              </a>
            ))}
            <a href="#editing-faq">FAQs</a>
          </aside>

          <article>
            {data.sections.map((section, index) => (
              <Reveal key={section.heading}>
                <section
                  id={`editorial-section-${index}`}
                  className="ws-article-section"
                >
                  <span className="ws-article-number">
                    CHAPTER {String(index + 1).padStart(2, "0")}
                  </span>

                  <h2>{section.heading}</h2>

                  {section.paragraphs?.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}

                  {section.bullets && (
                    <ul>
                      {section.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  )}

                  {section.subsections?.map((sub, i) => (
                    <div className="ws-subsection" key={i}>
                      <h3>{sub.heading}</h3>
                      {sub.paragraphs?.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                      {sub.bullets && (
                        <ul>
                          {sub.bullets.map((b, j) => (
                            <li key={j}>{b}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </section>
              </Reveal>
            ))}

            <div className="ws-quote">
              Every great book deserves thoughtful attention
              before it reaches the hands of its readers.
            </div>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="ws-faq" id="editing-faq">
        <div className="ws-wrap">
          <Reveal>
            <div className="ws-faq-heading">
              <span className="ws-kicker">A FEW THINGS WORTH KNOWING</span>
              <h2 className="ws-display">
                Frequently Asked <em>Questions.</em>
              </h2>
            </div>
          </Reveal>

          <div className="ws-faq-list">
            {data.faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 45}>
                <details>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title={
          <>
            Let's Bring Your
            {" "}
            <em className="italic">Book to Life.</em>
          </>
        }
        text="Tell us about your manuscript and discover the editorial support that fits your goals."
        button="Request a Free Consultation"
      />
    </main>
  );
}
