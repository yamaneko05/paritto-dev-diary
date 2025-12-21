import { ProfileCard } from "./profile-card";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto max-w-172 px-4 py-6">
        <div className="mb-8">
          <ProfileCard />
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} パリッと開発日記. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
