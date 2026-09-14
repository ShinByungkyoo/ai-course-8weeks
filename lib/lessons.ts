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
    title: "Google AI Studio 시작하기",
    emoji: "🎬",
    summary:
      "브라우저만 켜면 Gemini와 대화할 수 있는 Google AI Studio를 익힙니다. 계정 준비부터 첫 프롬프트 저장·공유까지.",
    goal: "나만의 학습 도우미 프롬프트를 만들어 공유 URL로 친구에게 보내기",
    difficulty: 1,
    duration: "약 1시간",
    tool: "Google AI Studio",
  },
  {
    slug: "week-2",
    week: 2,
    title: "프롬프트로 캐릭터 만들기",
    emoji: "🎭",
    summary:
      "'시스템 지시(System Instructions)'로 챗봇에 성격과 말투를 부여합니다. 조선시대 선비, 츤데레, 셰프 등.",
    goal: "3개의 서로 다른 성격 챗봇을 만들어 각각의 공유 URL 발급",
    difficulty: 1,
    duration: "약 1시간",
    tool: "Google AI Studio",
  },
  {
    slug: "week-3",
    week: 3,
    title: "이미지 활용하기 (Vision & 생성)",
    emoji: "🖼️",
    summary:
      "사진을 업로드해 AI에게 설명 받거나, 상상하는 이미지를 Imagen으로 생성합니다.",
    goal: "여행 사진 → 캡션 자동 작성 + 상상하는 장면을 이미지로 생성",
    difficulty: 1,
    duration: "약 1~2시간",
    tool: "Google AI Studio",
  },
  {
    slug: "week-4",
    week: 4,
    title: "AI가 정리해주는 표 (구조화 출력)",
    emoji: "📊",
    summary:
      "AI Studio의 Structured Output 기능으로 텍스트를 자동으로 표·목록·카테고리로 정리합니다.",
    goal: "영수증 사진 5장 → 표 형식 지출 정리",
    difficulty: 2,
    duration: "약 1~2시간",
    tool: "Google AI Studio",
  },
  {
    slug: "week-5",
    week: 5,
    title: "v0.dev로 첫 웹앱 만들기",
    emoji: "✨",
    summary:
      "'이런 앱 만들어줘'라고 말로 부탁하면 진짜 웹앱이 만들어집니다. v0.dev를 만나봅시다.",
    goal: "내 자기소개 웹페이지를 만들어 공개 URL로 발급",
    difficulty: 2,
    duration: "약 1~2시간",
    tool: "v0.dev",
  },
  {
    slug: "week-6",
    week: 6,
    title: "v0로 Gemini 챗봇 웹앱",
    emoji: "🤖",
    summary:
      "v0에게 'Gemini API를 쓰는 챗봇 만들어줘'라고 부탁합니다. Week 2에서 만든 페르소나를 진짜 웹사이트에 심습니다.",
    goal: "친구·부모님이 접속해 대화할 수 있는 실제 챗봇 웹사이트",
    difficulty: 2,
    duration: "약 2~3시간",
    tool: "v0.dev + Gemini",
  },
  {
    slug: "week-7",
    week: 7,
    title: "원하는 기능 추가하기",
    emoji: "🛠️",
    summary:
      "v0에게 계속 대화하면서 앱을 발전시킵니다. 파일 업로드, 이미지 표시, 다크 모드 등.",
    goal: "PDF 업로드 → 요약해주는 앱 또는 이미지 업로드 → 설명해주는 앱",
    difficulty: 2,
    duration: "약 2~3시간",
    tool: "v0.dev + Gemini",
  },
  {
    slug: "week-8",
    week: 8,
    title: "최종 프로젝트 & 세상에 공개",
    emoji: "🚀",
    summary:
      "8주간 배운 걸 조합해 여러분만의 앱을 완성합니다. 커스텀 도메인 연결과 SNS 공유까지.",
    goal: "친구·부모님·교수님께 자랑할 수 있는 나만의 완성된 웹앱",
    difficulty: 3,
    duration: "약 3~4시간+",
    tool: "v0.dev + Gemini",
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
