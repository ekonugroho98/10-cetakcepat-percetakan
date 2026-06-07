import React from 'react';

type IconProps = { name: string; className?: string };

// Set ikon line (stroke) generik, dipakai lintas project UMKM.
const paths: Record<string, React.ReactNode> = {
  truck: <><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  leaf: <><path d="M11 20A7 7 0 0 1 4 13c0-6 7-9 16-9 0 9-3 16-9 16z" /><path d="M11 20c0-5 2-8 8-11" /></>,
  shield: <><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" /><path d="M9 12l2 2 4-4" /></>,
  washer: <><rect x="4" y="2" width="16" height="20" rx="2" /><circle cx="12" cy="14" r="5" /><path d="M8 6h.01M11 6h.01" /></>,
  shirt: <><path d="M16 3l4 3-3 3-1-1v11H8V8L7 9 4 6l4-3 2 2h4z" /></>,
  suit: <><path d="M6 3l6 4 6-4v18h-4l-2-7-2 7H6z" /></>,
  iron: <><path d="M3 16a8 8 0 0 1 8-8h10v4a4 4 0 0 1-4 4z" /><path d="M3 16v3h13" /></>,
  shoe: <><path d="M2 17l1-7 4 2 3-4 3 5 8 1v3z" /><path d="M2 17h19" /></>,
  bed: <><path d="M2 8v10M2 12h20v6M22 12v6M6 12V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" /></>,
  coffee: <><path d="M4 8h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" /><path d="M17 9h2a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-2" /><path d="M7 2v2M11 2v2M15 2v2" /></>,
  cup: <><path d="M6 2h12l-1 18a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z" /><path d="M5 8h14" /></>,
  cake: <><path d="M3 21h18v-7H3z" /><path d="M3 14c2 0 2 2 4.5 2S10 14 12 14s2 2 4.5 2 2-2 4.5-2" /><path d="M12 3v4M8 4v3M16 4v3" /></>,
  scissors: <><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M20 4L8.5 15.5M14.5 14.5L20 20M8 8l4 4" /></>,
  razor: <><path d="M3 3l7 7M9 9l11 11" /><rect x="13" y="2" width="8" height="5" rx="1" transform="rotate(45 17 4)" /></>,
  crown: <><path d="M3 7l4 5 5-7 5 7 4-5v11H3z" /></>,
  utensils: <><path d="M4 2v8a2 2 0 0 0 2 2 2 2 0 0 0 2-2V2M6 2v20M16 2c-2 0-3 2-3 5s1 5 3 5v10" /></>,
  camera: <><path d="M3 7h4l2-2h6l2 2h4v13H3z" /><circle cx="12" cy="13" r="4" /></>,
  image: <><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="M21 16l-5-5L5 21" /></>,
  heart: <><path d="M12 21C5 16 3 12 3 8.5 3 6 5 4 7.5 4c1.7 0 3 .9 4.5 2.5C13.5 4.9 14.8 4 16.5 4 19 4 21 6 21 8.5c0 3.5-2 7.5-9 12.5z" /></>,
  wrench: <><path d="M21 4a5 5 0 0 1-6.5 6.5L5 20l-1-1 9.5-9.5A5 5 0 0 1 20 3z" /></>,
  gauge: <><path d="M12 13l4-4" /><path d="M3 18a9 9 0 1 1 18 0" /><circle cx="12" cy="13" r="1.5" /></>,
  car: <><path d="M3 12l2-5h14l2 5v6h-3M3 12v6h3M3 12h18" /><circle cx="7" cy="17" r="1.5" /><circle cx="17" cy="17" r="1.5" /></>,
  tooth: <><path d="M12 2C8 2 5 4 5 8c0 5 2 14 4 14 1.5 0 1.5-5 3-5s1.5 5 3 5c2 0 4-9 4-14 0-4-3-6-7-6z" /></>,
  stethoscope: <><path d="M5 3v6a4 4 0 0 0 8 0V3" /><path d="M9 17a5 5 0 0 0 10 0v-2" /><circle cx="19" cy="11" r="2" /></>,
  dumbbell: <><path d="M2 12h20M5 8v8M19 8v8M8 6v12M16 6v12" /></>,
  flame: <><path d="M12 2c3 4 6 6 6 11a6 6 0 0 1-12 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-2-5 0-10z" /></>,
  flower: <><circle cx="12" cy="12" r="3" /><path d="M12 9c0-4 4-4 4-1s-4 1-4 1zM12 15c0 4-4 4-4 1s4-1 4-1zM9 12c-4 0-4-4-1-4s1 4 1 4zM15 12c4 0 4 4 1 4s-1-4-1-4z" /></>,
  gift: <><rect x="3" y="8" width="18" height="13" rx="1" /><path d="M3 12h18M12 8v13" /><path d="M12 8S10 2 7 4s5 4 5 4 7 2 5-2-5 2-5 2z" /></>,
  printer: <><path d="M6 9V3h12v6" /><rect x="4" y="9" width="16" height="8" rx="1" /><path d="M7 17h10v4H7z" /></>,
  layers: <><path d="M12 2l9 5-9 5-9-5z" /><path d="M3 12l9 5 9-5M3 17l9 5 9-5" /></>,
  plane: <><path d="M21 15l-9-3-9 3v-2l7-5-1-6 2 1 2 6 7 5z" /></>,
  map: <><path d="M9 3L3 5v16l6-2 6 2 6-2V3l-6 2-6-2z" /><path d="M9 3v16M15 5v16" /></>,
  compass: <><circle cx="12" cy="12" r="9" /><path d="M15 9l-2 6-4 0 2-6z" /></>,
  sparkle: <><path d="M12 2l2 7 7 2-7 2-2 7-2-7-7-2 7-2z" /></>,
  spa: <><path d="M12 3c3 4 3 8 0 12-3-4-3-8 0-12z" /><path d="M4 12c4-1 7 1 8 5-4 1-7-1-8-5zM20 12c-4-1-7 1-8 5 4 1 7-1 8-5z" /></>,
  star: <><path d="M12 2l3 7 7 .5-5.5 4.5 2 7L12 17l-6.5 4 2-7L2 9.5 9 9z" /></>,
  phone: <><path d="M5 3h4l2 5-3 2a11 11 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  pin: <><path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  check: <><path d="M4 12l5 5L20 6" /></>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
};

export const Icon: React.FC<IconProps> = ({ name, className = 'size-6' }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {paths[name] ?? paths.sparkle}
  </svg>
);
