import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI 앱 만들기 8주 완성 - 문과생을 위한 강의",
  description:
    "파이썬 몰라도 OK, 터미널 몰라도 OK. Google AI Studio로 8주 만에 AI 앱을 만들고 세상에 공개하는 문과생용 실습 강의.",
  openGraph: {
    title: "AI 앱 만들기 8주 완성",
    description:
      "파이썬 몰라도 OK. Google AI Studio로 8주 만에 AI 앱 만들기.",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
