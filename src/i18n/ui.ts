export const languages = {
  en: "English",
  es: "Español",
  it: "Italiano",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

export const langPath = (lang: Lang) =>
  lang === defaultLang ? "/" : `/${lang}/`;

const en = {
  meta: {
    title: "Gianpiero Leon Palma — Full Stack Developer",
    description:
      "Portfolio of Gianpiero Leon Palma, Full Stack Developer. Modern web applications, from interface to infrastructure.",
  },
  nav: {
    expertise: "Expertise",
    projects: "Projects",
    about: "About",
    contact: "Contact",
    cta: "Let's talk",
  },
  hero: {
    badge: "Available for new projects",
    role: "Full Stack Developer.",
    intro:
      "I design and build modern web applications, from interface to infrastructure: clean code, performance, and products that work.",
    ctaProjects: "View projects",
    ctaContact: "Contact me",
    photoAlt: "Portrait of Gianpiero Leon Palma",
  },
  expertise: {
    eyebrow: "What I do",
    heading: "My expertise",
    areas: [
      {
        number: "01",
        title: "Web Development",
        subtitle: "Frontend & Full Stack",
        description:
          "Fast, accessible interfaces with React, Next.js and Astro. I take care of the design system, animations and every detail of the user experience.",
        tags: ["React", "Next.js", "Astro", "TypeScript"],
      },
      {
        number: "02",
        title: "Backend & API",
        subtitle: "Solid architectures",
        description:
          "REST and GraphQL APIs, authentication, relational and NoSQL databases. Infrastructures that scale and stay easy to maintain.",
        tags: ["Node.js", "NestJS", "PostgreSQL", "Prisma"],
      },
      {
        number: "03",
        title: "DevOps & Cloud",
        subtitle: "From development to deploy",
        description:
          "Containerization with Docker, CI/CD and cloud deployment. Monitoring and automation to keep everything running 24/7.",
        tags: ["Docker", "AWS", "CI/CD", "Linux"],
      },
    ],
  },
  projects: {
    eyebrow: "Portfolio",
    heading: "Selected projects",
    blurb:
      "A selection of recent work: web, mobile and API projects. Every project is built for real users.",
  },
  quote: {
    text: "Quality is not an act, it is a habit.",
    author: "Aristotle",
  },
  about: {
    eyebrow: "About me",
    heading: "Hi, I'm Gianpiero",
    p1: {
      pre: "I'm a ",
      role: "Full Stack Developer",
      post: " and I take care of the entire product life cycle: from the idea, to the interface, to the production deployment.",
    },
    p2: "I'm passionate about turning complex problems into simple experiences. I believe in clean code, tests, and technical choices that keep a project maintainable over time.",
    stats: [
      { value: "5+", label: "Years of experience" },
      { value: "40+", label: "Completed projects" },
      { value: "20+", label: "Happy clients" },
    ],
  },
  contact: {
    eyebrow: "Contact",
    heading1: "Have a project",
    heading2: "in mind?",
    blurb:
      "I'm available for freelance projects, collaborations and new opportunities. Write me and let's talk.",
  },
  footer: {
    copyright: "Gianpiero Leon Palma",
  },
};

export const ui = {
  en,
  es: {
    meta: {
      title: "Gianpiero Leon Palma — Desarrollador Full Stack",
      description:
        "Portafolio de Gianpiero Leon Palma, Desarrollador Full Stack. Aplicaciones web modernas, de la interfaz a la infraestructura.",
    },
    nav: {
      expertise: "Especialidades",
      projects: "Proyectos",
      about: "Sobre mí",
      contact: "Contacto",
      cta: "Hablemos",
    },
    hero: {
      badge: "Disponible para nuevos proyectos",
      role: "Desarrollador Full Stack.",
      intro:
        "Diseño y desarrollo aplicaciones web modernas, de la interfaz a la infraestructura: código limpio, rendimiento y productos que funcionan.",
      ctaProjects: "Ver proyectos",
      ctaContact: "Contáctame",
      photoAlt: "Retrato de Gianpiero Leon Palma",
    },
    expertise: {
      eyebrow: "Lo que hago",
      heading: "Mis especialidades",
      areas: [
        {
          number: "01",
          title: "Desarrollo Web",
          subtitle: "Frontend & Full Stack",
          description:
            "Interfaces rápidas y accesibles con React, Next.js y Astro. Cuido el design system, las animaciones y cada detalle de la experiencia de usuario.",
          tags: ["React", "Next.js", "Astro", "TypeScript"],
        },
        {
          number: "02",
          title: "Backend y API",
          subtitle: "Arquitecturas sólidas",
          description:
            "APIs REST y GraphQL, autenticación, bases de datos relacionales y NoSQL. Infraestructuras que escalan y se mantienen fácilmente.",
          tags: ["Node.js", "NestJS", "PostgreSQL", "Prisma"],
        },
        {
          number: "03",
          title: "DevOps y Cloud",
          subtitle: "Del desarrollo al deploy",
          description:
            "Contenerización con Docker, CI/CD y despliegue en la nube. Monitoreo y automatización para mantener todo operativo 24/7.",
          tags: ["Docker", "AWS", "CI/CD", "Linux"],
        },
      ],
    },
    projects: {
      eyebrow: "Portafolio",
      heading: "Proyectos seleccionados",
      blurb:
        "Una selección de trabajos recientes: aplicaciones web, móviles y APIs. Cada proyecto está construido para usuarios reales.",
    },
    quote: {
      text: "La calidad no es un acto, es un hábito.",
      author: "Aristóteles",
    },
    about: {
      eyebrow: "Sobre mí",
      heading: "Hola, soy Gianpiero",
      p1: {
      pre: "Soy ",
      role: "Desarrollador Full Stack",
      post: " y me ocupo de todo el ciclo de vida de un producto digital: de la idea, a la interfaz, hasta el despliegue en producción.",
    },
      p2: "Me apasiona transformar problemas complejos en experiencias simples. Creo en el código limpio, las pruebas y las decisiones técnicas que hacen un proyecto mantenible con el tiempo.",
      stats: [
        { value: "5+", label: "Años de experiencia" },
        { value: "40+", label: "Proyectos completados" },
        { value: "20+", label: "Clientes satisfechos" },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      heading1: "¿Tienes un proyecto",
      heading2: "en mente?",
      blurb:
        "Estoy disponible para proyectos freelance, colaboraciones y nuevas oportunidades. Escríbeme y hablemos.",
    },
    footer: {
      copyright: "Gianpiero Leon Palma",
    },
  } satisfies typeof en,
  it: {
    meta: {
      title: "Gianpiero Leon Palma — Full Stack Developer",
      description:
        "Portfolio di Gianpiero Leon Palma, Full Stack Developer. Applicazioni web moderne, dall'interfaccia all'infrastruttura.",
    },
    nav: {
      expertise: "Expertise",
      projects: "Progetti",
      about: "Chi sono",
      contact: "Contatti",
      cta: "Parliamone",
    },
    hero: {
      badge: "Disponibile per nuovi progetti",
      role: "Full Stack Developer.",
      intro:
        "Progetto e sviluppo applicazioni web moderne, dall'interfaccia all'infrastruttura: codice pulito, performance e prodotti che funzionano.",
      ctaProjects: "Vedi i progetti",
      ctaContact: "Contattami",
      photoAlt: "Ritratto di Gianpiero Leon Palma",
    },
    expertise: {
      eyebrow: "Cosa faccio",
      heading: "Le mie expertise",
      areas: [
        {
          number: "01",
          title: "Sviluppo Web",
          subtitle: "Frontend & Full Stack",
          description:
            "Interfacce veloci e accessibili con React, Next.js e Astro. Curo il design system, le animazioni e ogni dettaglio dell'esperienza utente.",
          tags: ["React", "Next.js", "Astro", "TypeScript"],
        },
        {
          number: "02",
          title: "Backend e API",
          subtitle: "Architetture robuste",
          description:
            "API REST e GraphQL, autenticazione, database relazionali e NoSQL. Infrastrutture che scalano e si mantengono facilmente.",
          tags: ["Node.js", "NestJS", "PostgreSQL", "Prisma"],
        },
        {
          number: "03",
          title: "DevOps e Cloud",
          subtitle: "Dallo sviluppo al deploy",
          description:
            "Containerizzazione con Docker, CI/CD e deploy su cloud. Monitoraggio e automazione per tenere tutto operativo 24/7.",
          tags: ["Docker", "AWS", "CI/CD", "Linux"],
        },
      ],
    },
    projects: {
      eyebrow: "Portfolio",
      heading: "Progetti selezionati",
      blurb:
        "Una selezione di lavori recenti: applicazioni web, mobile e API. Ogni progetto è costruito per utenti reali.",
    },
    quote: {
      text: "La qualità non è un atto, è un'abitudine.",
      author: "Aristotele",
    },
    about: {
      eyebrow: "Chi sono",
      heading: "Ciao, sono Gianpiero",
      p1: {
      pre: "Sono un ",
      role: "Full Stack Developer",
      post: " e mi occupo dell'intero ciclo di vita di un prodotto digitale: dall'idea, all'interfaccia, fino al deploy in produzione.",
    },
      p2: "Mi appassiona trasformare problemi complessi in esperienze semplici. Credo nel codice pulito, nei test e nelle scelte tecniche che rendono un progetto mantenibile nel tempo.",
      stats: [
        { value: "5+", label: "Anni di esperienza" },
        { value: "40+", label: "Progetti completati" },
        { value: "20+", label: "Clienti soddisfatti" },
      ],
    },
    contact: {
      eyebrow: "Contatti",
      heading1: "Hai un progetto",
      heading2: "in mente?",
      blurb:
        "Sono disponibile per progetti freelance, collaborazioni e nuove opportunità. Scrivimi e parliamone.",
    },
    footer: {
      copyright: "Gianpiero Leon Palma",
    },
  } satisfies typeof en,
};

export type UI = typeof en;

export const t = (lang: Lang): UI => ui[lang];
