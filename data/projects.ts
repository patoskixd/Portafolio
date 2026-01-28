export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  category: "web" | "mobile" | "ia" | "research";
  technologies: string[];
  featured: boolean;
  image?: string;
  // Case Study Details
  problem: string;
  solution: string;
  architecture: string;
  results: string[];
  lessons: string[];
  links?: {
    github?: string;
    demo?: string;
    paper?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "plataforma-asistente-ia",
    title: "Plataforma Académica con Asistente IA",
    shortDescription:
      "Sistema conversacional inteligente que automatiza la gestión académica integrando calendario, Telegram y transcripción de voz en tiempo real.",
    category: "ia",
    technologies: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "vLLM",
      "Qwen",
      "MCP",
      "Whisper",
      "Telegram",
      "Google Calendar",
    ],
    featured: true,
    problem:
      "La gestión académica tradicional fragmenta la información en múltiples herramientas desconectadas, generando fricción, duplicación de esfuerzos y pérdida de tiempo tanto para estudiantes como para docentes.",
    solution:
      "Diseñé e implementé una plataforma unificada con un asistente conversacional basado en IA que centraliza la gestión de calendario, envía notificaciones inteligentes por Telegram, transcribe mensajes de voz y responde consultas académicas de forma natural y contextual.",
    architecture: `
      Frontend (Next.js) ↔ API Gateway (FastAPI)
                              ↓
                    Orquestador MCP
                    /     |      \\
              vLLM    Calendar   Telegram
              (Qwen)   API        Bot
                              ↓
                    PostgreSQL + Redis
    `,
    results: [
      "60% menos tiempo en consultas administrativas repetitivas",
      "Sistema estable con 100+ usuarios concurrentes sin degradación",
      "Inferencia local en GPU con latencia promedio < 2 segundos",
      "Integración fluida con Google Calendar y notificaciones Telegram",
    ],
    lessons: [
      "La arquitectura MCP permite agregar nuevas capacidades sin modificar el core",
      "Redis es clave para mantener contexto conversacional entre sesiones",
      "El diseño modular facilita escalar componentes de forma independiente",
    ],
    links: {
      paper: "/docs/tesis.pdf",
    },
  },
  {
    slug: "cinap-microscopia-movil",
    title: "CINAP — Microscopía Móvil",
    shortDescription:
      "Aplicación móvil que revoluciona el análisis microscópico en campo, permitiendo captura, procesamiento y medición automática de imágenes.",
    category: "mobile",
    technologies: [
      "Ionic",
      "Angular",
      "TypeScript",
      "OpenCV",
      "Python",
      "FastAPI",
    ],
    featured: true,
    problem:
      "Los investigadores del Centro CINAP dependían de equipos de laboratorio costosos y poco portables para realizar análisis microscópicos, limitando su capacidad de trabajo en terreno.",
    solution:
      "Desarrollé una aplicación móvil híbrida que conecta con microscopios portátiles, captura imágenes en alta resolución y aplica algoritmos de visión por computador para medir estructuras automáticamente, todo desde un smartphone.",
    architecture: `
      App Móvil (Ionic/Angular)
            ↓
      Captura de Imagen HD
            ↓
      Procesamiento Local (OpenCV)
            ↓
      API Backend (FastAPI)
            ↓
      Almacenamiento + Análisis
    `,
    results: [
      "95% de precisión en mediciones comparado con métodos tradicionales",
      "Análisis que antes tomaban horas ahora se completan en minutos",
      "Interfaz intuitiva validada con usuarios no técnicos",
      "Modo offline con sincronización automática al reconectar",
    ],
    lessons: [
      "El procesamiento híbrido (local + nube) optimiza rendimiento y batería",
      "Las pruebas en contexto real son esenciales para una UX efectiva",
      "La calibración automática del dispositivo mejora drásticamente la precisión",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
