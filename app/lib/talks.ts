export interface Talk {
  slug: string;
  year: string;
  title: string;
  author: string;
  date: string;
  intro: string;
  heroImage?: string;
  youtubeId?: string;
  meetupFlyer?: string;
  canonical?: string;
}

const modules = import.meta.glob("../content/talks/**/*.mdx", {
  eager: true,
  query: "?frontmatter",
});

const talks: Talk[] = Object.entries(modules).flatMap(([filepath, mod]) => {
  const meta = (mod as { frontmatter?: Record<string, string> }).frontmatter;

  if (!meta) {
    console.warn(`No frontmatter found in ${filepath}`, mod);
    return [];
  }

  const parts = filepath.split("/");
  const year = parts.at(-2)!;
  const slug = parts.at(-1)!.replace(/\.mdx$/, "");

  return [{
    slug,
    year,
    title: meta.title ?? "",
    author: meta.author ?? "",
    date: meta.date ?? "",
    intro: meta.intro ?? "",
    heroImage: meta.heroImage,
    youtubeId: meta.youtubeId,
    meetupFlyer: meta.meetupFlyer,
    canonical: meta.canonical,
  }];
});

export function getAllTalks(): Talk[] {
  return [...talks].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getTalksByYear(year: string): Talk[] {
  return talks
    .filter((t) => t.year === year)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getTalk(year: string, slug: string): Talk | undefined {
  return talks.find((t) => t.year === year && t.slug === slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
