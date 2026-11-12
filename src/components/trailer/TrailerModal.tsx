import { useEffect } from "react";
import { createPortal } from "react-dom";
import { TrailerPlayer } from "./TrailerPlayer";
import { IconClose } from "@/components/Icons";

/** Lightbox that autoplays the trailer (opened from a user click, so sound is allowed). */
export function TrailerModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return createPortal(
    <div
      className="animate-fade fixed inset-0 z-[95] flex items-center justify-center overflow-y-auto bg-ink-950/92 p-3 backdrop-blur-md sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Wordsmith Squad trailer"
      onClick={onClose}
    >
      <div
        className="animate-modal relative w-full"
        style={{ maxWidth: "min(72rem, calc((100svh - 9rem) * 1.7778))" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close trailer"
          className="absolute -top-14 right-0 flex h-11 cursor-pointer items-center gap-2 rounded-full border border-ivory/20 bg-ink-950/70 pr-4 pl-5 text-[0.6875rem] font-semibold tracking-[0.18em] text-ivory/80 uppercase transition-colors hover:border-gold hover:text-gold"
        >
          Close <IconClose className="h-4 w-4" />
        </button>
        <TrailerPlayer
          autoPlay
          onNavigate={onClose}
          className="border border-gold/25 shadow-[0_60px_140px_-40px_rgba(198,163,106,0.45)]"
        />
      </div>
    </div>,
    document.body
  );
}
