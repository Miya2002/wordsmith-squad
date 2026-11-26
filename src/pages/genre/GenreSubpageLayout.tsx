
import { Link } from "react-router-dom";

export type EditingPageData = {
  title: string;
  subtitle: string;
  number: string;
  image?: string;
  imageAlt?: string;
  accent?: string;
  description: string;
  sections: {
    heading: string;
    paragraphs?: string[];
    bullets?: string[];
    subsections?: {
      heading: string;
      paragraphs: string[];
    }[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

type Props = {
  data: EditingPageData;
};

const getSectionId = (heading: string, index: number) =>
  `genre-section-${index}-${heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;

export default function GenreSubpageLayout({ data }: Props) {
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    const headerOffset = 100;
    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="genre-editorial-page">
      <style>{`
        .genre-editorial-page {
          --ge-gold: #c6a36e;
          --ge-cream: #f0e8dc;
          background: #15120f;
          color: var(--ge-cream);
          overflow: clip;
        }

        .genre-editorial-page *,
        .genre-editorial-page *::before,
        .genre-editorial-page *::after {
          box-sizing: border-box;
        }

        .ge-container {
          width: min(1320px, calc(100% - 100px));
          margin: auto;
        }

        .ge-hero {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 145px 0 0;
          background:
            radial-gradient(ellipse at 70% 45%, rgba(157,116,65,.13), transparent 45%),
            linear-gradient(125deg,#17130f,#1d1812 65%,#100e0b);
        }

        .ge-hero::before {
          content: "";
          position: absolute;
          z-index: -1;
          inset: 0;
          opacity: .11;
          background-image: radial-gradient(rgba(198,163,110,.6) .7px, transparent .7px);
          background-size: 18px 18px;
        }

        .ge-hero::after {
          content: "STORIES";
          position: absolute;
          z-index: -1;
          right: -25px;
          bottom: 100px;
          color: rgba(198,163,110,.035);
          font-family: Georgia,serif;
          font-size: clamp(100px,20vw,260px);
          letter-spacing: -.09em;
          white-space: nowrap;
          pointer-events: none;
        }

        .ge-breadcrumb {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          color: #938779;
          font-size: 12px;
        }

        .ge-breadcrumb a {
          color: var(--ge-gold);
          text-decoration: none;
          transition: color .3s;
        }

        .ge-breadcrumb a:hover {
          color: white;
        }

        .ge-main {
          position: relative;
          display: grid;
          grid-template-columns: 125px minmax(0,1fr) 125px;
          align-items: center;
          gap: 35px;
          min-height: 535px;
          padding: 75px 0 70px;
        }

        .ge-index {
          align-self: stretch;
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 1px solid rgba(198,163,110,.28);
          animation: ge-reveal .9s ease both;
        }

        .ge-index-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 17px;
        }

        .ge-index-number {
          color: var(--ge-gold);
          font-family: "Playfair Display",Georgia,serif;
          font-size: 77px;
          font-weight: 400;
          letter-spacing: -.09em;
          line-height: 1;
        }

        .ge-index-line {
          width: 1px;
          height: 75px;
          background: linear-gradient(to bottom,var(--ge-gold),transparent);
        }

        .ge-index-caption {
          color: #9b8b75;
          font-size: 8px;
          letter-spacing: .22em;
          writing-mode: vertical-rl;
          text-transform: uppercase;
        }

        .ge-copy {
          min-width: 0;
          animation: ge-reveal 1s .12s ease both;
        }

        .ge-eyebrow {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 27px;
          color: var(--ge-gold);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .27em;
          text-transform: uppercase;
        }

        .ge-eyebrow::after {
          content: "";
          width: 48px;
          height: 1px;
          background: var(--ge-gold);
        }

        .ge-subtitle {
          display: inline-block;
          margin-bottom: 23px;
          padding: 9px 14px;
          border-left: 2px solid var(--ge-gold);
          background: rgba(198,163,110,.07);
          color: #d5c1a1;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .2em;
          line-height: 1.7;
          text-transform: uppercase;
        }

        .ge-title {
          max-width: 950px;
          margin: 0;
          color: var(--ge-cream);
          font-family: "Playfair Display",Georgia,serif;
          font-size: clamp(54px,7vw,100px);
          font-weight: 400;
          letter-spacing: -.075em;
          line-height: .99;
          overflow-wrap: anywhere;
        }

        .ge-title span {
          color: var(--ge-gold);
        }

        .ge-description {
          max-width: 690px;
          margin-top: 27px;
          color: #b5a99a;
          font-size: 16px;
          line-height: 1.9;
        }

        .ge-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 27px;
          margin-top: 35px;
        }

        .ge-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          min-height: 55px;
          padding: 0 26px;
          border-radius: 50px;
          background: var(--ge-gold);
          color: #17130e;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          transition: .35s ease;
        }

        .ge-cta:hover {
          transform: translateY(-4px);
          background: #e0c18d;
          box-shadow: 0 12px 30px rgba(198,163,110,.2);
        }

        .ge-cta span {
          font-size: 19px;
        }

        .ge-explore {
          border: 0;
          padding: 0;
          background: transparent;
          color: var(--ge-gold);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .17em;
          cursor: pointer;
          transition: color .3s;
        }

        .ge-explore:hover {
          color: white;
        }

        .ge-side {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0;
          border-left: 1px solid rgba(198,163,110,.28);
          animation: ge-reveal 1s .25s ease both;
        }

        .ge-monogram {
          color: var(--ge-gold);
          font-family: "Playfair Display",Georgia,serif;
          font-size: 54px;
          font-style: italic;
        }

        .ge-side-rule {
          width: 35px;
          height: 1px;
          background: var(--ge-gold);
        }

        .ge-side-text {
          color: #9a8c7b;
          font-size: 8px;
          letter-spacing: .25em;
          writing-mode: vertical-rl;
          text-transform: uppercase;
        }

        .ge-side-bottom {
          color: var(--ge-gold);
          font-family: "Playfair Display",Georgia,serif;
          font-size: 18px;
        }

        .ge-footer {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          align-items: center;
          gap: 15px;
          padding: 22px 0 27px;
          border-top: 1px solid rgba(198,163,110,.22);
          color: #95836b;
          font-size: 8px;
          letter-spacing: .19em;
        }

        .ge-footer span:nth-child(2) {
          text-align: center;
        }

        .ge-footer span:last-child {
          text-align: right;
        }

        @keyframes ge-reveal {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .genre-content {
          background: #eee7da;
          color: #30271f;
          padding: 85px 50px;
        }

        .genre-content-wrap {
          display: grid;
          grid-template-columns: 250px minmax(0,1fr);
          gap: 55px;
          max-width: 1320px;
          margin: auto;
          align-items: start;
        }

        .genre-toc {
          position: sticky;
          top: 105px;
          padding: 25px;
          border: 1px solid #d5c6b2;
          background: #f3ede3;
        }

        .genre-toc-title {
          margin-bottom: 16px;
          padding-bottom: 15px;
          border-bottom: 1px solid #d5c6b2;
          color: #a47c46;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .2em;
          text-transform: uppercase;
        }

        .genre-toc button {
          display: block;
          width: 100%;
          padding: 13px 0;
          border: 0;
          border-bottom: 1px solid #e0d6c8;
          background: transparent;
          color: #5f574d;
          text-align: left;
          font-size: 12px;
          line-height: 1.7;
          cursor: pointer;
          transition: color .25s, padding-left .25s;
        }

        .genre-toc button:hover {
          padding-left: 5px;
          color: #a47c46;
        }

        .genre-article {
          min-width: 0;
          max-width: 950px;
        }

        .genre-chapter {
          margin-bottom: 55px;
          padding-bottom: 45px;
          border-bottom: 1px solid #d5c6b2;
          scroll-margin-top: 110px;
        }

        .genre-chapter-label {
          margin-bottom: 18px;
          color: #aa8554;
          font-family: "Playfair Display",Georgia,serif;
          font-size: 13px;
          font-style: italic;
        }

        .genre-chapter h2 {
          margin: 0 0 25px;
          color: #30271f;
          font-family: "Playfair Display",Georgia,serif;
          font-size: clamp(30px,4vw,45px);
          font-weight: 400;
          line-height: 1.2;
        }

        .genre-chapter p {
          margin: 0 0 18px;
          color: #786d60;
          font-size: 14px;
          line-height: 2;
        }

        .genre-chapter ul {
          margin: 22px 0;
          padding-left: 21px;
        }

        .genre-chapter li {
          margin-bottom: 13px;
          padding-left: 5px;
          color: #786d60;
          font-size: 14px;
          line-height: 1.8;
        }

        .genre-chapter li::marker {
          color: #b38b56;
        }

        .genre-subsection {
          margin-top: 27px;
          padding: 24px;
          border-left: 2px solid #c6a36e;
          background: rgba(255,255,255,.23);
        }

        .genre-subsection h3 {
          margin: 0 0 12px;
          color: #392f25;
          font: 400 23px/1.3 "Playfair Display",Georgia,serif;
        }

        .genre-subsection p:last-child {
          margin-bottom: 0;
        }

        .genre-faq {
          margin-top: 75px;
          padding-top: 45px;
          border-top: 1px solid #d5c6b2;
          scroll-margin-top: 110px;
        }

        .genre-faq h2 {
          margin-bottom: 28px;
          color: #30271f;
          font: 400 clamp(30px,4vw,42px)/1.2 "Playfair Display",Georgia,serif;
        }

        .genre-faq details {
          margin-bottom: 12px;
          border: 1px solid #d8cbbb;
          background: rgba(255,255,255,.2);
        }

        .genre-faq summary {
          position: relative;
          padding: 19px 45px 19px 20px;
          color: #392f25;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          list-style: none;
        }

        .genre-faq summary::-webkit-details-marker {
          display: none;
        }

        .genre-faq summary::after {
          content: "+";
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          color: #a77b47;
          font-size: 21px;
        }

        .genre-faq details[open] summary::after {
          content: "−";
        }

        .genre-faq details p {
          padding: 0 20px 18px;
          margin: 0;
          color: #786d60;
          font-size: 13px;
          line-height: 1.9;
        }

        .genre-final {
          position: relative;
          overflow: hidden;
          padding: 85px 24px;
          background: #17130f;
          text-align: center;
        }

        .genre-final-inner {
          position: relative;
          max-width: 720px;
          margin: auto;
        }

        .genre-final-label {
          color: #c6a36e;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .24em;
        }

        .genre-final h2 {
          margin: 20px 0;
          color: #f1e9dd;
          font: 400 clamp(34px,5vw,55px)/1.15 "Playfair Display",Georgia,serif;
        }

        .genre-final p {
          color: #b5a99a;
          font-size: 14px;
          line-height: 1.9;
        }

        .genre-final .genre-cta {
          margin-top: 25px;
        }

        @media(max-width: 950px) {
          .ge-container {
            width: calc(100% - 60px);
          }

          .ge-main {
            grid-template-columns: 80px minmax(0,1fr) 75px;
            gap: 23px;
            min-height: 500px;
          }

          .ge-index-number {
            font-size: 57px;
          }

          .ge-title {
            font-size: clamp(48px,7vw,76px);
          }

          .ge-description {
            font-size: 14px;
          }

          .genre-content-wrap {
            grid-template-columns: 195px minmax(0,1fr);
            gap: 30px;
          }
        }

        @media(max-width: 650px) {
          .ge-container {
            width: calc(100% - 38px);
          }

          .ge-hero {
            padding-top: 120px;
          }

          .ge-main {
            grid-template-columns: 1fr;
            gap: 0;
            min-height: auto;
            padding: 65px 0 55px;
          }

          .ge-index {
            align-self: auto;
            justify-content: flex-start;
            border-right: 0;
            margin-bottom: 27px;
          }

          .ge-index-inner {
            flex-direction: row;
            gap: 13px;
          }

          .ge-index-number {
            font-size: 42px;
          }

          .ge-index-line {
            width: 40px;
            height: 1px;
          }

          .ge-index-caption {
            writing-mode: horizontal-tb;
            font-size: 8px;
          }

          .ge-eyebrow {
            font-size: 9px;
            margin-bottom: 23px;
          }

          .ge-subtitle {
            font-size: 8px;
            margin-bottom: 20px;
          }

          .ge-title {
            font-size: clamp(44px,11vw,66px);
            line-height: 1.03;
          }

          .ge-description {
            margin-top: 22px;
            font-size: 14px;
          }

          .ge-actions {
            align-items: flex-start;
            flex-direction: column;
            gap: 21px;
            margin-top: 28px;
          }

          .ge-side {
            display: none;
          }

          .ge-footer {
            grid-template-columns: 1fr 1fr;
            gap: 13px;
            font-size: 7px;
          }

          .ge-footer span:nth-child(2) {
            text-align: right;
          }

          .ge-footer span:last-child {
            display: none;
          }

          .ge-hero::after {
            bottom: 70px;
          }

          .genre-content {
            padding: 55px 18px;
          }

          .genre-content-wrap {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .genre-toc {
            position: relative;
            top: auto;
          }

          .genre-chapter {
            margin-bottom: 42px;
            scroll-margin-top: 90px;
          }

          .genre-subsection {
            padding: 19px;
          }

          .genre-faq {
            scroll-margin-top: 90px;
          }

          .genre-final {
            padding: 65px 20px;
          }
        }

        @media(prefers-reduced-motion: reduce) {
          .genre-editorial-page *,
          .genre-editorial-page *::before,
          .genre-editorial-page *::after {
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      <section className="ge-hero">
        <div className="ge-container">
          <nav className="ge-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/genre">Genre</Link>
            <span>/</span>
            <span>{data.title}</span>
          </nav>

          <div className="ge-main">
            <div className="ge-index">
              <div className="ge-index-inner">
                <span className="ge-index-number">{data.number}</span>
                <span className="ge-index-line" />
                <span className="ge-index-caption">THE COLLECTION</span>
              </div>
            </div>

            <div className="ge-copy">
              <div className="ge-eyebrow">WORDSMITH SQUAD / GENRE</div>

              <div className="ge-subtitle">{data.subtitle}</div>

              <h1 className="ge-title">
                {data.title}
                <span>.</span>
              </h1>

              <p className="ge-description">{data.description}</p>

              <div className="ge-actions">
                <Link to="/contact" className="ge-cta">
                  Discuss Your Project
                  <span>↗</span>
                </Link>

                <button
                  type="button"
                  onClick={() => scrollToSection("genre-details")}
                  className="ge-explore"
                >
                  EXPLORE THE DETAILS ↓
                </button>
              </div>
            </div>

            <div className="ge-side" aria-hidden="true">
              <span className="ge-monogram">W.</span>
              <span className="ge-side-rule" />
              <span className="ge-side-text">THE ART OF STORYTELLING</span>
              <span className="ge-side-bottom">WS / {data.number}</span>
            </div>
          </div>

          <div className="ge-footer">
            <span>WORDSMITH SQUAD</span>
            <span>PRECISION · PURPOSE · PASSION</span>
            <span>YOUR STORY, OUR CRAFT</span>
          </div>
        </div>
      </section>

      <section className="genre-content" id="genre-details">
        <div className="genre-content-wrap">
          <aside className="genre-toc">
            <div className="genre-toc-title">In This Chapter</div>

            {data.sections.map((section, index) => (
              <button
                type="button"
                key={getSectionId(section.heading, index)}
                onClick={() =>
                  scrollToSection(getSectionId(section.heading, index))
                }
              >
                {String(index + 1).padStart(2, "0")} — {section.heading}
              </button>
            ))}

            {data.faqs.length > 0 && (
              <button
                type="button"
                onClick={() => scrollToSection("genre-faq")}
              >
                Frequently Asked Questions
              </button>
            )}
          </aside>

          <article className="genre-article">
            {data.sections.map((section, index) => (
              <section
                className="genre-chapter"
                id={getSectionId(section.heading, index)}
                key={getSectionId(section.heading, index)}
              >
                <div className="genre-chapter-label">
                  CHAPTER {String(index + 1).padStart(2, "0")}
                </div>

                <h2>{section.heading}</h2>

                {section.paragraphs?.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}

                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet, bIndex) => (
                      <li key={bIndex}>{bullet}</li>
                    ))}
                  </ul>
                )}

                {section.subsections?.map((subsection, subIndex) => (
                  <div className="genre-subsection" key={subIndex}>
                    <h3>{subsection.heading}</h3>

                    {subsection.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                ))}
              </section>
            ))}

            {data.faqs.length > 0 && (
              <section className="genre-faq" id="genre-faq">
                <div className="genre-chapter-label">
                  NEED TO KNOW MORE?
                </div>

                <h2>Frequently Asked Questions</h2>

                {data.faqs.map((faq, index) => (
                  <details key={index}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </section>
            )}
          </article>
        </div>
      </section>

      <section className="genre-final">
        <div className="genre-final-inner">
          <div className="genre-final-label">
            YOUR NEXT CHAPTER BEGINS HERE
          </div>

          <h2>Let's bring your story to life.</h2>

          <p>
            Every great story begins with an idea. Tell us about your project
            and let Wordsmith Squad help you shape it into something meaningful.
          </p>

          <Link to="/contact" className="ge-cta">
            Get a Free Consultation
            <span>↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
