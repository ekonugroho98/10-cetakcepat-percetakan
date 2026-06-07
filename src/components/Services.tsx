import React from 'react';
import { site } from '../data';
import { Icon } from './Icon';

export const Services: React.FC = () => {
  const s = site.services;
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">{s.eyebrow}</span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-dark mt-2">{s.title}</h2>
          <p className="text-dark/60 mt-3">{s.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {s.items.map((item) => (
            <div
              key={item.name}
              className="group bg-white rounded-2xl border border-dark/[0.07] p-7 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all"
            >
              <span className="grid place-items-center size-14 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Icon name={item.icon} className="size-7" />
              </span>
              <h3 className="font-display text-xl font-bold text-dark mt-5">{item.name}</h3>
              <p className="text-dark/60 text-[15px] leading-relaxed mt-2">{item.desc}</p>
              {item.price && (
                <p className="mt-4 text-primary font-semibold text-sm">{item.price}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
