import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ServiceFeature } from '../../data/servicesData';

gsap.registerPlugin(ScrollTrigger);

interface ServiceBentoProps {
  features: ServiceFeature[];
}

export const ServiceBento = ({ features }: ServiceBentoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.bento-item',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Large Main Feature */}
        {features[0] && (
          <div className="bento-item md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-[2rem] bg-graphite/40 border border-white/5 p-8 md:p-12 hover:bg-graphite/60 transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="h-full flex flex-col justify-end min-h-[300px]">
              <div className="space-y-4 relative z-10 w-full md:w-2/3">
                <h3 className="text-3xl font-sora text-ghost leading-tight">
                  {features[0].title}
                </h3>
                <p className="text-ghost/60 font-light leading-relaxed">
                  {features[0].description}
                </p>
              </div>
            </div>
            
            {/* Decorative Grid Background */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] group-hover:opacity-10 transition-opacity pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#F0EFF4 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
          </div>
        )}

        {/* Regular Features */}
        {features.slice(1).map((feature, i) => (
          <div key={feature.id} className="bento-item group relative rounded-[2rem] bg-graphite/40 border border-white/5 p-8 hover:bg-graphite/60 transition-colors">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="space-y-4">
              <span className="text-neon font-fira text-sm tracking-widest block">/ 0{i + 2}</span>
              <h3 className="text-xl font-sora text-ghost leading-tight">
                {feature.title}
              </h3>
              <p className="text-ghost/60 text-sm font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
        
      </div>
    </section>
  );
};
