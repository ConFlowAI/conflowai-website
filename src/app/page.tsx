import Image from "next/image";
import { SiteNav } from "@/components/site-nav";
import { RippleLogo } from "@/components/ripple-logo";

const CALENDLY_URL = "https://calendly.com/p-bisadi/15min";
const EMAIL = "pbisadi@conflowai.com";

const metricPoints = [
  {
    title: "Data-driven insights",
    body: "Surface patterns across sessions to improve therapeutic interventions and outcomes.",
  },
  {
    title: "Quantified observation",
    body: "Transform qualitative observations into quantifiable data to increase assessment precision.",
  },
  {
    title: "Personalized therapy",
    body: "Enable individualized care through detailed, per-client metric analysis.",
  },
  {
    title: "Effortless progress tracking",
    body: "Streamline long-term tracking with automated data collection and organization.",
  },
  {
    title: "Human-centric by design",
    body: "AI serves as a supportive tool — never a replacement for the therapist-client relationship.",
  },
];

const contentItems = [
  {
    title: "Personalized books",
    body: "Stories and learning material shaped around each individual's interests, strengths, and developmental goals.",
  },
  {
    title: "Tailored tutorials",
    body: "Step-by-step guidance generated to match how a specific learner engages and progresses best.",
  },
  {
    title: "Adaptive content",
    body: "Material that evolves with the individual as their needs and abilities grow over time.",
  },
];

export default function Home() {
  return (
    <>
      <span id="top" />
      <SiteNav />

      <main className="flex-1">
        {/* Hero — dark "flow" waves with the animated ripple lockup */}
        <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-navy">
          <Image
            src="/hero-ripple.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/55 via-black/30 to-violet-900/60" />

          <div className="relative mx-auto w-full max-w-5xl px-5 py-24 text-center">
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <RippleLogo className="h-36 w-36 text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.45)] sm:h-44 sm:w-44" />
              <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-[0.12em] text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.25)] sm:text-left sm:text-5xl">
                Conscious
                <br />
                Flow
                <br />
                AI
              </h1>
            </div>

            <p className="mx-auto mt-9 max-w-2xl text-lg text-teal-50/90 sm:text-xl">
              Technology that supports the developmental journey of neurodivergent
              individuals — turning everyday therapeutic moments into meaningful data
              and deeply personalized content.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-violet-500 px-7 py-3 text-base font-semibold text-white shadow-lg transition-colors hover:bg-violet-600"
              >
                Book a 15-min call
              </a>
              <a
                href="#mission"
                className="rounded-full border border-white/40 px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Learn more
              </a>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section id="mission" className="scroll-mt-20 bg-surface py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
              Our mission
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
              Technology in service of people
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Conscious Flow AI uses technology to improve the developmental journey
              of neurodivergent individuals. Our research and development spans two
              connected directions: capturing rich, objective metrics from play
              therapy sessions, and generating deeply personalized content like books
              and tutorials. Throughout, technology stays in service of people.
            </p>
          </div>
        </section>

        {/* Therapy metrics */}
        <section id="metrics" className="scroll-mt-20 bg-surface-soft py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
                R&amp;D · Play therapy
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
                Metrics that make therapy measurable
              </h2>
              <p className="mt-4 text-lg text-muted">
                We collect and analyze metrics during play therapy sessions, turning
                what was once subjective into clear, trackable signal.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {metricPoints.map((point) => (
                <div
                  key={point.title}
                  className="rounded-2xl border border-teal-100 bg-surface p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-4 h-1 w-10 rounded-full bg-violet-500" />
                  <h3 className="font-display text-lg font-semibold text-teal-700">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-muted">{point.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Personalized content */}
        <section id="content" className="scroll-mt-20 bg-surface py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
                R&amp;D · Content generation
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
                Content built around the individual
              </h2>
              <p className="mt-4 text-lg text-muted">
                Generative tools that create personalized books and tutorials, meeting
                each learner exactly where they are.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {contentItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-gradient-to-br from-teal-50 to-surface-soft p-7 ring-1 ring-teal-100"
                >
                  <h3 className="font-display text-xl font-semibold text-teal-700">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach — human-centric, with the connection photo */}
        <section id="approach" className="scroll-mt-20 bg-surface-soft py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
                Our approach
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
                A human-centric approach
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                We believe AI should amplify human connection, not replace it. Our
                tools are designed to support therapists, families, and individuals —
                giving them clarity and time, while keeping relationships at the center
                of every developmental journey.
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-teal-100">
              <Image
                src="/connection.webp"
                alt="A colorful robotic hand and a child's hand reaching toward each other"
                width={1536}
                height={1024}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Contact / CTA — dark flow closing */}
        <section
          id="contact"
          className="scroll-mt-20 bg-gradient-to-br from-teal-900 via-violet-800 to-violet-900 py-20 text-white sm:py-28"
        >
          <div className="mx-auto max-w-3xl px-5 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-200">
              Get in touch
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Let&apos;s talk
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-teal-50/90">
              Whether you&apos;re a therapist, researcher, or family — we&apos;d love to
              hear how we can support your work. Book a quick call or send us a note.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-violet-500 px-7 py-3 text-base font-semibold text-white shadow-lg transition-colors hover:bg-violet-600"
              >
                Book a 15-min call
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="rounded-full border border-white/40 px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                {EMAIL}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-violet-900 py-8 text-violet-100">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm sm:flex-row">
          <div className="flex items-center gap-2">
            <RippleLogo className="h-6 w-6 text-violet-200" animate={false} />
            <span>© 2026 Conscious Flow AI. All rights reserved.</span>
          </div>
          <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-white">
            {EMAIL}
          </a>
        </div>
      </footer>
    </>
  );
}
