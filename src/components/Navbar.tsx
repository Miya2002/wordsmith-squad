
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "@/utils/cn";
import { Logo } from "./Logo";
import { IconClose, IconMenu } from "./Icons";
import { Button } from "./ui";

export type MenuItem = {
  label: string;
  to: string;
};

export type MenuGroup = {
  label: string;
  to: string;
  children?: MenuItem[];
};

// Main pages remain visible.
// Only selected service pages have dropdowns.
export const MEGA_NAV: MenuGroup[] = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About Us",
    to: "/about",
  },
   {
    label: "Ghostwriting",
    to: "/explore/ghostwriting",
    children: [
      { label: "Medical Ghostwriters", to: "/explore/ghostwriting/medical-ghostwriters" },
      { label: "Screenplay Script Writing", to: "/explore/ghostwriting/screenplay-script-writing" },
      { label: "Children's Book Writing", to: "/explore/ghostwriting/childrens-book-writing" },
      { label: "Speech Script Writing", to: "/explore/ghostwriting/speech-script-writing" },
      { label: "Comic Book Writing", to: "/explore/ghostwriting/comic-book-writing" },
      { label: "Novel Writing", to: "/explore/ghostwriting/novel-writing" },
      { label: "Real Life Story Writing", to: "/explore/ghostwriting/real-life-story-writing" },
      { label: "Book Publishing Services", to: "/explore/ghostwriting/book-publishing-services" },
      { label: "Corporate Writing Services", to: "/explore/ghostwriting/corporate-writing-services" },
      { label: "Technical Ghostwriting", to: "/explore/ghostwriting/technical-ghostwriting" },
      { label: "Podcast Script Writing", to: "/explore/ghostwriting/podcast-script-writing" },
      { label: "Brand Storytelling", to: "/explore/ghostwriting/brand-storytelling" },
      { label: "Legal Ghostwriting", to: "/explore/ghostwriting/legal-ghostwriting" },
      { label: "Twitter Ghostwriting", to: "/explore/ghostwriting/twitter-ghostwriting" },
      { label: "Instagram Ghostwriting", to: "/explore/ghostwriting/instagram-ghostwriting" },
      { label: "Facebook Ghostwriting", to: "/explore/ghostwriting/facebook-ghostwriting" },
      { label: "LinkedIn Ghostwriting", to: "/explore/ghostwriting/linkedin-ghostwriting" },
      { label: "Scientific Ghostwriting", to: "/explore/ghostwriting/scientific-ghostwriting" },
      { label: "Find a Literary Agent", to: "/explore/ghostwriting/find-a-literary-agent" },
    ],
  },
  {
    label: "Editing",
    to: "/explore/editing",
    children: [
      { label: "Proofreading", to: "/explore/editing/proofreading" },
      { label: "Manuscript Editing", to: "/explore/editing/manuscript-editing" },
      { label: "Book Formatting", to: "/explore/editing/book-formatting" },
    ],
  },
   {
    label: "Genre",
    to: "/explore/genre",
    children: [
      { label: "Fiction", to: "/explore/genre/fiction" },
      { label: "Nonfiction", to: "/explore/genre/nonfiction" },
      { label: "Memoir & Biography", to: "/explore/genre/memoir-and-biography" },
      { label: "Romance", to: "/explore/genre/romance" },
      { label: "Fantasy & Sci-Fi", to: "/explore/genre/fantasy-and-sci-fi" },
      { label: "Mystery & Thriller", to: "/explore/genre/mystery-and-thriller" },
      { label: "Business & Self-Help", to: "/explore/genre/business-and-self-help" },
      { label: "Children's Books", to: "/explore/genre/childrens-books" },
    ],
  },
  {
    label: "Publishing",
    to: "/explore/publishing",
    children: [
      
      
      { label: "eBook Publishing", to: "/explore/publishing/ebook-publishing" },
      { label: "Audiobook Publishing", to: "/explore/publishing/audiobook-publishing" },
      { label: "Self Publishing Consultants", to: "/explore/publishing/self-publishing-consultants" },
      
    ],
  },
 
 
  {
    label: "Creative Writing",
    to: "/explore/creative-writing",
   
children: [
  { label: "Copywriting", to: "/explore/creative-writing/copywriting" },
  { label: "Thesis Writing", to: "/explore/creative-writing/thesis-writing" },
  { label: "Dissertation Writing", to: "/explore/creative-writing/dissertation-writing" },
  { label: "Research Writing", to: "/explore/creative-writing/research-writing" },
  { label: "Script Writing", to: "/explore/creative-writing/script-writing" },
  { label: "Article Writing", to: "/explore/creative-writing/article-writing" },
],

  },
  {
    label: "Book Cover",
    to: "/explore/book-cover",
    children: [
      { label: "Book Cover Design", to: "/explore/book-cover/book-cover-design" },
      { label: "Layout Design & Typesetting", to: "/explore/book-cover/layout-design-and-typesetting" },
      { label: "Book Illustration", to: "/explore/book-cover/book-illustration" },
      { label: "eBook Cover Design", to: "/explore/book-cover/ebook-cover-design" },
    ],
  },
  {
    label: "Marketing",
    to: "/explore/marketing",
  },
  {
    label: "Pricing Plans",
    to: "/explore/pricing-plans",
  },
  {
    label: "Portfolio",
    to: "/portfolio",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

const Chevron = ({ expanded = false }: { expanded?: boolean }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    className={cn(
      "h-3.5 w-3.5 shrink-0 transition-transform duration-300",
      expanded && "rotate-180"
    )}
  >
    <path
      d="m5 7.5 5 5 5-5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const [desktopGroup, setDesktopGroup] = useState<string | null>(null);

  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress(
        height > 0 ? Math.min(1, window.scrollY / height) : 0
      );
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Close menus after navigation
  useEffect(() => {
    setMobileOpen(false);
    setMobileGroup(null);
    setDesktopGroup(null);
  }, [location.pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    const oldOverflow = document.body.style.overflow;

    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = oldOverflow;
    };
  }, [mobileOpen]);

  // Escape key
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDesktopGroup(null);
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (entry: MenuGroup) => {
    if (entry.to === "/") {
      return location.pathname === "/";
    }

    return (
      location.pathname === entry.to ||
      location.pathname.startsWith(`${entry.to}/`)
    );
  };

  return (
    <>
      {/* Scroll Progress */}
      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[80] h-[2px] origin-left bg-gradient-to-r from-gold-mid via-gold to-gold-light"
        style={{ transform: `scaleX(${progress})` }}
      />

      {/* Main Navbar */}
      <header className="fixed inset-x-0 top-0 z-[70] px-3 pt-3 sm:px-5 sm:pt-4">
        <div
          className={cn(
            "relative mx-auto flex w-full max-w-[1900px] items-center justify-between gap-3 rounded-full border py-2 pr-2 pl-4 transition-all duration-500 sm:pl-6",
            scrolled
              ? "border-gold/25 bg-ink-950/95 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.9)] backdrop-blur-xl"
              : "border-ivory/12 bg-ink-950/85 shadow-[0_16px_50px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          )}
        >
          {/* Logo */}
          <Link
            to="/"
            aria-label="Wordsmith Squad Home"
            className="shrink-0"
          >
            <Logo variant="horizontal" tone="onDark" size="sm" />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 2xl:flex"
          >
            {MEGA_NAV.map((entry, index) => {
              const hasChildren = !!entry.children?.length;
              const expanded = desktopGroup === entry.label;
              const active = isActive(entry);
              const mega = (entry.children?.length ?? 0) >= 8;

              const align =
                index >= MEGA_NAV.length - 3
                  ? "right-0"
                  : index <= 1
                    ? "left-0"
                    : "left-1/2 -translate-x-1/2";

              return (
                <div
                  key={entry.label}
                  className="relative shrink-0"
                  onMouseEnter={() => {
                    if (hasChildren) setDesktopGroup(entry.label);
                  }}
                  onMouseLeave={() => {
                    if (hasChildren) setDesktopGroup(null);
                  }}
                >
                  {/* Main Page Link */}
                  <div
                    className={cn(
                      "flex items-center rounded-full transition-colors duration-300",
                      active || expanded
                        ? "bg-ivory/10"
                        : "hover:bg-ivory/[0.06]"
                    )}
                  >
                    <NavLink
                      to={entry.to}
                      end={entry.to === "/"}
                      className={cn(
                        "whitespace-nowrap rounded-full px-2.5 py-2.5 text-[11px] font-medium transition-colors duration-300 min-[1800px]:px-3 min-[1800px]:text-xs",
                        active || expanded
                          ? "text-gold-light"
                          : "text-ivory/75 hover:text-ivory"
                      )}
                    >
                      {entry.label}
                    </NavLink>

                    {/* Arrow ONLY when dropdown exists */}
                    {hasChildren && (
                      <button
                        type="button"
                        aria-label={`${entry.label} submenu`}
                        aria-expanded={expanded}
                        aria-controls={`desktop-menu-${index}`}
                        onClick={() =>
                          setDesktopGroup(
                            expanded ? null : entry.label
                          )
                        }
                        className={cn(
                          "flex h-9 items-center pr-2 pl-0.5 transition-colors",
                          expanded
                            ? "text-gold"
                            : "text-ivory/60 hover:text-gold"
                        )}
                      >
                        <Chevron expanded={expanded} />
                      </button>
                    )}
                  </div>

                  {/* Dropdown */}
                  {hasChildren && (
                    <div
                      id={`desktop-menu-${index}`}
                      aria-hidden={!expanded}
                      className={cn(
                        "absolute top-full z-[90] pt-3 transition-all duration-300 ease-out",
                        align,
                        expanded
                          ? "visible translate-y-0 opacity-100"
                          : "invisible pointer-events-none -translate-y-2 opacity-0"
                      )}
                    >
                      <div
                        className={cn(
                          "overflow-hidden rounded-[1.4rem] border border-gold/20 bg-ink-900/98 p-3 shadow-[0_24px_85px_rgba(0,0,0,0.7)] backdrop-blur-2xl",
                          mega
                            ? "w-[min(640px,85vw)]"
                            : "w-[min(310px,85vw)]"
                        )}
                        style={{
                          backgroundColor: "rgba(19,18,16,0.98)",
                        }}
                      >
                        <div className="border-b border-gold/15 px-3 pb-3 pt-1">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                            Explore {entry.label}
                          </span>
                        </div>

                        <div
                          className={cn(
                            "grid gap-1 pt-2",
                            mega ? "grid-cols-2" : "grid-cols-1"
                          )}
                        >
                          {entry.children?.map((child, i) => (
                            <Link
                              key={`${child.to}-${i}`}
                              to={child.to}
                              tabIndex={expanded ? 0 : -1}
                              onClick={() => setDesktopGroup(null)}
                              className="group/item flex min-h-10 items-center justify-between gap-2 rounded-xl px-3 py-2 text-xs leading-snug text-ivory/75 transition-all duration-200 hover:translate-x-0.5 hover:bg-gold/10 hover:text-gold-light"
                            >
                              <span>{child.label}</span>
                              <span className="text-gold/0 transition-colors group-hover/item:text-gold">
                                ↗
                              </span>
                            </Link>
                          ))}
                        </div>

                        <Link
                          to={entry.to}
                          tabIndex={expanded ? 0 : -1}
                          onClick={() => setDesktopGroup(null)}
                          className="mt-2 block rounded-xl border-t border-gold/15 px-3 pt-3 pb-1 text-[11px] font-semibold tracking-wide text-gold transition-colors hover:text-gold-light"
                        >
                          View {entry.label} overview →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Free Consultation */}
          <div className="hidden shrink-0 2xl:block">
            <Button
              to="/contact"
              variant="gold"
              arrow={false}
              className="min-h-0! whitespace-nowrap px-4! py-3! text-[11px] min-[1800px]:text-xs"
            >
              Free Consultation
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ivory/20 text-ivory transition-colors hover:border-gold hover:text-gold 2xl:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            aria-expanded={mobileOpen}
            aria-controls="wordsmith-mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <IconClose className="h-5 w-5" />
            ) : (
              <IconMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        id="wordsmith-mobile-menu"
        aria-hidden={!mobileOpen}
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-ink-950 transition-all duration-500 2xl:hidden",
          mobileOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        )}
      >
        {/* Background Design */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="bg-dots absolute inset-0 opacity-40" />

          <span className="font-display absolute -right-10 bottom-0 select-none text-[16rem] font-bold italic leading-none text-ivory/[0.03]">
            W
          </span>

          <div className="absolute left-1/2 top-1/3 h-100 w-100 -translate-x-1/2 rounded-full bg-gold/[0.07] blur-[100px]" />
        </div>

        <nav
          aria-label="Mobile Navigation"
          className="relative mx-auto mt-24 w-full max-w-2xl flex-1 overflow-y-auto overscroll-contain px-5 pt-5 pb-6 sm:px-8"
        >
          {MEGA_NAV.map((entry, index) => {
            const hasChildren = !!entry.children?.length;
            const expanded = mobileGroup === entry.label;
            const active = isActive(entry);

            return (
              <div
                key={entry.label}
                className="border-b border-ivory/10"
                style={{
                  transitionDelay: mobileOpen
                    ? `${Math.min(index * 30, 300)}ms`
                    : "0ms",
                }}
              >
                <div className="flex items-center justify-between gap-3">
                  <Link
                    to={entry.to}
                    tabIndex={mobileOpen ? 0 : -1}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "font-display flex-1 py-3.5 text-xl font-medium transition-colors sm:text-2xl",
                      active
                        ? "text-gold italic"
                        : "text-ivory hover:text-gold-light"
                    )}
                  >
                    {entry.label}
                  </Link>

                  {/* Mobile arrow ONLY for dropdown pages */}
                  {hasChildren && (
                    <button
                      type="button"
                      tabIndex={mobileOpen ? 0 : -1}
                      aria-expanded={expanded}
                      aria-controls={`mobile-menu-${index}`}
                      aria-label={`Toggle ${entry.label} submenu`}
                      onClick={() =>
                        setMobileGroup(
                          expanded ? null : entry.label
                        )
                      }
                      className={cn(
                        "flex h-11 w-11 items-center justify-center rounded-full border transition-colors",
                        expanded
                          ? "border-gold/50 bg-gold/10 text-gold"
                          : "border-ivory/15 text-ivory/70 hover:text-gold"
                      )}
                    >
                      <Chevron expanded={expanded} />
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown */}
                {hasChildren && (
                  <div
                    id={`mobile-menu-${index}`}
                    className={cn(
                      "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                      expanded
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="grid gap-1 pb-4 pl-3 sm:grid-cols-2">
                        {entry.children?.map((child, j) => (
                          <Link
                            key={`${child.to}-${j}`}
                            to={child.to}
                            tabIndex={
                              mobileOpen && expanded ? 0 : -1
                            }
                            onClick={() => setMobileOpen(false)}
                            className="rounded-lg border-l border-gold/20 px-3 py-2.5 text-sm text-ivory/65 transition-colors hover:border-gold hover:bg-gold/10 hover:text-gold-light"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Mobile Consultation */}
          <div className="py-7">
            <Button
              to="/contact"
              variant="gold"
              className="w-full justify-center"
              onClick={() => setMobileOpen(false)}
            >
              Get a Free Consultation
            </Button>
          </div>

          <p className="pb-6 text-center text-[10px] uppercase tracking-[0.3em] text-ivory/40">
            Your Story · Our Craft · One Masterpiece
          </p>
        </nav>
      </div>
    </>
  );
}
