# 문과생을 위한 웹앱 개발 8주 완성 강의

기획부터 배포까지, 실제 웹앱 개발 과정 전체를 8주에 압축해 경험하는 강의 교안 사이트입니다. 문과생 초보도 SDLC(Software Development Life Cycle)를 그대로 따라가며 실제로 프로덕트를 만들고 세상에 공개합니다. 코딩은 Google AI Studio Build가 대신합니다.

## 8주 커리큘럼 (SDLC 기반)

| 주차 | 단계 | 배우는 것 | 결과물 |
|---|---|---|---|
| 1 | 오리엔테이션 | 웹앱 구조, 개발 라이프사이클, AI Studio Build 첫 실습 | 첫 배포된 랜딩 페이지 |
| 2 | 🧭 기획 | 문제 정의, 페르소나, 유저 스토리, MVP | 1페이지 PRD |
| 3 | 🎨 설계 | 사이트맵, 유저 플로우, 와이어프레임, 디자인 토큰 | 와이어프레임 + 컬러 팔레트 |
| 4 | 🛠 개발 v1 | AI Studio Build로 프로토타입 | 클릭 가능한 프로토타입 |
| 5 | ⚡ 개발 v2 | 폼, 상태 관리, localStorage, 외부 API | 동적으로 작동하는 앱 |
| 6 | 🤖 개발 v3 | Gemini API 통합, 환경변수, Hands-On 리포 참고 | AI 기능이 들어간 완성 앱 |
| 7 | 🧪 QA | 기능·호환성·성능·접근성 검증, 실사용자 테스트 | QA 리포트 + 개선판 |
| 8 | 🚀 배포 | 프로덕션 배포, 커스텀 도메인, SEO, Analytics, 런칭 | 세상에 공개된 나만의 앱 |

## 학생 실습 스택

- **Google AI Studio Build** — 프롬프트로 웹앱을 생성·배포
- **Gemini API** (유료 요금제) — AI 기능 (Week 6)
- **Vercel / Cloud Run** — 커스텀 도메인 배포 (Week 8)
- **Lighthouse / Chrome DevTools** — QA (Week 7)
- **Formspree · Google Analytics** — 부가 서비스

## 참고 리포지토리

Week 2·6에서 프로젝트 아이디어 · AI 기능 패턴을 참고합니다.

- <a href="https://github.com/Sumanth077/Hands-On-AI-Engineering">**Hands-On-AI-Engineering**</a> — 60+개의 실제 AI 프로젝트 오픈소스

## 이 사이트 스택 (강사·기여자용)

- Next.js 16 App Router
- TypeScript · Tailwind CSS
- MDX (@next/mdx + rehype-pretty-code)
- Framer Motion (스크롤 애니메이션)
- Pretendard Variable (한글 폰트)
- Vercel 배포

## 로컬 개발

```bash
npm install
npm run dev
```

`http://localhost:3000`에서 확인.

## 프로덕션 빌드

```bash
npm run build
npm start
```

## 라이선스

강의용 교안. 자유롭게 참고·수정하여 활용하세요.
