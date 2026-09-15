import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { HeroBackground } from "@/components/hero-background";
import { MotionSection, MotionStagger, MotionItem } from "@/components/motion-section";
import { lessons } from "@/lib/lessons";

const highlights = [
  {
    emoji: "🖱️",
    title: "설치 없이 브라우저에서",
    body: "파이썬·터미널·에디터 다 필요 없어요. Chrome이나 Edge만 있으면 바로 시작할 수 있습니다.",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    emoji: "🗣️",
    title: "말로 부탁하면 완성",
    body: "“이런 기능 만들어줘” 하고 한국어로 부탁하면 Gemini가 대신 만듭니다. AI 시대의 코딩 방식.",
    gradient: "from-pink-500 to-orange-400",
  },
  {
    emoji: "🔗",
    title: "완성 즉시 공유 URL",
    body: "매 주차마다 공개 URL이 발급됩니다. 친구·부모님·교수님께 링크로 자랑하세요.",
    gradient: "from-orange-400 to-amber-500",
  },
];

const tools = [
  {
    name: "Google AI Studio",
    weeks: "Weeks 1~8",
    url: "aistudio.google.com",
    description:
      "Gemini AI를 다루는 놀이터. 프롬프트 작성 → System Instructions → JSON·이미지·도구 사용까지 마우스 클릭만으로.",
    accent: "from-violet-500 via-indigo-500 to-blue-500",
    icon: "🎨",
  },
  {
    name: "CodePen",
    weeks: "Weeks 7~8",
    url: "codepen.io",
    description:
      "AI Studio에서 받은 코드를 붙여넣으면 즉시 웹페이지가 됩니다. 발급된 URL로 실제 앱을 세상에 공개.",
    accent: "from-pink-500 via-rose-500 to-orange-400",
    icon: "🖌️",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <HeroBackground />
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
            <MotionSection className="mx-auto max-w-4xl text-center">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/70 px-4 py-1.5 text-sm font-medium text-[var(--muted)] backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-500 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
                </span>
                <span>문과생 완전 초보 대상 · 2026 봄학기 8주 실습</span>
              </div>

              <h1 className="text-5xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-7xl lg:text-[5.5rem]">
                <span className="block">8주 만에 만드는</span>
                <span className="mt-2 block gradient-text">나만의 AI 앱</span>
              </h1>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
                파이썬 몰라도 OK, 터미널 몰라도 OK. 브라우저에서
                <strong className="text-[var(--foreground)]"> AI에게 부탁만 하면</strong>
                {" "}챗봇·문서 정리기·이미지 앱이 완성됩니다.
              </p>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/lessons/week-1"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-violet-500/25 transition-transform hover:scale-[1.02]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400" />
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(90deg, #a78bfa, #f472b6, #fb923c, #a78bfa)",
                      backgroundSize: "300% 100%",
                      animation: "gradient-shift 3s ease infinite",
                    }}
                  />
                  <span className="relative">Week 1부터 시작하기</span>
                  <span className="relative transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
                <Link
                  href="/lessons"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-7 py-3.5 text-base font-semibold text-[var(--foreground)] transition-colors hover:border-violet-400 hover:text-violet-600 dark:hover:text-violet-400"
                >
                  전체 커리큘럼 보기
                </Link>
              </div>

              <MotionStagger className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-[var(--muted)]">
                {[
                  { icon: "🚫", label: "설치 없음" },
                  { icon: "💬", label: "말로 부탁하면 완성" },
                  { icon: "🌐", label: "브라우저만 있으면 OK" },
                  { icon: "🚀", label: "원클릭 배포" },
                ].map((item) => (
                  <MotionItem
                    key={item.label}
                    className="inline-flex items-center gap-2"
                  >
                    <span className="text-lg">{item.icon}</span>
                    {item.label}
                  </MotionItem>
                ))}
              </MotionStagger>
            </MotionSection>
          </div>
        </section>

        {/* Highlights */}
        <section className="relative border-t border-[var(--border)] py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <MotionSection className="mx-auto max-w-2xl text-center">
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
                왜 이 강의인가요
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
                코딩 배우지 않고도
                <br className="sm:hidden" />
                <span className="gradient-text"> 진짜 앱</span>을 만듭니다
              </h2>
            </MotionSection>

            <MotionStagger className="mt-16 grid gap-6 md:grid-cols-3">
              {highlights.map((f) => (
                <MotionItem key={f.title}>
                  <div className="card-lift group h-full rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm">
                    <div
                      className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${f.gradient} text-2xl shadow-lg shadow-violet-500/20`}
                    >
                      <span className="drop-shadow-sm">{f.emoji}</span>
                    </div>
                    <h3 className="mb-3 text-xl font-bold tracking-tight text-[var(--foreground)]">
                      {f.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-[var(--muted)]">
                      {f.body}
                    </p>
                  </div>
                </MotionItem>
              ))}
            </MotionStagger>
          </div>
        </section>

        {/* Curriculum */}
        <section className="relative overflow-hidden border-t border-[var(--border)] bg-gradient-to-b from-transparent via-violet-50/40 to-transparent dark:via-violet-950/10 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <MotionSection className="mx-auto max-w-2xl text-center">
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-pink-600 dark:text-pink-400">
                8주 커리큘럼
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
                한 주씩 <span className="gradient-text">차근차근</span>
              </h2>
              <p className="mt-4 text-[var(--muted)]">
                매주 새로운 앱을 하나씩 완성합니다. 지난 주에 만든 것을 발전시켜요.
              </p>
            </MotionSection>

            <MotionStagger className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {lessons.map((lesson) => (
                <MotionItem key={lesson.slug}>
                  <Link
                    href={`/lessons/${lesson.slug}`}
                    className="card-lift group relative flex h-full items-start gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm hover:border-violet-300 dark:hover:border-violet-800"
                  >
                    <div className="shrink-0">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-pink-500 to-orange-400 text-white font-mono text-lg font-bold shadow-md shadow-violet-500/20 transition-transform group-hover:scale-105">
                        {String(lesson.week).padStart(2, "0")}
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <span className="text-lg">{lesson.emoji}</span>
                        <h3 className="text-base font-bold text-[var(--foreground)] group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                          {lesson.title}
                        </h3>
                      </div>
                      <p className="mb-3 line-clamp-2 text-[13px] leading-relaxed text-[var(--muted)]">
                        {lesson.summary}
                      </p>
                      <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                        <span className="rounded-full bg-violet-50 px-2 py-0.5 font-medium text-violet-700 dark:bg-violet-950/50 dark:text-violet-300">
                          {lesson.tool}
                        </span>
                        <span className="text-[var(--muted)]">·</span>
                        <span className="text-[var(--muted)]">
                          {lesson.duration}
                        </span>
                      </div>
                    </div>
                  </Link>
                </MotionItem>
              ))}
            </MotionStagger>
          </div>
        </section>

        {/* Tools */}
        <section className="border-t border-[var(--border)] py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <MotionSection className="mx-auto max-w-2xl text-center">
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">
                사용 도구
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
                이 <span className="gradient-text">두 개</span>만 씁니다
              </h2>
              <p className="mt-4 text-[var(--muted)]">
                브라우저에서 바로 접속. 설치 없음. 첫 시작은 무료.
              </p>
            </MotionSection>

            <MotionStagger className="mt-16 grid gap-6 md:grid-cols-2">
              {tools.map((t) => (
                <MotionItem key={t.name}>
                  <div className="card-lift group relative h-full overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm">
                    <div
                      className={`absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${t.accent} opacity-20 blur-3xl transition-opacity group-hover:opacity-40`}
                    />
                    <div className="relative">
                      <div
                        className={`mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${t.accent} text-3xl shadow-lg`}
                      >
                        <span className="drop-shadow-sm">{t.icon}</span>
                      </div>
                      <h3 className="mb-1 text-2xl font-bold text-[var(--foreground)]">
                        {t.name}
                      </h3>
                      <div className="mb-4 flex items-center gap-2 text-sm">
                        <span className="rounded-full bg-violet-50 px-2 py-0.5 font-mono text-xs text-violet-700 dark:bg-violet-950/50 dark:text-violet-300">
                          {t.weeks}
                        </span>
                        <span className="font-mono text-xs text-[var(--muted)]">
                          {t.url}
                        </span>
                      </div>
                      <p className="text-[15px] leading-relaxed text-[var(--muted)]">
                        {t.description}
                      </p>
                    </div>
                  </div>
                </MotionItem>
              ))}
            </MotionStagger>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden border-t border-[var(--border)]">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-pink-50 to-orange-50 dark:from-violet-950/20 dark:via-pink-950/20 dark:to-orange-950/20" />
          <div className="relative mx-auto max-w-4xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <MotionSection className="text-center">
              <h2 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
                준비물은
                <br />
                노트북과 <span className="gradient-text">마음가짐</span>뿐
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-[var(--muted)]">
                Windows/Mac 무관. 문서 작업 되는 정도의 노트북이면 충분해요.<br />
                Chrome이나 Edge만 있으면 시작할 수 있습니다.
              </p>
              <Link
                href="/lessons/week-1"
                className="group relative mt-10 inline-flex items-center gap-2 overflow-hidden rounded-full px-8 py-4 text-lg font-semibold text-white shadow-2xl shadow-violet-500/30 transition-transform hover:scale-[1.03]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400" />
                <span className="relative">지금 바로 시작하기</span>
                <span className="relative transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </MotionSection>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
              <span className="relative flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-violet-500 via-pink-500 to-orange-400 text-[10px] font-bold text-white">
                AI
              </span>
              <span>문과생을 위한 AI 앱 만들기 강의</span>
            </div>
            <div className="text-xs text-[var(--muted)]">
              Made with 💜 · 2026
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
