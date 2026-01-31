import type { Route } from "./+types/get-involved";
import { generateMetaTags } from "~/lib/seo";
import { generateBreadcrumbSchema } from "~/lib/structured-data";
import { StructuredData } from "~/components/StructuredData";
import { Link } from "react-router";

export const meta: Route.MetaFunction = () => {
  return generateMetaTags({
    title: "Get Involved with Tampa Devs - Volunteer, Speak, Sponsor",
    description:
      "Join Tampa Bay's largest tech community. Volunteer, give a talk, become a sponsor, or mentor developers. Many ways to contribute to Tampa Devs.",
    url: "https://tampadevs.com/get-involved",
  });
};

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

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
      />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
      />
    </svg>
  );
}

function MicrophoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
      />
    </svg>
  );
}

function HandRaisedIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 0-.759-.659c-1.18.212-2.652-.137-3.726-1.211a1.003 1.003 0 0 0-.644-.317V7.575"
      />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
      />
    </svg>
  );
}

function AcademicCapIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
      />
    </svg>
  );
}

const ways = [
  {
    icon: CalendarIcon,
    title: "Attend Events",
    description:
      "RSVP to your first Tampa Bay tech meetup. All events are free and open to everyone.",
    href: "/events",
    cta: "Browse Events",
    external: false,
  },
  {
    icon: ChatIcon,
    title: "Join Slack",
    description:
      "Connect with 2,000+ developers in our active Slack workspace for discussions and job leads.",
    href: "https://go.tampa.dev/slack",
    cta: "Join the Conversation",
    external: true,
  },
  {
    icon: MicrophoneIcon,
    title: "Give a Talk",
    description:
      "Share your expertise with the community. We provide full video production and promotion.",
    href: "/speak",
    cta: "Learn About Speaking",
    external: false,
  },
  {
    icon: HandRaisedIcon,
    title: "Volunteer",
    description:
      "Help organize events, create content, contribute code, or coordinate outreach.",
    href: "/volunteer",
    cta: "See Volunteer Roles",
    external: false,
  },
  {
    icon: HeartIcon,
    title: "Sponsor Us",
    description:
      "Support Tampa Bay's tech community as a corporate partner. Your sponsorship keeps events free.",
    href: "/partnership",
    cta: "Become a Partner",
    external: false,
  },
  {
    icon: AcademicCapIcon,
    title: "Mentorship",
    description:
      "Get paired with an experienced engineer or give back by mentoring the next generation.",
    href: "https://go.tampa.dev/mentorship",
    cta: "Sign Up for Mentorship",
    external: true,
  },
];

export default function GetInvolved() {
  return (
    <>
      <StructuredData
        data={generateBreadcrumbSchema([
          { name: "Home", url: "https://tampadevs.com" },
          { name: "Get Involved", url: "https://tampadevs.com/get-involved" },
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Get Involved with{" "}
                <span className="text-coral">Tampa Bay's</span> Tech Community
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Tampa Devs runs on community participation. Whether you want to
                attend your first meetup, share your expertise on stage, or help
                behind the scenes — there are many ways to contribute.
              </p>

              <a
                href="https://tampa.dev/groups/tampadevs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-white font-semibold rounded-lg hover:bg-coral-light transition-all shadow-lg shadow-coral/25"
              >
                RSVP to Your First Tampa Bay Tech Meetup
              </a>
            </div>
          </div>
        </section>

        {/* Ways to Participate */}
        <section className="bg-navy-light py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ways to Participate
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Pick the path that fits you — or try a few. Every contribution
                helps grow Tampa Bay's tech community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {ways.map((way) => {
                const content = (
                  <div className="group p-6 bg-navy rounded-2xl border border-white/5 hover:border-coral/30 transition-all hover:-translate-y-1 flex flex-col h-full">
                    <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-coral/20 transition-colors">
                      <way.icon className="w-6 h-6 text-coral" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {way.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                      {way.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-coral font-semibold text-sm group-hover:gap-3 transition-all">
                      {way.cta}
                      <ArrowRightIcon className="w-4 h-4" />
                    </span>
                  </div>
                );

                if (way.external) {
                  return (
                    <a
                      key={way.title}
                      href={way.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <Link key={way.title} to={way.href}>
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* For Companies */}
        <section className="bg-navy py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-coral/20 via-coral/10 to-transparent rounded-3xl p-[1px]">
                <div className="bg-navy rounded-[22px] p-8 md:p-12">
                  <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      For Companies
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto">
                      Partner with Tampa Devs to reach 3,000+ software
                      developers and tech professionals. Your sponsorship keeps
                      our events free and supports Tampa Bay's tech ecosystem.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Link
                        to="/partnership"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-white font-semibold rounded-lg hover:bg-coral-light transition-all shadow-lg shadow-coral/25"
                      >
                        Become a Partner
                      </Link>
                      <a
                        href="mailto:sponsor@tampadevs.com"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-navy-light text-white font-semibold rounded-lg hover:bg-white/10 border border-white/10 transition-all"
                      >
                        Email Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
