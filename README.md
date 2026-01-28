# Portafolio — Patricio Arratia

Portafolio profesional desarrollado con **Next.js 14**, **TypeScript** y **Tailwind CSS**. Diseñado para mostrar proyectos, habilidades y trayectoria de manera moderna y atractiva.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwindcss)

## Características

- **Next.js 14** con App Router
- **Tailwind CSS** para estilos modernos
- **Dark Mode** nativo
- **Responsive** en todos los dispositivos
- **SEO optimizado** con metadata
- **Componentes reutilizables**
- **Arquitectura limpia** y escalable

## Estructura del Proyecto

```
portafolio/
├── app/                    # Páginas (App Router)
│   ├── page.tsx           # Home
│   ├── about/             # Sobre mí
│   ├── projects/          # Proyectos
│   │   └── [slug]/        # Detalle de proyecto
│   ├── certificates/      # Certificados
│   └── contact/           # Contacto
├── components/            # Componentes reutilizables
│   ├── Badge.tsx
│   ├── CallToAction.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   ├── SectionHeading.tsx
│   └── Timeline.tsx
├── data/                  # Datos y contenido
│   ├── profile.ts         # Información personal
│   ├── projects.ts        # Proyectos
│   └── certificates.ts    # Certificados
└── public/
    └── docs/              # CV, certificados PDF
```

## Stack Tecnológico

| Categoría | Tecnologías |
|-----------|-------------|
| **Frontend** | Next.js, React, TypeScript, Tailwind CSS |
| **Estilos** | Tailwind CSS, CSS Modules |
| **Despliegue** | Vercel |
| **Herramientas** | ESLint, Prettier |

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/patricioarratia/portafolio.git

# Entrar al directorio
cd portafolio

# Instalar dependencias
npm install

# Iniciar en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Personalización

### Datos personales
Edita `data/profile.ts` para actualizar:
- Nombre y rol
- Descripción profesional
- Habilidades técnicas
- Timeline de trayectoria
- Links de contacto

### Proyectos
Edita `data/projects.ts` para agregar o modificar proyectos:
- Título y descripción
- Tecnologías utilizadas
- Problema → Solución → Resultados
- Links a demos o repositorios

### Certificados
Edita `data/certificates.ts` para agregar certificaciones y cursos.

## Secciones

| Sección | Descripción |
|---------|-------------|
| **Home** | Hero, highlights de especialización y proyectos destacados |
| **Sobre mí** | Perfil profesional, skills por categoría y timeline interactivo |
| **Proyectos** | Cards con case studies detallados (problema, solución, resultados) |
| **Certificados** | Grid de certificaciones y cursos completados |
| **Contacto** | Formulario de contacto y links a redes profesionales |

## Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Iniciar en producción
npm run lint     # Ejecutar linter
```

## Despliegue en Vercel

El proyecto está optimizado para **Vercel**:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/patricioarratia/portafolio)

## Licencia

MIT © Patricio Arratia

---

<p align="center">
  Desarrollado por <strong>Patricio Arratia</strong>
</p>
