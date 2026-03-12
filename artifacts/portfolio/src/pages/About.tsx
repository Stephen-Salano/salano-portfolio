export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-12 py-20 pb-32">
      <header className="mb-16">
        <div className="font-mono text-primary text-sm mb-5">
          // About
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Stephen Salano.
        </h1>
      </header>

      <div className="space-y-14">
        
        <section>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground/70 mb-5">Overview</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Full-stack engineer and CTO based in Nairobi, Kenya. I specialise in building scalable, event-driven backend systems using Java and the Spring ecosystem — from multi-tenant SaaS platforms to AI-powered analytics pipelines. Currently serving as CTO at Axiss Innovators, leading architecture of a production school management platform serving Kenyan institutions.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground/70 mb-5">Professional Experience</h2>
          <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
            <p>
              At Axiss Innovators (2025–present), I lead the architecture and development of a multi-tenant school management SaaS. The platform handles CBC grading, subscription-based access tiers, AI-powered analytics for administrators and teachers, and event-driven reporting pipelines built on RabbitMQ, Redis, and PostgreSQL.
            </p>
            <p>
              At Sportpesa Kenya (Oct–Dec 2025, contract), I engineered monitoring solutions using the ELK Stack for automated real-time error detection across production and disaster recovery environments. I also contributed to deployment pipeline improvements and internal documentation.
            </p>
            <p>
              At AfyaRekod (Jun 2022–Jan 2023), I built real-time patient data APIs for a Universal Patient Portal using Java, Kotlin, and Spring Boot. I contributed to database schema design, third-party healthcare API integration, and microservices architecture documentation.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground/70 mb-5">Philosophy</h2>
          <div className="bg-card border border-border rounded-xl p-6 font-mono text-sm space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-primary shrink-0">//</span>
              <span className="text-muted-foreground">Build for reliability, not just speed</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary shrink-0">//</span>
              <span className="text-muted-foreground">Design systems that scale from day one</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary shrink-0">//</span>
              <span className="text-muted-foreground">Measure impact, not just output</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary shrink-0">//</span>
              <span className="text-muted-foreground">Document decisions, not just code</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground/70 mb-5">Education</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            BSc Computer Science — Catholic University of Eastern Africa
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground/70 mb-3">Location</h2>
          <p className="text-base text-muted-foreground">Based in Nairobi, Kenya.</p>
        </section>

      </div>
    </div>
  );
}
