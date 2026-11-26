
import { Link } from "react-router-dom";
import {
  ServiceDetailLayout,
  type DetailContent,
} from "@/components/ServiceDetailLayout";

type Props = {
  page: DetailContent;
};

const creativeNumbers: Record<string, string> = {
  "Story Writing": "01",
  "Novel Writing": "02",
  "Poetry Writing": "03",
  "Screenwriting": "04",
  "Script Writing": "05",
  "Book Outlining": "06",
};

const creativeDescriptions: Record<string, string> = {
  "Story Writing": "Every great story begins with a single idea.",
  "Novel Writing": "Create worlds your readers never want to leave.",
  "Poetry Writing": "Give your thoughts a voice through words.",
  "Screenwriting": "Transform powerful ideas into compelling scenes.",
  "Script Writing": "Every line deserves a purpose.",
  "Book Outlining": "A clear direction for every chapter.",
};

export default function CreativeWritingSubpageLayout({
  page,
}: Props) {
  const chapter = creativeNumbers[page.title] ?? "01";

  const quote =
    creativeDescriptions[page.title] ??
    "Every great piece of writing begins with an idea.";

  // Intercept internal section links from ServiceDetailLayout.
  // This prevents HashRouter from treating them as page navigation.
  const handleInternalNavigation = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const target = event.target;

    if (!(target instanceof Element)) return;

    const anchor = target.closest<HTMLAnchorElement>(
      'a[href^="#"]'
    );

    if (!anchor) return;

    const href = anchor.getAttribute("href");

    if (!href || href === "#") return;

    let sectionId: string;

    try {
      sectionId = decodeURIComponent(href.slice(1));
    } catch {
      return;
    }

    const section = document.getElementById(sectionId);

    if (!section) return;

    event.preventDefault();
    event.stopPropagation();

    const headerOffset = 100;

    const top =
      section.getBoundingClientRect().top +
      window.scrollY -
      headerOffset;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
        ? "auto"
        : "smooth",
    });

    // Close mobile chapter menu after selection.
    anchor.closest("details")?.removeAttribute("open");
  };

  return (
    <div
      className="cw-luxury"
      onClickCapture={handleInternalNavigation}
    >
      <style>{`
        .cw-luxury {
          --lux-gold: #c6a36e;
          --lux-text: #eee7dc;
          --lux-muted: #a49a8c;
          background: #181511;
          color: var(--lux-text);
          overflow: clip;
        }

        .cw-luxury * {
          box-sizing: border-box;
        }

        .lux-hero {
          position: relative;
          background: #181511;
        }

        .lux-container {
          width: min(1320px, calc(100% - 100px));
          margin: 0 auto;
          padding: 112px 0 25px;
        }

        .lux-breadcrumb {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 75px;
          color: #777064;
          font-size: 11px;
        }

        .lux-breadcrumb a {
          color: #aaa092;
          text-decoration: none;
          transition: color .2s;
        }

        .lux-breadcrumb a:hover {
          color: var(--lux-gold);
        }

        .lux-breadcrumb-current {
          color: var(--lux-gold);
        }

        .lux-layout {
          display: grid;
          grid-template-columns: 1.2fr .8fr;
          align-items: center;
          gap: 90px;
          min-height: 350px;
        }

        .lux-left {
          max-width: 690px;
        }

        .lux-label {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-bottom: 28px;
          color: var(--lux-gold);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .24em;
          text-transform: uppercase;
        }

        .lux-label::after {
          content: "";
          width: 35px;
          height: 1px;
          background: var(--lux-gold);
        }

        .lux-subtitle {
          margin-bottom: 15px;
          color: #a99577;
          font-size: 9px;
          letter-spacing: .19em;
          text-transform: uppercase;
        }

        .lux-title {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(42px, 4.5vw, 57px);
          font-weight: 400;
          line-height: 1.12;
          letter-spacing: -.035em;
          color: var(--lux-text);
          overflow-wrap: anywhere;
        }

        .lux-title span {
          color: var(--lux-gold);
        }

        .lux-description {
          max-width: 570px;
          margin-top: 20px;
          color: var(--lux-muted);
          font-size: 14px;
          line-height: 1.9;
        }

        .lux-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 25px;
          margin-top: 30px;
        }

        .lux-cta {
          display: inline-flex;
          align-items: center;
          gap: 25px;
          padding: 14px 19px;
          background: var(--lux-gold);
          color: #181511;
          font-size: 11px;
          font-weight: 700;
          text-decoration: none;
          transition: .25s ease;
        }

        .lux-cta:hover {
          background: #dfc18e;
          transform: translateY(-2px);
        }

        .lux-cta span {
          font-size: 15px;
        }

        .lux-link {
          border: 0;
          padding: 0;
          background: transparent;
          color: var(--lux-gold);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .13em;
          text-transform: uppercase;
          cursor: pointer;
          transition: color .25s;
        }

        .lux-link:hover {
          color: white;
        }

        .lux-right {
          padding: 10px 0 10px 38px;
          border-left: 1px solid rgba(198,163,110,.3);
        }

        .lux-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 42px;
        }

        .lux-brand {
          color: var(--lux-gold);
          font-family: Georgia, serif;
          font-size: 29px;
          font-style: italic;
        }

        .lux-brand-name {
          display: block;
          margin-top: 4px;
          color: #8e8477;
          font-size: 7px;
          letter-spacing: .25em;
        }

        .lux-number {
          color: var(--lux-gold);
          font-family: Georgia, serif;
          font-size: 16px;
        }

        .lux-overline {
          margin-bottom: 16px;
          color: var(--lux-gold);
          font-size: 9px;
          font-weight: 600;
          letter-spacing: .2em;
          text-transform: uppercase;
        }

        .lux-quote {
          max-width: 380px;
          margin: 0;
          color: #e9dfd1;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(25px, 2.6vw, 34px);
          font-weight: 400;
          line-height: 1.3;
          letter-spacing: -.025em;
        }

        .lux-quote em {
          color: var(--lux-gold);
          font-weight: 400;
        }

        .lux-divider {
          width: 45px;
          height: 1px;
          margin: 24px 0;
          background: var(--lux-gold);
        }

        .lux-note {
          max-width: 320px;
          margin: 0;
          color: #948a7e;
          font-family: Georgia, serif;
          font-size: 13px;
          line-height: 1.8;
        }

        .lux-card-bottom {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          margin-top: 38px;
          padding-top: 14px;
          border-top: 1px solid rgba(198,163,110,.17);
          color: #847a6e;
          font-size: 8px;
          letter-spacing: .13em;
          text-transform: uppercase;
        }

        .lux-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-top: 65px;
          padding-top: 17px;
          border-top: 1px solid rgba(198,163,110,.18);
          color: #81776b;
          font-size: 8px;
          letter-spacing: .15em;
          text-transform: uppercase;
        }

        /* Hide duplicate hero from shared content component. */
        .cw-luxury-content > main > section:first-of-type {
          display: none !important;
        }

        /* Keep article sections clear of the sticky header. */
        .cw-luxury-content section[id] {
          scroll-margin-top: 105px;
        }

        @media (max-width: 950px) {
          .lux-container {
            width: calc(100% - 65px);
          }

          .lux-layout {
            grid-template-columns: 1fr;
            gap: 55px;
          }

          .lux-right {
            max-width: 600px;
          }

          .lux-footer {
            margin-top: 45px;
          }
        }

        @media (max-width: 600px) {
          .lux-container {
            width: calc(100% - 38px);
            padding-top: 100px;
          }

          .lux-breadcrumb {
            margin-bottom: 48px;
            font-size: 10px;
            gap: 8px;
          }

          .lux-label {
            margin-bottom: 26px;
            font-size: 8px;
            letter-spacing: .17em;
          }

          .lux-title {
            font-size: clamp(40px, 10vw, 50px);
          }

          .lux-description {
            font-size: 13px;
          }

          .lux-actions {
            gap: 19px;
            margin-top: 24px;
          }

          .lux-cta {
            padding: 14px 16px;
          }

          .lux-right {
            padding-left: 23px;
          }

          .lux-card-top {
            margin-bottom: 30px;
          }

          .lux-quote {
            font-size: 27px;
          }

          .lux-note {
            font-size: 12px;
          }

          .lux-card-bottom {
            margin-top: 28px;
          }

          .lux-footer {
            margin-top: 40px;
            font-size: 7px;
            letter-spacing: .07em;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cw-luxury *,
          .cw-luxury *::before,
          .cw-luxury *::after {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>

      {/* CREATIVE WRITING HERO */}

      <section className="lux-hero">
        <div className="lux-container">
          <nav className="lux-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/creative-writing">Creative Writing</Link>
            <span>/</span>
            <span className="lux-breadcrumb-current">
              {page.title}
            </span>
          </nav>

          <div className="lux-layout">
            <div className="lux-left">
              <div className="lux-label">
                WORDSMITH SQUAD / CREATIVE WRITING
              </div>

              <div className="lux-subtitle">
                THE ART OF CREATIVE EXPRESSION
              </div>

              <h1 className="lux-title">
                {page.title}
                <span>.</span>
              </h1>

              <p className="lux-description">
                {page.intro}
              </p>

              <div className="lux-actions">
                <Link to="/contact" className="lux-cta">
                  Discuss Your Project
                  <span>↗</span>
                </Link>

                <button
                  type="button"
                  className="lux-link"
                  onClick={() => {
                    const target =
                      document.getElementById("overview");

                    if (!target) return;

                    window.scrollTo({
                      top:
                        target.getBoundingClientRect().top +
                        window.scrollY -
                        100,
                      behavior: "smooth",
                    });
                  }}
                >
                  Explore Our Services ↓
                </button>
              </div>
            </div>

            <aside className="lux-right">
              <div className="lux-card-top">
                <div>
                  <div className="lux-brand">W.</div>
                  <span className="lux-brand-name">
                    WORDSMITH SQUAD
                  </span>
                </div>

                <span className="lux-number">
                  {chapter}
                </span>
              </div>

              <div className="lux-overline">
                A WORDSMITH PERSPECTIVE
              </div>

              <h2 className="lux-quote">
                {quote}
              </h2>

              <div className="lux-divider" />

              <p className="lux-note">
                Thoughtful words. Meaningful stories.
                Creative work shaped around your vision.
              </p>

              <div className="lux-card-bottom">
                <span>CREATIVITY</span>
                <span>CRAFTSMANSHIP</span>
              </div>
            </aside>
          </div>

          <div className="lux-footer">
            <span>WORDSMITH SQUAD</span>
            <span>PRECISION · PURPOSE · PASSION</span>
          </div>
        </div>
      </section>

      {/* ORIGINAL SHARED CONTENT AND SIDEBAR */}

      <div className="cw-luxury-content">
        <ServiceDetailLayout page={page} />
      </div>
    </div>
  );
}
