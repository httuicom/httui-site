# httui-site

Landing page and documentation for [httui](https://github.com/httuicom/httui).

Deployed to [httui.com](https://httui.com) via GitHub Pages.

## Stack

- **Astro 5** — static site generation, zero JS by default
- **Starlight** — documentation framework (Astro integration)
- **Panda CSS** — build-time CSS-in-JS, design tokens, recipes
- **Ark UI (React)** — headless interactive components for islands
- **i18n** — `en` (default), `pt-br`, `es`

## Development

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # static output to dist/
npm run preview      # serve dist/
```

`panda codegen` runs automatically on dev/build to refresh `styled-system/`.

## Structure

```
src/
├── pages/                    Landing pages (Astro, near-zero JS)
│   ├── index.astro           /
│   ├── pt-br/index.astro     /pt-br/
│   └── es/index.astro        /es/
├── content/docs/             Starlight docs
│   ├── docs/                 /docs/...        (EN, default)
│   ├── pt-br/docs/           /pt-br/docs/...
│   └── es/docs/              /es/docs/...
├── components/               Astro + React island components
├── styles/                   Global CSS + Panda layers
└── assets/                   Static assets (favicons, logos)
```

## Deploy

GitHub Actions builds and deploys to Pages on push to `main`.
CNAME points to `httui.com`.
