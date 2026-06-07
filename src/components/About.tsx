import React from 'react';
import { site } from '../data';
import { Icon } from './Icon';

export const About: React.FC = () => {
  const a = site.about;
  return (
    <section id="about" className="py-20 md:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="rounded-[2rem] overflow-hidden shadow-xl aspect-[4/3]">
            <img src={a.image} alt={`Suasana ${site.brand}`} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -top-5 -right-5 size-24 rounded-2xl bg-primary/15 -z-0 hidden md:block" />
        </div>

        <div className="order-1 lg:order-2 flex flex-col gap-6">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">{a.eyebrow}</span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-dark leading-tight">{a.title}</h2>
          {a.paragraphs.map((p, i) => (
            <p key={i} className="text-dark/60 leading-relaxed">{p}</p>
          ))}

          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            {a.points.map((pt) => (
              <div key={pt.title} className="flex gap-3">
                <span className="grid place-items-center shrink-0 size-11 rounded-xl bg-primary/10 text-primary">
                  <Icon name={pt.icon} className="size-5" />
                </span>
                <div>
                  <h3 className="font-bold text-dark text-[15px]">{pt.title}</h3>
                  <p className="text-sm text-dark/55 leading-snug">{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
