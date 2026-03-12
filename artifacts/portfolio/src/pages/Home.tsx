import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard, type ProjectData } from "@/components/ProjectCard";

const FEATURED_PROJECTS: ProjectData[] = [
  {
    title: "School Management System",
    description: "Multi-tenant SaaS platform for managing Kenyan schools with CBC grading, subscription-based access, and AI-powered insights for administrators, teachers, and parents.",
    tech: ["Java 21", "Spring Boot", "PostgreSQL", "Redis", "Docker", "RabbitMQ"],
    comment: "// Built at Axiss Innovators — multi-tenant with AI analytics",
    github: "#",
    githubPrivate: true
  },
  {
    title: "File Flow API",
    description: "Secure, scalable cloud-based media management and social network platform. Event-driven transcoding via FFMPEG, intelligent content analysis with Apache Tika and Spring AI, and a Neo4j-powered social graph recommendation engine.",
    tech: ["Java", "Spring Boot", "Neo4j", "RabbitMQ", "Apache Tika", "FFMPEG", "Spring AI"],
    comment: "// Event-driven media pipeline with intelligent content analysis",
    github: "https://github.com/Stephen-Salano"
  },
  {
    title: "Courigistics Backend",
    description: "Scalable, event-driven logistics platform connecting customers with freelance couriers. Non-blocking notifications via Java 21 Virtual Threads, and a custom driver compliance validation framework with a normalised PostgreSQL schema for complex entity relationships.",
    tech: ["Java 21", "Spring Boot", "PostgreSQL", "Docker", "Virtual Threads", "Spring Async"],
    comment: "// High-throughput async architecture with zero thread pool overhead",
    github: "https://github.com/Stephen-Salano"
  }
];

const EXPERIENCE = [
  {
    date: "2025 — Present",
    title: "CTO & Senior Full-Stack Engineer",
    company: "Axiss Innovators",
    companyHref: "#",
    summary: "Leading architecture and development of a multi-tenant school management SaaS platform for Kenyan schools.",
    bullets: [
      "CBC grading engine with subscription-based access tiers",
      "AI-powered analytics dashboard for school administrators and teachers",
      "Multi-tenant data isolation architecture with PostgreSQL",
      "RabbitMQ event-driven notification and reporting pipeline",
      "Docker-based deployment with Redis caching and session management"
    ],
    comment: "// Architecting production SaaS from the ground up"
  },
  {
    date: "Oct 2025 — Dec 2025 (Contract)",
    title: "IT Systems Administrator",
    company: "Sportpesa Kenya",
    companyHref: "#",
    summary: "Engineered monitoring solutions to automate error detection in production and disaster recovery environments.",
    bullets: [
      "ELK Stack monitoring pipeline for automated real-time error detection in prod and DR environments",
      "Streamlined deployment pipeline through rigorous staging server validation",
      "Contributed to documentation of systems configurations and upgrade procedures for future onboarding"
    ],
    comment: "// Zero-downtime monitoring across production and DR"
  },
  {
    date: "Jun 2022 — Jan 2023",
    title: "Back-end Engineer",
    company: "AfyaRekod",
    companyHref: "#",
    summary: "Developed APIs for the Universal Patient Portal to process real-time patient data.",
    bullets: [
      "Real-time patient data APIs using Java, Kotlin, and Spring Boot",
      "Assisted in designing database schemas improving HMIS performance by 5%",
      "Integrated third-party APIs to enhance healthcare data exchange between hospitals and patient systems",
      "Contributed to microservices architecture design and technical documentation"
    ],
    comment: "// Healthcare data APIs at scale"
  }
];

const TECH_STACK = [
  {
    title: "BACKEND SYSTEMS",
    items: ["Spring Boot (MVC, WebFlux)", "Java 21 Virtual Threads", "Kotlin", "RESTful & Event-Driven APIs", "Microservices Architecture", "Multi-tenant SaaS Patterns"]
  },
  {
    title: "DATA & MESSAGING",
    items: ["PostgreSQL", "Redis", "Apache Kafka", "RabbitMQ", "Elasticsearch", "Event Sourcing & CQRS"]
  },
  {
    title: "INFRASTRUCTURE",
    items: ["Docker & Kubernetes", "AWS (EKS, RDS, S3)", "CI/CD Pipelines", "Prometheus & Grafana", "Distributed Tracing", "Zero-Downtime Deployments"]
  },
  {
    title: "FRONTEND & TOOLS",
    items: ["React & TypeScript", "Next.js", "Tailwind CSS", "REST API Design", "OpenAPI", "Git & GitHub Actions"]
  }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.12]" />
        <div className="absolute inset-0 radial-glow pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="font-mono text-primary text-xs mb-5 tracking-widest uppercase">
            Stephen&nbsp;&nbsp;Salano
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight mb-6 text-foreground leading-[1.15]">
            Full-Stack Engineer &amp; CTO.
          </h1>
          
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mb-10 leading-relaxed">
            Based in Nairobi, Kenya. Building event-driven systems for production.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/work" 
              className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              View my work <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold border border-border bg-card/50 text-foreground hover:bg-muted hover:border-muted-foreground/30 transition-all rounded-lg"
            >
              Get in touch <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SaaS Callout — centred section before Featured Work */}
      <div className="border-y border-border/50 bg-card/20 py-10">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 flex justify-center">
          <div className="font-mono text-primary text-sm inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full border border-primary/20 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
            /* SaaS — Salano as a Service */
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 space-y-28 pb-28 pt-20">
        {/* Featured Work Section */}
        <section>
          <SectionHeader title="Featured Work" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FEATURED_PROJECTS.slice(0, 2).map(project => (
              <ProjectCard key={project.title} project={project} />
            ))}
            <div className="md:col-span-2 md:max-w-[calc(50%-10px)]">
              <ProjectCard project={FEATURED_PROJECTS[2]} className="h-full" />
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/work" className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors">
              // View all work →
            </Link>
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <SectionHeader title="Experience" />
          <div className="relative border-l border-border/60 ml-3 space-y-14 py-2">
            {EXPERIENCE.map((job, i) => (
              <div key={i} className="relative pl-8 md:pl-10">
                <div className="absolute w-2.5 h-2.5 bg-primary rounded-full -left-[5px] top-1.5 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                
                <div className="font-mono text-primary text-xs mb-2">{job.date}</div>
                
                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3 mb-3">
                  <h3 className="font-mono text-base font-bold text-foreground">{job.title}</h3>
                  <span className="text-muted-foreground text-sm hidden md:inline">@</span>
                  <a href={job.companyHref} className="text-primary text-sm font-mono hover:underline underline-offset-4 transition-colors">
                    {job.company}
                  </a>
                </div>
                
                <p className="text-muted-foreground text-sm mb-5 max-w-2xl leading-relaxed">
                  {job.summary}
                </p>
                
                <ul className="space-y-2.5 max-w-2xl mb-5">
                  {job.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start text-sm text-muted-foreground">
                      <span className="text-primary mr-3 font-mono mt-0.5 shrink-0">›</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="font-mono text-xs text-primary/70">{job.comment}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section — table layout */}
        <section>
          <SectionHeader title="Tech Stack" />
          <p className="text-muted-foreground mb-8 text-sm max-w-2xl">
            Tools and systems used in the work documented on this site.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-border">
                  {TECH_STACK.map((col) => (
                    <th key={col.title} className="text-left font-mono text-xs text-primary pb-4 pr-8 w-1/4">
                      {col.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: Math.max(...TECH_STACK.map(c => c.items.length)) }).map((_, rowIdx) => (
                  <tr key={rowIdx} className="border-b border-border/20">
                    {TECH_STACK.map((col) => (
                      <td key={col.title} className="py-3 pr-8 text-sm text-muted-foreground align-top">
                        {col.items[rowIdx] || ""}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Writing Placeholder */}
        <section>
          <div className="flex justify-between items-end mb-8">
            <SectionHeader title="Writing" className="mb-0" />
            <Link href="/writing" className="text-xs text-muted-foreground hover:text-primary transition-colors font-mono hidden sm:inline-flex items-center whitespace-nowrap mb-1">
              View all →
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between sm:items-center p-6 border border-border/30 rounded-xl bg-card/20 opacity-50 cursor-not-allowed">
            <h3 className="text-sm font-medium text-muted-foreground mb-2 sm:mb-0">
              Currently writing — first articles coming soon.
            </h3>
            <div className="flex items-center gap-5 font-mono text-xs text-muted-foreground">
              <span>2026</span>
              <span>— min read</span>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Block */}
      <section className="border-t border-border bg-card/20 relative overflow-hidden">
        <div className="absolute inset-0 radial-glow-center pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 py-24 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">Get in touch.</h2>
          <p className="text-muted-foreground text-base mb-8 max-w-xl mx-auto">
            Open to full-time engineering roles, contract work, and technical consulting.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold bg-foreground text-background rounded-lg hover:bg-muted-foreground transition-colors"
          >
            Contact <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
