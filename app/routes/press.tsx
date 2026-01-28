import type { Route } from "./+types/press";
import { generateMetaTags } from "~/lib/seo";

export const meta: Route.MetaFunction = () => {
  return generateMetaTags({
    title: "Marketing Media Kit - Tampa Devs",
    description:
      "Tampa Devs media kit with logos, brand colors, and assets for press and marketing purposes.",
    url: "https://tampadevs.com/press",
  });
};

export default function Press() {
  return (
    <main className="bg-navy min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <header className="mb-12 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Marketing Media Kit
          </h1>
          <p className="text-xl text-gray-300">
            Here is the media kit for Tampa Devs
          </p>
        </header>

        <div className="max-w-4xl prose prose-invert prose-lg">
          <h2>Logo Colors</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-8">
            <div className="bg-navy-light p-4 rounded-lg">
              <div
                className="w-full h-16 rounded mb-2"
                style={{ backgroundColor: "#d70100" }}
              />
              <p className="text-white font-semibold">Red (logo)</p>
              <p className="text-gray-400 text-sm">
                HEX #d70100 · RGB(215,1,0)
              </p>
            </div>
            <div className="bg-navy-light p-4 rounded-lg">
              <div
                className="w-full h-16 rounded mb-2"
                style={{ backgroundColor: "#000000" }}
              />
              <p className="text-white font-semibold">Black (logo)</p>
              <p className="text-gray-400 text-sm">HEX #000000 · RGB(0,0,0)</p>
            </div>
            <div className="bg-navy-light p-4 rounded-lg">
              <div
                className="w-full h-16 rounded mb-2 border border-gray-600"
                style={{ backgroundColor: "#ffffff" }}
              />
              <p className="text-white font-semibold">White (logo)</p>
              <p className="text-gray-400 text-sm">
                HEX #ffffff · RGB(255,255,255)
              </p>
            </div>
            <div className="bg-navy-light p-4 rounded-lg">
              <div
                className="w-full h-16 rounded mb-2"
                style={{ backgroundColor: "#225ba5" }}
              />
              <p className="text-white font-semibold">Blue (supporting)</p>
              <p className="text-gray-400 text-sm">
                HEX #225ba5 · RGB(34,82,167)
              </p>
            </div>
          </div>

          <h2>Supporting Colors for website / slidedecks</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose mb-8">
            <div className="bg-navy-light p-4 rounded-lg">
              <div
                className="w-full h-16 rounded mb-2"
                style={{ backgroundColor: "#ee5c53" }}
              />
              <p className="text-white font-semibold">Orange (CTAs)</p>
              <p className="text-gray-400 text-sm">
                HEX #ee5c53 · RGB(238, 92, 83)
              </p>
            </div>
            <div className="bg-navy-light p-4 rounded-lg">
              <div
                className="w-full h-16 rounded mb-2"
                style={{ backgroundColor: "#4e5569" }}
              />
              <p className="text-white font-semibold">Gray (web color)</p>
              <p className="text-gray-400 text-sm">
                HEX #4e5569 · RGB(78, 85, 105)
              </p>
            </div>
            <div className="bg-navy-light p-4 rounded-lg">
              <div
                className="w-full h-16 rounded mb-2"
                style={{ backgroundColor: "#1aac9c" }}
              />
              <p className="text-white font-semibold">Green (web color)</p>
              <p className="text-gray-400 text-sm">
                HEX #1aac9c · RGB(26, 172, 156)
              </p>
            </div>
          </div>

          <h2>Fonts</h2>
          <p>For our logo and related media content, we use these fonts:</p>
          <ul>
            <li>
              <strong>Nunito</strong> - For pitch decks and slide intros (google
              slides) for a playful but still professional font. We use
              extrabold for the logo.{" "}
              <a
                href="https://fonts.google.com/specimen/Nunito"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Nunito from Google Fonts
              </a>
            </li>
            <li>
              <strong>Segue UI bold</strong> - We use this as a sans-serif
              backup to Nunito
            </li>
          </ul>

          <h2>Logo Assets</h2>
          <p>
            Below are the logo assets, PNG format with at least 1000 width so it
            can be scaled down to preserve resolution. Right click on the image
            and select "save as image" to download.
          </p>

          <div className="space-y-8 not-prose">
            <div className="bg-navy-light p-6 rounded-lg">
              <img
                src="/images/press/tdevs_blue_1000x1000.png"
                alt="Tampa Devs Blue Logo"
                className="max-w-[200px] mb-4"
              />
              <p className="text-gray-300">
                <strong className="text-white">Blue Square Logo</strong> -
                1000x1000px. Used as our logo standard for thumbnail images for
                Slack, Twitter, LinkedIn, social media, etc.
              </p>
            </div>

            <div className="bg-navy-light p-6 rounded-lg">
              <img
                src="/images/press/tdevs_transparent_1024x1024.png"
                alt="Tampa Devs Transparent Logo"
                className="max-w-[200px] mb-4"
              />
              <p className="text-gray-300">
                <strong className="text-white">Transparent Logo</strong> -
                1024x1024px PNG. Used for marketing slide decks, logo walls, and
                when there's a preferred background color.
              </p>
            </div>

            <div className="bg-navy-light p-6 rounded-lg">
              <img
                src="/images/press/tdevs_squaretext_1800x1800.png"
                alt="Tampa Devs Square Logo with Text"
                className="max-w-[200px] mb-4"
              />
              <p className="text-gray-300">
                <strong className="text-white">Square Logo with Text</strong> -
                1800x1800px. Used in marketing material where the logo is not
                entirely known to the audience.
              </p>
            </div>

            <div className="bg-navy-light p-6 rounded-lg">
              <img
                src="/images/press/tdevs_long_5000x1000.png"
                alt="Tampa Devs Wide Banner"
                className="w-full mb-4"
              />
              <p className="text-gray-300">
                <strong className="text-white">Wide Banner</strong> -
                5000x1000px. Used as a header on top of thumbnail images,
                LinkedIn portfolio banner, YouTube banner header, etc.
              </p>
            </div>
          </div>

          <p className="mt-8">
            If you need an SVG version of the transparent logo, it can be found{" "}
            <a
              href="/images/press/tdevs_transparent_svg.svg"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>

          <p>
            If you need any help, please contact us at{" "}
            <a href="mailto:press@tampadevs.com">press@tampadevs.com</a>
          </p>

          <h2>BayHacks Hackathon</h2>
          <p>
            If you are looking for the BayHacks hackathon logo, we have them
            provided here as well:
          </p>
          <ul>
            <li>
              <a
                href="/images/press/bayhacks_v10_final_6color_print_850x1000px.png"
                target="_blank"
              >
                PNG transparent format (850px x 1000px)
              </a>
            </li>
            <li>
              <a
                href="/images/press/bayhacks_v10_final_6color_print.svg"
                target="_blank"
              >
                SVG format
              </a>
            </li>
            <li>
              Website:{" "}
              <a
                href="https://bayhacks.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                bayhacks.dev
              </a>
            </li>
          </ul>

          <div className="bg-navy-light p-6 rounded-lg not-prose">
            <img
              src="/images/press/bayhacks_v10_final_6color_print_850x1000px.png"
              alt="BayHacks Logo"
              className="max-w-[300px]"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
