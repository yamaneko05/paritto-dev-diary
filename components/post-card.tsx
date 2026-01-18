import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

type PostCardProps = {
  post: PostMeta;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/posts/${post.slug}`} className="block group">
      <article className="relative p-6 border border-border rounded-lg bg-card card-hover-lift overflow-hidden">
        {/* Diagonal accent line */}
        <div className="absolute top-0 left-0 w-1 h-full tech-gradient transform -skew-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="relative pl-4">
          <div className="mb-3">
            <h3 className="text-xl font-bold font-heading mb-2 group-hover:tech-gradient-text transition-all duration-300">
              {post.title}
            </h3>
            <time className="text-sm text-muted-foreground font-mono">
              {post.date}
            </time>
          </div>

          <p className="text-muted-foreground mb-4 leading-relaxed">
            {post.description}
          </p>

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium font-heading bg-secondary text-secondary-foreground rounded border border-border transition-all duration-300 group-hover:border-accent group-hover:text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Decorative gradient overlay on hover */}
        <div className="absolute inset-0 tech-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
      </article>
    </Link>
  );
}
