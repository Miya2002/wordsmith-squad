import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "@/utils/cn";
import { Logo } from "./Logo";
import { IconClose, IconMenu } from "./Icons";
import { Button } from "./ui";

export type MenuItem = { label: string; to: string };
export type MenuGroup = { label: string; to: string; children?: MenuItem[] };

// Edit this array to rename, add, or remove navigation pages.
export const MEGA_NAV: MenuGroup[] = [
  { label: "Home", to: "/", children: [
    { label: "Our Process", to: "/home/our-process" },
    { label: "Why Choose Us", to: "/home/why-choose-us" },
    { label: "Client Testimonials", to: "/home/client-testimonials" },
  ] },
  { label: "About Us", to: "/about", children: [
    { label: "Our Story", to: "/about/our-story" },
    { label: "Our Mission", to: "/about/our-mission" },
    { label: "Our Team", to: "/about/our-team" },
    { label: "How We Work", to: "/about/how-we-work" },
  ] },
  
{
  label: "Editing",
  to: "/editing",
  children: [
    { label: "Manuscript Editing", to: "/editing/manuscript-editing" },
    { label: "Developmental Editing", to: "/editing/developmental-editing" },
    { label: "Line Editing", to: "/editing/line-editing" },
    { label: "Copy Editing", to: "/editing/copy-editing" },
    { label: "Proofreading", to: "/editing/proofreading" },
    { label: "Manuscript Assessment", to: "/editing/manuscript-assessment" },
    { label: "Book Formatting", to: "/editing/book-formatting" },
    { label: "Book Critique Services", to: "/editing/book-critique-services" },
  ]
},

  {
  label: "Publishing",
  to: "/publishing",
  children: [
    {
      label: "eBook Publishing",
      to: "/publishing/ebook-publishing",
    },
    {
      label: "Audiobook Publishing",
      to: "/publishing/audiobook-publishing",
    },
    {
      label: "Self Publishing Consultants",
      to: "/publishing/self-publishing-consultants",
    },
  ],
},
  { label: "Ghostwriting", to: "/ghostwriting", children: [
    { label: "Medical Ghostwriters", to: "/ghostwriting/medical-ghostwriters" },
    { label: "Screenplay Script Writing", to: "/ghostwriting/screenplay-script-writing" },
    { label: "Children's Book Writing", to: "/ghostwriting/childrens-book-writing" },
    { label: "Speech Script Writing", to: "/ghostwriting/speech-script-writing" },
    { label: "Comic Book Writing", to: "/ghostwriting/comic-book-writing" },
    { label: "Song Writing", to: "/ghostwriting/song-writing" },
    { label: "Real Life Story Writing", to: "/ghostwriting/real-life-story-writing" },
    { label: "Book Publishing Services", to: "/ghostwriting/book-publishing-services" },
    { label: "Corporate Writing Services", to: "/ghostwriting/corporate-writing-services" },
    { label: "Technical Ghostwriting", to: "/ghostwriting/technical-ghostwriting" },
    { label: "Podcast Script Writing", to: "/ghostwriting/podcast-script-writing" },
    { label: "Brand Storytelling", to: "/ghostwriting/brand-storytelling" },
    { label: "Legal Ghostwriting", to: "/ghostwriting/legal-ghostwriting" },
    { label: "Twitter Ghostwriting", to: "/ghostwriting/twitter-ghostwriting" },
    { label: "Instagram Ghostwriting", to: "/ghostwriting/instagram-ghostwriting" },
    { label: "Facebook Ghostwriting", to: "/ghostwriting/facebook-ghostwriting" },
    { label: "LinkedIn Ghostwriting", to: "/ghostwriting/linkedin-ghostwriting" },
    { label: "Scientific Ghostwriting", to: "/ghostwriting/scientific-ghostwriting" },
    { label: "Find a Literary Agent", to: "/ghostwriting/find-a-literary-agent" },
  ] },
  { label: "Genre", to: "/genre", children: [
    { label: "Fiction", to: "/genre/fiction" },
    { label: "Nonfiction", to: "/genre/nonfiction" },
    { label: "Memoir & Biography", to: "/genre/memoir-and-biography" },
    { label: "Romance", to: "/genre/romance" },
    { label: "Fantasy & Sci-Fi", to: "/genre/fantasy-and-sci-fi" },
    { label: "Mystery & Thriller", to: "/genre/mystery-and-thriller" },
    { label: "Business & Self-Help", to: "/genre/business-and-self-help" },
    { label: "Children's Books", to: "/genre/childrens-books" },
  ] },
  { label: "Creative Writing", to: "/creative-writing", children: [
    { label: "Story Writing", to: "/creative-writing/story-writing" },
    { label: "Novel Writing", to: "/creative-writing/novel-writing" },
    { label: "Poetry Writing", to: "/creative-writing/poetry-writing" },
    { label: "Screenwriting", to: "/creative-writing/screenwriting" },
    { label: "Script Writing", to: "/creative-writing/script-writing" },
    { label: "Book Outlining", to: "/creative-writing/book-outlining" },
  ] },
  { label: "Book Cover", to: "/book-cover", children: [
    { label: "Book Cover Design", to: "/book-cover/book-cover-design" },
    { label: "Layout Design & Typesetting", to: "/book-cover/layout-design-and-typesetting" },
    { label: "Book Illustration", to: "/book-cover/book-illustration" },
    { label: "eBook Cover Design", to: "/book-cover/ebook-cover-design" },
  ] },
  { label: "Marketing", to: "/marketing", children: [
    { label: "Book Marketing", to: "/marketing/book-marketing" },
    { label: "Author Branding", to: "/marketing/author-branding" },
    { label: "Social Media Promotion", to: "/marketing/social-media-promotion" },
    { label: "Book Launch Campaigns", to: "/marketing/book-launch-campaigns" },
    { label: "Amazon Book Promotion", to: "/marketing/amazon-book-promotion" },
  ] },
  { label: "Pricing Plans", to: "/pricing-plans", children: [
    { label: "Writing Packages", to: "/pricing-plans/writing-packages" },
    { label: "Editing Packages", to: "/pricing-plans/editing-packages" },
    { label: "Publishing Packages", to: "/pricing-plans/publishing-packages" },
    { label: "Request a Custom Quote", to: "/contact" },
  ] },
  { label: "Portfolio", to: "/portfolio", children: [
    { label: "Featured Books", to: "/portfolio/featured-books" },
    { label: "Book Covers", to: "/portfolio/book-covers" },
    { label: "Our Projects", to: "/portfolio/our-projects" },
  ] },
  { label: "Contact", to: "/contact", children: [
    { label: "Get a Free Consultation", to: "/contact" },
    { label: "Request a Quote", to: "/contact/request-a-quote" },
    { label: "Frequently Asked Questions", to: "/contact/faq" },
  ] },
];

const Chevron = ({ expanded = false }: { expanded?: boolean }) => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7"
    className={cn("h-3.5 w-3.5 shrink-0 transition-transform duration-300", expanded && "rotate-180")}>
    <path d="m5 7.5 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const [desktopGroup, setDesktopGroup] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, window.scrollY / h) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    setMobileOpen(false);
    setMobileGroup(null);
    setDesktopGroup(null);
  }, [location.pathname]);

  useEffect(() => {
    const old = document.body.style.overflow;
    if (mobileOpen) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = old; };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDesktopGroup(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isSectionActive = (entry: MenuGroup) =>
    entry.to === "/" ? location.pathname === "/" :
    location.pathname === entry.to ||
    location.pathname.startsWith(`${entry.to}/`) ||
    (entry.children?.some(child => child.to !== "/" && location.pathname === child.to) ?? false);

  return (
    <>
      <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[80] h-[2px] origin-left bg-gradient-to-r from-gold-mid via-gold to-gold-light"
        style={{ transform: `scaleX(${progress})` }} />

      <header className="fixed inset-x-0 top-0 z-[70] px-3 pt-3 sm:px-5 sm:pt-4">
        <div className={cn(
          "relative mx-auto flex w-full max-w-[1900px] items-center justify-between gap-3 rounded-[2rem] border py-2 pr-2 pl-4 transition-all duration-500 sm:pl-6",
          scrolled
            ? "border-gold/25 bg-ink-950/95 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.9)] backdrop-blur-xl"
            : "border-ivory/12 bg-ink-950/80 shadow-[0_16px_50px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl"
        )}>
          <Link to="/" aria-label="Wordsmith Squad — home" className="shrink-0">
            <Logo variant="horizontal" tone="onDark" size="sm" />
          </Link>

          {/* Full-width desktop menu (mobile/tablet switch below 1536px). */}
          <nav aria-label="Primary" className="hidden min-w-0 items-center justify-end gap-0.5 2xl:flex">
            {MEGA_NAV.map((entry, index) => {
              const expanded = desktopGroup === entry.label;
              const active = isSectionActive(entry);
              const mega = (entry.children?.length ?? 0) >= 8;
              const align = index >= MEGA_NAV.length - 3 ? "right-0" : index <= 1 ? "left-0" : "left-1/2 -translate-x-1/2";
              return (
                <div key={entry.label} className="relative shrink-0"
                  onMouseEnter={() => setDesktopGroup(entry.label)}
                  onMouseLeave={() => setDesktopGroup(current => current === entry.label ? null : current)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) setDesktopGroup(null);
                  }}>
                  <div className={cn("flex items-center rounded-full transition-colors duration-300", active || expanded ? "bg-ivory/10" : "hover:bg-ivory/[0.06]")}>
                    <NavLink to={entry.to} end={entry.to === "/"}
                      className={cn("whitespace-nowrap py-2.5 pl-2.5 text-[11px] font-medium 2xl:text-[11px] min-[1800px]:pl-3 min-[1800px]:text-[12px] transition-colors duration-300", active || expanded ? "text-gold-light" : "text-ivory/75 hover:text-ivory")}
                      onFocus={() => setDesktopGroup(entry.label)}>
                      {entry.label}
                    </NavLink>
                    {!!entry.children?.length && (
                      <button type="button" aria-label={`${entry.label} submenu`} aria-expanded={expanded}
                        aria-controls={`desktop-menu-${index}`}
                        onClick={() => setDesktopGroup(expanded ? null : entry.label)}
                        className={cn("flex h-9 items-center pr-2 pl-1 transition-colors", expanded ? "text-gold" : "text-ivory/60 hover:text-gold")}
                      ><Chevron expanded={expanded} /></button>
                    )}
                  </div>
                  {!!entry.children?.length && (
                    <div id={`desktop-menu-${index}`}
                      className={cn("absolute top-full z-[90] pt-3 transition-all duration-300 ease-out motion-reduce:transition-none", align,
                        expanded ? "visible translate-y-0 opacity-100" : "invisible pointer-events-none -translate-y-2 opacity-0")}
                      aria-hidden={!expanded}>
                      <div className={cn("overflow-hidden rounded-[1.4rem] border border-gold/20 bg-ink-900/98 p-3 shadow-[0_24px_85px_rgba(0,0,0,0.7)] ring-1 ring-ivory/5 backdrop-blur-2xl", mega ? "w-[min(640px,85vw)]" : "w-[min(310px,85vw)]")}
                        style={{ backgroundColor: "rgba(19,18,16,0.98)" }}>
                        <div className="border-b border-gold/15 px-3 pb-3 pt-1">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">Explore {entry.label}</span>
                        </div>
                        <div className={cn("grid gap-1 pt-2", mega ? "grid-cols-2" : "grid-cols-1")}>
                          {entry.children.map((child, i) => (
                            <Link key={`${child.to}-${i}`} to={child.to} tabIndex={expanded ? 0 : -1}
                              className="group/item flex min-h-10 items-center justify-between gap-2 rounded-xl px-3 py-2 text-[12px] leading-snug text-ivory/75 transition-all duration-200 hover:translate-x-0.5 hover:bg-gold/10 hover:text-gold-light focus-visible:bg-gold/10"
                              onClick={() => setDesktopGroup(null)}>
                              <span>{child.label}</span>
                              <span aria-hidden="true" className="text-gold/0 transition-colors group-hover/item:text-gold">↗</span>
                            </Link>
                          ))}
                        </div>
                        <Link to={entry.to} tabIndex={expanded ? 0 : -1}
                          className="mt-2 block rounded-xl border-t border-gold/15 px-3 pt-3 pb-1 text-[11px] font-semibold tracking-wide text-gold hover:text-gold-light"
                          onClick={() => setDesktopGroup(null)}>View {entry.label} overview →</Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="hidden shrink-0 2xl:block">
            <Button to="/contact" variant="gold" arrow={false} className="min-h-0! whitespace-nowrap px-4! py-3! text-[11px] min-[1800px]:text-[12px]">
              Free Consultation
            </Button>
          </div>
          <button type="button"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ivory/20 text-ivory transition-colors hover:border-gold hover:text-gold 2xl:hidden"
            onClick={() => setMobileOpen(v => !v)} aria-expanded={mobileOpen} aria-controls="wordsmith-mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}>
            {mobileOpen ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Scrollable, accessible tablet/mobile accordion menu. */}
      <div id="wordsmith-mobile-menu" aria-hidden={!mobileOpen}
        className={cn("fixed inset-0 z-[60] flex flex-col bg-ink-950 transition-all duration-500 2xl:hidden",
          mobileOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0")}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="bg-dots absolute inset-0 opacity-40" />
          <span className="font-display absolute -right-10 bottom-0 text-[16rem] font-bold leading-none italic text-ivory/[0.03] select-none">W</span>
          <div className="absolute top-1/3 left-1/2 h-100 w-100 -translate-x-1/2 rounded-full bg-gold/[0.07] blur-[100px]" />
        </div>
        <nav aria-label="Mobile" className="relative mx-auto mt-23 w-full max-w-2xl flex-1 overflow-y-auto overscroll-contain px-5 pt-5 pb-6 sm:px-8">
          {MEGA_NAV.map((entry, i) => {
            const expanded = mobileGroup === entry.label;
            const active = isSectionActive(entry);
            return (
              <div key={entry.label} className={cn("border-b border-ivory/10 transition-all duration-500", mobileOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}
                style={{ transitionDelay: mobileOpen ? `${Math.min(i * 32, 300)}ms` : "0ms" }}>
                <div className="flex items-center justify-between gap-3">
                  <Link to={entry.to} tabIndex={mobileOpen ? 0 : -1}
                    className={cn("font-display flex-1 py-3.5 text-xl font-medium transition-colors sm:text-2xl", active ? "text-gold italic" : "text-ivory hover:text-gold-light")}
                    onClick={() => setMobileOpen(false)}>{entry.label}</Link>
                  {!!entry.children?.length && (
                    <button type="button" tabIndex={mobileOpen ? 0 : -1} aria-expanded={expanded}
                      aria-controls={`mobile-menu-${i}`} aria-label={`Toggle ${entry.label} submenu`}
                      onClick={() => setMobileGroup(expanded ? null : entry.label)}
                      className={cn("flex h-11 w-11 items-center justify-center rounded-full border transition-colors", expanded ? "border-gold/50 bg-gold/10 text-gold" : "border-ivory/15 text-ivory/70 hover:text-gold")}>
                      <Chevron expanded={expanded} />
                    </button>
                  )}
                </div>
                {!!entry.children?.length && (
                  <div id={`mobile-menu-${i}`}
                    className={cn("grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none", expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                    <div className="min-h-0 overflow-hidden">
                      <div className="grid gap-1 pb-4 pl-3 sm:grid-cols-2">
                        {entry.children.map((child, j) => (
                          <Link key={`${child.to}-${j}`} to={child.to} tabIndex={mobileOpen && expanded ? 0 : -1}
                            onClick={() => setMobileOpen(false)}
                            className="rounded-lg border-l border-gold/20 px-3 py-2.5 text-sm text-ivory/65 transition-colors hover:border-gold hover:bg-gold/10 hover:text-gold-light">
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
          <div className="py-7"><Button to="/contact" variant="gold" className="w-full justify-center" onClick={() => setMobileOpen(false)}>Get a Free Consultation</Button></div>
          <p className="pb-6 text-center text-[10px] uppercase tracking-[0.3em] text-ivory/40">Your Story · Our Craft · One Masterpiece</p>
        </nav>
      </div>
    </>
  );
}
