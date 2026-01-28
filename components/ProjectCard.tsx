import Image from "next/image";
import Link from "next/link";
import { Badge } from "./Badge";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  category: "web" | "mobile" | "ia" | "research";
  image?: string;
  featured?: boolean;
}

const categoryColors = {
  web: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  mobile: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  ia: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  research: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
};

const categoryLabels = {
  web: "Web",
  mobile: "Mobile",
  ia: "Inteligencia Artificial",
  research: "Investigación",
};

const categoryGradients = {
  web: "from-blue-500/20 to-cyan-500/20",
  mobile: "from-green-500/20 to-emerald-500/20",
  ia: "from-purple-500/20 to-pink-500/20",
  research: "from-orange-500/20 to-amber-500/20",
};

export function ProjectCard({
  slug,
  title,
  description,
  technologies,
  category,
  image,
  featured = false,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="group block h-full">
      <article
        className={`relative flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${
          featured
            ? "border-zinc-300 bg-gradient-to-br from-white to-zinc-50 shadow-lg dark:border-zinc-700 dark:from-zinc-900 dark:to-zinc-800"
            : "border-zinc-200 bg-white/50 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50"
        } hover:border-zinc-400 dark:hover:border-zinc-600`}
      >
        {/* Featured Badge */}
        {featured && (
          <div className="absolute right-4 top-4 z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Destacado
            </span>
          </div>
        )}

        {/* Image Section */}
        <div className={`relative h-48 w-full overflow-hidden bg-gradient-to-br ${categoryGradients[category]}`}>
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-white/10 blur-xl" />
                <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-white/10 blur-lg" />
                {/* Icon based on category */}
                <div className={`relative rounded-2xl border ${categoryColors[category]} bg-white/80 p-4 shadow-lg backdrop-blur-sm dark:bg-zinc-900/80`}>
                  {category === "ia" && (
                    <svg className="h-12 w-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                  {category === "mobile" && (
                    <svg className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  )}
                  {category === "web" && (
                    <svg className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  )}
                  {category === "research" && (
                    <svg className="h-12 w-12 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          )}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          {/* Category Badge */}
          <div className="mb-3 flex items-center justify-between">
            <span
              className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${categoryColors[category]}`}
            >
              {categoryLabels[category]}
            </span>
            <svg
              className="h-5 w-5 text-zinc-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>

          {/* Title & Description */}
          <h3 className="text-xl font-bold text-zinc-900 transition-colors group-hover:text-zinc-700 dark:text-zinc-100 dark:group-hover:text-white">
            {title}
          </h3>
          <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {description}
          </p>

          {/* Technologies */}
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
            {technologies.length > 4 && (
              <Badge variant="secondary">+{technologies.length - 4}</Badge>
            )}
          </div>

          {/* View Project Link */}
          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
            <span>Ver proyecto</span>
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
