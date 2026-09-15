import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { HeroBackground } from "@/components/hero-background";
import { MotionSection, MotionStagger, MotionItem } from "@/components/motion-section";
import { lessons } from "@/lib/lessons";

const highlights = [
  {
    emoji: "🧭",
    title: "개발자처럼 일하기",
    body: "실제 팀이 프로덕트를 만드는 순서(기획 → 설계 → 개발 → 테스트 → 배포)를 그대로 따라합니다. 앱 하나를 넘어 방법론을 배웁니다.",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    emoji: "🗣️",
    title: "코딩은 AI에게",
    body: "여러분은 뭘 만들지·어떻게 보일지·잘 되는지 확인하는 데 집중. 실제 코드는 Google AI Studio Build가 대신 짜줍니다.",
    gradient: "from-pink-500 to-orange-400",
  },
  {
    emoji: "🚀",
    title: "매 주 실제 배포",
    body: "모든 주차의 결과물이 실제 URL로 배포됩니다. 마지막 주엔 커스텀 도메인까지 붙여 프로덕트로 마무리.",
    gradient: "from-orange-400 to-amber-500",
  },
];

const tools = [
  {
    name: "Google AI Studio Build",
    weeks: "Weeks 1·4~8",
    url: "aistudio.google.com",
    description:
      "여러분이 설계한 화면과 요구사항을 프롬프트로 전달하면 실제 웹앱을 만들어주는 Gemini 기반 앱 빌더. 미리보기·수정·배포까지 브라우저 안에서.",
    accent: "from-violet-500 via-indigo-500 to-blue-500",
    icon: "🎨",
  },
  {
    name: "Vercel / Analytics / Lighthouse",
    weeks: "Weeks 7·8",
    url: "vercel.com + Chrome DevTools",
    description:
      "커스텀 도메인 연결, Analytics로 방문자 통계, Lighthouse로 성능·접근성 검증. 개발자가 실무에서 쓰는 표준 도구들.",
    accent: "from-pink-500 via-rose-500 to-orange-400",
    icon: "🚀",
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
                <span className="block">기획부터 배포까지</span>
                <span className="mt-2 block gradient-text">웹앱 만들기 8주</span>
              </h1>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
                문과생도 8주면 <strong className="text-[var(--foreground)]">웹앱 개발 전 과정</strong>을 경험합니다.
                기획서 · 와이어프레임 · AI Studio Build로 실제 개발 · QA · 커스텀 도메인 배포까지.
                코딩은 AI가, 여러분은 프로덕트 메이커의 사고방식을.
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
                  { icon: "🧭", label: "기획 · 설계" },
                  { icon: "🛠", label: "AI Studio Build" },
                  { icon: "🧪", label: "QA · 실사용자 테스트" },
                  { icon: "🚀", label: "커스텀 도메인 배포" },
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
                프로덕트 만드는 <span className="gradient-text">방법론</span>을 배웁니다
              </h2>
              <p className="mt-4 text-[var(--muted)]">
                8주 동안 만드는 앱 하나보다, 다음 앱도 스스로 만들 수 있는 능력이 남습니다.
              </p>
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
                기획부터 배포까지 <span className="gradient-text">6단계</span>
              </h2>
              <p className="mt-4 text-[var(--muted)]">
                오리엔테이션 → 기획 → 설계 → 개발 (3주) → 테스트 → 배포. 실무 그대로.
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
                      <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-violet-600 dark:text-violet-400">
                        {lesson.phase}
                      </div>
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
