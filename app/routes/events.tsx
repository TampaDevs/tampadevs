import type { Route } from "./+types/events";
import { generateMetaTags } from "~/lib/seo";
import { generateBreadcrumbSchema } from "~/lib/structured-data";
import { StructuredData } from "~/components/StructuredData";
import { EventCard } from "@tampadevs/react";
import { Link } from "react-router";

interface EventApiResponse {
  id: string;
  title: string;
  description?: string;
  dateTime: string;
  eventUrl: string;
  rsvpCount: number;
  isOnline: boolean;
  address?: string | null;
  photoUrl?: string | null;
  group: {
    name: string;
    urlname: string;
    memberCount?: number;
  };
}

export const meta: Route.MetaFunction = () => {
  return generateMetaTags({
    title: "Tech Events & Developer Meetups in Tampa Bay | Tampa Devs",
    description:
      "Discover free tech events, developer meetups, workshops, and networking in Tampa Bay. Tampa Devs hosts 200+ events for software developers and tech professionals.",
    url: "https://tampadevs.com/events",
  });
};

export async function loader() {
  let nextEvent: EventApiResponse | null = null;
  try {
    const response = await fetch(
      "https://api.tampa.dev/events/next?groups=tampadevs"
    );
    if (response.ok) {
      const events: EventApiResponse[] = await response.json();
      if (events.length > 0) {
        nextEvent = events[0];
      }
    }
  } catch {
    // Silently fail - we'll just not show the next event
  }

  return { nextEvent };
}

function formatEventTime(dateTime: string): string {
  const date = new Date(dateTime);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

function getRelativeTime(dateTime: string): string {
  const date = new Date(dateTime);
  const now = new Date();
  const diffMs = date.getTime() - now.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Tomorrow";
  if (diffDays < 7) return `In ${diffDays} days`;
  if (diffDays < 14) return "Next week";
  return `In ${Math.ceil(diffDays / 7)} weeks`;
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className || "w-5 h-5"}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}

const eventTypes = [
  {
    title: "Monthly Meetups",
    description:
      "Our flagship gatherings featuring tech talks, networking, and food. Held at venues across Tampa Bay.",
  },
  {
    title: "Workshops",
    description:
      "Hands-on sessions where you build something real — from React apps to cloud infrastructure.",
  },
  {
    title: "Hackathons",
    description:
      "Multi-day events like BayHacks where teams collaborate to build projects and compete for prizes.",
  },
  {
    title: "Networking Socials",
    description:
      "Casual meetups at local venues designed for connecting with fellow tech professionals.",
  },
  {
    title: "Lightning Talks",
    description:
      "Short, focused presentations where multiple speakers share ideas in a single evening.",
  },
];

export default function Events({ loaderData }: Route.ComponentProps) {
  const { nextEvent } = loaderData;

  return (
    <>
      <StructuredData
        data={generateBreadcrumbSchema([
          { name: "Home", url: "https://tampadevs.com" },
          { name: "Events", url: "https://tampadevs.com/events" },
        ])}
      />

      <main className="bg-navy min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-coral/20 via-navy to-navy">
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-coral/10 via-transparent to-transparent"
            aria-hidden="true"
          />
          <div
            className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full bg-coral/5 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-coral/5 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative container mx-auto px-6 py-20 md:py-28">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-gray-300 mb-8">
                <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
                200+ events hosted
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Tech Events &amp; Developer Meetups in{" "}
                <span className="text-coral">Tampa Bay</span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Tampa Devs hosts free meetups, workshops, hackathons, and
                networking events for software developers and tech professionals
                across the Tampa Bay area.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://tampa.dev/groups/tampadevs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-white font-semibold rounded-lg hover:bg-coral-light transition-all shadow-lg shadow-coral/25"
                >
                  Browse the Full Calendar on tampa.dev
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Next Event */}
        {nextEvent && (
          <section className="container mx-auto px-6 -mt-16 md:-mt-20 relative z-10">
            <div className="max-w-4xl mx-auto">
              <EventCard
                variant="featured"
                title={nextEvent.title}
                date={nextEvent.dateTime}
                time={formatEventTime(nextEvent.dateTime)}
                location={nextEvent.address || undefined}
                groupName={nextEvent.group.name}
                groupUrl={`https://tampa.dev/groups/${nextEvent.group.urlname}`}
                eventUrl={nextEvent.eventUrl}
                imageUrl={nextEvent.photoUrl || undefined}
                rsvpCount={nextEvent.rsvpCount}
                isOnline={nextEvent.isOnline}
                description={nextEvent.description}
                relativeTime={getRelativeTime(nextEvent.dateTime)}
              />
            </div>
          </section>
        )}

        {/* About Our Events */}
        <section className="bg-navy-light py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What to Expect
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Our events bring together software developers, data engineers,
                DevOps professionals, designers, product managers, and tech
                leaders for learning, sharing, and connecting. Every event is
                free and open to all experience levels.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Events typically include a featured tech talk or workshop,
                networking time, and food provided by our sponsors. Talks are
                professionally recorded and published to our YouTube channel.
              </p>
            </div>
          </div>
        </section>

        {/* Types of Events */}
        <section className="bg-navy py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Types of Events
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We host a variety of events to match different interests and
                learning styles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {eventTypes.map((type) => (
                <div
                  key={type.title}
                  className="p-6 bg-navy-light rounded-2xl border border-white/5 hover:border-coral/30 transition-all"
                >
                  <h3 className="text-lg font-bold text-white mb-2">
                    {type.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Browse the Calendar CTA */}
        <section className="bg-navy-light py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-coral/20 via-coral/10 to-transparent rounded-3xl p-[1px]">
                <div className="bg-navy rounded-[22px] p-8 md:p-12 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Browse the Full Calendar
                  </h2>
                  <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto">
                    View the complete Tampa Bay tech events calendar on
                    tampa.dev — including events from all local tech groups.
                  </p>
                  <a
                    href="https://tampa.dev/groups/tampadevs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-coral text-white font-semibold rounded-xl hover:bg-coral-light transition-all shadow-lg shadow-coral/25"
                  >
                    RSVP to Upcoming Developer Meetups
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Give a Talk / Past Talks */}
        <section className="bg-navy py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Link
                to="/speak"
                className="group p-8 bg-navy-light rounded-2xl border border-white/5 hover:border-coral/30 transition-all hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  Give a Talk
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Share your knowledge with Tampa Bay's software developer community. We
                  provide professional video production, photography, and a blog
                  feature for every speaker.
                </p>
                <span className="inline-flex items-center gap-2 text-coral font-semibold text-sm group-hover:gap-3 transition-all">
                  Learn About Speaking
                  <ArrowRightIcon className="w-4 h-4" />
                </span>
              </Link>

              <Link
                to="/talks"
                className="group p-8 bg-navy-light rounded-2xl border border-white/5 hover:border-coral/30 transition-all hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  Watch Past Talks
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Catch up on talks from previous events. Learn from local
                  developers and industry experts on topics from React to
                  DevOps.
                </p>
                <span className="inline-flex items-center gap-2 text-coral font-semibold text-sm group-hover:gap-3 transition-all">
                  Browse Past Talks
                  <ArrowRightIcon className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
