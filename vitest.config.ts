import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
 
export default defineConfig({
  plugins: [
    { enforce: "pre", ...mdx({
      remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter],
      rehypePlugins: [rehypeSlug],
    }) },
    tsconfigPaths(),
  ],
  test: {
    environment: "node",
    include: ["app/**/*.test.ts"],
    passWithNoTests: true,
    globals: true,
  },
});
