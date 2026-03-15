import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onOpenContact: () => void;
}

export const Header = ({ onOpenContact }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isPortfolio = location.pathname.startsWith('/portafolio');

  return (
    <header
      ref={headerRef}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 rounded-huge transition-all duration-300 w-[90%] max-w-5xl border border-white/5 ${
        isScrolled ? 'bg-void-deep/40 backdrop-blur-xl shadow-2xl' : 'bg-transparent'
      }`}
    >
      {/* ─── Logo → Home ─── */}
      <Link to="/" className="flex items-center">
        <img
          src="/logo-tab.png"
          alt="Tab Agencia"
          className="w-24 h-auto drop-shadow-[0_0_15px_rgba(185,255,0,0.6)] mix-blend-screen object-contain"
        />
      </Link>

      {/* ─── Nav ─── */}
      <nav className="hidden md:flex items-center gap-8">
        {/* Servicios dropdown */}
        <div className="relative group">
          <Link
            to="/servicios"
            className="text-xs uppercase tracking-widest font-fira text-ghost/60 hover:text-neon transition-colors cursor-pointer py-4 inline-block"
          >
            Servicios
          </Link>

          <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-2 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <div className="rounded-xl bg-void-deep/90 backdrop-blur-xl border border-white/10 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 overflow-hidden">
              <div className="py-2 flex flex-col">
                {[
                  { label: 'Redes Sociales',        path: '/servicios/social-media' },
                  { label: 'Branding',               path: '/servicios/branding' },
                  { label: 'Diseño Web',             path: '/servicios/diseno-web' },
                  { label: 'Contenido Audiovisual',  path: '/servicios/contenido-audiovisual' },
                  { label: 'Eventos',                path: '/servicios/eventos' },
                  { label: 'Gestión Digital',        path: '/servicios/gestion-digital' },
                ].map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="px-4 py-3 text-xs uppercase tracking-widest font-fira text-ghost/70 hover:text-neon hover:bg-white/5 transition-colors text-left"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Portafolio link */}
        <Link
          to="/portafolio"
          className={`text-xs uppercase tracking-widest font-fira transition-colors py-2 relative group ${
            isPortfolio ? 'text-neon' : 'text-ghost/60 hover:text-neon'
          }`}
        >
          Portafolio
          {/* Active underline */}
          <span
            className={`absolute bottom-0 left-0 h-[1px] bg-neon transition-all duration-300 ${
              isPortfolio ? 'w-full' : 'w-0 group-hover:w-full'
            }`}
          />
        </Link>

        {/* Sectional anchors */}
        {[
          { label: 'Nuestra Misión',  path: '/#filosofia' },
          { label: 'Forma de Trabajo', path: '/#protocolo' },
        ].map((item) => (
          <a
            key={item.path}
            href={item.path}
            className="text-xs uppercase tracking-widest font-fira text-ghost/60 hover:text-neon transition-colors py-2"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* ─── Contact CTA ─── */}
      <button
        onClick={onOpenContact}
        className="group relative overflow-hidden bg-ghost text-void-deep px-8 py-3 rounded-huge font-sora font-semibold text-xs tracking-wider uppercase transition-transform hover:scale-[1.03] active:scale-95"
      >
        <span className="relative z-10 transition-colors duration-500">Contactar</span>
        <div className="absolute inset-0 bg-neon translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0 rounded-huge" />
      </button>
    </header>
  );
};
