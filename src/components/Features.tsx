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
const Cpu = ({ className = '' }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" x2="9" y1="1" y2="4"/><line x1="15" x2="15" y1="1" y2="4"/><line x1="9" x2="9" y1="20" y2="23"/><line x1="15" x2="15" y1="20" y2="23"/><line x1="20" x2="23" y1="9" y2="9"/><line x1="20" x2="23" y1="15" y2="15"/><line x1="1" x2="4" y1="9" y2="9"/><line x1="1" x2="4" y1="15" y2="15"/></svg>
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
        y: 60,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out'
      });
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="servicios" ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
      <div className="mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-sora font-semibold text-ghost mb-6 tracking-tighter">
          Ecosistemas para <span className="font-instrument italic text-neon font-normal pr-4">Vender Más</span>
        </h2>
        <p className="font-fira text-ghost/60 text-xs md:text-sm max-w-2xl leading-relaxed">
          Diseñamos soluciones digitales donde la estética y el rendimiento se fusionan para maximizar la conversión y el valor de tu marca.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Feature 1: Redes Sociales */}
        <div className="feature-card group relative bg-graphite/30 border border-white/5 rounded-huge p-6 overflow-hidden hover:bg-graphite/50 transition-all duration-500 min-h-[440px] flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-neon/15 transition-colors duration-700"></div>
          
          <div>
            <div className="relative z-10 w-10 h-10 rounded-full border border-neon/30 flex items-center justify-center mb-6 bg-void-deep">
              <Share2 className="w-4 h-4 text-neon" />
            </div>
            
            <div className="relative z-10 w-full h-48 rounded-2xl overflow-hidden border border-white/10 bg-void-deep mb-6">
              <img 
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop" 
                alt="Social Media Management" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out brightness-110"
              />
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="font-sora text-lg font-semibold text-ghost mb-2">Manejo de Redes</h3>
            <p className="font-fira text-[11px] text-ghost/50 leading-relaxed">
              Estrategias para conectar con tu público y hacer que tu marca sea inolvidable en todas las plataformas.
            </p>
          </div>
        </div>

        {/* Feature 2: Audiovisual */}
        <div className="feature-card group relative bg-graphite/30 border border-white/5 rounded-huge p-6 overflow-hidden hover:bg-graphite/50 transition-all duration-500 min-h-[440px] flex flex-col justify-between md:translate-y-6 lg:translate-y-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-neon/15 transition-colors duration-700"></div>
          
          <div>
            <div className="relative z-10 w-10 h-10 rounded-full border border-neon/30 flex items-center justify-center mb-6 bg-void-deep">
              <Video className="w-4 h-4 text-neon" />
            </div>
            
            <div className="relative z-10 w-full h-48 rounded-2xl overflow-hidden border border-white/10 bg-void-deep mb-6">
              <img 
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop" 
                alt="Audiovisual Production" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out brightness-110"
              />
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="font-sora text-lg font-semibold text-ghost mb-2">Producción Audiovisual</h3>
            <p className="font-fira text-[11px] text-ghost/50 leading-relaxed">
              Videos y fotografías de alta calidad que transmiten confianza profesional y muestran lo mejor de tu negocio.
            </p>
          </div>
        </div>

        {/* Feature 3: Webs */}
        <div className="feature-card group relative bg-graphite/30 border border-white/5 rounded-huge p-6 overflow-hidden hover:bg-graphite/50 transition-all duration-500 min-h-[440px] flex flex-col justify-between md:translate-y-12 lg:translate-y-24">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-neon/15 transition-colors duration-700"></div>
          
          <div>
            <div className="relative z-10 w-10 h-10 rounded-full border border-neon/30 flex items-center justify-center mb-6 bg-void-deep">
              <Code2 className="w-4 h-4 text-neon" />
            </div>
            
            <div className="relative z-10 w-full h-48 rounded-2xl overflow-hidden border border-white/10 bg-void-deep mb-6">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop" 
                alt="Web Development" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out brightness-110"
              />
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="font-sora text-lg font-semibold text-ghost mb-2">Creación Web</h3>
            <p className="font-fira text-[11px] text-ghost/50 leading-relaxed">
              Páginas web rápidas, modernas y diseñadas específicamente para convertir a tus visitantes en clientes fieles.
            </p>
          </div>
        </div>

        {/* Feature 4: Sistemas de Gestión */}
        <div className="feature-card group relative bg-graphite/30 border border-white/5 rounded-huge p-6 overflow-hidden hover:bg-graphite/50 transition-all duration-500 min-h-[440px] flex flex-col justify-between md:translate-y-18 lg:translate-y-36">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-neon/15 transition-colors duration-700"></div>
          
          <div>
            <div className="relative z-10 w-10 h-10 rounded-full border border-neon/30 flex items-center justify-center mb-6 bg-void-deep">
              <Cpu className="w-4 h-4 text-neon" />
            </div>
            
            <div className="relative z-10 w-full h-48 rounded-2xl overflow-hidden border border-white/10 bg-void-deep mb-6">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop" 
                alt="Management Systems" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out brightness-110"
              />
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="font-sora text-lg font-semibold text-ghost mb-2">Sistemas de Gestión</h3>
            <p className="font-fira text-[11px] text-ghost/50 leading-relaxed">
              Desarrollo de plataformas personalizadas para optimizar la gestión y los flujos de trabajo de tu empresa.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
