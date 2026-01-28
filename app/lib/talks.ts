export interface Talk {
  slug: string;
  year: string;
  title: string;
  author: string;
  date: string;
  intro: string;
  heroImage?: string;
  youtubeId?: string;
  canonical?: string;
}

export const talks: Talk[] = [
  {
    slug: "svgs-everything-you-should-know",
    year: "2021",
    title: "SVGs: Everything You Should Know",
    author: "Vincent Tang",
    date: "2021-10-28",
    intro: "Deep dive into SVGs and their capabilities",
    youtubeId: "qwoqmeq_zQY",
  },
  {
    slug: "intro-to-typescript-shipping-unity",
    year: "2021",
    title: "Intro to TypeScript & Shipping Unity Games",
    author: "Vincent Tang",
    date: "2021-12-01",
    intro: "Learn TypeScript basics and how to ship Unity games",
    youtubeId: "9joAWSj1h04",
  },
  {
    slug: "intro-to-react-and-git",
    year: "2022",
    title: "Intro to React and Git",
    author: "Ryan Harrigan & Lydia Hendriks",
    date: "2022-02-02",
    intro: "Getting started with React and Git version control",
    youtubeId: "TANbBN6DMH4",
  },
  {
    slug: "intro-to-devops",
    year: "2022",
    title: "Intro to DevOps",
    author: "Vincent Tang",
    date: "2022-04-06",
    intro: "Understanding DevOps practices and tools",
    youtubeId: "2AoRbNU1iNc",
  },
  {
    slug: "serverless-webhooks",
    year: "2022",
    title: "Serverless & Webhooks",
    author: "Vincent Tang",
    date: "2022-05-04",
    intro: "Building serverless applications with webhooks",
    youtubeId: "PpeIJ_ViDzQ",
  },
  {
    slug: "intro-to-iot",
    year: "2022",
    title: "Intro to IoT",
    author: "Vincent Tang",
    date: "2022-07-13",
    intro: "Getting started with Internet of Things development",
    youtubeId: "Mf4kOCaBpd4",
  },
  {
    slug: "cybersecurity",
    year: "2022",
    title: "Understanding Application Security",
    author: "Charlton Trezevant",
    date: "2022-08-03",
    intro: "Ways to exploit software applications and how to protect against it",
    youtubeId: "YlvTpqYeUog",
  },
  {
    slug: "machine-learning",
    year: "2022",
    title: "Introduction to Machine Learning",
    author: "Vincent Tang",
    date: "2022-09-20",
    intro: "Getting started with machine learning concepts",
    youtubeId: "AkZ79tqzoFY",
  },
  {
    slug: "hacking-halo",
    year: "2022",
    title: "Hacking Halo",
    author: "Vincent Tang",
    date: "2022-11-21",
    intro: "Game modding and reverse engineering",
    youtubeId: "Nn0I5bRXDZo",
  },
  {
    slug: "data-etl-apache",
    year: "2022",
    title: "Data ETL with Apache",
    author: "Vincent Tang",
    date: "2022-12-07",
    intro: "Data extraction, transformation, and loading with Apache tools",
    youtubeId: "bq6FL8299EU",
  },
  {
    slug: "mobile-development",
    year: "2023",
    title: "Mobile Development",
    author: "Vincent Tang",
    date: "2023-02-01",
    intro: "Building mobile applications",
    youtubeId: "6i4YwqymvXI",
  },
  {
    slug: "career-forum",
    year: "2023",
    title: "Career Forum",
    author: "Tampa Devs",
    date: "2023-03-15",
    intro: "Career advice and Q&A with industry professionals",
    youtubeId: "wgzaE9yrH2Y",
  },
  {
    slug: "state-machines",
    year: "2023",
    title: "State Machines in JavaScript",
    author: "Vincent Tang",
    date: "2023-04-05",
    intro: "Understanding and implementing state machines",
    youtubeId: "tCy9Mk4jjAs",
  },
];

export function getAllTalks(): Talk[] {
  return talks.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getTalksByYear(year: string): Talk[] {
  return talks
    .filter((talk) => talk.year === year)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getTalk(year: string, slug: string): Talk | undefined {
  return talks.find((talk) => talk.year === year && talk.slug === slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
