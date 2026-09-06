import { useEffect, useRef, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Code2, ExternalLink, Github, Mail, Menu, Radio, Terminal, X } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rupanshi Garg — Software Development Engineer" },
      { name: "description", content: "Rupanshi Garg is an SDE-focused computer science student building real-time, full-stack and AI-enabled systems." },
      { property: "og:title", content: "Rupanshi Garg — Software Development Engineer" },
      { property: "og:description", content: "Full-stack systems, competitive programming depth, and practical AI/DevOps engineering." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const skills = ["Java", "Python", "React", "TypeScript", "Spring Boot", "FastAPI", "PostgreSQL", "Docker", "AWS", "LangGraph", "WebSockets", "Prisma"];

const projects = [
  {
    number: "01",
    type: "REAL-TIME SYSTEMS / FEATURED",
    title: "CI/CD Pipeline\nVisualizer",
    description: "A real-time DevOps dashboard that turns GitHub webhook events into a live operational view across repositories.",
    result: "Live pipeline status broadcast to React clients in under 1 second — no refresh required.",
    stack: ["Java", "Spring Boot", "WebSocket", "React", "MySQL", "Docker"],
    accent: "cyan",
    visual: "pipeline",
  },
  {
    number: "02",
    type: "FULL-STACK / COMMERCE",
    title: "Flipkart Clone",
    description: "A high-fidelity e-commerce platform with search, multi-image product details, and a multi-step checkout flow.",
    result: "Optimistic cart updates designed to eliminate race conditions on rapid add/remove actions.",
    stack: ["React", "PostgreSQL", "Prisma", "Node.js"],
    accent: "pink",
    visual: "commerce",
  },
  {
    number: "03",
    type: "AI INFRASTRUCTURE / CURRENT",
    title: "FinOps\nIntelligence",
    description: "A multi-agent LangGraph chatbot for multi-cloud cost intelligence, built during the Full Stack DevOps Engineer internship.",
    result: "A three-part data layer connects time-series analytics with vector-based cost retrieval.",
    stack: ["LangGraph", "OpenAI", "FastAPI", "PostgreSQL", "TimescaleDB", "pgvector"],
    accent: "amber",
    visual: "finops",
  },
  {
    number: "04",
    type: "RESEARCH / RECOGNITION",
    title: "Chess Crypt",
    description: "A patent-backed project that reflects a habit of taking abstract ideas from concept to defensible technical work.",
    result: "Patent IN202511122586A · 2nd runner-up, Ideat-a-thon 2025.",
    stack: ["Patent", "Research", "Problem Solving"],
    accent: "signal",
    visual: "chess",
  },
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`${className} transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return <div className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground"><span className="text-cyan">{index}</span><span className="h-px w-8 bg-line" /><span>{children}</span></div>;
}

function TerminalSignal() {
  return (
    <div className="glass-panel relative min-h-[370px] overflow-hidden p-5 sm:p-7" aria-label="Current engineering signal">
      <div className="absolute inset-0 portfolio-grid opacity-30" />
      <div className="absolute left-[18%] top-0 h-full w-px bg-cyan/15" />
      <div className="absolute left-[60%] top-0 h-full w-px bg-pink/10" />
      <div className="scan-line absolute inset-x-0 -top-1/2 h-1/2 bg-gradient-to-b from-transparent via-cyan/10 to-transparent" />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-center justify-between border-b border-line pb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          <span className="flex items-center gap-2"><span className="signal-dot h-1.5 w-1.5 rounded-full bg-signal" /> system_signal</span>
          <span>RU / 06.26</span>
        </div>
        <div className="py-8">
          <div className="mb-5 font-mono text-[11px] text-cyan">$ ./build --watch</div>
          <div className="space-y-3 font-mono text-xs leading-relaxed text-muted-foreground">
            <p><span className="text-signal">✓</span> ingesting webhook events</p>
            <p><span className="text-signal">✓</span> syncing service state</p>
            <p><span className="text-cyan">→</span> broadcasting to clients<span className="ml-1 inline-block h-3 w-1.5 translate-y-0.5 animate-pulse bg-cyan" /></p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 border-t border-line pt-4 font-mono">
          {[{ label: "latency", value: "<1s" }, { label: "systems", value: "04" }, { label: "status", value: "online" }].map((item) => <div key={item.label}><div className="mb-1 text-[9px] uppercase tracking-widest text-muted-foreground">{item.label}</div><div className="text-xs text-foreground">{item.value}</div></div>)}
        </div>
      </div>
    </div>
  );
}

function ProjectVisual({ type, accent }: { type: string; accent: string }) {
  const accentClass = { cyan: "text-cyan", pink: "text-pink", amber: "text-amber", signal: "text-signal" }[accent] ?? "text-cyan";
  if (type === "pipeline") return <div className="relative flex h-full items-center justify-center"><div className="absolute h-40 w-40 rounded-full border border-cyan/20" /><div className="absolute h-24 w-24 rounded-full border border-cyan/30" /><div className="relative grid grid-cols-3 gap-5">{["git", "build", "ship"].map((label, i) => <div key={label} className="flex flex-col items-center gap-2"><span className={`h-3 w-3 rounded-full border-2 border-current ${accentClass} ${i === 1 ? "signal-dot bg-cyan" : ""}`} /><span className="font-mono text-[9px] uppercase text-muted-foreground">{label}</span></div>)}</div><div className="absolute h-px w-44 bg-gradient-to-r from-transparent via-cyan to-transparent" /></div>;
  if (type === "commerce") return <div className="grid grid-cols-2 gap-3 p-6">{["01", "02", "03", "04"].map((item, i) => <div key={item} className={`aspect-square border border-line ${i === 0 ? "bg-pink/15" : "bg-foreground/[0.03]"} p-3`}><div className="flex h-full flex-col justify-between"><span className={`font-mono text-[9px] ${accentClass}`}>product_{item}</span><span className="h-5 w-5 border border-current opacity-60" /></div></div>)}</div>;
  if (type === "finops") return <div className="relative h-full p-6 font-mono text-[9px] text-muted-foreground"><div className="absolute bottom-8 left-8 right-8 top-8 grid grid-cols-6 items-end gap-2">{[22, 38, 31, 56, 45, 72, 64, 84, 58, 91, 77, 96].map((height, i) => <div key={i} className={`relative ${i > 8 ? "bg-amber/70" : "bg-amber/30"}`} style={{ height: `${height}%` }}><span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px]">{i + 1}</span></div>)}</div><div className="absolute left-6 top-6 text-amber">COST / MULTI-CLOUD</div></div>;
  return <div className="flex h-full items-center justify-center"><div className="relative flex h-40 w-40 items-center justify-center border border-signal/40"><div className="absolute h-28 w-28 rotate-45 border border-signal/20" /><span className="font-display text-5xl text-signal">♞</span><span className="absolute bottom-3 font-mono text-[8px] uppercase tracking-[0.2em] text-muted-foreground">patent / 2025</span></div></div>;
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-foreground">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-ink/85 backdrop-blur-xl" aria-label="Primary navigation">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" className="group flex items-center gap-3" onClick={closeMenu}><span className="flex h-8 w-8 items-center justify-center border border-cyan/50 text-cyan transition-colors group-hover:bg-cyan group-hover:text-ink"><Terminal size={14} /></span><span className="font-mono text-xs tracking-[0.12em] text-foreground">RG<span className="text-cyan">_</span></span></a>
          <div className="hidden items-center gap-8 md:flex">{[["01", "work", "#work"], ["02", "signal", "#signal"], ["03", "contact", "#contact"]].map(([number, label, href]) => <a key={label} href={href} className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-cyan">{number} / {label}</a>)}<a href="/resume-rupanshi-garg.pdf" download className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan hover:text-foreground">Resume <ArrowUpRight size={12} className="ml-1 inline" /></a></div>
          <button type="button" className="text-muted-foreground md:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
        {menuOpen && <div className="border-t border-line bg-ink px-5 py-5 md:hidden"><div className="flex flex-col gap-5">{[["01", "work", "#work"], ["02", "signal", "#signal"], ["03", "contact", "#contact"]].map(([number, label, href]) => <a key={label} href={href} onClick={closeMenu} className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{number} / {label}</a>)}<a href="/resume-rupanshi-garg.pdf" download className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">Download resume <ArrowUpRight size={13} className="ml-1 inline" /></a></div></div>}
      </nav>

      <section id="top" className="portfolio-grid relative border-b border-line/60 pt-[72px]">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/[0.04] via-transparent to-pink/[0.04]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-[1440px] items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16 lg:px-12 lg:py-24">
          <div>
            <div className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"><span className="signal-dot h-2 w-2 rounded-full bg-signal" /> available for SDE opportunities <span className="hidden text-line sm:inline">/</span> 2026</div>
            <h1 className="max-w-4xl font-display text-[clamp(3.5rem,9vw,8.5rem)] font-medium leading-[0.86] tracking-[-0.05em] text-foreground">Rupanshi<br /><span className="text-cyan">Garg<span className="text-pink">.</span></span></h1>
            <div className="mt-9 grid gap-8 border-t border-line pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">Software Development Engineer building <span className="text-foreground">full-stack systems</span> where real-time data, thoughtful interfaces, and resilient infrastructure meet.</p>
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:text-right"><div className="mb-2 text-cyan">01 — focus</div><div>systems / product / scale</div></div>
            </div>
            <div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg" className="rounded-none bg-cyan px-6 font-mono text-[10px] uppercase tracking-[0.16em] text-ink shadow-none hover:bg-foreground"><a href="#work">View selected work <ArrowDownRight size={15} /></a></Button><Button asChild variant="outline" size="lg" className="rounded-none border-line bg-transparent px-6 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground shadow-none hover:border-cyan hover:bg-cyan/10 hover:text-cyan"><a href="mailto:gargrupanshi45@gmail.com">Start a conversation <Mail size={14} /></a></Button></div>
          </div>
          <TerminalSignal />
        </div>
        <div className="relative mx-auto flex max-w-[1440px] items-center justify-between border-t border-line/60 px-5 py-4 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:px-8 lg:px-12"><span>scroll to inspect</span><span className="text-cyan">↓</span><span className="hidden sm:inline">computer science / chandigarh university</span></div>
      </section>

      <section className="border-b border-line/60 bg-ink-strong py-5" aria-label="Technical skills"><div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-x-6 gap-y-3 px-5 sm:px-8 lg:px-12"><span className="mr-3 font-mono text-[9px] uppercase tracking-[0.2em] text-cyan">stack /</span>{skills.map((skill) => <span key={skill} className="font-display text-sm text-muted-foreground transition-colors hover:text-foreground">{skill}</span>)}</div></section>

      <section id="work" className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><SectionLabel index="02">Selected work</SectionLabel><div className="mb-16 grid gap-6 lg:grid-cols-[1fr_0.62fr] lg:items-end"><h2 className="max-w-4xl font-display text-5xl leading-[0.95] tracking-[-0.04em] text-foreground sm:text-7xl">Systems that make<br /><span className="text-cyan">complexity legible.</span></h2><p className="max-w-sm text-sm leading-relaxed text-muted-foreground">A selection of projects across real-time engineering, product infrastructure, and applied AI.</p></div><div className="grid gap-5 lg:grid-cols-2">{projects.map((project, index) => <Reveal key={project.number} delay={index * 90}><article className={`group relative overflow-hidden border border-line bg-panel transition-colors hover:border-${project.accent}/60 ${index === 0 ? "lg:col-span-2" : ""}`}><div className={`grid ${index === 0 ? "lg:grid-cols-[1fr_0.8fr]" : "md:grid-cols-[0.82fr_1fr]"}`}><div className={`${index === 0 ? "min-h-[340px]" : "min-h-[260px]"} order-2 bg-ink-strong/60 p-4 md:order-1`}><ProjectVisual type={project.visual} accent={project.accent} /></div><div className="order-1 flex flex-col justify-between p-6 sm:p-8 md:order-2"><div><div className="mb-7 flex items-start justify-between gap-4"><span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">{project.type}</span><span className="font-mono text-xs text-muted-foreground">{project.number}</span></div><h3 className="whitespace-pre-line font-display text-4xl leading-[0.92] tracking-[-0.04em] text-foreground sm:text-5xl">{project.title}</h3><p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">{project.description}</p></div><div className="mt-10"><div className="mb-5 border-l border-cyan pl-4 text-sm leading-relaxed text-foreground/85">{project.result}</div><div className="flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="border border-line px-2 py-1 font-mono text-[9px] text-muted-foreground">{item}</span>)}</div></div></div></div><div className="absolute right-5 top-5 opacity-0 transition-opacity group-hover:opacity-100"><ArrowUpRight className="text-cyan" size={20} /></div></article></Reveal>)}</div></section>

      <section id="signal" className="border-y border-line/60 bg-ink-strong"><div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-12 lg:py-32"><div><SectionLabel index="03">Proof of depth</SectionLabel><h2 className="max-w-md font-display text-5xl leading-[0.95] tracking-[-0.04em] text-foreground sm:text-6xl">The signal is in the <span className="text-pink">details.</span></h2><p className="mt-7 max-w-sm text-sm leading-relaxed text-muted-foreground">I like hard problems, clean abstractions, and the moment a system becomes easier to reason about.</p></div><div className="grid grid-cols-2 border-l border-t border-line sm:grid-cols-4">{[["800+", "problems solved", "cyan"], ["1510", "Codeforces Specialist", "pink"], ["2074", "CodeChef · 5★", "amber"], ["2.7%", "global rank · 1081 / 40k", "signal"]].map(([value, label, color]) => <div key={label} className="border-b border-r border-line p-5 sm:p-6"><div className={`font-display text-4xl tracking-[-0.04em] sm:text-5xl text-${color}`}>{value}</div><div className="mt-4 max-w-[120px] font-mono text-[9px] uppercase leading-relaxed tracking-[0.12em] text-muted-foreground">{label}</div></div>)}</div></div></section>

      <section className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]"><div><SectionLabel index="04">Experience</SectionLabel><div className="sticky top-28"><h2 className="font-display text-5xl leading-[0.95] tracking-[-0.04em] text-foreground sm:text-6xl">Built in the<br /><span className="text-cyan">real world.</span></h2><div className="mt-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground"><Radio size={14} className="text-signal" /> currently shipping</div></div></div><div className="space-y-0 border-t border-line">{[{ date: "JUN 2026 — PRESENT", role: "Full Stack DevOps Engineer Intern", company: "Allcognix", copy: "Architecting a multi-agent, LangGraph-based FinOps chatbot using OpenAI and FastAPI for multi-cloud cost intelligence. Built the data layer with PostgreSQL, TimescaleDB, and pgvector; developed a React/TypeScript frontend across 4+ AI/UI frameworks.", current: true }, { date: "AUG — DEC 2025", role: "Problem Setter Intern", company: "GeeksForGeeks", copy: "Set 30+ problems within 2 months, provided solutions, and identified edge cases through stress testing. Mentored students in competitive programming with a focus on contest-ready problem solving." }].map((item) => <div key={item.company} className="grid gap-6 border-b border-line py-8 sm:grid-cols-[0.75fr_1.6fr] sm:gap-10"><div className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">{item.date}</div><div><div className="mb-2 flex flex-wrap items-center gap-3"><h3 className="font-display text-2xl text-foreground">{item.role}</h3>{item.current && <span className="border border-signal/40 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-signal">active</span>}</div><div className="mb-5 font-mono text-xs text-cyan">{item.company}</div><p className="max-w-xl text-sm leading-relaxed text-muted-foreground">{item.copy}</p></div></div>)}<div className="grid gap-6 border-b border-line py-8 sm:grid-cols-[0.75fr_1.6fr] sm:gap-10"><div className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">RECOGNITION</div><div><h3 className="font-display text-2xl text-foreground">Patent + Ideat-a-thon</h3><p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">Chess Crypt — patent IN202511122586A. Secured 2nd runner-up in Ideat-a-thon 2025.</p></div></div></div></div></section>

      <section className="border-y border-line/60 bg-ink-strong"><div className="mx-auto grid max-w-[1440px] gap-16 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-28"><div><SectionLabel index="05">Education</SectionLabel><div className="space-y-8"><div><div className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan">2023 — 2027 / MOHALI, INDIA</div><h2 className="font-display text-3xl text-foreground">Chandigarh University</h2><p className="mt-2 text-sm text-muted-foreground">Bachelor of Technology · Computer Science & Engineering</p><p className="mt-3 font-mono text-xs text-foreground">CUMULATIVE GPA <span className="text-cyan">7.3 / 10.0</span></p></div><div><div className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">2021 — 2023 / MANSA, INDIA</div><h2 className="font-display text-2xl text-foreground">DAV Public School</h2><p className="mt-2 text-sm text-muted-foreground">CBSE Class XI–XII · 85%</p></div></div></div><div><SectionLabel index="06">Working toolkit</SectionLabel><div className="grid grid-cols-2 gap-x-8 gap-y-5 font-mono text-xs text-muted-foreground sm:grid-cols-3">{["Data Structures", "OOPS", "DBMS", "Operating Systems", "Microservices", "REST APIs", "Git / GitHub", "Maven", "NoSQL"].map((item) => <div key={item} className="flex items-center gap-2"><Code2 size={13} className="text-cyan" />{item}</div>)}</div></div></div></section>

      <footer id="contact" className="portfolio-grid relative"><div className="absolute inset-0 bg-gradient-to-t from-pink/[0.05] to-transparent" /><div className="relative mx-auto max-w-[1440px] px-5 pb-8 pt-24 sm:px-8 lg:px-12 lg:pt-32"><SectionLabel index="07">Contact</SectionLabel><div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end"><div><h2 className="max-w-4xl font-display text-6xl leading-[0.88] tracking-[-0.05em] text-foreground sm:text-8xl">Let’s build<br /><span className="text-cyan">what’s next<span className="text-pink">.</span></span></h2><a href="mailto:gargrupanshi45@gmail.com" className="mt-10 inline-flex items-center gap-3 border-b border-cyan pb-2 font-mono text-sm text-foreground transition-colors hover:text-cyan">gargrupanshi45@gmail.com <ArrowUpRight size={15} /></a></div><div className="flex flex-col gap-3 lg:items-end"><a href="https://github.com/Rupanshiigarg" target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-cyan"><Github size={15} /> GitHub / Rupanshiigarg</a><span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground"><ExternalLink size={15} /> LinkedIn / profile link pending</span><a href="/resume-rupanshi-garg.pdf" download className="mt-4 inline-flex items-center gap-2 border border-cyan px-4 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan transition-colors hover:bg-cyan hover:text-ink">Download resume <ArrowDownRight size={14} /></a></div></div><div className="mt-24 flex flex-wrap justify-between gap-4 border-t border-line pt-5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground"><span>Rupanshi Garg / Software Development Engineer</span><span>Made with intent · 2026</span></div></div></footer>
    </main>
  );
}