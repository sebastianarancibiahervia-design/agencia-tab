import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero = ({ onOpenContact }: HeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        y: 100,
        opacity: 0,
        duration: 1.8,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden flex items-end pb-24 md:pb-32 px-6 md:px-12 lg:px-24">
      {/* Background image & gradient overlay */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2574&auto=format&fit=crop" 
          alt="Bioluminescence abstract" 
          className="w-full h-full object-cover opacity-40 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void-deep via-void-deep/80 to-transparent"></div>
        <div className="absolute inset-0 bg-void-deep/50 mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full z-10 flex flex-col gap-8">
        <div className="hero-text inline-flex items-center gap-3 px-4 py-2 border border-neon/20 rounded-huge bg-neon/5 backdrop-blur-md w-fit">
          <div className="w-2 h-2 rounded-full bg-neon animate-pulse shadow-[0_0_10px_rgba(185,255,0,0.8)]"></div>
          <span className="font-fira text-[10px] text-neon uppercase tracking-[0.2em]">Agencia Digital</span>
        </div>
        
        <h1 className="hero-text leading-[0.85] tracking-tighter">
          <span className="block text-[3.5rem] md:text-[6rem] lg:text-[8rem] xl:text-[9rem] font-sora font-black text-ghost tracking-tighter">
            La tecla que
          </span>
          <span className="block text-[3.5rem] md:text-[6rem] lg:text-[8rem] xl:text-[9rem] font-instrument italic font-normal text-neon mt-2 lg:ml-24">
            impulsa tu marca.
          </span>
        </h1>
        
        <div className="hero-text flex flex-col md:flex-row gap-6 md:gap-12 md:items-center mt-8">
          <p className="font-fira text-ghost/60 max-w-md text-xs md:text-sm leading-relaxed tracking-wide">
            Estrategia digital, identidad visual y contenido de alto impacto — todo bajo un mismo techo. Convertimos tu marca en una presencia que se siente, se recuerda y se prefiere.
          </p>
          <button 
            onClick={onOpenContact}
            className="group relative overflow-hidden bg-neon text-void-deep px-8 py-4 rounded-huge font-sora font-semibold text-xs tracking-wider uppercase transition-transform hover:scale-[1.03] active:scale-95 shadow-[0_0_20px_rgba(185,255,0,0.3)] mt-4 md:mt-0"
          >
            <span className="relative z-10 transition-colors duration-500">
              {window.wpData?.hero_cta || 'Iniciar Proyecto'}
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0 rounded-huge"></div>
          </button>
        </div>
      </div>
    </section>
  );
};
