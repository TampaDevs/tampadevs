import type { Route } from "./+types/partnership";
import { generateMetaTags } from "~/lib/seo";
import { generateBreadcrumbSchema } from "~/lib/structured-data";
import { StructuredData } from "~/components/StructuredData";
import { getAllSponsors } from "~/data/sponsors";
import { LogoMarquee, Button } from "@tampadevs/react";
import type { MarqueeLogo } from "@tampadevs/react";

export const meta: Route.MetaFunction = () => {
  return generateMetaTags({
    title: "Sponsor Tampa Devs - Partner with Tampa Bay's Tech Community",
    description:
      "Sponsor Tampa Bay's largest developer community. Tampa Devs is a 501(c)(3) nonprofit reaching 3,000+ software developers and tech professionals through free events.",
    url: "https://tampadevs.com/partnership",
  });
};

export async function loader({ context }: Route.LoaderArgs) {
  const sponsors: MarqueeLogo[] = getAllSponsors().map((s) => ({
    src: `/images/sponsors/${s.logo}`,
    alt: s.name,
    href: s.href,
  }));

  // Fetch member count from events API
  let memberCount = "3,000+";
  try {
    const response = await fetch("https://api.tampa.dev/events/next?groups=tampadevs");
    if (response.ok) {
      const events = await response.json();
      if (events.length > 0 && events[0].group?.memberCount) {
        memberCount = events[0].group.memberCount.toLocaleString() + "+";
      }
    }
  } catch {
    // Use fallback
  }

  return { sponsors, memberCount };
}

// Icons
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

const GlobeIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

const MicrophoneIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
  </svg>
);

const BuildingIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
  </svg>
);

const MegaphoneIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
  </svg>
);

const GiftIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18a1.5 1.5 0 001.5-1.5v-1.5a1.5 1.5 0 00-1.5-1.5h-18a1.5 1.5 0 00-1.5 1.5v1.5a1.5 1.5 0 001.5 1.5z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function Partnership({ loaderData }: Route.ComponentProps) {
  const { sponsors, memberCount } = loaderData;

  const stats = [
    { icon: <UsersIcon />, value: memberCount, label: "Active Members" },
    { icon: <CalendarIcon />, value: "200+", label: "Events Hosted" },
    { icon: <GlobeIcon />, value: "2,000+", label: "Slack Members" },
    { icon: <HeartIcon />, value: "100%", label: "Free Events" },
  ];

  const benefits = [
    {
      icon: <MicrophoneIcon />,
      title: "Speaking Opportunities",
      description: "Present your products, services, or technical expertise to our engaged developer audience.",
    },
    {
      icon: <BuildingIcon />,
      title: "Venue Hosting",
      description: "Host events at your office to showcase your workspace and culture to potential hires.",
    },
    {
      icon: <MegaphoneIcon />,
      title: "Brand Visibility",
      description: "Logo placement on our website, event materials, and social media with 100K+ impressions monthly.",
    },
    {
      icon: <GiftIcon />,
      title: "Recruiting Access",
      description: "Direct access to Tampa Bay's largest developer talent pool for your hiring needs.",
    },
  ];

  const impactAreas = [
    "Bigger, better, and more fun networking events",
    "Growth and marketing of Tampa Bay as an industry-leading technology hub",
    "Learning environments and tech workshops from reputable speakers",
    "Career-building experiences like hackathons",
    "Support and mentorship to student organizations at USF, UT, and more",
    "Scholarships for career transitioners pursuing tech education",
  ];

  return (
    <>
      <StructuredData
        data={generateBreadcrumbSchema([
          { name: "Home", url: "https://tampadevs.com" },
          { name: "Partnership", url: "https://tampadevs.com/partnership" },
        ])}
      />
      <main className="bg-navy min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-coral/20 via-navy to-navy" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-coral/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-coral/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

          <div className="relative container mx-auto px-6 py-20 md:py-28">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-coral/10 rounded-full text-coral font-medium text-sm mb-6">
                <HeartIcon />
                Support the Community
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Partner with
                <span className="text-coral"> Tampa Devs</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join the companies investing in Tampa Bay's tech future. Your sponsorship
                directly supports free events, workshops, and career opportunities for
                thousands of developers.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-white font-semibold rounded-lg hover:bg-coral-light transition-all shadow-lg shadow-coral/25"
                >
                  Become a Partner
                </a>
                <a
                  href="mailto:sponsor@tampadevs.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-navy-light border-y border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-navy rounded-2xl border border-white/5"
                >
                  <div className="w-14 h-14 bg-coral/10 rounded-xl flex items-center justify-center text-coral mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 bg-navy">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Your Impact
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Sponsor contributions directly enable us to grow Tampa Bay's software developer ecosystem.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {impactAreas.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-5 bg-navy-light rounded-xl border border-white/5"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-coral/10 rounded-lg flex items-center justify-center text-coral">
                      <CheckIcon />
                    </div>
                    <p className="text-gray-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-navy-light">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Sponsor Benefits
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Get your brand in front of Tampa Bay's most engaged developer community.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="p-8 bg-navy rounded-2xl border border-white/5 hover:border-coral/20 transition-all"
                  >
                    <div className="w-14 h-14 bg-coral/10 rounded-xl flex items-center justify-center text-coral mb-5">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Current Sponsors */}
        <section className="py-20 bg-navy">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Current Partners
                </h2>
                <p className="text-gray-400">
                  Join these amazing companies supporting Tampa Bay's tech community.
                </p>
              </div>

              <LogoMarquee
                logos={sponsors}
                speed={40}
                logoHeight="60px"
                pauseOnHover
                color
              />
            </div>
          </div>
        </section>

        {/* Testimonial/Quote Section */}
        <section className="py-20 bg-navy-light">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-coral/10 via-transparent to-transparent rounded-3xl p-1">
                <div className="bg-navy rounded-[22px] p-10 md:p-14 text-center">
                  <div className="flex justify-center gap-1 mb-6 text-coral">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                  <blockquote className="text-xl md:text-2xl text-white font-medium mb-6 leading-relaxed">
                    "Tampa Devs has been instrumental in helping us connect with talented developers
                    in the Tampa Bay area. Their events consistently attract engaged, passionate
                    technologists."
                  </blockquote>
                  <p className="text-coral font-semibold">Tampa Devs Sponsor</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-20 bg-navy">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Left side - Text */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Let's Build Great Things Together
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Ready to partner with Tampa Bay's largest developer community?
                    Fill out the form and our team will get back to you within 48 hours.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-300">
                      <svg className="w-5 h-5 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:sponsor@tampadevs.com" className="hover:text-coral transition-colors">
                        sponsor@tampadevs.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <svg className="w-5 h-5 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Tampa Bay, Florida</span>
                    </div>
                  </div>

                  <div className="mt-10 p-6 bg-navy-light rounded-xl border border-white/5">
                    <p className="text-sm text-gray-400">
                      <strong className="text-white">501(c)(3) Nonprofit</strong>
                      <br />
                      Tampa Devs is a registered nonprofit organization. Sponsorship contributions
                      may be tax-deductible.
                    </p>
                  </div>
                </div>

                {/* Right side - Form */}
                <div className="bg-navy-light rounded-2xl p-8 border border-white/5">
                  <form
                    action="https://formspree.io/f/xknenrnk"
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
                        placeholder="Jane Smith"
                        required
                        className="w-full px-4 py-3 bg-navy border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Work Email
                      </label>
                      <input
                        type="email"
                        name="_replyto"
                        id="email"
                        placeholder="jane@company.com"
                        required
                        className="w-full px-4 py-3 bg-navy border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        placeholder="Acme Inc."
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
                        type="tel"
                        name="phone-number"
                        id="phone"
                        placeholder="(813) 555-0123"
                        className="w-full px-4 py-3 bg-navy border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        How would you like to partner with us?
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        placeholder="Tell us about your company and sponsorship interests..."
                        required
                        className="w-full px-4 py-3 bg-navy border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral transition-colors resize-none"
                      />
                    </div>

                    <input
                      type="hidden"
                      name="_subject"
                      value="Partnership Inquiry - Tampa Devs"
                    />

                    <button
                      type="submit"
                      className="w-full px-6 py-4 bg-coral text-white font-semibold rounded-lg hover:bg-coral-light transition-all shadow-lg shadow-coral/25"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
