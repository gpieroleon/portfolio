import type { Lang } from "../i18n/ui";

export type ProjectCategory = "web" | "mobile" | "backend";

export type Project = {
  title: string;
  description: Record<Lang, string>;
  category: ProjectCategory;
  tags: string[];
  year: string;
  gradient: string;
  url?: string;
  image?: string;
};

export const categories: { id: ProjectCategory | "all"; label: Record<Lang, string> }[] = [
  { id: "all", label: { en: "All", es: "Todos", it: "Tutti" } },
  {
    id: "web",
    label: { en: "Web Development", es: "Desarrollo Web", it: "Sviluppo Web" },
  },
  { id: "mobile", label: { en: "Mobile", es: "Móvil", it: "Mobile" } },
  {
    id: "backend",
    label: { en: "Backend & API", es: "Backend y API", it: "Backend e API" },
  },
];

export const projects: Project[] = [
  {
    title: "Garantía Inmobiliaria",
    description: {
      en: "Website for a real estate agency in Envigado, Colombia: sale and rental listings synced live with the agency's property management system, search with advanced filters, zones, team and owner tools — multilingual.",
      es: "Sitio web para una agencia inmobiliaria en Envigado, Colombia: inmuebles en venta y arriendo sincronizados en vivo con el sistema de gestión de la agencia, búsqueda con filtros avanzados, zonas, equipo y herramientas para propietarios — multilingüe.",
      it: "Sito web per un'agenzia immobiliare a Envigado, Colombia: immobili in vendita e affitto sincronizzati in tempo reale con il gestionale dell'agenzia, ricerca con filtri avanzati, zone, team e strumenti per i proprietari — multilingue.",
    },
    category: "web",
    tags: ["Astro", "Tailwind", "Docker", "REST API", "i18n"],
    year: "2026",
    gradient: "from-blue-500 to-indigo-700",
    url: "https://www.garantiainmobiliaria.com.co",
    image: "/project-garantia-inmobiliaria.jpg",
  },
  {
    title: "Post Human Technologies",
    description: {
      en: "Website for my web development studio: services, pricing, process and a catalog of premium templates with live previews — content in 4 languages.",
      es: "Sitio web de mi estudio de desarrollo web: servicios, precios, proceso y un catálogo de plantillas premium con vista previa en vivo — contenido en 4 idiomas.",
      it: "Sito web del mio studio di sviluppo web: servizi, prezzi, processo e un catalogo di template premium con anteprima live — contenuto in 4 lingue.",
    },
    category: "web",
    tags: ["HTML5", "CSS3", "JavaScript", "i18n", "Vercel"],
    year: "2026",
    gradient: "from-lime-400 to-emerald-700",
    url: "https://post-humantech.vercel.app",
    image: "/project-post-human-tech.jpg",
  },
  {
    title: "Lux Hotel Milano",
    description: {
      en: "Website for a 5-star luxury hotel in the heart of Milan: rooms and suites, exclusive experiences, gourmet restaurant, guest reviews, interactive location and booking flow — content in 5 languages.",
      es: "Sitio web para un hotel de lujo de 5 estrellas en el corazón de Milán: habitaciones y suites, experiencias exclusivas, restaurante gourmet, opiniones de huéspedes, ubicación interactiva y flujo de reserva — contenido en 5 idiomas.",
      it: "Sito web per un hotel di lusso a 5 stelle nel cuore di Milano: camere e suite, esperienze esclusive, ristorante gourmet, recensioni degli ospiti, mappa interattiva e flusso di prenotazione — contenuto in 5 lingue.",
    },
    category: "web",
    tags: ["HTML5", "CSS3", "JavaScript", "i18n", "Vercel"],
    year: "2026",
    gradient: "from-yellow-500 to-amber-700",
    url: "https://lux-hotel-milano.vercel.app",
    image: "/project-lux-hotel.jpg",
  },
  {
    title: "Sonora Rights",
    description: {
      en: "Website for a law firm specialized in the music industry: intellectual property, record and publishing contracts, royalties, trademarks and business structuring — content in 4 languages with smooth-scroll animations.",
      es: "Sitio web para una firma legal especializada en la industria musical: propiedad intelectual, contratos discográficos y editoriales, regalías, marcas y estructuración de negocio — contenido en 4 idiomas con animaciones smooth-scroll.",
      it: "Sito web per uno studio legale specializzato nell'industria musicale: proprietà intellettuale, contratti discografici ed editoriali, royalties, marchi e strutturazione del business — contenuto in 4 lingue con animazioni smooth-scroll.",
    },
    category: "web",
    tags: ["HTML5", "CSS3", "JavaScript", "i18n", "Vercel"],
    year: "2026",
    gradient: "from-violet-500 to-fuchsia-600",
    url: "https://sonora-rights.vercel.app",
    image: "/project-sonora-rights.jpg",
  },
  {
    title: "Palanca · Orbit",
    description: {
      en: "Template for a growth marketing agency: bold animated typography, services, method, results and plans. Demo of the Orbit template by Post Human Technologies.",
      es: "Plantilla para una agencia de marketing de crecimiento: tipografía animada de alto impacto, servicios, método, resultados y planes. Demo de la plantilla Orbit de Post Human Technologies.",
      it: "Template per un'agenzia di growth marketing: tipografia animata d'impatto, servizi, metodo, risultati e piani. Demo del template Orbit di Post Human Technologies.",
    },
    category: "web",
    tags: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    year: "2026",
    gradient: "from-yellow-400 to-amber-600",
    url: "https://post-humantech.vercel.app/plantillas/orbit/",
    image: "/project-plantilla-orbit.jpg",
  },
  {
    title: "Brasa Aurora · Aurora",
    description: {
      en: "Template for a wood-fire restaurant: menu, order builder sent via WhatsApp, gallery and table booking. Demo of the Aurora template by Post Human Technologies.",
      es: "Plantilla para un restaurante de cocina a la brasa: carta, pedido armado y enviado por WhatsApp, galería y reserva de mesa. Demo de la plantilla Aurora de Post Human Technologies.",
      it: "Template per un ristorante di cucina alla brace: menù, ordine composto e inviato via WhatsApp, galleria e prenotazione del tavolo. Demo del template Aurora di Post Human Technologies.",
    },
    category: "web",
    tags: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    year: "2026",
    gradient: "from-orange-500 to-red-700",
    url: "https://post-humantech.vercel.app/plantillas/aurora/",
    image: "/project-plantilla-aurora.jpg",
  },
  {
    title: "VOLTA Club · Pulse",
    description: {
      en: "Template for a fitness studio: programs, class schedule, coach, plans and free trial booking via WhatsApp. Demo of the Pulse template by Post Human Technologies.",
      es: "Plantilla para un centro de entrenamiento: programas, horario de clases, coach, planes y reserva de clase de prueba por WhatsApp. Demo de la plantilla Pulse de Post Human Technologies.",
      it: "Template per un centro fitness: programmi, orario delle lezioni, coach, piani e prenotazione della lezione di prova via WhatsApp. Demo del template Pulse di Post Human Technologies.",
    },
    category: "web",
    tags: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    year: "2026",
    gradient: "from-pink-500 to-rose-600",
    url: "https://post-humantech.vercel.app/plantillas/pulse/",
    image: "/project-plantilla-pulse.jpg",
  },
  {
    title: "Lía Marén · Sonora",
    description: {
      en: "Template for a music artist's official site: new release, tour dates, bio, press kit and booking. Demo of the Sonora template by Post Human Technologies.",
      es: "Plantilla para el sitio oficial de una artista musical: lanzamiento, fechas de gira, biografía, kit de prensa y contratación. Demo de la plantilla Sonora de Post Human Technologies.",
      it: "Template per il sito ufficiale di un'artista musicale: nuova uscita, date del tour, biografia, press kit e booking. Demo del template Sonora di Post Human Technologies.",
    },
    category: "web",
    tags: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    year: "2026",
    gradient: "from-purple-400 to-pink-500",
    url: "https://post-humantech.vercel.app/plantillas/sonora/",
    image: "/project-plantilla-sonora.jpg",
  },
  {
    title: "VEKTRA · Strobe",
    description: {
      en: "Template for a DJ and producer: sets, upcoming dates, venues, bio, gallery and booking. Demo of the Strobe template by Post Human Technologies.",
      es: "Plantilla para un DJ y productor: sets, próximas fechas, escenarios, biografía, galería y booking. Demo de la plantilla Strobe de Post Human Technologies.",
      it: "Template per un DJ e produttore: set, prossime date, locali, biografia, galleria e booking. Demo del template Strobe di Post Human Technologies.",
    },
    category: "web",
    tags: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    year: "2026",
    gradient: "from-cyan-500 to-blue-700",
    url: "https://post-humantech.vercel.app/plantillas/strobe/",
    image: "/project-plantilla-strobe.jpg",
  },
  {
    title: "Pulse Fitness App",
    description: {
      en: "Workout tracking app with personalized plans, statistics and cloud sync.",
      es: "App de seguimiento de entrenamientos con planes personalizados, estadísticas y sincronización en la nube.",
      it: "App per il tracking degli allenamenti con piani personalizzati, statistiche e sincronizzazione cloud.",
    },
    category: "mobile",
    tags: ["React Native", "Expo", "Firebase"],
    year: "2024",
    gradient: "from-lime-500 to-emerald-600",
  },
  {
    title: "Sentinel API",
    description: {
      en: "Backend for service monitoring with JWT authentication, rate limiting and email notifications.",
      es: "Backend de monitoreo de servicios con autenticación JWT, rate limiting y notificaciones por email.",
      it: "Backend per monitoraggio di servizi con autenticazione JWT, rate limiting e notifiche via email.",
    },
    category: "backend",
    tags: ["Node.js", "Express", "PostgreSQL"],
    year: "2024",
    gradient: "from-sky-500 to-indigo-600",
  },
  {
    title: "Studio Legale Rossi",
    description: {
      en: "Institutional website with blog, headless CMS content management and SEO optimization.",
      es: "Sitio institucional con blog, gestión de contenidos mediante CMS headless y optimización SEO.",
      it: "Sito istituzionale con blog, gestione contenuti tramite CMS headless e ottimizzazione SEO.",
    },
    category: "web",
    tags: ["Astro", "Tailwind", "Contentful"],
    year: "2024",
    gradient: "from-stone-500 to-neutral-700",
  },
  {
    title: "Chatta",
    description: {
      en: "Real-time messaging app with group chats, push notifications and end-to-end encryption.",
      es: "App de mensajería en tiempo real con chats de grupo, notificaciones push y cifrado extremo a extremo.",
      it: "App di messaggistica in tempo reale con chat di gruppo, notifiche push e crittografia end-to-end.",
    },
    category: "mobile",
    tags: ["Flutter", "WebSockets", "Redis"],
    year: "2023",
    gradient: "from-violet-500 to-purple-700",
  },
  {
    title: "DataForge",
    description: {
      en: "ETL pipeline for collecting and transforming data from multiple sources with documented REST APIs.",
      es: "Pipeline ETL para la recolección y transformación de datos de múltiples fuentes con APIs REST documentadas.",
      it: "Pipeline ETL per la raccolta e la trasformazione di dati da più sorgenti con API REST documentate.",
    },
    category: "backend",
    tags: ["Python", "FastAPI", "Docker"],
    year: "2023",
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    title: "EventHub",
    description: {
      en: "Event management platform with attendee registration, QR tickets and live check-in.",
      es: "Plataforma de gestión de eventos con registro de asistentes, entradas QR y check-in en vivo.",
      it: "Piattaforma per la gestione di eventi con registrazione partecipanti, biglietti QR e check-in live.",
    },
    category: "web",
    tags: ["Next.js", "tRPC", "Supabase"],
    year: "2023",
    gradient: "from-red-500 to-orange-600",
  },
];

export const techStack = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Astro",
  "Node.js",
  "Express",
  "NestJS",
  "Tailwind CSS",
  "Prisma",
  "PostgreSQL",
  "MongoDB",
  "GraphQL",
  "Docker",
  "AWS",
  "Git",
];
