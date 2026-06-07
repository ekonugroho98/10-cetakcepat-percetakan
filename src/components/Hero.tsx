import React from 'react';
import { site } from '../data';

export const Hero: React.FC = () => {
  const wa = `https://wa.me/${site.whatsapp}`;
  const h = site.hero;

  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden">
      {/* dekor latar */}
      <div className="absolute -top-32 -right-32 size-[480px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-32 size-[420px] rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 animate-fade-up">
          <span className="inline-flex items-center gap-2 self-start rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-semibold">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            {h.eyebrow}
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-[1.05] text-dark">
            {h.title} <span className="text-primary">{h.highlight}</span>
          </h1>
          <p className="text-lg text-dark/60 max-w-xl leading-relaxed">{h.subtitle}</p>

          <div className="flex flex-wrap gap-3">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-7 py-3.5 rounded-full font-semibold shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-transform"
            >
              {h.ctaPrimary}
            </a>
            <a
              href="#pricing"
              className="bg-white border border-dark/10 text-dark px-7 py-3.5 rounded-full font-semibold hover:border-primary hover:text-primary transition-colors"
            >
              {h.ctaSecondary}
            </a>
          </div>

          <div className="flex flex-wrap gap-8 pt-4">
            {h.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl md:text-3xl font-extrabold text-dark">{s.value}</div>
                <div className="text-sm text-dark/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="rounded-[2rem] overflow-hidden shadow-2xl shadow-dark/10 aspect-[4/5]">
            <img src={h.image} alt={`${site.brand} — ${site.tagline}`} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-5 py-4 hidden sm:flex items-center gap-3 animate-float">
            <span className="grid place-items-center size-11 rounded-xl bg-primary/10 text-primary font-display font-bold text-lg">
              ★
            </span>
            <div>
              <div className="font-bold text-dark leading-tight">{h.stats[0]?.value}</div>
              <div className="text-xs text-dark/50">{h.stats[0]?.label}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
