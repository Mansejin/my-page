import type { ReactNode } from "react";

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-zinc-100 py-14 dark:border-zinc-900">
      <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
        {title}
      </h2>
      {children}
    </section>
  );
}
