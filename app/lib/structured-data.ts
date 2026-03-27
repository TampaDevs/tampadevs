export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tampa Devs",
    url: "https://tampadevs.com",
    logo: "https://tampadevs.com/images/logo.png",
    description:
      "Tampa Devs is a 501(c)(3) nonprofit technology community in Tampa Bay, Florida, connecting software developers, engineers, designers, and tech professionals through free events, workshops, and mentorship programs.",
    sameAs: [
      "https://twitter.com/tampadevs",
      "https://www.linkedin.com/company/tampadevs",
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

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateEventSchema(event: {
  title: string;
  description?: string;
  dateTime: string;
  eventUrl: string;
  photoUrl?: string | null;
  isOnline: boolean;
  venue?: {
    name?: string;
    address?: string;
    city?: string;
    state?: string;
  } | null;
  group: { name: string };
}) {
  const location = event.isOnline
    ? { "@type": "VirtualLocation" as const, url: event.eventUrl }
    : event.venue
      ? {
          "@type": "Place" as const,
          name: event.venue.name,
          address: {
            "@type": "PostalAddress" as const,
            streetAddress: event.venue.address,
            addressLocality: event.venue.city,
            addressRegion: event.venue.state,
            addressCountry: "US",
          },
        }
      : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    startDate: event.dateTime,
    eventAttendanceMode: event.isOnline
      ? "https://schema.org/OnlineEventAttendanceMode"
      : "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    ...(event.description && { description: event.description }),
    ...(event.photoUrl && { image: event.photoUrl }),
    ...(location && { location }),
    url: event.eventUrl,
    organizer: {
      "@type": "Organization",
      name: event.group.name,
      url: "https://tampadevs.com",
    },
    isAccessibleForFree: true,
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
