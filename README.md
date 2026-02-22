# leon4rdodev — Portafolio Personal

Portafolio web personal construido con [Astro](https://astro.build), diseñado con una estética dark premium y sistema de diseño propio.

🔗 **[leon4rdo.me](https://leon4rdo.me)**

---

## ✨ Características

- ⚡ Rendimiento optimizado con Astro (0 JS por defecto)
- 🌐 Internacionalización completa (Español / English)
- 🎨 Design system custom con dark theme + Electric Blue accent
- 🔄 View Transitions para navegación fluida
- 📱 Diseño responsive con menú móvil animado
- 🔍 Lightbox para visualización de proyectos
- 🎭 Animaciones de scroll con Intersection Observer
- 📊 SEO optimizado con Open Graph y hreflang

## 🛠️ Tech Stack

| Tecnología     | Uso                                       |
| :------------- | :---------------------------------------- |
| **Astro**      | Framework principal                       |
| **TypeScript** | Tipado estático                           |
| **CSS**        | Design system vanilla (custom properties) |
| **Inter**      | Tipografía principal                      |

## 📁 Estructura

```
src/
├── components/        # Componentes Astro
│   ├── Hero.astro
│   ├── Projects.astro
│   ├── ProjectCard.astro
│   ├── Services.astro
│   ├── About.astro
│   ├── Contact.astro
│   ├── Navbar.astro
│   ├── Footer.astro
│   ├── Lightbox.astro
│   └── Icon.astro
├── i18n/              # Sistema de internacionalización
│   ├── ui.ts          # Traducciones ES/EN
│   └── utils.ts       # Helpers de i18n
├── layouts/
│   └── Layout.astro   # Layout principal con SEO
├── pages/
│   ├── index.astro    # Redirect a /es/
│   └── [lang]/
│       └── index.astro
├── styles/
│   └── global.css     # Design system completo
└── assets/
    └── projects/      # Imágenes de proyectos (.png)
```

## 🚀 Comandos

| Comando           | Acción                             |
| :---------------- | :--------------------------------- |
| `npm install`     | Instala dependencias               |
| `npm run dev`     | Servidor local en `localhost:4321` |
| `npm run build`   | Build de producción en `./dist/`   |
| `npm run preview` | Preview del build                  |

## 📄 Licencia

Todos los derechos reservados © 2026 leon4rdodev
