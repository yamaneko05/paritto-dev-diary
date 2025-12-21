import { getAllPosts } from "@/lib/posts";
import { Search } from "@/components/search";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">📰 記事一覧</h1>
      <Search posts={posts} />
    </div>
  );
}
