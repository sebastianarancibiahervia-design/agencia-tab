import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Share2 = ({ className = '' }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
);
const Video = ({ className = '' }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>
);
const Code2 = ({ className = '' }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
);
const MousePointer2 = ({ className = '' }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 4l7.07 17 2.51-7.39L21 11.07z"/></svg>
);

gsap.registerPlugin(ScrollTrigger);

export const Features = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Intro animation for features
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out'
      });
      
      // Scheduler Cursor Animation
      gsap.to('.animated-cursor', {
        x: 35,
        y: 15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="servicios" ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
      <div className="mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-sora font-semibold text-ghost mb-6 tracking-tighter">
          Sistemas para <span className="font-instrument italic text-neon font-normal pr-4">Vender Más</span>
        </h2>
        <p className="font-fira text-ghost/60 text-xs md:text-sm max-w-xl leading-relaxed">
          Creamos sistemas diseñados para captar la atención y generar ventas. 
          No solo hacemos publicaciones bonitas; creamos contenido que da resultados reales.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Feature 1: Redes Sociales (Card Shuffler) */}
        <div className="feature-card group relative bg-graphite/40 border border-white/5 rounded-huge p-8 overflow-hidden hover:bg-graphite/80 transition-colors duration-500 min-h-[420px] flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-neon/20 transition-colors duration-700"></div>
          
          <div className="relative z-10 w-12 h-12 rounded-full border border-neon/30 flex items-center justify-center mb-8 bg-void-deep">
            <Share2 className="w-5 h-5 text-neon" />
          </div>
          
          {/* Micro-UI: Shuffler */}
          <div className="relative z-10 flex-1 w-full flex items-center justify-center pointer-events-none">
             <div className="w-full h-32 relative flex items-center justify-center">
               <div className="absolute inset-0 bg-void-deep border border-white/10 rounded-2xl rotate-[-5deg] group-hover:rotate-[-12deg] transition-transform duration-700 shadow-xl"></div>
               <div className="absolute inset-x-2 bottom-2 top-0 bg-void-deep border border-white/10 rounded-2xl rotate-[5deg] group-hover:rotate-[15deg] transition-transform duration-700 shadow-xl"></div>
               <div className="absolute inset-x-4 bottom-4 top-0 bg-void-deep border border-neon/30 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500 bg-gradient-to-br from-void-deep to-neon/10 backdrop-blur-md">
                 <span className="font-fira text-[10px] text-neon tracking-widest uppercase">Sequence_01.exe</span>
               </div>
             </div>
          </div>

          <div className="relative z-10 mt-12">
            <h3 className="font-sora text-xl font-semibold text-ghost mb-3">Manejo de Redes</h3>
            <p className="font-fira text-xs text-ghost/50 leading-relaxed">
              Estrategias inteligentes para destacar en redes, conectar con tu público y hacer que tu marca sea inolvidable.
            </p>
          </div>
        </div>

        {/* Feature 2: Audiovisual (Telemetry Typewriter) */}
        <div className="feature-card group relative bg-graphite/40 border border-white/5 rounded-huge p-8 overflow-hidden hover:bg-graphite/80 transition-colors duration-500 min-h-[420px] flex flex-col justify-between md:translate-y-12">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 group-hover:bg-neon/20 transition-colors duration-700"></div>
          
          <div className="relative z-10 w-12 h-12 rounded-full border border-neon/30 flex items-center justify-center mb-8 bg-void-deep">
            <Video className="w-5 h-5 text-neon" />
          </div>
          
          {/* Micro-UI: Telemetry */}
          <div className="relative z-10 flex-1 w-full bg-void-deep border border-white/5 rounded-2xl p-5 overflow-hidden flex flex-col font-fira text-[9px] text-ghost/40 pointer-events-none">
             <div className="flex justify-between border-b border-white/5 pb-3 mb-3">
               <span className="text-neon flex items-center gap-2"><div className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse"></div>REC</span>
               <span className="tracking-widest">00:14:02:23</span>
             </div>
             <div className="flex-1 flex flex-col gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
               <div className="flex justify-between"><span className="text-ghost/30">ISO</span><span className="text-ghost/80">800</span></div>
               <div className="flex justify-between"><span className="text-ghost/30">SHUTTER</span><span className="text-ghost/80">1/50</span></div>
               <div className="flex justify-between"><span className="text-ghost/30">IRIS</span><span className="text-ghost/80">f/2.8</span></div>
               <div className="flex justify-between"><span className="text-ghost/30">LUT</span><span className="text-neon">Vapor_73</span></div>
             </div>
          </div>

          <div className="relative z-10 mt-12">
            <h3 className="font-sora text-xl font-semibold text-ghost mb-3">Producción Audiovisual</h3>
            <p className="font-fira text-xs text-ghost/50 leading-relaxed">
              Videos y fotografías de alta calidad que transmiten confianza profesional y muestran lo mejor de tu negocio.
            </p>
          </div>
        </div>

        {/* Feature 3: Webs (Protocol Scheduler) */}
        <div className="feature-card group relative bg-graphite/40 border border-white/5 rounded-huge p-8 overflow-hidden hover:bg-graphite/80 transition-colors duration-500 min-h-[420px] flex flex-col justify-between md:translate-y-24">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-neon/20 transition-colors duration-700"></div>
          
          <div className="relative z-10 w-12 h-12 rounded-full border border-neon/30 flex items-center justify-center mb-8 bg-void-deep">
            <Code2 className="w-5 h-5 text-neon" />
          </div>
          
          {/* Micro-UI: Protocol */}
          <div className="relative z-10 flex-1 w-full bg-void-deep border border-white/5 rounded-2xl p-5 overflow-hidden pointer-events-none">
             <div className="flex gap-1.5 mb-5">
               <div className="w-2 h-2 rounded-full bg-white/10"></div>
               <div className="w-2 h-2 rounded-full bg-white/10"></div>
               <div className="w-2 h-2 rounded-full bg-white/10"></div>
             </div>
             <div className="space-y-3">
               <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                 <div className="h-full bg-neon w-[85%]"></div>
               </div>
               <div className="h-1.5 w-3/4 bg-white/5 rounded-full overflow-hidden">
                 <div className="h-full bg-ghost/40 w-[40%] group-hover:w-[90%] transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
               </div>
               <div className="h-1.5 w-1/2 bg-white/5 rounded-full"></div>
             </div>
             <MousePointer2 className="animated-cursor absolute text-neon w-5 h-5 bottom-8 right-8 drop-shadow-[0_0_8px_rgba(185,255,0,0.6)]" />
          </div>

          <div className="relative z-10 mt-12">
            <h3 className="font-sora text-xl font-semibold text-ghost mb-3">Creación Web</h3>
            <p className="font-fira text-xs text-ghost/50 leading-relaxed">
              Páginas web rápidas, modernas y diseñadas específicamente para convertir a tus visitantes en clientes fieles.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
