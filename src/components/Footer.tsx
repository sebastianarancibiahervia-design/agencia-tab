
export const Footer = () => {
  return (
    <footer className="bg-[#05050A] text-ghost pb-8 pt-24 px-6 md:px-12 lg:px-24 rounded-t-[3rem] border-t border-white/5 relative z-40 mt-[-2rem] origin-top">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        
        <div className="space-y-6">
          <div className="flex flex-col items-start justify-center leading-none">
            <img 
               src="/logo-tab.png" 
               alt="Tab Agencia" 
               className="w-32 h-auto drop-shadow-[0_0_15px_rgba(185,255,0,0.5)] mix-blend-screen"
               onError={(e) => {
                 e.currentTarget.style.display = 'none';
                 e.currentTarget.parentElement!.innerHTML = '<span class="font-sora font-black text-4xl tracking-tighter text-ghost drop-shadow-[0_0_15px_rgba(185,255,0,0.5)]">Tab</span><span class="font-sora font-normal text-xs tracking-widest text-ghost">agencia</span>';
               }}
            />
          </div>
          <p className="font-fira text-xs text-ghost/40 max-w-xs leading-relaxed mt-4">
            La tecla que impulsa tu marca. Hacemos que la presencia digital de tu negocio sea increíble.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-2 font-fira text-xs text-ghost/50">
          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/5">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
            <span className="uppercase tracking-widest pl-1 text-[10px]">OS Status: Online & Secure</span>
          </div>
          <div className="uppercase tracking-widest flex items-center gap-4 mt-6 text-[10px]">
             <a href="#" className="hover:text-neon transition-colors">Instagram</a>
             <span className="text-white/10">|</span>
             <a href="#" className="hover:text-neon transition-colors">LinkedIn</a>
             <span className="text-white/10">|</span>
             <a href="#" className="hover:text-neon transition-colors">Behance</a>
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 font-fira text-[9px] text-ghost/30 uppercase tracking-widest">
        <span>&copy; {new Date().getFullYear()} Agencia TAB. Todos los derechos reservados.</span>
        <span>Instrumento digital 1:1 Pixel Perfect</span>
      </div>
    </footer>
  );
};
