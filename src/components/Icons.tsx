type P = { className?: string };
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const IconQuill = ({ className }: P) => (
  <svg viewBox="0 0 32 32" className={className} {...base}>
    <path d="M26 5c-7.5 1-13.5 5-16.5 11.5C7.8 20.2 7 24 6.8 26.2 9 26 12.8 25.2 16.5 23.5 23 20.5 27 14.5 26 5Z" />
    <path d="M6.8 26.2C12 18 18 12 24 7.5" />
    <path d="M13.5 17.5l4.5.5M17 13.5l4.5.5" />
  </svg>
);

export const IconEdit = ({ className }: P) => (
  <svg viewBox="0 0 32 32" className={className} {...base}>
    <path d="M6 8h13M6 13h9M6 18h7" />
    <path d="M25.5 12.5 15 23l-4 1 1-4L22.5 9.5c.8-.8 2.2-.8 3 0s.8 2.2 0 3Z" />
    <path d="M6 26h20" />
  </svg>
);

export const IconPublish = ({ className }: P) => (
  <svg viewBox="0 0 32 32" className={className} {...base}>
    <path d="M16 9c-2.5-1.8-6-2.3-10-2v17c4-.3 7.5.2 10 2 2.5-1.8 6-2.3 10-2V7c-4-.3-7.5.2-10 2Z" />
    <path d="M16 9v17" />
    <path d="M22 13.5 25 10l3 3.5M25 10v8" strokeWidth={1.4} />
  </svg>
);

export const IconDesign = ({ className }: P) => (
  <svg viewBox="0 0 32 32" className={className} {...base}>
    <rect x="5" y="5" width="22" height="22" />
    <rect x="9.5" y="9.5" width="13" height="13" strokeDasharray="2.5 2.5" />
    <path d="M16 12.5c1.6 2.1 2.6 4 2.6 5.6 0 1.6-1.2 2.7-2.6 2.7s-2.6-1.1-2.6-2.7c0-1.6 1-3.5 2.6-5.6Z" />
    <path d="M16 18v3" />
  </svg>
);

export const IconMarketing = ({ className }: P) => (
  <svg viewBox="0 0 32 32" className={className} {...base}>
    <path d="M27 6 5 14.5l8 3 3 8L27 6Z" />
    <path d="M13 17.5 27 6" />
    <path d="M9 22.5l-3 3M12.5 25l-2 2" />
  </svg>
);

export const IconCompass = ({ className }: P) => (
  <svg viewBox="0 0 32 32" className={className} {...base}>
    <circle cx="16" cy="16" r="11" />
    <path d="M20.5 11.5 18 18l-6.5 2.5L14 14l6.5-2.5Z" />
    <circle cx="16" cy="16" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const IconUsers = ({ className }: P) => (
  <svg viewBox="0 0 32 32" className={className} {...base}>
    <circle cx="12" cy="11" r="4" />
    <path d="M4.5 26c.8-4.5 3.8-7 7.5-7s6.7 2.5 7.5 7" />
    <path d="M20 7.6a4 4 0 0 1 0 6.8M23.5 19.4c2.2 1 3.6 3.2 4 6.1" />
  </svg>
);

export const IconShield = ({ className }: P) => (
  <svg viewBox="0 0 32 32" className={className} {...base}>
    <path d="M16 4 6.5 7.5V15c0 6.5 4 10.8 9.5 13 5.5-2.2 9.5-6.5 9.5-13V7.5L16 4Z" />
    <path d="m11.5 15.5 3 3 6-6" />
  </svg>
);

export const IconGem = ({ className }: P) => (
  <svg viewBox="0 0 32 32" className={className} {...base}>
    <path d="M9 6h14l5 7-12 14L4 13l5-7Z" />
    <path d="M4 13h24M12.5 13 16 26l3.5-13M9 6l3.5 7L16 6l3.5 7L23 6" strokeWidth={1.1} />
  </svg>
);

export const IconHeart = ({ className }: P) => (
  <svg viewBox="0 0 32 32" className={className} {...base}>
    <path d="M16 26.5C10 22 4.5 17.6 4.5 12.2 4.5 8.8 7.2 6 10.5 6c2.2 0 4.2 1.2 5.5 3 1.3-1.8 3.3-3 5.5-3 3.3 0 6 2.8 6 6.2 0 5.4-5.5 9.8-11.5 14.3Z" />
  </svg>
);

export const IconLayers = ({ className }: P) => (
  <svg viewBox="0 0 32 32" className={className} {...base}>
    <path d="m16 4 12 6-12 6L4 10l12-6Z" />
    <path d="m4 16 12 6 12-6M4 22l12 6 12-6" />
  </svg>
);

export const IconArrowRight = ({ className }: P) => (
  <svg viewBox="0 0 20 20" className={className} {...base} strokeWidth={1.6}>
    <path d="M2.5 10h14M12 4.5 17.5 10 12 15.5" />
  </svg>
);

export const IconArrowUpRight = ({ className }: P) => (
  <svg viewBox="0 0 20 20" className={className} {...base} strokeWidth={1.6}>
    <path d="M5 15 15 5M7 5h8v8" />
  </svg>
);

export const IconCheck = ({ className }: P) => (
  <svg viewBox="0 0 20 20" className={className} {...base} strokeWidth={1.8}>
    <path d="m3.5 10.5 4.5 4.5 8.5-9" />
  </svg>
);

export const IconClose = ({ className }: P) => (
  <svg viewBox="0 0 20 20" className={className} {...base} strokeWidth={1.6}>
    <path d="m4 4 12 12M16 4 4 16" />
  </svg>
);

export const IconMenu = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={1.4}>
    <path d="M3 7h18M3 12h12M3 17h18" />
  </svg>
);

export const IconChevron = ({ className }: P) => (
  <svg viewBox="0 0 20 20" className={className} {...base} strokeWidth={1.6}>
    <path d="m7 4 6 6-6 6" />
  </svg>
);

export const IconMail = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <rect x="3" y="5.5" width="18" height="13" />
    <path d="m3.5 6.5 8.5 7 8.5-7" />
  </svg>
);

export const IconPhone = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M7.5 3.5 9.8 8l-2 2c1 2.3 2.9 4.2 5.2 5.2l2-2 4.5 2.3v3c0 .9-.7 1.6-1.6 1.5C10 19.4 4.6 14 4 6.1c-.1-.9.6-1.6 1.5-1.6h2Z" />
  </svg>
);

export const IconGlobe = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.6 2.5 3.9 5.5 3.9 9S14.6 18.5 12 21c-2.6-2.5-3.9-5.5-3.9-9S9.4 5.5 12 3Z" />
  </svg>
);

export const IconClock = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 6.5V12l3.5 2.5" />
  </svg>
);

export const IconInstagram = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const IconLinkedin = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
    <path d="M8 10.5V17M8 7.6v.1M12 17v-3.8c0-1.4 1-2.4 2.3-2.4S16.5 11.8 16.5 13.2V17" />
  </svg>
);

export const IconX = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="m4.5 4.5 15 15M19.5 4.5 12.7 11.3M4.5 19.5l6.8-6.8" />
  </svg>
);

export const IconFacebook = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M14.8 4.5h-2.3c-2 0-3.3 1.3-3.3 3.4v2.6H6.8v3h2.4v6h3.1v-6h2.5l.5-3h-3V8.2c0-.5.3-.7.8-.7h1.7v-3Z" />
  </svg>
);

export const SERVICE_ICONS: Record<string, (p: P) => React.ReactElement> = {
  ghostwriting: IconQuill,
  editing: IconEdit,
  publishing: IconPublish,
  design: IconDesign,
  marketing: IconMarketing,
};

export const WHY_ICONS: Record<string, (p: P) => React.ReactElement> = {
  layers: IconLayers,
  users: IconUsers,
  gem: IconGem,
  compass: IconCompass,
  shield: IconShield,
  heart: IconHeart,
};
/* ---------------- media player icons ---------------- */
export const IconPlay = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none">
    <path d="M7.5 4.6v14.8c0 .8.9 1.3 1.6.9l11-7.4c.6-.4.6-1.3 0-1.8l-11-7.4c-.7-.4-1.6.1-1.6.9Z" />
  </svg>
);

export const IconPause = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none">
    <rect x="6" y="4.5" width="4.2" height="15" rx="1.2" />
    <rect x="13.8" y="4.5" width="4.2" height="15" rx="1.2" />
  </svg>
);

export const IconReplay = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={1.8}>
    <path d="M4 12a8 8 0 1 0 2.6-5.9" />
    <path d="M4 4.5v4.6h4.6" />
  </svg>
);

export const IconVolume = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={1.7}>
    <path d="M4 9.5v5h3.6l4.9 4v-13l-4.9 4H4Z" fill="currentColor" stroke="none" />
    <path d="M16 9a4.2 4.2 0 0 1 0 6M18.6 6.5a7.8 7.8 0 0 1 0 11" />
  </svg>
);

export const IconVolumeOff = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={1.7}>
    <path d="M4 9.5v5h3.6l4.9 4v-13l-4.9 4H4Z" fill="currentColor" stroke="none" />
    <path d="m16.2 9.5 5 5M21.2 9.5l-5 5" />
  </svg>
);

export const IconFullscreen = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={1.7}>
    <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
  </svg>
);

export const IconFullscreenExit = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={1.7}>
    <path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5" />
  </svg>
);
