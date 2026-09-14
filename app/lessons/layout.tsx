import { Sidebar } from "@/components/sidebar";
import { SiteHeader } from "@/components/site-header";

export default function LessonsLayout({ children }: LayoutProps<"/lessons">) {
  return (
    <>
      <SiteHeader />
      <div className="mx-auto flex w-full max-w-7xl flex-1">
        <Sidebar />
        <main className="flex-1 min-w-0 px-4 py-8 sm:px-6 lg:px-12 lg:py-12">
          <article className="mx-auto max-w-3xl">{children}</article>
        </main>
      </div>
    </>
  );
}
