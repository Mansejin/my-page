import { siteConfig } from "@/lib/site-config";

export function Skills() {
  return (
    <div className="space-y-6">
      {siteConfig.skills.map((group) => (
        <div key={group.category} className="sm:flex sm:gap-6">
          <h3 className="mb-2 w-32 shrink-0 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            {group.category}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="rounded-md bg-zinc-100 px-2.5 py-1 font-mono text-xs text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
