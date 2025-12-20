import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

type PostCardProps = {
  post: PostMeta;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="mb-2">
        <div className="text-xl font-bold">{post.title}</div>
        <time className="text-sm text-muted-foreground">{post.date}</time>
      </div>
      <p className="text-muted-foreground mb-3">{post.description}</p>
      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
