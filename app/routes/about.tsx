import type { Route } from "./+types/about";
import { generateMetaTags } from "~/lib/seo";
import { generateOrganizationSchema } from "~/lib/structured-data";
import { StructuredData } from "~/components/StructuredData";
import { getOrganizers } from "~/data/people";
import { getAllSponsors } from "~/data/sponsors";
import { getPastEvents } from "~/data/pastevents";
import {
  PersonCard,
  LogoMarquee,
  ImageCarousel,
} from "@tampadevs/react";
import type { SocialLink, MarqueeLogo, CarouselImage } from "@tampadevs/react";
import { Link } from "react-router";

export const meta: Route.MetaFunction = () => {
  return generateMetaTags({
    title: "About Tampa Devs - Our Story & Team",
    description:
      "Learn about Tampa Devs, the leading nonprofit software community in Tampa Bay. Meet our team and discover how we're breaking barriers in the tech industry.",
    url: "https://tampadevs.com/about",
  });
};

export async function loader({ context }: Route.LoaderArgs) {
  const organizers = getOrganizers().map((person) => ({
    name: person.name,
    role: person.title,
    bio: person.bio || "",
    photo: `/images/people/${person.image}`,
    socials: person.href
      ? [
        {
          platform: (
            person.href.type.toLowerCase() === "linkedin"
              ? "linkedin"
              : person.href.type.toLowerCase() === "twitter"
                ? "twitter"
                : "website"
          ) as SocialLink["platform"],
          url: person.href.url,
        },
      ]
      : [],
  }));

  const sponsorLogos: MarqueeLogo[] = getAllSponsors().map((sponsor) => ({
    src: `/images/sponsors/${sponsor.logo}`,
    alt: sponsor.name,
    href: sponsor.href,
  }));

  const pastEventImages: CarouselImage[] = getPastEvents().map((event) => ({
    src: `/images/about/past-events/${event.image}`,
    alt: event.altText,
    title: event.title,
  }));

  // Fetch member count from events API
  let memberCount = "3,000+"; // Fallback
  try {
    const response = await fetch("https://api.tampa.dev/events/next?groups=tampadevs");
    if (response.ok) {
      const events = await response.json();
      if (events.length > 0 && events[0].group?.memberCount) {
        const count = events[0].group.memberCount;
        memberCount = count.toLocaleString() + "+";
      }
    }
  } catch {
    // Use fallback
  }

  return { organizers, sponsorLogos, pastEventImages, memberCount };
}

// Stats icons
const UsersIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

export default function About({ loaderData }: Route.ComponentProps) {
  const { organizers, sponsorLogos, pastEventImages, memberCount } = loaderData;

  const stats = [
    { icon: <UsersIcon />, value: memberCount, label: "Active Members" },
    { icon: <CalendarIcon />, value: "200+", label: "Events Hosted" },
    { icon: <SparklesIcon />, value: "2021", label: "Founded" },
    { icon: <HeartIcon />, value: "100%", label: "Free Events" },
  ];

  const values = [
    {
      title: "Community First",
      description: "We believe in the power of community. Our events bring together developers of all skill levels to learn, share, and grow together.",
    },
    {
      title: "Accessible to All",
      description: "Every event is free and open to everyone. We're committed to breaking down barriers and making tech education accessible.",
    },
    {
      title: "Quality Content",
      description: "From workshops to talks, we focus on delivering high-quality, practical content that helps developers succeed in their careers.",
    },
  ];

  return (
    <>
      <StructuredData data={generateOrganizationSchema()} />

      <main className="bg-navy min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-coral/20 via-navy to-navy" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-coral/10 via-transparent to-transparent" />

          {/* Decorative elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-coral/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-coral/5 rounded-full blur-3xl" />

          <div className="relative container mx-auto px-6 py-20 md:py-28">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-coral/10 border border-coral/20 rounded-full mb-6">
                <span className="w-2 h-2 bg-coral rounded-full" />
                <span className="text-coral text-sm font-medium">Tampa Bay's Largest Tech Community</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Building Tampa's{" "}
                <span className="text-coral">Developer</span> Community
              </h1>

              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                As a nonprofit organization, we're united by a shared mission to break barriers
                in the tech industry and create opportunities for all backgrounds and experience levels.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://tampa.dev/groups/tampadevs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-coral text-white font-semibold rounded-xl hover:bg-coral-light transition-all shadow-lg shadow-coral/25 hover:shadow-xl hover:shadow-coral/30 hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  Join the Community
                </a>
                <Link
                  to="/partnership"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Become a Sponsor
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-navy-light">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-navy rounded-2xl border border-white/5"
                >
                  <div className="w-14 h-14 bg-coral/10 rounded-xl flex items-center justify-center text-coral mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Our Story
                  </h2>
                  <div className="text-gray-300 space-y-5 leading-relaxed">
                    <p>
                      Tampa Devs started as a small group of friends in the technology
                      industry who met through latin dance. After realizing the broad
                      appeal and clear need for a developer meetup in Tampa, founder
                      Vincent Tang publicly launched the group with its first event in
                      September 2021.
                    </p>
                    <p>
                      Since its inception, Tampa Devs has helped its members acquire new
                      skills and find success in the technology industry. Today, with more
                      than 2,000 active members and an average attendance of over 200
                      at our hosted events, we are proud to serve as a thriving hub for
                      Tampa Bay's developer community.
                    </p>
                    <p>
                      Our innovative partnerships with local universities, non-profit tech
                      institutes, and startup incubators mean there's something for
                      everyone at Tampa Devs — whether you're a developer, student,
                      technologist, or entrepreneur.
                    </p>
                  </div>
                </div>

                {/* Visual element */}
                <div className="relative">
                  <div className="aspect-[4/3] bg-gradient-to-br from-coral/20 to-transparent rounded-3xl p-1">
                    <div className="w-full h-full bg-navy-light rounded-[22px] overflow-hidden">
                      <img
                        src="/images/about/tampa-dev-edited-117.jpg"
                        alt="Tampa Devs community event"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -right-4 bg-navy border border-white/10 rounded-xl px-5 py-3 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-coral/20 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">Tampa Bay, FL</p>
                        <p className="text-gray-400 text-xs">Since 2021</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-navy-light">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What We Stand For
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our values guide everything we do, from the events we host to the partnerships we form.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-navy p-8 rounded-2xl border border-white/5 hover:border-coral/20 transition-all group"
                >
                  <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center text-coral mb-6 group-hover:bg-coral/20 transition-colors">
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                The passionate volunteers who make Tampa Devs possible.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {organizers.map((person) => (
                <PersonCard
                  key={person.name}
                  name={person.name}
                  role={person.role}
                  bio={person.bio}
                  photo={person.photo}
                  socials={person.socials}
                  variant="default"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Past Events Gallery */}
        <section className="py-20 bg-navy-light">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Past Event Gallery
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Highlights from our community events and meetups.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <ImageCarousel
                images={pastEventImages}
                autoplay
                interval={3000}
                showDots
                showArrows
                showCaptions
                loop
                aspectRatio="16/9"
              />
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="py-20 overflow-hidden">
          <div className="container mx-auto px-6 mb-10">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Sponsors
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Thank you to our amazing sponsors who help make our events possible.
              </p>
            </div>
          </div>
          {/* Full-width marquee - breaks out of container */}
          <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
            <LogoMarquee
              logos={sponsorLogos}
              speed={40}
              logoHeight="50px"
              pauseOnHover
              color
            />
          </div>
          <div className="container mx-auto px-6 mt-10 text-center">
            <Link
              to="/partnership"
              className="inline-flex items-center gap-2 text-coral hover:text-coral-light transition-colors font-medium"
            >
              Become a sponsor
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-navy-light">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-coral/20 via-coral/10 to-transparent rounded-3xl p-1">
                <div className="bg-navy rounded-[22px] p-10 md:p-14 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to Join Us?
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
                    Whether you want to attend events, give a talk, or support our mission,
                    there's a place for you at Tampa Devs.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href="https://tampa.dev/groups/tampadevs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-coral text-white font-semibold rounded-xl hover:bg-coral-light transition-all"
                    >
                      Join Tampa Devs
                    </a>
                    <Link
                      to="/speak"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy-light text-white font-semibold rounded-xl hover:bg-navy-light/80 transition-all border border-white/10"
                    >
                      Give a Talk
                    </Link>
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
