import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";

const worksDirectory = path.join(process.cwd(), "content/works");

export type WorkMeta = {
  slug: string;
  title: string;
  category: string;
  type: string;
  tags: string[];
  status: string;
  description: string;
  designNote: string;
  demo?: string;
  repo?: string;
  blog?: string;
  site?: string;
  date: string;
};

export type Work = WorkMeta & {
  content: string;
};

export function getAllWorks(): WorkMeta[] {
  if (!fs.existsSync(worksDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(worksDirectory);
  const works = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(worksDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        category: data.category || "",
        type: data.type || "",
        tags: data.tags || [],
        status: data.status || "",
        description: data.description || "",
        designNote: data.designNote || "",
        demo: data.demo || "",
        repo: data.repo || "",
        blog: data.blog || "",
        site: data.site || "",
        date: data.date || "",
      };
    });

  return works.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getWorkBySlug(slug: string): Promise<Work | null> {
  const fullPath = path.join(worksDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || slug,
    category: data.category || "",
    type: data.type || "",
    tags: data.tags || [],
    status: data.status || "",
    description: data.description || "",
    designNote: data.designNote || "",
    demo: data.demo || "",
    repo: data.repo || "",
    blog: data.blog || "",
    site: data.site || "",
    date: data.date || "",
    content: contentHtml,
  };
}

export function getAllWorkSlugs(): string[] {
  if (!fs.existsSync(worksDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(worksDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""));
}
