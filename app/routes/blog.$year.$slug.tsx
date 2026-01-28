import type { Route } from "./+types/blog.$year.$slug";
import { generateMetaTags } from "~/lib/seo";
import { getPost, formatDate } from "~/lib/blog";
import { getAuthorImage } from "~/lib/authors";
import { Link } from "react-router";
import { Suspense, lazy, useMemo } from "react";

// Use Vite's glob import to get all MDX files
const mdxModules = import.meta.glob("../content/blog/**/*.mdx");

export const meta: Route.MetaFunction = ({ data }) => {
  if (!data?.post) {
    return generateMetaTags({
      title: "Post Not Found - Tampa Devs",
      description: "The requested blog post could not be found.",
      url: "https://tampadevs.com/blog",
    });
  }

  return generateMetaTags({
    title: `${data.post.title} - Tampa Devs Blog`,
    description: data.post.intro,
    url: `https://tampadevs.com/blog/${data.post.year}/${data.post.slug}`,
    image: data.post.heroImage
      ? `https://tampadevs.com${data.post.heroImage}`
      : undefined,
  });
};

export async function loader({ params }: Route.LoaderArgs) {
  const { year, slug } = params;

  if (!year || !slug) {
    throw new Response("Not Found", { status: 404 });
  }

  const post = getPost(year, slug);

  if (!post) {
    throw new Response("Not Found", { status: 404 });
  }

  // Check if MDX file exists
  const hasContent = Object.keys(mdxModules).some((path) =>
    path.endsWith(`${year}/${slug}.mdx`)
  );

  const authorImage = getAuthorImage(post.author);

  return { post, year, slug, hasContent, authorImage };
}

export default function BlogPost({ loaderData }: Route.ComponentProps) {
  const { post, year, slug, hasContent, authorImage } = loaderData;

  // Dynamically load the MDX component
  const MDXContent = useMemo(() => {
    if (!hasContent) return null;

    const mdxPath = Object.keys(mdxModules).find((path) =>
      path.endsWith(`${year}/${slug}.mdx`)
    );

    if (!mdxPath) return null;

    return lazy(() =>
      mdxModules[mdxPath]().then((mod) => ({
        default: (mod as { default: React.ComponentType }).default,
      }))
    );
  }, [year, slug, hasContent]);

  return (
    <main className="bg-navy min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        {post.heroImage ? (
          <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
            <img
              src={post.heroImage}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/30" />
          </div>
        ) : (
          <div className="h-32 bg-gradient-to-b from-navy-light to-navy" />
        )}

        {/* Title overlay on hero */}
        <div className={`${post.heroImage ? 'absolute bottom-0 left-0 right-0' : ''} container mx-auto px-6`}>
          <div className="max-w-4xl mx-auto pb-8">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-coral hover:text-coral-light transition-colors text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
            </nav>

            {/* Category/Date */}
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-coral/20 text-coral text-sm font-medium rounded-full">
                {post.year}
              </span>
              <time className="text-gray-300 text-sm">
                {formatDate(post.date)}
              </time>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {post.title}
            </h1>

            {/* Intro/Subtitle */}
            {post.intro && (
              <p className="text-xl text-gray-300 mt-4 max-w-2xl">
                {post.intro}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Author Section */}
      <div className="container mx-auto px-6 py-8 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            {/* Author Avatar */}
            <img
              src={authorImage}
              alt={post.author}
              className="w-12 h-12 rounded-full object-cover flex-shrink-0"
            />

            <div>
              <p className="text-white font-semibold">{post.author}</p>
              <p className="text-gray-400 text-sm">Tampa Devs Contributor</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none
            prose-headings:text-white prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-white/10
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-coral prose-a:no-underline hover:prose-a:text-coral-light hover:prose-a:underline
            prose-strong:text-white prose-strong:font-semibold
            prose-ul:text-gray-300 prose-ol:text-gray-300
            prose-li:mb-2
            prose-blockquote:border-l-coral prose-blockquote:bg-navy-light prose-blockquote:rounded-r-lg prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:text-gray-300
            prose-code:text-coral prose-code:bg-navy-light prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-navy-light prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl
            prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
            prose-hr:border-white/10
          ">
            {MDXContent ? (
              <Suspense
                fallback={
                  <div className="space-y-4">
                    <div className="animate-pulse">
                      <div className="h-4 bg-navy-light rounded w-3/4 mb-4" />
                      <div className="h-4 bg-navy-light rounded w-full mb-4" />
                      <div className="h-4 bg-navy-light rounded w-5/6 mb-4" />
                      <div className="h-4 bg-navy-light rounded w-2/3" />
                    </div>
                  </div>
                }
              >
                <MDXContent />
              </Suspense>
            ) : (
              <div className="bg-navy-light rounded-xl p-8 text-center">
                <svg className="w-12 h-12 text-gray-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-gray-400">
                  This blog post content is being migrated. Check back soon!
                </p>
              </div>
            )}
          </div>

          {/* Author Byline at Bottom */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex items-center gap-4">
              <img
                src={authorImage}
                alt={post.author}
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <p className="text-sm text-gray-400 uppercase tracking-wide mb-1">Written by</p>
                <p className="text-xl text-white font-semibold">{post.author}</p>
                <p className="text-gray-400 text-sm mt-1">Tampa Devs Contributor</p>
              </div>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-10 pt-8 border-t border-white/10 flex justify-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy-light text-white font-medium rounded-lg hover:bg-navy-light/80 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Posts
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
