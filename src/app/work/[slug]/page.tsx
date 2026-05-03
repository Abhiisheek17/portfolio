import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

// ─── TYPES ────────────────────────────────────────────────────────────────────

type Project = {
  title: string;
  description: string;
  overview: string;
  liveUrl?: string;
  meta: { role: string; duration: string; status: string; deliverables: string };
  problem: { label: string; detail: string }[];
  goals: string[];
  process: { step: string; detail: string }[];
  escrow?: { label: string; detail: string }[];
  concepts?: { label: string; detail: string }[];
  identity?: { colorName: string; colorHex: string; colorDesc: string; fontName: string; fontDesc: string };
  challenges: { title: string; detail: string }[];
  screens: { src: string; alt: string; caption?: string }[];
  learnings: { title: string; detail: string }[];
  outcome: string;
  heroImage: string;
};

// ─── DATA ─────────────────────────────────────────────────────────────────────

const projects: Record<string, Project> = {

  sodalive: {
    title: "SodaLive App",
    description: "Designing a safer, fairer live streaming experience for users and creators.",
    overview:
      "Creating a platform that builds trust and value by tackling scams and unfair creator payments through an innovative escrow system.",
    meta: {
      role: "Product Designer",
      duration: "8 months",
      status: "In Development",
      deliverables: "Design System, App UX/UI",
    },
    problem: [
      { label: "User Trust is Broken", detail: "Scams are common, users lose money, and conversations feel transactional." },
      { label: "Creators are Underpaid", detail: "Platforms take high commissions (40–60%) leaving creators with little control." },
    ],
    goals: [
      "Reduce scams and build trust for users.",
      "Create a fair earning system for creators.",
      "Improve real-time interaction quality.",
      "Establish a clear product identity.",
    ],
    process: [
      { step: "1. Audit", detail: "Identified inconsistencies across existing layouts." },
      { step: "2. System", detail: "Introduced scalable component patterns." },
      { step: "3. Flow", detail: "Redesigned end-to-end user journeys." },
    ],
    escrow: [
      { label: "User Pays", detail: "Money goes to secure escrow." },
      { label: "Creator Performs", detail: "Service or content delivered." },
      { label: "Payment Released", detail: "Automatic based on delivery." },
    ],
    challenges: [
      { title: "No Design Foundation", detail: "Took over from developers designing screens with no consistency, requiring a complete structural reset." },
      { title: "Cross-Platform Complexity", detail: "Needed the design system to work seamlessly across both Android & iOS guidelines." },
      { title: "Interaction Design", detail: "Complex live engagement flows, low-latency interactions, and integrating the escrow payment logic smoothly." },
      { title: "Market Identity", detail: 'Avoiding building a "clone product" by creating strong differentiation in a saturated market.' },
    ],
    screens: [
      { src: "/images/sodalive/desktop1.webp", alt: "Screen 1" },
      { src: "/images/sodalive/desktop2.webp", alt: "Screen 2" },
      { src: "/images/sodalive/desktop3.webp", alt: "Screen 3" },
      { src: "/images/sodalive/desktop4.webp", alt: "Screen 4" },
    ],
    learnings: [
      { title: "Systems Thinking", detail: "Built understanding of Material Design systems and how to structure scalable design systems from scratch." },
      { title: "Product Thinking", detail: "Improved decision-making and strategic thinking about user needs vs business goals." },
      { title: "Cross-Functional Work", detail: "Learned how to communicate effectively with developers and define clear design tokens." },
      { title: "Stakeholder Communication", detail: "Enhanced weekly presentation skills and ability to articulate design decisions." },
    ],
    outcome:
      "Established a strong product foundation with improved trust mechanics and clearer monetization flows, positioning the platform as a differentiated alternative in a saturated market.",
    heroImage: "/images/sodalive/hero.webp",
  },

  manova: {
    title: "Manova.life",
    description: "Helping corporate employees track, understand, and improve their mental well-being.",
    overview:
      "Inspired by a close connection's struggle with burnout, Manova.life was created to prevent others from facing the same struggle through early intervention and tracking.",
    liveUrl: "https://www.manova.life/",
    meta: {
      role: "Product Designer",
      duration: "4 weeks",
      status: "Live (Early Stage)",
      deliverables: "UX Flows, UI System",
    },
    problem: [
      { label: "Unnoticed", detail: "People don't realize they're struggling until it's too late." },
      { label: "Untracked", detail: "No consistent way to measure mental state over time." },
      { label: "Unaddressed Early", detail: "Support comes too late, leading to burnout." },
    ],
    goals: [
      "Help users self-identify mental health issues early.",
      "Provide structured, non-overwhelming tracking over time.",
      "Encourage consistent engagement through simplicity.",
    ],
    process: [
      { step: "Calm & Minimal UI", detail: "Soft interface designed to reduce cognitive load." },
      { step: "Structured Flow", detail: "Clear step-by-step assessments for self-reflection." },
      { step: "Mental Tracking", detail: "Periodic checks that show progress over time." },
    ],
    challenges: [
      { title: "Sensitive Domain", detail: "Mental health requires emotional awareness and simplicity, not just visual aesthetics." },
      { title: "Iteration Overload", detail: "Bridging the founder's mental health expertise with standard UX practices." },
      { title: "Interaction Complexity", detail: "Balancing progressive disclosure with sensitive, clear messaging." },
    ],
    screens: [
      { src: "/images/manova/desktop1.webp", alt: "Main Dashboard UI", caption: "Dashboard" },
      { src: "/images/manova/desktop2.webp", alt: "Mood Checking UI", caption: "Mood Check" },
    ],
    learnings: [
      { title: "Real-World Client Handling", detail: "Learned to navigate stakeholder opinions and find workable compromises." },
      { title: "Emotional Awareness in Design", detail: "Understood how to design interactions that feel safe and non-threatening." },
      { title: "Simplicity Under Stress", detail: "Proved that reducing friction is especially critical in sensitive user contexts." },
    ],
    outcome:
      "Delivered a fully responsive web application currently in its early funding and live stages. The platform successfully provides a safe, calming environment for corporate users to track their well-being metrics over time.",
    heroImage: "/images/manova/hero.webp",
  },

  podcraft: {
    title: "PodCraft Labs Website",
    description: "B2B website designed to showcase product capabilities, projects, and build trust with potential clients.",
    overview:
      "PodCraft Labs needed a platform to establish their presence and credibility in the B2B space, showcasing their real-world projects and development capabilities.",
    liveUrl: "https://www.podcraftlabs.com/",
    meta: {
      role: "Web Designer",
      duration: "2 weeks",
      status: "Live",
      deliverables: "UI Design, Layout Structure",
    },
    problem: [
      { label: "No Credibility", detail: "Lack of a structured digital presence to build trust with potential clients." },
      { label: "Unclear Communication", detail: "Difficulty explaining what they build and their capabilities." },
      { label: "Missing Proof", detail: "No dedicated space to showcase successful projects like Soda Live." },
    ],
    goals: [
      "Design a website that positions the company as a credible B2B partner.",
      "Highlight real projects as undeniable proof of work.",
      "Create a modern, structured, and highly professional aesthetic.",
    ],
    process: [
      { step: "Content Hierarchy", detail: "Clear sections organized for quick B2B scanning — What we do, Projects, Team." },
      { step: "Project Showcase", detail: "Strategic presentation of work as proof, not decoration." },
      { step: "Scalable Layout", detail: "Future-proof component design, adaptive across all screen sizes." },
    ],
    challenges: [
      { title: "First Web Design Experience", detail: "Transitioning from mobile to web meant learning web spacing conventions and typography scaling on the fly." },
      { title: "Handling Larger Canvas", detail: "Figuring out how to fill the wide canvas without clutter, and reorganizing information hierarchy for a broader view." },
      { title: "Interaction Complexity", detail: "Making critical decisions about information architecture and how B2B users scan information on desktop." },
    ],
    screens: [
      { src: "/images/podcraft/desktop1.webp", alt: "Landing Page", caption: "Landing Page" },
      { src: "/images/podcraft/desktop2.webp", alt: "How it works", caption: "How It Works" },
    ],
    learnings: [
      { title: "Web Design Fundamentals", detail: "Mastering layout structuring for larger screens and desktop-first thinking." },
      { title: "UX & Web Connection", detail: "Using visual hierarchy to drive B2B user attention to the right content." },
      { title: "Learning While Executing", detail: "Proving that you can learn complex systems by doing rather than waiting to be ready." },
    ],
    outcome:
      "The website successfully positions PodCraft Labs as a credible B2B product and development company, attracting global traffic. It serves as their primary company presence, clearly communicating capabilities and providing a professional platform for potential client engagement.",
    heroImage: "/images/podcraft/hero.webp",
  },

  logo: {
    title: "Soda Live Logo Design",
    description: "Designing a scalable identity for a real-time streaming platform.",
    overview:
      "Soda Live needed a brand identity that felt energetic, trustworthy, and distinctly modern to stand out in a saturated streaming market.",
    meta: {
      role: "Lead Brand Designer",
      duration: "4 Weeks",
      status: "Delivered",
      deliverables: "Logo System, Brand Guidelines",
    },
    problem: [
      { label: "Generic Identity", detail: "Previous identity blended in with competitors and lacked differentiation." },
      { label: "Poor Scalability", detail: "Previous logo didn't scale well to app icon size." },
      { label: "No Cohesive Metaphor", detail: 'Lacked a visual metaphor for "real-time interaction" that felt ownable.' },
    ],
    goals: [
      "Design a distinct, energetic visual mark.",
      "Ensure perfect legibility from 16px to 1024px.",
      "Create a system that translates to UI and marketing.",
    ],
    process: [
      { step: "1. Exploration", detail: "200+ concepts explored — narrowed to 1 final direction." },
      { step: "2. Concept Dev", detail: "Merged Chat Bubble, Play Icon, and Energy Bubbles into a single mark." },
      { step: "3. System Build", detail: "Built brand guidelines, color system, and export structure." },
    ],
    concepts: [
      { label: "Chat Bubble", detail: "Representing real-time communication between users." },
      { label: "Play Icon", detail: "The core action of live streaming." },
      { label: "Energy Bubbles", detail: 'The "Soda" fizz and dynamic energy of the platform.' },
    ],
    identity: {
      colorName: "Sunset Gradient",
      colorHex: "#FFC857 → #F67F00 → #C9184C",
      colorDesc: "Vibrant, fizzy, and full of motion.",
      fontName: "SF Pro Display",
      fontDesc: "Clean, modern, highly legible in UI.",
    },
    challenges: [
      { title: "First Logo Project", detail: "Learning bezier curves and optical alignment from scratch." },
      { title: "Iteration Overload", detail: "Knowing when to stop exploring and start refining." },
      { title: "Stakeholder Misalignment", detail: "Bridging the gap between personal taste and brand strategy." },
      { title: "Emotional Pressure", detail: "Designing the core identity carries heavy responsibility for the brand." },
    ],
    screens: [
      { src: "/images/logo/desktop1.webp", alt: "Sketch Explorations", caption: "200+ Explorations" },
      { src: "/images/logo/desktop2.webp", alt: "Final Primary Logo", caption: "Final Identity" },
      { src: "/images/logo/desktop3.webp", alt: "App Icon", caption: "App Icon" },
      { src: "/images/logo/desktop4.webp", alt: "Dark Mode Logo", caption: "Dark Mode" },
    ],
    learnings: [
      { title: "Process Over Decoration", detail: "A strong concept rooted in meaning always beats a visually polished but empty mark." },
      { title: "Objective Decision Making", detail: "Learned to separate personal taste from what the brand actually needs." },
      { title: "Handling Feedback Constructively", detail: "Turned stakeholder critique into useful direction rather than noise." },
      { title: "System Thinking in Brand Design", detail: "A logo is not one file — it's a system of marks, scales, and contexts." },
    ],
    outcome:
      "Delivered a complete, scalable brand identity system deployed across the web platform, mobile app, and marketing materials. The new logo increased brand recognition and established a professional, energetic presence for the startup.",
    heroImage: "/images/logo/hero.webp",
  },
};

// ─── ICONS ────────────────────────────────────────────────────────────────────

function IconProblem() {
  return (
    <div className="w-10 h-6 rounded-full border-2 border-red-600 flex items-center justify-center text-red-600 text-xs font-bold">
      !
    </div>
  );
}

function IconGoal() {
  return (
    <div className="w-10 h-6 rounded-full border-2 border-primary flex items-center justify-center text-primary text-xs font-bold">
      ✦
    </div>
  );
}

// ─── RESPONSIVE IMAGE ─────────────────────────────────────────────────────────

function ResponsiveImage({
  desktopSrc,
  mobileSrc,
  alt,
}: {
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
}) {
  return (
    <>
      <Image
        src={desktopSrc}
        alt={alt}
        fill
        className="object-cover hidden md:block"
        sizes="(min-width: 768px) 50vw, 100vw"
      />
      <Image
        src={mobileSrc}
        alt={alt}
        fill
        className="object-cover block md:hidden"
        sizes="100vw"
      />
    </>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function WorkDetail({ params }: { params: { slug: string } }) {
  const project = projects[params.slug];
  if (!project) return notFound();

  const isLogo = params.slug === "logo";
  const slug = params.slug;

  const d = (n: number) => `/images/${slug}/desktop${n}.webp`;
  const m = (n: number) => `/images/${slug}/mobile${n}.webp`;

  const desktopCount: Record<string, number> = { logo: 4, sodalive: 4, manova: 2, podcraft: 2 };
  const mobileCount: Record<string, number> = { logo: 4, sodalive: 2, manova: 2, podcraft: 2 };
  const dCount = desktopCount[slug] ?? 2;
  const mCount = mobileCount[slug] ?? 2;
  const mi = (n: number) => m(Math.min(n, mCount));

  return (
    <div className="w-full min-h-screen">
      <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">

        {/* BACK */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Work</span>
        </Link>

        {/* HERO TEXT */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Case Study
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="mb-6 text-xl text-foreground/70 max-w-2xl leading-relaxed">
            {project.description}
          </p>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 md:px-10 md:py-5 text-sm md:text-base rounded-lg font-medium hover:bg-primary/90 transition shadow-lg mt-6"
            >
              Visit Live Site ↗
            </a>
          )}
        </div>

        {/* HERO IMAGE */}
        <div className="w-full rounded-2xl overflow-hidden aspect-video relative mb-20 bg-white border border-gray-200 hover:border-primary hover:shadow-[0_0_100px_rgba(59,130,246,0.15)] hover:-translate-y-1 transition block">
          <Image
            src={`/images/${slug}/hero.webp`}
            alt={`${project.title} Hero`}
            fill
            className="object-contain"
            priority
            sizes="100vw"
          />
        </div>

        {/* META */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20 pb-20 border-b border-border">
          <div>
            <p className="text-sm text-foreground/50 mb-1">Role</p>
            <p className="font-medium">{project.meta.role}</p>
          </div>
          <div>
            <p className="text-sm text-foreground/50 mb-1">Duration</p>
            <p className="font-medium">{project.meta.duration}</p>
          </div>
          <div>
            <p className="text-sm text-foreground/50 mb-1">Status</p>
            <p className="font-medium">{project.meta.status}</p>
          </div>
          <div>
            <p className="text-sm text-foreground/50 mb-1">Deliverables</p>
            <p className="font-medium">{project.meta.deliverables}</p>
          </div>
        </div>

        {/* OVERVIEW */}
        <section className="mb-12 max-w-2xl">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-foreground/70 leading-relaxed">{project.overview}</p>
        </section>

        {/* IMAGE — desktop1 / mobile1 */}
         <div className="w-full rounded-2xl overflow-hidden aspect-video relative mb-20 bg-white border border-gray-200 hover:border-primary hover:shadow-[0_0_100px_rgba(59,130,246,0.15)] hover:-translate-y-1 transition block">
          <ResponsiveImage
            desktopSrc={d(1)}
            mobileSrc={mi(1)}
            alt={`${project.title} — overview screen`}
          />
        </div>

        {/* PROBLEM + GOAL */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-10 border border-border rounded-2xl bg-white text-black hover:border-primary/100 hover:shadow-[0_0_100px_rgba(59,130,246,0.15)] hover:-translate-y-1 block">
              <div className="flex items-center gap-3 mb-6 ">
                <IconProblem />
                <h3 className="text-lg font-semibold">The Problem</h3>
              </div>
              <ul className="space-y-4">
                {project.problem.map((p, i) => (
                  <li key={i} className="text-black/70 text-sm leading-relaxed">
                    <span className="font-semibold text-black">{p.label}: </span>
                    {p.detail}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 border border-border rounded-2xl bg-[#0a0a0a] text-white hover:border-primary/100 hover:shadow-[0_0_100px_rgba(59,130,246,0.15)] hover:-translate-y-1 block">
              <div className="flex items-center gap-3 mb-6">
                <IconGoal />
                <h3 className="text-lg font-semibold">The Goal</h3>
              </div>
              <ul className="space-y-3">
                {project.goals.map((g, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-8 ">
            {isLogo ? "Process" : "Process & Approach"}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {project.process.map((p, i) => (
              <div
                key={i}
                className="p-10 border border-border rounded-2xl bg-white text-black hover:border-primary/100 hover:shadow-[0_0_100px_rgba(59,130,246,0.15)] hover:-translate-y-1 block"
              >
                <p className="font-semibold mb-2">{p.step}</p>
                <p className="text-sm text-black/60">{p.detail}</p>
              </div>
            ))}
          </div>

          {project.escrow && project.escrow.length > 0 && (
            <div className="p-10 border border-border rounded-2xl bg-[#0a0a0a] text-white hover:border-primary/100 hover:shadow-[0_0_100px_rgba(59,130,246,0.15)] hover:-translate-y-1 block">
              <h4 className="text-lg font-semibold mb-6">Key Solution: Escrow System</h4>
              <div className="flex flex-col md:flex-row gap-6">
                {project.escrow.map((e, i) => (
                  <div key={i} className="flex-1 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-sm mb-1">{e.label}</p>
                      <p className="text-sm text-white/60">{e.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* IMAGE — desktop2 / mobile2 */}
        <div className="w-full rounded-2xl overflow-hidden aspect-video relative mb-20 bg-white border border-gray-200 hover:border-primary hover:shadow-[0_0_100px_rgba(59,130,246,0.15)] hover:-translate-y-1 transition block">
          <ResponsiveImage
            desktopSrc={d(2)}
            mobileSrc={mi(2)}
            alt={`${project.title} — process screen`}
          />
        </div>

        {/* LOGO: CONCEPT DEVELOPMENT */}
        {project.concepts && (
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-8">Concept Development</h2>
            <p className="text-sm text-foreground/50 mb-6 font-medium tracking-widest uppercase">
              200+ concepts explored → refined to 1
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {project.concepts.map((c, i) => (
                <div
                  key={i}
                  className="p-10 border border-border rounded-2xl bg-[#0a0a0a] text-white hover:border-primary/100 hover:shadow-[0_0_100px_rgba(59,130,246,0.15)] hover:-translate-y-1 block"
                >
                  <p className="font-semibold mb-2">{c.label}</p>
                  <p className="text-sm text-white/60">{c.detail}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* LOGO: COLOR & TYPOGRAPHY */}
        {project.identity && (
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-8">Color & Typography</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-10 border border-border rounded-2xl bg-white text-black hover:border-primary/100 hover:shadow-[0_0_100px_rgba(59,130,246,0.15)] hover:-translate-y-1 block">
                <div
                  className="h-16 rounded-xl mb-6"
                  style={{ background: "linear-gradient(135deg, #FFC857, #F67F00 , #C9184C)" }}
                />
                <p className="font-semibold mb-1">{project.identity.colorName}</p>
                <p className="text-sm text-black/60 mb-2">{project.identity.colorHex}</p>
                <p className="text-sm text-black/60">{project.identity.colorDesc}</p>
              </div>
              <div className="p-10 border border-border rounded-2xl bg-[#0a0a0a] text-white hover:border-primary/100 hover:shadow-[0_0_100px_rgba(59,130,246,0.15)] hover:-translate-y-1 block">
                <p className="text-5xl font-extrabold tracking-tight mb-2">Aa</p>
                <p className="font-semibold mb-1">{project.identity.fontName}</p>
                <p className="text-sm text-white/60">{project.identity.fontDesc}</p>
              </div>
            </div>
          </section>
        )}

        {/* CHALLENGES */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8">Challenges</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.challenges.map((c, i) => (
              <div
                key={i}
                className="p-10 border border-border rounded-2xl bg-white text-black hover:border-primary/100 hover:shadow-[0_0_100px_rgba(59,130,246,0.15)] hover:-translate-y-1 block"
              >
                <p className="font-semibold mb-2">{c.title}</p>
                <p className="text-sm text-black/60 leading-relaxed">{c.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL PRODUCT EXPERIENCE */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8">
            {isLogo ? "Final Identity" : "Final Product Experience"}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="w-full rounded-2xl overflow-hidden aspect-video relative mb-20 bg-white border border-gray-200 hover:border-primary hover:shadow-[0_0_100px_rgba(59,130,246,0.15)] hover:-translate-y-1 transition block">
              <ResponsiveImage
                desktopSrc={dCount >= 3 ? d(3) : d(1)}
                mobileSrc={mi(1)}
                alt={`${project.title} — final screen 1`}
              />
            </div>
            <div className="w-full rounded-2xl overflow-hidden aspect-video relative mb-20 bg-white border border-gray-200 hover:border-primary hover:shadow-[0_0_100px_rgba(59,130,246,0.15)] hover:-translate-y-1 transition block">
              <ResponsiveImage
                desktopSrc={dCount >= 4 ? d(4) : d(2)}
                mobileSrc={mi(2)}
                alt={`${project.title} — final screen 2`}
              />
            </div>
          </div>
        </section>

        {/* LEARNINGS */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8">Learnings</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.learnings.map((l, i) => (
              <div
                key={i}
                className="p-10 border border-border rounded-2xl bg-[#0a0a0a] text-white hover:border-primary/100 hover:shadow-[0_0_100px_rgba(59,130,246,0.15)] hover:-translate-y-1 block"
              >
                <p className="font-semibold mb-2">{l.title}</p>
                <p className="text-sm text-white/60 leading-relaxed">{l.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OUTCOME */}
        <section className="max-w-2xl">
          <h2 className="text-2xl font-semibold mb-4">Outcome</h2>
          <p className="text-xl text-foreground/70 leading-relaxed">{project.outcome}</p>
        </section>

        {/* PREV / NEXT NAVIGATION */}
        {(() => {
          const projectKeys = Object.keys(projects);
          const currentIndex = projectKeys.indexOf(params.slug);
          const prevSlug = currentIndex > 0 ? projectKeys[currentIndex - 1] : null;
          const nextSlug = currentIndex < projectKeys.length - 1 ? projectKeys[currentIndex + 1] : null;
          const prevProject = prevSlug ? projects[prevSlug] : null;
          const nextProject = nextSlug ? projects[nextSlug] : null;

          return (
            <div className="mt-20 pt-10 border-t border-border flex flex-col sm:flex-row items-stretch gap-4">
              {prevSlug && prevProject ? (
                <Link
                  href={`/work/${prevSlug}`}
                  className="flex-1 group flex flex-col gap-1 p-6 rounded-2xl border border-border hover:border-primary hover:shadow-[0_0_60px_rgba(59,130,246,0.1)] transition"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-foreground/40 group-hover:text-primary transition">
                    ← Previous
                  </span>
                  <span className="font-semibold text-base text-foreground group-hover:text-primary transition">
                    {prevProject.title}
                  </span>
                  <span className="text-sm text-foreground/50 line-clamp-1">
                    {prevProject.description}
                  </span>
                </Link>
              ) : (
                <div className="flex-1" />
              )}

              {nextSlug && nextProject ? (
                <Link
                  href={`/work/${nextSlug}`}
                  className="flex-1 group flex flex-col gap-1 p-6 rounded-2xl border border-border hover:border-primary hover:shadow-[0_0_60px_rgba(59,130,246,0.1)] transition sm:items-end sm:text-right"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-foreground/40 group-hover:text-primary transition">
                    Next →
                  </span>
                  <span className="font-semibold text-base text-foreground group-hover:text-primary transition">
                    {nextProject.title}
                  </span>
                  <span className="text-sm text-foreground/50 line-clamp-1">
                    {nextProject.description}
                  </span>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </div>
          );
        })()}

      </div>
    </div>
  );
}