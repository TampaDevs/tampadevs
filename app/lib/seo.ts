interface MetaTagOptions {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: "website" | "article";
  twitterCard?: "summary" | "summary_large_image";
  publishedTime?: string;
  author?: string;
}

export function generateMetaTags({
  title,
  description,
  url = "https://tampadevs.com",
  image = "https://tampadevs.com/images/og-default.jpg",
  type = "website",
  twitterCard = "summary_large_image",
  publishedTime,
  author,
}: MetaTagOptions) {
  const fullTitle = title.includes("Tampa Devs")
    ? title
    : `${title} | Tampa Devs`;

  const tags = [
    { title: fullTitle },
    { name: "description", content: description },

    // Open Graph
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: fullTitle },
    { property: "og:type", content: type },
    { property: "og:site_name", content: "Tampa Devs" },
    { property: "og:locale", content: "en_US" },

    // Twitter
    { name: "twitter:card", content: twitterCard },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    { name: "twitter:site", content: "@tamaborlan" },

    // Canonical
    { tagName: "link", rel: "canonical", href: url },
  ];

  // Add article-specific meta tags
  if (type === "article") {
    if (publishedTime) {
      tags.push({ property: "article:published_time", content: publishedTime });
    }
    if (author) {
      tags.push({ property: "article:author", content: author });
    }
    tags.push({ property: "article:publisher", content: "https://tampadevs.com" });
  }

  return tags;
}
