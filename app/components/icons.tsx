import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = (p: P) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...p,
});

export const Stethoscope = (p: P) => (
  <svg {...base(p)}>
    <path d="M4.5 3v6a4 4 0 0 0 8 0V3" />
    <path d="M4.5 3H3M12.5 3H14" />
    <path d="M8.5 17v1a4 4 0 0 0 8 0v-1.5" />
    <circle cx="18.5" cy="14.5" r="2.5" />
  </svg>
);

export const Heart = (p: P) => (
  <svg {...base(p)}>
    <path d="M19 5.5a4.5 4.5 0 0 0-7 .8A4.5 4.5 0 0 0 5 5.5C2.5 8 3 11 6 14l6 6 6-6c3-3 3.5-6 1-8.5Z" />
  </svg>
);

export const HeartPulse = (p: P) => (
  <svg {...base(p)}>
    <path d="M19 5.5a4.5 4.5 0 0 0-7 .8A4.5 4.5 0 0 0 5 5.5C2.5 8 3 11 6 14l6 6 6-6c3-3 3.5-6 1-8.5Z" />
    <path d="M3.5 12.5H8l1.5-3 2 5 1.5-2.5h4" />
  </svg>
);

export const Cross = (p: P) => (
  <svg {...base(p)}>
    <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z" />
  </svg>
);

export const Syringe = (p: P) => (
  <svg {...base(p)}>
    <path d="m18 2 4 4" />
    <path d="m17 7 3-3" />
    <path d="M19 9 8.7 19.3a2.4 2.4 0 0 1-3.4 0l-.6-.6a2.4 2.4 0 0 1 0-3.4L15 5" />
    <path d="m12 8 3 3M9 11l3 3M6 14l3 3" />
    <path d="m5 15-3 3 2 2 3-3" />
  </svg>
);

export const Pill = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="8" width="18" height="8" rx="4" transform="rotate(-45 12 12)" />
    <path d="m8.5 8.5 7 7" />
  </svg>
);

export const Shield = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3 5 6v5c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6z" />
    <path d="m9.5 12 1.8 1.8L15 10" />
  </svg>
);

export const Hospital = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 21V7l8-4 8 4v14" />
    <path d="M2 21h20" />
    <path d="M12 6v4M10 8h4" />
    <path d="M9 21v-4h6v4" />
  </svg>
);

export const Clock = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const Users = (p: P) => (
  <svg {...base(p)}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
    <path d="M16 5.2a3.2 3.2 0 0 1 0 5.6M17.5 20a5.5 5.5 0 0 0-2.2-4.4" />
  </svg>
);

export const Phone = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 3h3l1.5 4.5-2 1.5a12 12 0 0 0 6 6l1.5-2 4.5 1.5V18a2 2 0 0 1-2.2 2A16 16 0 0 1 4 5.2 2 2 0 0 1 6 3Z" />
  </svg>
);

export const Mail = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 6.5 8.5 6 8.5-6" />
  </svg>
);

export const MapPin = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const Cap = (p: P) => (
  <svg {...base(p)}>
    <path d="M2 8.5 12 4l10 4.5-10 4.5z" />
    <path d="M6 10.5V15c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
    <path d="M22 8.5V14" />
  </svg>
);

export const Star = (p: P) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="m12 2 2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.6 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z" />
  </svg>
);

export const Sparkle = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    <path d="M12 8a4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4 4 4 0 0 0 4-4Z" fill="currentColor" stroke="none" />
  </svg>
);

export const Arrow = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const Check = (p: P) => (
  <svg {...base(p)}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </svg>
);

export const Menu = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Close = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const Balloon = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3c3 0 5 2.4 5 5.5 0 4-3 6.5-5 6.5S7 12.5 7 8.5C7 5.4 9 3 12 3Z" />
    <path d="M12 15v2M12 17c-1 .6-1 1.4 0 2s1 1.4 0 2" />
    <path d="M11 14.6 12 15l1-.4" />
  </svg>
);

export const Cloud = (p: P) => (
  <svg {...base(p)}>
    <path d="M6.5 18a4 4 0 0 1-.5-8 5.5 5.5 0 0 1 10.6-1.4A3.8 3.8 0 0 1 17.5 18Z" />
  </svg>
);

export const Teddy = (p: P) => (
  <svg {...base(p)}>
    <circle cx="6.5" cy="5.5" r="2" />
    <circle cx="17.5" cy="5.5" r="2" />
    <circle cx="12" cy="12" r="6.5" />
    <circle cx="10" cy="11" r="0.6" fill="currentColor" />
    <circle cx="14" cy="11" r="0.6" fill="currentColor" />
    <path d="M12 13v1.2M10.6 15a2 2 0 0 0 2.8 0" />
  </svg>
);

export const Blocks = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="13" width="8" height="8" rx="1.5" />
    <rect x="13" y="13" width="8" height="8" rx="1.5" />
    <rect x="8" y="3" width="8" height="8" rx="1.5" />
    <path d="M6 15.5h2M16 15.5h2M11 5.5h2" />
  </svg>
);

export const Rainbow = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 19a9 9 0 0 1 18 0" />
    <path d="M6 19a6 6 0 0 1 12 0" />
    <path d="M9 19a3 3 0 0 1 6 0" />
  </svg>
);

export const Duck = (p: P) => (
  <svg {...base(p)}>
    <path d="M13 5.5a3 3 0 1 0-4.9 2.3C6 8.6 4.5 10.6 4.5 13c0 3.3 3.1 5.5 7 5.5s7-2 7-5c0-2.6-1.8-4.4-4.3-5" />
    <path d="M13 5.2 16.5 4l-1.4 2.4" />
    <circle cx="10.5" cy="5.5" r="0.6" fill="currentColor" />
  </svg>
);

export const Bottle = (p: P) => (
  <svg {...base(p)}>
    <path d="M10 3h4v2l-1 1v1h-2V6l-1-1z" />
    <rect x="8.5" y="8" width="7" height="12" rx="2.5" />
    <path d="M8.5 12h7M10.5 8v-1M13.5 8v-1" />
  </svg>
);

export const Baby = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="7" r="4" />
    <path d="M9 6.5s.8 1 3 1 3-1 3-1" />
    <path d="M8 12c-2 1-3 3-3 5v3h14v-3c0-2-1-4-3-5" />
  </svg>
);
