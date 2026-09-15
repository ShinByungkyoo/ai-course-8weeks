export type Lesson = {
  slug: string;
  week: number;
  title: string;
  emoji: string;
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
    title: "웹의 기초 & v0.dev 첫 걸음",
    emoji: "🌐",
    summary:
      "웹페이지가 뭔지, URL이 뭔지 이해합니다. 그리고 v0.dev에서 '만들어줘'라고 부탁만 하면 진짜 웹페이지가 만들어지는 마법을 경험합니다.",
    goal: "인터넷에 공개된 나의 첫 'Hello, World' 웹페이지 URL 발급",
    difficulty: 1,
    duration: "약 1시간",
    tool: "v0.dev",
  },
  {
    slug: "week-2",
    week: 2,
    title: "랜딩 페이지 만들기",
    emoji: "🎨",
    summary:
      "웹페이지의 구조(헤더·히어로·섹션·푸터)를 배우고, 자기소개 랜딩 페이지를 만듭니다. 색깔·폰트·간격을 자유자재로 조정하는 요령까지.",
    goal: "친구·부모님·교수님께 자랑할 수 있는 나의 랜딩 페이지",
    difficulty: 1,
    duration: "약 2시간",
    tool: "v0.dev",
  },
  {
    slug: "week-3",
    week: 3,
    title: "여러 페이지 웹사이트",
    emoji: "🗺️",
    summary:
      "웹사이트는 여러 페이지의 모음입니다. 네비게이션 바로 페이지를 이동하는 개념을 배우고, 4개 페이지짜리 개인 포트폴리오를 완성합니다.",
    goal: "홈·소개·프로젝트·연락처가 있는 개인 포트폴리오 사이트",
    difficulty: 2,
    duration: "약 2~3시간",
    tool: "v0.dev",
  },
  {
    slug: "week-4",
    week: 4,
    title: "폼과 사용자 입력",
    emoji: "📝",
    summary:
      "사용자가 내 사이트에 뭔가를 입력하고 제출할 수 있게 만듭니다. 문의 폼, 뉴스레터 신청 폼 등. 실제로 이메일이 도착하도록 설정.",
    goal: "제출하면 진짜로 내 이메일에 도착하는 문의 폼",
    difficulty: 2,
    duration: "약 2시간",
    tool: "v0.dev + Formspree",
  },
  {
    slug: "week-5",
    week: 5,
    title: "카드 갤러리 만들기",
    emoji: "🎴",
    summary:
      "반복되는 UI(카드)로 데이터를 보여주는 방법을 배웁니다. 필터·정렬·검색 기능까지. 여행지 앨범, 카페 리스트 같은 앱의 뼈대.",
    goal: "필터·검색이 되는 여행지 갤러리 or 맛집 카탈로그",
    difficulty: 2,
    duration: "약 2~3시간",
    tool: "v0.dev",
  },
  {
    slug: "week-6",
    week: 6,
    title: "데이터 저장하는 앱 (To-Do)",
    emoji: "✅",
    summary:
      "사용자가 뭔가를 만들면 브라우저에 저장돼 다시 방문해도 남아있게 합니다. 할 일 관리 앱을 완성하며 '상태'와 '저장' 개념을 익혀요.",
    goal: "브라우저를 껐다 켜도 데이터가 남는 진짜 사용 가능한 To-Do 앱",
    difficulty: 2,
    duration: "약 3시간",
    tool: "v0.dev",
  },
  {
    slug: "week-7",
    week: 7,
    title: "외부 서비스 연결 (Gemini 챗봇)",
    emoji: "🔌",
    summary:
      "지금까지는 내 앱만으로 작동했죠. 이번 주엔 Gemini API를 연결해 진짜 AI가 답변하는 챗봇을 만듭니다. API·환경변수 개념을 배웁니다.",
    goal: "친구·가족이 접속해서 대화할 수 있는 진짜 AI 챗봇 웹앱",
    difficulty: 3,
    duration: "약 3시간",
    tool: "v0.dev + Gemini API",
  },
  {
    slug: "week-8",
    week: 8,
    title: "최종 프로젝트 & 커스텀 도메인",
    emoji: "🚀",
    summary:
      "8주간 배운 걸 조합해 여러분만의 앱을 완성하고, 예쁜 도메인(예: myapp.com)을 연결합니다. 검색 노출·공유 준비까지.",
    goal: "커스텀 도메인이 붙은, 세상에 자랑할 수 있는 완성된 웹앱",
    difficulty: 3,
    duration: "약 4시간+",
    tool: "v0.dev + Vercel",
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
