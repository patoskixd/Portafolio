import { notFound } from "next/navigation";
import { SectionHeading, Badge, CallToAction } from "@/components";
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
    title: `${project.title} | Portafolio`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-12">
          <CallToAction href="/projects" variant="ghost">
            ← Volver a proyectos
          </CallToAction>
        </div>

        <article>
          {/* Title & Category */}
          <header className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <Badge>{project.category.toUpperCase()}</Badge>
              {project.featured && (
                <Badge variant="secondary">⭐ Destacado</Badge>
              )}
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">
              {project.shortDescription}
            </p>
          </header>

          {/* Technologies */}
          <section className="mb-12">
            <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Tecnologías utilizadas
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </section>

          {/* Case Study Sections */}
          <div className="space-y-12">
            {/* Problem */}
            <section className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                  1
                </span>
                Problema
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                {project.problem}
              </p>
            </section>

            {/* Solution */}
            <section className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                  2
                </span>
                Solución
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                {project.solution}
              </p>
            </section>

            {/* Architecture */}
            <section className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  3
                </span>
                Arquitectura
              </h2>
              <pre className="overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-zinc-300 dark:bg-zinc-950">
                <code>{project.architecture}</code>
              </pre>
            </section>

            {/* Results */}
            <section className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                  4
                </span>
                Resultados
              </h2>
              <ul className="space-y-2">
                {project.results.map((result, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-zinc-600 dark:text-zinc-400"
                  >
                    <svg
                      className="mt-1 h-4 w-4 shrink-0 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {result}
                  </li>
                ))}
              </ul>
            </section>

            {/* Lessons */}
            <section className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
                  5
                </span>
                Lecciones Aprendidas
              </h2>
              <ul className="space-y-2">
                {project.lessons.map((lesson, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-zinc-600 dark:text-zinc-400"
                  >
                    <svg
                      className="mt-1 h-4 w-4 shrink-0 text-orange-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                    {lesson}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Links */}
          {project.links && (
            <div className="mt-12 flex flex-wrap gap-4">
              {project.links.github && (
                <CallToAction href={project.links.github} external>
                  Ver en GitHub
                </CallToAction>
              )}
              {project.links.demo && (
                <CallToAction
                  href={project.links.demo}
                  variant="secondary"
                  external
                >
                  Ver Demo
                </CallToAction>
              )}
              {project.links.paper && (
                <CallToAction
                  href={project.links.paper}
                  variant="secondary"
                  external
                >
                  Ver Documento
                </CallToAction>
              )}
            </div>
          )}
        </article>
      </div>
    </main>
  );
}
