export type Lang = "en" | "pt-br" | "es";

export const repoUrl = "https://github.com/httuicom/httui";

export const docsHref = (lang: Lang) =>
  lang === "en" ? "/docs/getting-started" : `/${lang}/docs/getting-started`;

export const stats = {
  stars: "—",
  contributors: "—",
  license: "MIT",
  version: "v0.1.0",
};
