import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { lessons } from "@/lib/lessons";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950/30 dark:via-slate-950 dark:to-purple-950/30" />
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:text-blue-300">
                <span>🎓</span>
                <span>문과생 완전 초보를 위한 실습 강의</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-6xl">
                8주 만에 만드는
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  나만의 AI 앱
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                코딩 한 줄 안 짜본 사람도 8주면 챗봇·문서 QA·이미지 이해·에이전트 앱을
                직접 만들어 공개 URL로 배포합니다. 필요한 건 노트북, Gemini API 키,
                그리고 이 강의뿐입니다.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/lessons/week-1"
                  className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-blue-700"
                >
                  Week 1부터 시작 →
                </Link>
                <Link
                  href="/lessons"
                  className="rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-6 py-3 text-base font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  전체 커리큘럼 보기
                </Link>
              </div>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-600 dark:text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <span className="text-lg">🐍</span> Python 기초부터
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="text-lg">✨</span> Gemini API 활용
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="text-lg">🌐</span> Streamlit 웹앱
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="text-lg">🚀</span> 무료 배포까지
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Why this course */}
        <section className="border-b border-slate-200 dark:border-slate-800 py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              왜 이 강의인가요?
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                {
                  emoji: "🎯",
                  title: "따라만 해도 완성",
                  body: "모든 명령어와 코드가 그대로 복사·실행 가능합니다. 이해가 안 돼도 우선 만들어보세요.",
                },
                {
                  emoji: "💡",
                  title: "왜 이렇게 하는지",
                  body: "명령어만 던지지 않습니다. 각 단계가 왜 필요한지 초보자 눈높이로 설명합니다.",
                },
                {
                  emoji: "🛟",
                  title: "막힐 때 대비",
                  body: "매 주차마다 자주 발생하는 오류와 해결법을 미리 준비했습니다.",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6"
                >
                  <div className="mb-3 text-3xl">{f.emoji}</div>
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-100">
                    {f.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                8주 커리큘럼
              </h2>
              <p className="mt-3 text-slate-600 dark:text-slate-400">
                한 주씩 차근차근. 매주 새로운 앱을 하나씩 완성합니다.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {lessons.map((lesson) => (
                <Link
                  key={lesson.slug}
                  href={`/lessons/${lesson.slug}`}
                  className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 transition-all hover:border-blue-500 hover:shadow-lg dark:hover:border-blue-500"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full bg-blue-100 dark:bg-blue-950 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300">
                      Week {lesson.week}
                    </span>
                    <span className="text-2xl">{lesson.emoji}</span>
                  </div>
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {lesson.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {lesson.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              준비물은 노트북 하나면 충분합니다
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Windows/Mac 모두 OK. 사양은 문서 작업 되는 정도면 충분해요.
            </p>
            <Link
              href="/lessons/week-1"
              className="mt-8 inline-block rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-md hover:bg-blue-700"
            >
              지금 바로 시작하기 →
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-slate-500 dark:text-slate-400 sm:px-6 lg:px-8">
          문과생을 위한 AI 앱 만들기 · 강의 교안 · Made with ❤️
        </div>
      </footer>
    </>
  );
}
