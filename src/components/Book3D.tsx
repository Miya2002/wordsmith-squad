import type { CSSProperties, PointerEvent } from "react";
import { cn } from "@/utils/cn";
import type { Book } from "@/lib/data";

function TypoCoverArt({ book }: { book: Book }) {
  const t = book.typo!;
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-between text-center"
      style={{ background: t.bg, color: t.fg, padding: "9% 8%" }}
      aria-hidden
    >
      <div className="absolute inset-[4.5%] border" style={{ borderColor: `${t.accent}55` }} />
      <p
        className="relative font-body font-semibold uppercase"
        style={{ fontSize: "3.4cqw", letterSpacing: "0.34em", color: t.accent }}
      >
        {t.label}
      </p>

      <div className="relative flex flex-col items-center" style={{ gap: "5cqw" }}>
        {t.motif === "rule" && (
          <>
            <span className="block h-px w-[38cqw]" style={{ background: `${t.accent}88` }} />
            <span className="-mt-[3.6cqw] block h-px w-[26cqw]" style={{ background: `${t.accent}55` }} />
          </>
        )}
        {t.motif === "moon" && (
          <svg viewBox="0 0 40 40" style={{ width: "16cqw", height: "16cqw" }}>
            <circle cx="20" cy="20" r="14" fill="none" stroke={t.accent} strokeWidth="1" />
            <circle cx="25" cy="17" r="10" fill={t.accent} opacity="0.9" />
          </svg>
        )}
        {t.motif === "meridian" && (
          <svg viewBox="0 0 40 40" style={{ width: "15cqw", height: "15cqw" }}>
            <path d="M20 2v36M4 24h32" stroke={t.accent} strokeWidth="0.8" opacity="0.7" />
            <path d="M20 18l1.8 4.2L26 24l-4.2 1.8L20 30l-1.8-4.2L14 24l4.2-1.8Z" fill={t.accent} />
          </svg>
        )}
        <h4
          className={cn("font-display font-semibold uppercase", t.motif === "moon" && "italic normal-case")}
          style={{
            fontSize: t.motif === "moon" ? "12.5cqw" : "10.5cqw",
            lineHeight: 1.18,
            letterSpacing: t.motif === "moon" ? "0.01em" : "0.06em",
          }}
        >
          {book.title}
        </h4>
        {t.motif === "rule" && (
          <>
            <span className="-mb-[3.6cqw] block h-px w-[26cqw]" style={{ background: `${t.accent}55` }} />
            <span className="block h-px w-[38cqw]" style={{ background: `${t.accent}88` }} />
          </>
        )}
      </div>

      <p className="relative font-display uppercase" style={{ fontSize: "4.2cqw", letterSpacing: "0.3em" }}>
        {book.author}
      </p>
    </div>
  );
}

export function Book3D({
  book,
  className,
  ry = 26,
  hover = true,
  tilt = true,
  float = false,
  floatDelay = "0s",
  shadow = "dark",
  priority = false,
  onClick,
}: {
  book: Book;
  className?: string;
  ry?: number;
  hover?: boolean;
  tilt?: boolean;
  float?: boolean;
  floatDelay?: string;
  shadow?: "dark" | "light" | "none";
  priority?: boolean;
  onClick?: () => void;
}) {
  const Wrapper = onClick ? "button" : "div";

  /* pointer-driven 3D tilt */
  const onMove = (e: PointerEvent<HTMLElement>) => {
    if (!tilt || e.pointerType === "touch") return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--dy", `${(x * 16).toFixed(2)}deg`);
    el.style.setProperty("--rx", `${(-y * 12).toFixed(2)}deg`);
    el.classList.add("tilting");
  };
  const onLeave = (e: PointerEvent<HTMLElement>) => {
    const el = e.currentTarget;
    el.style.removeProperty("--dy");
    el.style.removeProperty("--rx");
    el.classList.remove("tilting");
  };

  return (
    <Wrapper
      {...(onClick
        ? { onClick, "aria-label": `View details for ${book.title}`, type: "button" as const }
        : {})}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={cn("relative block w-full text-left", hover && "book-hover", className)}
    >
      <div
        className={cn("book-stage", float && "animate-floaty")}
        style={{ "--ry": `${ry}deg`, "--fd": floatDelay } as CSSProperties}
      >
        <div className="book3d">
          <div className="b-back" style={{ background: book.spine, filter: "brightness(0.8)" }} aria-hidden />
          <div className="b-pages" aria-hidden />
          <div
            className="b-spine"
            style={{
              background: `linear-gradient(90deg, ${book.spine}, ${book.spine} 55%, rgba(0,0,0,0.25))`,
              boxShadow: "inset 0 0 6px rgba(0,0,0,0.35)",
            }}
            aria-hidden
          >
            <span style={{ color: book.spineFg }}>
              {book.title}&ensp;·&ensp;{book.author}
            </span>
          </div>
          <div className="b-front">
            {book.cover ? (
              <img
                src={book.cover}
                alt={`${book.title} — concept book cover designed by Wordsmith Squad`}
                loading={priority ? "eager" : "lazy"}
                draggable={false}
              />
            ) : (
              <TypoCoverArt book={book} />
            )}
            <div className="b-hinge" />
          </div>
        </div>
      </div>
      {shadow !== "none" && <div className={cn("book-shadow", shadow === "light" && "on-light")} aria-hidden />}
    </Wrapper>
  );
}