export type Lang = "en" | "pt-br" | "es";

export const repoUrl = "https://github.com/httuicom/httui";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export const withBase = (path: string) =>
  path.startsWith("http") || path.startsWith("#")
    ? path
    : `${BASE}${path.startsWith("/") ? "" : "/"}${path}`;

export const docsHref = (lang: Lang) =>
  withBase(lang === "en" ? "/docs/getting-started" : `/${lang}/docs/getting-started`);

export { stats } from "./github-stats";
