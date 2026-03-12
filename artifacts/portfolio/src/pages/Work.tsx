import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard, type ProjectData } from "@/components/ProjectCard";
import { ArrowUpRight } from "lucide-react";

const PROJECTS: ProjectData[] = [
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

export default function Work() {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20 pb-32">
      <header className="mb-24 max-w-3xl">
        <div className="font-mono text-primary text-sm mb-6">
          // Selected Work
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-8">
          Systems I've built.
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Production systems and open-source tools. Each project includes architecture decisions and technical tradeoffs.
        </p>
      </header>

      <section className="mb-32">
        <SectionHeader title="All Work" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((project, i) => (
            <div key={i} className={i === 0 ? "md:col-span-2 max-w-4xl" : ""}>
              <ProjectCard project={project} className="h-full" />
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader title="Open Source" />
        <p className="text-muted-foreground mb-8">
          Open-source contributions and tools (currently private or in development)
        </p>
        
        <div className="space-y-4 max-w-4xl">
          <div className="group p-6 border border-border bg-card rounded-xl hover:border-primary/50 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-mono text-lg font-bold text-foreground group-hover:text-primary transition-colors">spring-multitenant</h3>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <p className="text-muted-foreground mb-4">
              Spring Boot multi-tenancy abstraction library. Tenant isolation, schema-per-tenant routing, and automatic context propagation.
            </p>
            <div className="font-mono text-sm text-primary">
              Private repository — available on request
            </div>
          </div>

          <div className="group p-6 border border-border bg-card rounded-xl hover:border-primary/50 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-mono text-lg font-bold text-foreground group-hover:text-primary transition-colors">kafka-saga-toolkit</h3>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <p className="text-muted-foreground mb-4">
              Distributed saga orchestration for Kafka-based microservices.
            </p>
            <div className="font-mono text-sm text-primary">
              In development — releasing Q2 2026
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
