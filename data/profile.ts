export type TimelineType = "education" | "experience" | "project" | "achievement";

export interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  description?: string;
  type: TimelineType;
}

export const profile = {
  name: "Patricio Arratia",
  role: "Ingeniero Civil en Informática",
  tagline: "Construyo plataformas web y soluciones de IA que transforman la educación",
  subtitle:
    "Especialista en desarrollo full-stack, automatización de procesos y sistemas conversacionales inteligentes. Enfocado en arquitecturas escalables y experiencias de usuario excepcionales.",
  email: "patricio@email.com",
  github: "https://github.com/patricioarratia",
  linkedin: "https://linkedin.com/in/patricioarratia",
  cvUrl: "/docs/CV.pdf",
  
  highlights: [
    {
      icon: "code",
      title: "Desarrollo Full-Stack",
      description: "Next.js · FastAPI · PostgreSQL",
    },
    {
      icon: "brain",
      title: "Inteligencia Artificial",
      description: "LLMs · MCP · Whisper · vLLM",
    },
    {
      icon: "smartphone",
      title: "Aplicaciones Móviles",
      description: "Ionic · Angular · Visión por Computador",
    },
  ],

  about: `Soy un Ingeniero Civil en Informática apasionado por crear tecnología que genere impacto real. Mi experiencia abarca desde el desarrollo de plataformas web robustas hasta la implementación de asistentes conversacionales con inteligencia artificial.

He liderado proyectos que combinan arquitecturas modernas con soluciones de IA, siempre priorizando la experiencia del usuario y el rendimiento. Mi trabajo en el ámbito educativo me ha permitido entender cómo la tecnología puede simplificar procesos complejos y empoderar a las personas.

Actualmente busco oportunidades donde pueda aportar mi visión técnica y creativa para resolver problemas desafiantes.`,

  skills: [
    // Frontend
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Angular",
    "Ionic",
    // Backend
    "FastAPI",
    "Python",
    "Node.js",
    "PostgreSQL",
    "Redis",
    // IA & ML
    "vLLM",
    "Qwen",
    "Whisper",
    "MCP",
    "LangChain",
    // Herramientas
    "Docker",
    "Git",
    "Linux",
  ],

  timeline: [
    {
      year: "2025",
      title: "Diplomado en Desarrollo de Software",
      institution: "Universidad Católica de Temuco",
      description: "Formación avanzada en arquitecturas modernas, patrones de diseño y buenas prácticas de desarrollo.",
      type: "education" as const,
    },
    {
      year: "2025",
      title: "Defensa de Trabajo de Título",
      institution: "Ingeniería Civil en Informática — UCT",
      description: "Presentación y defensa exitosa de plataforma web con asistente IA para gestión académica.",
      type: "achievement" as const,
    },
    {
      year: "2024-2025",
      title: "Trabajo de Título: Plataforma con IA",
      institution: "Universidad Católica de Temuco",
      description: "Arquitectura MCP con vLLM/Qwen, integración Telegram, Google Calendar y transcripción de voz.",
      type: "project" as const,
    },
    {
      year: "2023-2024",
      title: "Ayudante de Cátedra",
      institution: "Universidad Católica de Temuco",
      description: "Apoyo docente en Programación, Estructuras de Datos y Bases de Datos. Mentoria a estudiantes.",
      type: "experience" as const,
    },
    {
      year: "2023",
      title: "Aplicación CINAP — Microscopía Móvil",
      institution: "Centro de Investigación UCT",
      description: "App móvil para captura, procesamiento y análisis de imágenes microscópicas en campo.",
      type: "project" as const,
    },
    {
      year: "2019-2025",
      title: "Ingeniería Civil en Informática",
      institution: "Universidad Católica de Temuco",
      description: "Formación sólida en desarrollo de software, arquitectura de sistemas, IA y gestión de proyectos.",
      type: "education" as const,
    },
  ] satisfies TimelineItem[],
};
