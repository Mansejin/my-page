"use client";

import { useLayoutEffect, useSyncExternalStore } from "react";

const STORAGE_KEY = "theme";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function getIsDark() {
  return document.documentElement.classList.contains("dark");
}

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark);
}

export function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getIsDark, () => true);

  // React Strict Mode remounts <html> in development and resets its class.
  useLayoutEffect(() => {
    try {
      applyTheme(localStorage.getItem(STORAGE_KEY) !== "light");
    } catch {}
  }, []);

  function toggle() {
    const next = !getIsDark();
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="다크 모드"
      title={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      onClick={toggle}
      className="relative inline-flex h-7 w-13 shrink-0 cursor-pointer items-center rounded-full border border-zinc-300 bg-zinc-100 transition-colors hover:border-zinc-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-zinc-600"
    >
      <span className="absolute left-0.5 flex size-6 items-center justify-center rounded-full bg-white text-amber-500 shadow-sm transition-transform duration-200 ease-out dark:translate-x-6 dark:bg-zinc-950 dark:text-sky-300">
        <SunIcon className="size-3.5 dark:hidden" />
        <MoonIcon className="hidden size-3.5 dark:block" />
      </span>
    </button>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
