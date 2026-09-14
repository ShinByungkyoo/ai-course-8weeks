import Link from "next/link";
import { getAdjacent } from "@/lib/lessons";

export function LessonNav({ slug }: { slug: string }) {
  const { prev, next } = getAdjacent(slug);
  return (
    <div className="mt-16 grid grid-cols-2 gap-4 border-t border-slate-200 dark:border-slate-800 pt-8">
      <div>
        {prev && (
          <Link
            href={`/lessons/${prev.slug}`}
            className="group block rounded-lg border border-slate-200 dark:border-slate-800 p-4 hover:border-blue-500 dark:hover:border-blue-500"
          >
            <div className="text-xs text-slate-500 dark:text-slate-400">
              ← 이전 주차
            </div>
            <div className="mt-1 font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              Week {prev.week}. {prev.title}
            </div>
          </Link>
        )}
      </div>
      <div>
        {next && (
          <Link
            href={`/lessons/${next.slug}`}
            className="group block rounded-lg border border-slate-200 dark:border-slate-800 p-4 text-right hover:border-blue-500 dark:hover:border-blue-500"
          >
            <div className="text-xs text-slate-500 dark:text-slate-400">
              다음 주차 →
            </div>
            <div className="mt-1 font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              Week {next.week}. {next.title}
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
