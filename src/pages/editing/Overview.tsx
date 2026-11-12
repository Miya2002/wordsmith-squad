
import { Link } from "react-router-dom";
import { FinalCTA } from "@/components/Sections";
import {
  Button,
  Eyebrow,
  Reveal,
  usePageMeta,
} from "@/components/ui";
import { EDITORIAL } from "@/lib/data";

const SERVICES = [
  {
    num: "01",
    name: "Developmental Editing",
    tag: "STRUCTURE & STORY",
    description:
      "Strengthen your manuscript from the inside out. Refine structure, pacing, character development and the ideas behind your story.",
    to: "/editing/developmental-editing",
    symbol: "⌘",
  },
  {
    num: "02",
    name: "Line Editing",
    tag: "STYLE & EXPRESSION",
    description:
      "Give every sentence its purpose. Improve rhythm, language, tone and flow while preserving your unique writing voice.",
    to: "/editing/line-editing",
    symbol: "✎",
  },
  {
    num: "03",
    name: "Copy Editing",
    tag: "PRECISION & CLARITY",
    description:
      "Bring grammar, punctuation, consistency and accuracy together for a polished, professional manuscript.",
    to: "/editing/copy-editing",
    symbol: "✧",
  },
  {
    num: "04",
    name: "Proofreading",
    tag: "THE FINAL FINISH",
    description:
      "Catch the small details that make a big difference before your manuscript reaches its readers.",
    to: "/editing/proofreading",
    symbol: "✓",
  },
  {
    num: "05",
    name: "Manuscript Assessment",
    tag: "EXPERT PERSPECTIVE",
    description:
      "Understand your manuscript's strengths, opportunities and editorial priorities with a professional assessment.",
    to: "/editing/manuscript-assessment",
    symbol: "◎",
  },
  {
    num: "06",
    name: "Book Formatting",
    tag: "DESIGNED TO BE READ",
    description:
      "Transform your finished manuscript into a clean, beautifully formatted interior for print and digital reading.",
    to: "/editing/book-formatting",
    symbol: "▤",
  },
];

const PROCESS = [
  {
    number: "01",
    title: "The discovery",
    description:
      "We begin by understanding your manuscript, your creative intentions and what you want your book to achieve.",
    label: "UNDERSTAND",
  },
  {
    number: "02",
    title: "The refinement",
    description:
      "Our editorial team works through the manuscript with careful attention to structure, language and detail.",
    label: "PERFECT",
  },
  {
    number: "03",
    title: "The final review",
    description:
      "You receive thoughtful feedback and a more polished manuscript, ready for its next creative milestone.",
    label: "DELIVER",
  },
];

function EditorialArtwork() {
  return (
    <div className="ea-artwork">
      <div className="ea-artwork-image">
        <img
          src={EDITORIAL.desk}
          alt="A beautifully arranged editorial writing studio"
        />

        <div className="ea-image-shade" />

        <div className="ea-image-caption">
          <span>THE ART OF REFINEMENT</span>
          <span>FIG. 001</span>
        </div>
      </div>

      <div className="ea-manuscript">
        <div className="ea-paper-top">
          <span>WORDSMITH SQUAD</span>
          <span>MS. / 001</span>
        </div>

        <div className="ea-paper-content">
          <span className="ea-paper-kicker">EDITORIAL NOTES</span>

          <h3>
            A story
            <br />
            worth telling.
          </h3>

          <div className="ea-paper-lines">
            <i />
            <i />
            <i />
            <i className="short" />
          </div>

          <div className="ea-editor-note">
            <span>✦</span>
            A stronger sentence.
            A clearer story.
          </div>
        </div>

        <div className="ea-paper-footer">
          <span>CRAFTED WITH CARE</span>
          <span>01 — 06</span>
        </div>
      </div>

      <div className="ea-floating-note ea-note-one">
        <span className="ea-note-icon">✎</span>
        <div>
          <strong>Language refined</strong>
          <small>Every word matters.</small>
        </div>
      </div>

      <div className="ea-floating-note ea-note-two">
        <span className="ea-note-check">✓</span>
        <div>
          <strong>Editorial review</strong>
          <small>Clarity meets creativity.</small>
        </div>
      </div>

      <div className="ea-orbit" />
    </div>
  );
}

export default function Overview() {
  usePageMeta(
    "Professional Book Editing Services — Wordsmith Squad",
    "Discover professional developmental editing, line editing, copy editing, proofreading, manuscript assessment and book formatting."
  );

  return (
    <main className="editing-atelier">
      <style>{`
        .editing-atelier {
          --ea-gold: #c4a16c;
          --ea-gold-light: #dfc395;
          --ea-dark: #15120f;
          --ea-cream: #eee7db;
          --ea-muted: #a69b8d;
          overflow: clip;
          background: var(--ea-dark);
          color: var(--ea-cream);
        }

        .editing-atelier * {
          box-sizing: border-box;
        }

        .editing-atelier a {
          text-decoration: none;
        }

        .ea-container {
          width: min(1160px, calc(100% - 64px));
          margin: 0 auto;
        }

        .ea-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--ea-gold);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .2em;
          text-transform: uppercase;
        }

        .ea-label::before {
          content: "";
          width: 20px;
          height: 1px;
          background: var(--ea-gold);
        }

        .ea-serif {
          font-family: "Playfair Display", Georgia, serif;
          font-weight: 400;
          letter-spacing: -.055em;
        }

        .ea-serif em {
          color: var(--ea-gold);
          font-weight: 400;
        }

        /* =================================
           HERO — EDITORIAL ATELIER
        ================================= */

        .ea-hero {
          position: relative;
          min-height: 690px;
          padding: 112px 0 65px;
          background:
            radial-gradient(
              ellipse at 78% 40%,
              rgba(156, 116, 65, .13),
              transparent 43%
            ),
            linear-gradient(120deg, #12100e, #1c1711 65%, #11100e);
          isolation: isolate;
        }

        .ea-hero::before {
          content: "EDIT";
          position: absolute;
          right: -20px;
          top: 75px;
          z-index: -1;
          color: rgba(255,255,255,.018);
          font-family: Georgia, serif;
          font-size: clamp(180px, 28vw, 370px);
          letter-spacing: -.09em;
          pointer-events: none;
        }

        .ea-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          opacity: .13;
          background-image: radial-gradient(
            rgba(218,185,133,.6) .6px,
            transparent .6px
          );
          background-size: 8px 8px;
          mask-image: linear-gradient(to bottom, black, transparent);
        }

        .ea-hero-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(196,161,108,.23);
        }

        .ea-back {
          color: var(--ea-gold-light);
          font-size: 10px;
          transition: opacity .3s;
        }

        .ea-back:hover {
          opacity: .65;
        }

        .ea-hero-top span {
          color: #85796a;
          font-size: 8px;
          letter-spacing: .16em;
        }

        .ea-hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 45px;
          padding-top: 66px;
        }

        .ea-hero-copy {
          position: relative;
          z-index: 2;
          animation: ea-rise .9s cubic-bezier(.2,.7,.2,1) both;
        }

        .ea-hero-index {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
        }

        .ea-index-number {
          color: var(--ea-gold);
          font: italic 13px Georgia, serif;
        }

        .ea-index-line {
          width: 36px;
          height: 1px;
          background: var(--ea-gold);
        }

        .ea-hero-copy h1 {
          margin: 0;
          max-width: 600px;
          color: #f1e9dc;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(58px, 6.7vw, 88px);
          font-weight: 400;
          line-height: .99;
          letter-spacing: -.065em;
        }

        .ea-hero-copy h1 em {
          display: inline-block;
          color: var(--ea-gold);
          font-weight: 400;
        }

        .ea-hero-copy > p {
          max-width: 440px;
          margin: 26px 0 0;
          color: #a99e90;
          font-size: 13px;
          line-height: 1.95;
        }

        .ea-hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 22px;
          margin-top: 32px;
        }

        .ea-secondary-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #d2b17d;
          font-size: 10px;
          letter-spacing: .08em;
          transition: gap .3s;
        }

        .ea-secondary-link:hover {
          gap: 19px;
        }

        .ea-trust-row {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          margin-top: 36px;
          color: #928777;
          font-size: 9px;
        }

        .ea-trust-row span::before {
          content: "✦";
          color: var(--ea-gold);
          margin-right: 7px;
        }

        /* HERO ARTWORK */

        .ea-artwork {
          position: relative;
          min-height: 470px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: ea-rise 1s .15s both;
        }

        .ea-artwork-image {
          position: absolute;
          inset: 22px 10px 15px 55px;
          overflow: hidden;
          border: 1px solid rgba(196,161,108,.32);
          border-radius: 190px 190px 12px 12px;
          box-shadow: 0 30px 90px rgba(0,0,0,.42);
        }

        .ea-artwork-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(.68) brightness(.75);
          transition: transform 1.2s ease, filter .8s ease;
        }

        .ea-artwork:hover .ea-artwork-image img {
          transform: scale(1.07);
          filter: saturate(.85) brightness(.9);
        }

        .ea-image-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            0deg,
            rgba(12,10,8,.8),
            transparent 48%,
            rgba(12,10,8,.08)
          );
        }

        .ea-image-caption {
          position: absolute;
          bottom: 19px;
          left: 22px;
          right: 22px;
          display: flex;
          justify-content: space-between;
          color: #e0c69b;
          font-size: 7px;
          letter-spacing: .15em;
        }

        .ea-manuscript {
          position: relative;
          z-index: 2;
          width: 240px;
          margin: 0 0 0 -175px;
          transform: rotate(-5deg);
          padding: 13px;
          background: #e9dfca;
          color: #241c13;
          box-shadow: 0 35px 80px rgba(0,0,0,.55);
          transition: transform .7s ease;
        }

        .ea-artwork:hover .ea-manuscript {
          transform: rotate(-1deg) translateY(-7px);
        }

        .ea-paper-top,
        .ea-paper-footer {
          display: flex;
          justify-content: space-between;
          font-size: 7px;
          letter-spacing: .13em;
          color: #8d785b;
        }

        .ea-paper-top {
          padding-bottom: 11px;
          border-bottom: 1px solid #c8b99e;
        }

        .ea-paper-content {
          padding: 25px 15px;
          background: #f6f0e4;
        }

        .ea-paper-kicker {
          font-size: 7px;
          color: #a17e4e;
          letter-spacing: .2em;
        }

        .ea-paper-content h3 {
          margin: 15px 0 0;
          font: 32px/1.05 Georgia, serif;
          letter-spacing: -.05em;
        }

        .ea-paper-lines {
          display: grid;
          gap: 8px;
          margin-top: 22px;
        }

        .ea-paper-lines i {
          width: 100%;
          height: 3px;
          background: #c5bba9;
        }

        .ea-paper-lines i:nth-child(2) {
          width: 90%;
        }

        .ea-paper-lines i:nth-child(3) {
          width: 96%;
        }

        .ea-paper-lines i.short {
          width: 65%;
          background: #bd9b69;
        }

        .ea-editor-note {
          display: flex;
          gap: 7px;
          align-items: flex-start;
          margin-top: 22px;
          padding: 10px;
          border-left: 2px solid #ae8752;
          background: #e9dfcb;
          color: #68533a;
          font-size: 8px;
          line-height: 1.6;
        }

        .ea-editor-note span {
          color: #aa844f;
        }

        .ea-paper-footer {
          padding-top: 11px;
        }

        .ea-floating-note {
          position: absolute;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 15px;
          border: 1px solid rgba(196,161,108,.28);
          background: rgba(22,18,14,.93);
          box-shadow: 0 15px 35px rgba(0,0,0,.3);
          backdrop-filter: blur(15px);
          animation: ea-float 5s ease-in-out infinite;
        }

        .ea-floating-note strong {
          display: block;
          color: #eee3d2;
          font-size: 9px;
        }

        .ea-floating-note small {
          display: block;
          margin-top: 4px;
          color: #9b8c79;
          font-size: 7px;
        }

        .ea-note-one {
          top: 65px;
          right: -5px;
        }

        .ea-note-two {
          bottom: 65px;
          left: 0;
          animation-delay: -2.5s;
        }

        .ea-note-icon,
        .ea-note-check {
          display: grid;
          place-items: center;
          width: 30px;
          height: 30px;
          background: rgba(196,161,108,.14);
          color: var(--ea-gold-light);
          border-radius: 50%;
          font-size: 15px;
        }

        .ea-orbit {
          position: absolute;
          width: 390px;
          height: 390px;
          border: 1px solid rgba(196,161,108,.12);
          border-radius: 50%;
          pointer-events: none;
          animation: ea-spin 35s linear infinite;
        }

        .ea-orbit::after {
          content: "";
          position: absolute;
          width: 7px;
          height: 7px;
          top: 40px;
          right: 60px;
          border-radius: 50%;
          background: var(--ea-gold);
          box-shadow: 0 0 15px var(--ea-gold);
        }

        .ea-hero-bottom {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          padding-top: 21px;
          margin-top: 35px;
          border-top: 1px solid rgba(196,161,108,.2);
          color: #827668;
          font-size: 8px;
          letter-spacing: .13em;
        }

        /* =================================
           EDITORIAL PHILOSOPHY
        ================================= */

        .ea-philosophy {
          padding: 105px 0;
          background: #eee7db;
          color: #211a13;
        }

        .ea-philosophy-grid {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 90px;
          align-items: center;
        }

        .ea-philosophy-number {
          display: block;
          color: #b08c5a;
          font: italic 13px Georgia, serif;
          margin-bottom: 23px;
        }

        .ea-philosophy h2 {
          margin: 0;
          max-width: 460px;
          font: 400 clamp(45px,5vw,65px)/1.06 "Playfair Display", Georgia, serif;
          letter-spacing: -.06em;
        }

        .ea-philosophy h2 em {
          color: #a47d4d;
        }

        .ea-philosophy-copy {
          padding-left: 35px;
          border-left: 1px solid #c9b89d;
        }

        .ea-philosophy-copy p {
          margin: 0;
          color: #756b5e;
          font-size: 13px;
          line-height: 2;
        }

        .ea-philosophy-points {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px 25px;
          margin-top: 30px;
        }

        .ea-philosophy-points span {
          color: #604c32;
          font-size: 10px;
          padding-top: 12px;
          border-top: 1px solid #d4c7b5;
        }

        .ea-philosophy-points span::before {
          content: "✦";
          color: #b08c5a;
          margin-right: 9px;
        }

        /* =================================
           SERVICES DIRECTORY
        ================================= */

        .ea-services {
          position: relative;
          padding: 105px 0 115px;
          background:
            radial-gradient(ellipse at 90% 5%, rgba(157,117,66,.1), transparent 35%),
            #15120f;
        }

        .ea-section-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 30px;
          margin-bottom: 48px;
        }

        .ea-section-heading h2 {
          margin: 17px 0 0;
          font: 400 clamp(43px,5.5vw,67px)/1.05 "Playfair Display", Georgia, serif;
          letter-spacing: -.06em;
        }

        .ea-section-heading h2 em {
          color: var(--ea-gold);
        }

        .ea-section-intro {
          max-width: 300px;
          color: #a79b8c;
          font-size: 11px;
          line-height: 1.9;
        }

        .ea-service-list {
          border-top: 1px solid rgba(196,161,108,.32);
        }

        .ea-service-row {
          display: grid;
          grid-template-columns: 65px 1fr 1.1fr 45px;
          align-items: center;
          gap: 22px;
          min-height: 117px;
          padding: 20px 17px;
          border-bottom: 1px solid rgba(196,161,108,.2);
          color: var(--ea-cream);
          transition: background .4s, padding .4s;
        }

        .ea-service-row:hover {
          padding-left: 27px;
          background: rgba(196,161,108,.065);
        }

        .ea-service-num {
          color: var(--ea-gold);
          font: italic 18px Georgia, serif;
        }

        .ea-service-name {
          font: 400 clamp(21px,2.5vw,30px) Georgia, serif;
          transition: color .3s;
        }

        .ea-service-row:hover .ea-service-name {
          color: var(--ea-gold-light);
        }

        .ea-service-description {
          max-width: 400px;
          color: #a59a8b;
          font-size: 10px;
          line-height: 1.8;
        }

        .ea-service-tag {
          display: block;
          margin-bottom: 8px;
          color: #b08e5e;
          font-size: 7px;
          letter-spacing: .16em;
        }

        .ea-service-arrow {
          display: grid;
          place-items: center;
          width: 38px;
          height: 38px;
          border: 1px solid rgba(196,161,108,.45);
          border-radius: 50%;
          color: var(--ea-gold);
          font-size: 16px;
          transition: background .3s, transform .3s, color .3s;
        }

        .ea-service-row:hover .ea-service-arrow {
          background: var(--ea-gold);
          color: #17130e;
          transform: rotate(45deg);
        }

        .ea-services-footer {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          padding-top: 20px;
          color: #85796a;
          font-size: 8px;
          letter-spacing: .15em;
        }

        /* =================================
           PROCESS
        ================================= */

        .ea-process {
          padding: 105px 0;
          background: #e8dfd1;
          color: #211a13;
        }

        .ea-process-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 30px;
          margin-bottom: 50px;
        }

        .ea-process-heading h2 {
          margin: 17px 0 0;
          font: 400 clamp(45px,5vw,64px)/1.05 "Playfair Display", Georgia, serif;
          letter-spacing: -.06em;
        }

        .ea-process-heading h2 em {
          color: #a47d4d;
        }

        .ea-process-heading p {
          max-width: 285px;
          color: #807465;
          font-size: 11px;
          line-height: 1.9;
        }

        .ea-process-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 20px;
        }

        .ea-process-card {
          position: relative;
          min-height: 240px;
          padding: 27px 24px;
          border: 1px solid #d1c2ab;
          background: rgba(255,255,255,.24);
          transition: transform .4s, box-shadow .4s, background .4s;
        }

        .ea-process-card:hover {
          transform: translateY(-7px);
          background: #f0e8dc;
          box-shadow: 0 20px 40px rgba(70,49,24,.08);
        }

        .ea-process-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .ea-process-card-top span {
          color: #a47d4d;
          font: italic 17px Georgia, serif;
        }

        .ea-process-card-top i {
          color: #b18e5b;
          font-size: 22px;
          font-style: normal;
        }

        .ea-process-card small {
          display: block;
          margin-top: 32px;
          color: #a17c4e;
          font-size: 8px;
          letter-spacing: .17em;
        }

        .ea-process-card h3 {
          margin: 9px 0;
          font: 400 25px Georgia, serif;
        }

        .ea-process-card p {
          margin: 0;
          color: #817566;
          font-size: 10px;
          line-height: 1.9;
        }

        .ea-process-card::after {
          content: "";
          position: absolute;
          left: 24px;
          bottom: 0;
          width: 0;
          height: 2px;
          background: #b18e5b;
          transition: width .5s;
        }

        .ea-process-card:hover::after {
          width: calc(100% - 48px);
        }

        /* =================================
           AUTHOR PROMISE
        ================================= */

        .ea-promise {
          padding: 100px 0;
          background: #f0e9dd;
          color: #211a13;
        }

        .ea-promise-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 75px;
        }

        .ea-promise-image {
          position: relative;
          min-height: 380px;
          overflow: hidden;
          border-radius: 2px;
        }

        .ea-promise-image img {
          position: absolute;
          width: 100%;
          height: 100%;
          inset: 0;
          object-fit: cover;
          filter: saturate(.72);
          transition: transform 1s;
        }

        .ea-promise-image:hover img {
          transform: scale(1.055);
        }

        .ea-promise-image::after {
          content: "THE HUMAN TOUCH";
          position: absolute;
          left: 20px;
          bottom: 20px;
          color: white;
          font-size: 8px;
          letter-spacing: .2em;
        }

        .ea-promise-copy h2 {
          margin: 20px 0;
          font: 400 clamp(43px,5vw,62px)/1.05 "Playfair Display", Georgia, serif;
          letter-spacing: -.06em;
        }

        .ea-promise-copy h2 em {
          color: #a47d4d;
        }

        .ea-promise-copy > p {
          color: #807466;
          font-size: 12px;
          line-height: 2;
        }

        .ea-promise-quote {
          margin-top: 27px;
          padding: 18px 20px;
          border-left: 2px solid #b38e5a;
          background: #e8dfd1;
          color: #6e5b43;
          font: italic 17px/1.6 Georgia, serif;
        }

        /* =================================
           FINAL SUPPORT STRIP
        ================================= */

        .ea-last-note {
          padding: 45px 0;
          background: #c5a273;
          color: #241a10;
        }

        .ea-last-note-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 25px;
        }

        .ea-last-note h2 {
          margin: 0;
          font: 400 clamp(25px,3vw,37px) Georgia, serif;
          letter-spacing: -.04em;
        }

        .ea-last-note p {
          max-width: 340px;
          margin: 0;
          color: #58442b;
          font-size: 10px;
          line-height: 1.8;
        }

        /* =================================
           ANIMATIONS
        ================================= */

        @keyframes ea-rise {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes ea-float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-9px); }
        }

        @keyframes ea-spin {
          to { transform: rotate(360deg); }
        }

        /* =================================
           TABLET
        ================================= */

        @media(max-width:900px) {
          .ea-hero-content {
            gap: 20px;
          }

          .ea-hero-copy h1 {
            font-size: clamp(55px,7vw,72px);
          }

          .ea-artwork {
            min-height: 400px;
          }

          .ea-artwork-image {
            inset: 25px 0 20px 35px;
          }

          .ea-manuscript {
            width: 200px;
            margin-left: -115px;
          }

          .ea-philosophy-grid,
          .ea-promise-grid {
            gap: 40px;
          }

          .ea-service-row {
            grid-template-columns: 45px 1fr 1fr 38px;
            gap: 13px;
          }
        }

        /* =================================
           MOBILE
        ================================= */

        @media(max-width:650px) {
          .ea-container {
            width: calc(100% - 36px);
          }

          .ea-hero {
            padding-top: 105px;
            padding-bottom: 45px;
          }

          .ea-hero-top span {
            font-size: 6px;
          }

          .ea-hero-content {
            grid-template-columns: 1fr;
            gap: 10px;
            padding-top: 48px;
          }

          .ea-hero-copy h1 {
            font-size: clamp(58px,12vw,78px);
          }

          .ea-hero-copy > p {
            font-size: 11px;
          }

          .ea-artwork {
            min-height: 390px;
            margin-top: 5px;
          }

          .ea-artwork-image {
            inset: 12px 15px 10px 55px;
          }

          .ea-manuscript {
            width: 190px;
            margin-left: -115px;
          }

          .ea-note-one {
            right: -2px;
            top: 28px;
          }

          .ea-note-two {
            bottom: 40px;
            left: -3px;
          }

          .ea-orbit {
            width: 310px;
            height: 310px;
          }

          .ea-hero-bottom {
            font-size: 6px;
            flex-wrap: wrap;
          }

          .ea-philosophy,
          .ea-services,
          .ea-process,
          .ea-promise {
            padding: 75px 0;
          }

          .ea-philosophy-grid,
          .ea-promise-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .ea-philosophy h2 {
            font-size: 49px;
          }

          .ea-philosophy-copy {
            padding-left: 18px;
          }

          .ea-section-heading,
          .ea-process-heading {
            display: block;
          }

          .ea-section-heading h2,
          .ea-process-heading h2 {
            font-size: 48px;
          }

          .ea-section-intro,
          .ea-process-heading p {
            margin-top: 17px;
          }

          .ea-service-row {
            grid-template-columns: 34px 1fr 35px;
            gap: 9px;
            min-height: 100px;
            padding: 15px 7px;
          }

          .ea-service-num {
            font-size: 14px;
          }

          .ea-service-name {
            font-size: 19px;
          }

          .ea-service-description {
            grid-column: 2;
            grid-row: 2;
            font-size: 9px;
          }

          .ea-service-tag {
            font-size: 6px;
          }

          .ea-service-arrow {
            grid-column: 3;
            grid-row: 1 / 3;
            width: 31px;
            height: 31px;
          }

          .ea-process-grid {
            grid-template-columns: 1fr;
            gap: 13px;
          }

          .ea-process-card {
            min-height: auto;
          }

          .ea-promise-image {
            min-height: 290px;
          }

          .ea-last-note-inner {
            align-items: flex-start;
            flex-direction: column;
          }

          .ea-last-note {
            padding: 35px 0;
          }
        }

        @media(max-width:370px) {
          .ea-container {
            width: calc(100% - 28px);
          }

          .ea-hero-copy h1 {
            font-size: 53px;
          }

          .ea-floating-note {
            padding: 9px;
          }

          .ea-manuscript {
            width: 170px;
          }

          .ea-service-name {
            font-size: 17px;
          }

          .ea-hero-bottom {
            letter-spacing: .07em;
          }
        }

        @media(prefers-reduced-motion:reduce) {
          .editing-atelier *,
          .editing-atelier *::before,
          .editing-atelier *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* =====================================
          01 — HERO
      ====================================== */}

      <section className="ea-hero">
        <div className="ea-container">

          <div className="ea-hero-top">
            <Link to="/" className="ea-back">
              ← Back to Home
            </Link>

            <span>THE WORDSMITH EDITORIAL STUDIO</span>
            <span>EST. FOR STORYTELLERS</span>
          </div>

          <div className="ea-hero-content">

            <div className="ea-hero-copy">

              <div className="ea-hero-index">
                <span className="ea-index-number">01</span>
                <span className="ea-index-line" />
                <Eyebrow>THE EDITORIAL ATELIER</Eyebrow>
              </div>

              <h1 className="ea-serif">
                Good Stories
                <br />
                Deserve
                <br />
                <em>Great Editing.</em>
              </h1>

              <p>
                Behind every unforgettable book is an invisible
                craft. We refine the words, strengthen the story
                and bring out the very best in your manuscript —
                while keeping your voice entirely your own.
              </p>

              <div className="ea-hero-actions">
                <Button to="/contact">
                  Let's Edit Your Book
                </Button>

                <a
                  href="#editing-services"
                  className="ea-secondary-link"
                >
                  EXPLORE OUR EXPERTISE <span>↓</span>
                </a>
              </div>

              <div className="ea-trust-row">
                <span>Author-first editing</span>
                <span>Thoughtful revisions</span>
                <span>Attention to detail</span>
              </div>
            </div>

            <EditorialArtwork />

          </div>

          <div className="ea-hero-bottom">
            <span>THE ART OF BETTER STORYTELLING</span>
            <span>PRECISION / PURPOSE / PASSION</span>
            <span>WORDSMITH SQUAD — 001</span>
          </div>

        </div>
      </section>

      {/* =====================================
          02 — PHILOSOPHY
      ====================================== */}

      <section className="ea-philosophy">
        <div className="ea-container ea-philosophy-grid">

          <Reveal>
            <span className="ea-philosophy-number">
              THE EDITORIAL PHILOSOPHY — 01
            </span>

            <h2>
              We don't change your story.
              <br />
              <em>We elevate it.</em>
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <div className="ea-philosophy-copy">
              <p>
                Your manuscript carries your imagination,
                your experiences and your unique perspective.
                Our job is to make sure every part of it works
                beautifully together.
              </p>

              <p style={{ marginTop: 15 }}>
                From the overall structure to the smallest
                punctuation mark, we approach every manuscript
                with care, clarity and respect for its author.
              </p>

              <div className="ea-philosophy-points">
                <span>Your voice stays yours</span>
                <span>Every detail matters</span>
                <span>Thoughtful collaboration</span>
                <span>Professional refinement</span>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* =====================================
          03 — EDITING SERVICES
      ====================================== */}

      <section className="ea-services" id="editing-services">
        <div className="ea-container">

          <Reveal>
            <div className="ea-section-heading">
              <div>
                <span className="ea-label">
                  OUR EDITORIAL EXPERTISE
                </span>

                <h2>
                  Six disciplines.
                  <br />
                  <em>One stronger manuscript.</em>
                </h2>
              </div>

              <p className="ea-section-intro">
                Different manuscripts need different kinds
                of attention. Find the editorial service
                that matches your book's next stage.
              </p>
            </div>
          </Reveal>

          <div className="ea-service-list">
            {SERVICES.map((service, index) => (
              <Reveal key={service.to} delay={(index % 3) * 70}>
                <Link
                  to={service.to}
                  className="ea-service-row group"
                >
                  <span className="ea-service-num">
                    {service.num}
                  </span>

                  <span className="ea-service-name">
                    {service.name}
                  </span>

                  <span className="ea-service-description">
                    <span className="ea-service-tag">
                      {service.tag}
                    </span>
                    {service.description}
                  </span>

                  <span className="ea-service-arrow">
                    ↗
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="ea-services-footer">
            <span>THE WORDSMITH EDITORIAL COLLECTION</span>
            <span>06 SERVICES / ONE CREATIVE PARTNERSHIP</span>
          </div>

        </div>
      </section>

      {/* =====================================
          04 — THE PROCESS
      ====================================== */}

      <section className="ea-process">
        <div className="ea-container">

          <Reveal>
            <div className="ea-process-heading">
              <div>
                <span className="ea-label">
                  A CONSIDERED APPROACH
                </span>

                <h2>
                  From your draft
                  <br />
                  to <em>its best version.</em>
                </h2>
              </div>

              <p>
                A transparent, collaborative process
                designed around your manuscript and
                your creative goals.
              </p>
            </div>
          </Reveal>

          <div className="ea-process-grid">
            {PROCESS.map((step, index) => (
              <Reveal key={step.number} delay={index * 110}>
                <article className="ea-process-card">
                  <div className="ea-process-card-top">
                    <span>{step.number}</span>
                    <i>
                      {index === 0 ? "◎" : index === 1 ? "✎" : "✧"}
                    </i>
                  </div>

                  <small>{step.label}</small>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================
          05 — OUR PROMISE
      ====================================== */}

      <section className="ea-promise">
        <div className="ea-container ea-promise-grid">

          <Reveal>
            <div className="ea-promise-image">
              <img
                src={EDITORIAL.typewriter}
                alt="A classic writing desk representing the art of editing"
                loading="lazy"
              />
            </div>
          </Reveal>

          <div className="ea-promise-copy">
            <Reveal>
              <span className="ea-label">
                A PROMISE TO EVERY AUTHOR
              </span>

              <h2>
                Your words.
                <br />
                Your vision.
                <br />
                <em>Our editorial care.</em>
              </h2>

              <p>
                We believe the best editing happens when
                an author's imagination meets an editor's
                expertise. We don't want your book to sound
                like someone else's. We want it to sound
                like the best possible version of you.
              </p>

              <div className="ea-promise-quote">
                "Every great manuscript deserves
                an equally thoughtful editor."
              </div>

              <div style={{ marginTop: 30 }}>
                <Button to="/contact" variant="ink">
                  Start Your Editorial Journey
                </Button>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* =====================================
          06 — FINAL CTA
      ====================================== */}

      <section className="ea-last-note">
        <div className="ea-container ea-last-note-inner">
          <h2>
            Your manuscript deserves its moment.
          </h2>

          <p>
            Have a draft ready? Let's discuss the right
            editorial approach for your book.
          </p>
        </div>
      </section>

      <FinalCTA
        title={
          <>
            Let's Make Your
            {" "}
            <em className="italic">Words Matter.</em>
          </>
        }
        text="Your story has something worth sharing. Let's give it the clarity, precision and polish it deserves."
        button="Request an Editing Consultation"
      />

    </main>
  );
}
