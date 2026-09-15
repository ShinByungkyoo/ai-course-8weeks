"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { lessons } from "@/lib/lessons";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:block w-80 shrink-0 border-r border-[var(--border)]">
      <div className="sticky top-16 max-h-[calc(100vh-4rem)] overflow-y-auto px-6 py-8">
        <Link
          href="/lessons"
          className="mb-6 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        >
          8주 커리큘럼
        </Link>

        <nav className="space-y-1">
          {lessons.map((lesson) => {
            const href = `/lessons/${lesson.slug}`;
            const active = pathname === href;
            return (
              <Link
                key={lesson.slug}
                href={href}
                className={`group relative block rounded-xl px-3 py-2.5 text-sm transition-all ${
                  active
                    ? "bg-gradient-to-r from-violet-50 to-pink-50 dark:from-violet-950/30 dark:to-pink-950/30"
                    : "hover:bg-black/[.03] dark:hover:bg-white/[.05]"
                }`}
              >
                {active && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-full bg-gradient-to-b from-violet-500 to-pink-500" />
                )}
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-base font-mono font-semibold transition-colors ${
                      active
                        ? "bg-gradient-to-br from-violet-500 to-pink-500 text-white"
                        : "bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)] group-hover:border-violet-300 dark:group-hover:border-violet-800"
                    }`}
                  >
                    {String(lesson.week).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div
                      className={`truncate font-medium ${
                        active
                          ? "text-[var(--foreground)]"
                          : "text-[var(--foreground)] group-hover:text-[var(--foreground)]"
                      }`}
                    >
                      {lesson.title}
                    </div>
                    <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-[var(--muted)]">
                      <span>{lesson.tool}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
          <div className="mb-2 text-xs font-semibold text-[var(--muted)]">TIP</div>
          <p className="text-xs leading-relaxed text-[var(--muted)]">
            프롬프트는 오른쪽 위 <strong className="text-[var(--foreground)]">복사</strong>
            버튼으로 즉시 복사할 수 있어요. Google AI Studio에 붙여넣기만 하면 됩니다.
          </p>
        </div>
      </div>
    </aside>
  );
}
