export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export const defaultLang = 'es' as const;

export type Lang = keyof typeof languages;

export const ui = {
  es: {
    // Navbar
    'nav.services': 'Servicios',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',

    // Hero
    'hero.greeting': 'Hola, soy',
    'hero.name': 'leon4rdodev',
    'hero.headline': 'Desarrollador Web Fullstack.',
    'hero.subtitle': 'Especializado en el ecosistema JavaScript/TypeScript. Experiencia construyendo aplicaciones web modernas y escalables.',
    'hero.cta': 'Contactar',

    // Projects
    'projects.title': 'Proyectos',
    'projects.subtitle': 'Selección de trabajos recientes.',
    'projects.visit': 'Ver sitio',

    'project.bocati.name': 'Bocati',
    'project.bocati.description': 'Concepto de landing page para un SaaS de gestión gastronómica. Diseño moderno y optimizado para conversión, enfocado en cafeterías y restaurantes.',
    'project.bocati.tags': 'Astro,TypeScript,TailwindCSS,UI/UX',

    'project.tiksnap.name': 'TikSnap',
    'project.tiksnap.description': 'Herramienta web para descargar videos de TikTok sin marca de agua. Incluye blog integrado, conversión a MP3 y cumplimiento de GDPR.',
    'project.tiksnap.tags': 'Next.js,TypeScript,SEO,API Integration',

    'project.skymods.name': 'The Sky Mods',
    'project.skymods.description': 'Plataforma de distribución de mods para Sky: Children of the Light. Sitio multilingüe con documentación y descargas directas.',
    'project.skymods.tags': 'Next.js,MongoDB,i18n',

    // About
    'about.title': 'Sobre mí',
    'about.p1': 'Desarrollador fullstack con base en TypeScript. Trabajo con frameworks como Next.js, Astro y NestJS para construir desde landing pages hasta sistemas completos.',
    'about.p2': 'Me enfoco en escribir código limpio, bien estructurado y listo para producción. Cada proyecto lo trato como producto final, no como prototipo.',
    'about.stack.title': 'Stack tecnológico',

    // Services
    'services.title': 'Servicios',
    'services.subtitle': 'Lo que puedo hacer por tu proyecto.',
    'services.web.title': 'Desarrollo Web',
    'services.web.description': 'Aplicaciones modernas y escalables con React, Next.js y Astro. Desde SPAs hasta plataformas complejas.',
    'services.landing.title': 'Landing Pages',
    'services.landing.description': 'Sitios rápidos, optimizados para SEO y conversión. Diseño moderno con resultados medibles.',
    'services.software.title': 'Software a Medida',
    'services.software.description': 'Sistemas de gestión, puntos de venta y herramientas internas adaptadas a tu negocio.',
    'services.api.title': 'APIs & Backend',
    'services.api.description': 'Servicios robustos con Node.js, NestJS y bases de datos SQL/NoSQL. Listos para producción.',

    // Contact
    'contact.label': '¿Tienes un proyecto?',
    'contact.title': 'Hablemos',
    'contact.subtitle': 'Siempre abierto a nuevos proyectos e ideas. Escríbeme y respondo lo antes posible.',
    'contact.cta': 'WhatsApp',
    'contact.email': 'Email',
    'contact.github': 'GitHub',
    'contact.whatsapp.detail': 'Respuesta rápida',
    'contact.email.detail': 'Escríbeme un correo',
    'contact.github.detail': 'Revisa mi código',

    // Footer
    'footer.made': 'Desarrollado con',
    'footer.in': 'en RD',
    'footer.rights': 'Todos los derechos reservados.',
  },
  en: {
    // Navbar
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    // Hero
    'hero.greeting': "Hi, I'm",
    'hero.name': 'leon4rdodev',
    'hero.headline': 'Fullstack Web Developer.',
    'hero.subtitle': 'Specialized in the JavaScript/TypeScript ecosystem. Experienced in building modern and scalable web applications.',
    'hero.cta': "Contact",

    // Projects
    'projects.title': 'Projects',
    'projects.subtitle': 'Selected recent work.',
    'projects.visit': 'Visit site',

    'project.bocati.name': 'Bocati',
    'project.bocati.description': 'Landing page concept for a gastronomy management SaaS. Modern, high-conversion design focused on coffee shops and restaurants.',
    'project.bocati.tags': 'Astro,TypeScript,TailwindCSS,UI/UX',

    'project.tiksnap.name': 'TikSnap',
    'project.tiksnap.description': 'Web tool for downloading TikTok videos without watermarks. Includes integrated blog, MP3 conversion, and GDPR compliance.',
    'project.tiksnap.tags': 'Next.js,TypeScript,SEO,API Integration',

    'project.skymods.name': 'The Sky Mods',
    'project.skymods.description': 'Mod distribution platform for Sky: Children of the Light. Multilingual site with documentation and direct downloads.',
    'project.skymods.tags': 'Next.js,MongoDB,i18n',

    // About
    'about.title': 'About me',
    'about.p1': "Fullstack developer with a TypeScript foundation. I work with frameworks like Next.js, Astro, and NestJS to build everything from landing pages to complete systems.",
    'about.p2': "I focus on writing clean, well-structured, production-ready code. Every project is treated as a final product, not a prototype.",
    'about.stack.title': 'Tech Stack',

    // Services
    'services.title': 'Services',
    'services.subtitle': 'What I can do for your project.',
    'services.web.title': 'Web Development',
    'services.web.description': 'Modern, scalable applications with React, Next.js, and Astro. From SPAs to complex platforms.',
    'services.landing.title': 'Landing Pages',
    'services.landing.description': 'Fast sites optimized for SEO and conversion. Modern design with measurable results.',
    'services.software.title': 'Custom Software',
    'services.software.description': 'Management systems, POS solutions, and internal tools tailored to your business.',
    'services.api.title': 'APIs & Backend',
    'services.api.description': 'Robust services with Node.js, NestJS, and SQL/NoSQL databases. Production-ready.',

    // Contact
    'contact.label': 'Got a project?',
    'contact.title': "Let's talk",
    'contact.subtitle': "Always open to new projects and ideas. Reach out and I'll get back to you as soon as possible.",
    'contact.cta': 'WhatsApp',
    'contact.email': 'Email',
    'contact.github': 'GitHub',
    'contact.whatsapp.detail': 'Quick response',
    'contact.email.detail': 'Drop me an email',
    'contact.github.detail': 'Check out my code',

    // Footer
    'footer.made': 'Built with',
    'footer.in': 'in DR',
    'footer.rights': 'All rights reserved.',
  },
} as const;
