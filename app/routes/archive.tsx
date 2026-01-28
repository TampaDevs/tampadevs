import type { Route } from "./+types/archive";
import { generateMetaTags } from "~/lib/seo";
import { Link } from "react-router";

export const meta: Route.MetaFunction = () => {
  return generateMetaTags({
    title: "Archive - Tampa Devs",
    description:
      "Archive of past Tampa Devs content, including blog posts, talks, and event materials.",
    url: "https://tampadevs.com/archive",
  });
};

export default function Archive() {
  return (
    <main className="bg-navy min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <header className="mb-12 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Archive
          </h1>
          <p className="text-xl text-gray-300">
            Browse our archive of past content and resources.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            to="/blog"
            className="block p-6 bg-navy-light rounded-xl hover:bg-navy-light/80 transition-all group"
          >
            <h2 className="text-xl font-bold text-white group-hover:text-coral transition-colors">
              Blog Posts
            </h2>
            <p className="text-gray-400 mt-2">
              News, updates, and stories from our community.
            </p>
          </Link>

          <Link
            to="/talks"
            className="block p-6 bg-navy-light rounded-xl hover:bg-navy-light/80 transition-all group"
          >
            <h2 className="text-xl font-bold text-white group-hover:text-coral transition-colors">
              Past Talks
            </h2>
            <p className="text-gray-400 mt-2">
              Watch recordings from our previous events and presentations.
            </p>
          </Link>

          <a
            href="https://www.youtube.com/@TampaDevs"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-navy-light rounded-xl hover:bg-navy-light/80 transition-all group"
          >
            <h2 className="text-xl font-bold text-white group-hover:text-coral transition-colors">
              YouTube Channel
            </h2>
            <p className="text-gray-400 mt-2">
              Full video archive of all our talks and events.
            </p>
          </a>

          <a
            href="https://www.meetup.com/tampadevs/events/past/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-navy-light rounded-xl hover:bg-navy-light/80 transition-all group"
          >
            <h2 className="text-xl font-bold text-white group-hover:text-coral transition-colors">
              Past Meetup Events
            </h2>
            <p className="text-gray-400 mt-2">
              View all past events on Meetup.com.
            </p>
          </a>

          <a
            href="https://github.com/TampaDevs"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-navy-light rounded-xl hover:bg-navy-light/80 transition-all group"
          >
            <h2 className="text-xl font-bold text-white group-hover:text-coral transition-colors">
              GitHub Organization
            </h2>
            <p className="text-gray-400 mt-2">
              Open source projects and code repositories.
            </p>
          </a>

          <Link
            to="/press"
            className="block p-6 bg-navy-light rounded-xl hover:bg-navy-light/80 transition-all group"
          >
            <h2 className="text-xl font-bold text-white group-hover:text-coral transition-colors">
              Press & Media Kit
            </h2>
            <p className="text-gray-400 mt-2">
              Logos, brand assets, and media resources.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
