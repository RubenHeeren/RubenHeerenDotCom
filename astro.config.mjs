import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import rehypeSlug from 'rehype-slug';
import sitemap from "@astrojs/sitemap";
import mdx from '@astrojs/mdx';

import netlify from "@astrojs/netlify";

import { readFileSync } from "fs";
import expressiveCode, { ExpressiveCodeTheme } from "astro-expressive-code";
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

const jsoncString = readFileSync(new URL(`./src/config/vscode-theme.jsonc`, import.meta.url), 'utf-8');
const vscodeTheme = ExpressiveCodeTheme.fromJSONString(jsoncString);

// https://astro.build/config
export default defineConfig({
  site: "https://rubenheeren.com",

  // replace this with your deployed domain
  integrations: [tailwind({
      applyBaseStyles: false
    }), react(), sitemap(), expressiveCode({
      plugins: [pluginLineNumbers()],
      defaultProps: {
        wrap: true,
        showLineNumbers: false,
      },
      styleOverrides: {
        codeFontFamily: "var(--font-monospace)",
        codeFontSize: "0.78125rem",
        codeLineHeight: "1.6",
        uiFontSize: "0.78125rem",

        lineNumbers: {
          highlightForeground: "#85c7ebb3",
        },
      },
      themes: [vscodeTheme]
    }),
    mdx()],

  markdown: {
    remarkPlugins: [
      [
        remarkToc,
        {
          heading: 'Table of contents', // find this heading text
          maxDepth: 3,
        },
      ],
    ],
    rehypePlugins: [rehypeSlug],    
    extendDefaultPlugins: true
  },

  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  },

  scopedStyleStrategy: "where",
  adapter: netlify(),
});