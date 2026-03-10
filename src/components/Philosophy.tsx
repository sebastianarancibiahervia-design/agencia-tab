import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Philosophy = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('.parallax-bg', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        y: '15%',
        ease: 'none'
      });
      
      gsap.from('.phil-item', {
        scrollTrigger: {
          trigger: '.phil-grid',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="filosofía" ref={containerRef} className="relative py-32 overflow-hidden bg-void-deep">
      <div className="absolute inset-0 -z-10 parallax-bg origin-top">
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
          alt="Dark texture" 
          className="w-full h-[120%] object-cover opacity-10 mix-blend-color-dodge grayscale" 
        />
        <div className="absolute inset-0 bg-void-deep/90"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="inline-flex items-center gap-3 px-4 py-2 border border-ghost/10 rounded-huge bg-ghost/5 backdrop-blur-md mb-8">
          <span className="font-fira text-[10px] text-ghost/60 uppercase tracking-[0.2em]">Nuestra Misión</span>
        </div>
        
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-sora font-semibold text-ghost mb-24 tracking-tighter">
          Otras agencias venden likes.<br/>
          <span className="font-instrument italic text-neon font-normal">Nosotros construimos ventas.</span>
        </h2>
        
        <div className="phil-grid grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon/0 via-neon/20 to-neon/0 hidden md:block"></div>
          
          <div className="phil-item space-y-6">
            <h3 className="font-fira text-xs text-ghost/40 uppercase tracking-widest border-b border-white/5 pb-4">Lo que hace la mayoría</h3>
            <ul className="space-y-6 font-sora text-sm md:text-base text-ghost/50">
              <li className="flex gap-4 items-start"><span className="text-neon/30 font-fira mt-1 text-xs">01</span><span>Publicar por publicar, sin una estrategia clara para vender.</span></li>
              <li className="flex gap-4 items-start"><span className="text-neon/30 font-fira mt-1 text-xs">02</span><span>Enfocarse solo en "Me Gusta" y seguidores que no compran.</span></li>
              <li className="flex gap-4 items-start"><span className="text-neon/30 font-fira mt-1 text-xs">03</span><span>Diseños repetitivos que no hacen destacar a tu negocio.</span></li>
            </ul>
          </div>
          
          <div className="phil-item space-y-6">
            <h3 className="font-fira text-xs text-neon uppercase tracking-widest border-b border-neon/20 pb-4">El enfoque de Agencia TAB</h3>
            <ul className="space-y-6 font-sora text-sm md:text-base text-ghost">
              <li className="flex gap-4 items-start"><span className="text-neon font-fira mt-1 text-xs drop-shadow-[0_0_8px_rgba(185,255,0,0.4)]">01</span><span>Sistemas completos diseñados para atraer clientes y mantenerlos.</span></li>
              <li className="flex gap-4 items-start"><span className="text-neon font-fira mt-1 text-xs drop-shadow-[0_0_8px_rgba(185,255,0,0.4)]">02</span><span>Análisis constante de resultados para mejorar y vender más.</span></li>
              <li className="flex gap-4 items-start"><span className="text-neon font-fira mt-1 text-xs drop-shadow-[0_0_8px_rgba(185,255,0,0.4)]">03</span><span>Diseño web y contenidos de primer nivel que transmiten confianza.</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
