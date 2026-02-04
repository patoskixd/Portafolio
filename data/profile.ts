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
  tagline: "Disfruto convertir problemas complejos en soluciones digitales que la gente realmente puede usar y entender",
  subtitle:
    "Especialista en desarrollo full-stack, automatización de procesos y sistemas conversacionales inteligentes. Enfocado en arquitecturas escalables y experiencias de usuario excepcionales.",
  email: "patricio62014@gmail.com",
  github: "https://github.com/patoskixd",
  linkedin: "https://www.linkedin.com/in/patricio-arratia-78b70a29a/",
  cvUrl: "/docs/CV.pdf",
  
  highlights: [
    {
      icon: "code",
      title: "Desarrollo Full-Stack",
      description: "Creo aplicaciones web completas con arquitecturas modernas y escalables",
      technologies: ["Next.js", "React", "FastAPI", "Django", "Node.js", "PostgreSQL", "Redis"],
    },
    {
      icon: "brain",
      title: "Inteligencia Artificial",
      description: "Implemento soluciones de IA conversacional y procesamiento de lenguaje natural",
      technologies: ["vLLM", "Ollama", "Qwen3", "LangChain", "LangGraph", "FastMCP", "Whisper"],
    },
    {
      icon: "smartphone",
      title: "Aplicaciones Móviles",
      description: "Desarrollo apps multiplataforma con visión por computador integrada",
      technologies: ["Ionic", "Flutter", "Angular", "OpenCV", "TypeScript"],
    },
  ],

  about: `Soy Ingeniero Civil en Informática y disfruto convertir problemas complejos en soluciones digitales que las personas puedan usar de manera simple y natural. Mi interés por la tecnología nació al ver cómo una herramienta bien diseñada puede cambiar la forma en que alguien aprende o trabaja.
  
        Hoy combino una base técnica sólida con una mentalidad creativa y estratégica para diseñar experiencias centradas en el usuario, buscando siempre un equilibrio entre rendimiento, claridad e impacto real. Me motiva seguir creciendo profesionalmente y aportar en proyectos donde la tecnología tenga un propósito más allá del código.`,

  skills: [
    // IA & ML
    "vLLM",
    "Qwen",
    "Whisper",
    "MCP",
    "LangChain",
    // Backend
    "FastAPI",
    "Node.js",
    "PostgreSQL",
    "Redis",
    // Frontend
    "React",
    "Next.js",
    "Tailwind CSS",
    // Mobile
    "Angular",
    "Ionic",
    // Lenguajes
    "Python",
    "TypeScript",
    // Herramientas
    "Docker",
    "Git",
    "Linux",
  ],
};
