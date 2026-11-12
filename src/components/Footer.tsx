import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { NAV_LINKS, SERVICES, CONTACT_INFO, SOCIALS } from "@/lib/data";
import {
  IconInstagram,
  IconLinkedin,
  IconX,
  IconFacebook,
  IconArrowRight,
  IconArrowUpRight,
  IconCheck,
} from "./Icons";

const SOCIAL_ICONS: Record<string, (p: { className?: string }) => React.ReactElement> = {
  instagram: IconInstagram,
  linkedin: IconLinkedin,
  x: IconX,
  facebook: IconFacebook,
};

export function SocialLinks({ className }: { className?: string }) {
  const [notice, setNotice] = useState<string | null>(null);
  return (
    <div className={className}>
      <div className="flex items-center gap-3">
        {SOCIALS.map((s) => {
          const Icon = SOCIAL_ICONS[s.id];
          return (
            <a
              key={s.id}
              href="#"
              title={`${s.label} — profile coming soon`}
              aria-label={`${s.label} (coming soon)`}
              onClick={(e) => {
                e.preventDefault();
                setNotice(`${s.label} profile launching soon — placeholder link.`);
                window.setTimeout(() => setNotice(null), 2600);
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 text-ivory/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
            >
              <Icon className="h-4 w-4" />
            </a>
          );
        })}
      </div>
      <p aria-live="polite" className="mt-2 min-h-4 text-[0.625rem] tracking-wide text-gold/70">
        {notice}
      </p>
    </div>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "error" | "done">("idle");

  const subscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      setState("error");
      return;
    }
    setState("done");
    setEmail("");
  };

  return (
    <footer className="relative overflow-hidden border-t border-gold/12 bg-ink-950">
      {/* oversized ghost wordmark */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -bottom-7 overflow-hidden select-none">
        <p className="font-display text-center text-[19vw] leading-none font-bold tracking-tight whitespace-nowrap text-ivory/[0.025]">
          WORDSMITH
        </p>
      </div>

      <div className="wrap relative pt-16 pb-10 md:pt-24">
        <div className="mb-16 flex flex-col gap-8 border-b border-ivory/10 pb-14 md:flex-row md:items-end md:justify-between">
          <p className="font-display text-4xl leading-[1.08] font-semibold text-ivory md:text-6xl">
            Have a story?
            <br />
            <em className="text-sheen italic">Let&rsquo;s talk.</em>
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
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.9fr_1.1fr]">
          {/* brand */}
          <div>
            <Logo variant="horizontal" tone="onDark" size="md" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/55">
              A full-service creative writing &amp; publishing agency. We turn ideas into
              professionally written, designed, published and celebrated books.
            </p>
            <p className="font-display mt-5 text-lg text-gold-light italic">
              Your Story. Our Craft. One Masterpiece.
            </p>
            <SocialLinks className="mt-6" />
          </div>

          {/* explore */}
          <nav aria-label="Footer">
            <h3 className="eyebrow text-gold">Explore</h3>
            <ul className="mt-6 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-ivory/60 transition-colors hover:text-gold-light"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/trailer"
                  className="text-sm text-ivory/60 transition-colors hover:text-gold-light"
                >
                  Watch the Trailer
                </Link>
              </li>
              <li>
                <Link
                  to="/brand"
                  className="text-sm text-ivory/60 transition-colors hover:text-gold-light"
                >
                  Brand Identity
                </Link>
              </li>
            </ul>
          </nav>

          {/* services */}
          <nav aria-label="Services">
            <h3 className="eyebrow text-gold">Services</h3>
            <ul className="mt-6 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    to="/services"
                    state={{ anchor: s.id }}
                    className="text-sm text-ivory/60 transition-colors hover:text-gold-light"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* newsletter + contact */}
          <div>
            <h3 className="eyebrow text-gold">Notes from the Squad</h3>
            <p className="mt-6 text-sm leading-relaxed text-ivory/55">
              Occasional letters on craft, publishing and the writing life. No noise, ever.
            </p>
            {state === "done" ? (
              <p className="mt-4 flex items-center gap-2 rounded-2xl border border-success/40 bg-success/10 px-4 py-3 text-sm text-[#a8c49a]" aria-live="polite">
                <IconCheck className="h-4 w-4 shrink-0" /> Welcome to the Squad. First letter is on its way.
              </p>
            ) : (
              <form onSubmit={subscribe} className="mt-4" noValidate>
                <div className="flex overflow-hidden rounded-full border border-ivory/20 transition-colors focus-within:border-gold">
                  <label htmlFor="footer-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (state === "error") setState("idle");
                    }}
                    placeholder="your@email.com"
                    className="w-full bg-transparent px-5 py-3 text-sm text-ivory placeholder:text-ivory/30 focus:outline-none"
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
                  <p className="mt-2 text-xs text-[#d98a7b]" role="alert">
                    Please enter a valid email address.
                  </p>
                )}
              </form>
            )}
            <div className="mt-6 space-y-1.5 text-sm text-ivory/55">
              <p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="transition-colors hover:text-gold-light">
                  {CONTACT_INFO.email}
                </a>
              </p>
              <p className="text-xs text-ivory/40">{CONTACT_INFO.regions}</p>
            </div>
          </div>
        </div>

        <div className="hairline mt-14" />
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-[0.6875rem] tracking-wide text-ivory/35 md:flex-row">
          <p>© 2026 Wordsmith Squad. All rights reserved.</p>
          <p className="text-ivory/30">Crafted with patience, serif type &amp; strong coffee.</p>
          <Link to="/brand" className="transition-colors hover:text-gold">
            Brand Identity Guidelines →
          </Link>
        </div>
      </div>
    </footer>
  );
}