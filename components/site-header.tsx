import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-slate-900 dark:text-slate-100"
        >
          <span className="text-xl">🤖</span>
          <span className="hidden sm:inline">AI 앱 만들기 8주</span>
          <span className="sm:hidden">AI 8주</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/lessons"
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
          >
            강의 목차
          </Link>
          <Link
            href="/lessons/week-1"
            className="rounded-md bg-blue-600 px-3 py-1.5 text-white hover:bg-blue-700"
          >
            시작하기
          </Link>
        </nav>
      </div>
    </header>
  );
}
