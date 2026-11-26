
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type PageHeroProps = {
  eyebrow?: string;
  title?: ReactNode;
  text?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  text,
  description,
  children,
  className = "",
}: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden bg-[#14120F] px-6 pb-16 pt-32 text-[#F5F0E8] sm:px-8 lg:pb-20 lg:pt-36 ${className}`}
    >
      <div className="mx-auto max-w-[1200px]">
        {eyebrow && (
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C6A36A]">
            {eyebrow}
          </p>
        )}

        {title && (
          <h1 className="font-display max-w-[850px] text-[clamp(2.4rem,5vw,4.8rem)] font-semibold leading-[1.12] tracking-[-0.035em]">
            {title}
          </h1>
        )}

        {(text || description) && (
          <p className="mt-5 max-w-[650px] text-[14px] leading-[1.9] text-[#B8AEA1] sm:text-[16px]">
            {text || description}
          </p>
        )}

        {children}
      </div>
    </section>
  );
}

// Legacy compatibility only.
// Intentionally renders nothing.
// No gold Final CTA will appear.
export function FinalCTA() {
  return null;
}
