export interface NavLink { label: string; href: string; }
export interface Stat { value: string; label: string; }
export interface FeaturePoint { icon: string; title: string; desc: string; }
export interface Service { icon: string; name: string; desc: string; price?: string; }
export interface Plan { name: string; price: string; unit?: string; desc: string; features: string[]; featured?: boolean; cta?: string; }
export interface GalleryImage { url: string; alt: string; }
export interface Testimonial { name: string; role: string; quote: string; rating: number; avatar?: string; }
export interface SiteData {
  brand: string; logoMark: string; tagline: string; whatsapp: string; phone: string; email: string; address: string; hours: string;
  social: { instagram?: string; facebook?: string; tiktok?: string };
  nav: NavLink[];
  hero: { eyebrow: string; title: string; highlight: string; subtitle: string; ctaPrimary: string; ctaSecondary: string; image: string; stats: Stat[] };
  about: { eyebrow: string; title: string; paragraphs: string[]; points: FeaturePoint[]; image: string };
  services: { eyebrow: string; title: string; subtitle: string; items: Service[] };
  pricing: { eyebrow: string; title: string; subtitle: string; plans: Plan[] };
  gallery: { eyebrow: string; title: string; subtitle: string; images: GalleryImage[] };
  testimonials: { eyebrow: string; title: string; subtitle: string; items: Testimonial[] };
  contact: { eyebrow: string; title: string; subtitle: string };
}

export const site: SiteData = {
  brand: 'CetakCepat',
  logoMark: 'CC',
  tagline: 'Percetakan digital cepat, rapi, & terjangkau',
  whatsapp: '6281234567810',
  phone: '0812-3456-7810',
  email: 'order@cetakcepat.id',
  address: 'Jl. Merdeka No. 17, Bogor, Jawa Barat',
  hours: 'Senin – Sabtu 08.00 – 21.00',
  social: { instagram: '@cetakcepat.id', facebook: 'CetakCepat Percetakan', tiktok: '@cetakcepat' },
  nav: [
    { label: 'Tentang', href: '#about' },
    { label: 'Produk', href: '#services' },
    { label: 'Harga', href: '#pricing' },
    { label: 'Galeri', href: '#gallery' },
    { label: 'Testimoni', href: '#testimonials' },
    { label: 'Pesan', href: '#contact' },
  ],
  hero: {
    eyebrow: 'Cetak kilat · Harga grosir · Desain gratis',
    title: 'Cetak apa saja,',
    highlight: 'cepat & rapi',
    subtitle:
      'CetakCepat melayani kebutuhan cetak Anda — dari kartu nama, banner, stiker, sampai undangan. Hasil tajam, pengerjaan kilat, dengan bantuan desain gratis.',
    ctaPrimary: 'Pesan Sekarang',
    ctaSecondary: 'Lihat Produk',
    image: 'https://images.unsplash.com/photo-1601751818941-571144562ff8?q=80&w=1200&auto=format&fit=crop',
    stats: [
      { value: '1 Jam', label: 'Cetak kilat*' },
      { value: '50rb+', label: 'Order selesai' },
      { value: '4.8/5', label: 'Rating pelanggan' },
    ],
  },
  about: {
    eyebrow: 'Tentang CetakCepat',
    title: 'Partner cetak untuk usaha & kebutuhan harian',
    paragraphs: [
      'CetakCepat hadir untuk UMKM, mahasiswa, dan kantor yang butuh hasil cetak berkualitas tanpa menunggu lama. Mesin digital terbaru kami menjamin warna tajam dan hasil konsisten.',
      'Tidak punya desain? Tenang, tim desainer kami siap bantu membuatkan gratis untuk setiap order. Cukup kirim kebutuhanmu, sisanya kami urus.',
    ],
    points: [
      { icon: 'printer', title: 'Mesin Digital Modern', desc: 'Warna tajam, hasil presisi.' },
      { icon: 'clock', title: 'Pengerjaan Kilat', desc: 'Banyak produk jadi di hari yang sama.' },
      { icon: 'layers', title: 'Desain Gratis', desc: 'Tim desainer bantu wujudkan ide Anda.' },
      { icon: 'star', title: 'Harga Grosir', desc: 'Makin banyak, makin murah per unit.' },
    ],
    image: 'https://images.unsplash.com/photo-1606328133083-65f5e1d4d8a8?q=80&w=1200&auto=format&fit=crop',
  },
  services: {
    eyebrow: 'Produk Cetak',
    title: 'Semua kebutuhan cetak Anda',
    subtitle: 'Dari skala kecil sampai pesanan besar.',
    items: [
      { icon: 'layers', name: 'Kartu Nama', desc: 'Cetak kartu nama art carton premium.', price: 'mulai Rp35.000/box' },
      { icon: 'image', name: 'Banner & Spanduk', desc: 'Flexi & frontlite untuk promosi outdoor.', price: 'mulai Rp20.000/m²' },
      { icon: 'sparkle', name: 'Stiker & Label', desc: 'Stiker vinyl, chromo, dan transparan.', price: 'mulai Rp25.000/lembar' },
      { icon: 'gift', name: 'Undangan', desc: 'Undangan pernikahan & acara, desain custom.', price: 'mulai Rp3.500/pcs' },
      { icon: 'printer', name: 'Brosur & Flyer', desc: 'Brosur promosi full color berbagai ukuran.', price: 'mulai Rp1.000/lembar' },
      { icon: 'layers', name: 'Merchandise', desc: 'Mug, kaos, gantungan kunci custom.', price: 'mulai Rp35.000/pcs' },
    ],
  },
  pricing: {
    eyebrow: 'Paket Usaha',
    title: 'Paket hemat untuk UMKM',
    subtitle: 'Bundling produk promosi dengan harga lebih murah.',
    plans: [
      { name: 'Starter', price: 'Rp99rb', unit: '/paket', desc: 'Untuk usaha baru', features: ['100 kartu nama', '50 stiker logo', '1 desain gratis', 'Selesai 1 hari'], cta: 'Pesan' },
      { name: 'Promo Bisnis', price: 'Rp349rb', unit: '/paket', desc: 'Paling laris', features: ['1 banner 2x1 m', '200 brosur full color', '200 kartu nama', 'Desain gratis semua'], featured: true, cta: 'Pesan' },
      { name: 'Grosir', price: 'Custom', desc: 'Order skala besar', features: ['Harga grosir per unit', 'Konsultasi desain', 'Prioritas pengerjaan', 'Free antar area kota'], cta: 'Minta Penawaran' },
    ],
  },
  gallery: {
    eyebrow: 'Galeri',
    title: 'Hasil cetak & produk kami',
    subtitle: 'Kualitas yang bisa Anda andalkan untuk brand Anda.',
    images: [
      { url: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=800&auto=format&fit=crop', alt: 'Mesin cetak digital bekerja' },
      { url: 'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=800&auto=format&fit=crop', alt: 'Tumpukan brosur full color' },
      { url: 'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=800&auto=format&fit=crop', alt: 'Kartu nama hasil cetak' },
      { url: 'https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?q=80&w=800&auto=format&fit=crop', alt: 'Stiker dan label custom' },
      { url: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=800&auto=format&fit=crop', alt: 'Proses cetak banner' },
      { url: 'https://images.unsplash.com/photo-1622465911368-72162f8da3e2?q=80&w=800&auto=format&fit=crop', alt: 'Merchandise mug custom' },
    ],
  },
  testimonials: {
    eyebrow: 'Testimoni',
    title: 'Kata pelanggan CetakCepat',
    subtitle: 'Partner cetak ribuan UMKM & individu.',
    items: [
      { name: 'Toko Baju Amira', role: 'Pemilik UMKM', rating: 5, quote: 'Banner dan stiker brand saya hasilnya tajam. Desainnya dibantu gratis, ramah banget timnya.' },
      { name: 'Reza Fauzan', role: 'Mahasiswa', rating: 5, quote: 'Cetak undangan acara kampus, jadinya cepat dan rapi. Harganya juga ramah kantong mahasiswa.' },
      { name: 'Kopi Senja', role: 'Pelanggan bisnis', rating: 5, quote: 'Langganan cetak menu dan kartu nama di sini. Kualitas konsisten dan selalu tepat waktu.' },
    ],
  },
  contact: {
    eyebrow: 'Pesan & Kontak',
    title: 'Kirim file, kami cetak',
    subtitle: 'Kirim kebutuhan cetak Anda lewat WhatsApp. Belum punya desain? Kami bantu buatkan gratis.',
  },
};
