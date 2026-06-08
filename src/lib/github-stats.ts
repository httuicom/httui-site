const REPO = "httuicom/httui";
const REPO_URL = `https://github.com/${REPO}`;

export type GithubStats = {
  stars: string;
  starsRaw: number | null;
  contributors: string;
  contributorsRaw: number | null;
  license: string;
  version: string;
  versionDate: string;
  repoUrl: string;
};

const FALLBACK: GithubStats = {
  stars: "—",
  starsRaw: null,
  contributors: "—",
  contributorsRaw: null,
  license: "MIT",
  version: "—",
  versionDate: "",
  repoUrl: REPO_URL,
};

function formatStars(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  return String(n);
}

function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function parseLastPage(link: string | null): number | null {
  if (!link) return null;
  const match = link.match(/<[^>]*[?&]page=(\d+)[^>]*>;\s*rel="last"/);
  return match ? Number(match[1]) : null;
}

function authHeaders(): HeadersInit {
  const token =
    typeof process !== "undefined" &&
    (process.env.GITHUB_TOKEN || process.env.GH_TOKEN);
  return token
    ? { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json" }
    : { Accept: "application/vnd.github+json" };
}

async function fetchStats(): Promise<GithubStats> {
  try {
    const headers = authHeaders();

    const repoRes = await fetch(`https://api.github.com/repos/${REPO}`, {
      headers,
    });
    if (!repoRes.ok) {
      console.warn(`[github-stats] repo ${repoRes.status} — using fallback`);
      return FALLBACK;
    }
    const repo = await repoRes.json();

    const stars: number = repo.stargazers_count ?? 0;
    const license: string = repo.license?.spdx_id ?? "MIT";

    let version = "main";
    let versionDate = "";
    try {
      const relRes = await fetch(
        `https://api.github.com/repos/${REPO}/releases/latest`,
        { headers },
      );
      if (relRes.ok) {
        const rel = await relRes.json();
        version = rel.tag_name ?? version;
        versionDate = formatDate(rel.published_at);
      }
    } catch {
      // ignore
    }

    let contribCount: number | null = null;
    try {
      const cRes = await fetch(
        `https://api.github.com/repos/${REPO}/contributors?per_page=1&anon=true`,
        { headers },
      );
      if (cRes.ok) {
        const last = parseLastPage(cRes.headers.get("Link"));
        if (last) contribCount = last;
        else {
          const list = await cRes.json();
          if (Array.isArray(list)) contribCount = list.length;
        }
      }
    } catch {
      // ignore
    }

    return {
      stars: formatStars(stars),
      starsRaw: stars,
      contributors: contribCount === null ? "—" : String(contribCount),
      contributorsRaw: contribCount,
      license,
      version,
      versionDate,
      repoUrl: repo.html_url ?? REPO_URL,
    };
  } catch (err) {
    console.warn("[github-stats] fetch failed — using fallback:", err);
    return FALLBACK;
  }
}

export const stats: GithubStats = await fetchStats();
