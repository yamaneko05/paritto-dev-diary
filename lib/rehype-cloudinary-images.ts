import { visit } from "unist-util-visit";
import type { Root, Element } from "hast";
import { getArticleImageUrl } from "./cloudinary";

export function rehypeCloudinaryImages() {
  return (tree: Root) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName === "img" && node.properties?.src) {
        const src = String(node.properties.src);

        // cloudinary://public_id 形式のURLを変換
        if (src.startsWith("cloudinary://")) {
          const publicId = src.replace("cloudinary://", "");
          node.properties.src = getArticleImageUrl(publicId);
          node.properties.loading = "lazy";
        }
      }
    });
  };
}
