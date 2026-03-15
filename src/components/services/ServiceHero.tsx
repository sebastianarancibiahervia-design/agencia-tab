import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ServiceHeroProps {
  title: string;
  heroCopy: string;
  heroSubcopy: string;
  heroImage: string;
}

export const ServiceHero = ({ title, heroCopy, heroSubcopy, heroImage }: ServiceHeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal text
      gsap.fromTo(textRef.current!.children,
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          stagger: 0.2, 
          ease: "power3.out",
          delay: 0.2
        }
      );

      // Reveal image with slight parallax
      gsap.fromTo(imageRef.current,
        { scale: 1.2, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 1.5, 
          ease: "power3.out",
          delay: 0.4
        }
      );

      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10">
        
        {/* Text Content */}
        <div ref={textRef} className="space-y-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon/30 bg-neon/10 text-neon text-xs font-fira uppercase tracking-widest backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse"></span>
            {title}
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-instrument text-ghost leading-[1.1] text-balance">
            {heroCopy}
          </h1>
          
          <p className="text-lg md:text-xl text-ghost/70 font-sora font-light max-w-xl leading-relaxed">
            {heroSubcopy}
          </p>
        </div>

        {/* Image / Moodboard */}
        <div className="relative h-[60vh] rounded-3xl overflow-hidden border border-white/5 bg-void-deep/50 isolate">
          <div className="absolute inset-0 bg-gradient-to-tr from-void-deep via-transparent to-transparent z-10" />
          <img 
            ref={imageRef}
            src={heroImage} 
            alt={title}
            className="w-full h-full object-cover object-center"
          />
        </div>
        
      </div>
    </section>
  );
};
