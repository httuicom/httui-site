import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://httui.com",
  trailingSlash: "ignore",

  integrations: [
    react(),
    sitemap(),
    starlight({
      title: "httui",
      description:
        "Debug your APIs and databases in a single markdown file.",
      defaultLocale: "root",
      locales: {
        root: { label: "English", lang: "en" },
        "pt-br": { label: "Português (BR)", lang: "pt-BR" },
        es: { label: "Español", lang: "es" },
      },
      logo: {
        light: "./src/assets/httui-light-logo.svg",
        dark: "./src/assets/httui-light-logo.svg",
        replacesTitle: true,
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/httuicom/httui",
        },
      ],
      sidebar: [
        {
          label: "Getting started",
          translations: { "pt-BR": "Primeiros passos", es: "Primeros pasos" },
          items: [
            {
              label: "Introduction",
              slug: "docs/getting-started",
              translations: { "pt-BR": "Introdução", es: "Introducción" },
            },
            { label: "Concepts", slug: "docs/concepts" },
            { label: "Blocks", slug: "docs/blocks" },
          ],
        },
        {
          label: "Architecture",
          items: [
            { label: "Overview", slug: "docs/architecture" },
            { label: "Performance", slug: "docs/performance" },
            { label: "Chat & MCP", slug: "docs/chat-and-mcp" },
          ],
        },
        {
          label: "Releases",
          items: [
            { label: "Release process", slug: "docs/releases" },
            { label: "Migration guide", slug: "docs/migration" },
          ],
        },
      ],
      customCss: ["./src/styles/starlight.css"],
      pagefind: true,
    }),
  ],

  vite: {
    resolve: {
      alias: {
        "~": "/src",
      },
    },
  },
});
