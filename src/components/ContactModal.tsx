import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';

const X = ({ size = 24, className = '' }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

const ArrowRight = ({ size = 24, className = '' }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

const Loader = ({ size = 24, className = '' }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
);

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const capsuleRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  // GSAP Animation lifecycle
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (isOpen) {
        gsap.to(overlayRef.current, { autoAlpha: 1, duration: 0.5, backdropFilter: 'blur(20px)', ease: 'power2.out' });
        gsap.fromTo(capsuleRef.current,
          { y: 50, scale: 0.95, autoAlpha: 0 },
          { y: 0, scale: 1, autoAlpha: 1, duration: 0.6, ease: 'power3.out', delay: 0.1 }
        );
      } else {
        gsap.to(capsuleRef.current, { y: -20, scale: 0.98, autoAlpha: 0, duration: 0.4, ease: 'power2.in' });
        gsap.to(overlayRef.current, { autoAlpha: 0, backdropFilter: 'blur(0px)', duration: 0.5, ease: 'power2.out', delay: 0.1 });
      }
    });
    return () => ctx.revert();
  }, [isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Convert FormData to URLSearchParams for Netlify
    const urlEncodedData = new URLSearchParams(formData as any).toString();

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: urlEncodedData,
      });
    } catch (err) {
      console.error("Error submitting form", err);
    }

    setFormState('success');
    setTimeout(() => {
      onClose();
      setTimeout(() => {
        setFormState('idle');
        form.reset();
      }, 500);
    }, 2500);
  };

  return (
    <div
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 p-[env(safe-area-inset-top)_env(safe-area-inset-right)_env(safe-area-inset-bottom)_env(safe-area-inset-left)] invisible"
      style={{ backgroundColor: 'rgba(10, 10, 20, 0.6)' }}
    >
      <div
        ref={capsuleRef}
        className="relative w-full max-w-2xl bg-void-deep/90 border border-white/5 shadow-2xl overflow-hidden rounded-huge md:rounded-massive"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-neon/5 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-neon/30 to-transparent"></div>

        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-ghost/60 hover:text-neon hover:bg-white/10 transition-colors z-[50]"
        >
          <X size={20} />
        </button>

        <div className="p-6 md:p-12 relative z-10 overflow-y-auto max-h-[90vh]">
          {formState === 'success' ? (
            <div className="h-[300px] md:h-[400px] flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-neon/10 flex items-center justify-center border border-neon/30">
                <div className="w-3 h-3 rounded-full bg-neon animate-pulse shadow-[0_0_15px_rgba(185,255,0,0.8)]"></div>
              </div>
              <h3 className="font-instrument italic text-3xl md:text-4xl text-neon">Conexión Establecida.</h3>
              <p className="font-fira text-xs md:text-sm text-ghost/60 max-w-sm">
                Hemos recibido tu información. El protocolo de inicio comenzará en breve.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8 md:mb-10">
                <h2 className="font-instrument italic text-4xl md:text-6xl text-ghost leading-tight md:leading-none mb-4">
                  Sincroniza tu<br />
                  <span className="text-neon block">visión con nuestro sistema.</span>
                </h2>
                <p className="font-fira text-[10px] text-ghost/50 uppercase tracking-widest">
                  Agencia TAB es el socio estratégico para el área de marketing
                </p>
              </div>

              <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="space-y-4 md:space-y-6">
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="font-fira text-[10px] uppercase tracking-widest text-ghost/40 ml-4">Nombre Completo</label>
                    <input name="name" required type="text" className="w-full bg-[#18181B] border border-white/5 rounded-2xl px-5 py-3 md:py-4 text-ghost placeholder:text-ghost/20 font-sora text-sm focus:outline-none focus:border-neon/50 focus:bg-neon/5 transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-fira text-[10px] uppercase tracking-widest text-ghost/40 ml-4">Correo Electrónico</label>
                    <input name="email" required type="email" className="w-full bg-[#18181B] border border-white/5 rounded-2xl px-5 py-3 md:py-4 text-ghost placeholder:text-ghost/20 font-sora text-sm focus:outline-none focus:border-neon/50 focus:bg-neon/5 transition-all" placeholder="hello@empresa.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="font-fira text-[10px] uppercase tracking-widest text-ghost/40 ml-4">Teléfono</label>
                    <input name="phone" required type="tel" className="w-full bg-[#18181B] border border-white/5 rounded-2xl px-5 py-3 md:py-4 text-ghost placeholder:text-ghost/20 font-sora text-sm focus:outline-none focus:border-neon/50 focus:bg-neon/5 transition-all" placeholder="+56 9 1234 5678" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-fira text-[10px] uppercase tracking-widest text-ghost/40 ml-4">Empresa (Opcional)</label>
                    <input name="company" type="text" className="w-full bg-[#18181B] border border-white/5 rounded-2xl px-5 py-3 md:py-4 text-ghost placeholder:text-ghost/20 font-sora text-sm focus:outline-none focus:border-neon/50 focus:bg-neon/5 transition-all" placeholder="StartUp Inc." />
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label className="font-fira text-[10px] uppercase tracking-widest text-ghost/40 ml-4">Mensaje</label>
                  <textarea name="message" required rows={3} className="w-full bg-[#18181B] border border-white/5 rounded-2xl px-5 py-3 md:py-4 text-ghost placeholder:text-ghost/20 font-sora text-sm focus:outline-none focus:border-neon/50 focus:bg-neon/5 transition-all resize-none" placeholder="Describe los objetivos de tu proyecto..."></textarea>
                </div>

                <div className="pt-2 md:pt-4">
                  <button
                    disabled={formState === 'submitting'}
                    type="submit"
                    className="group relative w-full overflow-hidden bg-ghost text-void-deep px-8 py-4 md:py-5 rounded-huge font-sora font-semibold text-xs tracking-widest uppercase transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center"
                  >
                    <span className="relative z-10 transition-colors duration-500 flex items-center gap-3">
                      {formState === 'submitting' ? (
                        <><Loader className="animate-spin" size={16} /> Estableciendo Conexión...</>
                      ) : (
                        <>Iniciar Protocolo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-neon translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></div>
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
