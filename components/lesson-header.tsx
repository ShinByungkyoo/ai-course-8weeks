import { getLesson } from "@/lib/lessons";

export function LessonHeader({ slug }: { slug: string }) {
  const lesson = getLesson(slug);
  if (!lesson) return null;

  const stars = "★".repeat(lesson.difficulty) + "☆".repeat(3 - lesson.difficulty);

  return (
    <div className="mb-10 border-b border-slate-200 dark:border-slate-800 pb-8">
      <div className="mb-3 flex items-center gap-3 text-sm">
        <span className="rounded-full bg-blue-100 dark:bg-blue-950 px-3 py-1 font-semibold text-blue-700 dark:text-blue-300">
          Week {lesson.week}
        </span>
        <span className="text-slate-500 dark:text-slate-400">난이도 {stars}</span>
        <span className="text-slate-500 dark:text-slate-400">·</span>
        <span className="text-slate-500 dark:text-slate-400">{lesson.duration}</span>
      </div>
      <h1 className="mb-3 flex items-center gap-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        <span>{lesson.emoji}</span>
        <span>{lesson.title}</span>
      </h1>
      <p className="text-lg text-slate-600 dark:text-slate-400">{lesson.summary}</p>
      <div className="mt-6 rounded-lg border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 p-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
          이번 주 목표
        </div>
        <div className="mt-1 text-slate-800 dark:text-slate-200">{lesson.goal}</div>
      </div>
    </div>
  );
}
