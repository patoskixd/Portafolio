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
      "Experiencia de respuesta ágil con tiempos promedio inferiores a 2 segundos en interacciones con el asistente de IA.",
      "Rendimiento validado por canal con mediciones de latencia en web, Telegram y procesamiento de voz bajo escenarios de concurrencia.",
      "Sincronización automática con Google Calendar y notificaciones en tiempo real para confirmación y gestión de asesorías.",
    ],
    lessons: [
      "La adopción de servidores MCP permitió separar la capa de razonamiento del modelo de la capa operativa, habilitando la integración de nuevas herramientas y servicios sin acoplar la lógica del agente a implementaciones específicas.",
      "El uso de Redis como memoria de baja latencia permitió mantener contexto conversacional entre sesiones y estabilizar el sistema bajo escenarios de concurrencia multicanal.",
      "La utilización de vLLM con batching continuo y GPU dedicada permitió reducir latencia y habilitar atención simultánea de usuarios en los canales web y Telegram.",
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
      "Diseñé y desarrollé una aplicación móvil multiplataforma que permite realizar mediciones microscópicas en micrómetros a partir de imágenes capturadas con teléfonos móviles. La plataforma integra selección interactiva de puntos, calibración automática basada en campo de visión y objetivo óptico, calibración manual mediante referencias conocidas, y un sistema de persistencia para el etiquetado, almacenamiento y visualización histórica de mediciones.",
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
      "Mediciones microscópicas validadas en entornos académicos reales con retroalimentación docente.",
      "Calibración óptica integrada basada en escalas internas, sin dependencia de instrumentos externos.s",
      "Interfaz diseñada y evaluada en flujos reales de laboratorio para garantizar usabilidad y precisión operativa.",
      "Proyecto enmarcado en el programa  Proyectos de Innovación en Docencia",
    ],
    lessons: [
      "La combinación de calibración automática por parámetros ópticos y calibración manual con referencias conocidas permitió mejorar la precisión y adaptabilidad del sistema a distintos dispositivos y configuraciones microscópicas.",
      "La integración de OpenCV en una arquitectura móvil híbrida permitió ejecutar análisis y mediciones geométricas en tiempo real sin depender de infraestructura externa.",
      "El diseño de un sistema de almacenamiento y etiquetado de mediciones habilitó la validación docente y la comparación histórica de resultados en contextos reales de laboratorio.",
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
