
import { Link } from "react-router-dom";
import { Button } from "@/components/ui";
import EditingSubpageLayout, {
  type EditingPageData,
} from "@/pages/editing/EditingSubpageLayout";

export type { EditingPageData };

export default function GhostwritingSubpageLayout({
  data,
}: {
  data: EditingPageData;
}) {
  return (
    <div className="ws-ghostwriting-page">
      <style>{`
        .ws-ghostwriting-page {
          --ghost-gold: #c6a36d;
          background: #100e0c;
          color: #eee7db;
          overflow: clip;
        }

        .ws-ghostwriting-page * {
          box-sizing: border-box;
        }

        .ghost-wrap {
          width: min(1250px, calc(100% - 48px));
          margin: auto;
        }

        .ghost-hero {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 145px 0 65px;
          background:
            radial-gradient(
              ellipse at 85% 40%,
              rgba(174, 125, 62, .19),
              transparent 40%
            ),
            radial-gradient(
              ellipse at 10% 85%,
              rgba(117, 76, 43, .12),
              transparent 35%
            ),
            linear-gradient(135deg, #100e0c, #211910 55%, #100e0c);
        }

        .ghost-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          opacity: .17;
          background-image:
            radial-gradient(
              rgba(198,163,109,.7) .6px,
              transparent .6px
            );
          background-size: 11px 11px;
        }

        .ghost-hero::after {
          content: "STORIES";
          position: absolute;
          z-index: -1;
          right: -30px;
          bottom: 20px;
          color: rgba(198,163,109,.035);
          font: 400 clamp(100px, 20vw, 260px)/1 Georgia, serif;
          letter-spacing: -.08em;
          pointer-events: none;
        }

        .ghost-breadcrumb {
          display: flex;
          flex-wrap: wrap;
          gap: 11px;
          color: #8e8273;
          font-size: 11px;
        }

        .ghost-breadcrumb a {
          color: var(--ghost-gold);
          transition: opacity .3s;
        }

        .ghost-breadcrumb a:hover {
          opacity: .6;
        }

        .ghost-grid {
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          align-items: center;
          gap: 65px;
          margin-top: 80px;
        }

        .ghost-copy {
          animation: ghost-rise .8s ease both;
        }

        .ghost-kicker {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 27px;
          color: var(--ghost-gold);
          font: italic 13px Georgia, serif;
        }

        .ghost-kicker::after {
          content: "";
          width: 42px;
          height: 1px;
          background: var(--ghost-gold);
        }

        .ghost-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          max-width: 100%;
          margin-bottom: 23px;
          padding: 11px 17px;
          border: 1px solid rgba(198,163,109,.35);
          border-radius: 50px;
          background: rgba(198,163,109,.09);
          color: #d4c1a6;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .2em;
          line-height: 1.7;
          text-transform: uppercase;
        }

        .ghost-badge::before {
          content: "";
          flex-shrink: 0;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--ghost-gold);
          box-shadow: 0 0 12px var(--ghost-gold);
        }

        .ghost-title {
          max-width: 760px;
          margin: 0;
          color: #f0e8dc;
          font: 400 clamp(48px, 6.3vw, 82px)/1.04
            "Playfair Display", Georgia, serif;
          letter-spacing: -.065em;
        }

        .ghost-title span {
          color: var(--ghost-gold);
        }

        .ghost-description {
          max-width: 550px;
          margin-top: 25px;
          color: #b3a697;
          font-size: 14px;
          line-height: 2;
        }

        .ghost-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 23px;
          margin-top: 34px;
        }

        .ghost-explore {
          color: var(--ghost-gold);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .12em;
          text-decoration: none;
          transition: color .3s;
        }

        .ghost-explore:hover {
          color: white;
        }

        /* UNIQUE STORY VISUAL */

        .ghost-art {
          position: relative;
          min-height: 440px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: ghost-rise 1s .15s both;
        }

        .ghost-orbit {
          position: absolute;
          width: 390px;
          height: 390px;
          border: 1px solid rgba(198,163,109,.2);
          border-radius: 50%;
        }

        .ghost-orbit.second {
          width: 470px;
          height: 470px;
          border-style: dashed;
          border-color: rgba(198,163,109,.13);
          animation: ghost-spin 65s linear infinite;
        }

        .ghost-manuscript {
          position: relative;
          width: min(310px, 80%);
          min-height: 355px;
          padding: 34px 29px;
          transform: rotate(-5deg);
          border: 1px solid rgba(198,163,109,.42);
          background:
            linear-gradient(145deg, #30251a, #19140f 65%, #100e0c);
          box-shadow: 25px 30px 75px rgba(0,0,0,.55);
          transition: transform .5s;
        }

        .ghost-manuscript:hover {
          transform: rotate(0deg) translateY(-5px);
        }

        .ghost-manuscript-label {
          color: var(--ghost-gold);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .25em;
        }

        .ghost-manuscript h2 {
          margin-top: 55px;
          color: #eee3d3;
          font: 400 34px/1.2 "Playfair Display", Georgia, serif;
        }

        .ghost-manuscript h2 em {
          color: var(--ghost-gold);
        }

        .ghost-manuscript p {
          margin-top: 14px;
          color: #aa9a87;
          font-size: 10px;
          line-height: 1.8;
        }

        .ghost-lines {
          display: grid;
          gap: 10px;
          margin-top: 30px;
        }

        .ghost-lines span {
          display: block;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(198,163,109,.6),
            rgba(198,163,109,.08)
          );
        }

        .ghost-lines span:nth-child(2) {
          width: 85%;
        }

        .ghost-lines span:nth-child(3) {
          width: 92%;
        }

        .ghost-lines span:nth-child(4) {
          width: 65%;
        }

        .ghost-floating {
          position: absolute;
          top: 45px;
          left: 0;
          padding: 17px 21px;
          border: 1px solid rgba(198,163,109,.3);
          background: rgba(17,14,11,.95);
          box-shadow: 0 15px 35px rgba(0,0,0,.4);
        }

        .ghost-floating strong {
          display: block;
          color: var(--ghost-gold);
          font: 27px Georgia, serif;
        }

        .ghost-floating small {
          display: block;
          margin-top: 6px;
          color: #c4b5a3;
          font-size: 8px;
          letter-spacing: .13em;
        }

        .ghost-art-caption {
          position: absolute;
          right: 0;
          bottom: 25px;
          color: var(--ghost-gold);
          font-size: 9px;
          letter-spacing: .2em;
        }

        .ghost-bottom {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 55px;
          padding-top: 20px;
          border-top: 1px solid rgba(198,163,109,.2);
          color: #8e806d;
          font-size: 8px;
          letter-spacing: .17em;
        }

        /* HIDE THE OLD EDITORIAL HERO, KEEP ITS CONTENT */

        .ws-ghostwriting-content .ws-sub-hero {
          display: none !important;
        }

        .ws-ghostwriting-content .ws-content-area {
          padding-top: 85px;
        }

        @keyframes ghost-rise {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes ghost-spin {
          to {
            transform: rotate(360deg);
          }
        }

        @media(max-width: 850px) {
          .ghost-grid {
            gap: 30px;
          }

          .ghost-art {
            min-height: 360px;
          }

          .ghost-orbit {
            width: 310px;
            height: 310px;
          }

          .ghost-orbit.second {
            width: 370px;
            height: 370px;
          }
        }

        @media(max-width: 650px) {
          .ghost-wrap {
            width: calc(100% - 34px);
          }

          .ghost-hero {
            padding: 120px 0 45px;
          }

          .ghost-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-top: 48px;
          }

          .ghost-title {
            font-size: clamp(45px, 12vw, 65px);
          }

          .ghost-description {
            font-size: 12px;
          }

          .ghost-art {
            min-height: 360px;
          }

          .ghost-manuscript {
            width: 265px;
            min-height: 315px;
          }

          .ghost-floating {
            left: 0;
            top: 30px;
          }

          .ghost-art-caption {
            right: 5px;
            bottom: 10px;
          }

          .ghost-bottom {
            margin-top: 35px;
            font-size: 7px;
          }

          .ws-ghostwriting-content .ws-content-area {
            padding-top: 55px;
          }
        }

        @media(prefers-reduced-motion: reduce) {
          .ws-ghostwriting-page *,
          .ws-ghostwriting-page *::before,
          .ws-ghostwriting-page *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      <section className="ghost-hero">
        <div className="ghost-wrap">
          <nav className="ghost-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/ghostwriting">Ghostwriting</Link>
            <span>/</span>
            <span>{data.title}</span>
          </nav>

          <div className="ghost-grid">
            <div className="ghost-copy">
              <div className="ghost-kicker">
                {data.number} / THE ART OF STORYTELLING
              </div>

              <div className="ghost-badge">
                {data.subtitle}
              </div>

              <h1 className="ghost-title">
                {data.title}<span>.</span>
              </h1>

              <p className="ghost-description">
                {data.description}
              </p>

              <div className="ghost-actions">
                <Button to="/contact">Discuss Your Project</Button>

                <a href="#page-content" className="ghost-explore">
                  EXPLORE THE DETAILS ↓
                </a>
              </div>
            </div>

            <div className="ghost-art" aria-hidden="true">
              <div className="ghost-orbit" />
              <div className="ghost-orbit second" />

              <div className="ghost-manuscript">
                <div className="ghost-manuscript-label">
                  WORDSMITH SQUAD / ORIGINAL STORIES
                </div>

                <h2>
                  Every voice has
                  <br />
                  a story <em>worth telling.</em>
                </h2>

                <p>
                  Ideas become narratives. Experiences become chapters.
                  Your vision becomes a story shaped with purpose.
                </p>

                <div className="ghost-lines">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              

              
            </div>
          </div>

          <div className="ghost-bottom">
            <span>WORDSMITH SQUAD</span>
            <span>IMAGINATION · VOICE · STORY</span>
            <span>EVERY STORY MATTERS</span>
          </div>
        </div>
      </section>

      <div className="ws-ghostwriting-content" id="page-content">
        <EditingSubpageLayout data={data} />
      </div>
    </div>
  );
}
