import { getLesson } from "@/lib/lessons";

export function LessonHeader({ slug }: { slug: string }) {
  const lesson = getLesson(slug);
  if (!lesson) return null;

  const stars = "★".repeat(lesson.difficulty) + "☆".repeat(3 - lesson.difficulty);

  return (
    <div className="mb-12 pb-8 border-b border-[var(--border)]">
      {/* Meta chips */}
      <div className="mb-6 flex flex-wrap items-center gap-2 text-xs">
        <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 px-3 py-1 font-semibold text-white shadow-sm">
          <span className="opacity-80">WEEK</span>
          <span className="font-mono">{String(lesson.week).padStart(2, "0")}</span>
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50 dark:border-violet-800 dark:bg-violet-950/40 px-3 py-1 font-semibold text-violet-700 dark:text-violet-300">
          {lesson.phase}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 font-medium text-[var(--muted)]">
          🧰 {lesson.tool}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 font-medium text-[var(--muted)]">
          <span className="text-amber-500">{stars}</span>
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 font-medium text-[var(--muted)]">
          ⏱ {lesson.duration}
        </span>
      </div>

      {/* Title */}
      <h1 className="mb-4 flex items-start gap-3 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
        <span className="text-3xl sm:text-4xl mt-1">{lesson.emoji}</span>
        <span>{lesson.title}</span>
      </h1>

      {/* Summary */}
      <p className="max-w-3xl text-lg leading-relaxed text-[var(--muted)]">
        {lesson.summary}
      </p>

      {/* Goal callout */}
      <div className="mt-8 rounded-2xl border border-[var(--border)] bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-emerald-950/20 dark:via-transparent dark:to-teal-950/20 p-5">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white text-lg">
            🎯
          </div>
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-emerald-700 dark:text-emerald-400">
              이번 주 결과물
            </div>
            <div className="mt-0.5 text-[15px] leading-relaxed text-[var(--foreground)]">
              {lesson.goal}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
