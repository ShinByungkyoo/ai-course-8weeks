import { Sidebar } from "@/components/sidebar";
import { SiteHeader } from "@/components/site-header";
import { ReadingProgress } from "@/components/reading-progress";

export default function LessonsLayout({ children }: LayoutProps<"/lessons">) {
  return (
    <>
      <ReadingProgress />
      <SiteHeader />
      <div className="mx-auto flex w-full max-w-7xl flex-1">
        <Sidebar />
        <main className="flex-1 min-w-0 px-4 py-10 sm:px-6 lg:px-16 lg:py-16">
          <article className="mx-auto max-w-3xl">{children}</article>
        </main>
      </div>
    </>
  );
}
