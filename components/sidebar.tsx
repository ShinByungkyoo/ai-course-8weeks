"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { lessons } from "@/lib/lessons";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:block w-72 shrink-0 border-r border-slate-200 dark:border-slate-800">
      <div className="sticky top-14 max-h-[calc(100vh-3.5rem)] overflow-y-auto p-6">
        <div className="mb-4">
          <Link
            href="/lessons"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
          >
            8주 커리큘럼
          </Link>
        </div>
        <nav className="space-y-1">
          {lessons.map((lesson) => {
            const href = `/lessons/${lesson.slug}`;
            const active = pathname === href;
            return (
              <Link
                key={lesson.slug}
                href={href}
                className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                  active
                    ? "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-medium"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">{lesson.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Week {lesson.week}
                    </div>
                    <div className="truncate">{lesson.title}</div>
                  </div>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
