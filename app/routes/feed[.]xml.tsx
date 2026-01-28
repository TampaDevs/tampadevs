import type { Route } from "./+types/feed[.]xml";
import { getAllPosts } from "~/lib/blog";

export async function loader({ request }: Route.LoaderArgs) {
  const baseUrl = "https://tampadevs.com";
  const posts = getAllPosts().slice(0, 20); // Last 20 posts

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Tampa Devs Blog</title>
    <description>News, updates, and stories from Tampa Devs - Tampa Bay's largest tech community.</description>
    <link>${baseUrl}/blog</link>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.intro}]]></description>
      <link>${baseUrl}/blog/${post.year}/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.year}/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>${post.author}</author>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
