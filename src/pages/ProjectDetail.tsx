import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioProjects } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const X = ({ size = 24, className = '' }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

export const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = portfolioProjects.find((p) => p.id === projectId);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  useLayoutEffect(() => {
    if (!project) return;
    const ctx = gsap.context(() => {
      // Hero fade in
      gsap.fromTo(
        '.hero-content > *',
        { y: 70, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.1 }
      );

      // Sections reveal on scroll
      gsap.utils.toArray<HTMLElement>('.reveal-section').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 82%' },
          }
        );
      });

      // Metric counter cards stagger
      gsap.fromTo(
        '.metric-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.metrics-grid', start: 'top 80%' },
        }
      );

      // Gallery images stagger
      gsap.fromTo(
        '.gallery-img',
        { scale: 0.93, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.gallery-grid', start: 'top 80%' },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [project]);

  // Handle Lightbox animation
  useEffect(() => {
    if (activeImage) {
      gsap.to(lightboxRef.current, { autoAlpha: 1, duration: 0.4, ease: 'power2.out' });
      document.body.style.overflow = 'hidden';
    } else {
      gsap.to(lightboxRef.current, { autoAlpha: 0, duration: 0.3, ease: 'power2.in' });
      document.body.style.overflow = '';
    }
  }, [activeImage]);

  if (!project) return <Navigate to="/portafolio" replace />;

  return (
    <div ref={containerRef} className="min-h-screen bg-void-deep">

      {/* ──────────────── HERO ──────────────── */}
      <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden">
        {/* Background cover image */}
        <div className="absolute inset-0 cursor-zoom-in group" onClick={() => setActiveImage(project.coverImage)}>
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void-deep via-void-deep/70 to-void-deep/20" />
          
          {/* Zoom hint */}
          <div className="absolute bottom-10 right-10 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-void-deep/40 backdrop-blur-md p-3 rounded-full border border-white/10 hidden md:block">
            <svg className="w-5 h-5 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 pt-40 hero-content pointer-events-none">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 pointer-events-auto">
            <Link
              to="/portafolio"
              className="text-ghost/50 font-fira text-xs uppercase tracking-widest hover:text-neon transition-colors"
            >
              Portafolio
            </Link>
            <span className="text-ghost/20 font-fira text-xs">/</span>
            <span className="text-ghost/50 font-fira text-xs uppercase tracking-widest">
              {project.categoryLabel}
            </span>
          </div>

          {/* Category badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon/30 bg-neon/10 text-neon text-xs font-fira uppercase tracking-widest mb-6 pointer-events-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
            {project.categoryLabel}
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-instrument text-ghost leading-[1.05] mb-6 max-w-4xl pointer-events-auto">
            {project.title}
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap gap-8 items-center pointer-events-auto">
            <div>
              <p className="text-ghost/40 font-fira text-[10px] uppercase tracking-widest mb-1">Cliente</p>
              <p className="text-ghost font-sora font-medium">{project.client}</p>
            </div>
            <div>
              <p className="text-ghost/40 font-fira text-[10px] uppercase tracking-widest mb-1">Año</p>
              <p className="text-ghost font-sora font-medium">{project.year}</p>
            </div>
            {project.duration && (
              <div>
                <p className="text-ghost/40 font-fira text-[10px] uppercase tracking-widest mb-1">Duración</p>
                <p className="text-ghost font-sora font-medium">{project.duration}</p>
              </div>
            )}
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-ghost/60 text-[10px] font-fira uppercase tracking-wider border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Ver resultado CTA */}
          {project.resultUrl && (
            <div className="mt-8 pointer-events-auto">
              <a
                href={project.resultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-neon/40 text-neon text-xs font-fira uppercase tracking-widest hover:bg-neon hover:text-void-deep transition-all duration-300"
              >
                Ver resultado
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ──────────────── METRICS ──────────────── */}
      {project.metrics && project.metrics.length > 0 && (
        <section className="py-20 border-b border-white/5 metrics-grid">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="metric-card rounded-[2rem] bg-graphite/40 border border-white/5 p-8 text-center hover:border-neon/20 hover:bg-graphite/60 transition-all group"
                >
                  <p className="text-4xl md:text-5xl font-fira text-neon font-medium mb-2 group-hover:drop-shadow-[0_0_12px_rgba(185,255,0,0.4)] transition-all">
                    {m.value}
                  </p>
                  <p className="text-ghost/50 font-sora text-sm uppercase tracking-widest">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ──────────────── CHALLENGE & SOLUTION ──────────────── */}
      {(project.challenge || project.solution) && (
        <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

            {project.challenge && (
              <div className="reveal-section space-y-4">
                <span className="font-fira text-neon text-xs uppercase tracking-[0.25em]">/ El Desafío</span>
                <p className="text-2xl md:text-3xl font-instrument text-ghost leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            )}

            {project.solution && (
              <div className="reveal-section space-y-4">
                <span className="font-fira text-ghost/40 text-xs uppercase tracking-[0.25em]">/ La Solución</span>
                <p className="text-ghost/70 font-sora text-lg leading-relaxed font-light">
                  {project.solution}
                </p>
              </div>
            )}

          </div>
        </section>
      )}

      {/* ──────────────── GALLERY ──────────────── */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-12 pb-24 max-w-7xl mx-auto px-6 md:px-12">
          <div className="gallery-grid grid md:grid-cols-3 gap-5">
            {project.gallery.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveImage(img.url)}
                className={`gallery-img relative rounded-[2rem] overflow-hidden group cursor-zoom-in ${
                  i === 0 ? 'md:col-span-2 row-span-1' : ''
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden bg-graphite/40">
                  <img
                    src={img.url}
                    alt={img.caption || `Imagen ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void-deep/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-void-deep/50 backdrop-blur-md border border-white/10 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
                      <svg className="w-6 h-6 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-void-deep/60 backdrop-blur-sm border-t border-white/5">
                    <p className="text-ghost/80 font-fira text-xs uppercase tracking-widest">
                      {img.caption}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ──────────────── LIGHTBOX ──────────────── */}
      <div
        ref={lightboxRef}
        onClick={() => setActiveImage(null)}
        className="fixed inset-0 z-[200] bg-void-deep/95 backdrop-blur-3xl invisible flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
      >
        <button
          onClick={(e) => { e.stopPropagation(); setActiveImage(null); }}
          className="absolute top-8 right-8 p-3 rounded-full bg-white/5 text-ghost/60 hover:text-neon hover:bg-white/10 transition-colors z-[210]"
        >
          <X size={24} />
        </button>

        <div className="relative w-full h-full flex items-center justify-center">
          {activeImage && (
            <img
              src={activeImage}
              alt="Preview"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      </div>

      {/* ──────────────── TESTIMONIAL ──────────────── */}
      {project.testimonial && (
        <section className="py-24 border-t border-b border-white/5">
          <div className="reveal-section max-w-4xl mx-auto px-6 md:px-12 text-center">
            <p className="text-3xl md:text-5xl font-instrument text-ghost italic leading-tight mb-10">
              "{project.testimonial.quote}"
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-10 h-[1px] bg-neon/40" />
              <div>
                <p className="text-ghost font-sora font-medium text-sm">{project.testimonial.author}</p>
                {project.testimonial.role && (
                  <p className="text-ghost/40 font-fira text-xs uppercase tracking-widest mt-1">
                    {project.testimonial.role}
                  </p>
                )}
              </div>
              <div className="w-10 h-[1px] bg-neon/40" />
            </div>
          </div>
        </section>
      )}

      {/* ──────────────── FOOTER CTA ──────────────── */}
      <section className="py-32 text-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-ghost/30 font-fira text-xs uppercase tracking-[0.3em] mb-6">
            ¿Tienes un proyecto similar?
          </p>
          <h2 className="text-5xl md:text-6xl font-instrument text-ghost mb-12">
            Trabajemos juntos.
          </h2>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-ghost text-void-deep rounded-full font-sora font-medium text-sm overflow-hidden transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Iniciar Proyecto
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-neon translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
            </button>

            <Link
              to="/portafolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 text-ghost/60 font-sora text-sm hover:border-neon/40 hover:text-ghost transition-all"
            >
              ← Ver más proyectos
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

