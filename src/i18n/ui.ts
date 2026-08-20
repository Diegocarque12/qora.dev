export const languages = {
  es: "Español",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "es";

interface Dictionary {
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
  },
} as const satisfies Record<Lang, Dictionary>;
