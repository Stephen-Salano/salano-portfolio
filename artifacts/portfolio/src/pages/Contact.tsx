import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className="page-title-block">
        <div className="page-label">// contact</div>
        <h1 className="page-title">Open a conversation.</h1>
      </div>

      <div className="contact-grid">
        {/* Form */}
        <div>
          {submitted ? (
            <div className="success-msg">
              <h3>Message sent.</h3>
              <p>I'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label className="form-label" htmlFor="name">Name</label>
              <input className="form-input" type="text" id="name" required />

              <label className="form-label" htmlFor="email">Email</label>
              <input className="form-input" type="email" id="email" required />

              <label className="form-label" htmlFor="inquiry">Inquiry Type</label>
              <select className="form-select" id="inquiry">
                <option value="general">General Inquiry</option>
                <option value="fulltime">Full-Time Role</option>
                <option value="contract">Contract Work</option>
                <option value="collab">Collaboration</option>
              </select>

              <label className="form-label" htmlFor="message">Message</label>
              <textarea className="form-textarea" id="message" required />

              <button type="submit" className="btn-submit">Send message →</button>
            </form>
          )}
        </div>

        {/* Divider */}
        <div className="contact-divider" />

        {/* Info */}
        <div>
          <div className="section-label">// open-to</div>
          <ul className="open-to-list">
            <li>Full-stack engineering roles</li>
            <li>Backend systems contracts</li>
            <li>Technical co-founder conversations</li>
            <li>Open source collaboration</li>
          </ul>
          <a href="mailto:contact@stephensalano.dev" className="contact-email">
            contact@stephensalano.dev
          </a>
        </div>
      </div>
    </>
  );
}
