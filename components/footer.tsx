import { ProfileCard } from "./profile-card";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 mt-16">
      <div className="container mx-auto max-w-172 px-4 py-8">
        <div className="mb-8">
          <ProfileCard />
        </div>
        <div className="flex items-center justify-between pt-6 border-t border-border/50">
          <p className="text-sm text-muted-foreground font-mono">
            &copy; {new Date().getFullYear()} パリッと開発日記
          </p>
          <div className="flex items-center gap-2">
            <div className="h-1 w-8 tech-gradient rounded-full" />
            <span className="text-xs text-muted-foreground font-heading">
              Made with Next.js
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
