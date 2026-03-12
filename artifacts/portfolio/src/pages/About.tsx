export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-12 py-20 pb-32">
      <header className="mb-20">
        <div className="font-mono text-primary text-sm mb-6">
          // About
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-8">
          Stephen Salano.
        </h1>
      </header>

      <div className="space-y-16 prose prose-invert prose-lg max-w-none prose-p:text-muted-foreground prose-p:leading-relaxed">
        
        <section>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">Overview</h2>
          <p>
            Full-stack engineer and CTO based in Nairobi, Kenya. I specialise in building scalable, event-driven backend systems using Java and the Spring ecosystem — from multi-tenant SaaS platforms to AI-powered analytics pipelines. Currently serving as CTO at Lendstack Africa, where I lead a team of 12 engineers building fintech infrastructure for East African markets.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">Background</h2>
          <p>
            I started engineering as a self-taught developer, picking up Java and web fundamentals through building side projects. My career has moved through embedded product work at Andela, payment infrastructure at Cellulant, and into a CTO role at a fintech startup. Each step has been defined by the systems I had to build and the scale I had to reason about. 
          </p>
          <p>
            I'm drawn to backend complexity — distributed systems, event-driven architecture, and the kind of performance work that requires you to actually understand what the machine is doing.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">Approach</h2>
          <p>
            I think good software engineering is mostly about clear problem modelling. If the domain is well understood, the code usually follows. I write architecture docs before I write code. I draw sequence diagrams when things get complicated. I review pull requests like I'm the one who'll be on-call at 2am. 
          </p>
          <p>
            I care about correctness before performance, and performance before elegance — in that order.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">Currently</h2>
          <p>
            Based in Nairobi. Building Lendstack. Reading about distributed systems. Occasionally writing. Open to conversations about interesting engineering problems, full-time roles, and technical consulting.
          </p>
        </section>

      </div>
    </div>
  );
}
