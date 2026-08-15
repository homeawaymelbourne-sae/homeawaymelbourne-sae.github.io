import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Mail, Phone, Globe, Menu, X, Volume2, VolumeX } from "lucide-react";
import { initSfx } from "@/lib/sfx";

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
  { id: "support", label: "Find support" },
  { id: "animatic", label: "Animatic" },
  { id: "cause", label: "Our cause" },
  { id: "team", label: "Team" },
];

const TEAM = [
  {
    name: "Ava Leppitsch",
    role: "Foley Artist & Mixing Engineer",
    photo: "/Ava%20Leppitsch.JPG",
  },
  { name: "Tra Pham", role: "Animator", photo: "/Tra%20Pham.JPG" },
  {
    name: "Kenula Kandana Arachchi",
    role: "Musician, Music Producer & Website Designer",
    photo: "/Kenula%20Kandana%20Arachchi.JPG",
  },
  {
    name: "Constantine Chavez",
    role: "Musician & Music Producer",
    photo: "/Constantine%20Chavez.JPG",
  },
];

type SupportItem = {
  name: string;
  blurb: string;
  contact: string;
  href: string;
  type: string;
  icon: typeof Globe;
};

type SupportCategory = {
  title: string;
  subtitle: string;
  items: SupportItem[];
};

const SUPPORT: SupportCategory[] = [
  {
    title: "Need help now?",
    subtitle: "Crisis support and mental health services that are there when you need them.",
    items: [
      {
        name: "Lifeline Australia",
        blurb: "24/7 crisis support and suicide prevention. Free to call from anywhere in Australia.",
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
        name: "Salvation Army Melbourne Project 614",
        blurb: "Free meals, counselling, legal help, housing info and a safe space for international students.",
        contact: "salvationarmy.org.au/melbourne614",
        href: "https://www.salvationarmy.org.au/melbourne614/",
        type: "Support service",
        icon: Globe,
      },
    ],
  },
  {
    title: "Study & student support",
    subtitle: "Official services, university help and peer networks for international students.",
    items: [
      {
        name: "Study Melbourne Hub",
        blurb: "Victorian Government support with study spaces, events, workshops and student services.",
        contact: "studymelbourne.vic.gov.au",
        href: "https://studymelbourne.vic.gov.au/our-hub",
        type: "Website",
        icon: Globe,
      },
      {
        name: "SAE Counsellor",
        blurb: "Counselling, peer support and academic care available to every SAE student.",
        contact: "will.nelson@sae.edu.au",
        href: "mailto:will.nelson@sae.edu.au",
        type: "Email",
        icon: Mail,
      },
      {
        name: "SAE Student Events",
        blurb: "Events on campus, through Slack and online — a great way to meet other students.",
        contact: "student.sae.edu.au/events",
        href: "https://student.sae.edu.au/events/",
        type: "Events",
        icon: Globe,
      },
      {
        name: "Council of Intl. Students Australia",
        blurb: "National peer-led body representing and connecting international students.",
        contact: "cisa.edu.au",
        href: "https://www.cisa.edu.au/",
        type: "Community",
        icon: Globe,
      },
    ],
  },
  {
    title: "Make friends & find your people",
    subtitle: "Clubs, meetups and communities where you can meet like-minded people.",
    items: [
      {
        name: "Meetup Melbourne",
        blurb: "65,000+ members. Filter groups and social events by your hobbies and interests.",
        contact: "meetup.com/find/?keywords=Melbourne",
        href: "https://www.meetup.com/find/?source=GROUPS&keywords=Melbourne&distance=twentyFiveMiles",
        type: "Community",
        icon: Globe,
      },
      {
        name: "Neighbourhood Houses",
        blurb: "400+ community organisations across Victoria with affordable classes and social events.",
        contact: "nhvic.org.au",
        href: "https://www.nhvic.org.au/",
        type: "Community",
        icon: Globe,
      },
      {
        name: "Vivu Together",
        blurb: "Vietnamese interclub at Victoria University. Fun events to feel less homesick.",
        contact: "instagram.com/vivu_together",
        href: "https://www.instagram.com/vivu_together?igsh=MjBxMTBjNXN5Zzdz",
        type: "Club",
        icon: Globe,
      },
    ],
  },
  {
    title: "Go out & connect",
    subtitle: "Social spots, gaming nights, music and karaoke to get you out of the house.",
    items: [
      {
        name: "Trivia nights",
        blurb: "Pub trivia in groups — try the Trivia & Taco night at Moon Dog Wild West, Footscray.",
        contact: "moondog.com.au/wild-west",
        href: "https://moondog.com.au/wild-west",
        type: "Night out",
        icon: Globe,
      },
      {
        name: "Fortress Melbourne",
        blurb: "Gaming and pop-culture events: games nights, trivia, DJ nights and cosplay parties.",
        contact: "fortress.games/events-melbourne",
        href: "https://fortress.games/events-melbourne",
        type: "Gaming",
        icon: Globe,
      },
      {
        name: "O3",
        blurb: "Study cafe with a vintage Ghibli vibe. Book, film and boardgame clubs via their app.",
        contact: "o3space.org",
        href: "https://o3space.org/",
        type: "Cafe & clubs",
        icon: Globe,
      },
      {
        name: "Jankara Karaoke Bar",
        blurb: "Open-mic Japanese karaoke. Buy drinks, get song tickets, sing with new friends.",
        contact: "jankara.com.au",
        href: "https://jankara.com.au/",
        type: "Night out",
        icon: Globe,
      },
      {
        name: "Last Chance",
        blurb: "Bar with local alternative bands. A welcoming community for rock, metal, emo and indie fans.",
        contact: "facebook.com/thelastchancerockandrollbar",
        href: "https://www.facebook.com/thelastchancerockandrollbar/",
        type: "Live music",
        icon: Globe,
      },
      {
        name: "Northcote Social Club",
        blurb: "Bar, food and free movie nights on a projector — a sociable way to watch films.",
        contact: "northcotesocialclub.com",
        href: "https://northcotesocialclub.com/",
        type: "Night out",
        icon: Globe,
      },
    ],
  },
];

function Index() {
  useEffect(() => initSfx(), []);

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
        <Support />
        <Animatic />
        <Cause />
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
    const onScroll = () => setScrolled(window.scrollY > 60);
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
          className={`flex w-full items-center justify-between gap-6 rounded-full px-4 py-2 transition-all duration-500 sm:px-5 ${
            scrolled
              ? "border border-border/60 bg-background/75 backdrop-blur-xl shadow-[0_10px_40px_-20px_rgba(80,40,20,0.25)]"
              : "border border-transparent bg-transparent shadow-none"
          }`}
        >
          <a
            href="#home"
            className="flex items-center"
            data-sfx="e"
            aria-label="Home Away From Home — back to top"
          >
            <img
              src="/HAHF_WHITE.png?v=2"
              alt="Home Away From Home"
              className={`h-7 w-auto transition-all duration-500 sm:h-8 ${
                scrolled
                  ? "brightness-0 saturate-0 opacity-90"
                  : "drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]"
              }`}
            />
          </a>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1 text-sm">
              {NAV.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    data-sfx="e"
                    className={`rounded-full px-3 py-1.5 transition-colors ${
                      scrolled
                        ? "text-muted-foreground hover:bg-secondary hover:text-foreground"
                        : "text-white/85 hover:bg-white/15 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <AmbientAudio />
            <a
              href="#animatic"
              data-sfx="g"
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              Watch the animatic
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <AmbientAudio />
            <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            data-sfx="e"
            className={`inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
              scrolled ? "text-foreground" : "text-white"
            }`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
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
                    data-sfx="e"
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
  return HeroImpl();
}

function AmbientAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.35);
  const [showVolume, setShowVolume] = useState(false);

  useEffect(() => {
    const el = new Audio("/audio/ambient.mp3");
    el.loop = true;
    el.volume = 0.35;
    el.preload = "auto";
    const onEnded = () => {
      el.currentTime = 0;
      void el.play();
    };
    el.addEventListener("ended", onEnded);
    audioRef.current = el;

    // Try to start unmuted right away; browsers may block it until the first
    // user gesture, so fall back to starting on the first interaction.
    const start = () => {
      el
        .play()
        .then(() => {
          setPlaying(true);
          removeGestureListeners();
        })
        .catch(() => {});
    };
    const onGesture = () => start();
    const gestures = ["pointerdown", "keydown", "wheel", "touchstart", "scroll"] as const;
    const removeGestureListeners = () => {
      gestures.forEach((g) => window.removeEventListener(g, onGesture));
    };
    gestures.forEach((g) => window.addEventListener(g, onGesture, { passive: true, once: false }));
    start();

    return () => {
      el.pause();
      el.removeEventListener("ended", onEnded);
      removeGestureListeners();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const toggle = async () => {
    const el = audioRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
    } else {
      try {
        await el.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    }
  };

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setShowVolume(true)}
      onMouseLeave={() => setShowVolume(false)}
    >
      <button
        type="button"
        onClick={toggle}
        onFocus={() => setShowVolume(true)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/60 text-foreground transition-colors hover:bg-secondary"
        aria-label={playing ? "Mute ambient music" : "Play ambient music"}
        title={playing ? "Mute ambient music" : "Play ambient music"}
      >
        {playing ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          showVolume ? "ml-2 w-24 opacity-100" : "ml-0 w-0 opacity-0"
        }`}
      >
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => {
            const v = Number(e.target.value);
            setVolume(v);
            if (v > 0 && !playing) void toggle();
          }}
          aria-label="Ambient music volume"
          className="h-1 w-24 cursor-pointer appearance-none rounded-full bg-border accent-accent"
        />
      </div>
    </div>
  );
}

function HeroImpl() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-black pt-28"
    >
      {/* Parallax + zoom-in background.
          Drop your image at: public/hero-background.jpg
          (any name works — just update the url() below to match). */}
      <div
        aria-hidden="true"
        className="hero-zoom pointer-events-none absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-background.jpg')",
          transform: `translate3d(0, ${scrollY * 0.35}px, 0)`,
        }}
      />
      {/* Fallback gradient wash + readability overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,#DE888D_0%,#C17644_50%,#E9D820_100%)] opacity-[var(--bg-fallback-opacity,0.35)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60"
      />

      <div className="relative mx-auto w-full max-w-5xl px-6 text-center text-white">
        <p
          className="reveal text-xs uppercase tracking-[0.3em] text-white/80"
          style={{ animationDelay: "1.2s" }}
        >
          An animatic by SAE University College, Melbourne
        </p>

        <h1 className="reveal-slow mt-6" style={{ animationDelay: "1.5s" }}>
          <img
            src="/HAHF_WHITE.png?v=2"
            alt="Home Away From Home"
            className="mx-auto w-full max-w-[22rem] drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] sm:max-w-[32rem] md:max-w-[40rem]"
          />
        </h1>

        <p
          className="reveal mx-auto mt-8 max-w-xl text-balance text-base text-white/85 sm:text-lg"
          style={{ animationDelay: "2s" }}
        >
          A story about international students arriving in Melbourne — the loneliness no one warns
          you about, and the quiet ways we find each other again.
        </p>

        <div
          className="reveal mt-10 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "2.3s" }}
        >
          <a
            href="#animatic"
            data-sfx="g"
            className="inline-flex items-center gap-2 rounded-full bg-[#C17644] px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
          >
            Watch the animatic
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#cause"
            data-sfx="g-nm"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/20"
          >
            Why we made this
          </a>
        </div>

        <p
          className="reveal mt-8 text-xs uppercase tracking-[0.3em] text-white/70"
          style={{ animationDelay: "2.9s" }}
        >
          Click anywhere to listen to audio!
        </p>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-white/60"
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
        <div className="group relative aspect-video w-full overflow-hidden rounded-3xl border border-border bg-black shadow-[0_30px_80px_-40px_rgba(193,118,68,0.45)]">
          {/* Placeholder for upcoming YouTube embed */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(193,118,68,0.55),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(222,136,141,0.4),transparent_60%)]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center text-white">
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

      <div className="mt-14 space-y-16">
        {SUPPORT.map((category) => (
          <div key={category.title}>
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <h3 className="font-display text-2xl text-foreground sm:text-3xl">{category.title}</h3>
              <p className="max-w-md text-sm text-muted-foreground">{category.subtitle}</p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map(({ name, blurb, contact, href, type, icon: Icon }) => (
                <li key={name}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                    data-sfx="c"
                    className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_50px_-25px_rgba(193,118,68,0.35)]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-[11px] uppercase tracking-wider text-secondary-foreground">
                        <Icon className="h-3 w-3" aria-hidden="true" />
                        {type}
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                        aria-hidden="true"
                      />
                    </div>
                    <h4 className="mt-5 font-display text-xl text-foreground">{name}</h4>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{blurb}</p>
                    <p className="mt-5 text-sm font-medium text-accent">{contact}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
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
            className="group rounded-3xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_rgba(193,118,68,0.35)]"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#DE888D_0%,#C17644_60%,#E9D820_100%)]">
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.55),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(113,139,149,0.35),transparent_60%)]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center font-display text-5xl text-white/80">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                </>
              )}
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
    <section className="relative overflow-hidden border-t border-border bg-black py-32 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(193,118,68,0.5),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(222,136,141,0.3),transparent_60%)]"
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">A note from us</p>
        <p className="mt-8 font-display text-4xl leading-tight sm:text-6xl">
          You're not alone —
          <br />
          <span className="italic text-[#E9D820]">
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
