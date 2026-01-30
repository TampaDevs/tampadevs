import type { Route } from "./+types/thank-you";
import { generateMetaTags } from "~/lib/seo";
import { Link } from "react-router";

export const meta: Route.MetaFunction = () => {
  return generateMetaTags({
    title: "Thank You! - Tampa Devs",
    description: "Thank you for your submission to Tampa Devs!",
    url: "https://tampadevs.com/thank-you",
  });
};

export default function ThankYou() {
  return (
    <main className="bg-navy min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-coral/20 mb-6">
              <svg
                className="w-10 h-10 text-coral"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Thank You!
            </h1>
            <p className="text-xl text-gray-300">
              Your submission has been received. We'll be in touch soon!
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-gray-400">
              In the meantime, check out what's happening at Tampa Devs:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-block px-6 py-3 bg-coral text-white font-semibold rounded-lg hover:bg-coral-light transition-all"
              >
                Back to Home
              </Link>
              <a
                href="https://tampa.dev/groups/tampadevs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-navy-light text-white font-semibold rounded-lg hover:bg-navy-light/80 transition-all"
              >
                View Upcoming Events
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
