import type { Route } from "./+types/talks._index";
import { generateMetaTags } from "~/lib/seo";
import { getAllTalks, formatDate, type Talk } from "~/lib/talks";
import { getAuthors, hasMultipleAuthors } from "~/lib/authors";
import { AvatarGroup } from "@tampadevs/react";
import { Link } from "react-router";

export const meta: Route.MetaFunction = () => {
  return generateMetaTags({
    title: "Past Talks - Tampa Devs",
    description:
      "Watch past talks and presentations from Tampa Devs events. Learn from local developers and industry experts.",
    url: "https://tampadevs.com/talks",
  });
};

export async function loader({ context }: Route.LoaderArgs) {
  const talks = getAllTalks();

  // Group talks by year
  const talksByYear = talks.reduce<Record<string, Talk[]>>((acc, talk) => {
    if (!acc[talk.year]) {
      acc[talk.year] = [];
    }
    acc[talk.year].push(talk);
    return acc;
  }, {});

  // Get sorted years (most recent first)
  const years = Object.keys(talksByYear).sort((a, b) => parseInt(b) - parseInt(a));

  return { talksByYear, years };
}

function TalkCard({ talk }: { talk: Talk }) {
  return (
    <Link
      to={`/talks/${talk.year}/${talk.slug}`}
      className="group block bg-navy-light rounded-xl overflow-hidden hover:ring-2 hover:ring-coral/50 transition-all"
    >
      {/* Video Thumbnail */}
      <div className="aspect-video relative overflow-hidden bg-navy">
        {talk.youtubeId ? (
          <>
            <img
              src={`https://img.youtube.com/vi/${talk.youtubeId}/mqdefault.jpg`}
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-coral/90 flex items-center justify-center group-hover:bg-coral group-hover:scale-110 transition-all">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </>
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
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
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
          {formatDate(talk.date)}
        </time>
        <h3 className="text-lg font-bold text-white mt-2 group-hover:text-coral transition-colors line-clamp-2">
          {talk.title}
        </h3>
        {talk.intro && (
          <p className="text-gray-400 mt-2 text-sm line-clamp-2">{talk.intro}</p>
        )}

        {/* Presenter(s) */}
        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/10">
          {hasMultipleAuthors(talk.author) ? (
            <>
              <AvatarGroup
                avatars={getAuthors(talk.author).map(a => ({
                  src: a.image,
                  name: a.name,
                }))}
                size="sm"
              />
              <span className="text-sm text-gray-300">{talk.author}</span>
            </>
          ) : (
            <>
              <img
                src={getAuthors(talk.author)[0].image}
                alt={talk.author}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm text-gray-300">{talk.author}</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}

export default function TalksIndex({ loaderData }: Route.ComponentProps) {
  const { talksByYear, years } = loaderData;

  return (
    <main className="bg-navy min-h-screen">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Talks at Tampa Devs
          </h1>
          <p className="text-xl text-gray-300">
            Watch recordings from our previous events and presentations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <a
              href="/speak"
              className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-white font-semibold rounded-lg hover:bg-coral-light transition-all"
            >
              Speak at Tampa Devs
            </a>
            <a
              href="http://go.tampa.dev/youtube"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy-light text-white font-semibold rounded-lg hover:bg-navy-light/80 transition-all border border-white/10"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Subscribe on YouTube
            </a>
          </div>
        </header>

        {/* Talks grouped by year */}
        <div className="space-y-16">
          {years.map((year) => (
            <section key={year}>
              {/* Year heading */}
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-white">{year}</h2>
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-gray-500 text-sm">
                  {talksByYear[year].length} {talksByYear[year].length === 1 ? 'talk' : 'talks'}
                </span>
              </div>

              {/* Grid of cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {talksByYear[year].map((talk) => (
                  <TalkCard key={`${talk.year}/${talk.slug}`} talk={talk} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
