import Link from "next/link";
import { lessons } from "@/lib/lessons";

export default function LessonsIndex() {
  return (
    <div>
      <div className="mb-12 border-b border-[var(--border)] pb-8">
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
          Curriculum
        </div>
        <h1 className="text-5xl font-bold tracking-tight text-[var(--foreground)]">
          8주 커리큘럼
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
          매주 새로운 AI 앱을 하나씩 완성합니다. 처음이라면 Week 1부터 순서대로 진행하세요.
        </p>
      </div>

      <div className="space-y-3">
        {lessons.map((lesson) => {
          const stars =
            "★".repeat(lesson.difficulty) + "☆".repeat(3 - lesson.difficulty);
          return (
            <Link
              key={lesson.slug}
              href={`/lessons/${lesson.slug}`}
              className="card-lift group relative block rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm hover:border-violet-300 dark:hover:border-violet-800"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-pink-500 to-orange-400 text-white font-mono text-xl font-bold shadow-md shadow-violet-500/20 transition-transform group-hover:scale-105">
                    {String(lesson.week).padStart(2, "0")}
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <span className="text-lg">{lesson.emoji}</span>
                    <h2 className="text-lg font-bold text-[var(--foreground)] group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {lesson.title}
                    </h2>
                  </div>
                  <p className="mb-4 leading-relaxed text-[var(--muted)]">
                    {lesson.summary}
                  </p>
                  <div className="mb-4 flex flex-wrap items-center gap-1.5 text-xs">
                    <span className="rounded-full bg-violet-50 px-2.5 py-0.5 font-medium text-violet-700 dark:bg-violet-950/50 dark:text-violet-300">
                      {lesson.tool}
                    </span>
                    <span className="rounded-full border border-[var(--border)] px-2.5 py-0.5 text-[var(--muted)]">
                      <span className="text-amber-500">{stars}</span>
                    </span>
                    <span className="rounded-full border border-[var(--border)] px-2.5 py-0.5 text-[var(--muted)]">
                      ⏱ {lesson.duration}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 text-emerald-500">🎯</span>
                    <span className="text-emerald-700 dark:text-emerald-400">
                      {lesson.goal}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
