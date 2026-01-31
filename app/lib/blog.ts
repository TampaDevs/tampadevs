export interface BlogPost {
  slug: string;
  year: string;
  title: string;
  author: string;
  date: string;
  intro: string;
  heroImage?: string;
  canonical?: string;
}

// This would normally be generated from the MDX files at build time
// For now, we'll manually maintain this list
export const blogPosts: BlogPost[] = [
  {
    slug: "our-first-event",
    year: "2021",
    title: "Our first event!",
    author: "Vincent Tang",
    date: "2021-09-16",
    intro: "Launching our first networking event! And a new website!",
    heroImage: "/images/blog/2021/first_event_tampa_devs.jpg",
  },
  {
    slug: "hackathon-road-trip",
    year: "2021",
    title: "Hackathon Road Trip",
    author: "Vincent Tang",
    date: "2021-09-26",
    intro: "We went to our first hackathon road trip! To compete in Orlando at TADHack Global.",
    heroImage: "/images/blog/2021/hackathon_road_trip.jpg",
  },
  {
    slug: "our-first-talk",
    year: "2021",
    title: "Our first talk!",
    author: "Vincent Tang",
    date: "2021-10-28",
    intro: "We hosted our first technical talk in collaboration with ReliaQuest!",
    heroImage: "/images/blog/2021/first_event_cropped.png",
  },
  {
    slug: "embarc",
    year: "2021",
    title: "Partnership with Embarc Collective",
    author: "Vincent Tang",
    date: "2021-11-01",
    intro: "Partnering with the startup community in town",
    heroImage: "/images/blog/2021/embarc_collective.png",
  },
  {
    slug: "merging-with-reactjs-tampa",
    year: "2022",
    title: "Merging with ReactJS Tampa",
    author: "Vincent Tang",
    date: "2022-02-03",
    intro: "ReactJS Tampa will now be part of TampaDevs!",
    heroImage: "/images/blog/2022/reactjs_tampa.png",
  },
  {
    slug: "tampa-devs-story",
    year: "2022",
    title: "The Tampa Devs Story",
    author: "Vincent Tang",
    date: "2022-03-01",
    intro: "How Tampa Devs came to be",
    heroImage: "/images/blog/2022/tampadevs-flyer.png",
  },
  {
    slug: "nonprofit",
    year: "2023",
    title: "501c3 nonprofit status!",
    author: "Vincent Tang",
    date: "2023-03-08",
    intro: "HUGE milestone for providing building better tools for the community",
    heroImage: "/images/blog/2023/tax_exempt_cover.png",
  },
  {
    slug: "stats-and-financial-report",
    year: "2023",
    title: "Stats and Financial Report",
    author: "Vincent Tang",
    date: "2023-02-15",
    intro: "Statistics about Tampa Devs and how we're doing as an organization",
    heroImage: "/images/blog/2023/stats_cover.png",
  },
  {
    slug: "the-public-cloud-project",
    year: "2024",
    title: "Tampa Devs Public Cloud Project",
    author: "Justin Herron",
    date: "2024-08-24",
    intro: "Expanding equitable access to cloud infrastructure for Tampa Bay's software developer community",
    heroImage: "/images/blog/2024/public-cloud/image3.webp",
  },
];

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostsByYear(year: string): BlogPost[] {
  return blogPosts
    .filter((post) => post.year === year)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(year: string, slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.year === year && post.slug === slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
