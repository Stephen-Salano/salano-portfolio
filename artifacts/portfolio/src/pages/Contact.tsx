import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      inquiry: (form.elements.namedItem("inquiry") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      honeypot: (form.elements.namedItem("honeypot") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("https://api.sirlano.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setError(json.error || "Something went wrong. Try again.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="page-title-block">
        <div className="page-label">// contact</div>
        <h1 className="page-title">Open a conversation.</h1>
      </div>

      <div className="contact-grid">
        <div>
          {submitted ? (
            <div className="success-msg">
              <h3>Message sent.</h3>
              <p>I'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Honeypot - hidden from humans */}
              <input
                type="text"
                name="honeypot"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <label className="form-label" htmlFor="name">Name</label>
              <input className="form-input" type="text" id="name" name="name" required />

              <label className="form-label" htmlFor="email">Email</label>
              <input className="form-input" type="email" id="email" name="email" required />

              <label className="form-label" htmlFor="inquiry">Inquiry Type</label>
              <select className="form-select" id="inquiry" name="inquiry">
                <option value="General Inquiry">General Inquiry</option>
                <option value="Full-Time Role">Full-Time Role</option>
                <option value="Contract Work">Contract Work</option>
                <option value="Collaboration">Collaboration</option>
              </select>

              <label className="form-label" htmlFor="message">Message</label>
              <textarea className="form-textarea" id="message" name="message" required />

              {error && (
                <p style={{ color: "var(--destructive)", fontSize: "13px", marginBottom: "8px" }}>
                  {error}
                </p>
              )}

              <button type="submit" className="btn-submit" disabled={loading}>
                {loading ? "Sending..." : "Send message →"}
              </button>
            </form>
          )}
        </div>

        <div className="contact-divider" />

        <div>
          <div className="section-label">// open-to</div>
          <ul className="open-to-list">
            <li>Full-stack engineering roles</li>
            <li>Backend systems contracts</li>
            <li>Technical co-founder conversations</li>
            <li>Open source collaboration</li>
          </ul>
          <a href="mailto:hello@sirlano.com" className="contact-email">
            hello@sirlano.com
          </a>
        </div>
      </div>
    </>
  );
}
