import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PROFILE_LINKS } from "@/lib/constants";
import { Github, Mail, Twitter } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "工場・製造業向けの業務システム開発に携わりつつ、個人では自分や友人の困りごとを解決するWebアプリを作っています。",
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative">
        <div className="flex items-center gap-4 pb-8 border-b border-border">
          <div className="flex-1">
            <h1 className="text-4xl font-bold font-heading mb-3 tech-gradient-text">
              About
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              工場・製造業向けの業務システム開発に携わりつつ、個人では自分や友人の困りごとを解決するWebアプリを作っています。
            </p>
          </div>
          <div className="hidden md:block w-1 h-20 tech-gradient rounded-full" />
        </div>
      </section>

      {/* Profile Card */}
      <section className="relative">
        <div className="flex flex-col md:flex-row gap-8 p-8 bg-card border border-border rounded-lg">
          <div className="shrink-0">
            <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-accent/20">
              <Image
                src="/profile.jpg"
                alt="プロフィール画像"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold font-heading mb-3">Daichi</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              2007年生まれの18歳。高校1年で中退後、アルバイトでプログラマーとしてキャリアをスタートしました。
              18歳になったタイミングで正社員として入社し、現在はWeb開発に従事しています。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium font-heading text-accent hover:underline"
              >
                Blog
              </Link>
              <Link
                href="/works"
                className="inline-flex items-center gap-2 text-sm font-medium font-heading text-accent hover:underline"
              >
                Works
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium font-heading text-accent hover:underline"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* What I Do Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold font-heading tech-gradient-text">
          やっていること
        </h2>

        <div className="space-y-4 max-w-4xl">
          {/* Item 1 */}
          <div className="group p-6 bg-card border-l-4 border-accent rounded-r-lg hover:bg-muted/30 transition-all duration-300">
            <h3 className="text-lg font-bold font-heading mb-2 flex items-center gap-2">
              <span className="text-accent">業務</span>
              <span className="text-muted-foreground">—</span>
              <span>製造業向けシステム</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              現場で使われる前提のシステムを作ることが多いです。
              要件だけでなく、運用・端末・回線・権限などの制約を先に整理してから設計するようにしています。
            </p>
          </div>

          {/* Item 2 */}
          <div className="group p-6 bg-card border-l-4 border-primary rounded-r-lg hover:bg-muted/30 transition-all duration-300">
            <h3 className="text-lg font-bold font-heading mb-2 flex items-center gap-2">
              <span className="text-primary">個人</span>
              <span className="text-muted-foreground">—</span>
              <span>身近な課題のWebアプリ</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              自分や友人が実際に使う前提で、小さく作って改善します。
              自分用のTODOリストアプリや、友達と麻雀をするときの点数管理アプリなど。
              「とりあえず触れるものを出す → 使われ方を見て直す」のサイクルが好きです。
            </p>
          </div>

          {/* Item 3 */}
          <div className="group p-6 bg-card border-l-4 border-tech-cyan rounded-r-lg hover:bg-muted/30 transition-all duration-300">
            <h3 className="text-lg font-bold font-heading mb-2 flex items-center gap-2">
              <span className="text-tech-cyan">AI</span>
              <span className="text-muted-foreground">—</span>
              <span>設計と検証を早く回す</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Claude Codeを使っていて、以前と比べて作りたいと思ったものがAIの活用のおかげですぐに形にできるので、楽しいです。
              コーディング量を減らして、要件整理・設計・検証に時間を使えるので、いまの自分には合っていると感じています。
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Development Flow Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold font-heading tech-gradient-text">
          開発の流れ
        </h2>

        <div className="space-y-4 max-w-4xl">
          <div className="p-6 bg-muted/30 border-l-4 border-accent rounded-r-lg">
            <p className="text-foreground leading-relaxed">
              バイブコーディングでゼロから作るときは、まず課題ややりたいことを整理してAIにどのように解決できるか相談します。
              それからアプリとしての要件定義を固めて、ページ構成やDB設計・API設計などを決めてマークダウンファイルにまとめます。
              ワードとかエクセルよりマークダウンの方が簡単に扱えるし、AIとの相性も良いので気に入っています。
            </p>
          </div>

          <div className="p-6 bg-muted/30 border-l-4 border-primary rounded-r-lg">
            <p className="text-foreground leading-relaxed">
              実装時は、それらのマークダウンファイルをAIに参照させながら進めます。
              リリース後は、実際に自分でしっかり使ったり、友人に使ってもらったりして、改善する必要がある箇所やいいアイデアを思い付いたらすぐにメモします（自分で作ったTODOリストアプリに記録しています）。
              その改善アイデアのメモを見て、AIと相談しながら実装して、アプリの改善を繰り返していきます。
            </p>
          </div>

          <div className="p-6 bg-muted/30 border-l-4 border-tech-cyan rounded-r-lg">
            <p className="text-foreground leading-relaxed">
              自分で使用頻度が高いアプリはやっぱり改善アイデアもたくさん出てくるし、改善することで自分に恩恵が受けられるのでモチベーションになります。
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Background Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold font-heading tech-gradient-text">
          これまで
        </h2>
        <div className="max-w-4xl p-6 bg-card border border-border rounded-lg">
          <p className="text-foreground leading-relaxed">
            高校1年で中退後、株式会社CansでアルバイトとしてWeb制作（コーダー）を開始しました。
            同社でアプリ開発や自動AI音声コールシステムの開発などを経験し、現在は株式会社ユニフェイスで製造業向けシステムの開発に携わっています。
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Recent Projects Section */}
      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold font-heading tech-gradient-text mb-3">
            最近の抜粋
          </h2>
          <p className="text-muted-foreground">
            強く推すというより、「最近やっていたこと」の抜粋です。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Yarukoto */}
          <article className="group relative p-6 bg-card border border-border rounded-lg card-hover-lift">
            <div className="absolute top-0 left-0 w-1 h-full tech-gradient rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative pl-4 space-y-4">
              <h3 className="text-2xl font-bold font-heading group-hover:tech-gradient-text transition-all">
                Yarukoto
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                リンク共有で共同チェックできる、やること／持ち物の管理
              </p>
              <div className="pt-2 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-3">
                  <span className="font-medium text-foreground">設計メモ：</span>
                  登録なしでも使える体験を優先して設計しました
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {PROFILE_LINKS.yarukoto.demo && (
                    <a href={PROFILE_LINKS.yarukoto.demo} className="px-3 py-1 bg-accent text-accent-foreground rounded font-medium hover:opacity-80">
                      Demo
                    </a>
                  )}
                  {PROFILE_LINKS.yarukoto.repo && (
                    <a href={PROFILE_LINKS.yarukoto.repo} className="px-3 py-1 bg-secondary text-secondary-foreground rounded font-medium hover:opacity-80">
                      Repo
                    </a>
                  )}
                  {PROFILE_LINKS.yarukoto.blog && (
                    <Link href={PROFILE_LINKS.yarukoto.blog} className="px-3 py-1 bg-primary text-primary-foreground rounded font-medium hover:opacity-80">
                      Blog
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </article>

          {/* Monster Call */}
          <article className="group relative p-6 bg-card border border-border rounded-lg card-hover-lift">
            <div className="absolute top-0 left-0 w-1 h-full tech-gradient rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative pl-4 space-y-4">
              <h3 className="text-2xl font-bold font-heading group-hover:tech-gradient-text transition-all">
                Monster Call
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                AI音声で架電業務を自動化するアウトバウンド支援
              </p>
              <div className="pt-2 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-3">
                  <span className="font-medium text-foreground">設計メモ：</span>
                  運用フローに合わせた管理画面と、ログの見え方を重視しました
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <a href="https://monstercall.cans01.jp/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-accent text-accent-foreground rounded font-medium hover:opacity-80">
                    Site
                  </a>
                  {PROFILE_LINKS.monsterCall.blog && (
                    <Link href={PROFILE_LINKS.monsterCall.blog} className="px-3 py-1 bg-primary text-primary-foreground rounded font-medium hover:opacity-80">
                      Blog
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </article>

          {/* Jansuko */}
          <article className="group relative p-6 bg-card border border-border rounded-lg card-hover-lift">
            <div className="absolute top-0 left-0 w-1 h-full tech-gradient rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative pl-4 space-y-4">
              <h3 className="text-2xl font-bold font-heading group-hover:tech-gradient-text transition-all">
                あいフェス（じゃんスコ）
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                イベント向けに、当日の運用込みで使うWebアプリ
              </p>
              <div className="pt-2 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-3">
                  <span className="font-medium text-foreground">設計メモ：</span>
                  当日の導線と、詰まった時の逃げ道を先に作るようにしています
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {PROFILE_LINKS.jansuko.demo && (
                    <a href={PROFILE_LINKS.jansuko.demo} className="px-3 py-1 bg-accent text-accent-foreground rounded font-medium hover:opacity-80">
                      Demo
                    </a>
                  )}
                  {PROFILE_LINKS.jansuko.repo && (
                    <a href={PROFILE_LINKS.jansuko.repo} className="px-3 py-1 bg-secondary text-secondary-foreground rounded font-medium hover:opacity-80">
                      Repo
                    </a>
                  )}
                  {PROFILE_LINKS.jansuko.blog && (
                    <Link href={PROFILE_LINKS.jansuko.blog} className="px-3 py-1 bg-primary text-primary-foreground rounded font-medium hover:opacity-80">
                      Blog
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Tech Stack Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold font-heading tech-gradient-text">
          技術スタック
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          <div className="p-6 bg-card border border-border rounded-lg">
            <h3 className="text-lg font-bold font-heading mb-3">言語 & フレームワーク</h3>
            <p className="text-foreground leading-relaxed mb-3">
              個人開発と仕事ではTypeScript、Next.jsを使っています。Next.jsは一番お気に入りです。
              業務ではC#、.NETも使います。UIはTailwind CSS、shadcn/uiが好きです。
            </p>
          </div>

          <div className="p-6 bg-card border border-border rounded-lg">
            <h3 className="text-lg font-bold font-heading mb-3">AI & デプロイ</h3>
            <p className="text-foreground leading-relaxed mb-3">
              AIは個人開発ではClaude Codeを、業務ではCodexも使います。
              技術選定は、会社では技術スタックに従いますが、個人開発ではネット上の情報量の多さやAIとの相性、将来的に仕事として使えそうな技術かどうかを意識しています。
              Next.jsはVercelで無料でホスティングできて、デプロイしやすいのも良いですね。
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Contact Section */}
      <section id="contact" className="space-y-6">
        <h2 className="text-3xl font-bold font-heading tech-gradient-text">
          連絡先
        </h2>

        <div className="max-w-2xl space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {PROFILE_LINKS.contact.github && (
              <a
                href={PROFILE_LINKS.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-accent transition-all duration-300"
              >
                <Github className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
                <div className="flex-1">
                  <div className="font-medium font-heading">GitHub</div>
                  <div className="text-sm text-muted-foreground">コードとプロジェクト</div>
                </div>
              </a>
            )}

            {PROFILE_LINKS.contact.x && (
              <a
                href={PROFILE_LINKS.contact.x}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-accent transition-all duration-300"
              >
                <Twitter className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
                <div className="flex-1">
                  <div className="font-medium font-heading">X (Twitter)</div>
                  <div className="text-sm text-muted-foreground">日々の開発記録</div>
                </div>
              </a>
            )}

            {PROFILE_LINKS.contact.email && (
              <a
                href={`mailto:${PROFILE_LINKS.contact.email}`}
                className="group flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-accent transition-all duration-300"
              >
                <Mail className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
                <div className="flex-1">
                  <div className="font-medium font-heading">Email</div>
                  <div className="text-sm text-muted-foreground">お問い合わせ</div>
                </div>
              </a>
            )}
          </div>

          <div className="p-6 bg-muted/30 border-l-4 border-accent rounded-r-lg">
            <p className="text-foreground leading-relaxed">
              連絡はメールまたはSNSからお願いします。内容が固まっていなくても大丈夫です。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
