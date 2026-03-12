import { Github } from "lucide-react";

type PageKey = "Home.md" | "Work.md" | "About.md" | "Contact.md" | "Articles.md";

interface HomeProps {
  navigate: (page: PageKey) => void;
}

const EXPERIENCE = [
  {
    date: "2025 — Present",
    role: "CTO & Senior Full-Stack Engineer · Axiss Innovators",
    bullets: [
      "Architecting the Psyllabus platform — a multi-tenant SaaS system for school management",
      "Designing and implementing JWT-based authentication with role-based access control",
      "Leading technical decisions across backend, infrastructure, and frontend systems",
    ],
    pills: ["Java", "Spring Boot", "PostgreSQL", "React", "Docker"],
  },
  {
    date: "Oct 2025 — Dec 2025, Contract",
    role: "IT Systems Administrator · SportPesa Kenya",
    bullets: [
      "Managed and maintained internal IT infrastructure and systems",
      "Provided technical support and ensured uptime of business-critical systems",
    ],
    pills: ["Linux", "Networking", "Systems Administration"],
  },
  {
    date: "Jun 2022 — Jan 2023",
    role: "Back-end Engineer · AfyaRekod",
    bullets: [
      "Built and maintained RESTful APIs for a health records management platform",
      "Implemented secure data access patterns and backend service integrations",
    ],
    pills: ["Java", "Spring Boot", "REST APIs", "MySQL"],
  },
];

const STACK = [
  {
    title: "Backend",
    items: ["Java", "Spring Boot", "Spring Security", "JPA / Hibernate", "REST APIs", "JWT Authentication", "Maven"],
  },
  {
    title: "Frontend",
    items: ["React", "TypeScript", "HTML / CSS", "Tailwind CSS"],
  },
  {
    title: "Infrastructure",
    items: ["Docker", "PostgreSQL", "MySQL", "Vercel", "Git"],
  },
  {
    title: "Tools",
    items: ["IntelliJ IDEA", "Postman", "GitHub", "Linux"],
  },
];

const PROJECTS = [
  {
    status: "private",
    name: "Psyllabus",
    tag: "Java · Spring Boot · React · PostgreSQL",
    desc: "Multi-tenant school management platform built for Axiss Innovators. Handles academic records, authentication, attendance, grading, and student lifecycle management.",
    bottom: <span>Frontend preview available on request</span>,
  },
  {
    status: "open",
    name: "File Flow API",
    tag: "Java · Spring Boot · REST API",
    desc: "A RESTful API for file management operations. Built for handling file upload, storage, and retrieval workflows in backend systems.",
    bottom: (
      <a href="https://github.com/Stephen-Salano" target="_blank" rel="noreferrer">
        <Github size={14} /> github.com/Stephen-Salano
      </a>
    ),
  },
  {
    status: "open",
    name: "Courigistics Backend",
    tag: "Java · Spring Boot · MySQL",
    desc: "Backend service for a logistics and courier management system. Covers order tracking, route management, and delivery status workflows.",
    bottom: (
      <a href="https://github.com/Stephen-Salano" target="_blank" rel="noreferrer">
        <Github size={14} /> github.com/Stephen-Salano
      </a>
    ),
  },
];

export default function Home({ navigate }: HomeProps) {
  return (
    <>
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="hero-comment">// hello-world</div>
          <div className="hero-name">STEPHEN&nbsp;&nbsp;SALANO</div>
          <h1 className="hero-title">Full-Stack Engineer &amp; CTO.</h1>
          <div className="hero-pill">/* SaaS — Salano as a Service */</div>
          <p className="hero-bio">
            Currently CTO at Axiss Innovators, where I'm building Psyllabus — a multi-tenant school management platform.
            Based in Nairobi. I write Java for production and think in systems.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => navigate("Work.md")}>
              View my work →
            </button>
            <button className="btn-ghost" onClick={() => navigate("Contact.md")}>
              Get in touch →
            </button>
          </div>
        </div>
      </section>

      <div className="content-inner">
        {/* Experience */}
        <section className="section-block">
          <div className="section-label">// experience</div>
          <div className="exp-list">
            {EXPERIENCE.map((e, i) => (
              <div key={i} className="exp-entry">
                <div className="exp-date">{e.date}</div>
                <div className="exp-role">{e.role}</div>
                <ul className="exp-bullets">
                  {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
                <div className="exp-pills">
                  {e.pills.map(p => <span key={p} className="tech-pill">{p}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section className="section-block">
          <div className="section-label">// stack</div>
          <div className="stack-grid">
            {STACK.map(col => (
              <div key={col.title}>
                <div className="stack-col-title">{col.title}</div>
                {col.items.map(item => (
                  <div key={item} className="stack-item">
                    <span className="stack-arrow">&gt;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Work */}
        <section className="section-block">
          <div className="section-label">// work</div>
          <div className="cards-grid">
            {PROJECTS.map((p, i) => (
              <div key={i} className="project-card">
                <div className="card-status-row">
                  <span className={`status-pill ${p.status === "open" ? "open" : "private"}`}>
                    {p.status === "open" ? "Open Source" : "Private"}
                  </span>
                </div>
                <div className="card-name">{p.name}</div>
                <div className="card-tech-tag">{p.tag}</div>
                <p className="card-desc">{p.desc}</p>
                <div className="card-bottom">{p.bottom}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA */}
      <div className="cta-block">
        <div className="cta-comment">/* let's build something */</div>
        <div className="cta-heading">Available for the right opportunity.</div>
        <a href="mailto:contact@stephensalano.dev" className="cta-email">
          contact@stephensalano.dev
        </a>
        <button className="btn-ghost" onClick={() => navigate("Contact.md")}>
          Open a conversation →
        </button>
      </div>
    </>
  );
}
