export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export const defaultLang = 'es' as const;

export type Lang = keyof typeof languages;

export const ui = {
  es: {
    // Navbar
    'nav.about': 'Sobre mí',
    'nav.services': 'Servicios',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'nav.cta': 'Hablemos →',

    // Hero
    'hero.eyebrow': 'Disponible · Proyectos remotos · 2026',
    'hero.name.line1': 'LEO',
    'hero.name.ghost1': 'NARDO',
    'hero.name.line2': 'VICTO',
    'hero.name.ghost2': 'RIANO',
    'hero.sub.line1': 'Fullstack dev. Santo Domingo, RD.',
    'hero.sub.strong': 'Entrego en semanas, no en meses.',
    'hero.sub.line3': 'Next.js · TypeScript · Node.js',
    'hero.cta': 'Iniciar proyecto',
    'hero.cta2': 'Ver mi trabajo ↓',
    'hero.wm': 'PORTFOLIO · 2026 · SANTO DOMINGO',
    'hero.quote': 'La mayoría de devs tarda tres semanas en arrancar. Yo entrego el',
    'hero.quoteMark': 'primer build funcional',
    'hero.quoteEnd': 'antes de eso.',

    // Ticker
    'ticker.1': 'DISPONIBLE PARA TRABAJO REMOTO',
    'ticker.2': 'FULLSTACK JS/TS',
    'ticker.3': 'ENTREGA RÁPIDA',
    'ticker.4': 'NEXT.JS · NESTJS · ASTRO',
    'ticker.5': 'OPEN TO AGENCIES',
    'ticker.6': 'CÓDIGO PRODUCTION-READY',

    // About
    'about.label': '01 — Sobre mí',
    'about.title': 'Quién soy',
    'about.p1': 'Llevo dos años construyendo en el ecosistema JS/TS y en ese tiempo aprendí algo que muchos devs ignoran: <em>el cliente no quiere código bonito, quiere resultados.</em> Por eso cada proyecto que tomo lo trato como un producto que alguien va a usar de verdad, no como un ejercicio técnico.',
    'about.p2': 'Trabajo principalmente con <em>Next.js, Astro y NestJS</em>. Desde landing pages que convierten hasta sistemas internos con lógica de negocio compleja. Me muevo rápido porque tengo los patrones internalizados: no pierdo tiempo eligiendo stack en cada proyecto.',
    'about.p3': 'Si eres una agencia buscando un dev que <em>no necesite micromanagement</em>, o un cliente internacional que quiere mover rápido sin acumular deuda técnica, es probable que podamos trabajar bien.',
    'about.meta.location.label': 'Basado en',
    'about.meta.location.value': 'Santo Domingo, RD 🇩🇴',
    'about.meta.timezone.label': 'Zona horaria',
    'about.meta.timezone.value': 'UTC−4 · Overlap fácil US & EU',
    'about.meta.languages.label': 'Idiomas',
    'about.meta.languages.value': 'Español · Inglés',
    'about.meta.availability.label': 'Disponibilidad',
    'about.meta.availability.value': 'Freelance remoto · Subcontrato',
    'about.meta.github.label': 'GitHub',
    'about.meta.github.value': 'leon4rdodev ↗',

    // Services
    'services.label': '02 — Servicios',
    'services.title': 'Lo que hago',
    'services.web.title': 'DESARROLLO WEB',
    'services.web.description': 'Aplicaciones fullstack con React, Next.js y Astro. Código que escala, arquitectura que no te va a explotar en seis meses. Sin sobre-ingeniería, sin atajos que después cuestan caro.',
    'services.landing.title': 'LANDING PAGES',
    'services.landing.description': 'Sitios que cargan rápido, posicionan y convierten. Core Web Vitals en verde desde el build. SEO técnico resuelto, no parcheado. Entregados en días, no en semanas.',
    'services.software.title': 'SOFTWARE A MEDIDA',
    'services.software.description': 'Dashboards, sistemas de gestión, puntos de venta, herramientas internas. Si tu equipo tiene un proceso manual que debería estar automatizado, puedo construir lo que lo reemplace.',
    'services.api.title': 'APIs & BACKEND',
    'services.api.description': 'Servicios REST con NestJS, SQL y NoSQL, integraciones con terceros. Documentados, testeables y listos para que otro dev los entienda sin una llamada de dos horas.',

    // Projects
    'projects.label': '03 — Proyectos',
    'projects.title': 'Trabajo reciente',

    'project.tiksnap.name': 'TIKSNAP',
    'project.tiksnap.description': 'SaaS para descargar videos de TikTok sin marca de agua. SSR con Puppeteer, blog para SEO orgánico, GDPR compliant. Producto real en producción con usuarios reales.',
    'project.tiksnap.tags': 'Next.js,TypeScript,Puppeteer,SSR',

    'project.tonyranch.name': 'TONYRANCH',
    'project.tonyranch.description': 'Sistema operativo completo para un complejo turístico: reservas, pasadías, punto de venta, inventario, informes financieros. PWA instalable, tiempo real. Reemplazó papel y Excel.',
    'project.tonyranch.tags': 'Next.js,Supabase,TypeScript,PWA',

    'project.skymods.name': 'THE SKY MODS',
    'project.skymods.description': 'Plataforma de distribución para una comunidad global de un juego mobile. GitHub API, contadores en tiempo real con MongoDB, 4 idiomas (ES/EN/ID/JA).',
    'project.skymods.tags': 'Next.js,MongoDB,GitHub API,i18n',

    'project.bocati.name': 'BOCATI',
    'project.bocati.description': 'Landing page para un SaaS B2B de gestión de restaurantes. Calculadora de ROI interactiva, comparativa, pricing. Construida con Astro: cero JS innecesario, carga instantánea.',
    'project.bocati.tags': 'Astro,TypeScript,CSS,UI/UX',

    'projects.private': 'Privado',

    // Contact
    'contact.label': '04 — Contacto',
    'contact.head.line1': '¿TIENES',
    'contact.head.ghost': 'UN',
    'contact.head.line3': 'PROYECTO?',
    'contact.note': 'Respondo en menos de 24 horas. Si tienes fechas, presupuesto, o aunque sea una idea, escríbeme y arrancamos.',
    'contact.whatsapp': 'WHATSAPP',
    'contact.whatsapp.sub': 'Respuesta más rápida · +1 809 665 4820',
    'contact.email': 'EMAIL',
    'contact.email.sub': 'leon4rdodev@gmail.com',
    'contact.github': 'GITHUB',
    'contact.github.sub': 'Revisa el código antes de contratar',

    // Footer
    'footer.copy': '© 2026 · LEON4RDODEV',
    'footer.made': 'Hecho con precisión en RD 🇩🇴',
  },
  en: {
    // Navbar
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.cta': "Let's talk →",

    // Hero
    'hero.eyebrow': 'Available · Remote projects · 2026',
    'hero.name.line1': 'LEO',
    'hero.name.ghost1': 'NARDO',
    'hero.name.line2': 'VICTO',
    'hero.name.ghost2': 'RIANO',
    'hero.sub.line1': 'Fullstack dev. Santo Domingo, DR.',
    'hero.sub.strong': 'I deliver in weeks, not months.',
    'hero.sub.line3': 'Next.js · TypeScript · Node.js',
    'hero.cta': 'Start a project',
    'hero.cta2': 'See my work ↓',
    'hero.wm': 'PORTFOLIO · 2026 · SANTO DOMINGO',
    'hero.quote': 'Most devs take three weeks to get started. I deliver the',
    'hero.quoteMark': 'first working build',
    'hero.quoteEnd': 'before that.',

    // Ticker
    'ticker.1': 'AVAILABLE FOR REMOTE WORK',
    'ticker.2': 'FULLSTACK JS/TS',
    'ticker.3': 'FAST DELIVERY',
    'ticker.4': 'NEXT.JS · NESTJS · ASTRO',
    'ticker.5': 'OPEN TO AGENCIES',
    'ticker.6': 'PRODUCTION-READY CODE',

    // About
    'about.label': '01 — About',
    'about.title': 'Who I am',
    'about.p1': "I've been building in the JS/TS ecosystem for two years and in that time I learned something many devs ignore: <em>clients don't want pretty code, they want results.</em> That's why every project I take on I treat as a product someone will actually use, not a technical exercise.",
    'about.p2': 'I mainly work with <em>Next.js, Astro, and NestJS</em>. From landing pages that convert to internal systems with complex business logic. I move fast because I have the patterns internalized: I don\'t waste time choosing a stack for every project.',
    'about.p3': 'If you\'re an agency looking for a dev who <em>doesn\'t need micromanagement</em>, or an international client who wants to move fast without accruing tech debt, we\'ll probably work well together.',
    'about.meta.location.label': 'Based in',
    'about.meta.location.value': 'Santo Domingo, DR 🇩🇴',
    'about.meta.timezone.label': 'Timezone',
    'about.meta.timezone.value': 'UTC−4 · Easy overlap US & EU',
    'about.meta.languages.label': 'Languages',
    'about.meta.languages.value': 'Spanish · English',
    'about.meta.availability.label': 'Availability',
    'about.meta.availability.value': 'Remote freelance · Subcontracting',
    'about.meta.github.label': 'GitHub',
    'about.meta.github.value': 'leon4rdodev ↗',

    // Services
    'services.label': '02 — Services',
    'services.title': 'What I do',
    'services.web.title': 'WEB DEVELOPMENT',
    'services.web.description': 'Fullstack applications with React, Next.js, and Astro. Code that scales, architecture that won\'t blow up in six months. No over-engineering, no shortcuts that cost you later.',
    'services.landing.title': 'LANDING PAGES',
    'services.landing.description': 'Fast-loading sites that rank and convert. Core Web Vitals green from the build. Technical SEO solved, not patched. Delivered in days, not weeks.',
    'services.software.title': 'CUSTOM SOFTWARE',
    'services.software.description': 'Dashboards, management systems, POS, internal tools. If your team has a manual process that should be automated, I can build the replacement.',
    'services.api.title': 'APIs & BACKEND',
    'services.api.description': 'REST services with NestJS, SQL and NoSQL, third-party integrations. Documented, testable, and ready for another dev to understand without a two-hour call.',

    // Projects
    'projects.label': '03 — Projects',
    'projects.title': 'Recent work',

    'project.tiksnap.name': 'TIKSNAP',
    'project.tiksnap.description': 'SaaS to download TikTok videos without watermark. SSR with Puppeteer, blog for organic SEO, GDPR compliant. Real product in production with real users.',
    'project.tiksnap.tags': 'Next.js,TypeScript,Puppeteer,SSR',

    'project.tonyranch.name': 'TONYRANCH',
    'project.tonyranch.description': 'Complete operational system for a resort: reservations, day passes, POS, inventory, financial reports. Installable PWA, real-time. Replaced paper and Excel.',
    'project.tonyranch.tags': 'Next.js,Supabase,TypeScript,PWA',

    'project.skymods.name': 'THE SKY MODS',
    'project.skymods.description': 'Distribution platform for a global mobile game community. GitHub API, real-time download counters with MongoDB, 4 languages (ES/EN/ID/JA).',
    'project.skymods.tags': 'Next.js,MongoDB,GitHub API,i18n',

    'project.bocati.name': 'BOCATI',
    'project.bocati.description': 'Landing page for a B2B restaurant management SaaS. Interactive ROI calculator, comparison, pricing. Built with Astro: zero unnecessary JS, instant loading.',
    'project.bocati.tags': 'Astro,TypeScript,CSS,UI/UX',

    'projects.private': 'Private',

    // Contact
    'contact.label': '04 — Contact',
    'contact.head.line1': 'GOT',
    'contact.head.ghost': 'A',
    'contact.head.line3': 'PROJECT?',
    'contact.note': 'I respond within 24 hours. If you have deadlines, a budget, or even just an idea, reach out and let\'s get started.',
    'contact.whatsapp': 'WHATSAPP',
    'contact.whatsapp.sub': 'Fastest response · +1 809 665 4820',
    'contact.email': 'EMAIL',
    'contact.email.sub': 'leon4rdodev@gmail.com',
    'contact.github': 'GITHUB',
    'contact.github.sub': 'Review the code before hiring',

    // Footer
    'footer.copy': '© 2026 · LEON4RDODEV',
    'footer.made': 'Made with precision in DR 🇩🇴',
  },
} as const;
