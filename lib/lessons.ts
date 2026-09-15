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
    title: "Google AI Studio 첫 걸음",
    emoji: "🎬",
    summary:
      "브라우저에서 Google AI Studio에 접속해 Gemini와 첫 대화를 나눕니다. 프롬프트 저장 & 공유 URL 발급까지.",
    goal: "친구에게 카톡으로 보낼 수 있는 나의 첫 챗봇 공유 URL",
    difficulty: 1,
    duration: "약 1시간",
    tool: "Google AI Studio",
  },
  {
    slug: "week-2",
    week: 2,
    title: "System Instructions로 캐릭터 만들기",
    emoji: "🎭",
    summary:
      "AI에게 성격과 규칙을 부여하는 System Instructions를 배웁니다. 조선시대 선비, 츤데레, 셰프 등 3가지 캐릭터를 만듭니다.",
    goal: "각기 다른 성격을 가진 3개의 챗봇 (공유 URL 3개)",
    difficulty: 1,
    duration: "약 1~2시간",
    tool: "Google AI Studio",
  },
  {
    slug: "week-3",
    week: 3,
    title: "프롬프트 저장·비교·관리",
    emoji: "🗂️",
    summary:
      "만든 프롬프트를 라이브러리에 정리하는 법, Compare 기능으로 여러 프롬프트를 나란히 비교하는 법을 익힙니다.",
    goal: "My Prompts에 정리된 5개 이상의 프롬프트 & Compare 결과 스크린샷",
    difficulty: 1,
    duration: "약 1시간",
    tool: "Google AI Studio",
  },
  {
    slug: "week-4",
    week: 4,
    title: "Structured Output (JSON으로 정리)",
    emoji: "📊",
    summary:
      "AI 답변을 자유 텍스트가 아닌 구조화된 JSON으로 받게 합니다. 뉴스·영수증·이력서 자동 정리 앱.",
    goal: "영수증 사진 5장을 JSON 표로 자동 정리하는 프롬프트",
    difficulty: 2,
    duration: "약 1~2시간",
    tool: "Google AI Studio",
  },
  {
    slug: "week-5",
    week: 5,
    title: "이미지 활용 (Vision)",
    emoji: "👁️",
    summary:
      "사진을 업로드해 AI에게 설명·분석·정보 추출을 시킵니다. 여행 사진 캡션, 옷장 코디 추천 등.",
    goal: "여행 사진 3장 → 자동 감성 캡션 생성 (Structured Output 결합)",
    difficulty: 2,
    duration: "약 2시간",
    tool: "Google AI Studio",
  },
  {
    slug: "week-6",
    week: 6,
    title: "도구 사용하는 AI (Function Calling & Grounding)",
    emoji: "🛠️",
    summary:
      "AI가 스스로 계산기·시계·구글 검색 같은 도구를 골라 씁니다. 최신 정보까지 답할 수 있는 진짜 어시스턴트를.",
    goal: "웹 검색·계산·시간을 활용해 답하는 리서치 어시스턴트",
    difficulty: 3,
    duration: "약 2~3시간",
    tool: "Google AI Studio",
  },
  {
    slug: "week-7",
    week: 7,
    title: "Get Code로 웹페이지에 심기",
    emoji: "💻",
    summary:
      "AI Studio의 Get Code로 코드를 받아 CodePen에 붙여 넣기만 하면, 여러분 프롬프트가 진짜 웹페이지가 됩니다.",
    goal: "친구·부모님이 접속할 수 있는 나만의 챗봇 웹페이지 (CodePen URL)",
    difficulty: 3,
    duration: "약 2~3시간",
    tool: "AI Studio + CodePen",
  },
  {
    slug: "week-8",
    week: 8,
    title: "최종 프로젝트 & 세상에 공개",
    emoji: "🚀",
    summary:
      "지금까지 배운 모든 기능(System·JSON·Vision·Tools·Code)을 조합해 여러분의 앱을 완성하고 공유합니다.",
    goal: "실제로 쓸 수 있는 나만의 AI 앱 (배포 URL + 회고문)",
    difficulty: 3,
    duration: "약 4시간+",
    tool: "AI Studio + CodePen",
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
