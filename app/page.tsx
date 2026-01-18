import { getAllPosts } from "@/lib/posts";
import { Search } from "@/components/search";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="space-y-8">
      {/* Hero section with gradient */}
      <div className="relative py-12 px-6 -mx-4 overflow-hidden">
        <div className="absolute inset-0 tech-gradient opacity-10" />
        <div className="relative">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 tech-gradient-text">
            記事一覧
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            フロントエンド開発を中心とした技術ブログ。最新の技術トレンドや実践的なTipsを発信しています。
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-24 h-24 tech-gradient opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-4 left-1/3 w-32 h-32 bg-accent opacity-10 rounded-full blur-3xl" />
      </div>

      {/* Search and posts */}
      <div className="py-4">
        <Search posts={posts} />
      </div>
    </div>
  );
}
