import { Github, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    status: "private",
    name: "Psyllabus",
    tag: "Java · Spring Boot · React · PostgreSQL",
    desc: "Multi-tenant school management platform built for Axiss Innovators. Covers academic records, multi-branch management, JWT authentication with role-based access, attendance, grading, assessment, student lifecycle, and subscription management. The platform is built as a Spring Boot monolith with clearly bounded service layers, designed for eventual extraction into microservices.",
    pills: ["Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "React", "Docker", "Maven"],
    bottom: (
      <span>Private repository — frontend preview available on request</span>
    ),
  },
  {
    status: "open",
    name: "File Flow API",
    tag: "Java · Spring Boot · REST API",
    desc: "A RESTful API for file management operations, handling upload, storage reference, and retrieval workflows. Built to be embedded in larger backend systems as a file-handling service layer.",
    pills: ["Java", "Spring Boot", "REST API", "Maven"],
    bottom: (
      <a href="https://github.com/Stephen-Salano" target="_blank" rel="noreferrer">
        <Github size={14} /> View on GitHub
      </a>
    ),
  },
  {
    status: "open",
    name: "Courigistics Backend",
    tag: "Java · Spring Boot · MySQL",
    desc: "Backend service for a courier and logistics management platform. Handles order creation, status tracking, route assignment, and delivery confirmation workflows via a clean REST API.",
    pills: ["Java", "Spring Boot", "MySQL", "Maven"],
    bottom: (
      <a href="https://github.com/Stephen-Salano" target="_blank" rel="noreferrer">
        <Github size={14} /> View on GitHub
      </a>
    ),
  },
];

export default function Work() {
  return (
    <>
      <div className="page-title-block">
        <div className="page-label">// work</div>
        <h1 className="page-title">Things I've shipped.</h1>
      </div>

      <div className="page-body">
        <div className="cards-grid" style={{ paddingTop: "8px" }}>
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
              <div className="card-pills">
                {p.pills.map(pill => <span key={pill} className="tech-pill">{pill}</span>)}
              </div>
              <div className="card-bottom">{p.bottom}</div>
            </div>
          ))}
        </div>

        <div className="oss-block">
          <div className="section-label">// open-source</div>
          <p>All public work is on GitHub.</p>
          <a href="https://github.com/Stephen-Salano" target="_blank" rel="noreferrer">
            View repositories → <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </>
  );
}
