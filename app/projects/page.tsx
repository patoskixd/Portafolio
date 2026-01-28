import { SectionHeading, ProjectCard } from "@/components";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Proyectos | Patricio Arratia",
  description:
    "Proyectos de desarrollo web, aplicaciones móviles e inteligencia artificial con impacto real.",
};

export default function ProjectsPage() {
  // Separar proyectos destacados
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <main className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Mis Proyectos"
          subtitle="Soluciones reales que combinan desarrollo full-stack, IA y experiencia de usuario"
        />

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="mb-16">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 p-2">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Proyectos Destacados
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  slug={project.slug}
                  title={project.title}
                  description={project.shortDescription}
                  technologies={project.technologies}
                  category={project.category}
                  image={project.image}
                  featured={true}
                />
              ))}
            </div>
          </section>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <section>
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-lg bg-zinc-200 p-2 dark:bg-zinc-700">
                <svg className="h-5 w-5 text-zinc-600 dark:text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Más Proyectos
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  slug={project.slug}
                  title={project.title}
                  description={project.shortDescription}
                  technologies={project.technologies}
                  category={project.category}
                  image={project.image}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
