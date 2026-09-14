# 문과생을 위한 AI 앱 만들기 8주 완성 강의 (No-Code)

파이썬 몰라도, 터미널 몰라도, 브라우저만 있으면 8주 만에 AI 웹앱을 완성해 배포할 수 있도록 안내하는 강의 교안 사이트입니다.

## 커리큘럼

| 주차 | 주제 | 도구 | 만드는 앱 |
|---|---|---|---|
| 1 | Google AI Studio 시작 | AI Studio | 나만의 학습 도우미 (공유 URL) |
| 2 | 프롬프트로 캐릭터 만들기 | AI Studio | 3개의 페르소나 챗봇 |
| 3 | 이미지 활용 (Vision & 생성) | AI Studio | 여행 사진 캡션 · Imagen |
| 4 | 구조화 출력 | AI Studio | 영수증 자동 정리 |
| 5 | v0.dev로 첫 웹앱 | v0.dev | 자기소개 웹페이지 |
| 6 | v0 + Gemini 챗봇 | v0.dev + Gemini | 진짜 배포된 챗봇 |
| 7 | 원하는 기능 추가 | v0.dev + Gemini | PDF/이미지/웹검색 챗봇 |
| 8 | 최종 프로젝트 & 공개 | v0.dev + Gemini | 나만의 앱 완성 & 배포 |

## 학생 실습 스택

- **Google AI Studio** (Weeks 1-4) — 브라우저에서 프롬프트로 놀기
- **v0.dev** (Weeks 5-8) — 말로 부탁하면 웹앱이 만들어짐
- **Gemini API** (유료 요금제) — 학생 각자 발급
- **Vercel** — v0가 자동 배포 (학생은 클릭만)

**설치할 것 없음. 파이썬 없음. 터미널 없음.**

## 이 사이트 스택 (강사·기여자용)

- Next.js 16 App Router
- TypeScript · Tailwind CSS
- MDX (@next/mdx + rehype-pretty-code)
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
