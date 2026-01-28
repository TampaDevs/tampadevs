import type { Route } from "./+types/volunteer";
import { generateMetaTags } from "~/lib/seo";

export const meta: Route.MetaFunction = () => {
  return generateMetaTags({
    title: "Volunteer for Tampa Devs!",
    description:
      "Help run Tampa Devs! Volunteer opportunities include event coordination, content creation, web development, and more.",
    url: "https://tampadevs.com/volunteer",
  });
};

export default function Volunteer() {
  return (
    <main className="bg-navy min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <header className="mb-12 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Volunteer for Tampa Devs!
          </h1>
          <p className="text-xl text-gray-300">
            Interested in helping run Tampa Devs? We could use your help!
          </p>
        </header>

        <div className="max-w-3xl prose prose-invert prose-lg mb-12">
          <p>Here are some examples of awesome things you can help on:</p>
          <ul>
            <li>
              Coordinating with local Universities and Colleges in Tampa/St Pete
            </li>
            <li>Volunteering with Hackathon Logistics for TADHacks</li>
            <li>Helping organize meetups / tech workshops</li>
            <li>Write Tampa Devs Blog content</li>
            <li>Updating the website</li>
            <li>Video Editing</li>
            <li>Photography</li>
          </ul>

          <p>Please fill out the form below:</p>
        </div>

        <div className="max-w-xl">
          <form
            action="https://formspree.io/f/mqkjkqae"
            method="post"
            className="space-y-6"
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
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-coral"
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
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-coral"
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
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-coral"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                placeholder="What would you like to help on? :)"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-coral resize-none"
              />
            </div>

            <input
              type="hidden"
              name="_subject"
              value="Volunteer Form Submission"
            />

            <button
              type="submit"
              className="w-full px-6 py-3 bg-coral text-white font-semibold rounded-lg hover:bg-coral-light transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
