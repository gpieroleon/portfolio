import type { Lang } from "../i18n/ui";

export type ProjectCategory = "web" | "mobile" | "backend";

export type Project = {
  title: string;
  description: Record<Lang, string>;
  category: ProjectCategory;
  tags: string[];
  year: string;
  gradient: string;
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
    title: "Nebula Dashboard",
    description: {
      en: "Analytics platform with real-time dashboards, interactive charts and report export.",
      es: "Plataforma de analítica con dashboards en tiempo real, gráficos interactivos y exportación de reportes.",
      it: "Piattaforma di analytics con dashboard in tempo reale, grafici interattivi ed esportazione dei report.",
    },
    category: "web",
    tags: ["React", "TypeScript", "Tailwind"],
    year: "2025",
    gradient: "from-orange-500 to-rose-500",
  },
  {
    title: "Orbita E-commerce",
    description: {
      en: "Online store with cart, Stripe payments and a product and inventory management panel.",
      es: "Tienda online con carrito, pagos Stripe y panel de gestión de productos e inventario.",
      it: "Negozio online con carrello, pagamenti Stripe e pannello di gestione prodotti e inventario.",
    },
    category: "web",
    tags: ["Next.js", "Stripe", "Prisma"],
    year: "2025",
    gradient: "from-amber-500 to-orange-600",
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
