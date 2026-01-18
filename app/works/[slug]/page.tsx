import { notFound } from "next/navigation";
import { getWorkBySlug, getAllWorkSlugs } from "@/lib/works";
import type { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllWorkSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = await getWorkBySlug(slug);

  if (!work) {
    return { title: "作品が見つかりません" };
  }

  return {
    title: work.title,
    description: work.description,
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const work = await getWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  return (
    <div>
      {/* ヘッダー */}
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-2">
          <h1 className="text-3xl font-bold">{work.title}</h1>
          <span className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
            {work.status}
          </span>
        </div>

        <p className="mb-3 text-muted-foreground">{work.description}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded bg-primary/10 px-2.5 py-0.5 text-xs">
            {work.category}
          </span>
          <span className="rounded bg-primary/10 px-2.5 py-0.5 text-xs">
            {work.type}
          </span>
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* リンク集 */}
        <div className="flex flex-wrap gap-3">
          {work.demo && (
            <Link
              href={work.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              Demo ↗
            </Link>
          )}
          {work.repo && (
            <Link
              href={work.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              Repo ↗
            </Link>
          )}
          {work.blog && (
            <Link
              href={work.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              Blog ↗
            </Link>
          )}
          {work.site && (
            <Link
              href={work.site}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              Site ↗
            </Link>
          )}
        </div>
      </div>

      {/* 設計メモ */}
      {work.designNote && (
        <div className="mb-8 rounded-lg border border-border bg-secondary/30 p-4">
          <h2 className="mb-2 text-sm font-bold">設計メモ</h2>
          <p className="text-sm italic text-muted-foreground">
            {work.designNote}
          </p>
        </div>
      )}

      {/* 本文 */}
      <div
        className="prose prose-sm sm:prose-base dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: work.content }}
      />

      {/* 戻るリンク */}
      <div className="mt-12 border-t border-border pt-6">
        <Link
          href="/works"
          className="text-sm text-primary hover:underline"
        >
          ← Works 一覧に戻る
        </Link>
      </div>
    </div>
  );
}
