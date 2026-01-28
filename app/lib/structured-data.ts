export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tampa Devs",
    url: "https://tampadevs.com",
    logo: "https://tampadevs.com/images/logo.png",
    description:
      "Tampa Bay's largest tech community, connecting developers, designers, and tech professionals.",
    sameAs: [
      "https://twitter.com/tamaboreal",
      "https://www.linkedin.com/company/tampa-devs",
      "https://github.com/TampaDevs",
      "https://www.meetup.com/tampa-devs",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tampa",
      addressRegion: "FL",
      addressCountry: "US",
    },
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tampa Devs",
    url: "https://tampadevs.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://tampa.dev/events?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
