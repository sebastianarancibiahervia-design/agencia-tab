import { useState, useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  portfolioProjects,
  categoryLabels,
  type ServiceCategory,
} from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES: ServiceCategory[] = [
  'todos',
  'social-media',
  'branding',
  'diseno-web',
  'contenido-audiovisual',
  'eventos',
  'crm',
];

export const Portfolio = () => {
  const [active, setActive] = useState<ServiceCategory>('todos');
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered =
    active === 'todos'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.categories.includes(active));

  // Animate cards when filter changes
  useLayoutEffect(() => {
    if (!gridRef.current) return;
    gsap.fromTo(
      gridRef.current.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.07, ease: 'power3.out' }
    );
  }, [active]);

  // Header reveal animation on mount
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.portfolio-header > *',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.1 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-void-deep pt-40 pb-32">
      {/* ─── Hero Header ─── */}
      <div className="portfolio-header max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon/30 bg-neon/10 text-neon text-xs font-fira uppercase tracking-widest mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
          Nuestro Trabajo
        </div>
        <h1 className="text-6xl md:text-8xl font-instrument text-ghost leading-tight mb-6">
          Que los resultados<br />
          <em className="text-neon not-italic">hablen</em> por sí solos.
        </h1>
        <p className="text-ghost/60 font-sora text-lg max-w-xl mx-auto">
          Cada proyecto es una prueba de concepto. Selecciona una categoría para filtrar.
        </p>
      </div>

      {/* ─── Filter Pills ─── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="flex flex-wrap gap-3 justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative px-5 py-2 rounded-full text-xs font-fira uppercase tracking-widest transition-all duration-300 border ${
                active === cat
                  ? 'bg-neon text-void-deep border-neon scale-105'
                  : 'bg-transparent text-ghost/60 border-white/10 hover:border-neon/50 hover:text-ghost'
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>
      </div>

      {/* ─── Projects Grid ─── */}
      <div
        ref={gridRef}
        className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filtered.map((project) => (
          <article
            key={project.id}
            className="group relative rounded-[2rem] overflow-hidden border border-white/5 bg-graphite/30 hover:bg-graphite/50 transition-all duration-500 hover:border-neon/20 hover:shadow-[0_0_40px_rgba(185,255,0,0.06)]"
          >
            {/* Cover Image */}
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent z-10" />
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Category badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 rounded-full bg-void-deep/80 backdrop-blur-sm text-neon text-[10px] font-fira uppercase tracking-widest border border-neon/20">
                  {project.categoryLabel}
                </span>
              </div>

              {/* Year badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className="px-3 py-1 rounded-full bg-void-deep/80 backdrop-blur-sm text-ghost/50 text-[10px] font-fira tracking-widest">
                  {project.year}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-7 space-y-4">
              <div>
                <p className="text-ghost/40 font-fira text-xs uppercase tracking-widest mb-1">
                  {project.client}
                </p>
                <h2 className="text-xl font-sora font-semibold text-ghost group-hover:text-neon transition-colors duration-300 leading-snug">
                  {project.title}
                </h2>
              </div>

              <p className="text-ghost/60 text-sm leading-relaxed font-light line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-md bg-white/5 text-ghost/50 text-[10px] font-fira uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-2">
                <Link
                  to={`/portafolio/${project.id}`}
                  className="inline-flex items-center gap-2 text-xs font-fira text-ghost/50 hover:text-neon transition-colors group/link"
                >
                  Ver proyecto
                  <svg
                    className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ─── Bottom CTA ─── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-28 text-center">
        <p className="text-ghost/50 font-fira text-sm tracking-widest uppercase mb-6">
          ¿Quieres ser el próximo caso de éxito?
        </p>
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
          className="group relative inline-flex items-center justify-center px-8 py-4 bg-ghost text-void-deep rounded-full font-sora font-medium overflow-hidden transition-all hover:scale-[1.03] active:scale-[0.98]"
        >
          <span className="relative z-10 flex items-center gap-2">
            Iniciar Proyecto
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
          <div className="absolute inset-0 bg-neon translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
        </button>
      </div>
    </div>
  );
};
