export type Lesson = {
  slug: string;
  week: number;
  title: string;
  emoji: string;
  phase: string;
  summary: string;
  goal: string;
  difficulty: 1 | 2 | 3;
  duration: string;
  tool: string;
};

export const lessons: Lesson[] = [
  {
    slug: "week-1",
    week: 1,
    title: "웹앱 개발 여정 & 첫 배포",
    emoji: "🎬",
    phase: "오리엔테이션",
    summary:
      "웹앱이 뭔지, 개발 라이프사이클(기획→설계→개발→테스트→배포)이 어떻게 굴러가는지 감을 잡고, AI Studio Build로 첫 웹페이지를 진짜 인터넷에 올려봅니다.",
    goal: "공개 URL로 배포된 나의 첫 랜딩 페이지",
    difficulty: 1,
    duration: "약 1~2시간",
    tool: "AI Studio Build",
  },
  {
    slug: "week-2",
    week: 2,
    title: "웹 기획 - 문제 정의와 PRD",
    emoji: "🧭",
    phase: "기획 (Discovery)",
    summary:
      "코드를 짜기 전에 무엇을 왜 만들 건지 정합니다. 문제·페르소나·유저 스토리·MVP를 뽑아 1페이지 PRD를 작성합니다.",
    goal: "8주 최종 프로젝트의 1페이지 PRD",
    difficulty: 1,
    duration: "약 2시간",
    tool: "Notion or Google Docs",
  },
  {
    slug: "week-3",
    week: 3,
    title: "UI/UX 설계 & 와이어프레임",
    emoji: "🎨",
    phase: "설계 (Design)",
    summary:
      "사이트맵과 유저 플로우로 화면 구조를 잡고, 저충실도 와이어프레임을 그립니다. 색·폰트·간격 규칙(디자인 토큰)도 정합니다.",
    goal: "5~7개 화면 와이어프레임 + 디자인 토큰",
    difficulty: 1,
    duration: "약 2~3시간",
    tool: "종이 or Figma + Coolors",
  },
  {
    slug: "week-4",
    week: 4,
    title: "프로토타입 개발 (Build v1)",
    emoji: "🛠️",
    phase: "개발 v1",
    summary:
      "AI Studio Build를 열고 Week 2·3의 문서를 바탕으로 첫 프로토타입을 생성합니다. 여러 페이지·네비게이션·기본 UI까지.",
    goal: "클릭해서 돌아다닐 수 있는 프로토타입 URL",
    difficulty: 2,
    duration: "약 3시간",
    tool: "Google AI Studio Build",
  },
  {
    slug: "week-5",
    week: 5,
    title: "인터랙션과 데이터 (Build v2)",
    emoji: "⚡",
    phase: "개발 v2",
    summary:
      "정적 화면에 폼·상태·저장을 붙여 진짜 동작하는 앱으로 만듭니다. localStorage와 외부 API 연결 기초까지.",
    goal: "사용자 입력을 받아 저장·재사용하는 동적 앱",
    difficulty: 2,
    duration: "약 3시간",
    tool: "AI Studio Build",
  },
  {
    slug: "week-6",
    week: 6,
    title: "AI 기능 통합 (Build v3)",
    emoji: "🤖",
    phase: "개발 v3",
    summary:
      "앱의 핵심에 Gemini API를 넣어 요약·분류·생성 같은 AI 기능을 붙입니다. Hands-On-AI-Engineering의 유사 프로젝트를 참고해 아이디어를 확장합니다.",
    goal: "AI 기능이 실제 작동하는 완성판 앱",
    difficulty: 3,
    duration: "약 3~4시간",
    tool: "AI Studio Build + Gemini API",
  },
  {
    slug: "week-7",
    week: 7,
    title: "테스트와 개선 (QA)",
    emoji: "🧪",
    phase: "테스트 (QA)",
    summary:
      "기능·모바일 반응형·접근성·성능(Lighthouse)을 체크리스트로 검증하고, 실사용자 3명 이상 피드백을 받아 개선합니다.",
    goal: "QA 리포트 + 개선 커밋",
    difficulty: 2,
    duration: "약 3시간",
    tool: "Chrome DevTools + Lighthouse",
  },
  {
    slug: "week-8",
    week: 8,
    title: "배포·런칭 & 세상에 공개",
    emoji: "🚀",
    phase: "배포 (Launch)",
    summary:
      "프로덕션 배포·커스텀 도메인·Analytics·SEO·OG 미리보기까지 프로덕트 마무리 작업을 하고, SNS·커뮤니티에 공식 런칭합니다.",
    goal: "커스텀 도메인 붙은 완성 앱 + 회고문",
    difficulty: 3,
    duration: "약 3~4시간",
    tool: "Vercel or Cloud Run + Analytics",
  },
];

export function getLesson(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug);
}

export function getAdjacent(slug: string): { prev?: Lesson; next?: Lesson } {
  const idx = lessons.findIndex((l) => l.slug === slug);
  if (idx === -1) return {};
  return {
    prev: idx > 0 ? lessons[idx - 1] : undefined,
    next: idx < lessons.length - 1 ? lessons[idx + 1] : undefined,
  };
}
