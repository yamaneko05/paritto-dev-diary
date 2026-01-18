import { getAllPosts } from "@/lib/posts";
import { Search } from "@/components/search";
import { PageHero } from "@/components/page-hero";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="space-y-8">
      <PageHero
        title="Blog"
        description="Next.jsを中心としたモダンな技術スタックによる個人開発について発信しています。"
      />

      {/* Search and posts */}
      <div className="py-4">
        <Search posts={posts} />
      </div>
    </div>
  );
}
