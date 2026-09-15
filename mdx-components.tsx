import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";
import { CopyablePre } from "@/components/copyable-pre";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mt-2 mb-6 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-16 mb-5 text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl">
      <span className="relative">
        <span className="absolute -left-4 top-1/2 -translate-y-1/2 h-6 w-1 rounded-full bg-gradient-to-b from-violet-500 to-pink-500" />
        {children}
      </span>
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-10 mb-3 text-xl font-semibold tracking-tight text-[var(--foreground)]">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="mt-8 mb-2 text-lg font-semibold text-[var(--foreground)]">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="my-5 leading-[1.85] text-[15px] text-[var(--foreground)]/85">
      {children}
    </p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="font-medium text-violet-600 dark:text-violet-400 underline decoration-violet-400/40 decoration-2 underline-offset-[3px] hover:decoration-violet-500 dark:hover:decoration-violet-400 transition-colors"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="my-5 ml-6 list-disc space-y-2 leading-[1.8] text-[15px] text-[var(--foreground)]/85 marker:text-violet-400">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-5 ml-6 list-decimal space-y-2 leading-[1.8] text-[15px] text-[var(--foreground)]/85 marker:text-violet-500 marker:font-semibold">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="my-6 rounded-r-xl border-l-4 border-violet-400 bg-gradient-to-r from-violet-50/70 to-transparent dark:from-violet-950/30 py-3 pl-5 pr-4 italic text-[var(--foreground)]/80">
      {children}
    </blockquote>
  ),
  code: ({ children, className }: { children?: ReactNode; className?: string }) => {
    if (className) {
      return <code className={className}>{children}</code>;
    }
    return (
      <code className="rounded-md border border-violet-200/60 dark:border-violet-900/50 bg-violet-50 dark:bg-violet-950/40 px-1.5 py-0.5 font-mono text-[.85em] text-violet-700 dark:text-violet-300">
        {children}
      </code>
    );
  },
  pre: ({ children, className, ...props }) => (
    <CopyablePre className={className} {...props}>
      {children}
    </CopyablePre>
  ),
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="border-b border-[var(--border)] bg-[var(--surface)]">
      {children}
    </thead>
  ),
  th: ({ children }) => (
    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-b border-[var(--border)] px-4 py-3 text-[var(--foreground)]/85">
      {children}
    </td>
  ),
  hr: () => (
    <div className="my-14 flex items-center justify-center">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
    </div>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-[var(--foreground)]">{children}</strong>
  ),
  img: ({ src, alt }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src as string}
      alt={alt}
      className="my-6 rounded-xl border border-[var(--border)] shadow-sm"
    />
  ),
  details: ({ children }) => (
    <details className="my-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 [&[open]]:pb-4">
      {children}
    </details>
  ),
  summary: ({ children }) => (
    <summary className="cursor-pointer select-none font-semibold text-[var(--foreground)] hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
      {children}
    </summary>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
