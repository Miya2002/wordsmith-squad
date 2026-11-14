import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/utils/cn";
import { PageHero, FinalCTA } from "@/components/Sections";
import { Button, Reveal, usePageMeta } from "@/components/ui";
import { Book3D } from "@/components/Book3D";
import { WsMark } from "@/components/Logo";
import { IconClose, IconArrowUpRight } from "@/components/Icons";
import { BOOKS, PORTFOLIO_FILTERS, type Book } from "@/lib/data";

function BookModal({ book, onClose }: { book: Book; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      className="animate-fade fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto bg-ink-950/85 p-4 backdrop-blur-md sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${book.title} — concept details`}
      onClick={onClose}
    >
      <div
        className="animate-modal relative my-auto grid w-full max-w-3xl gap-10 overflow-hidden rounded-[2rem] bg-ivory p-8 sm:p-10 md:grid-cols-[0.75fr_1.25fr] md:gap-12 md:rounded-[2.5rem]"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full blur-3xl"
          style={{ background: `${book.spine}55` }}
        />
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-4 right-4 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-ink/15 bg-ivory text-ink/60 transition-colors hover:border-gold-dark hover:text-gold-dark"
        >
          <IconClose className="h-4 w-4" />
        </button>

        <div className="relative mx-auto w-44 self-center pt-4 md:w-full md:max-w-52">
          <Book3D book={book} ry={24} shadow="light" priority />
        </div>

        <div className="relative pb-2">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="rounded-full bg-ink px-3.5 py-1.5 text-[0.5625rem] font-semibold tracking-[0.2em] text-gold uppercase">
              {book.genre}
            </span>
            <span className="rounded-full border border-gold-dark/40 px-3.5 py-1.5 text-[0.5625rem] font-semibold tracking-[0.2em] text-gold-dark uppercase">
              Concept · Sample title
            </span>
          </div>
          <h2 className="font-display mt-5 text-3xl leading-tight font-semibold text-ink">{book.title}</h2>
          <p className="mt-2 text-sm text-ink/55">
            {book.author} · {book.year}
          </p>
          <p className="mt-5 text-sm leading-relaxed text-ink/70">{book.description}</p>

          <p className="eyebrow mt-7 text-gold-dark">Crafts involved</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {book.services.map((s) => (
              <li key={s} className="rounded-full border border-beige bg-paper px-3.5 py-1.5 text-xs text-ink/70">
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button
              onClick={() => {
                onClose();
                navigate("/contact");
              }}
              variant="ink"
            >
              Commission Work Like This
            </Button>
          </div>
          <p className="mt-5 text-[0.6875rem] leading-relaxed text-ink/45">
            Fictional demonstration project — created to showcase design range, not presented as client work.
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function Portfolio() {
  usePageMeta(
    "Portfolio — Wordsmith Squad",
    "A demonstration shelf of concept book covers across fiction, fantasy, romance, memoir, business, self-help, nonfiction and poetry."
  );
  const location = useLocation();
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<Book | null>(null);

  useEffect(() => {
    const id = (location.state as { book?: string } | null)?.book;
    if (id) {
      const b = BOOKS.find((x) => x.id === id);
      if (b) setActive(b);
    }
  }, [location.state]);

  const counts = useMemo(() => {
    const m: Record<string, number> = { All: BOOKS.length };
    BOOKS.forEach((b) => (m[b.category] = (m[b.category] ?? 0) + 1));
    return m;
  }, []);

  const shown = filter === "All" ? BOOKS : BOOKS.filter((b) => b.category === filter);
  const hero = ["salt", "ember", "letters"].map((id) => BOOKS.find((b) => b.id === id)!);

  return (
    <>
      <PageHero
        eyebrow="Our Portfolio"
        ghost="Shelf"
        curve="bg-ivory-deep"
        title={
          <>
            The Demonstration <em className="text-sheen italic">Shelf.</em>
          </>
        }
        text="Concept covers and typography studies from our studio — a tour of what your book could look like in its best jacket."
        aside={
          <div className="relative mx-auto aspect-[5/4] w-full max-w-md">
            <div aria-hidden className="absolute top-1/2 left-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />
            <div className="absolute top-[12%] left-0 z-10 w-[38%]">
              <Book3D book={hero[0]} ry={20} float floatDelay="-2s" priority />
            </div>
            <div className="absolute top-0 left-[28%] z-20 w-[44%]">
              <Book3D book={hero[1]} ry={25} float priority />
            </div>
            <div className="absolute top-[20%] right-0 z-30 w-[36%]">
              <Book3D book={hero[2]} ry={30} float floatDelay="-4s" priority />
            </div>
          </div>
        }
      />

      {/* honesty notice */}
      <div className="bg-ivory-deep">
        <div className="wrap pb-2">
          <div className="flex items-start gap-3 rounded-2xl border border-gold-dark/25 bg-paper/60 px-5 py-4">
            <span className="mt-0.5 text-gold-dark">✦</span>
            <p className="text-xs leading-relaxed text-ink/65">
              Every title below is a <strong className="text-ink/85">fictional concept</strong> created to
              demonstrate our range — none are presented as real client work. As client books are published,
              this shelf will be restocked with the real thing.
            </p>
          </div>
        </div>
      </div>

      <section className="bg-ivory-deep pt-10 pb-28 md:pb-40">
        <div className="wrap">
          {/* filters */}
          <Reveal>
            <div className="flex flex-wrap items-center gap-2.5" role="group" aria-label="Filter portfolio by genre">
              {PORTFOLIO_FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  aria-pressed={filter === f}
                  className={cn(
                    "cursor-pointer rounded-full border px-5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-300",
                    filter === f
                      ? "border-ink bg-ink text-gold shadow-[0_12px_30px_-14px_rgba(23,23,23,0.7)]"
                      : "border-ink/15 bg-paper/60 text-ink/60 hover:border-gold-dark hover:text-gold-dark"
                  )}
                >
                  {f}
                  <span className={cn("ml-2", filter === f ? "text-gold/60" : "text-ink/35")}>{counts[f] ?? 0}</span>
                </button>
              ))}
            </div>
            <p className="mt-5 text-xs tracking-wide text-ink/50" aria-live="polite">
              Showing {shown.length} of {BOOKS.length} concepts
            </p>
          </Reveal>

          {/* grid */}
          <div key={filter} className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((b, i) => (
              <Reveal key={b.id} delay={Math.min(i, 5) * 80}>
                <div className="spot group relative h-full overflow-hidden rounded-[2rem] border border-beige bg-paper px-8 pt-14 pb-9 text-center transition-all duration-500 hover:-translate-y-2 hover:border-gold-dark/50 hover:shadow-[0_36px_70px_-34px_rgba(23,23,23,0.4)]">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-3/5 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: `radial-gradient(ellipse at 50% 25%, ${b.spine}40, transparent 70%)` }}
                  />
                  <Book3D book={b} shadow="light" ry={26} className="relative mx-auto max-w-56" onClick={() => setActive(b)} />
                  <p className="relative mt-11 text-[0.625rem] font-semibold tracking-[0.26em] text-gold-dark uppercase">
                    {b.genre}
                  </p>
                  <h2 className="font-display relative mt-2 text-xl leading-snug font-semibold text-ink">{b.title}</h2>
                  <p className="relative mt-1 text-xs text-ink/50">{b.author} · Concept</p>
                  <button onClick={() => setActive(b)} className="link-more relative mx-auto mt-5 cursor-pointer">
                    View Concept <IconArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </Reveal>
            ))}

            {/* reserved slot */}
            <Reveal delay={420}>
              <div className="flex h-full min-h-105 flex-col items-center justify-center rounded-[2rem] border-2 border-dashed border-gold-dark/45 bg-ivory/50 px-8 py-14 text-center">
                <WsMark tone="onLight" className="h-16 w-16 opacity-80" />
                <h2 className="font-display mt-6 text-2xl font-semibold text-ink">This spine is reserved.</h2>
                <p className="mt-3 max-w-55 text-sm leading-relaxed text-ink/60">
                  For your title, your name, your story — the next concept we&rsquo;d love to design is yours.
                </p>
                <Button to="/contact" variant="ink" className="mt-8">
                  Claim This Spot
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {active && <BookModal book={active} onClose={() => setActive(null)} />}

      <FinalCTA
        title={
          <>
            Picture Your Book <em className="font-semibold italic">On This Shelf.</em>
          </>
        }
        button="Start Your Book Journey"
      />
    </>
  );
}