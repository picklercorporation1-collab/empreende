'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Samae from '@/components/sections/Samae';
import Technologies from '@/components/sections/Technologies';
import Portfolio from '@/components/sections/Portfolio';
import Testimonials from '@/components/sections/Testimonials';
import Differentials from '@/components/sections/Differentials';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f0f23] via-[#1a1a3e] to-[#0f0f23] overflow-hidden">
      {/* Animated background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* Services */}
      <Services />

      {/* SAMAE Project */}
      <Samae />

      {/* Differentials */}
      <Differentials />

      {/* Technologies */}
      <Technologies />

      {/* Portfolio */}
      <Portfolio />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
