// ─── Category types ─────────────────────────────────────────────────────────
export type ServiceCategory =
  | 'todos'
  | 'social-media'
  | 'branding'
  | 'diseno-web'
  | 'contenido-audiovisual'
  | 'eventos'
  | 'crm';

export const categoryLabels: Record<ServiceCategory, string> = {
  todos: 'Todo',
  'social-media': 'Redes Sociales',
  branding: 'Branding',
  'diseno-web': 'Diseño Web',
  'contenido-audiovisual': 'Audiovisual',
  eventos: 'Eventos',
  crm: 'Sistemas',
};

// ─── Metric shown in the detail page header ──────────────────────────────────
export interface ProjectMetric {
  label: string;   // e.g. "Aumento de Engagement"
  value: string;   // e.g. "+340%"
}

// ─── A single image in the gallery section ───────────────────────────────────
export interface ProjectGalleryImage {
  url: string;
  caption?: string; // optional caption below the image
}

// ─── Full project data ────────────────────────────────────────────────────────
export interface PortfolioProject {
  // ── Card data (used in the portfolio grid) ──
  id: string;
  title: string;
  client: string;
  categories: Exclude<ServiceCategory, 'todos'>[];
  categoryLabel: string;
  description: string;  // short card description (2-3 sentences)
  coverImage: string;   // hero / card cover
  tags: string[];
  year: string;

  // ── Detail page extras ───────────────────────────────────────────────────
  /** Duration of the project, e.g. "3 semanas", "2 meses" */
  duration?: string;
  /** Website / result URL shown as a "Ver resultado" button. Leave undefined to hide. */
  resultUrl?: string;
  /** Longer narrative: the challenge or context */
  challenge?: string;
  /** What the agency did and how */
  solution?: string;
  /** Key numbers to highlight in the detail hero */
  metrics?: ProjectMetric[];
  /** Gallery images shown below the solution section */
  gallery?: ProjectGalleryImage[];
  /** Optional testimonial from the client */
  testimonial?: {
    quote: string;
    author: string;
    role?: string;
  };
}

// ─── Test projects (one per category) ────────────────────────────────────────
export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'test-social-media',
    title: 'Test Redes Sociales',
    client: 'Cliente Demo',
    categories: ['social-media'],
    categoryLabel: 'Redes Sociales',
    description: 'Estrategia de contenido y gestión de comunidad para marca de prueba. Crecimiento orgánico sostenido y campañas de engagement de alto impacto.',
    coverImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop',
    tags: ['Instagram', 'TikTok', 'Content Strategy'],
    year: '2025',
    duration: '3 meses',
    resultUrl: 'https://instagram.com',
    challenge:
      'La marca tenía presencia digital sin estrategia: publicaciones inconsistentes, baja tasa de engagement y sin una voz definida. El objetivo era construir una comunidad leal desde cero.',
    solution:
      'Diseñamos un calendario editorial con pilares de contenido diferenciados para cada plataforma. Produjimos piezas visuales de alto impacto, implementamos estrategia de hashtags y gestionamos la comunidad en tiempo real, respondiendo en menos de 2 horas a cada interacción.',
    metrics: [
      { label: 'Engagement Rate', value: '+340%' },
      { label: 'Nuevos Seguidores', value: '+12.4K' },
      { label: 'Alcance Mensual', value: '2.1M' },
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1974&auto=format&fit=crop',
        caption: 'Feed editorial de Instagram',
      },
      {
        url: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop',
        caption: 'Campaña de lanzamiento',
      },
      {
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
        caption: 'Dashboard de métricas',
      },
    ],
    testimonial: {
      quote: 'En tres meses lograron lo que no pudimos hacer en dos años. Nuestra comunidad ahora es real, activa y leal.',
      author: 'Ana Pérez',
      role: 'CEO, Cliente Demo',
    },
  },
  {
    id: 'test-branding',
    title: 'Test Branding',
    client: 'Cliente Demo',
    categories: ['branding'],
    categoryLabel: 'Branding',
    description: 'Construcción de identidad visual completa: logotipo, paleta cromática, tipografía y manual de marca con guidelines aplicados a todos los touchpoints digitales.',
    coverImage: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2070&auto=format&fit=crop',
    tags: ['Logo Design', 'Brand Identity', 'Guidelines'],
    year: '2025',
    duration: '6 semanas',
    challenge:
      'La empresa había crecido sin identidad visual clara. Distintos logos en distintos formatos, sin paleta definida ni tipografía consistente. Necesitaban un sistema que acompañara su expansión.',
    solution:
      'Realizamos un proceso de Brand Discovery de tres sesiones para entender el arquetipo y posicionamiento. Desarrollamos el logotipo en todas sus variantes, un sistema de color con tokens documentados, tipografías primarias y secundarias, y un Brand Guide digital completo.',
    metrics: [
      { label: 'Variantes de Logo', value: '12' },
      { label: 'Páginas del Brand Book', value: '48' },
      { label: 'Vigencia Estimada', value: '10 años' },
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop',
        caption: 'Sistema de logotipo y variantes',
      },
      {
        url: 'https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?q=80&w=2070&auto=format&fit=crop',
        caption: 'Paleta cromática y tipografías',
      },
      {
        url: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1964&auto=format&fit=crop',
        caption: 'Aplicaciones en packaging',
      },
    ],
    testimonial: {
      quote: 'Por primera vez nuestra marca se ve como lo que somos realmente. Es un antes y un después.',
      author: 'Carlos López',
      role: 'Founder, Cliente Demo',
    },
  },
  {
    id: 'se-discipulo-web-y-crm',
    title: 'Se Discipulo - Página Web y Sistema de gestión',
    client: 'Se Discipulo',
    categories: ['diseno-web', 'crm'],
    categoryLabel: 'Web + CRM',
    description: 'Ecosistema digital completo para Se Discipulo. Incluye landing page de alta conversión y un sistema de gestión interna (CRM) para el control de inventario y pedidos.',
    coverImage: '/portfolio/sediscipulo/coverImage.png',
    tags: ['Web', 'UX/UI Design', 'Sístema de gestión', 'CRM'],
    year: '2026',
    duration: '3 semanas',
    resultUrl: 'https://sediscipulo.cl',
    challenge:
      'Se Discipulo necesitaba una presencia web que no solo mostrara sus productos, sino que estuviera conectada directamente con su operación. El desafío era integrar un catálogo público con un sistema de gestión interna en tiempo real para optimizar la logística.',
    solution:
      'Desarrollamos una plataforma robusta con React y Supabase. La web pública es rápida y editorial, enfocada en la conversión. Por detrás, creamos un panel administrativo (CRM) que centraliza el stock móvil y web, permitiendo al cliente gestionar todo desde una sola interfaz.',
    metrics: [
      { label: 'Carga de Página', value: '< 1s' },
      { label: 'Sincronización', value: 'Tiempo Real' },
      { label: 'Optimización UX', value: '100%' },
    ],
    gallery: [
      {
        url: '/portfolio/sediscipulo/coverImage.png',
        caption: 'Interfaz principal y diseño de catálogo',
      },
      {
        url: '/portfolio/sediscipulo/productos.jpeg',
        caption: 'Catálogo conectado a sistema de gestión interna',
      },
      {
        url: '/portfolio/sediscipulo/carritoCompras.png',
        caption: 'Experiencia optimizada en dispositivos móviles',
      },
    ],
    testimonial: {
      quote: 'El nuevo sitio no solo es hermoso, sino que realmente vende. Es nuestro mejor comercial 24/7.',
      author: 'Sebastián Arancibia',
      role: 'Marketing Manager, Cliente Demo',
    },
  },
  {
    id: 'test-audiovisual',
    title: 'Test Contenido Audiovisual',
    client: 'Cliente Demo',
    categories: ['contenido-audiovisual'],
    categoryLabel: 'Audiovisual',
    description: 'Producción de campaña fotográfica y video aspiracional para lanzamiento de producto. Dirección de arte, rodaje en locación y post-producción.',
    coverImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop',
    tags: ['Video Production', 'Photography', 'Motion Design'],
    year: '2025',
    duration: '4 semanas',
    resultUrl: 'https://youtube.com',
    challenge:
      'El lanzamiento de un nuevo producto requería contenido visual de alto impacto capaz de competir con marcas de primer nivel. El presupuesto era ajustado pero las expectativas, altas.',
    solution:
      'Definimos una dirección de arte que aprovechaba locaciones urbanas disponibles. Rodamos en 2 días con equipo Cinema DNG. Post-producción con colorización cinematográfica, motion graphics y audio original. El material se distribuyó en 4 formatos adaptados a cada plataforma.',
    metrics: [
      { label: 'Visualizaciones', value: '1.2M' },
      { label: 'Tasa de Retención', value: '74%' },
      { label: 'Días de Entrega', value: '12' },
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop',
        caption: 'Set de rodaje',
      },
      {
        url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop',
        caption: 'Sesión fotográfica de producto',
      },
      {
        url: 'https://images.unsplash.com/photo-1536240478700-b869ad10e2c5?q=80&w=2070&auto=format&fit=crop',
        caption: 'Post-producción en sala',
      },
    ],
    testimonial: {
      quote: 'Lograron transmitir exactamente lo que queríamos mostrar. El video superó todas nuestras expectativas.',
      author: 'Roberto Silva',
      role: 'Director Creativo, Cliente Demo',
    },
  },
  {
    id: 'test-eventos',
    title: 'Test Eventos',
    client: 'Cliente Demo',
    categories: ['eventos'],
    categoryLabel: 'Eventos',
    description: 'Cobertura integral de activación de marca: fotografía profesional, video highlights y gestión de social media en tiempo real durante el evento.',
    coverImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop',
    tags: ['Event Coverage', 'Live Social', 'Brand Activation'],
    year: '2025',
    duration: '1 día (+ 48 hrs post)',
    challenge:
      'El cliente organizaba su primer evento de marca con 400 asistentes y necesitaba documentación profesional y gestión en vivo de sus redes para maximizar la visibilidad más allá del recinto.',
    solution:
      'Desplegamos equipo de 3 personas: fotografía, video y social media manager. Publicamos contenido en vivo cada 30 minutos, gestionamos historias interactivas y capturamos todo el event journey. Los highlights editados estuvieron disponibles en menos de 24 horas.',
    metrics: [
      { label: 'Fotos Entregadas', value: '340+' },
      { label: 'Alcance en Vivo', value: '85K' },
      { label: 'Highlights Listos', value: '< 24 hrs' },
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop',
        caption: 'Cobertura principal del evento',
      },
      {
        url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
        caption: 'Ambiente y detalles de producción',
      },
      {
        url: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop',
        caption: 'Momento de cierre',
      },
    ],
    testimonial: {
      quote: 'Fue como tener un equipo de producción de TV. Cada momento quedó registrado y las redes explotaron durante y después.',
      author: 'Valentina Mora',
      role: 'Events Manager, Cliente Demo',
    },
  },
];
