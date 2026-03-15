import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ServiceStep } from '../../data/servicesData';

gsap.registerPlugin(ScrollTrigger);

interface ServiceProcessProps {
  title: string;
  process: ServiceStep[];
}

export const ServiceProcess = ({ title, process }: ServiceProcessProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal the title
      gsap.fromTo('.process-title',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );

      // Reveal each step sequentially
      gsap.fromTo('.process-step',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.process-list',
            start: "top 80%",
          }
        }
      );
      
      // Animate the vertical timeline line connecting steps
      gsap.fromTo('.timeline-line',
         { scaleY: 0 },
         {
           scaleY: 1,
           transformOrigin: "top",
           ease: "none",
           scrollTrigger: {
             trigger: '.process-list',
             start: "top 60%",
             end: "bottom 80%",
             scrub: true
           }
         }
      );
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Title Section */}
        <div className="lg:col-span-5 process-title">
          <h2 className="text-4xl md:text-5xl font-instrument text-ghost leading-tight sticky top-32">
            {title}
          </h2>
        </div>

        {/* Process Steps */}
        <div className="lg:col-span-7 relative process-list pl-8 md:pl-12">
          {/* Vertical Connecting Line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10">
             <div className="timeline-line absolute top-0 left-0 w-full h-full bg-neon origin-top" />
          </div>
          
          <div className="space-y-16">
            {process.map((step) => (
              <div key={step.number} className="process-step relative group">
                {/* Connector Dot */}
                <div className="absolute -left-[37px] md:-left-[53px] top-1 w-3 h-3 rounded-full bg-void-deep border border-neon/50 group-hover:bg-neon group-hover:scale-150 group-hover:shadow-[0_0_10px_#B9FF00] transition-all duration-300" />
                
                <span className="font-fira text-neon text-2xl md:text-3xl block mb-2">{step.number}</span>
                <h3 className="text-2xl font-sora text-ghost mb-4 group-hover:text-neon transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-ghost/60 font-light leading-relaxed max-w-md">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};
