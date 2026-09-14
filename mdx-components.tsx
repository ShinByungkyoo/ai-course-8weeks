import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mt-2 mb-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-2">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-3 text-xl font-semibold text-slate-900 dark:text-slate-100">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="mt-6 mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="my-4 leading-7 text-slate-700 dark:text-slate-300">{children}</p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="text-blue-600 dark:text-blue-400 underline underline-offset-4 hover:text-blue-800 dark:hover:text-blue-300"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="my-4 ml-6 list-disc space-y-2 text-slate-700 dark:text-slate-300 marker:text-slate-400">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 ml-6 list-decimal space-y-2 text-slate-700 dark:text-slate-300 marker:text-slate-400">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-7">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/30 py-2 px-4 italic text-slate-700 dark:text-slate-300">
      {children}
    </blockquote>
  ),
  code: ({ children, className }: { children?: ReactNode; className?: string }) => {
    if (className) {
      return <code className={className}>{children}</code>;
    }
    return (
      <code className="rounded bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 text-sm font-mono text-pink-600 dark:text-pink-400 border border-slate-200 dark:border-slate-700">
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="my-6 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-4 text-sm leading-6">
      {children}
    </pre>
  ),
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="border-b-2 border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
      {children}
    </thead>
  ),
  th: ({ children }) => (
    <th className="px-4 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-b border-slate-200 dark:border-slate-800 px-4 py-2 text-slate-700 dark:text-slate-300">
      {children}
    </td>
  ),
  hr: () => <hr className="my-10 border-slate-200 dark:border-slate-800" />,
  strong: ({ children }) => (
    <strong className="font-bold text-slate-900 dark:text-slate-100">{children}</strong>
  ),
  img: ({ src, alt }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src as string} alt={alt} className="my-6 rounded-lg border border-slate-200 dark:border-slate-800" />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
