import React from 'react';
import { site } from '../data';
import { Icon } from './Icon';

export const Pricing: React.FC = () => {
  const p = site.pricing;
  const wa = `https://wa.me/${site.whatsapp}`;
  return (
    <section id="pricing" className="py-20 md:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">{p.eyebrow}</span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-dark mt-2">{p.title}</h2>
          <p className="text-dark/60 mt-3">{p.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {p.plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl p-8 transition-transform hover:-translate-y-1 ${
                plan.featured
                  ? 'bg-dark text-white shadow-2xl shadow-dark/20 md:scale-[1.04]'
                  : 'bg-white border border-dark/[0.07]'
              }`}
            >
              {plan.featured && (
                <span className="absolute top-5 right-5 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  Populer
                </span>
              )}
              <h3 className={`font-display text-xl font-bold ${plan.featured ? 'text-white' : 'text-dark'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mt-1 ${plan.featured ? 'text-white/60' : 'text-dark/55'}`}>{plan.desc}</p>
              <div className="flex items-end gap-1 mt-5">
                <span className="font-display text-4xl font-extrabold text-primary">{plan.price}</span>
                {plan.unit && (
                  <span className={`mb-1 text-sm ${plan.featured ? 'text-white/60' : 'text-dark/50'}`}>{plan.unit}</span>
                )}
              </div>

              <ul className="flex flex-col gap-3 mt-6 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-[15px]">
                    <span className="grid place-items-center size-5 rounded-full bg-primary/15 text-primary shrink-0">
                      <Icon name="check" className="size-3.5" />
                    </span>
                    <span className={plan.featured ? 'text-white/85' : 'text-dark/70'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto text-center px-6 py-3.5 rounded-full font-semibold transition-colors ${
                  plan.featured
                    ? 'bg-primary text-white hover:opacity-90'
                    : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
                }`}
              >
                {plan.cta ?? 'Pesan Sekarang'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
