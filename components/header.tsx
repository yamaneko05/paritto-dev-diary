import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="container mx-auto flex h-12 max-w-176 items-center justify-between px-4">
        <Link href="/" className="text-xl font-extrabold">
          <span className="text-primary">パリッと</span>開発日記
        </Link>
        <nav className="flex items-center gap-4">
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
