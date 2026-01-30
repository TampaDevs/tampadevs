import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
} from "react-router";
import type { Route } from "./+types/root";
import { Header, Footer, Logo, Logo3d } from "@tampadevs/react";
import "./app.css";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Events", href: "https://tampa.dev/groups/tampadevs", external: true },
  { label: "Blog", href: "/blog" },
  { label: "Talks", href: "/talks" },
  { label: "Slack", href: "https://go.tampa.dev/slack", external: true },
  { label: "Sponsor", href: "/partnership" },
];

// Social icon SVGs
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const navActions = [
  { label: "", href: "https://github.com/TampaDevs", external: true, icon: <GitHubIcon /> },
  { label: "", href: "https://www.linkedin.com/company/tampa-devs", external: true, icon: <LinkedInIcon /> },
  { label: "", href: "https://twitter.com/tamaborlan", external: true, icon: <TwitterIcon /> },
];

const footerLinkGroups = [
  {
    title: "Community",
    links: [
      { label: "About", href: "/about" },
      { label: "Events", href: "https://tampa.dev/groups/tampadevs", external: true },
      { label: "Slack", href: "https://go.tampa.dev/slack", external: true },
      { label: "Mentorship", href: "https://go.tampa.dev/mentorship", external: true },
    ],
  },
  {
    title: "Content",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Talks", href: "/talks" },
      { label: "Archive", href: "/archive" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Sponsor Us", href: "/partnership" },
      { label: "Volunteer", href: "/volunteer" },
      { label: "Speaker Info", href: "/speak" },
      { label: "Press Kit", href: "/press" },
    ],
  },
];

const footerSocials = [
  { name: "GitHub", href: "https://github.com/tampadevs", icon: "github" as const },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/tampadevs", icon: "linkedin" as const },
  { name: "Twitter", href: "https://twitter.com/tamaborodevs", icon: "twitter" as const },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="alternate" type="application/rss+xml" title="Tampa Devs Blog" href="https://tampadevs.com/feed.xml" />
        <meta name="theme-color" content="#1C2438" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen bg-navy text-white antialiased">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <Header
        links={navLinks}
        actions={navActions}
        logo={<Logo variant="full" size="sm" colorScheme="light" />}
      />
      <Outlet />
      <Footer
        description="Tampa Devs is a nonprofit community for software developers in Tampa Bay. We host workshops and create educational and career opportunities for all backgrounds and experience levels."
        linkGroups={footerLinkGroups}
        socials={footerSocials}
        logo={<Logo variant="full" size="sm" colorScheme="light" />}
      />
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-navy">
      <div className="text-center -mt-16">
        {/* 3D Logo */}
        <div className="-mb-8 flex justify-center">
          <Logo3d
            objUrl="/models/logo.obj"
            mtlUrl="/models/logo.mtl"
            width={400}
            height={400}
            autoRotate
            rotationSpeed={0.008}
            backgroundColor="transparent"
            enablePan
          />
        </div>

        <h1 className="text-7xl font-bold text-coral mb-3">{message}</h1>
        <p className="text-xl text-gray-300 mb-6 max-w-md mx-auto">{details}</p>
        {stack && (
          <pre className="text-left text-sm text-gray-400 bg-navy-light p-4 rounded-lg overflow-auto max-w-2xl mx-auto mb-6">
            {stack}
          </pre>
        )}
        <a
          href="/"
          className="inline-block px-8 py-4 bg-coral text-white font-semibold rounded-lg hover:bg-coral-light transition-colors text-lg"
        >
          Go Home
        </a>
      </div>
    </main>
  );
}
