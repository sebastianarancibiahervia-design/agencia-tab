import { useLayoutEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Philosophy } from './components/Philosophy';
import { Protocol } from './components/Protocol';
import { Footer } from './components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Future animations will go here
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="relative min-h-screen selection:bg-neon/30 selection:text-ghost">
      {/* Global CSS noise filter */}
      <div className="noise-overlay" />
      
      <Header />
      
      <main>
        <Hero />
        <Features />
        <Philosophy />
        <Protocol />
      </main>

      <Footer />
    </div>
  );
}

export default App;
