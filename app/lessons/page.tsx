import Link from "next/link";
import { lessons } from "@/lib/lessons";

export default function LessonsIndex() {
  return (
    <div>
      <div className="mb-10 border-b border-slate-200 dark:border-slate-800 pb-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          8주 커리큘럼
        </h1>
        <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">
          매주 새로운 AI 앱을 하나씩 완성합니다. 처음이라면 Week 1부터 순서대로 진행하세요.
        </p>
      </div>

      <div className="space-y-4">
        {lessons.map((lesson) => {
          const stars = "★".repeat(lesson.difficulty) + "☆".repeat(3 - lesson.difficulty);
          return (
            <Link
              key={lesson.slug}
              href={`/lessons/${lesson.slug}`}
              className="group block rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 transition-all hover:border-blue-500 hover:shadow-md dark:hover:border-blue-500"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{lesson.emoji}</div>
                <div className="flex-1">
                  <div className="mb-1 flex items-center gap-3 text-sm">
                    <span className="rounded-full bg-blue-100 dark:bg-blue-950 px-2.5 py-0.5 font-semibold text-blue-700 dark:text-blue-300">
                      Week {lesson.week}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">
                      난이도 {stars}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">·</span>
                    <span className="text-slate-500 dark:text-slate-400">
                      {lesson.duration}
                    </span>
                  </div>
                  <h2 className="mb-2 text-xl font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {lesson.title}
                  </h2>
                  <p className="mb-3 text-slate-600 dark:text-slate-400">
                    {lesson.summary}
                  </p>
                  <div className="text-sm text-emerald-700 dark:text-emerald-400">
                    🎯 {lesson.goal}
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
