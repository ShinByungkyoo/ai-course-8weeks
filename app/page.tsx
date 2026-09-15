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
                <strong>파이썬 몰라도 OK. 터미널 몰라도 OK.</strong> 브라우저에서
                <strong> AI에게 부탁만 하면</strong> 랜딩 페이지·포트폴리오·챗봇·To-Do 앱이
                실제 URL로 만들어집니다. 웹앱의 기초 개념을 하나씩 익히며 8주에 실전 프로젝트까지.
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
                  <span className="text-lg">🚫</span> 설치 없음
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="text-lg">💬</span> 말로 부탁하면 완성
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="text-lg">🌐</span> 브라우저만 있으면 OK
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="text-lg">🚀</span> 원클릭 무료 배포
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
                  emoji: "🖱️",
                  title: "설치할 것 없음",
                  body: "모든 실습을 브라우저에서 진행합니다. VS Code, 파이썬, 터미널 전부 필요 없어요.",
                },
                {
                  emoji: "🗣️",
                  title: "말로 부탁만 하면 끝",
                  body: "'이런 앱 만들어줘'라고 한국어로 부탁하면 진짜 웹앱이 만들어집니다. AI가 모든 코드를 대신 짜줍니다.",
                },
                {
                  emoji: "🔗",
                  title: "완성 즉시 공유",
                  body: "매 주차마다 https://... 공개 URL이 발급됩니다. 친구·부모님·교수님께 자랑하세요.",
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

        {/* Tools section */}
        <section className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30 py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              이 두 개만 씁니다
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600 dark:text-slate-400">
              둘 다 브라우저에서 바로 접속. 설치 없음. 무료 시작 가능.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8">
                <div className="mb-3 text-4xl">✨</div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-slate-100">
                  v0.dev
                </h3>
                <p className="mb-3 text-sm text-purple-600 dark:text-purple-400 font-medium">
                  Weeks 1~8 · v0.dev
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  &ldquo;이런 페이지 만들어줘&rdquo;라고 한국어로 부탁하면 진짜 웹앱을 만들어줍니다.
                  대화하면서 계속 수정할 수 있고, 완성되면 원클릭으로 인터넷에 공개돼요.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8">
                <div className="mb-3 text-4xl">▲</div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-slate-100">
                  Vercel
                </h3>
                <p className="mb-3 text-sm text-purple-600 dark:text-purple-400 font-medium">
                  Weeks 1~8 · vercel.com
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  v0가 만든 앱을 세상에 자동 배포해주는 서비스. 완성한 앱이 즉시 공개 URL로
                  발급되고, 원하면 개인 도메인(myapp.com)도 연결할 수 있어요.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              준비물은 노트북과 마음가짐뿐
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Windows/Mac 무관. 문서 작업 되는 정도의 노트북이면 충분해요.<br />
              Chrome이나 Edge 같은 최신 브라우저만 있으면 시작할 수 있습니다.
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
