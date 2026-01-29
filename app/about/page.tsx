import Image from "next/image";
import { SectionHeading, Badge, Timeline } from "@/components";
import { profile } from "@/data/profile";

export const metadata = {
  title: "Sobre mí | Patricio Arratia",
  description: "Ingeniero Civil en Informática especializado en desarrollo full-stack e inteligencia artificial.",
};

// Agrupar skills por categoría
const skillCategories = [
  {
    name: "Frontend",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Angular"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Backend",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    skills: ["FastAPI", "Python", "Node.js", "PostgreSQL", "Redis"],
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "IA & ML",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    skills: ["vLLM", "Qwen", "MCP", "Whisper", "OpenCV"],
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Mobile & Tools",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    skills: ["Ionic", "Docker", "Git", "Linux"],
    color: "from-orange-500 to-amber-500",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6">
        {/* Hero Section */}
        <div className="mb-20">
          <SectionHeading
            title="Sobre mí"
            subtitle="Conoce quién soy, qué hago y cómo puedo aportar a tu equipo"
          />
        </div>

        {/* Profile Section - Modern Card Layout */}
        <section className="mb-20">
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-white via-zinc-50 to-zinc-100 p-8 shadow-xl dark:border-zinc-800 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800 lg:p-12">
            {/* Background decoration */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-br from-green-500/10 to-cyan-500/10 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-3">
              {/* Avatar & Quick Info */}
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className="h-40 w-40 overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-200 to-zinc-300 shadow-2xl ring-4 ring-white dark:from-zinc-700 dark:to-zinc-600 dark:ring-zinc-800">
                    {/* Tu imagen de perfil */}
                    <Image
                      src="/images/profile/Foto.jpg"
                      alt="Patricio Arratia"
                      width={160}
                      height={160}
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>
                  {/* Status indicator */}
                  <div className="absolute -bottom-2 -right-2 flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-lg dark:bg-zinc-800">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
                    </span>
                    <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300">
                      Disponible
                    </span>
                  </div>
                </div>

                {/* Name & Role */}
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  {profile.name}
                </h2>
                <p className="mt-1 font-medium text-zinc-600 dark:text-zinc-400">
                  {profile.role}
                </p>

                {/* Quick stats */}
                <div className="mt-6 grid w-full grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white/80 p-4 text-center shadow-sm dark:bg-zinc-800/80">
                    <span className="block text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                      2+
                    </span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      Proyectos Clave
                    </span>
                  </div>
                  <div className="rounded-xl bg-white/80 p-4 text-center shadow-sm dark:bg-zinc-800/80">
                    <span className="block text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                      2025
                    </span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      Titulación
                    </span>
                  </div>
                </div>
              </div>

              {/* About Text */}
              <div className="lg:col-span-2">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Perfil Profesional
                </div>
                <p className="whitespace-pre-line text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {profile.about}
                </p>

                {/* Highlights */}
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="flex items-start gap-3 rounded-xl bg-white/60 p-4 dark:bg-zinc-800/60">
                    <div className="rounded-lg bg-blue-500/10 p-2">
                      <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Full-Stack</h4>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">Web & Mobile</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl bg-white/60 p-4 dark:bg-zinc-800/60">
                    <div className="rounded-lg bg-purple-500/10 p-2">
                      <svg className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">IA Aplicada</h4>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">LLMs & MCP</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl bg-white/60 p-4 dark:bg-zinc-800/60">
                    <div className="rounded-lg bg-green-500/10 p-2">
                      <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Rendimiento</h4>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">Arquitectura</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section - Cards by Category */}
        <section className="mb-20">
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-xl bg-gradient-to-br from-zinc-200 to-zinc-300 p-3 dark:from-zinc-700 dark:to-zinc-600">
              <svg className="h-6 w-6 text-zinc-600 dark:text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                Stack Tecnológico
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Tecnologías que domino y utilizo en mis proyectos
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((category) => (
              <div
                key={category.name}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                />

                <div className="relative">
                  {/* Header */}
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className={`rounded-lg bg-gradient-to-br ${category.color} p-2 text-white shadow-lg`}
                    >
                      {category.icon}
                    </div>
                    <h4 className="font-bold text-zinc-900 dark:text-zinc-100">
                      {category.name}
                    </h4>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Formación Académica Section */}
        <section className="mb-20">
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 p-3 shadow-lg">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                Formación Académica
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Desarrollo profesional continuo y especialización
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Curso Básico Habilitante */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:border-indigo-200 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-900">
              {/* Gradient accent */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-500" />
              
              <div className="relative pl-4">
                {/* Header */}
                <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                      Curso Básico (Habilitante)
                    </h4>
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                      Colegio de Ayudantes y Tutores — UCT
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
                    Junio 2025
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  28 horas de formación enfocadas en comunicación efectiva, integración tecnológica en diseño, evaluación y retroalimentación, e innovación para el desarrollo estudiantil.
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    Comunicación
                  </span>
                  <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    Tecnología Educativa
                  </span>
                  <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    Innovación
                  </span>
                </div>
              </div>
            </div>

            {/* Mención Investigación en Docencia */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:border-emerald-200 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-900">
              {/* Gradient accent */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-emerald-500 to-teal-500" />
              
              <div className="relative pl-4">
                {/* Header */}
                <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                      Mención Investigación en Docencia
                    </h4>
                    <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                      Colegio de Ayudantes y Tutores — UCT
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                    Sept 2025
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  28 horas de formación en modalidad de autoaprendizaje, desarrollando competencias para fortalecer el perfil de Ayudantes y Tutores, promoviendo el crecimiento académico y apoyo estudiantil.
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    Investigación
                  </span>
                  <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    Docencia
                  </span>
                  <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    Mentoría
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Subtle note */}
          <p className="mt-6 text-center text-sm text-zinc-500 dark:text-zinc-500">
            Formación complementaria que fortalece habilidades de comunicación, trabajo en equipo y pensamiento crítico.
          </p>
        </section>

        {/* Timeline Section */}
        <section>
          <div className="mb-10 flex items-center gap-3">
            <div className="rounded-xl bg-gradient-to-br from-zinc-200 to-zinc-300 p-3 dark:from-zinc-700 dark:to-zinc-600">
              <svg className="h-6 w-6 text-zinc-600 dark:text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                Mi Trayectoria
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Educación, experiencia y logros profesionales
              </p>
            </div>
          </div>

          <Timeline items={profile.timeline} />
        </section>
      </div>
    </main>
  );
}
