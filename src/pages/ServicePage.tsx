import { useParams, Navigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { ServiceHero } from '../components/services/ServiceHero';
import { DataRibbon } from '../components/services/DataRibbon';
import { ServiceBento } from '../components/services/ServiceBento';
import { ServiceProcess } from '../components/services/ServiceProcess';
import { useLayoutEffect } from 'react';

export const ServicePage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const data = serviceId ? servicesData[serviceId] : null;

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!data) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-void-deep min-h-screen selection:bg-neon/30 selection:text-ghost">
      
      {/* Hero Section */}
      <ServiceHero 
        title={data.title}
        heroCopy={data.heroCopy}
        heroSubcopy={data.heroSubcopy}
        heroImage={data.heroImage}
      />

      {/* Stats Ribbon */}
      <DataRibbon stats={data.stats} />

      {/* Features Grid (Bento) */}
      <ServiceBento features={data.features} />

      {/* Large Philosophy Statement */}
      <div className="py-24 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-instrument text-ghost italic leading-tight">
          "{data.philosophyText}"
        </h2>
      </div>

      {/* Methodology / Process Timeline */}
      <ServiceProcess 
        title={data.processTitle}
        process={data.process}
      />

      {/* Final CTA Block */}
      <div className="py-32 px-6 md:px-12 max-w-7xl mx-auto text-center border-t border-white/5">
        <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-neon/50 to-transparent mb-8">
          <div className="px-6 py-2 rounded-full bg-void-deep text-neon font-fira tracking-widest text-sm uppercase">
            Start Protocol
          </div>
        </div>
        <h2 className="text-5xl md:text-7xl font-instrument text-ghost mb-12">
          {data.ctaText}
        </h2>
        
        {/* We use a standard anchor or Link that opens the exact same modal */}
         <button 
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-ghost text-void-deep rounded-full font-sora font-medium overflow-hidden transition-all hover:scale-[1.03] active:scale-[0.98]"
            onClick={() => {
              // We'll pass down the onOpenContact prop from App > Routes > Route or dispatch an event
              // For simplicity in this template without prop drilling, dispatching a custom event 
              // is a clean way to open the global Contact Modal
              window.dispatchEvent(new CustomEvent('open-contact'));
            }}
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
