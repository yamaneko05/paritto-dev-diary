import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

type PostCardProps = {
  post: PostMeta;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/posts/${post.slug}`} className="block group">
      <article className="relative p-4 md:p-6 border border-border rounded-lg bg-card overflow-hidden transition-all duration-300 active:scale-[0.98] md:hover:scale-[1.02] card-hover-lift">
        {/* Vibrant accent bar - always visible on mobile, animated on desktop */}
        <div className="absolute top-0 left-0 w-1 md:w-1 h-full tech-gradient opacity-70 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300" />

        {/* Content */}
        <div className="relative pl-3 md:pl-4">
          {/* Title and Date - Compact layout for mobile */}
          <div className="mb-2 md:mb-3">
            <div className="flex items-baseline justify-between gap-3 mb-1 md:mb-2">
              <h3 className="text-lg md:text-xl font-bold font-heading group-hover:tech-gradient-text transition-all duration-300 flex-1 leading-tight">
                {post.title}
              </h3>
              <time className="text-xs md:text-sm text-muted-foreground font-mono whitespace-nowrap opacity-70">
                {post.date}
              </time>
            </div>
          </div>

          {/* Description - Slightly tighter line height on mobile */}
          <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4 leading-snug md:leading-relaxed line-clamp-2 md:line-clamp-3">
            {post.description}
          </p>

          {/* Tags - Colorful gradient backgrounds */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={tag}
                  className="relative px-2.5 py-1 md:px-3 md:py-1 text-xs font-medium font-heading rounded border border-transparent overflow-hidden group/tag transition-all duration-300"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {/* Gradient background - always visible, more vibrant on hover */}
                  <span className="absolute inset-0 tech-gradient opacity-20 md:opacity-15 md:group-hover/tag:opacity-30 transition-opacity duration-300" />

                  {/* Tag text */}
                  <span className="relative text-foreground md:group-hover/tag:text-accent transition-colors duration-300">
                    {tag}
                  </span>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Subtle gradient overlay on hover - desktop only */}
        <div className="hidden md:block absolute inset-0 tech-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
      </article>
    </Link>
  );
}
