import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { servicesData } from '../data/servicesData';

gsap.registerPlugin(ScrollTrigger);

// Icon map for each service
const serviceIcons: Record<string, string> = {
  'social-media': '◎',
  'branding': '◈',
  'diseno-web': '◉',
  'contenido-audiovisual': '◐',
  'eventos': '◑',
  'gestion-digital': '◷',
};

export const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-hero-text > *',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.1 }
      );

      gsap.utils.toArray<HTMLElement>('.service-card').forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: i * 0.05,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = Object.values(servicesData);

  return (
    <div ref={containerRef} className="min-h-screen bg-void-deep pt-40 pb-32">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="service-hero-text max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon/30 bg-neon/10 text-neon text-xs font-fira uppercase tracking-widest mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
          Lo que hacemos
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <h1 className="text-6xl md:text-8xl font-instrument text-ghost leading-tight">
            Todo lo que tu marca necesita,{' '}
            <em className="text-neon not-italic">en un solo lugar.</em>
          </h1>
          <p className="text-ghost/60 font-sora text-lg leading-relaxed font-light max-w-lg">
            Desde la identidad visual hasta la gestión de redes, la producción audiovisual y tu sitio web — construimos ecosistemas digitales completos para marcas que quieren dominar su mercado.
          </p>
        </div>
      </div>

      {/* ── Services Grid ────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Featured first service — full width */}
        {services[0] && (
          <Link
            to={`/servicios/${services[0].id}`}
            className="service-card group block mb-6 rounded-[2rem] overflow-hidden border border-white/5 bg-graphite/30 hover:bg-graphite/50 transition-all duration-500 hover:border-neon/20"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Text */}
              <div className="p-10 md:p-14 flex flex-col justify-between min-h-[300px]">
                <div className="flex items-center justify-between">
                  <span className="font-fira text-neon text-3xl">{serviceIcons[services[0].id] ?? '◎'}</span>
                  <span className="text-[10px] font-fira text-ghost/30 uppercase tracking-widest">01</span>
                </div>
                <div className="space-y-4 mt-auto">
                  <span className="inline-block px-2 py-1 rounded-full bg-neon/10 text-neon text-[10px] font-fira uppercase tracking-widest">
                    {services[0].title}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-instrument text-ghost leading-tight group-hover:text-neon transition-colors duration-300">
                    {services[0].heroCopy.replace(/\n/g, ' ')}
                  </h2>
                  <p className="text-ghost/60 font-sora font-light text-sm leading-relaxed max-w-sm">
                    {services[0].heroSubcopy}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {services[0].features.slice(0, 3).map(f => (
                      <span key={f.id} className="px-2 py-1 rounded-md bg-white/5 text-ghost/50 text-[10px] font-fira uppercase tracking-wider">
                        {f.title}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Image */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-graphite/80 to-transparent z-10 md:block hidden" />
                <img src={services[0].heroImage} alt={services[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
            </div>
          </Link>
        )}

        {/* Remaining 4 services — 2×2 grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.slice(1).map((service, i) => (
            <Link
              key={service.id}
              to={`/servicios/${service.id}`}
              className="service-card group relative rounded-[2rem] overflow-hidden border border-white/5 bg-graphite/30 hover:bg-graphite/50 transition-all duration-500 hover:border-neon/20"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-neon to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Image strip */}
              <div className="relative h-52 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 to-transparent z-10" />
                <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                {/* number */}
                <span className="absolute top-4 right-5 z-20 text-[10px] font-fira text-ghost/30 uppercase tracking-widest">
                  0{i + 2}
                </span>
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-block px-2 py-1 rounded-full bg-neon/10 text-neon text-[10px] font-fira uppercase tracking-widest">
                    {service.title}
                  </span>
                  <span className="font-fira text-ghost/40 text-xl group-hover:text-neon transition-colors">{serviceIcons[service.id] ?? '◎'}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-instrument text-ghost leading-tight group-hover:text-neon transition-colors duration-300">
                  {service.heroCopy.replace(/\n/g, ' ')}
                </h2>
                <p className="text-ghost/60 font-sora font-light text-sm leading-relaxed line-clamp-2">
                  {service.heroSubcopy}
                </p>

                {/* Stats preview */}
                <div className="flex gap-4 pt-2 border-t border-white/5">
                  {service.stats.slice(0, 2).map((s) => (
                    <div key={s.label} className="flex flex-col">
                      <span className="font-fira text-neon text-sm font-medium">{s.value}</span>
                      <span className="font-fira text-ghost/30 text-[9px] uppercase tracking-widest">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Bottom CTA ───────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-28 text-center border-t border-white/5 pt-24">
        <p className="text-ghost/40 font-fira text-xs uppercase tracking-[0.3em] mb-4">
          ¿No sabes por dónde empezar?
        </p>
        <h2 className="text-5xl md:text-6xl font-instrument text-ghost mb-10">
          Cuéntanos tu proyecto.
        </h2>
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
          className="group relative inline-flex items-center gap-2 px-8 py-4 bg-ghost text-void-deep rounded-full font-sora font-medium text-sm overflow-hidden transition-all hover:scale-[1.03]"
        >
          <span className="relative z-10 flex items-center gap-2">
            Iniciar Proyecto
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
          <div className="absolute inset-0 bg-neon translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      </div>

    </div>
  );
};
