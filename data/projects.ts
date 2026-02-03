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
    slug: "cinap-agente-conversacional-ia",
    title: "CINAP — Agente Conversacional de IA para Gestión de Asesorías",
    shortDescription:
      "Plataforma web con un agente conversacional basado en IA que permite a docentes gestionar asesorías académicas mediante chat, voz y Telegram, con sincronización automática con Google Calendar.",
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
      "La gestión académica tradicional se apoya en flujos de trabajo mayoritariamente manuales y sistemas desacoplados, lo que provoca fragmentación de la información, duplicación de procesos y una carga operativa elevada para docentes y asesores.",
    solution:
      "Diseñé e implementé una plataforma web modular y escalable con un asistente conversacional basado en inteligencia artificial, que centraliza la gestión de calendarios, automatiza notificaciones inteligentes vía Telegram, integra transcripción de voz y habilita la resolución contextual de consultas académicas.",
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
      "Latencia promedio < 2s en interacciones con el asistente de IA bajo concurrencia multicanal.",
      "Rendimiento validado en web, Telegram y voz con estabilidad hasta 10 usuarios simultáneos.",
      "Sincronización automática con Google Calendar y notificaciones en tiempo real para gestión de asesorías.",
    ],
    lessons: [
      "Arquitectura MCP para desacoplar la capa de razonamiento del agente, permitiendo integrar nuevas herramientas sin modificar la lógica central.",
      "Redis como memoria de baja latencia para persistir contexto conversacional entre sesiones y mantener estabilidad bajo concurrencia multicanal.",
      "vLLM con batching continuo y GPU dedicada para reducir latencia de inferencia y habilitar atención simultánea en web y Telegram.",
    ],


    links: {
      github: "https://github.com/patoskixd/Proyecto-Cinap",
    },
  },
  {
    slug: "medilab-microscopia",
    title: "MediLab — Microscopía Móvil",
    shortDescription:
      "App móvil para la Facultad de Medicina que permite medir estructuras celulares en micrómetros a partir de imágenes capturadas con teléfonos móviles, desarrollada como parte del programa PID del CINAP — Universidad Católica de Temuco.",
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
      "La medición de estructuras microscópicas en la Facultad de Medicina dependía de microscopios con cámaras integradas, un equipamiento de alto costo y disponibilidad limitada, lo que restringía la práctica autónoma de los estudiantes y el acceso a herramientas de análisis fuera del laboratorio.",
    solution:
      "Desarrollé una aplicación móvil que transforma el teléfono en una herramienta de medición microscópica, integrando calibración óptica automática y manual, selección interactiva de puntos y un sistema de registro histórico para seguimiento y validación de resultados.",

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
      "Mediciones microscópicas validadas en entornos académicos reales.",
      "Calibración óptica integrada sin dependencia de instrumentos externos.",
      "Interfaz diseñada y evaluada en flujos reales de laboratorio para garantizar usabilidad y precisión.",
    ],

    lessons: [
      "Calibración automática y manual combinada para mejorar precisión y adaptabilidad entre distintos dispositivos.",
      "Integración de OpenCV en arquitectura híbrida para análisis geométrico en tiempo real sin infraestructura externa.",
      "Sistema de almacenamiento y etiquetado para validación docente y comparación histórica de resultados.",
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
