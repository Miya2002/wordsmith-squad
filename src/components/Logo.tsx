import { useId } from "react";
import { cn } from "@/utils/cn";

/**
 * WORDSMITH SQUAD — finalized brand mark.
 * A Didone-style "W" whose central apex rises into a gold pen nib,
 * interlaced with a hand-drawn "S" that weaves through the letterforms.
 * The S knockout is a true SVG mask, so the mark sits on any background.
 */

const S_PATH =
  "M56.5 45c-3-5.2-17-5.8-19.2 1.6-2.1 7.4 18.5 5 17.3 14-1.2 8.6-16.4 9-19.2 2.8";

export function WsMark({
  className,
  tone = "onDark",
}: {
  className?: string;
  tone?: "onDark" | "onLight" | "monoIvory" | "monoInk" | "gold";
}) {
  const id = useId();
  const wColor =
    tone === "onDark" || tone === "monoIvory"
      ? "#F5F0E8"
      : tone === "gold"
        ? "#C6A36A"
        : "#171717";
  const accent =
    tone === "monoIvory" ? "#F5F0E8" : tone === "monoInk" ? "#171717" : "#C6A36A";

  return (
    <svg viewBox="0 0 96 96" className={className} role="img" aria-label="Wordsmith Squad monogram">
      <defs>
        <mask id={id}>
          <rect width="96" height="96" fill="#fff" />
          <path d={S_PATH} fill="none" stroke="#000" strokeWidth="10" strokeLinecap="round" />
          <circle cx="48" cy="22.6" r="2.1" fill="#000" />
          <path d="M48 24.7v7.9" stroke="#000" strokeWidth="1.6" />
        </mask>
      </defs>
      <g mask={`url(#${id})`}>
        <g fill={wColor}>
          <path d="M12 30h9.5L33 78h-8.5Z" />
          <path d="M33 78 43.4 30H46L35.6 78Z" />
          <path d="M43.4 30h9.5L64.4 78h-8.5Z" />
          <path d="M64.4 78 74.8 30h2.6L67 78Z" />
          <rect x="8.5" y="27.2" width="16.5" height="3" />
          <rect x="71.4" y="27.2" width="9.5" height="3" />
        </g>
        <path
          d="M48 9c4.2 5.8 7 11.2 7 15.8 0 4-3.1 6.8-7 6.8s-7-2.8-7-6.8C41 20.2 43.8 14.8 48 9Z"
          fill={accent}
        />
      </g>
      <path d={S_PATH} fill="none" stroke={accent} strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export function Wordmark({
  tone = "onDark",
  className,
  size = "md",
}: {
  tone?: "onDark" | "onLight";
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const main = tone === "onDark" ? "text-ivory" : "text-ink";
  const sizes = {
    sm: ["text-base tracking-[0.14em]", "text-[0.5rem] tracking-[0.52em]"],
    md: ["text-xl tracking-[0.14em]", "text-[0.5625rem] tracking-[0.58em]"],
    lg: ["text-3xl md:text-4xl tracking-[0.14em]", "text-[0.6875rem] tracking-[0.62em]"],
  }[size];
  return (
    <span className={cn("flex flex-col leading-none select-none", className)}>
      <span className={cn("font-display font-semibold", main, sizes[0])}>WORDSMITH</span>
      <span className={cn("font-body font-semibold text-gold mt-1.5", sizes[1])}>
        SQUAD
      </span>
    </span>
  );
}

export function Logo({
  variant = "horizontal",
  tone = "onDark",
  size = "md",
  className,
}: {
  variant?: "horizontal" | "stacked" | "mark";
  tone?: "onDark" | "onLight";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const markSize = { sm: "h-8 w-8", md: "h-11 w-11", lg: "h-20 w-20" }[size];
  if (variant === "mark") return <WsMark tone={tone} className={cn(markSize, className)} />;
  if (variant === "stacked")
    return (
      <span className={cn("inline-flex flex-col items-center text-center", className)}>
        <WsMark tone={tone} className={markSize} />
        <Wordmark tone={tone} size={size} className="mt-4 items-center" />
      </span>
    );
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <WsMark tone={tone} className={markSize} />
      <span
        aria-hidden
        className={cn("w-px self-stretch my-1", tone === "onDark" ? "bg-ivory/15" : "bg-ink/15")}
      />
      <Wordmark tone={tone} size={size} />
    </span>
  );
}