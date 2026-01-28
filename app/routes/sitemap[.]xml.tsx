import type { Route } from "./+types/sitemap[.]xml";
import { getAllPosts } from "~/lib/blog";
import { getAllTalks } from "~/lib/talks";

export async function loader({ request }: Route.LoaderArgs) {
  const baseUrl = "https://tampadevs.com";

  const posts = getAllPosts();
  const talks = getAllTalks();

  const staticPages = [
    { url: "", priority: "1.0", changefreq: "weekly" },
    { url: "/about", priority: "0.8", changefreq: "monthly" },
    { url: "/blog", priority: "0.8", changefreq: "weekly" },
    { url: "/talks", priority: "0.8", changefreq: "weekly" },
    { url: "/speak", priority: "0.7", changefreq: "monthly" },
    { url: "/volunteer", priority: "0.7", changefreq: "monthly" },
    { url: "/partnership", priority: "0.7", changefreq: "monthly" },
    { url: "/press", priority: "0.6", changefreq: "monthly" },
    { url: "/code-of-conduct", priority: "0.5", changefreq: "yearly" },
    { url: "/privacy-policy", priority: "0.5", changefreq: "yearly" },
    { url: "/onboarding", priority: "0.5", changefreq: "monthly" },
    { url: "/archive", priority: "0.5", changefreq: "monthly" },
  ];

  const blogPages = posts.map((post) => ({
    url: `/blog/${post.year}/${post.slug}`,
    lastmod: post.date,
    priority: "0.6",
    changefreq: "monthly",
  }));

  const talkPages = talks.map((talk) => ({
    url: `/talks/${talk.year}/${talk.slug}`,
    lastmod: talk.date,
    priority: "0.6",
    changefreq: "monthly",
  }));

  const allPages = [...staticPages, ...blogPages, ...talkPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ""}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
