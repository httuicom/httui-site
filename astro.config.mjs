import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import remarkGfm from "remark-gfm";

export default defineConfig({
  site: "https://httui.com",
  trailingSlash: "ignore",

  markdown: {
    remarkPlugins: [remarkGfm],
  },

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
        light: "./src/assets/httui-light-full.png",
        dark: "./src/assets/httui-dark-full.png",
        replacesTitle: true,
      },
      favicon: "/logo-256.png",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/httuicom/httui",
        },
      ],
      sidebar: [
        {
          label: "Tutorials",
          translations: { "pt-BR": "Tutoriais", es: "Tutoriales" },
          items: [
            { label: "Quickstart", slug: "docs/tutorials/quickstart" },
            { label: "Chained API test", slug: "docs/tutorials/chained-api" },
            { label: "Add a database", slug: "docs/tutorials/add-database" },
          ],
        },
        {
          label: "How-to guides",
          translations: { "pt-BR": "Guias práticos", es: "Guías prácticas" },
          items: [
            { label: "Use environment variables", slug: "docs/how-to/environments" },
            { label: "Store secrets in the keychain", slug: "docs/how-to/secrets" },
            { label: "Reference values between blocks", slug: "docs/how-to/references" },
            { label: "Assert response shape", slug: "docs/how-to/assertions" },
          ],
        },
        {
          label: "Reference",
          translations: { "pt-BR": "Referência", es: "Referencia" },
          items: [
            { label: "HTTP block", slug: "docs/reference/http-block" },
            { label: "DB block", slug: "docs/reference/db-block" },
            { label: "Block references", slug: "docs/reference/block-references" },
            { label: "Vault layout", slug: "docs/reference/vault-layout" },
            { label: "Config files", slug: "docs/reference/config-files" },
            { label: "Shortcuts", slug: "docs/reference/shortcuts" },
            { label: "CLI (httui-tui)", slug: "docs/reference/cli" },
          ],
        },
        {
          label: "httui-lang",
          translations: { "pt-BR": "httui-lang", es: "httui-lang" },
          items: [
            { label: "Overview", slug: "docs/httui-lang" },
            { label: "Syntax", slug: "docs/httui-lang/syntax" },
            { label: "LSP server", slug: "docs/httui-lang/lsp" },
            { label: "Tree-sitter", slug: "docs/httui-lang/tree-sitter" },
            {
              label: "Editors",
              items: [
                { label: "VS Code", slug: "docs/httui-lang/editors/vscode" },
                { label: "Neovim", slug: "docs/httui-lang/editors/neovim" },
                { label: "Zed", slug: "docs/httui-lang/editors/zed" },
                { label: "Helix", slug: "docs/httui-lang/editors/helix" },
              ],
            },
          ],
        },
        {
          label: "Explanation",
          translations: { "pt-BR": "Como funciona", es: "Cómo funciona" },
          items: [
            { label: "The mental model", slug: "docs/explanation/mental-model" },
            { label: "Why markdown?", slug: "docs/explanation/why-markdown" },
            { label: "Local-first", slug: "docs/explanation/local-first" },
            { label: "How it works under the hood", slug: "docs/explanation/how-it-works" },
            { label: "Architecture (deep dive)", slug: "docs/architecture" },
            { label: "Performance", slug: "docs/performance" },
            { label: "Chat & MCP", slug: "docs/chat-and-mcp" },
          ],
        },
        {
          label: "Operations",
          translations: { "pt-BR": "Operações", es: "Operaciones" },
          items: [
            { label: "Release process", slug: "docs/releases" },
            { label: "Migration guide", slug: "docs/migration" },
          ],
        },
      ],
      customCss: ["./src/styles/starlight.css"],
      pagefind: true,
      head: [
        {
          tag: "script",
          attrs: { type: "module" },
          content: `
            const init = async () => {
              const blocks = document.querySelectorAll(
                'pre[data-language="mermaid"], pre > code.language-mermaid, code.language-mermaid'
              );
              if (!blocks.length) return;
              const mermaid = (await import("https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs")).default;
              const theme = document.documentElement.dataset.theme === "dark" ? "dark" : "default";
              mermaid.initialize({ startOnLoad: false, theme, securityLevel: "loose" });
              const extract = (el) => {
                const lines = el.querySelectorAll('.ec-line');
                if (lines.length) return Array.from(lines, l => l.textContent).join('\\n').trim();
                if (typeof el.innerText === 'string' && el.innerText.includes('\\n')) return el.innerText.trim();
                return el.textContent.trim();
              };
              for (const el of blocks) {
                const host = el.closest('.expressive-code') || el.closest('pre') || el;
                const text = extract(el);
                const wrapper = document.createElement('div');
                wrapper.className = 'mermaid';
                wrapper.textContent = text;
                host.replaceWith(wrapper);
              }
              await mermaid.run();
            };
            if (document.readyState === "loading") {
              document.addEventListener("DOMContentLoaded", init);
            } else {
              init();
            }
          `,
        },
      ],
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
