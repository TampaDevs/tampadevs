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

const modules = import.meta.glob("../content/blog/**/*.mdx", {
  eager: true,
});

const blogPosts: BlogPost[] = Object.entries(modules).flatMap(([filepath, mod]) => {
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
    canonical: meta.canonical,
  }];
});

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
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
