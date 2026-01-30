import type { Route } from "./+types/home";
import { generateMetaTags } from "~/lib/seo";
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
} from "~/lib/structured-data";
import { StructuredData } from "~/components/StructuredData";
import { getAllSponsors } from "~/data/sponsors";
import {
  SponsorGrid,
  OpenCollective,
  NewsletterSignup,
  Button,
  Logo,
  EventCard,
} from "@tampadevs/react";
import type { Sponsor } from "@tampadevs/react";
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
    title: "Tampa Devs - Tampa Bay's Developer Community",
    description:
      "Tampa Devs is the fastest-growing nonprofit community for software developers in Tampa Bay. Join us for free workshops, educational events, and career opportunities.",
    url: "https://tampadevs.com",
  });
};

export async function loader({ context }: Route.LoaderArgs) {
  const sponsors: Sponsor[] = getAllSponsors().map((s) => ({
    name: s.name,
    logo: `/images/sponsors/${s.logo}`,
    href: s.href,
    tier: s.type === "gold" ? "gold" : s.type === "silver" ? "silver" : "community",
  }));

  // Fetch next event from events API
  let nextEvent: EventApiResponse | null = null;
  let memberCount = "3,000+";
  try {
    const response = await fetch("https://api.tampa.dev/events/next?groups=tampadevs");
    if (response.ok) {
      const events: EventApiResponse[] = await response.json();
      if (events.length > 0) {
        nextEvent = events[0];
        if (events[0].group?.memberCount) {
          memberCount = events[0].group.memberCount.toLocaleString() + "+";
        }
      }
    }
  } catch {
    // Silently fail - we'll just not show the next event
  }

  return { sponsors, nextEvent, memberCount };
}

function formatEventTime(dateTime: string): string {
  const date = new Date(dateTime);
  return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
}

function getRelativeTime(dateTime: string): string {
  const date = new Date(dateTime);
  const now = new Date();
  const diffMs = date.getTime() - now.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Tomorrow';
  if (diffDays < 7) return `In ${diffDays} days`;
  if (diffDays < 14) return 'Next week';
  return `In ${Math.ceil(diffDays / 7)} weeks`;
}

// Icons
const UsersIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const BuildingIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function Home({ loaderData }: Route.ComponentProps) {
  const { sponsors, nextEvent, memberCount } = loaderData;

  const stats = [
    { icon: <UsersIcon />, value: memberCount, label: "Members" },
    { icon: <CalendarIcon />, value: "200+", label: "Events Hosted" },
    { icon: <HeartIcon />, value: "100%", label: "Free" },
    { icon: <BuildingIcon />, value: "501(c)(3)", label: "Nonprofit" },
  ];

  const features = [
    {
      icon: <UsersIcon />,
      title: "Community Events",
      description: "Monthly meetups, workshops, and networking opportunities with Tampa Bay developers.",
      href: "https://tampa.dev/groups/tampadevs",
      cta: "View Events",
    },
    {
      icon: <CalendarIcon />,
      title: "Talent Network",
      description: "A reverse job board connecting developers with companies in Tampa Bay.",
      href: "https://talent.tampa.dev/",
      cta: "Join Tampa Devs Talent",
    },
    {
      icon: <HeartIcon />,
      title: "Mentorship",
      description: "Free mentorship program connecting junior developers with experienced engineers.",
      href: "https://go.tampa.dev/mentorship",
      cta: "Get Mentored",
    },
  ];

  const resources = [
    {
      title: "Slack Community",
      description: "Join 2,000+ developers in our active Slack workspace for discussions, job leads, and help.",
      image: "/images/promo-slack.webp",
      href: "https://go.tampa.dev/slack",
      cta: "Join Slack",
    },
    {
      title: "Give a Talk",
      description: "Share your knowledge with the community. We provide full video production.",
      image: "/images/about/tampa-dev-edited-117.jpg",
      href: "/speak",
      cta: "Learn More",
    },
    {
      title: "Awesome Merch",
      description: "Support Tampa Devs and show your pride with branded merchandise.",
      image: "/images/promo-store.webp",
      href: "https://store.tampa.dev/",
      cta: "Shop Merch",
    },
  ];

  return (
    <>
      <StructuredData
        data={[generateOrganizationSchema(), generateWebsiteSchema()]}
      />

      {/* Hero Section with Video Background */}
      <section className="relative overflow-hidden">
        {/* Video background */}
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/tampa-devs-v2.webp"
          >
            <source src="/video/TD_output_720_30p.webm" type="video/webm" />
            <source src="/video/TD_output_720_30p.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/80 to-navy/70" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-6 py-16 md:py-32 pb-32 md:pb-40">
          <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-10">
            {/* Large Logo */}
            <div className="flex-shrink-0 transform scale-[1.8] md:scale-[2] origin-center">
              <Logo variant="icon" size="2xl" />
            </div>

            {/* Heading */}
            <div className="text-center md:text-left md:ml-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Tampa Devs
              </h1>
              <p className="text-lg md:text-2xl text-gray-200 mt-2">
                Tampa Bay's Developer Community
              </p>
              <div className="mt-6 flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
                <Button variant="primary" href="#events">Events</Button>
                <a
                  href="https://go.tampa.dev/slack"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-transparent text-white font-semibold rounded-lg border border-white/30 hover:bg-white/10 transition-all"
                >
                  Slack Chat
                </a>
                <a
                  href="#newsletter"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-transparent text-white font-semibold rounded-lg border border-white/30 hover:bg-white/10 transition-all"
                >
                  Newsletter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event - Pulled up into hero */}
      {nextEvent && (
        <section id="events" className="container mx-auto px-6 -mt-16 md:-mt-20 relative z-10">
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

      {/* Intro Section */}
      <section className="py-16 bg-navy relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Building Tampa Bay's Tech Community
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Tampa Devs is the{" "}
            <strong className="text-white">fastest-growing nonprofit community</strong>{" "}
            for software developers in Tampa Bay. We're united by a shared mission to break
            barriers in the tech industry and create opportunities for{" "}
            <strong className="text-white">all backgrounds and experience levels</strong>.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-coral hover:text-coral-light font-semibold transition-colors"
          >
            About Us
            <ArrowRightIcon />
          </Link>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-navy-light">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-navy rounded-2xl border border-white/5"
              >
                <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center text-coral mx-auto mb-3">
                  {stat.icon}
                </div>
                <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features/What We Offer Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What We Offer
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need to grow your career and connect with Tampa Bay's tech community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <a
                key={index}
                href={feature.href}
                target={feature.href.startsWith('http') ? '_blank' : undefined}
                rel={feature.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group bg-navy-light p-8 rounded-2xl border border-white/5 hover:border-coral/30 transition-all hover:-translate-y-1 flex flex-col"
              >
                <div className="w-14 h-14 bg-coral/10 rounded-xl flex items-center justify-center text-coral mb-6 group-hover:bg-coral/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4 flex-grow">{feature.description}</p>
                <span className="inline-flex items-center gap-2 text-coral font-semibold text-sm group-hover:gap-3 transition-all">
                  {feature.cta}
                  <ArrowRightIcon />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-navy-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Resources
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Tools and platforms to help you succeed in your developer journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.href}
                target={resource.href.startsWith('http') ? '_blank' : undefined}
                rel={resource.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group block bg-navy rounded-2xl overflow-hidden border border-white/5 hover:border-coral/30 transition-all hover:-translate-y-1 h-full flex flex-col"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={resource.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-coral transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">{resource.description}</p>
                  <span className="inline-flex items-center gap-2 text-coral font-semibold text-sm group-hover:gap-3 transition-all mt-4">
                    {resource.cta}
                    <ArrowRightIcon />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6 max-w-4xl">
          <SponsorGrid
            title="Our Sponsors"
            description="These amazing companies help keep Tampa Devs free for everyone."
            sponsors={sponsors}
            showTierHeadings
          >
            <Button variant="primary" href="mailto:sponsor@tampadevs.com">Become a Sponsor</Button>
          </SponsorGrid>
        </div>
      </section>

      {/* Community Donors */}
      <section className="py-20 bg-navy-light">
        <div className="container mx-auto px-6 max-w-4xl">
          <OpenCollective
            collective="tampadevs"
            mode="backers"
            title="Community Donors"
            description="Thank you to all our individual supporters!"
            showButton
            showStats
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-coral/20 via-coral/10 to-transparent rounded-3xl p-1">
              <div className="bg-navy-light rounded-[22px] p-10 md:p-14 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Join?
                </h2>
                <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
                  Whether you're a seasoned developer or just starting out,
                  there's a place for you at Tampa Devs.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://tampa.dev/groups/tampadevs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-coral text-white font-semibold rounded-xl hover:bg-coral-light transition-all shadow-lg shadow-coral/25"
                  >
                    Join the Community
                  </a>
                  <a
                    href="https://go.tampa.dev/slack"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white font-semibold rounded-xl hover:bg-navy/80 transition-all border border-white/10"
                  >
                    Chat on Slack
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <div id="newsletter">
        <NewsletterSignup
          title="Stay in the Loop"
          description="Get local tech news, upcoming events, job opportunities, and more from Tampa Devs."
          endpoint="https://newsletter.api.tampa.dev/subscribe"
        />
      </div>
    </>
  );
}
