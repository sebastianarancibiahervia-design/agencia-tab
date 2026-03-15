import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import type { ServiceStat } from '../../data/servicesData';

interface DataRibbonProps {
  stats: ServiceStat[];
}

export const DataRibbon = ({ stats }: DataRibbonProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Simple loop animation for the terminal-style data ribbon
      gsap.to('.marquee-content', {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: "linear",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full py-6 border-y border-white/5 bg-graphite/30 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-void-deep to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-void-deep to-transparent z-10 pointer-events-none" />
      
      <div className="flex w-max marquee-content">
        {[...stats, ...stats, ...stats, ...stats].map((stat, i) => (
          <div key={i} className="flex items-center gap-12 px-12 group">
            <div className="flex flex-col">
              <span className="text-xs font-fira text-ghost/40 uppercase tracking-widest">{stat.label}</span>
              <span className="text-xl md:text-2xl font-fira text-neon font-medium">{stat.value}</span>
            </div>
            
            {/* Divider Dot */}
            <div className="w-1.5 h-1.5 bg-white/20" />
          </div>
        ))}
      </div>
    </div>
  );
};
