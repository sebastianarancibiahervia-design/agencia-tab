import { useEffect, useRef, useState } from 'react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      ref={headerRef}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 rounded-huge transition-all duration-300 w-[90%] max-w-5xl border border-white/5 ${
        isScrolled ? 'bg-void-deep/40 backdrop-blur-xl shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="flex flex-col items-center justify-center leading-none">
        <img 
           src="/logo-tab.png" 
           alt="Tab Agencia" 
           className="w-24 h-auto drop-shadow-[0_0_15px_rgba(185,255,0,0.6)] mix-blend-screen"
           onError={(e) => {
             // Fallback if image fails to load
             e.currentTarget.style.display = 'none';
             e.currentTarget.parentElement!.innerHTML = '<span class="font-sora font-black text-2xl tracking-tighter text-ghost drop-shadow-[0_0_15px_rgba(185,255,0,0.4)]">Tab</span><span class="font-sora font-normal text-[10px] tracking-widest text-ghost">agencia</span>';
           }}
        />
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        {['Servicios', 'Filosofía', 'Protocolo'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-xs uppercase tracking-widest font-fira text-ghost/60 hover:text-neon transition-colors">
            {item}
          </a>
        ))}
      </nav>

      <button className="group relative overflow-hidden bg-ghost text-void-deep px-8 py-3 rounded-huge font-sora font-semibold text-xs tracking-wider uppercase transition-transform hover:scale-[1.03] active:scale-95">
        <span className="relative z-10 transition-colors duration-500">Contactar</span>
        <div className="absolute inset-0 bg-neon translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0 rounded-huge"></div>
      </button>
    </header>
  );
};
