import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProtocolProps {
  onOpenContact: () => void;
}

export const Protocol = ({ onOpenContact }: ProtocolProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');
      
      cards.forEach((card: any, i) => {
        if (i !== cards.length - 1) {
          gsap.to(card, {
            scale: 0.92 - (0.02 * (cards.length - i)),
            opacity: 0,
            scrollTrigger: {
              trigger: card,
              start: 'top 5%',
              endTrigger: '.protocol-wrapper',
              end: 'bottom bottom',
              scrub: true,
              pin: true,
              pinSpacing: false
            }
          });
        }
      });
      
      // Animations for SVGs
      gsap.to('.laser-beam', {
        x: '400%',
        duration: 3,
        repeat: -1,
        ease: 'none'
      });
      
      gsap.to('.waveform', {
        scaleY: 0.1,
        yoyo: true,
        repeat: -1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.inOut',
        transformOrigin: "center center"
      });
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="protocolo" ref={containerRef} className="protocol-wrapper relative py-32 bg-void-deep">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-24 lg:mb-32 text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-sora font-semibold text-ghost mb-6 tracking-tighter">
          Cómo Trabajamos <span className="font-instrument italic text-neon font-normal">Contigo</span>
        </h2>
        <p className="font-fira text-ghost/50 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
          Un proceso claro y efectivo. Cada etapa está pensada para hacer crecer tu marca y generar confianza paso a paso.
        </p>
      </div>

      <div className="flex flex-col px-6 md:px-12 lg:px-24 max-w-6xl mx-auto relative pb-32">
        {/* Card 1 */}
        <div className="protocol-card w-full h-[70vh] md:h-[80vh] bg-graphite/80 backdrop-blur-md rounded-huge border border-white/5 p-8 md:p-16 flex flex-col justify-between overflow-hidden relative shadow-2xl z-10 mb-[40vh]">
          <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon/50 to-transparent opacity-50"></div>
          
          <div className="relative z-10 flex justify-between items-start">
             <span className="font-fira text-6xl md:text-8xl lg:text-9xl text-void-deep font-bold drop-shadow-[0_2px_2px_rgba(255,255,255,0.05)]">01</span>
             <h3 className="font-sora text-3xl md:text-5xl lg:text-7xl font-semibold text-ghost text-right leading-[0.9] max-w-md tracking-tighter">Análisis <br/><span className="font-instrument italic font-normal text-neon">Inicial</span></h3>
          </div>
          
          {/* SVG Animation */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none -z-0">
            <svg width="400" height="200" viewBox="0 0 400 200" className="w-[80%] max-w-[600px]">
              {Array.from({length: 20}).map((_, i) => (
                <rect key={i} x={i * 20} y="100" width="8" height={60 + Math.random() * 80} fill="#B9FF00" className="waveform" rx="4" transform={`translate(0, -${(60 + Math.random() * 80)/2})`} />
              ))}
            </svg>
          </div>

          <div className="relative z-10 max-w-xl mt-auto">
            <p className="font-fira text-xs md:text-sm text-ghost/70 leading-relaxed uppercase tracking-widest mb-4 opacity-50">Estrategia Personalizada</p>
            <p className="font-sora text-base md:text-lg text-ghost/80 leading-relaxed">
              Estudiamos a tu público ideal y el estado de tu negocio para crear un plan de acción a medida. Sabemos a quién hablarle.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="protocol-card w-full h-[70vh] md:h-[80vh] bg-void-deep backdrop-blur-md rounded-huge border border-neon/20 p-8 md:p-16 flex flex-col justify-between overflow-hidden relative shadow-[0_-20px_50px_rgba(0,0,0,0.5)] z-20 mb-[40vh]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 flex justify-between items-start">
             <span className="font-fira text-6xl md:text-8xl lg:text-9xl text-ghost/5 font-bold drop-shadow-[0_0_15px_rgba(185,255,0,0.2)]">02</span>
             <h3 className="font-sora text-3xl md:text-5xl lg:text-7xl font-semibold text-ghost text-right leading-[0.9] max-w-md tracking-tighter">Creación de <br/><span className="font-instrument italic text-ghost/60 font-normal">Contenido</span></h3>
          </div>

          {/* SVG Animation */}
          <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
            <svg width="500" height="100" viewBox="0 0 500 100" className="w-[90%] max-w-[700px]">
              <line x1="0" y1="50" x2="500" y2="50" stroke="#F0EFF4" strokeWidth="1" strokeOpacity="0.2" />
              <circle cx="0" cy="50" r="3" fill="#B9FF00" className="laser-beam shadow-[0_0_20px_#B9FF00]" />
              <circle cx="80" cy="50" r="2" fill="#B9FF00" className="laser-beam shadow-[0_0_20px_#B9FF00]" />
              <circle cx="-100" cy="50" r="4" fill="#B9FF00" className="laser-beam shadow-[0_0_20px_#B9FF00]" />
            </svg>
          </div>

          <div className="relative z-10 max-w-xl mt-auto">
             <p className="font-fira text-xs md:text-sm text-ghost/50 leading-relaxed uppercase tracking-widest mb-4">Fotos y Videos</p>
            <p className="font-sora text-base md:text-lg text-ghost/80 leading-relaxed">
              Producimos videos y fotos profesionales que captan la atención instantáneamente y elevan el valor de tus productos o servicios.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="protocol-card w-full h-[70vh] md:h-[80vh] bg-ghost text-void-deep rounded-huge border border-white/5 p-8 md:p-16 flex flex-col justify-between overflow-hidden relative shadow-[0_-20px_50px_rgba(0,0,0,0.5)] z-30">
          
          <div className="relative z-10 flex justify-between items-start">
             <span className="font-fira text-6xl md:text-8xl lg:text-9xl text-void-deep/10 font-bold">03</span>
             <h3 className="font-sora text-3xl md:text-5xl lg:text-7xl font-semibold text-void-deep text-right leading-[0.9] max-w-md tracking-tighter">Crecimiento <br/><span className="text-neon">Digital</span></h3>
          </div>

          <div className="relative z-10 max-w-xl mt-auto">
            <p className="font-fira text-xs md:text-sm text-void-deep/50 leading-relaxed uppercase tracking-widest mb-4 font-semibold">Web y Lanzamiento</p>
            <p className="font-sora text-base md:text-lg text-void-deep/80 leading-relaxed font-medium">
              Lanzamos tu página web moderna y rápida. Activamos estrategias digitales para expandir tu negocio y conseguir más clientes todos los días.
            </p>
            <button 
              onClick={onOpenContact}
              className="mt-8 group relative overflow-hidden bg-void-deep text-ghost px-10 py-4 rounded-huge font-sora font-semibold text-xs tracking-wider uppercase transition-transform hover:scale-[1.03] active:scale-95"
            >
              <span className="relative z-10 transition-colors duration-500">Comenzar Ahora</span>
              <div className="absolute inset-0 bg-neon translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0 rounded-huge"></div>
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};
