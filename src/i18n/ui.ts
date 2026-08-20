import type { CaseStudyId } from "@/config/caseStudies";

export const languages = {
  es: "Español",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "es";

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
    blog: string;
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
    services: readonly {
      readonly title: string;
      readonly description: string;
      readonly imageAlt: string;
    }[];
    expertiseHeading: string;
    expertise: readonly {
      readonly title: string;
      readonly description: string;
    }[];
    featuredHeading: string;
    featured: readonly {
      readonly title: string;
      readonly outcome: string;
      readonly imageAlt: string;
    }[];
    visitSite: string;
    testimonialsHeading: string;
    testimonials: readonly {
      readonly quote: string;
      readonly name: string;
      readonly company: string;
    }[];
  };
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
      blog: "Blog",
      cta: "Hablemos",
      switchLanguage: "Ver el sitio en inglés",
      openMenu: "Abrir el menú",
      closeMenu: "Cerrar el menú",
    },
    hero: {
      lead: "Agencia",
      display: "Digital",
      accent: "Creativa",
      paragraph:
        "En Qora diseñamos y desarrollamos productos digitales de principio a fin: sitios web que convierten y plataformas SaaS que resuelven la operación diaria de tu negocio.",
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
          cta: "Ver getdask.com",
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
        "Desde el diseño de un sitio hasta una plataforma completa: esto es lo que podemos construir contigo.",
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
      expertiseHeading: "En qué somos fuertes",
      expertise: [
        {
          title: "Diseño UI/UX",
          description:
            "Interfaces claras y recorridos que la gente entiende sin tener que pensarlo.",
        },
        {
          title: "Accesibilidad",
          description:
            "Sitios conformes con WCAG, para que cualquier persona pueda usarlos.",
        },
        {
          title: "Rendimiento",
          description:
            "Optimización de carga y respuesta, porque cada segundo cuesta visitas.",
        },
      ],
      featuredHeading: "Proyectos destacados",
      featured: [
        {
          title: "Diseño completo de landing page",
          outcome: "200% de aumento en interacción de usuarios",
          imageAlt: "Landing page de Indigo Export Co",
        },
        {
          title: "Rebranding y landing page",
          outcome: "150% de aumento en la tasa de conversión",
          imageAlt: "Landing page de Hacienda Agromig",
        },
        {
          title: "Plataforma SaaS",
          outcome: "150% de crecimiento en suscripciones mensuales",
          imageAlt: "Plataforma SaaS de PrimeFit",
        },
      ],
      visitSite: "Ver sitio",
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
      blog: "Blog",
      cta: "Let's Talk",
      switchLanguage: "View this site in Spanish",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      lead: "Creative",
      display: "Digital",
      accent: "Agency",
      paragraph:
        "At Qora we design and build digital products end to end: websites that convert and SaaS platforms that take the daily grind out of running your business.",
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
          cta: "Visit getdask.com",
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
        "From designing a single site to building a full platform: this is what we can build with you.",
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
      expertiseHeading: "What we're good at",
      expertise: [
        {
          title: "UI/UX Design",
          description:
            "Clear interfaces and journeys people understand without having to think about them.",
        },
        {
          title: "Accessibility",
          description:
            "WCAG-compliant sites, so anyone can use what we build.",
        },
        {
          title: "Performance",
          description:
            "Load and response times tuned, because every second costs visits.",
        },
      ],
      featuredHeading: "Featured projects",
      featured: [
        {
          title: "Complete landing page design",
          outcome: "200% increase in user engagement",
          imageAlt: "Indigo Export Co landing page",
        },
        {
          title: "Rebranding and landing page",
          outcome: "150% increase in conversion rate",
          imageAlt: "Hacienda Agromig landing page",
        },
        {
          title: "SaaS platform",
          outcome: "150% growth in monthly subscriptions",
          imageAlt: "PrimeFit SaaS platform",
        },
      ],
      visitSite: "Visit site",
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
  },
} as const satisfies Record<Lang, Dictionary>;
