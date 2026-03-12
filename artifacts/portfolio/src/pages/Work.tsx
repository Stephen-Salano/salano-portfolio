import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard, type ProjectData } from "@/components/ProjectCard";

const PROJECTS: ProjectData[] = [
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
    tech: ["Java", "Spring Boot", "Neo4j", "RabbitMQ", "Apache Tika", "FFMPEG", "Docker", "Spring AI"],
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

export default function Work() {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20 pb-32">
      <header className="mb-20 max-w-3xl">
        <div className="font-mono text-primary text-sm mb-5">
          // Selected Work
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
          Systems I've built.
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
          Production systems and open-source tools. Each project includes architecture decisions and technical tradeoffs.
        </p>
      </header>

      <section className="mb-24">
        <SectionHeader title="All Work" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.slice(0, 2).map((project, i) => (
            <ProjectCard key={i} project={project} className="h-full" />
          ))}
          <div className="md:max-w-[calc(50%-10px)]">
            <ProjectCard project={PROJECTS[2]} className="h-full" />
          </div>
        </div>
      </section>

      <section>
        <SectionHeader title="GitHub" />
        <div className="p-6 md:p-8 border border-border bg-card rounded-xl max-w-2xl">
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            I have additional projects and contributions on GitHub. Some are private or still in development. Public work can be found at the link below.
          </p>
          <a 
            href="https://github.com/Stephen-Salano" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center font-mono text-sm text-primary hover:underline underline-offset-4 transition-colors"
          >
            github.com/Stephen-Salano →
          </a>
        </div>
      </section>
    </div>
  );
}
