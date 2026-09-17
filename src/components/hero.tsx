import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="top" className="py-16">
      <div className="flex items-center gap-5">
        <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-xl font-semibold text-white dark:bg-zinc-100 dark:text-zinc-900">
          {siteConfig.avatarInitials}
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {siteConfig.name}
          </h1>
          <p className="mt-1 text-zinc-500 dark:text-zinc-400">
            {siteConfig.role} · {siteConfig.location}
          </p>
        </div>
      </div>

      <p className="mt-8 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
        {siteConfig.tagline}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <a
          href="#contact"
          className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-85 dark:bg-zinc-100 dark:text-zinc-900"
        >
          연락하기
        </a>
        {siteConfig.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-zinc-100"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
