import type { Route } from "./+types/talks.$year.$slug";
import { generateMetaTags } from "~/lib/seo";
import { getTalk, formatDate } from "~/lib/talks";
import { getAuthors, hasMultipleAuthors } from "~/lib/authors";
import { AvatarGroup } from "@tampadevs/react";
import { Link } from "react-router";
import { Suspense, lazy, useMemo } from "react";

// Use Vite's glob import to get all MDX files
const mdxModules = import.meta.glob("../content/talks/**/*.mdx");

export const meta: Route.MetaFunction = ({ data }) => {
  if (!data?.talk) {
    return generateMetaTags({
      title: "Talk Not Found - Tampa Devs",
      description: "The requested talk could not be found.",
      url: "https://tampadevs.com/talks",
    });
  }

  return generateMetaTags({
    title: `${data.talk.title} - Tampa Devs Talks`,
    description: data.talk.intro,
    url: `https://tampadevs.com/talks/${data.talk.year}/${data.talk.slug}`,
    image: data.talk.youtubeId
      ? `https://img.youtube.com/vi/${data.talk.youtubeId}/maxresdefault.jpg`
      : data.talk.heroImage
        ? `https://tampadevs.com${data.talk.heroImage}`
        : undefined,
  });
};

export async function loader({ params }: Route.LoaderArgs) {
  const { year, slug } = params;

  if (!year || !slug) {
    throw new Response("Not Found", { status: 404 });
  }

  const talk = getTalk(year, slug);

  if (!talk) {
    throw new Response("Not Found", { status: 404 });
  }

  // Check if MDX file exists
  const hasContent = Object.keys(mdxModules).some((path) =>
    path.endsWith(`${year}/${slug}.mdx`)
  );

  const authors = getAuthors(talk.author);
  const isMultipleAuthors = hasMultipleAuthors(talk.author);

  return { talk, year, slug, hasContent, authors, isMultipleAuthors };
}

export default function TalkPage({ loaderData }: Route.ComponentProps) {
  const { talk, year, slug, hasContent, authors, isMultipleAuthors } = loaderData;

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
      {/* Video Hero Section */}
      <div className="relative">
        {talk.youtubeId ? (
          <div className="relative bg-navy-light">
            <div className="container mx-auto px-6 pt-8">
              {/* Breadcrumb */}
              <nav className="mb-6">
                <Link
                  to="/talks"
                  className="inline-flex items-center gap-2 text-coral hover:text-coral-light transition-colors text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Talks
                </Link>
              </nav>

              {/* Video Embed - centered and responsive */}
              <div className="max-w-5xl mx-auto">
                <div className="relative pb-[56.25%] rounded-xl overflow-hidden shadow-2xl">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${talk.youtubeId}`}
                    title={talk.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
            <div className="h-12 bg-gradient-to-b from-navy-light to-navy" />
          </div>
        ) : (
          <div className="h-32 bg-gradient-to-b from-navy-light to-navy" />
        )}

        {/* Title section */}
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto py-8">
            {!talk.youtubeId && (
              <nav className="mb-6">
                <Link
                  to="/talks"
                  className="inline-flex items-center gap-2 text-coral hover:text-coral-light transition-colors text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Talks
                </Link>
              </nav>
            )}

            {/* Category/Date */}
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-coral/20 text-coral text-sm font-medium rounded-full">
                {talk.year}
              </span>
              <time className="text-gray-300 text-sm">
                {formatDate(talk.date)}
              </time>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {talk.title}
            </h1>

            {/* Intro/Subtitle */}
            {talk.intro && (
              <p className="text-xl text-gray-300 mt-4 max-w-2xl">
                {talk.intro}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Presenter Section */}
      <div className="container mx-auto px-6 py-8 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            {/* Presenter Avatar(s) */}
            {isMultipleAuthors ? (
              <AvatarGroup
                avatars={authors.map(a => ({
                  src: a.image,
                  name: a.name,
                }))}
                size="md"
              />
            ) : (
              <img
                src={authors[0].image}
                alt={talk.author}
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              />
            )}

            <div>
              <p className="text-white font-semibold">{talk.author}</p>
              <p className="text-gray-400 text-sm">{isMultipleAuthors ? 'Presenters' : 'Presenter'}</p>
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
            ) : null}
          </div>

          {/* Presenter Byline at Bottom */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex items-center gap-4">
              {isMultipleAuthors ? (
                <AvatarGroup
                  avatars={authors.map(a => ({
                    src: a.image,
                    name: a.name,
                  }))}
                  size="lg"
                />
              ) : (
                <img
                  src={authors[0].image}
                  alt={talk.author}
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
              )}
              <div>
                <p className="text-sm text-gray-400 uppercase tracking-wide mb-1">Presented by</p>
                <p className="text-xl text-white font-semibold">{talk.author}</p>
              </div>
            </div>
          </div>

          {/* Back to Talks / YouTube link */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-4">
            <Link
              to="/talks"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy-light text-white font-medium rounded-lg hover:bg-navy-light/80 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Talks
            </Link>
            <a
              href="http://go.tampa.dev/youtube"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-white font-medium rounded-lg hover:bg-coral-light transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
