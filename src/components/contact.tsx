import { siteConfig } from "@/lib/site-config";

export function Contact() {
  return (
    <div>
      <p className="text-zinc-600 dark:text-zinc-300">
        새로운 기회나 협업 제안은 언제든 환영합니다. 편하게 메일 주세요.
      </p>
      <a
        href={`mailto:${siteConfig.email}`}
        className="mt-3 inline-block border-b border-zinc-300 pb-0.5 font-medium text-zinc-900 transition-colors hover:border-zinc-900 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-100"
      >
        {siteConfig.email}
      </a>
    </div>
  );
}
