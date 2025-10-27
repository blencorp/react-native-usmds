import { defineDocs, defineConfig } from "fumadocs-mdx/config";
import { remarkInstall, remarkDocGen } from "fumadocs-docgen";
import { fileGenerator } from "./lib/file-generator";

export const { docs, meta } = defineDocs({
  dir: "content/docs",
});

export default defineConfig({
  mdxOptions: {
    // MDX options
    remarkPlugins: [
      remarkInstall,
      [remarkDocGen, { generators: [fileGenerator()] }],
    ],
  },
});
