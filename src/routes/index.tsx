import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, Mail, Phone, Globe, Menu, X } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home Away From Home — A campaign for international students in Melbourne" },
      {
        name: "description",
        content:
          "An animatic and campaign exploring how international students in Melbourne combat isolation and find community.",
      },
      { property: "og:title", content: "Home Away From Home" },
      {
        property: "og:description",
        content:
          "An animatic and campaign exploring how international students in Melbourne combat isolation and find community.",
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "animatic", label: "Animatic" },
  { id: "cause", label: "Our cause" },
  { id: "support", label: "Find support" },
  { id: "team", label: "Team" },
];

const TEAM = [
  { name: "Ava Leppitsch", role: "Foley Artist & Mixing Engineer" },
  { name: "Tra Pham", role: "Animator" },
  { name: "Kenula Kandana Arachchi", role: "Musician, Music Producer & Website Designer" },
  { name: "Constantine Chavez", role: "Musician & Music Producer" },
];

const SUPPORT = [
  {
    name: "Study Melbourne Hub",
    blurb:
      "Free in-person and online support for international students — wellbeing, study, work and life in Victoria.",
    contact: "studymelbourne.vic.gov.au",
    href: "https://www.studymelbourne.vic.gov.au/",
    type: "Website",
    icon: Globe,
  },
  {
    name: "Lifeline Australia",
    blurb: "24/7 crisis support and suicide prevention services, free to call from anywhere in Australia.",
    contact: "13 11 14",
    href: "tel:131114",
    type: "Crisis line",
    icon: Phone,
  },
  {
    name: "Beyond Blue",
    blurb: "Free, confidential mental health support for anxiety, depression and homesickness.",
    contact: "1300 22 4636",
    href: "tel:1300224636",
    type: "Helpline",
    icon: Phone,
  },
  {
    name: "headspace",
    blurb: "Mental health support for young people aged 12–25, including international students.",
    contact: "headspace.org.au",
    href: "https://headspace.org.au/",
    type: "Website",
    icon: Globe,
  },
  {
    name: "SAE Student Wellbeing",
    blurb: "Counselling, peer support and academic care available to every SAE student.",
    contact: "wellbeing@sae.edu.au",
    href: "mailto:wellbeing@sae.edu.au",
    type: "Email",
    icon: Mail,
  },
  {
    name: "Council of Intl. Students Australia",
    blurb: "Peer-led national body representing and connecting international students.",
    contact: "cisa.edu.au",
    href: "https://www.cisa.edu.au/",
    type: "Community",
    icon: Globe,
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Animatic />
        <Cause />
        <Support />
        <Team />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        <div
          className={`flex w-full items-center justify-between gap-6 rounded-full border border-border/60 bg-background/70 px-4 py-2 backdrop-blur-xl transition-shadow duration-500 sm:px-5 ${
            scrolled ? "shadow-[0_10px_40px_-20px_rgba(80,40,20,0.25)]" : "shadow-none"
          }`}
        >
          <a
            href="#home"
            className="font-display text-base font-semibold tracking-[0.18em] text-primary"
            aria-label="Home Away From Home — back to top"
          >
            HAHF
          </a>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1 text-sm">
              {NAV.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#animatic"
            className="hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02] md:inline-flex"
          >
            Watch the animatic
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="mx-auto mt-2 max-w-6xl px-4 md:hidden sm:px-6"
        >
          <nav
            aria-label="Mobile primary"
            className="rounded-3xl border border-border/60 bg-background/95 p-3 backdrop-blur-xl"
          >
            <ul className="flex flex-col">
              {NAV.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-base text-foreground hover:bg-secondary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-gradient-to-b from-[oklch(0.97_0.018_75)] via-background to-background pt-28"
    >
      {/* Soft ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.85_0.08_55_/_0.55),transparent_70%)] blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-5xl px-6 text-center">
        <p className="reveal text-xs uppercase tracking-[0.3em] text-muted-foreground">
          An animatic by SAE University College, Melbourne
        </p>

        <h1 className="reveal-slow mt-6 font-display text-5xl leading-[0.95] sm:text-7xl md:text-[6.5rem]">
          Home Away
          <br />
          <span className="italic text-primary">From Home</span>
        </h1>

        <p
          className="reveal mx-auto mt-8 max-w-xl text-balance text-base text-muted-foreground sm:text-lg"
          style={{ animationDelay: "0.4s" }}
        >
          A story about international students arriving in Melbourne — the loneliness no one warns
          you about, and the quiet ways we find each other again.
        </p>

        <div
          className="reveal mt-10 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="#animatic"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            Watch the animatic
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#cause"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-6 py-3 text-sm font-medium text-foreground backdrop-blur hover:bg-secondary"
          >
            Why we made this
          </a>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground/70"
      >
        Scroll
      </div>
    </section>
  );
}

function Animatic() {
  return (
    <Section id="animatic" eyebrow="The Animatic" title="A short film, in pictures.">
      <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
        Our animatic is still in production. The video will live here — for now, this is the frame
        we're holding for it.
      </p>

      <div className="mt-12">
        <div className="group relative aspect-video w-full overflow-hidden rounded-3xl border border-border bg-[oklch(0.18_0.02_50)] shadow-[0_30px_80px_-40px_rgba(80,40,20,0.45)]">
          {/* Placeholder for upcoming YouTube embed */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(0.4_0.08_45_/_0.6),transparent_60%),radial-gradient(circle_at_70%_70%,oklch(0.3_0.06_30_/_0.5),transparent_60%)]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center text-[oklch(0.92_0.01_80)]">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur transition-transform group-hover:scale-110">
              <div className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-white/90" />
            </div>
            <p className="font-display text-xl">Animatic coming soon</p>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              YouTube embed placeholder
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Cause() {
  return (
    <Section id="cause" eyebrow="Our cause" title="Why we made this.">
      <div className="mt-10 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="font-display text-3xl leading-tight text-foreground sm:text-4xl">
            “How can we best support international students moving to Melbourne in combating
            isolation and finding community?”
          </p>
          <p className="mt-6 text-muted-foreground">
            More than 200,000 international students choose Melbourne every year. Behind the
            postcards and orientation week photos, many describe the same quiet experience:
            culture shock, language anxiety, homesickness, and the strange loneliness of being
            surrounded by people you don't yet know.
          </p>
          <p className="mt-4 text-muted-foreground">
            We spoke with peers, read studies from Study Melbourne and Orygen, and listened to
            stories from across our own classrooms. The animatic distills what we heard — not as
            a problem to solve, but as a feeling to recognise.
          </p>
        </div>

        <aside className="md:col-span-5">
          <div className="rounded-3xl border border-border bg-card p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              From our research
            </p>
            <dl className="mt-6 space-y-6">
              {[
                { k: "1 in 3", v: "international students report severe loneliness in their first year." },
                { k: "65%", v: "say making local friends is the hardest part of moving abroad." },
                { k: "200k+", v: "international students study in Victoria each year." },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="font-display text-4xl text-primary">{s.k}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-[11px] text-muted-foreground/80">
              Figures are placeholders pending final citations from Study Melbourne and Orygen.
            </p>
          </div>
        </aside>
      </div>
    </Section>
  );
}

function Support() {
  return (
    <Section
      id="support"
      eyebrow="Find support"
      title="You don't have to figure this out alone."
    >
      <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
        Real communities, services and helplines in Melbourne and across Australia. Save one. Send
        one to a friend.
      </p>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SUPPORT.map(({ name, blurb, contact, href, type, icon: Icon }) => (
          <li key={name}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
              className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_50px_-25px_rgba(80,40,20,0.35)]"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-[11px] uppercase tracking-wider text-secondary-foreground">
                  <Icon className="h-3 w-3" aria-hidden="true" />
                  {type}
                </span>
                <ArrowUpRight
                  className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-5 font-display text-xl text-foreground">{name}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{blurb}</p>
              <p className="mt-5 text-sm font-medium text-primary">{contact}</p>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Team() {
  return (
    <Section id="team" eyebrow="The team" title="Four students. One question.">
      <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
        We're a small team from SAE University College, Melbourne — audio engineers, animators,
        designers, music producers and storytellers who, between us, have moved here from a few
        different homes.
      </p>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((member) => (
          <li
            key={member.name}
            className="group rounded-3xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_rgba(80,40,20,0.35)]"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[oklch(0.9_0.03_70)]">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,oklch(0.95_0.04_70),transparent_60%),radial-gradient(circle_at_70%_80%,oklch(0.78_0.08_45_/_0.6),transparent_60%)]"
              />
              <div className="absolute inset-0 flex items-center justify-center font-display text-5xl text-foreground/30">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>
            </div>
            <h3 className="mt-5 font-display text-lg leading-tight text-foreground">
              {member.name}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
        SAE University College · Melbourne
      </p>
    </Section>
  );
}

function Closing() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-[oklch(0.18_0.02_50)] py-32 text-[oklch(0.95_0.01_80)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,oklch(0.55_0.14_38_/_0.35),transparent_60%)]"
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">A note from us</p>
        <p className="mt-8 font-display text-4xl leading-tight sm:text-6xl">
          You're not alone —
          <br />
          <span className="italic text-[oklch(0.82_0.1_55)]">
            even when you're home away from home.
          </span>
        </p>
        <p className="mx-auto mt-8 max-w-xl text-white/70">
          If this story sounds like yours, or someone you love, reach out to one of the services
          above. Send the link. Sit with it. We made this so you'd know we made it for you.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Home Away From Home — SAE University College, Melbourne.</p>
        <a href="#home" className="hover:text-foreground">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border/60 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
            {title}
          </h2>
        </header>
        {children}
      </div>
    </section>
  );
}
