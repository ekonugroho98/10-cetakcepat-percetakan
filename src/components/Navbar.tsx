import React, { useEffect, useState } from 'react';
import { site } from '../data';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const wa = `https://wa.me/${site.whatsapp}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 md:h-18 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid place-items-center size-10 rounded-xl bg-primary text-white font-display font-bold">
            {site.logoMark}
          </span>
          <span className="font-display text-lg font-bold text-dark">{site.brand}</span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-dark/70">
          {site.nav.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Pesan Sekarang
          </a>
          <button
            aria-label="Buka menu"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden grid place-items-center size-10 rounded-lg border border-dark/10 text-dark"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-dark/5 shadow-lg">
          <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1">
            {site.nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg text-dark/80 hover:bg-primary/5 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-primary text-white text-center px-5 py-3 rounded-full font-semibold"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
