import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard, type ProjectData } from "@/components/ProjectCard";

const FEATURED_PROJECTS: ProjectData[] = [
  {
    title: "Veritas Analytics Platform",
    description: "AI-powered analytics platform for enterprise clients. Multi-tenant architecture with real-time data processing and custom dashboard generation.",
    tech: ["Spring Boot", "Kotlin", "Apache Kafka", "PostgreSQL", "React"],
    comment: "// event-driven pipeline processing 2M+ events/day",
    github: "#"
  },
  {
    title: "TenantFlow SaaS Engine",
    description: "Multi-tenant SaaS infrastructure engine with automated provisioning, billing integration, and tenant isolation at the database level.",
    tech: ["Java 21", "Spring WebFlux", "PostgreSQL", "Stripe API", "Docker"],
    comment: "// zero-downtime tenant onboarding under 30 seconds",
    github: "#"
  },
  {
    title: "EventBridge Microservices",
    description: "Event-driven microservices platform with distributed tracing, circuit breakers, and automated failover. Built for high availability production systems.",
    tech: ["Spring Cloud", "RabbitMQ", "Redis", "Kubernetes", "Prometheus"],
    comment: "// 99.9% uptime SLA across 12 independent services",
    github: "#"
  }
];

const EXPERIENCE = [
  {
    date: "2023 — Present",
    title: "Chief Technology Officer",
    company: "Lendstack Africa",
    summary: "Leading technical strategy and engineering operations for a fintech platform serving SMEs across East Africa.",
    bullets: [
      "Architected multi-tenant lending platform handling KES 500M+ in monthly transaction volume",
      "Built real-time credit scoring engine using event-driven architecture and ML pipelines",
      "Scaled engineering team from 3 to 12 engineers, establishing code review and deployment practices",
      "Designed zero-downtime deployment pipeline reducing release cycles from weekly to daily"
    ]
  },
  {
    date: "2021 — 2023",
    title: "Senior Software Engineer",
    company: "Cellulant Corporation",
    summary: "Built and maintained payment infrastructure for 35+ African markets across mobile money and card payment channels.",
    bullets: [
      "Developed high-throughput payment processing service handling 10K+ TPS during peak periods",
      "Implemented distributed transaction management with saga pattern for cross-border payments",
      "Migrated legacy monolith to microservices, reducing deployment complexity and improving team velocity",
      "Built real-time reconciliation system processing 2M+ transactions nightly"
    ]
  },
  {
    date: "2019 — 2021",
    title: "Software Engineer",
    company: "Andela",
    summary: "Embedded engineer on US-based product teams, building full-stack features for enterprise SaaS clients.",
    bullets: [
      "Built data export pipeline for analytics platform processing 500GB+ datasets monthly",
      "Implemented role-based access control system for multi-tenant B2B application",
      "Contributed to open-source developer tooling with 800+ GitHub stars"
    ]
  }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 lg:px-12 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.15]"></div>
        <div className="absolute inset-0 radial-glow pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="font-mono text-primary text-sm mb-6 inline-block bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 shadow-[0_0_15px_rgba(34,197,94,0.15)]">
            /* SaaS — Salano as a Service */
          </div>
          <div className="font-mono text-primary text-sm mb-8 tracking-widest uppercase">
            Stephen  Salano
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-foreground leading-[1.1]">
            Engineering systems<br />
            <span className="text-muted-foreground">that scale.</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-2xl max-w-2xl mb-12 leading-relaxed">
            Full-Stack Engineer & CTO — building event-driven, multi-tenant platforms from Nairobi, Kenya.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/work" 
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              View my work <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold border border-border bg-card/50 text-foreground hover:bg-muted hover:border-muted-foreground/30 transition-all rounded-lg"
            >
              Get in touch <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 space-y-32 pb-32">
        {/* Featured Work Section */}
        <section>
          <SectionHeader title="Featured Work" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURED_PROJECTS.slice(0, 2).map(project => (
              <ProjectCard key={project.title} project={project} />
            ))}
            <div className="md:col-span-2 max-w-3xl">
              <ProjectCard project={FEATURED_PROJECTS[2]} />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <SectionHeader title="Experience" />
          <div className="relative border-l border-border/60 ml-3 md:ml-6 space-y-16 py-4">
            {EXPERIENCE.map((job, i) => (
              <div key={i} className="relative pl-8 md:pl-12">
                {/* Timeline Dot */}
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-3">
                  <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                  <span className="text-primary font-mono text-sm">@</span>
                  <a href="#" className="text-lg text-foreground hover:text-primary underline decoration-border underline-offset-4 transition-colors">
                    {job.company}
                  </a>
                  <span className="text-muted-foreground font-mono text-sm md:ml-auto block mt-1 md:mt-0">
                    {job.date}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-6 max-w-3xl leading-relaxed">
                  {job.summary}
                </p>
                
                <ul className="space-y-3 max-w-3xl">
                  {job.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start text-sm md:text-base text-muted-foreground">
                      <span className="text-primary mr-3 font-mono mt-0.5">›</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Depth Section */}
        <section>
          <SectionHeader title="Technical Depth" />
          <p className="text-muted-foreground mb-10 max-w-2xl text-lg">
            Tools and systems used in the work documented on this site.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
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
            ].map((col, i) => (
              <div key={i} className="bg-card/50 border border-border p-6 rounded-xl">
                <h4 className="font-mono text-primary text-sm font-bold mb-6">{col.title}</h4>
                <ul className="space-y-3">
                  {col.items.map((item, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-border mr-2 font-mono">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Writing Placeholder */}
        <section>
          <div className="flex justify-between items-end mb-8 sm:mb-12">
            <SectionHeader title="Writing" className="mb-0" />
            <Link href="/writing" className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono hidden sm:inline-flex items-center whitespace-nowrap mb-1">
              View all <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="group flex flex-col sm:flex-row justify-between sm:items-center p-6 border border-border/40 rounded-xl bg-card/20 opacity-60 grayscale cursor-not-allowed">
            <h3 className="text-lg font-medium text-muted-foreground mb-2 sm:mb-0">
              Currently writing — first articles coming soon.
            </h3>
            <div className="flex items-center gap-4 font-mono text-sm text-muted-foreground">
              <span>2026</span>
              <span>— min read</span>
            </div>
          </div>
        </section>
      </div>

      {/* Footer CTA */}
      <section className="border-t border-border bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 radial-glow-center pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 py-32 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get in touch.</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Open to full-time engineering roles, contract work, and technical consulting.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold bg-foreground text-background rounded-lg hover:bg-muted-foreground transition-colors"
          >
            Contact <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
