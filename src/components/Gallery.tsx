import React from 'react';
import { site } from '../data';

export const Gallery: React.FC = () => {
  const g = site.gallery;
  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">{g.eyebrow}</span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-dark mt-2">{g.title}</h2>
          <p className="text-dark/60 mt-3">{g.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {g.images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group ${i % 5 === 0 ? 'row-span-2' : ''}`}
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
