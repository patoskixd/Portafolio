import { notFound } from "next/navigation";
import Image from "next/image";
import { CallToAction, ImageGallery } from "@/components";
import { getProjectBySlug, projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Proyecto no encontrado" };
  return {
    title: `${project.title} | Patricio Arratia`,
    description: project.shortDescription,
  };
}

const categoryConfig = {
  web: {
    gradient: "from-blue-500 to-cyan-500",
    bg: "bg-blue-500/10",
    text: "text-blue-600 dark:text-blue-400",
  },
  mobile: {
    gradient: "from-green-500 to-emerald-500",
    bg: "bg-green-500/10",
    text: "text-green-600 dark:text-green-400",
  },
  ia: {
    gradient: "from-purple-500 to-pink-500",
    bg: "bg-purple-500/10",
    text: "text-purple-600 dark:text-purple-400",
  },
  research: {
    gradient: "from-orange-500 to-amber-500",
    bg: "bg-orange-500/10",
    text: "text-orange-600 dark:text-orange-400",
  },
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const config = categoryConfig[project.category];
  const isMobile = project.category === "mobile";

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section with Gradient Background */}
      <section className="relative overflow-hidden bg-zinc-950 pb-32 pt-24">
        {/* Animated gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-10`} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(0,0,0,0))]" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative mx-auto max-w-6xl px-6">
          {/* Back Button */}
          <div className="mb-8">
            <CallToAction href="/projects" variant="ghost">
              <span className="text-zinc-400 hover:text-white">← Volver a proyectos</span>
            </CallToAction>
          </div>

          {/* Header Content */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Text Content */}
            <div>
              {/* Category & Featured Badge */}
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className={`inline-flex items-center gap-2 rounded-full ${config.bg} px-4 py-2 text-sm font-semibold ${config.text}`}>
                  {project.category === "ia" && (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                  {project.category === "mobile" && (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  )}
                  {project.category === "web" && (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  )}
                  {project.category.toUpperCase()}
                </span>
                {project.featured && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 text-sm font-semibold text-white">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Proyecto Destacado
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>

              {/* Description */}
              <p className="mt-6 text-xl leading-relaxed text-zinc-300">
                {project.shortDescription}
              </p>

              {/* Technologies */}
              <div className="mt-8 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-700 bg-zinc-800/50 px-4 py-2 text-sm font-medium text-zinc-300 backdrop-blur-sm transition-colors hover:border-zinc-600 hover:bg-zinc-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              {project.links && (
                <div className="mt-10 flex flex-wrap gap-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-zinc-900 transition-transform hover:scale-105"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      Ver código
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${config.gradient} px-6 py-3 font-semibold text-white transition-transform hover:scale-105`}
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Ver demo
                    </a>
                  )}
                  {project.links.paper && (
                    <a
                      href={project.links.paper}
                      className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${config.gradient} px-6 py-3 font-semibold text-white transition-transform hover:scale-105`}
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Ver documento
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Hero Image */}
            {project.image && (
              <div className="relative flex justify-center">
                <div className={`absolute -inset-4 rounded-3xl bg-gradient-to-r ${config.gradient} opacity-20 blur-2xl`} />
                {isMobile ? (
                  /* Phone mockup for mobile projects */
                  <div className="relative w-48 sm:w-56 md:w-64">
                    <div className="overflow-hidden rounded-[2.5rem] border-[6px] border-zinc-800 bg-zinc-900 shadow-2xl ring-2 ring-zinc-700/50">
                      <div className="relative aspect-[9/19.5]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    {/* Notch */}
                    <div className="absolute left-1/2 top-2 h-4 w-16 -translate-x-1/2 rounded-full bg-zinc-900" />
                  </div>
                ) : (
                  /* Regular image for other projects */
                  <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Results Section - Floating Cards */}
      <section className="relative -mt-16 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 sm:grid-cols-3">
            {project.results.slice(0, 3).map((result, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${config.gradient}`}>
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-semibold text-zinc-900 dark:text-zinc-100">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-6 py-24">
        {/* Image Gallery */}
        {project.images && project.images.length > 1 && (
          <section className="mb-20">
            <div className="mb-8 flex items-center gap-3">
              <div className={`rounded-lg bg-gradient-to-r ${config.gradient} p-2`}>
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                Galería del Proyecto
              </h2>
            </div>
            <ImageGallery 
              images={project.images} 
              title={project.title} 
              layout={project.imageLayout || "auto"}
            />
          </section>
        )}

        {/* Problem & Solution */}
        <section className="mb-20">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Problem Card */}
            <div className="group relative overflow-hidden rounded-3xl border border-red-200 bg-gradient-to-br from-red-50 to-orange-50 p-8 transition-all hover:shadow-xl dark:border-red-900/50 dark:from-red-950/30 dark:to-orange-950/30">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-red-500/10 blur-3xl" />
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 shadow-lg">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </span>
                  <h2 className="text-2xl font-bold text-red-900 dark:text-red-300">El Problema</h2>
                </div>
                <p className="text-lg leading-relaxed text-red-800 dark:text-red-200">{project.problem}</p>
              </div>
            </div>

            {/* Solution Card */}
            <div className="group relative overflow-hidden rounded-3xl border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-8 transition-all hover:shadow-xl dark:border-green-900/50 dark:from-green-950/30 dark:to-emerald-950/30">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-green-500/10 blur-3xl" />
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <h2 className="text-2xl font-bold text-green-900 dark:text-green-300">La Solución</h2>
                </div>
                <p className="text-lg leading-relaxed text-green-800 dark:text-green-200">{project.solution}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="mb-20">
          <div className="mb-8 flex items-center gap-3">
            <div className={`rounded-lg bg-gradient-to-r ${config.gradient} p-2`}>
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              Aprendizajes Clave
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {project.lessons.map((lesson, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className={`absolute -right-4 -top-4 h-20 w-20 rounded-full bg-gradient-to-br ${config.gradient} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`} />
                <div className="relative">
                  <span className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${config.gradient} text-lg font-bold text-white`}>
                    {index + 1}
                  </span>
                  <p className="text-zinc-600 dark:text-zinc-400">{lesson}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Back to Projects CTA */}
        <section className="text-center">
          <div className="inline-flex flex-col items-center gap-4 rounded-3xl border border-zinc-200 bg-zinc-50 px-12 py-8 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-zinc-600 dark:text-zinc-400">¿Te interesa ver más proyectos?</p>
            <CallToAction href="/projects">
              Ver todos los proyectos
            </CallToAction>
          </div>
        </section>
      </div>
    </main>
  );
}
