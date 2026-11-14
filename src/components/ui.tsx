import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";
import { IconArrowRight } from "./Icons";

/* ---------------- scroll reveal ---------------- */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li" | "figure" | "span";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ "--rd": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

/* ---------------- word-by-word headline reveal ---------------- */
export function Words({
  text,
  delay = 0,
  step = 80,
  inner,
}: {
  text: string;
  delay?: number;
  step?: number;
  inner?: string;
}) {
  const words = text.split(" ");
  return (
    <>
      {words.map((w, i) => (
        <span key={`${w}-${i}`}>
          <span className="inline-block overflow-hidden pr-[0.1em] pb-[0.16em] align-bottom -mb-[0.16em]">
            <span className={cn("word-in", inner)} style={{ "--wd": `${delay + i * step}ms` } as CSSProperties}>
              {w}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </>
  );
}

/* ---------------- count-up number ---------------- */
export function CountUp({
  to,
  suffix = "",
  pad = 0,
  duration = 1600,
  className,
}: {
  to: number;
  suffix?: string;
  pad?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const run = () => {
      if (reduced) {
        setVal(to);
        return;
      }
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / duration);
        setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    if (typeof IntersectionObserver === "undefined") {
      setVal(to);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {String(val).padStart(pad, "0")}
      {suffix}
    </span>
  );
}

/* ---------------- eyebrow pill ---------------- */
export function Eyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "eyebrow inline-flex items-center gap-2.5 rounded-full border px-4 py-2",
        tone === "dark"
          ? "border-gold-dark/30 bg-gold/12 text-gold-dark"
          : "border-gold/30 bg-gold/10 text-gold",
        className
      )}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
      </span>
      {children}
    </p>
  );
}

/* ---------------- section heading ---------------- */
export function SectionHead({
  eyebrow,
  title,
  text,
  tone = "dark",
  align = "left",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "font-display mt-6 text-[2.15rem] leading-[1.06] font-semibold text-balance sm:text-5xl lg:text-[3.6rem]",
          tone === "dark" ? "text-ink" : "text-ivory"
        )}
      >
        {title}
      </h2>
      {text && (
        <p
          className={cn(
            "mt-6 text-base leading-relaxed",
            align === "center" && "mx-auto max-w-2xl",
            tone === "dark" ? "text-ink/65" : "text-ivory/60"
          )}
        >
          {text}
        </p>
      )}
    </Reveal>
  );
}

/* ---------------- buttons ---------------- */
type BtnProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "gold" | "outline-light" | "outline-dark" | "ink";
  className?: string;
  arrow?: boolean;
  state?: unknown;
  disabled?: boolean;
};

export function Button({
  children,
  to,
  href,
  onClick,
  type = "button",
  variant = "gold",
  className,
  arrow = true,
  state,
  disabled,
}: BtnProps) {
  const cls = cn("btn", `btn-${variant}`, className);
  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <span className="btn-arrow">
          <IconArrowRight />
        </span>
      )}
    </>
  );
  if (to)
    return (
      <Link to={to} state={state} className={cls} onClick={onClick}>
        {inner}
      </Link>
    );
  if (href)
    return (
      <a href={href} className={cls} onClick={onClick}>
        {inner}
      </a>
    );
  return (
    <button type={type} onClick={onClick} className={cls} disabled={disabled}>
      {inner}
    </button>
  );
}

/* ---------------- page meta ---------------- */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title;
    if (description) {
      const tag = document.querySelector('meta[name="description"]');
      if (tag) tag.setAttribute("content", description);
    }
  }, [title, description]);
}