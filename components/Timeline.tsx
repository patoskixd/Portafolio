interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  description?: string;
  type: "education" | "experience" | "project" | "achievement";
}

interface TimelineProps {
  items: TimelineItem[];
}

const typeConfig = {
  education: {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
      </svg>
    ),
    color: "bg-blue-500",
    gradient: "from-blue-500 to-cyan-500",
    label: "Educación",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  experience: {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    color: "bg-green-500",
    gradient: "from-green-500 to-emerald-500",
    label: "Experiencia",
    bgColor: "bg-green-500/10",
    textColor: "text-green-600 dark:text-green-400",
  },
  project: {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    color: "bg-purple-500",
    gradient: "from-purple-500 to-pink-500",
    label: "Proyecto",
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-600 dark:text-purple-400",
  },
  achievement: {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    color: "bg-amber-500",
    gradient: "from-amber-500 to-orange-500",
    label: "Logro",
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-600 dark:text-amber-400",
  },
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Main timeline line */}
      <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-zinc-300 via-zinc-200 to-transparent dark:from-zinc-700 dark:via-zinc-800 sm:left-[7.5rem]" />

      <div className="space-y-8">
        {items.map((item, index) => {
          const config = typeConfig[item.type];
          return (
            <div
              key={index}
              className="group relative flex flex-col gap-4 pl-16 sm:flex-row sm:gap-8 sm:pl-0"
            >
              {/* Year Badge */}
              <div className="absolute left-0 top-0 sm:relative sm:left-auto sm:top-auto">
                <div className="flex h-12 w-12 items-center justify-center sm:w-24 sm:justify-end">
                  <span className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm font-bold text-zinc-700 shadow-sm dark:bg-zinc-800 dark:text-zinc-300">
                    {item.year}
                  </span>
                </div>
              </div>

              {/* Timeline Node */}
              <div className="absolute left-4 top-3 sm:relative sm:left-0 sm:top-0 sm:flex sm:items-start sm:justify-center">
                <div
                  className={`relative flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br ${config.gradient} shadow-lg ring-4 ring-white dark:ring-zinc-950`}
                >
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>
              </div>

              {/* Content Card */}
              <div className="flex-1">
                <div className="group/card rounded-xl border border-zinc-200 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:border-zinc-700">
                  {/* Type Badge */}
                  <div className="mb-3 flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${config.bgColor} ${config.textColor}`}
                    >
                      {config.icon}
                      {config.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {item.title}
                  </h3>

                  {/* Institution */}
                  <p className="mt-1 flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {item.institution}
                  </p>

                  {/* Description */}
                  {item.description && (
                    <p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* End marker */}
      <div className="relative mt-8 flex justify-center pl-16 sm:pl-0">
        <div className="absolute left-6 top-0 h-4 w-0.5 bg-gradient-to-b from-zinc-200 to-transparent dark:from-zinc-800 sm:left-[7.5rem]" />
        <div className="ml-0 rounded-full bg-zinc-100 px-4 py-2 text-xs font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400 sm:ml-12">
          Inicio del camino 🚀
        </div>
      </div>
    </div>
  );
}
