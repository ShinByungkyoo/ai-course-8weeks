import Link from "next/link";
import { getAdjacent } from "@/lib/lessons";

export function LessonNav({ slug }: { slug: string }) {
  const { prev, next } = getAdjacent(slug);
  return (
    <div className="mt-20 grid grid-cols-1 gap-4 border-t border-[var(--border)] pt-10 sm:grid-cols-2">
      <div>
        {prev && (
          <Link
            href={`/lessons/${prev.slug}`}
            className="group card-lift block rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 hover:border-violet-300 dark:hover:border-violet-800"
          >
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
              <span className="inline-block transition-transform duration-200 group-hover:-translate-x-0.5">
                ←
              </span>
              이전 주차
            </div>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-xl">{prev.emoji}</span>
              <span className="font-semibold text-[var(--foreground)] group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                Week {String(prev.week).padStart(2, "0")}. {prev.title}
              </span>
            </div>
          </Link>
        )}
      </div>
      <div>
        {next && (
          <Link
            href={`/lessons/${next.slug}`}
            className="group card-lift block rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 text-right hover:border-pink-300 dark:hover:border-pink-800"
          >
            <div className="flex items-center justify-end gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
              다음 주차
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </div>
            <div className="mt-2 flex items-center justify-end gap-2">
              <span className="font-semibold text-[var(--foreground)] group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                Week {String(next.week).padStart(2, "0")}. {next.title}
              </span>
              <span className="text-xl">{next.emoji}</span>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
