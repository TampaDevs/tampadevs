import type { Route } from "./+types/volunteer";
import { generateMetaTags } from "~/lib/seo";
import { generateBreadcrumbSchema } from "~/lib/structured-data";
import { StructuredData } from "~/components/StructuredData";

export const meta: Route.MetaFunction = () => {
  return generateMetaTags({
    title: "Volunteer for Tampa Devs - Help Build Tampa Bay's Tech Community",
    description:
      "Help run Tampa Devs! Volunteer opportunities include event coordination, content creation, web development, and more.",
    url: "https://tampadevs.com/volunteer",
  });
};

function HandHeartIcon({ className }: { className?: string }) {
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

function UsersIcon({ className }: { className?: string }) {
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
        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
      />
    </svg>
  );
}

function RocketIcon({ className }: { className?: string }) {
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
        d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
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

function PencilIcon({ className }: { className?: string }) {
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
        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
      />
    </svg>
  );
}

function CodeIcon({ className }: { className?: string }) {
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
        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
      />
    </svg>
  );
}

function CameraIcon({ className }: { className?: string }) {
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
        d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
      />
    </svg>
  );
}

function FilmIcon({ className }: { className?: string }) {
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
        d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
      />
    </svg>
  );
}

function BuildingIcon({ className }: { className?: string }) {
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
        d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
      />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
}

const benefits = [
  {
    icon: UsersIcon,
    title: "Build Your Network",
    description:
      "Connect with developers, designers, and tech professionals across the Tampa Bay area.",
  },
  {
    icon: RocketIcon,
    title: "Boost Your Career",
    description:
      "Gain leadership experience and add meaningful community contributions to your resume.",
  },
  {
    icon: AcademicCapIcon,
    title: "Learn New Skills",
    description:
      "Pick up event management, content creation, marketing, and more hands-on experience.",
  },
  {
    icon: HandHeartIcon,
    title: "Give Back",
    description:
      "Help grow Tampa Bay's tech community and make a real impact on fellow developers.",
  },
];

const opportunities = [
  {
    icon: CalendarIcon,
    title: "Event Coordination",
    description:
      "Help organize meetups, tech workshops, and community gatherings across Tampa Bay.",
  },
  {
    icon: PencilIcon,
    title: "Content Creation",
    description:
      "Write blog posts, create social media content, and share knowledge with the community.",
  },
  {
    icon: CodeIcon,
    title: "Web Development",
    description:
      "Contribute to tampadevs.com and our open-source projects on GitHub.",
  },
  {
    icon: CameraIcon,
    title: "Photography",
    description:
      "Capture moments at events and help showcase our vibrant community.",
  },
  {
    icon: FilmIcon,
    title: "Video Editing",
    description:
      "Edit and produce talk recordings for our YouTube channel.",
  },
  {
    icon: BuildingIcon,
    title: "University Outreach",
    description:
      "Coordinate with local colleges and universities to engage student developers.",
  },
];

export default function Volunteer() {
  return (
    <>
      <StructuredData
        data={generateBreadcrumbSchema([
          { name: "Home", url: "https://tampadevs.com" },
          { name: "Volunteer", url: "https://tampadevs.com/volunteer" },
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
              Now accepting volunteers
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Help Build{" "}
              <span className="text-coral">Tampa Bay's</span> Tech
              Community
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              Join a team of passionate volunteers who keep Tampa Devs running.
              Whether you're into events, code, content, or cameras — there's a
              place for you.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#volunteer-form"
                className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-white font-semibold rounded-lg hover:bg-coral-light transition-all shadow-lg shadow-coral/25"
              >
                Get Involved
              </a>
              <a
                href="https://go.tampa.dev/slack"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 backdrop-blur-sm border border-white/10 transition-all"
              >
                Join Our Slack
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="bg-navy-light py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Volunteer?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Volunteering with Tampa Devs is more than giving time — it's an
              investment in yourself and the community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group p-6 bg-navy rounded-2xl border border-white/5 hover:border-coral/30 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-coral/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-coral" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities Section */}
      <section className="bg-navy py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ways to Contribute
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We have a variety of roles to match your skills and interests.
              Pick what excites you — or try something new.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {opportunities.map((opportunity) => (
              <div
                key={opportunity.title}
                className="group p-6 bg-navy-light rounded-2xl border border-white/5 hover:border-coral/30 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-coral/20 transition-colors">
                  <opportunity.icon className="w-6 h-6 text-coral" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {opportunity.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {opportunity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-navy-light py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Sign Up",
                description:
                  "Fill out the form below with your info and what interests you.",
              },
              {
                step: "2",
                title: "Get Connected",
                description:
                  "We'll reach out and match you with a team that fits your skills.",
              },
              {
                step: "3",
                title: "Start Contributing",
                description:
                  "Jump in, collaborate with the team, and help shape Tampa's tech scene.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-coral font-bold text-xl">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="volunteer-form" className="bg-navy py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Left Column */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Make a Difference?
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Tell us a bit about yourself and what you're interested in.
                We'll get back to you and find the right fit.
              </p>

              <div className="space-y-4">
                {[
                  "No minimum time commitment required",
                  "Work remotely or in-person at events",
                  "Open to all skill levels and backgrounds",
                  "Join a supportive, welcoming team",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-coral/10 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckIcon className="w-4 h-4 text-coral" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-navy-light rounded-lg border border-white/5">
                <p className="text-sm text-gray-400">
                  Tampa Devs is a 501(c)(3) nonprofit. All volunteer work can
                  count toward community service hours.
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-navy-light rounded-2xl p-8 border border-white/5">
              <h3 className="text-xl font-bold text-white mb-6">
                Volunteer Sign-Up
              </h3>
              <form
                action="https://formspree.io/f/mqkjkqae"
                method="post"
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="First and Last"
                    required
                    className="w-full px-4 py-3 bg-navy border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="_replyto"
                    id="email"
                    placeholder="email@domain.tld"
                    required
                    className="w-full px-4 py-3 bg-navy border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone-number"
                    id="phone"
                    placeholder="813-222-2222"
                    required
                    className="w-full px-4 py-3 bg-navy border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    What interests you?
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    placeholder="Tell us what you'd like to help with..."
                    required
                    className="w-full px-4 py-3 bg-navy border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral transition-colors resize-none"
                  />
                </div>

                <input
                  type="hidden"
                  name="_subject"
                  value="Volunteer Form Submission"
                />

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-coral text-white font-semibold rounded-lg hover:bg-coral-light transition-all shadow-lg shadow-coral/25"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy-light py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-coral/20 via-coral/10 to-transparent rounded-3xl p-[1px]">
              <div className="bg-navy rounded-[22px] p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Have Questions?
                </h2>
                <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto">
                  Jump into our Slack community and say hi in the #volunteers
                  channel. We'd love to chat.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://go.tampa.dev/slack"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-white font-semibold rounded-lg hover:bg-coral-light transition-all shadow-lg shadow-coral/25"
                  >
                    Join Slack
                  </a>
                  <a
                    href="mailto:info@tampadevs.com"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-white/10 border border-white/10 transition-all"
                  >
                    Email Us
                  </a>
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
