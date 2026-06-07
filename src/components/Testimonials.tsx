import React from 'react';
import { site } from '../data';
import { Icon } from './Icon';

export const Testimonials: React.FC = () => {
  const t = site.testimonials;
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">{t.eyebrow}</span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-dark mt-2">{t.title}</h2>
          <p className="text-dark/60 mt-3">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.items.map((item) => (
            <figure key={item.name} className="bg-white rounded-2xl border border-dark/[0.07] p-7 flex flex-col gap-4">
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Icon key={i} name="star" className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-dark/70 leading-relaxed">"{item.quote}"</blockquote>
              <figcaption className="flex items-center gap-3 mt-auto pt-2">
                <span className="grid place-items-center size-11 rounded-full bg-primary/10 text-primary font-display font-bold">
                  {item.name.charAt(0)}
                </span>
                <div>
                  <div className="font-bold text-dark text-[15px]">{item.name}</div>
                  <div className="text-sm text-dark/50">{item.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
