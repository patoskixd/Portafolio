export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  category: "web" | "mobile" | "ia" | "research";
  technologies: string[];
  featured: boolean;
  image?: string;
  images?: string[];
  imageLayout?: "horizontal" | "vertical" | "auto";
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
    slug: "cinap-asistente-ia",
    title: "CINAP — Asistente IA para Asesorías",
    shortDescription:
      "Plataforma web con IA conversacional que permite a docentes gestionar asesorías académicas mediante chat, voz y Telegram, con sincronización automática a Google Calendar.",
    category: "ia",
    technologies: [
      "Python",
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "Qwen3",
      "Whisper",
      "Ollama",
      "vLLM",
      "FastMCP",
      "LangGraph",
      "LangChain",
      "Redis",
      "Docker",
    ],
    featured: true,
    image: "/images/projects/Cinap/Home-Cinap.png",
    imageLayout: "auto",
    images: [
      "/images/projects/Cinap/Home-Cinap.png",
      "/images/projects/Cinap/Dashboard-Cinap.png",
      "/images/projects/Cinap/ChatBot-Cinap.png",
      "/images/projects/Cinap/ChatbotSi-Cinap.png",
      "/images/projects/Cinap/Calendar-Cinap.png",
      "/images/projects/Cinap/ListarTelegram-Cinap.jpg",
      "/images/projects/Cinap/ReservaTelegram-Cinap.jpg",
      "/images/projects/Cinap/ReservaTelegramText-Cinap.png",

    ],
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
      github: "https://github.com/patoskixd/Proyecto-Cinap",
    },
  },
  {
    slug: "medilab-microscopia",
    title: "MediLab — Microscopía Móvil",
    shortDescription:
      "App móvil multiplataforma para la Facultad de Medicina que permite medir estructuras celulares mediante microscopía, desarrollada como parte del programa PID del CINAP - Universidad Católica de Temuco.",
    category: "mobile",
    technologies: [
      "Ionic",
      "Angular",
      "TypeScript",
      "OpenCV",
      "Capacitor",
    ],
    featured: true,
    image: "/images/projects/MediLab/Home-MediLab.jpg",
    imageLayout: "vertical",
    images: [
      "/images/projects/MediLab/Home-MediLab.jpg",
      "/images/projects/MediLab/Vista-MediLab.jpg",
      "/images/projects/MediLab/Medida-MediLab.jpg",
      "/images/projects/MediLab/Calibrar-MediLab.jpg",
      "/images/projects/MediLab/Historial-MediLab.jpg",
      "/images/projects/MediLab/Manual-MediLab.jpg",
    ],
    problem:
      "La Facultad de Medicina de la Universidad Católica de Temuco necesitaba una herramienta accesible para que estudiantes e investigadores pudieran medir estructuras celulares observadas mediante microscopía, sin depender de equipos de laboratorio costosos.",
    solution:
      "Diseñé y desarrollé MediLab, una aplicación móvil multiplataforma con herramientas de calibración dinámica y manual, procesamiento de imágenes y medición automatizada en micrómetros. El sistema utiliza escalas internas para estandarizar mediciones sin instrumentos externos.",
    architecture: `
      App Móvil (Ionic + Angular)
              ↓
      Captura/Carga de Imagen
              ↓
      Calibración por Objetivos
      (10x, 40x, 100x)
              ↓
      Procesamiento OpenCV
              ↓
      Medición en μm + Historial
    `,
    results: [
      "Mediciones precisas validadas por docentes e investigadores",
      "Sistema de calibración por escalas internas sin instrumentos externos",
      "Interfaz intuitiva validada en contextos reales de laboratorio",
      "Proyecto enmarcado en el programa PID (Proyectos de Innovación en Docencia)",
    ],
    lessons: [
      "Las pruebas funcionales con usuarios reales son clave para la validación",
      "La calibración automática mejora significativamente la precisión",
      "El trabajo colaborativo con docentes enriquece el desarrollo técnico",
    ],
    links: {
      github: "https://github.com/patoskixd/Medicion-IMG",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
