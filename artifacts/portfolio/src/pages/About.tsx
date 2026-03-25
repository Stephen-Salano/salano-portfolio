import { Github, Linkedin, Mail } from "lucide-react";

export default function About() {
  return (
    <>
      <div className="page-title-block">
        <div className="page-label">// about</div>
        <h1 className="page-title">The engineer behind the code.</h1>
      </div>

      <div className="about-content">

        <div className="about-section">
          <div className="section-label">// background</div>
          <p>
            I'm a full-stack engineer based in Nairobi, Kenya, with a focus on backend systems and platform architecture.
            I studied Computer Science at the Catholic University of Eastern Africa, where I developed a strong foundation
            in systems thinking and software design.
          </p>
          <p>
            Currently serving as CTO at Axiss Innovators, I lead the technical direction of Psyllabus — a multi-tenant
            school management platform I've been building from the ground up. Java and Spring Boot are my primary tools
            for production work, though I move across the stack when the problem requires it.
          </p>
        </div>

        <div className="about-section">
          <div className="section-label">// approach</div>
          <div className="code-block">{`/**
 * Build for reliability, not just speed.
 * Design for the engineer who maintains it next.
 * Understand the system before optimising it.
 * Ship working software, then make it excellent.
 */`}</div>
        </div>

        <div className="about-section">
          <div className="section-label">// education</div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "var(--text-secondary)", lineHeight: "1.7" }}>
            BSc Computer Science — Catholic University of Eastern Africa. Currently completing final requirements.
          </p>
        </div>

        <div className="about-section">
          <div className="section-label">// elsewhere</div>
          <div className="elsewhere-links">
            <a href="https://github.com/Stephen-Salano" target="_blank" rel="noreferrer">
              <Github size={16} /> GitHub
            </a>
            <a href="https://linkedin.com/in/stephen-salano" target="_blank" rel="noreferrer">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href="mailto:hello@sirlano.com">
              <Mail size={16} /> Email
            </a>
          </div>
        </div>

      </div>
    </>
  );
}
