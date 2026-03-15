export interface ServiceFeature {
  id: string;
  title: string;
  description: string;
}

export interface ServiceStat {
  label: string;
  value: string;
}

export interface ServiceStep {
  number: string;
  title: string;
  description: string;
}

export interface ServiceData {
  id: string;
  title: string;
  heroCopy: string;
  heroSubcopy: string;
  heroImage: string;
  features: ServiceFeature[];
  stats: ServiceStat[];
  processTitle: string;
  process: ServiceStep[];
  philosophyText: string;
  ctaText: string;
}

export const servicesData: Record<string, ServiceData> = {
  'social-media': {
    id: 'social-media',
    title: 'Social Media',
    heroCopy: 'Dominio Algorítmico.\nCrecimiento Imparable.',
    heroSubcopy: 'No publicamos por publicar. Hackeamos la atención y convertimos audiencias en comunidades leales conectadas con tu marca.',
    heroImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop', // Retro synthwave / neon lights
    features: [
      {
        id: 'strategy',
        title: 'Estrategia & Auditoría',
        description: 'Radiografía profunda de tu huella digital actual. Identificamos brechas y oportunidades de expansión.'
      },
      {
        id: 'content',
        title: 'Contenido High-End',
        description: 'Producción visual y copywriting diseñado específicamente para retener retinas en cada plataforma.'
      },
      {
        id: 'community',
        title: 'Community Management',
        description: 'Interacción ágil y quirúrgica en tiempo real para transformar seguidores pasivos en embajadores.'
      },
      {
        id: 'ads',
        title: 'Performance Ads',
        description: 'Distribución pagada hiper-segmentada para maximizar el retorno de inversión y el alcance.'
      }
    ],
    stats: [
      { label: 'Engagement Promedio', value: '> +340%' },
      { label: 'Alcance Mensual', value: '> 10M+' },
      { label: 'Retorno en Ads', value: '> 4.5x ROAS' }
    ],
    processTitle: 'Nuestra Metodología',
    process: [
      { number: '01', title: 'Data Gathering', description: 'Análisis profundo de audiencia, competidores y tendencias actuales.' },
      { number: '02', title: 'Content Lab', description: 'Conceptualización y producción de pilares de contenido de alto impacto.' },
      { number: '03', title: 'Distribution', description: 'Despliegue algorítmico omnicanal calibrado para cada plataforma.' },
      { number: '04', title: 'Analytics', description: 'Medición métrica constante e iteración para escalar resultados.' }
    ],
    philosophyText: 'Una métrica vacía no sirve de nada. Buscamos la retención absoluta y el culto a la marca.',
    ctaText: 'Inicia tu mutación digital.'
  },
  'branding': {
    id: 'branding',
    title: 'Branding',
    heroCopy: 'Identidades que\nSobreviven al Futuro.',
    heroSubcopy: 'Construimos sistemas visuales inflexibles. El ADN de tu marca diseñado con precisión quirúrgica y estética atemporal.',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop', // Abstract dark geometry
    features: [
      {
        id: 'strategy',
        title: 'Brand Strategy',
        description: 'El manifiesto, arquetipo y posicionamiento cardinal de tu marca en el mercado.'
      },
      {
        id: 'visual-dna',
        title: 'Visual DNA',
        description: 'Logotipo, paleta cromática, reglas tipográficas y dirección de arte fundamental.'
      },
      {
        id: 'systems',
        title: 'Design Systems',
        description: 'Componentes y librerías escalables listas para habitar todo el ecosistema digital.'
      },
      {
        id: 'guidelines',
        title: 'Brand Guidelines',
        description: 'El documento maestro que dicta las leyes inquebrantables del comportamiento de la marca.'
      }
    ],
    stats: [
      { label: 'Sistemas Construidos', value: '> 50+' },
      { label: 'Precisión Visual', value: '> 1:1 Pixel' },
      { label: 'Vigencia Estimada', value: '> 10 Años' }
    ],
    processTitle: 'Ingeniería Visual',
    process: [
      { number: '01', title: 'Discovery', description: 'Inmersión total en el núcleo del negocio y sus objetivos comerciales.' },
      { number: '02', title: 'Architecture', description: 'Definición de las bases conceptuales y verbales antes de tocar un solo píxel.' },
      { number: '03', title: 'Visual Iteration', description: 'Exploración estética rigurosa para encontrar la forma definitiva del mensaje.' },
      { number: '04', title: 'Systemization', description: 'Codificación visual y entrega de archivos y manuales estructurados.' }
    ],
    philosophyText: 'Una marca no es un logo. Es el ecosistema visual donde habita la promesa de tu producto.',
    ctaText: 'Rediseña tu ADN.'
  },
  'diseno-web': {
    id: 'diseno-web',
    title: 'Diseño Web',
    heroCopy: 'Sitios que\nConvierten en Masa.',
    heroSubcopy: 'Arquitecturas digitales que combinan velocidad, estética y conversión. Tu presencia en internet, construida como un instrumento de precisión.',
    heroImage: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1974&auto=format&fit=crop',
    features: [
      {
        id: 'ux-ui',
        title: 'UX/UI Design',
        description: 'Diseño de interfaces basado en datos de comportamiento. Cada pantalla tiene un propósito táctico.'
      },
      {
        id: 'dev',
        title: 'Desarrollo Frontend',
        description: 'Código limpio, componentes modulares y rendimiento máximo. Scores de 95+ en PageSpeed.'
      },
      {
        id: 'cms',
        title: 'CMS & WordPress',
        description: 'Temas a medida construidos para ser gestionados sin fricción. Escalables y sin dependencias rígidas.'
      },
      {
        id: 'seo-tech',
        title: 'SEO Técnico',
        description: 'Arquitectura semántica, Core Web Vitals y meta-datos calibrados para dominar las SERPs.'
      }
    ],
    stats: [
      { label: 'PageSpeed Score', value: '> 95/100' },
      { label: 'Tiempo de Carga', value: '< 1.2 seg' },
      { label: 'Tasa de Conversión', value: '> +180%' }
    ],
    processTitle: 'Arquitectura Digital',
    process: [
      { number: '01', title: 'Wireframing', description: 'Estructuración lógica del flujo de usuario antes de diseñar.' },
      { number: '02', title: 'Design System', description: 'Definición de tokens visuales y componentes reutilizables.' },
      { number: '03', title: 'Development', description: 'Implementación pixel-perfect con código semántico y modular.' },
      { number: '04', title: 'Launch & Optimization', description: 'Despliegue, monitoreo de métricas y optimización continua post-lanzamiento.' }
    ],
    philosophyText: 'Un sitio lento es un sitio muerto. La velocidad es la primera experiencia que el usuario percibe.',
    ctaText: 'Construye tu instrumento digital.'
  },
  'contenido-audiovisual': {
    id: 'contenido-audiovisual',
    title: 'Contenido Audiovisual',
    heroCopy: 'Producción\nque Detiene el Scroll.',
    heroSubcopy: 'Fotografía y video con dirección de arte de alta gama. Contenido visual construido para impactar en los primeros 3 segundos.',
    heroImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop',
    features: [
      {
        id: 'photography',
        title: 'Fotografía Editorial',
        description: 'Sesiones de producto, corporativas y lifestyle con dirección de arte coherente con tu identidad visual.'
      },
      {
        id: 'video',
        title: 'Video de Alta Gama',
        description: 'Producción cinematográfica para campañas, reels y contenido de marca con guión, dirección y post-producción.'
      },
      {
        id: 'motion',
        title: 'Motion & Animation',
        description: 'Piezas animadas 2D/3D para comunicar ideas complejas de manera visual e impactante.'
      },
      {
        id: 'podcast',
        title: 'Podcast & Audio',
        description: 'Producción de contenido de audio con identidad sonora, edición profesional y distribución multicanal.'
      }
    ],
    stats: [
      { label: 'Retención Promedio', value: '> +220%' },
      { label: 'Proyectos Entregados', value: '> 300+' },
      { label: 'Tiempo de Respuesta', value: '> 48 hrs' }
    ],
    processTitle: 'Línea de Producción',
    process: [
      { number: '01', title: 'Dirección de Arte', description: 'Definición del mood visual, paleta y referencias estéticas del proyecto.' },
      { number: '02', title: 'Pre-Producción', description: 'Guión, storyboard, locaciones, casting y logística de rodaje.' },
      { number: '03', title: 'Rodaje & Captura', description: 'Producción en campo con equipo técnico de primer nivel.' },
      { number: '04', title: 'Post-Producción', description: 'Edición, colorización, audio y entrega en formatos optimizados por plataforma.' }
    ],
    philosophyText: 'El contenido mediocre es ruido. El buen contenido es una experiencia que se recuerda.',
    ctaText: 'Produce algo memorable.'
  },
  'eventos': {
    id: 'eventos',
    title: 'Eventos',
    heroCopy: 'Activaciones que\nDejan Marca.',
    heroSubcopy: 'Cobertura profesional, producción de contenido en vivo y activaciones de marca diseñadas para generar ruido real y digital.',
    heroImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
    features: [
      {
        id: 'coverage',
        title: 'Cobertura en Vivo',
        description: 'Equipo de fotografía y video en tu evento capturando los momentos que definen la narrativa de tu marca.'
      },
      {
        id: 'live-social',
        title: 'Live Social Media',
        description: 'Gestión en tiempo real de tus redes sociales durante el evento para maximizar el alcance orgánico.'
      },
      {
        id: 'production',
        title: 'Producción del Evento',
        description: 'Dirección creativa, ambientación visual, branding del espacio y experiencia de marca 360°.'
      },
      {
        id: 'post-event',
        title: 'Contenido Post-Evento',
        description: 'Edición rápida de highlights, reels y reportajes para mantener el momentum post-activación.'
      }
    ],
    stats: [
      { label: 'Eventos Cubiertos', value: '> 120+' },
      { label: 'Alcance Generado', value: '> 5M+' },
      { label: 'Entrega de Material', value: '< 24 hrs' }
    ],
    processTitle: 'Protocolo de Evento',
    process: [
      { number: '01', title: 'Briefing', description: 'Entendimiento profundo del tipo de evento, audiencia y objetivos de comunicación.' },
      { number: '02', title: 'Planning', description: 'Cronograma de coberturas, brief visual, guión de contenido y estrategia en redes.' },
      { number: '03', title: 'Ejecución', description: 'Despliegue del equipo en campo con coordinación en tiempo real.' },
      { number: '04', title: 'Entrega', description: 'Post-producción acelerada y entrega de contenido editado dentro de las primeras 24-48 hrs.' }
    ],
    philosophyText: 'Un evento sin documentación es un evento que nunca ocurrió. Hacemos que tu activación viva más allá del día.',
    ctaText: 'Activa tu próximo evento.'
  },
  'gestion-digital': {
    id: 'gestion-digital',
    title: 'Gestión Digital',
    heroCopy: 'Tu Negocio,\nCon su Propio Sistema.',
    heroSubcopy: 'Construimos plataformas digitales a medida — reservas, CRMs ligeros, gestión de clientes — integradas directamente en tu sitio web. Tecnología de empresa grande, a la escala de tu negocio.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    features: [
      {
        id: 'booking',
        title: 'Sistemas de Reserva',
        description: 'Agenda online integrada en tu sitio web. Tus clientes reservan 24/7 y tú gestionas todo desde un panel simple y limpio.'
      },
      {
        id: 'crm-lite',
        title: 'CRM Ligero',
        description: 'Base de datos de clientes, historial de interacciones y seguimiento de prospectos. Todo lo que necesitas sin la complejidad que no usas.'
      },
      {
        id: 'dashboards',
        title: 'Dashboards de Control',
        description: 'Paneles de administración visuales y simples para que puedas gestionar tu operación sin depender de nadie más.'
      },
      {
        id: 'automation',
        title: 'Automatizaciones',
        description: 'Confirmaciones automáticas, recordatorios por WhatsApp/email y flujos que trabajan por ti mientras tú atiendes a tus clientes.'
      }
    ],
    stats: [
      { label: 'Tiempo de Desarrollo', value: '< 4 sem' },
      { label: 'Ahorro Operacional', value: '> 60%' },
      { label: 'Plataformas Entregadas', value: '> 20+' }
    ],
    processTitle: 'Cómo lo Construimos',
    process: [
      { number: '01', title: 'Diagnóstico', description: 'Entendemos tu operación real: qué haces a mano, dónde se pierde tiempo y qué necesitas gestionar.' },
      { number: '02', title: 'Diseño del Sistema', description: 'Mapeamos los flujos de la plataforma y definimos exactamente qué construir — ni más, ni menos.' },
      { number: '03', title: 'Desarrollo', description: 'Construimos la plataforma con tecnología probada, limpia y mantenible. Sin código innecesario.' },
      { number: '04', title: 'Entrega & Capacitación', description: 'Entregamos el sistema funcionando e integrado en tu web, con soporte para que aprendas a usarlo en menos de una hora.' }
    ],
    philosophyText: 'La tecnología debe simplificar tu trabajo, no complicarlo. Construimos solo lo que necesitas — y lo hacemos simple.',
    ctaText: 'Digitaliza tu operación.'
  }
};
