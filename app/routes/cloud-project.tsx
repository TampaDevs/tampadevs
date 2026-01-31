import type { Route } from "./+types/cloud-project";
import { generateMetaTags } from "~/lib/seo";
import { generateBreadcrumbSchema } from "~/lib/structured-data";
import { StructuredData } from "~/components/StructuredData";
import { SponsorGrid } from "@tampadevs/react";
import type { Sponsor } from "@tampadevs/react";
import { Link } from "react-router";

export const meta: Route.MetaFunction = () => {
  return generateMetaTags({
    title:
      "Tampa Devs Public Cloud - Free Open Source Cloud Infrastructure",
    description:
      "The Tampa Devs Public Cloud Project provides free, open-source cloud infrastructure to schools, universities, and developers in Tampa Bay. 24 TiB NVMe storage, 1.5 TiB RAM, 400 CPU cores.",
    url: "https://tampadevs.com/cloud-project",
    image: "https://tampadevs.com/images/blog/2024/public-cloud/image3.webp",
  });
};

function ServerIcon({ className }: { className?: string }) {
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
        d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z"
      />
    </svg>
  );
}

function CpuIcon({ className }: { className?: string }) {
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
        d="M8.25 3v1.5M4.5 8.25H3M21 8.25h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3M21 15.75h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
      />
    </svg>
  );
}

function CircleStackIcon({ className }: { className?: string }) {
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
        d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
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

function CodeBracketIcon({ className }: { className?: string }) {
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

function LockOpenIcon({ className }: { className?: string }) {
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
        d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
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

const principles = [
  {
    icon: LockOpenIcon,
    title: "Open Source",
    description:
      "Built entirely on open-source software. No vendor lock-in, no proprietary restrictions.",
  },
  {
    icon: AcademicCapIcon,
    title: "Education First",
    description:
      "Free for public institutions, schools, and universities. Students learn on real infrastructure.",
  },
  {
    icon: CodeBracketIcon,
    title: "Built by Engineers",
    description:
      "Designed and operated by volunteer cloud engineers, data center professionals, and developers.",
  },
];

const specs = [
  { label: "NVMe Storage", value: "24 TiB", icon: CircleStackIcon },
  { label: "RAM", value: "1.5 TiB", icon: ServerIcon },
  { label: "CPU Cores", value: "400", icon: CpuIcon },
  { label: "Cost", value: "Free", icon: AcademicCapIcon },
];

const audiences = [
  "Students and student organizations at local universities",
  "Public schools and educators in Tampa Bay",
  "Career changers learning cloud and infrastructure skills",
  "Developers exploring baremetal and hyperscaler computing",
  "Hackathon participants needing compute resources",
  "Open-source projects and community initiatives",
];

const cloudSponsors: Sponsor[] = [
  {
    name: "Ace Host",
    logo: "/images/sponsors/ace_host.png",
    href: "https://www.acehost.com/?utm_source=tampadevs&utm_medium=referral&utm_campaign=community_sponsor",
    tier: "gold",
  },
  {
    name: "xByte Technologies",
    logo: "/images/sponsors/xbyte_technologies.svg",
    href: "https://www.xbyte.com/?utm_source=tampadevs&utm_medium=referral&utm_campaign=community_sponsor",
    tier: "gold",
  },
];

export default function CloudProject() {
  return (
    <>
      <StructuredData
        data={generateBreadcrumbSchema([
          { name: "Home", url: "https://tampadevs.com" },
          {
            name: "Public Cloud",
            url: "https://tampadevs.com/cloud-project",
          },
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
                Open Source Program
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Tampa Devs{" "}
                <span className="text-coral">Cloud</span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed mb-4 max-w-2xl">
                Free, open-source cloud infrastructure for schools,
                universities, and developers in Tampa Bay. Because technology
                should be a tool for all, not a privilege for some.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl">
                The Tampa Devs Cloud Project democratizes access to
                baremetal and hyperscaler computing technology through skilled
                volunteers and open-source software.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/volunteer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-white font-semibold rounded-lg hover:bg-coral-light transition-all shadow-lg shadow-coral/25"
                >
                  Volunteer for the Cloud Project
                </Link>
                <Link
                  to="/blog/2024/the-public-cloud-project"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 backdrop-blur-sm border border-white/10 transition-all"
                >
                  Read the Full Story
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Specs Banner */}
        <section className="bg-navy-light py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="text-center p-6 bg-navy rounded-2xl border border-white/5"
                >
                  <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center text-coral mx-auto mb-3">
                    <spec.icon className="w-6 h-6" />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    {spec.value}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">{spec.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-navy py-16 md:py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl" />

          <div className="relative container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Bridging the Digital Divide
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Students and educators at public schools and universities often
                face budget constraints, lengthy procurement processes, and
                limited access to the computing resources they need. The Tampa
                Devs Cloud removes those barriers entirely, giving
                students and organizations immediate, free access to run virtual
                machines, test code, and work on real infrastructure projects.
              </p>
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="bg-navy-light py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How We're Built
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Standardized by
                academics, designed by engineers, built by volunteers, and bootstrapped by developers.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className="group p-6 bg-navy rounded-2xl border border-white/5 hover:border-coral/30 transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-coral/20 transition-colors">
                    <principle.icon className="w-6 h-6 text-coral" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who It Serves */}
        <section className="bg-navy py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Who It's For
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {audiences.map((audience) => (
                  <div key={audience} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-coral/10 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckIcon className="w-4 h-4 text-coral" />
                    </div>
                    <span className="text-gray-300 text-lg">{audience}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Made Possible By */}
        <section className="bg-navy py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Made Possible By Volunteers & Our Incredible Sponsors
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                The Cloud is spearheaded by{" "}
                <a
                  href="https://tampa.dev/p/desync"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline underline-offset-2 hover:text-coral transition-colors font-semibold"
                >
                  Justin Herron
                </a>
                , a Navy veteran and cloud engineer. It's built and maintained entirely by
                skilled volunteers from the Tampa Devs community, and made
                possible by the generous support of our sponsors.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-10">
                The project launched at the{" "}
                <strong className="text-white">
                  Tampa Devs BayHacks 2024 Hackathon
                </strong>
                , where participants tested code on virtual machines and helped
                shape the platform.
              </p>
            </div>
            <SponsorGrid
              title=""
              description=""
              sponsors={cloudSponsors}
            />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy-light py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-coral/20 via-coral/10 to-transparent rounded-3xl p-[1px]">
                <div className="bg-navy rounded-[22px] p-8 md:p-12 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Help Build the Cloud
                  </h2>
                  <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto">
                    We're looking for cloud engineers, data center
                    gangsters, sysadmins, and anyone passionate about
                    open-source infrastructure.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link
                      to="/volunteer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-white font-semibold rounded-lg hover:bg-coral-light transition-all shadow-lg shadow-coral/25"
                    >
                      Volunteer
                    </Link>
                    <a
                      href="https://go.tampa.dev/slack"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-navy-light text-white font-semibold rounded-lg hover:bg-white/10 border border-white/10 transition-all"
                    >
                      Join Slack
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
