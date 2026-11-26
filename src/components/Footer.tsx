
import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

import {
  NAV_LINKS,
  SERVICES,
  CONTACT_INFO,
  SOCIALS,
} from "@/lib/data";

import {
  IconInstagram,
  IconLinkedin,
  IconX,
  IconFacebook,
  IconArrowRight,
  IconArrowUpRight,
  IconCheck,
} from "./Icons";

// ============================================
// WORDSMITH SQUAD - OFFICIAL FOOTER
// ============================================

// Official logo from public folder
const FOOTER_LOGO = "/wordsmith-logo.png";

// ============================================
// SOCIAL ICONS
// ============================================

const SOCIAL_ICONS: Record<
  string,
  (props: { className?: string }) => React.ReactElement
> = {
  instagram: IconInstagram,
  linkedin: IconLinkedin,
  x: IconX,
  facebook: IconFacebook,
};

// ============================================
// SOCIAL LINKS
// ============================================

export function SocialLinks({
  className,
}: {
  className?: string;
}) {
  const [notice, setNotice] = useState<string | null>(null);

  return (
    <div className={className}>
      <div className="flex items-center gap-3">
        {SOCIALS.map((social) => {
          const Icon = SOCIAL_ICONS[social.id];

          if (!Icon) return null;

          return (
            <a
              key={social.id}
              href="#"
              title={`${social.label} — profile coming soon`}
              aria-label={`${social.label} (coming soon)`}
              onClick={(event) => {
                event.preventDefault();

                setNotice(
                  `${social.label} profile launching soon — placeholder link.`
                );

                window.setTimeout(() => {
                  setNotice(null);
                }, 2600);
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 text-ivory/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
            >
              <Icon className="h-4 w-4" />
            </a>
          );
        })}
      </div>

      <p
        aria-live="polite"
        className="mt-2 min-h-4 text-[0.625rem] tracking-wide text-gold/70"
      >
        {notice}
      </p>
    </div>
  );
}

// ============================================
// FOOTER COMPONENT
// ============================================

export function Footer() {
  const [email, setEmail] = useState("");

  const [state, setState] = useState<
    "idle" | "error" | "done"
  >("idle");

  // NOTE:
  // This preserves the original newsletter UI.
  // No subscription backend is connected yet.
  // It does not store or send subscribers.
  const subscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validEmail =
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(
        email.trim()
      );

    if (!validEmail) {
      setState("error");
      return;
    }

    // Do not falsely claim a subscription succeeded.
    setState("done");
  };

  return (
    <footer className="relative overflow-hidden border-t border-gold/12 bg-ink-950">

      {/* ====================================== */}
      {/* BACKGROUND WORDMARK */}
      {/* ====================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-7 overflow-hidden select-none"
      >
        <p className="font-display text-center text-[19vw] leading-none font-bold tracking-tight whitespace-nowrap text-ivory/[0.025]">
          WORDSMITH
        </p>
      </div>

      <div className="wrap relative pt-16 pb-10 md:pt-24">

        {/* ====================================== */}
        {/* MAIN FOOTER CTA */}
        {/* ====================================== */}

        <div className="mb-16 flex flex-col gap-8 border-b border-ivory/10 pb-14 md:flex-row md:items-end md:justify-between">

          <p className="font-display text-4xl leading-[1.08] font-semibold text-ivory md:text-6xl">
            Have a story?
            <br />

            <em className="text-sheen italic">
              Let&rsquo;s talk.
            </em>
          </p>

          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="group inline-flex items-center gap-4 self-start rounded-full border border-gold/40 py-3 pr-3 pl-7 text-sm font-medium text-gold-light transition-all duration-500 hover:bg-gold hover:text-ink-950 md:self-auto"
          >
            {CONTACT_INFO.email}

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 transition-colors group-hover:bg-ink-950/15">
              <IconArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </div>

        {/* ====================================== */}
        {/* FOOTER GRID */}
        {/* ====================================== */}

        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.9fr_1.1fr]">

          {/* ====================================== */}
          {/* BRAND + OFFICIAL LOGO */}
          {/* ====================================== */}

          <div>

            {/* NEW OFFICIAL WORDSMITH SQUAD LOGO */}

            <Link
              to="/"
              aria-label="Wordsmith Squad Home"
              className="group inline-flex max-w-full items-center"
            >
              <img
                src={FOOTER_LOGO}
                alt="Wordsmith Squad — From Ink to Icon"
                className="
                  h-auto
                  w-[190px]
                  max-w-full
                  object-contain
                  object-left
                  transition-transform
                  duration-500
                  group-hover:scale-[1.035]
                  sm:w-[220px]
                  lg:w-[235px]
                "
                loading="lazy"
                decoding="async"
              />
            </Link>

            {/* BRAND DESCRIPTION */}

            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/55">
              A full-service creative writing and publishing agency, bringing stories to life from the first idea to the final page. We craft, design, publish, and promote books that leave a lasting impression
            </p>

            {/* BRAND TAGLINE */}

            <p className="font-display mt-5 text-lg italic text-gold-light">
              From Ink to Icon
            </p>

            {/* SOCIAL MEDIA */}

            <SocialLinks className="mt-6" />
          </div>

          {/* ====================================== */}
          {/* EXPLORE LINKS */}
          {/* ====================================== */}

          <nav aria-label="Footer">
            <h3 className="eyebrow text-gold">
              Explore
            </h3>

            <ul className="mt-6 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-ivory/60 transition-colors hover:text-gold-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              
            </ul>
          </nav>

          {/* ====================================== */}
          {/* SERVICES LINKS */}
          {/* ====================================== */}

          <nav aria-label="Services">
            <h3 className="eyebrow text-gold">
              Services
            </h3>

            <ul className="mt-6 space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    state={{ anchor: service.id }}
                    className="text-sm text-ivory/60 transition-colors hover:text-gold-light"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ====================================== */}
          {/* NEWSLETTER + CONTACT */}
          {/* ====================================== */}

          <div>
            <h3 className="eyebrow text-gold">
              Notes from the Squad
            </h3>

            <p className="mt-6 text-sm leading-relaxed text-ivory/55">
              Behind every book is a story beyond the story. We share ours through thoughtful insights on writing, publishing, creativity, and the literary world.
            </p>

            {state === "done" ? (
              <p
                className="mt-4 flex items-center gap-2 rounded-2xl border border-gold/30 bg-gold/10 px-4 py-3 text-sm text-gold-light"
                aria-live="polite"
              >
                <IconCheck className="h-4 w-4 shrink-0" />
                Newsletter registration is not yet available.
              </p>
            ) : (
              <form
                onSubmit={subscribe}
                className="mt-4"
                noValidate
              >
                <div className="flex overflow-hidden rounded-full border border-ivory/20 transition-colors focus-within:border-gold">

                  <label
                    htmlFor="footer-email"
                    className="sr-only"
                  >
                    Email address
                  </label>

                  <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);

                      if (state === "error") {
                        setState("idle");
                      }
                    }}
                    placeholder="your@email.com"
                    className="w-full min-w-0 bg-transparent px-5 py-3 text-sm text-ivory placeholder:text-ivory/30 focus:outline-none"
                  />

                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="flex w-12 shrink-0 items-center justify-center bg-gold text-ink-950 transition-colors hover:bg-gold-light"
                  >
                    <IconArrowRight className="h-4 w-4" />
                  </button>
                </div>

                {state === "error" && (
                  <p
                    className="mt-2 text-xs text-[#d98a7b]"
                    role="alert"
                  >
                    Please enter a valid email address.
                  </p>
                )}
              </form>
            )}

            {/* CONTACT INFORMATION */}

            <div className="mt-6 space-y-1.5 text-sm text-ivory/55">

              <p>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="transition-colors hover:text-gold-light"
                >
                  {CONTACT_INFO.email}
                </a>
              </p>

              <p className="text-xs text-ivory/40">
                {CONTACT_INFO.regions}
              </p>
            </div>
          </div>
        </div>

        {/* ====================================== */}
        {/* FOOTER BOTTOM */}
        {/* ====================================== */}

        <div className="hairline mt-14" />

        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-[0.6875rem] tracking-wide text-ivory/35 md:flex-row">

          <p>
            © 2026 Wordsmith Squad. All rights reserved.
          </p>

          

          <Link
            to="/brand"
            className="transition-colors hover:text-gold"
          >
            Brand Identity Guidelines →
          </Link>
        </div>

      </div>
    </footer>
  );
}
