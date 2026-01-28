import type { Route } from "./+types/blog._index";
import { generateMetaTags } from "~/lib/seo";
import { getAllPosts, formatDate, type BlogPost } from "~/lib/blog";
import { getAuthorImage } from "~/lib/authors";
import { Link } from "react-router";

export const meta: Route.MetaFunction = () => {
  return generateMetaTags({
    title: "Blog - Tampa Devs",
    description:
      "News, updates, and stories from Tampa Devs - Tampa Bay's largest tech community.",
    url: "https://tampadevs.com/blog",
  });
};

export async function loader({ context }: Route.LoaderArgs) {
  const posts = getAllPosts();

  // Group posts by year
  const postsByYear = posts.reduce<Record<string, BlogPost[]>>((acc, post) => {
    if (!acc[post.year]) {
      acc[post.year] = [];
    }
    acc[post.year].push(post);
    return acc;
  }, {});

  // Get sorted years (most recent first)
  const years = Object.keys(postsByYear).sort((a, b) => parseInt(b) - parseInt(a));

  return { postsByYear, years };
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to={`/blog/${post.year}/${post.slug}`}
      className="group block bg-navy-light rounded-xl overflow-hidden hover:ring-2 hover:ring-coral/50 transition-all"
    >
      {/* Square Image Container */}
      <div className="aspect-square relative overflow-hidden bg-navy">
        {post.heroImage ? (
          <img
            src={post.heroImage}
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg
              className="w-16 h-16 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </div>
        )}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-5">
        <time className="text-sm text-coral font-medium">
          {formatDate(post.date)}
        </time>
        <h3 className="text-lg font-bold text-white mt-2 group-hover:text-coral transition-colors line-clamp-2">
          {post.title}
        </h3>
        {post.intro && (
          <p className="text-gray-400 mt-2 text-sm line-clamp-2">{post.intro}</p>
        )}

        {/* Author */}
        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/10">
          <img
            src={getAuthorImage(post.author)}
            alt={post.author}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm text-gray-300">{post.author}</span>
        </div>
      </div>
    </Link>
  );
}

export default function BlogIndex({ loaderData }: Route.ComponentProps) {
  const { postsByYear, years } = loaderData;

  return (
    <main className="bg-navy min-h-screen">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tampa Devs Blog
          </h1>
          <p className="text-xl text-gray-300">
            News, updates, and stories from our community.
          </p>
        </header>

        {/* Posts grouped by year */}
        <div className="space-y-16">
          {years.map((year) => (
            <section key={year}>
              {/* Year heading */}
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-white">{year}</h2>
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-gray-500 text-sm">
                  {postsByYear[year].length} {postsByYear[year].length === 1 ? 'post' : 'posts'}
                </span>
              </div>

              {/* Grid of cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {postsByYear[year].map((post) => (
                  <BlogCard key={`${post.year}/${post.slug}`} post={post} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
