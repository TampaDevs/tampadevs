import type { Route } from "./+types/onboarding";
import { generateMetaTags } from "~/lib/seo";
import { getOrganizers } from "~/data/people";
import { PersonCard, Button } from "@tampadevs/react";
import type { SocialLink } from "@tampadevs/react";

export const meta: Route.MetaFunction = () => {
  return generateMetaTags({
    title: "Tampa Devs Organizer Onboarding",
    description:
      "Learn how to become a Tampa Devs organizer and join our team.",
    url: "https://tampadevs.com/onboarding",
  });
};

export async function loader({ context }: Route.LoaderArgs) {
  const organizers = getOrganizers().map((person) => ({
    name: person.name,
    role: person.title,
    bio: person.bio || "",
    photo: `/images/people/${person.image}`,
    socials: (person.href
      ? [
          {
            platform:
              person.href.type.toLowerCase() === "linkedin"
                ? "linkedin"
                : "website",
            url: person.href.url,
          } as SocialLink,
        ]
      : []) as SocialLink[],
  }));

  return { organizers };
}

export default function Onboarding({ loaderData }: Route.ComponentProps) {
  const { organizers } = loaderData;

  return (
    <main className="bg-navy min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <header className="mb-12 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tampa Devs Organizer Onboarding
          </h1>
          <p className="text-xl text-gray-300">
            Here is the process to become an organizer:
          </p>
        </header>

        <div className="max-w-3xl space-y-8 mb-16">
          <div className="bg-navy-light rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-2">
              Step 1 - Apply
            </h3>
            <p className="text-gray-300 mb-4">
              Submit your application using this google form
            </p>
            <Button variant="primary" href="https://go.tampa.dev/organize">
              Apply from Google Application Form
            </Button>
          </div>

          <div className="bg-navy-light rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-2">
              Step 2 - Application Review
            </h3>
            <p className="text-gray-300 mb-4">
              The Tampa Devs organizers will review your application and contact
              you with the next steps
            </p>
            <Button variant="secondary" href="https://go.tampa.dev/organize">
              Check your status
            </Button>
          </div>

          <div className="bg-navy-light rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-2">
              Step 3 - Result
            </h3>
            <p className="text-gray-300 mb-4">
              Congrats, welcome to the team!
            </p>
            <Button variant="primary" href="/about">
              Meet the Team
            </Button>
          </div>
        </div>

        {/* Current Team */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-10">Current Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </section>
      </div>
    </main>
  );
}
