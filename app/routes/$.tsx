import type { Route } from "./+types/$";
import { redirect } from "react-router";

// Legacy URL redirects
const redirects: Record<string, string> = {
  // External service redirects
  "/sponsor": "/partnership",
  "/sponsors": "/partnership",
  "/donate": "https://go.tampa.dev/donate",
  "/jobs": "https://talent.tampa.dev/developers",
  "/store": "https://store.tampa.dev/",
  "/slack": "https://go.tampa.dev/slack",
  "/meetup": "/events",
  "/discord": "https://go.tampa.dev/slack",
  "/youtube": "https://www.youtube.com/@TampaDevs",
  "/github": "https://github.com/TampaDevs",
  "/linkedin": "https://www.linkedin.com/company/tampa-devs",
  "/twitter": "https://twitter.com/tampadevs",

  // Short links
  "/speaker": "/speak",
  "/speakers": "/speak",
  "/mentorship": "https://go.tampa.dev/mentorship",
  "/talent": "https://talent.tampa.dev/",
  "/cloud": "https://cloud.tampa.dev/",

  // Legacy blog URLs (without year prefix)
  "/blog/our-first-event": "/blog/2021/our-first-event",
  "/blog/hackathon-road-trip": "/blog/2021/hackathon-road-trip",
  "/blog/our-first-talk": "/blog/2021/our-first-talk",
  "/blog/embarc": "/blog/2021/embarc",
  "/blog/merging-with-reactjs-tampa": "/blog/2022/merging-with-reactjs-tampa",
  "/blog/tampa-devs-story": "/blog/2022/tampa-devs-story",
  "/blog/nonprofit": "/blog/2023/nonprofit",
  "/blog/stats-and-financial-report": "/blog/2023/stats-and-financial-report",
  "/blog/the-public-cloud-project": "/blog/2024/the-public-cloud-project",

  // Legacy talks URLs (without year prefix)
  "/talks/svgs-everything-you-should-know": "/talks/2021/svgs-everything-you-should-know",
  "/talks/intro-to-typescript-shipping-unity": "/talks/2021/intro-to-typescript-shipping-unity",
  "/talks/intro-to-react-and-git": "/talks/2022/intro-to-react-and-git",
  "/talks/intro-to-devops": "/talks/2022/intro-to-devops",
  "/talks/serverless-webhooks": "/talks/2022/serverless-webhooks",
  "/talks/intro-to-iot": "/talks/2022/intro-to-iot",
  "/talks/cybersecurity": "/talks/2022/cybersecurity",
  "/talks/machine-learning": "/talks/2022/machine-learning",
  "/talks/hacking-halo": "/talks/2022/hacking-halo",
  "/talks/data-etl-apache": "/talks/2022/data-etl-apache",
  "/talks/mobile-development": "/talks/2023/mobile-development",
  "/talks/career-forum": "/talks/2023/career-forum",
  "/talks/state-machines": "/talks/2023/state-machines",
};

export async function loader({ params }: Route.LoaderArgs) {
  const path = "/" + (params["*"] || "");

  // Check if this path has a redirect
  const redirectTo = redirects[path.toLowerCase()];

  if (redirectTo) {
    // External redirects
    if (redirectTo.startsWith("http")) {
      return redirect(redirectTo, 301);
    }
    // Internal redirects
    return redirect(redirectTo, 301);
  }

  // No redirect found - return 404
  throw new Response("Not Found", { status: 404 });
}

export default function CatchAll() {
  return (
    <main className="bg-navy min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-8">Page not found</p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-coral text-white font-semibold rounded-lg hover:bg-coral-light transition-all"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
