import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // Main pages
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),

  // Blog
  route("blog", "routes/blog._index.tsx"),
  route("blog/:year/:slug", "routes/blog.$year.$slug.tsx"),

  // Talks (past events/presentations)
  route("talks", "routes/talks._index.tsx"),
  route("talks/:year/:slug", "routes/talks.$year.$slug.tsx"),

  // Static pages
  route("speak", "routes/speak.tsx"),
  route("press", "routes/press.tsx"),
  route("privacy-policy", "routes/privacy-policy.tsx"),
  route("code-of-conduct", "routes/code-of-conduct.tsx"),
  route("onboarding", "routes/onboarding.tsx"),
  route("partnership", "routes/partnership.tsx"),
  route("volunteer", "routes/volunteer.tsx"),
  route("archive", "routes/archive.tsx"),
  route("thank-you", "routes/thank-you.tsx"),

  // Utility routes
  route("sitemap.xml", "routes/sitemap[.]xml.tsx"),
  route("feed.xml", "routes/feed[.]xml.tsx"),

  // Catch-all for redirects and 404
  route("*", "routes/$.tsx"),
] satisfies RouteConfig;
