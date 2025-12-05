// rehype-image-links.mjs
import { visit } from "unist-util-visit";

/**
 * Rehype plugin: wrap <img> in <a> that will get its href at runtime.
 */
export default function rehypeImageLinks() {
  return function transformer(tree) {
    visit(tree, "element", (node, index, parent) => {
      if (
        !parent ||
        typeof index !== "number" ||
        node.tagName !== "img" ||
        !node.properties ||
        !node.properties.src
      ) {
        return;
      }

      // If already wrapped in a link, skip
      if (parent.tagName === "a") return;

      const img = node;

      const anchor = {
        type: "element",
        tagName: "a",
        properties: {
          "data-img-link": "true",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        children: [img],
      };

      parent.children.splice(index, 1, anchor);
    });
  };
}