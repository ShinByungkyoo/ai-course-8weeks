"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-[var(--border)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-semibold tracking-tight"
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg">
            <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-violet-500 via-pink-500 to-orange-400 opacity-90 group-hover:opacity-100 transition-opacity" />
            <span className="relative text-white text-sm font-bold">AI</span>
          </span>
          <span className="hidden sm:inline text-[15px]">문과생 AI 8주</span>
        </Link>

        <nav className="flex items-center gap-1 text-sm">
          <Link
            href="/lessons"
            className="rounded-full px-4 py-1.5 font-medium text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-black/[.04] dark:hover:bg-white/[.06] transition-colors"
          >
            강의 목차
          </Link>
          <Link
            href="/lessons/week-1"
            className="relative inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 font-semibold text-white overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400 transition-transform duration-300 group-hover:scale-105" />
            <span className="relative">시작하기</span>
            <span className="relative transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
