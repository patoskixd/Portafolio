import { CallToAction, Badge, ProjectCard } from "@/components";
import { profile } from "@/data/profile";
import { getFeaturedProjects } from "@/data/projects";

// Icon components for highlights
const HighlightIcons = {
  code: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  brain: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  smartphone: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
};

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 py-24">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(0,0,0,0))]" />

        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/50 px-4 py-2 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              Abierto a nuevas oportunidades
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>

          {/* Role */}
          <p className="mt-4 text-xl font-medium text-zinc-700 dark:text-zinc-300 sm:text-2xl">
            {profile.role}
          </p>

          {/* Tagline */}
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl">
            {profile.tagline}
          </p>

          {/* Subtitle */}
          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-500 dark:text-zinc-500">
            {profile.subtitle}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <CallToAction href="/projects">Ver Proyectos</CallToAction>
            <CallToAction href={profile.cvUrl} variant="secondary" download>
              Descargar CV
            </CallToAction>
            <CallToAction href="/contact" variant="ghost">
              Contactar
            </CallToAction>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="border-y border-zinc-200 bg-zinc-50/50 py-16 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 sm:grid-cols-3">
            {profile.highlights.map((highlight, index) => (
              <div
                key={index}
                className="group flex flex-col items-center gap-4 rounded-2xl border border-zinc-200 bg-white/80 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:border-zinc-700"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 transition-colors group-hover:bg-zinc-900 group-hover:text-white dark:bg-zinc-800 dark:text-zinc-300 dark:group-hover:bg-zinc-100 dark:group-hover:text-zinc-900">
                  {HighlightIcons[highlight.icon as keyof typeof HighlightIcons]}
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {highlight.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
                Proyectos Destacados
              </h2>
              <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                Soluciones reales con impacto medible
              </p>
            </div>
            <CallToAction href="/projects" variant="ghost">
              Ver todos →
            </CallToAction>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                description={project.shortDescription}
                technologies={project.technologies}
                category={project.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="border-t border-zinc-200 bg-zinc-50/50 py-24 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              Mi Stack Tecnológico
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Las herramientas que uso para construir soluciones de calidad
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {profile.skills.map((skill) => (
              <Badge key={skill} variant="outline">
                {skill}
              </Badge>
            ))}
          </div>

          <div className="mt-12 text-center">
            <CallToAction href="/about" variant="secondary">
              Conoce mi trayectoria
            </CallToAction>
          </div>
        </div>
      </section>
    </main>
  );
}
