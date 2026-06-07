import React, { useState } from 'react';
import { site } from '../data';
import { Icon } from './Icon';

export const Contact: React.FC = () => {
  const c = site.contact;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) {
      setError('Mohon lengkapi nama, nomor telepon, dan pesan.');
      return;
    }
    setError('');
    const text = encodeURIComponent(
      `Halo ${site.brand}, saya ${name} (${phone}).\n${message}`
    );
    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, '_blank');
  };

  const info = [
    { icon: 'phone', label: 'Telepon / WA', value: site.phone },
    { icon: 'mail', label: 'Email', value: site.email },
    { icon: 'pin', label: 'Alamat', value: site.address },
    { icon: 'clock', label: 'Jam Buka', value: site.hours },
  ];

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-10 bg-surface rounded-[2rem] p-7 md:p-12">
          <div className="flex flex-col gap-6">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">{c.eyebrow}</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-dark leading-tight">{c.title}</h2>
            <p className="text-dark/60 leading-relaxed">{c.subtitle}</p>

            <div className="grid sm:grid-cols-2 gap-5 mt-2">
              {info.map((it) => (
                <div key={it.label} className="flex gap-3">
                  <span className="grid place-items-center shrink-0 size-11 rounded-xl bg-primary/10 text-primary">
                    <Icon name={it.icon} className="size-5" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-dark/45 font-semibold">{it.label}</div>
                    <div className="text-dark/80 text-[15px] font-medium">{it.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={submit} className="bg-white rounded-2xl shadow-sm border border-dark/[0.06] p-6 md:p-8 flex flex-col gap-4">
            <div>
              <label className="text-sm font-semibold text-dark/70">Nama</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama lengkap"
                className="mt-1.5 w-full h-12 px-4 rounded-xl bg-surface border border-dark/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-dark/70">Nomor Telepon</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="08xx xxxx xxxx"
                inputMode="tel"
                className="mt-1.5 w-full h-12 px-4 rounded-xl bg-surface border border-dark/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-dark/70">Pesan</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Saya ingin memesan..."
                rows={4}
                className="mt-1.5 w-full px-4 py-3 rounded-xl bg-surface border border-dark/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <button
              type="submit"
              className="bg-primary text-white font-semibold py-3.5 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              Kirim via WhatsApp
              <Icon name="arrow" className="size-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
