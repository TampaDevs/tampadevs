import type { Route } from "./+types/speak";
import { generateMetaTags } from "~/lib/seo";
import { generateBreadcrumbSchema } from "~/lib/structured-data";
import { StructuredData } from "~/components/StructuredData";
import { Link } from "react-router";

export const meta: Route.MetaFunction = () => {
  return generateMetaTags({
    title: "Speak at Tampa Devs - Give a Tech Talk in Tampa Bay",
    description:
      "Give a tech talk at Tampa Bay's largest developer meetup. Tampa Devs provides professional video production, photography, and a blog feature for every speaker.",
    url: "https://tampadevs.com/speak",
  });
};

// Icons as components
const MicrophoneIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>
);

const RocketIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
);

const AcademicCapIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
  </svg>
);

const VideoIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const CameraIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function Speaker() {
  const benefits = [
    {
      icon: <RocketIcon />,
      title: "Boost Your Career",
      description: "Speakers are sought after by companies. Giving a talk helps you get higher pay and be recognized as an expert in your field.",
    },
    {
      icon: <MicrophoneIcon />,
      title: "Improve Public Speaking",
      description: "Practice and refine your presentation skills in a supportive environment with a friendly, engaged audience.",
    },
    {
      icon: <AcademicCapIcon />,
      title: "Learn Something New",
      description: "Teaching is the best way to learn. Use your talk as an excuse to dive deep into a topic you're curious about.",
    },
  ];

  const weProvide = [
    {
      icon: <VideoIcon />,
      text: "Professional video recording uploaded to our YouTube channel with full editing",
    },
    {
      icon: <DocumentIcon />,
      text: "A blog post entry you can reference on your resume and LinkedIn",
    },
    {
      icon: <CameraIcon />,
      text: "Professional photography shots for your social media profiles",
    },
  ];

  const topics = [
    "React & Frontend",
    "DevOps & Cloud",
    "TypeScript",
    "Game Development",
    "IoT & Hardware",
    "Machine Learning",
    "Mobile Development",
    "Security",
    "UX Design",
    "Entrepreneurship",
    "Career Growth",
    "And more...",
  ];

  return (
    <>
      <StructuredData
        data={generateBreadcrumbSchema([
          { name: "Home", url: "https://tampadevs.com" },
          { name: "Speak", url: "https://tampadevs.com/speak" },
        ])}
      />
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
              <span className="w-2 h-2 bg-coral rounded-full animate-pulse" />
              <span className="text-coral text-sm font-medium">Now accepting speaker submissions</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Share Your Knowledge with{" "}
              <span className="text-coral">Tampa Bay's</span> Developer Community
            </h1>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join our roster of amazing speakers and inspire hundreds of developers.
              We handle the production — you bring the expertise.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://go.tampa.dev/speak"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-coral text-white font-semibold rounded-xl hover:bg-coral-light transition-all shadow-lg shadow-coral/25 hover:shadow-xl hover:shadow-coral/30 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Submit Your Talk
              </a>
              <a
                href="mailto:speakers@tampadevs.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
            </div>

            {/* Social proof */}
            <p className="mt-8 text-gray-400 text-sm">
              Check out our{" "}
              <Link to="/talks" className="text-coral hover:text-coral-light underline underline-offset-2">
                past talks
              </Link>{" "}
              to see what others have presented
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-navy-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Speak at Tampa Devs?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Speaking at Tampa Devs isn't just about sharing knowledge — it's about growing your career and building your personal brand.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-navy p-8 rounded-2xl border border-white/5 hover:border-coral/20 transition-all group"
              >
                <div className="w-14 h-14 bg-coral/10 rounded-xl flex items-center justify-center text-coral mb-6 group-hover:bg-coral/20 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Provide Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  We Handle the Production
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  You focus on delivering a great talk — we take care of everything else.
                  Our team provides full production support to make you look your best.
                </p>

                <div className="space-y-5">
                  {weProvide.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center text-coral flex-shrink-0">
                        {item.icon}
                      </div>
                      <p className="text-gray-300 pt-2">{item.text}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-gray-400 text-sm bg-navy-light p-4 rounded-lg border border-white/5">
                  Speakers are also welcome to do intro talks at upcoming meetups!
                </p>
              </div>

              {/* Visual element */}
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-coral/20 to-transparent rounded-3xl p-1">
                  <div className="w-full h-full bg-navy-light rounded-[22px] flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/about/tampa-dev-edited-117.jpg"
                      alt="Speaker at Tampa Devs event"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-navy border border-white/10 rounded-xl px-5 py-3 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-coral/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-coral" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Uploaded to YouTube</p>
                      <p className="text-gray-400 text-xs">With full editing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-20 bg-navy-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Topics We Love
            </h2>
            <p className="text-gray-400 mb-10">
              Anything a software developer might want to know! Here are some ideas, but we're always open to new topics.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {topics.map((topic, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-navy rounded-full text-gray-300 text-sm border border-white/10 hover:border-coral/30 hover:text-white transition-colors"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-coral/20 via-coral/10 to-transparent rounded-3xl p-1">
              <div className="bg-navy rounded-[22px] p-10 md:p-14 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Share Your Story?
                </h2>
                <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
                  We'd love to host your talk! Submit your idea or reach out to discuss potential topics.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://go.tampa.dev/speak"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-coral text-white font-semibold rounded-xl hover:bg-coral-light transition-all"
                  >
                    Submit on Sessionize
                  </a>
                  <a
                    href="mailto:speakers@tampadevs.com"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy-light text-white font-semibold rounded-xl hover:bg-navy-light/80 transition-all border border-white/10"
                  >
                    speakers@tampadevs.com
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
