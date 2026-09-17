import { siteConfig } from "@/lib/site-config";

export function Projects() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {siteConfig.projects.map((project) => (
        <a
          key={project.title}
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="group rounded-xl border border-zinc-200 p-5 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
        >
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
            {project.title}
            <span className="ml-1 inline-block text-zinc-400 transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded bg-zinc-100 px-2 py-0.5 font-mono text-[11px] text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400"
              >
                {tag}
              </li>
            ))}
          </ul>
        </a>
      ))}
    </div>
  );
}
