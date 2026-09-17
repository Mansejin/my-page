import { siteConfig } from "@/lib/site-config";

export function Experience() {
  return (
    <ol className="space-y-8">
      {siteConfig.experience.map((job) => (
        <li key={`${job.company}-${job.period}`} className="sm:flex sm:gap-6">
          <p className="mb-1 w-32 shrink-0 font-mono text-xs text-zinc-400 sm:pt-1 dark:text-zinc-500">
            {job.period}
          </p>
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
              {job.role}
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {job.company}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              {job.description}
            </p>
            {job.highlights.length > 0 && (
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
