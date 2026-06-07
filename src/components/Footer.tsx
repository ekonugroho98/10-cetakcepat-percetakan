import React from 'react';
import { site } from '../data';

const socialUrls: Record<string, (handle: string) => string> = {
  instagram: (h) => `https://instagram.com/${h.replace("@", "")}`,
  facebook: (h) => `https://facebook.com/${h.replace(/\s+/g, "")}`,
  tiktok: (h) => `https://tiktok.com/${h.replace("@", "")}`,
};

export const Footer: React.FC = () => {
  const socials = Object.entries(site.social).filter(([, v]) => v);
  return (
    <footer className="bg-dark text-white/70">
      <div className="max-w-6xl mx-auto px-5 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center size-10 rounded-xl bg-primary text-white font-display font-bold">
              {site.logoMark}
            </span>
            <span className="font-display text-lg font-bold text-white">{site.brand}</span>
          </div>
          <p className="max-w-sm leading-relaxed text-white/60">{site.tagline}. {site.address}.</p>
          <div className="flex gap-3 flex-wrap">
            {socials.map(([k, v]) => {
              const url = socialUrls[k]?.(v as string) ?? "#";
              return (
                <a key={k} href={url} target="_blank" rel="noopener noreferrer" className="text-sm px-3 py-1.5 rounded-full bg-white/10 text-white/80 hover:bg-primary/20 hover:text-primary transition-colors">
                  {v as string}
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-white mb-4">Navigasi</h4>
          <ul className="space-y-2.5 text-sm">
            {site.nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-primary transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-white mb-4">Kontak</h4>
          <ul className="space-y-2.5 text-sm">
            <li>{site.phone}</li>
            <li>{site.email}</li>
            <li>{site.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 py-6 text-sm text-white/45 flex flex-col sm:flex-row gap-2 justify-between">
          <span>© 2026 {site.brand}. Semua hak dilindungi.</span>
          <span>Dibuat dengan React + Tailwind</span>
        </div>
      </div>
    </footer>
  );
};
