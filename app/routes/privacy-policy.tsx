import type { Route } from "./+types/privacy-policy";
import { generateMetaTags } from "~/lib/seo";

export const meta: Route.MetaFunction = () => {
  return generateMetaTags({
    title: "Privacy Policy - Tampa Devs",
    description:
      "Tampa Devs privacy policy explaining how we collect, use, and protect your personal information.",
    url: "https://tampadevs.com/privacy-policy",
  });
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-navy min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <header className="mb-12 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
        </header>

        <div className="max-w-3xl prose prose-invert prose-lg">
          <p>
            Thank you for entrusting your personal information to our nonprofit
            organization. This privacy policy explains how we collect, use, and
            disclose your information.
          </p>

          <h2>Data Collection</h2>
          <p>
            We only collect information that is necessary to provide you with
            the best service possible. When you sign up for our Meetup group or
            our newsletter, we will collect your email address to help us manage
            our newsletter functions.
          </p>

          <h2>Data Sharing</h2>
          <p>
            We do not share your personal information with any third parties
            unless it is required to provide you with the service you requested,
            or you have given us your explicit consent. For example, if you
            choose to participate in a hackathon or other event, we may share
            your information with the organizers of that event.
          </p>

          <h2>Opt-In</h2>
          <p>
            We will only share your personal information with third parties if
            you opt-in to allow us to do so.
          </p>

          <h2>Data Protection</h2>
          <p>
            We take the security of your personal information very seriously and
            have implemented appropriate measures to protect it from
            unauthorized access, disclosure, or misuse.
          </p>

          <p>
            If you have any questions or concerns about our privacy policy,
            please do not hesitate to contact us.
          </p>
        </div>
      </div>
    </main>
  );
}
