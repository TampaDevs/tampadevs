import type { Route } from "./+types/community";
import { generateMetaTags } from "~/lib/seo";
import {
  generateOrganizationSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "~/lib/structured-data";
import { StructuredData } from "~/components/StructuredData";
import { Link } from "react-router";

export const meta: Route.MetaFunction = () => {
  return generateMetaTags({
    title: "Tampa Bay's Software & Tech Community | Tampa Devs",
    description:
      "Tampa Devs is a 501(c)(3) nonprofit community for software developers, data engineers, DevOps professionals, designers, and tech founders in the Tampa Bay area. Join 3,000+ members.",
    url: "https://tampadevs.com/community",
  });
};

const audiences = [
  {
    title: "Software Developers",
    description:
      "Frontend, backend, and full-stack engineers building web, mobile, and cloud applications.",
  },
  {
    title: "Data Engineers",
    description:
      "Professionals working with data pipelines, analytics, machine learning, and AI systems.",
  },
  {
    title: "DevOps & SRE",
    description:
      "Infrastructure engineers, cloud architects, and site reliability professionals.",
  },
  {
    title: "Product Managers",
    description:
      "Product leaders shaping the direction of technology teams and digital products.",
  },
  {
    title: "UX & UI Designers",
    description:
      "Designers creating user experiences and interfaces for digital products.",
  },
  {
    title: "Tech Founders",
    description:
      "Entrepreneurs and startup builders turning ideas into technology businesses.",
  },
  {
    title: "Students & Career Changers",
    description:
      "Anyone learning to code or transitioning into a technology career.",
  },
];

const offerings = [
  {
    title: "Free Events & Meetups",
    description:
      "Monthly meetups, workshops, and networking events across Tampa Bay. Browse the full schedule on the Tampa Bay tech events calendar.",
    href: "https://tampa.dev/groups/tampadevs",
    cta: "Browse Tampa Bay Tech Events",
    external: true,
  },
  {
    title: "Slack Community",
    description:
      "Join 2,000+ developers in our active Slack workspace for discussions, job leads, and technical help.",
    href: "https://go.tampa.dev/slack",
    cta: "Join Slack",
    external: true,
  },
  {
    title: "Mentorship Program",
    description:
      "Free mentorship connecting junior developers with experienced engineers in the Tampa Bay area.",
    href: "https://go.tampa.dev/mentorship",
    cta: "Get Mentored",
    external: true,
  },
  {
    title: "Talent Network",
    description:
      "A reverse job board connecting developers with companies hiring in Tampa Bay.",
    href: "https://talent.tampa.dev/",
    cta: "Explore Talent Network",
    external: true,
  },
  {
    title: "Tech Talks & Workshops",
    description:
      "Learn from local developers and industry experts through recorded talks and hands-on workshops.",
    href: "/talks",
    cta: "Watch Past Talks",
    external: false,
  },
];

const faqs = [
  {
    question: "Is there a software developer community in Tampa?",
    answer:
      "Yes. Tampa Devs is a 501(c)(3) nonprofit community with 3,000+ members connecting software developers, engineers, designers, and tech professionals across the Tampa Bay area. All events and programs are completely free.",
  },
  {
    question: "What tech communities exist in Tampa Bay?",
    answer:
      "Tampa Devs is the largest nonprofit technology community in Tampa Bay, hosting monthly meetups, workshops, and networking events. Browse the full Tampa Bay tech events calendar at tampa.dev for events from all local tech groups.",
  },
  {
    question: "How do I meet other software developers in Tampa?",
    answer:
      "Attend a free Tampa Devs meetup or join our Slack community of 2,000+ developers. We host monthly events where you can meet software developers, data engineers, DevOps professionals, designers, and tech founders across the Tampa Bay area.",
  },
  {
    question: "Where can I find tech events in Tampa Bay?",
    answer:
      "Tampa Devs hosts 200+ free events for developers and tech professionals. For the full schedule of tech events across all Tampa Bay groups, browse the Tampa Bay tech events calendar at tampa.dev.",
  },
  {
    question: "Is Tampa Devs free to join?",
    answer:
      "Yes. Tampa Devs is a 501(c)(3) nonprofit organization. All events, meetups, workshops, mentorship programs, and community resources are completely free for everyone.",
  },
  {
    question: "Who can join Tampa Devs?",
    answer:
      "Everyone is welcome. Tampa Devs serves software developers, data engineers, DevOps professionals, product managers, UX designers, tech founders, students, and career changers of all backgrounds and experience levels.",
  },
];

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

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className || "w-5 h-5"}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function Community() {
  return (
    <>
      <StructuredData
        data={[
          generateOrganizationSchema(),
          generateBreadcrumbSchema([
            { name: "Home", url: "https://tampadevs.com" },
            { name: "Community", url: "https://tampadevs.com/community" },
          ]),
          generateFAQSchema(faqs),
        ]}
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
                501(c)(3) Nonprofit
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Tampa Bay's Software &amp;{" "}
                <span className="text-coral">Tech Community</span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Tampa Devs is a 501(c)(3) nonprofit connecting software
                developers, engineers, designers, and tech professionals across
                the Tampa Bay area. From meetups and workshops to mentorship and
                career support, we create opportunities for everyone.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://tampa.dev/groups/tampadevs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-white font-semibold rounded-lg hover:bg-coral-light transition-all shadow-lg shadow-coral/25"
                >
                  Explore Tampa Bay Tech Events
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

        {/* Who We're For Section */}
        <section className="bg-navy-light py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Who We're For
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Tampa Devs welcomes anyone working in or adjacent to technology.
                No matter your role, experience level, or background.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {audiences.map((audience) => (
                <div
                  key={audience.title}
                  className="p-5 bg-navy rounded-2xl border border-white/5 hover:border-coral/30 transition-all"
                >
                  <h3 className="text-lg font-bold text-white mb-2">
                    {audience.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="bg-navy py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What We Offer
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Everything you need to grow your career and connect with Tampa
                Bay's tech community — completely free.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {offerings.map((offering) => (
                <a
                  key={offering.title}
                  href={offering.href}
                  target={offering.external ? "_blank" : undefined}
                  rel={
                    offering.external ? "noopener noreferrer" : undefined
                  }
                  className="group p-6 bg-navy-light rounded-2xl border border-white/5 hover:border-coral/30 transition-all hover:-translate-y-1 flex flex-col"
                >
                  <h3 className="text-lg font-bold text-white mb-2">
                    {offering.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                    {offering.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-coral font-semibold text-sm group-hover:gap-3 transition-all">
                    {offering.cta}
                    <ArrowRightIcon className="w-4 h-4" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-navy-light py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { value: "3,000+", label: "Members" },
                { value: "200+", label: "Events Hosted" },
                { value: "100%", label: "Free" },
                { value: "501(c)(3)", label: "Nonprofit" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-6 bg-navy rounded-2xl border border-white/5"
                >
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-navy py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group bg-navy-light rounded-2xl border border-white/5 overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-white font-semibold hover:text-coral transition-colors">
                    {faq.question}
                    <ChevronDownIcon className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-5 text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-navy-light py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-coral/20 via-coral/10 to-transparent rounded-3xl p-[1px]">
                <div className="bg-navy rounded-[22px] p-8 md:p-12 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to Join?
                  </h2>
                  <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto">
                    Whether you're a seasoned engineer or just getting started,
                    there's a place for you at Tampa Devs.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a
                      href="https://tampa.dev/groups/tampadevs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-white font-semibold rounded-lg hover:bg-coral-light transition-all shadow-lg shadow-coral/25"
                    >
                      Find Events on tampa.dev
                    </a>
                    <a
                      href="https://go.tampa.dev/slack"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-navy-light text-white font-semibold rounded-lg hover:bg-white/10 border border-white/10 transition-all"
                    >
                      Chat on Slack
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
