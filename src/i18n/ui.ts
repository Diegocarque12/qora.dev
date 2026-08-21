import type { CaseStudyId } from "@/config/caseStudies";
import type { FeaturedSiteId } from "@/config/featuredSites";

export const languages = {
  es: "Español",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "es";

/**
 * The two service pages share an anatomy — hero, three features, a portfolio
 * slice, and a closing call to action — so they share a copy shape too.
 */
export interface ServicePageCopy {
  title: string;
  heading: string;
  intro: string;
  features: readonly {
    readonly title: string;
    readonly description: string;
    readonly imageAlt: string;
  }[];
  projectsHeading: string;
  projectsIntro: string;
  processHeading: string;
  process: readonly {
    readonly title: string;
    readonly body: string;
  }[];
  ctaHeading: string;
  ctaBody: string;
  ctaButton: string;
}

export interface Dictionary {
  meta: {
    defaultTitle: string;
    description: string;
  };
  nav: {
    home: string;
    services: string;
    projects: string;
    about: string;
    contact: string;
    cta: string;
    switchLanguage: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    lead: string;
    display: string;
    accent: string;
    paragraph: string;
    button: string;
    pills: readonly string[];
  };
  services: {
    heading: string;
    cta: string;
    items: readonly {
      readonly category: string;
      readonly title: string;
      readonly description: string;
    }[];
    cardLink: string;
  };
  projects: {
    eyebrow: string;
    heading: string;
    intro: string;
    viewAll: string;
    readCase: string;
    outcomeLabel: string;
    cases: Record<
      CaseStudyId,
      {
        readonly tag: string;
        readonly whatItIs: string;
        readonly forWhom: string;
        readonly outcome?: string;
        readonly cta: string;
      }
    >;
  };
  caseStudy: {
    eyebrow: string;
    backLabel: string;
    storyHeading: string;
    processHeading: string;
    /** Prefix for gallery image alt text; the product name follows it. */
    galleryAlt: string;
    visionHeading: string;
    differenceHeading: string;
    ctaHeading: string;
    ctaBody: string;
    ctaButton: string;
    nextCaseLabel: string;
    cases: Record<
      CaseStudyId,
      {
        readonly title: string;
        readonly metaDescription: string;
        readonly tagline: string;
        readonly intro: string;
        readonly story: readonly string[];
        readonly process: readonly string[];
        readonly vision: readonly string[];
        readonly difference: readonly {
          readonly title: string;
          readonly body: string;
        }[];
      }
    >;
  };
  about: {
    eyebrow: string;
    heading: string;
    /** Contains a {year} token replaced with the founding year. */
    body: string;
    imageAlt: string;
    linkedin: string;
    cards: readonly {
      readonly title: string;
      readonly body: string;
    }[];
  };
  contact: {
    heading: string;
    name: string;
    namePlaceholder: string;
    lastName: string;
    lastNamePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phoneOptional: string;
    phonePlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    success: string;
    error: string;
    networkError: string;
  };
  footer: {
    tagline: string;
    cta: string;
    copyright: string;
    terms: string;
    privacy: string;
  };
  notFound: {
    title: string;
    message: string;
    button: string;
  };
  allServices: {
    title: string;
    heading: string;
    intro: string;
    heroCtaPrimary: string;
    heroCtaSecondary: string;
    services: readonly {
      readonly title: string;
      readonly description: string;
      readonly imageAlt: string;
    }[];
    projectsEyebrow: string;
    projectsHeading: string;
    projectsIntro: string;
    ownProductsLabel: string;
    sitesLabel: string;
    /** Prose for each client website, keyed by the config id. */
    sites: Record<
      FeaturedSiteId,
      {
        readonly description: string;
        readonly imageAlt: string;
      }
    >;
    uxEyebrow: string;
    uxHeading: string;
    uxBody: string;
    uxCards: readonly {
      readonly title: string;
      readonly body: string;
    }[];
    testimonialsHeading: string;
    testimonials: readonly {
      readonly quote: string;
      readonly name: string;
      readonly company: string;
    }[];
  };
  marketingWebsites: ServicePageCopy;
  webApplications: ServicePageCopy;
}

export const ui = {
  es: {
    meta: {
      defaultTitle: "Qora — Desarrollo web y SaaS a medida",
      description:
        "Estudio de desarrollo web. Creamos productos SaaS y sitios a medida — como PrimeFit y Dask — para negocios que quieren operar mejor en línea.",
    },
    nav: {
      home: "Inicio",
      services: "Servicios",
      projects: "Proyectos",
      about: "Nosotros",
      contact: "Contacto",
      cta: "Hablemos",
      switchLanguage: "Ver el sitio en inglés",
      openMenu: "Abrir el menú",
      closeMenu: "Cerrar el menú",
    },
    hero: {
      lead: "Sitios web y",
      display: "Software",
      accent: "a medida",
      paragraph:
        "Diseñamos y construimos sitios web y plataformas que resuelven la operación diaria de tu negocio. Trabajas directo con quien escribe el código: sin intermediarios.",
      button: "Ver proyectos",
      pills: [
        "Diseño UI/UX",
        "Posicionamiento en buscadores (SEO)",
        "Desarrollo",
      ],
    },
    services: {
      heading: "Lo que hacemos",
      cta: "Todos los servicios",
      items: [
        {
          category: "Sitios web",
          title: "Diseño y desarrollo web",
          description:
            "Sitios rápidos y fáciles de mantener, pensados para presentar tu negocio con claridad y convertir visitas en consultas. Nos encargamos de todo: diseño, contenido, rendimiento y publicación.",
        },
        {
          category: "Aplicaciones web",
          title: "Desarrollo SaaS a medida",
          description:
            "Construimos aplicaciones web a medida cuando una plantilla ya no alcanza: paneles de administración, membresías, pagos y reportes. Productos como PrimeFit y Dask nacieron así.",
        },
      ],
      cardLink: "Ver",
    },
    projects: {
      eyebrow: "Portafolio",
      heading: "Productos que construimos y mantenemos.",
      intro:
        "No son maquetas ni conceptos: son plataformas en producción, con clientes reales usándolas todos los días.",
      viewAll: "Ver más",
      readCase: "Ver el caso completo",
      outcomeLabel: "Resultado",
      cases: {
        primefit: {
          tag: "SaaS · Gimnasios y coaches",
          whatItIs:
            "Plataforma de gestión para gimnasios y entrenadores: rutinas, seguimiento de clientes y cobros en un solo lugar.",
          forWhom:
            "Para coaches y gimnasios de habla hispana que quieren retener clientes con datos, no con intuición.",
          outcome:
            "150% de crecimiento en suscripciones mensuales desde su lanzamiento.",
          cta: "Ver primefit.coach",
        },
        dask: {
          tag: "SaaS · Academias de baile",
          whatItIs:
            "Software de gestión para academias de baile: grupos, asistencia, mensualidades y comunicación con estudiantes, con total claridad.",
          forWhom:
            "Para academias que hoy llevan la operación en hojas de cálculo y chats, y necesitan orden sin complicarse.",
          outcome: "3 academias activas y más de 150 estudiantes gestionados.",
          cta: "Ver getdask.com",
        },
      },
    },
    caseStudy: {
      eyebrow: "Caso de estudio",
      backLabel: "Volver a proyectos",
      storyHeading: "La historia",
      processHeading: "El proceso",
      galleryAlt: "Captura de",
      visionHeading: "Nuestra visión",
      differenceHeading: "Qué lo hace diferente",
      ctaHeading: "¿Tu negocio necesita algo así?",
      ctaBody:
        "Construimos herramientas a la medida de problemas reales. Cuéntanos el tuyo y te decimos con honestidad si podemos ayudarte.",
      ctaButton: "Hablemos",
      nextCaseLabel: "Siguiente proyecto",
      cases: {
        primefit: {
          title: "Caso de estudio: PrimeFit",
          metaDescription:
            "La historia detrás de PrimeFit, la plataforma de gestión para gimnasios y entrenadores que construimos y operamos: el problema, el proceso y la visión.",
          tagline: "Inteligencia deportiva para gimnasios y entrenadores",
          intro:
            "PrimeFit es un producto propio de Qora: la plataforma donde entrenadores y gimnasios centralizan rutinas, seguimiento de clientes y membresías para dedicar su tiempo a entrenar, no a administrar.",
          story: [
            "PrimeFit no empezó como un encargo: empezó como un problema que veíamos repetirse en gimnasios y entrenadores independientes. El coach domina el entrenamiento, pero la operación vive regada entre hojas de cálculo, PDFs estáticos y chats: rutinas que se pierden, clientes que se estancan sin que nadie lo note y horas de administración que deberían estar en el piso del gimnasio.",
            "El costo real de ese desorden es la retención: un miembro que se siente ignorado no reclama — simplemente deja de llegar. Construimos la herramienta que ataca ese problema de raíz, en español y pensada para cómo trabaja un coach en Latinoamérica.",
          ],
          process: [
            "Empezamos por el flujo esencial: que un entrenador cree una rutina maestra y la asigne a decenas de clientes en segundos, y que cada cliente reciba su plan en el teléfono y registre sus entrenos en tiempo real. Sobre esa base construimos el resto: análisis de progreso con mapas corporales y gráficas de volumen, manejo de membresías y un radar de retención que avisa cuando alguien lleva días sin entrenar.",
            "Hoy la plataforma acumula más de 10 000 series registradas y más de 500 clientes activos, y la operamos como producto vivo: cada versión se publica, se mide con uso real y se corrige. Ese ciclo corto — idea, código, feedback — es el mismo que aplicamos a los proyectos de nuestros clientes.",
          ],
          vision: [
            "Queremos que un entrenador independiente pueda operar como un negocio serio sin contratar administración: que sepa quién está a punto de abandonar antes de que pase, que demuestre con datos el valor de su programación y que su marca se vea profesional frente a cada cliente. Hacia allá sigue creciendo PrimeFit.",
          ],
          difference: [
            {
              title: "Producto propio, no un encargo",
              body: "PrimeFit es nuestro: lo usamos, lo operamos y respondemos por él todos los días. Esa exigencia — vivir con las consecuencias de cada decisión técnica — no la da un proveedor externo.",
            },
            {
              title: "De principio a fin",
              body: "Diseño, desarrollo, infraestructura y soporte salen del mismo lugar. No hay traducción entre quien entiende el problema del coach y quien escribe el código.",
            },
            {
              title: "Hecho para la región",
              body: "En español desde el primer día y pensado para la forma real de trabajar de coaches y gimnasios latinoamericanos, no una traducción de un producto de otro mercado.",
            },
          ],
        },
        dask: {
          title: "Caso de estudio: Dask",
          metaDescription:
            "La historia detrás de Dask, el software de gestión para academias de baile que construimos y operamos: el problema, el proceso y la visión.",
          tagline: "Gestión con total claridad para academias de baile",
          intro:
            "Dask es un producto propio de Qora: la plataforma donde una academia de baile administra inscripciones, cobros y comunicación con sus estudiantes — y además obtiene su propio sitio público con su dominio y sus colores.",
          story: [
            "Las academias de baile son negocios de personas: grupos que cambian, estudiantes que entran y salen, mensualidades que hay que perseguir. Casi todas llevan esa operación en hojas de cálculo y chats — con comprobantes de pago perdidos en WhatsApp — y el costo es silencioso: horas de administración, pagos que se traspapelan y cobros incómodos que desgastan la relación con el estudiante.",
            "Dask nace de una convicción simple: enseñar a bailar es el talento de la academia; cobrar y administrar no deberían robarle el tiempo. Así que construimos el sistema alrededor de cómo funciona una academia real, no un software genérico de clases forzado a ese mundo.",
          ],
          process: [
            "Empezamos por el dinero, que es donde más duele: cada pago queda registrado y verificado — efectivo, transferencia o SINPE con comprobante — con estados claros y un panel donde se ve de un vistazo quién está al día y quién debe. Alrededor construimos el control de acceso, donde la academia decide quién entra, y paneles separados para administración y estudiantes.",
            "Después llevamos Dask más allá de la gestión: cada academia — y también cada instructor independiente — obtiene su propio sitio público en su subdominio, con plantillas diseñadas para el mundo del baile, reserva de clases y su identidad visual. La administración y la presencia en línea dejan de ser dos sistemas separados.",
          ],
          vision: [
            "Queremos devolverle tiempo a la gente que enseña: que dirigir una academia no exija ser también administrador de tiempo completo. La meta es que cualquier academia opere con el orden de un negocio grande — pagos claros, datos al día, presencia profesional en línea — sin perder la cercanía que la hace especial.",
          ],
          difference: [
            {
              title: "Producto propio",
              body: "Dask es nuestro y lo operamos nosotros. Cuando una academia necesita algo, no hay tickets con un proveedor: la mejora sale del mismo equipo que construyó el sistema.",
            },
            {
              title: "A la medida del problema",
              body: "No adaptamos una plantilla genérica: el flujo de una academia — grupos, mensualidades, comprobantes, aprobaciones — está construido desde cero, incluyendo cómo se paga realmente en la región.",
            },
            {
              title: "Gestión y presencia juntas",
              body: "El panel interno y el sitio público de la academia salen de la misma plataforma y del mismo responsable, del primer boceto al soporte.",
            },
          ],
        },
      },
    },
    about: {
      eyebrow: "Quiénes somos",
      heading: "Hola, soy Diego.",
      body: "Soy Diego Carvajal, desarrollador y fundador de Qora. Desde {year} diseño y construyo productos digitales: primero sitios web para negocios locales, y hoy también productos propios como PrimeFit (gestión para gimnasios y coaches) y Dask (gestión para academias de baile). Trabajo directo, sin intermediarios: la persona que entiende tu problema es la misma que escribe el código. Si tu negocio necesita un sitio web serio o una herramienta a medida, hablemos.",
      imageAlt: "Diego Carvajal, fundador de Qora",
      linkedin: "Ver perfil en LinkedIn",
      cards: [
        {
          title: "Productos propios",
          body: "PrimeFit y Dask son productos que opero y mantengo. Lo que recomiendo a mis clientes es lo mismo que uso todos los días.",
        },
        {
          title: "De la idea al lanzamiento",
          body: "Diseño, desarrollo, publicación y mantenimiento. Un solo responsable durante todo el proyecto.",
        },
      ],
    },
    contact: {
      heading: "Hablemos de tu proyecto",
      name: "Nombre",
      namePlaceholder: "Escribe tu nombre",
      lastName: "Apellido",
      lastNamePlaceholder: "Escribe tu apellido",
      email: "Correo electrónico",
      emailPlaceholder: "Escribe tu correo",
      phone: "Teléfono",
      phoneOptional: "opcional",
      phonePlaceholder: "Escribe tu teléfono",
      message: "Mensaje",
      messagePlaceholder: "Cuéntanos qué necesitas",
      submit: "Enviar mensaje",
      success: "¡Mensaje enviado! Te respondemos pronto.",
      error: "Algo salió mal. Inténtalo de nuevo.",
      networkError: "No se pudo enviar el mensaje. Inténtalo de nuevo.",
    },
    footer: {
      tagline:
        "Convierte tu idea en un producto digital que funciona, desde el diseño hasta el lanzamiento.",
      cta: "Trabajemos juntos",
      copyright: "Todos los derechos reservados.",
      terms: "Términos del servicio",
      privacy: "Política de privacidad",
    },
    notFound: {
      title: "404 — Página no encontrada",
      message: "Esta página no existe o cambió de dirección.",
      button: "Volver al inicio",
    },
    allServices: {
      title: "Servicios",
      heading: "Servicios y soluciones digitales",
      intro:
        "Nuestro fuerte es la experiencia de usuario: diseñamos productos que la gente entiende a la primera, y los construimos de principio a fin — desde un sitio hasta una plataforma completa.",
      heroCtaPrimary: "Hablemos",
      heroCtaSecondary: "Ver proyectos",
      services: [
        {
          title: "Diseño web",
          description:
            "Diseño centrado en las personas, que equilibra estética y funcionalidad para que tu sitio se vea bien y se use mejor.",
          imageAlt: "Boceto de una interfaz web en proceso de diseño",
        },
        {
          title: "Desarrollo web",
          description:
            "Sitios construidos a medida con tecnología actual, pensados para cargar rápido y ser fáciles de mantener.",
          imageAlt: "Código de una página web en un editor",
        },
        {
          title: "Desarrollo SaaS",
          description:
            "Plataformas que crecen contigo: arquitectura sólida, gestión de usuarios y seguridad desde el primer día.",
          imageAlt: "Panel de administración de una plataforma SaaS",
        },
      ],
      projectsEyebrow: "Portafolio",
      projectsHeading: "Proyectos que puedes visitar hoy",
      projectsIntro:
        "No son maquetas ni conceptos: cada proyecto está en producción, con gente real usándolo. Haz clic y compruébalo.",
      ownProductsLabel: "Productos propios",
      sitesLabel: "Sitios que construimos",
      sites: {
        agromig: {
          description: "Rebranding y landing para exportación agrícola.",
          imageAlt: "Sitio web de Hacienda Agromig",
        },
        indigo: {
          description: "Landing para una exportadora agrícola.",
          imageAlt: "Sitio web de Indigo Export Co",
        },
        saborcallejero: {
          description: "Sitio con menú y pedidos para una pizzería local.",
          imageAlt: "Sitio web de Sabor Callejero",
        },
        ajmn: {
          description: "Portafolio de un arquitecto en Puntarenas.",
          imageAlt: "Sitio web del arquitecto AJ-MN",
        },
        catadores: {
          description: "Sitio para una serie de YouTube con ranking gastronómico.",
          imageAlt: "Sitio web de Catadores de Cantonés",
        },
      },
      uxEyebrow: "Nuestro fuerte",
      uxHeading: "La experiencia de usuario, primero",
      uxBody:
        "Antes de escribir código entendemos cómo piensa la persona que va a usar el producto. Interfaces claras, recorridos sin fricción y decisiones respaldadas por uso real: eso es lo que hace que un sitio convierta y que una plataforma retenga.",
      uxCards: [
        {
          title: "Accesibilidad",
          body: "Sitios conformes con WCAG, para que cualquier persona pueda usarlos.",
        },
        {
          title: "Rendimiento",
          body: "Optimización de carga y respuesta, porque cada segundo cuesta visitas.",
        },
      ],
      testimonialsHeading: "Lo que dicen nuestros clientes",
      testimonials: [
        {
          quote:
            "La landing page mejoró mucho nuestra presencia en línea y aumentó la interacción con clientes en un 80%.",
          name: "Miledy Molla",
          company: "Indigo Export Co",
        },
        {
          quote:
            "Nuestra nueva landing page duplicó la generación de prospectos y mejoró bastante la visibilidad de la marca.",
          name: "Greivin Carvajal",
          company: "Hacienda Agromig",
        },
        {
          quote:
            "La plataforma SaaS de entrenamiento transformó nuestras métricas de rendimiento y redujo el tiempo de control en un 65%.",
          name: "Christian Ulloa",
          company: "Cumba's Gym",
        },
      ],
    },
    marketingWebsites: {
      title: "Sitios web",
      heading: "Sitios web que trabajan para tu negocio",
      intro:
        "Un sitio no es un folleto: es tu mejor vendedor trabajando a toda hora. Diseñamos y construimos sitios que explican con claridad lo que haces y convierten visitas en consultas.",
      features: [
        {
          title: "Diseño a medida",
          description:
            "Nada de plantillas genéricas. Diseñamos en Figma sobre tu marca y tu contenido real, y lo revisamos contigo antes de escribir una línea de código.",
          imageAlt: "Diseño de una interfaz en Figma",
        },
        {
          title: "Rendimiento y SEO",
          description:
            "Sitios que cargan rápido en datos móviles y que Google entiende: estructura semántica, metadatos correctos y buenas puntuaciones desde el primer día.",
          imageAlt: "Métricas de rendimiento de un sitio web",
        },
        {
          title: "Contenido que se entiende",
          description:
            "Te ayudamos a ordenar el mensaje: qué ofreces, para quién y qué debe hacer quien llega. Sin relleno ni palabras de moda.",
          imageAlt: "Redacción de contenido para un sitio web",
        },
      ],
      projectsHeading: "Sitios que hemos construido",
      projectsIntro:
        "Todos están en línea. Visítalos y juzga el trabajo por ti mismo.",
      processHeading: "Cómo trabajamos",
      process: [
        {
          title: "Entender",
          body: "Conversamos sobre tu negocio, a quién le vendes y qué necesitas que pase cuando alguien llega a tu sitio.",
        },
        {
          title: "Diseñar",
          body: "Diseñamos las pantallas y te las mostramos antes de programar. Los cambios se hacen aquí, donde son baratos.",
        },
        {
          title: "Construir",
          body: "Programamos el sitio a medida, con atención al rendimiento y a que funcione bien en teléfono.",
        },
        {
          title: "Publicar",
          body: "Probamos en distintos dispositivos, publicamos y quedamos disponibles para los ajustes que aparezcan.",
        },
      ],
      ctaHeading: "¿Listo para renovar tu sitio?",
      ctaBody:
        "Cuéntanos qué necesita tu negocio y te decimos con honestidad qué haríamos y cuánto toma.",
      ctaButton: "Hablemos",
    },
    webApplications: {
      title: "Aplicaciones web",
      heading: "Aplicaciones web a la medida de tu operación",
      intro:
        "Cuando las hojas de cálculo se quedan cortas y ningún software del mercado encaja, construimos la herramienta que tu negocio necesita — y la mantenemos funcionando.",
      features: [
        {
          title: "Diseñado para tu flujo",
          description:
            "Partimos de cómo trabaja tu equipo hoy, no de cómo debería trabajar para que le sirva a un software. La herramienta se adapta a la operación.",
          imageAlt: "Diagrama del flujo de trabajo de una aplicación",
        },
        {
          title: "Seguridad y escala",
          description:
            "Roles y permisos claros, datos protegidos y una arquitectura que aguanta el crecimiento sin tener que empezar de nuevo.",
          imageAlt: "Panel de control de seguridad de una aplicación",
        },
        {
          title: "Bases sólidas",
          description:
            "Construimos sobre Supabase y Postgres: autenticación lista, permisos a nivel de fila y respaldos. Tecnología probada, no experimentos.",
          imageAlt: "Logotipo de Supabase",
        },
      ],
      projectsHeading: "Plataformas que construimos y operamos",
      projectsIntro:
        "Son productos propios: los mantenemos todos los días, con clientes reales usándolos.",
      processHeading: "Cómo trabajamos",
      process: [
        {
          title: "Entender",
          body: "Mapeamos cómo funciona hoy tu operación y dónde se pierde el tiempo. Sin eso, cualquier herramienta es un tiro al aire.",
        },
        {
          title: "Construir lo esencial",
          body: "Empezamos por el flujo que más duele y lo ponemos a funcionar pronto, en vez de desaparecer seis meses.",
        },
        {
          title: "Probar con uso real",
          body: "Tu equipo usa la herramienta y nos dice qué estorba. Corregimos con datos, no con suposiciones.",
        },
        {
          title: "Operar y crecer",
          body: "Publicamos, monitoreamos y seguimos añadiendo lo que el negocio vaya necesitando.",
        },
      ],
      ctaHeading: "¿Tienes un proceso que da problemas?",
      ctaBody:
        "Si tu operación vive en hojas de cálculo y mensajes sueltos, hay una herramienta esperando a ser construida. Cuéntanos el problema.",
      ctaButton: "Hablemos",
    },
  },
  en: {
    meta: {
      defaultTitle: "Qora — Custom Web & SaaS Development",
      description:
        "Web development studio. We build custom SaaS products and websites — like PrimeFit and Dask — for businesses that want to run better online.",
    },
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      cta: "Let's Talk",
      switchLanguage: "View this site in Spanish",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      lead: "Custom",
      display: "Websites",
      accent: "& Software",
      paragraph:
        "We design and build websites and platforms that take the daily grind out of running your business. You work directly with the person writing the code: no middlemen.",
      button: "See our work",
      pills: ["UI/UX Design", "Search Engine Optimization (SEO)", "Development"],
    },
    services: {
      heading: "What we do",
      cta: "All services",
      items: [
        {
          category: "Marketing Websites",
          title: "Web Design & Development",
          description:
            "Fast, low-maintenance websites built to present your business clearly and turn visits into inquiries. We handle the whole process: design, content, performance, and launch.",
        },
        {
          category: "Web Applications",
          title: "Custom SaaS Development",
          description:
            "We build custom web applications for when templates stop being enough: admin panels, memberships, payments, and reporting. Products like PrimeFit and Dask started this way.",
        },
      ],
      cardLink: "Go to",
    },
    projects: {
      eyebrow: "Portfolio",
      heading: "Products we build and run.",
      intro:
        "Not mockups or concepts: these are platforms in production, with real customers using them every day.",
      viewAll: "See more",
      readCase: "Read the full case",
      outcomeLabel: "Outcome",
      cases: {
        primefit: {
          tag: "SaaS · Gyms & coaches",
          whatItIs:
            "A management platform for gyms and independent coaches: training plans, client tracking, and billing in one place.",
          forWhom:
            "Built for Spanish-speaking coaches and gyms that want to retain clients with data, not guesswork.",
          outcome: "150% growth in monthly subscriptions since launch.",
          cta: "Visit primefit.coach",
        },
        dask: {
          tag: "SaaS · Dance academies",
          whatItIs:
            "Management software for dance academies: groups, attendance, monthly billing, and student communication, with total clarity.",
          forWhom:
            "For academies running their operations on spreadsheets and chat threads, who need order without overhead.",
          outcome: "3 active academies and over 150 students managed.",
          cta: "Visit getdask.com",
        },
      },
    },
    caseStudy: {
      eyebrow: "Case study",
      backLabel: "Back to projects",
      storyHeading: "The story",
      processHeading: "The process",
      galleryAlt: "Screenshot of",
      visionHeading: "Our vision",
      differenceHeading: "What makes it different",
      ctaHeading: "Need something like this for your business?",
      ctaBody:
        "We build tools shaped around real problems. Tell us about yours and we'll tell you, honestly, whether we can help.",
      ctaButton: "Let's talk",
      nextCaseLabel: "Next project",
      cases: {
        primefit: {
          title: "Case study: PrimeFit",
          metaDescription:
            "The story behind PrimeFit, the management platform for gyms and coaches we build and run: the problem, the process, and the vision.",
          tagline: "Sports intelligence for gyms and coaches",
          intro:
            "PrimeFit is Qora's own product: the platform where coaches and gyms centralize training plans, client tracking, and memberships so they can spend their time training people, not running admin.",
          story: [
            "PrimeFit didn't start as a client project: it started as a problem we kept seeing in gyms and independent coaches. The coach masters the training, but the operation lives scattered across spreadsheets, static PDFs, and chat threads: routines get lost, clients plateau without anyone noticing, and hours go to admin that should go to the gym floor.",
            "The real cost of that mess is retention: a member who feels ignored doesn't complain — they just stop showing up. We built the tool that attacks that problem at the root, in Spanish, designed around how coaches in Latin America actually work.",
          ],
          process: [
            "We started with the essential flow: a trainer creates a master routine and assigns it to dozens of clients in seconds, and every client gets their plan on their phone and logs workouts in real time. On that base we built the rest: progress analytics with body heatmaps and volume charts, membership management, and a retention radar that raises an alert when someone hasn't trained for days.",
            "Today the platform has logged over 10,000 sets across more than 500 active clients, and we run it as a living product: every release ships, gets measured against real usage, and gets corrected. That short loop — idea, code, feedback — is the same one we apply to client projects.",
          ],
          vision: [
            "We want an independent coach to be able to run a serious business without hiring an office: to know who is about to churn before it happens, to prove the value of their programming with data, and to look professional in front of every client. That is the direction PrimeFit keeps growing in.",
          ],
          difference: [
            {
              title: "Our own product, not a commission",
              body: "PrimeFit is ours: we use it, we run it, and we answer for it every day. That standard — living with the consequences of every technical decision — is not something an outside vendor carries.",
            },
            {
              title: "End to end",
              body: "Design, development, infrastructure, and support come from the same place. Nothing gets lost in translation between the person who understands the coach's problem and the person writing the code.",
            },
            {
              title: "Built for the region",
              body: "In Spanish from day one and designed around how Latin American coaches and gyms actually work — not a translated product from another market.",
            },
          ],
        },
        dask: {
          title: "Case study: Dask",
          metaDescription:
            "The story behind Dask, the management software for dance academies we build and run: the problem, the process, and the vision.",
          tagline: "Total clarity for dance academy management",
          intro:
            "Dask is Qora's own product: the platform where a dance academy manages enrollment, billing, and student communication — and gets its own public site with its own domain and colors.",
          story: [
            "Dance academies are businesses made of people: groups that change, students who come and go, monthly fees that need chasing. Almost all of them run that operation on spreadsheets and chats — payment receipts lost in WhatsApp — and the cost is silent: admin hours, payments that slip through, and awkward collection talks that wear down the relationship with the student.",
            "Dask was born from a simple conviction: teaching people to dance is the academy's talent; billing and admin shouldn't steal its time. So we built the system around how a real academy works, not a generic class-management tool forced onto that world.",
          ],
          process: [
            "We started with the money, where it hurts most: every payment gets recorded and verified — cash, bank transfer, or SINPE with a receipt — with clear statuses and a panel that shows at a glance who is current and who owes. Around that we built admission control, where the academy decides who gets in, and separate dashboards for admins and students.",
            "Then we took Dask beyond management: every academy — and every independent instructor — gets its own public site on its own subdomain, with templates designed for the dance world, class booking, and its own visual identity. Administration and online presence stop being two separate systems.",
          ],
          vision: [
            "We want to give time back to the people who teach: running an academy shouldn't require being a full-time administrator too. The goal is for any academy to operate with the order of a big business — clear payments, data up to date, a professional online presence — without losing the closeness that makes it special.",
          ],
          difference: [
            {
              title: "Our own product",
              body: "Dask is ours and we run it ourselves. When an academy needs something, there are no tickets with a vendor: the improvement comes from the same team that built the system.",
            },
            {
              title: "Shaped to the problem",
              body: "We didn't adapt a generic template: an academy's flow — groups, monthly fees, receipts, approvals — is built from scratch, including how people in the region actually pay.",
            },
            {
              title: "Management and presence together",
              body: "The internal panel and the academy's public site come from the same platform and the same person accountable, from first sketch to support.",
            },
          ],
        },
      },
    },
    about: {
      eyebrow: "About",
      heading: "Hi, I'm Diego.",
      body: "I'm Diego Carvajal, developer and founder of Qora. Since {year} I've been designing and building digital products: first websites for local businesses, and now also my own products, PrimeFit (management for gyms and coaches) and Dask (management for dance academies). You work directly with me: the person who understands your problem is the same one writing the code. If your business needs a serious website or a custom tool, let's talk.",
      imageAlt: "Diego Carvajal, founder of Qora",
      linkedin: "View LinkedIn profile",
      cards: [
        {
          title: "Products I run",
          body: "PrimeFit and Dask are products I operate and maintain. What I recommend to clients is what I use every day.",
        },
        {
          title: "From idea to launch",
          body: "Design, development, deployment, and maintenance. One person accountable for the whole project.",
        },
      ],
    },
    contact: {
      heading: "Tell us about your project",
      name: "First name",
      namePlaceholder: "Enter your first name",
      lastName: "Last name",
      lastNamePlaceholder: "Enter your last name",
      email: "Email",
      emailPlaceholder: "Enter your email",
      phone: "Phone",
      phoneOptional: "optional",
      phonePlaceholder: "Enter your phone number",
      message: "Message",
      messagePlaceholder: "Tell us what you need",
      submit: "Send message",
      success: "Message sent. We'll get back to you shortly.",
      error: "Something went wrong. Please try again.",
      networkError: "The message could not be sent. Please try again.",
    },
    footer: {
      tagline:
        "Turn your idea into a digital product that works, from design through launch.",
      cta: "Let's Work Together",
      copyright: "All rights reserved.",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
    },
    notFound: {
      title: "404 — Page not found",
      message: "This page doesn't exist, or it moved somewhere else.",
      button: "Return home",
    },
    allServices: {
      title: "Services",
      heading: "Digital services and solutions",
      intro:
        "User experience is what we're best at: we design products people understand on the first try, and build them end to end — from a single site to a full platform.",
      heroCtaPrimary: "Let's talk",
      heroCtaSecondary: "See the work",
      services: [
        {
          title: "Web Design",
          description:
            "People-first design that balances looks and function, so your site reads well and works better.",
          imageAlt: "Sketch of a web interface being designed",
        },
        {
          title: "Web Development",
          description:
            "Custom-built sites on current technology, made to load fast and stay easy to maintain.",
          imageAlt: "Web page code in an editor",
        },
        {
          title: "SaaS Development",
          description:
            "Platforms that grow with you: solid architecture, user management, and security from day one.",
          imageAlt: "Admin dashboard of a SaaS platform",
        },
      ],
      projectsEyebrow: "Portfolio",
      projectsHeading: "Projects you can visit today",
      projectsIntro:
        "Not mockups or concepts: every project is in production, with real people using it. Click through and see for yourself.",
      ownProductsLabel: "Our own products",
      sitesLabel: "Websites we built",
      sites: {
        agromig: {
          description: "Rebranding and landing page for an agricultural exporter.",
          imageAlt: "Hacienda Agromig website",
        },
        indigo: {
          description: "Landing page for an agricultural export company.",
          imageAlt: "Indigo Export Co website",
        },
        saborcallejero: {
          description: "Website with menu and ordering for a local pizzeria.",
          imageAlt: "Sabor Callejero website",
        },
        ajmn: {
          description: "Portfolio for an architect in Puntarenas.",
          imageAlt: "Website of architect AJ-MN",
        },
        catadores: {
          description: "Website for a YouTube series ranking local food.",
          imageAlt: "Catadores de Cantonés website",
        },
      },
      uxEyebrow: "What we're best at",
      uxHeading: "User experience, first",
      uxBody:
        "Before we write code we work out how the person using the product thinks. Clear interfaces, journeys without friction, and decisions backed by real usage: that is what makes a site convert and a platform retain.",
      uxCards: [
        {
          title: "Accessibility",
          body: "WCAG-compliant sites, so anyone can use what we build.",
        },
        {
          title: "Performance",
          body: "Load and response times tuned, because every second costs visits.",
        },
      ],
      testimonialsHeading: "What our clients say",
      testimonials: [
        {
          quote:
            "The landing page significantly improved our online presence and increased customer engagement by 80%.",
          name: "Miledy Molla",
          company: "Indigo Export Co",
        },
        {
          quote:
            "Our new landing page doubled our lead generation and improved our brand visibility substantially.",
          name: "Greivin Carvajal",
          company: "Hacienda Agromig",
        },
        {
          quote:
            "The training SaaS platform has transformed our performance metrics and reduced control time investment by 65%.",
          name: "Christian Ulloa",
          company: "Cumba's Gym",
        },
      ],
    },
    marketingWebsites: {
      title: "Websites",
      heading: "Websites that work for your business",
      intro:
        "A website isn't a brochure: it's your best salesperson working around the clock. We design and build sites that explain clearly what you do and turn visits into inquiries.",
      features: [
        {
          title: "Custom design",
          description:
            "No generic templates. We design in Figma around your brand and your real content, and review it with you before writing a line of code.",
          imageAlt: "Designing an interface in Figma",
        },
        {
          title: "Performance and SEO",
          description:
            "Sites that load fast on mobile data and that Google understands: semantic structure, correct metadata, and good scores from day one.",
          imageAlt: "Performance metrics for a website",
        },
        {
          title: "Content that lands",
          description:
            "We help you get the message straight: what you offer, who it's for, and what a visitor should do next. No filler, no buzzwords.",
          imageAlt: "Writing content for a website",
        },
      ],
      projectsHeading: "Websites we've built",
      projectsIntro:
        "They're all online. Visit them and judge the work for yourself.",
      processHeading: "How we work",
      process: [
        {
          title: "Understand",
          body: "We talk through your business, who you sell to, and what should happen when someone lands on your site.",
        },
        {
          title: "Design",
          body: "We design the screens and show them to you before writing code. Changes happen here, where they're cheap.",
        },
        {
          title: "Build",
          body: "We build the site to measure, with an eye on performance and on it working properly on a phone.",
        },
        {
          title: "Launch",
          body: "We test across devices, publish, and stay available for the adjustments that come up.",
        },
      ],
      ctaHeading: "Ready to rebuild your site?",
      ctaBody:
        "Tell us what your business needs and we'll tell you honestly what we'd do and how long it takes.",
      ctaButton: "Let's talk",
    },
    webApplications: {
      title: "Web applications",
      heading: "Web applications shaped around your operation",
      intro:
        "When spreadsheets stop being enough and no off-the-shelf software fits, we build the tool your business actually needs — and keep it running.",
      features: [
        {
          title: "Built around your workflow",
          description:
            "We start from how your team works today, not from how it would have to work to suit a piece of software. The tool adapts to the operation.",
          imageAlt: "Diagram of an application workflow",
        },
        {
          title: "Security and scale",
          description:
            "Clear roles and permissions, protected data, and an architecture that handles growth without starting over.",
          imageAlt: "Security dashboard of an application",
        },
        {
          title: "Solid foundations",
          description:
            "We build on Supabase and Postgres: authentication ready, row-level permissions, and backups. Proven technology, not experiments.",
          imageAlt: "Supabase logo",
        },
      ],
      projectsHeading: "Platforms we build and run",
      projectsIntro:
        "These are our own products: we maintain them every day, with real customers using them.",
      processHeading: "How we work",
      process: [
        {
          title: "Understand",
          body: "We map how your operation runs today and where the time goes. Without that, any tool is a shot in the dark.",
        },
        {
          title: "Build the core",
          body: "We start with the flow that hurts most and get it working early, instead of disappearing for six months.",
        },
        {
          title: "Test with real use",
          body: "Your team uses the tool and tells us what gets in the way. We fix based on data, not assumptions.",
        },
        {
          title: "Run and grow",
          body: "We deploy, monitor, and keep adding whatever the business turns out to need.",
        },
      ],
      ctaHeading: "Got a process that keeps breaking?",
      ctaBody:
        "If your operation lives in spreadsheets and scattered messages, there's a tool waiting to be built. Tell us about the problem.",
      ctaButton: "Let's talk",
    },
  },
} as const satisfies Record<Lang, Dictionary>;
