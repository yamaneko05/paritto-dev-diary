"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { PostCard } from "@/components/post-card";
import type { PostMeta } from "@/lib/posts";
import { Search as SearchIcon } from "lucide-react";

type SearchProps = {
  posts: PostMeta[];
};

export function Search({ posts }: SearchProps) {
  const [query, setQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const searchTarget = `${post.title} ${post.description} ${post.tags.join(
      " ",
    )}`.toLowerCase();
    return searchTarget.includes(query.toLowerCase());
  });

  return (
    <div>
      <div className="relative mb-8">
        <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground transition-colors duration-300" />
        <Input
          type="text"
          placeholder="記事を検索..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-12 h-12 max-w-full md:max-w-lg border-2 focus:border-accent transition-all duration-300 font-sans"
        />
        {query && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-muted-foreground">
            {filteredPosts.length} 件
          </div>
        )}
      </div>
      {filteredPosts.length === 0 ? (
        <div className="flex items-center justify-center py-16">
          <p className="text-muted-foreground font-heading">
            {query
              ? "検索結果が見つかりませんでした。"
              : "記事はまだありません。"}
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {filteredPosts.map((post, index) => (
            <div
              key={post.slug}
              className="animate-in fade-in slide-in-from-bottom-4"
              style={{
                animationDelay: `${index * 50}ms`,
                animationFillMode: "both",
              }}
            >
              <PostCard post={post} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
