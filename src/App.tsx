import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFab } from './components/WhatsAppFab';

const App: React.FC = () => (
  <div className="min-h-screen bg-white text-dark overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Gallery />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
    <WhatsAppFab />
  </div>
);

export default App;
