export type Lesson = {
  slug: string;
  week: number;
  title: string;
  emoji: string;
  summary: string;
  goal: string;
  difficulty: 1 | 2 | 3;
  duration: string;
};

export const lessons: Lesson[] = [
  {
    slug: "week-1",
    week: 1,
    title: "개발 환경 세팅과 첫 AI 대화",
    emoji: "🛠️",
    summary: "Python, VS Code, 터미널, Gemini API 키를 준비하고 첫 AI 프로그램을 실행합니다.",
    goal: "\"Hello, AI!\" 라고 물으면 Gemini가 답하는 10줄짜리 파이썬 프로그램 완성",
    difficulty: 1,
    duration: "약 2~3시간",
  },
  {
    slug: "week-2",
    week: 2,
    title: "Streamlit으로 첫 챗봇 웹앱",
    emoji: "💬",
    summary: "Streamlit으로 예쁜 웹 UI를 만들고, 대화 기록이 이어지는 챗봇을 완성합니다.",
    goal: "브라우저에서 대화가 이어지는 나만의 챗봇 웹앱 실행",
    difficulty: 1,
    duration: "약 2~3시간",
  },
  {
    slug: "week-3",
    week: 3,
    title: "프롬프트 엔지니어링과 페르소나 챗봇",
    emoji: "🎭",
    summary: "시스템 프롬프트와 few-shot 예제로 챗봇에게 성격과 말투를 부여합니다.",
    goal: "조선시대 선비처럼 대답하는 특별한 캐릭터 챗봇 만들기",
    difficulty: 1,
    duration: "약 2~3시간",
  },
  {
    slug: "week-4",
    week: 4,
    title: "PDF와 대화하기 (RAG 입문)",
    emoji: "📄",
    summary: "PDF를 업로드하면 그 내용을 바탕으로 답변하는 앱을 만듭니다. RAG의 원리도 함께 배웁니다.",
    goal: "논문·교과서·계약서 PDF를 올리면 궁금한 걸 답해주는 앱 완성",
    difficulty: 2,
    duration: "약 3~4시간",
  },
  {
    slug: "week-5",
    week: 5,
    title: "이미지 이해하기 (Gemini Vision)",
    emoji: "👁️",
    summary: "이미지를 AI가 보고 이해합니다. 사진 설명, 영수증에서 정보 뽑기까지.",
    goal: "영수증 사진을 올리면 상호·금액·날짜를 자동으로 정리해주는 앱",
    difficulty: 2,
    duration: "약 2~3시간",
  },
  {
    slug: "week-6",
    week: 6,
    title: "유튜브 영상 요약봇",
    emoji: "📺",
    summary: "유튜브 URL만 넣으면 스크립트를 가져와 챕터별로 요약하는 실용 도구를 만듭니다.",
    goal: "긴 유튜브 영상을 3분 만에 이해할 수 있는 요약봇 완성",
    difficulty: 2,
    duration: "약 3시간",
  },
  {
    slug: "week-7",
    week: 7,
    title: "도구를 쓰는 AI 에이전트",
    emoji: "🤖",
    summary: "AI가 스스로 계산기·검색 같은 도구를 골라 쓰게 만듭니다. 에이전트의 핵심 개념.",
    goal: "질문에 따라 웹 검색이나 계산기를 자동으로 쓰는 챗봇",
    difficulty: 3,
    duration: "약 3~4시간",
  },
  {
    slug: "week-8",
    week: 8,
    title: "세상에 공개하기 & 최종 프로젝트",
    emoji: "🚀",
    summary: "만든 앱을 Streamlit Cloud로 무료 배포합니다. 그리고 자신만의 앱을 완성합니다.",
    goal: "공개 URL로 친구들에게 자랑할 수 있는 나만의 AI 앱",
    difficulty: 3,
    duration: "약 4시간+",
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
