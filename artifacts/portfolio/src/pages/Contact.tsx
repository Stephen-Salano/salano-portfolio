import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-12 py-20 pb-32">
      <header className="mb-16 max-w-2xl">
        <div className="font-mono text-primary text-sm mb-5">
          // Contact
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-5">
          Get in touch.
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          Open to full-time engineering roles, contract work, and technical consulting.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-12 lg:gap-16">
        
        {/* Left Column */}
        <div className="space-y-12">
          <section>
            <h2 className="font-mono text-primary text-xs font-bold mb-5 tracking-widest">OPEN TO</h2>
            <ul className="space-y-3">
              {[
                "Full-time engineering roles",
                "Contract and freelance work",
                "Technical consulting",
                "Open-source collaboration"
              ].map((item, i) => (
                <li key={i} className="text-muted-foreground flex items-center text-sm">
                  <span className="text-primary mr-4 font-mono">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-mono text-primary text-xs font-bold mb-5 tracking-widest">REACH ME DIRECTLY</h2>
            <div className="space-y-3 text-sm text-muted-foreground font-mono">
              <p>GitHub — <a href="https://github.com/Stephen-Salano" target="_blank" rel="noreferrer" className="text-foreground hover:text-primary transition-colors">github.com/Stephen-Salano</a></p>
              <p>LinkedIn — <a href="https://linkedin.com/in/stephen-salano" target="_blank" rel="noreferrer" className="text-foreground hover:text-primary transition-colors">linkedin.com/in/stephen-salano</a></p>
              <p>Email — <a href="mailto:contact@stephensalano.dev" className="text-foreground hover:text-primary transition-colors">contact@stephensalano.dev</a></p>
            </div>
          </section>
        </div>

        {/* Vertical Divider */}
        <div className="hidden lg:block bg-primary/30 w-px self-stretch" />

        {/* Right Column: Form */}
        <div className="bg-card border border-border p-7 md:p-8 rounded-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          
          {isSuccess ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16 relative z-10">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                <CheckCircle2 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Message sent.</h3>
              <p className="text-muted-foreground font-mono text-sm">I'll be in touch soon.</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-8 text-xs font-mono text-primary hover:underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-muted-foreground mb-2">Name</label>
                <input 
                  type="text" id="name" required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-mono text-muted-foreground mb-2">Email</label>
                <input 
                  type="email" id="email" required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-muted-foreground mb-2">Subject</label>
                <input 
                  type="text" id="subject" required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-muted-foreground mb-2">Message</label>
                <textarea 
                  id="message" rows={5} required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-y"
                />
              </div>
              <button 
                type="submit" disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
              >
                {isSubmitting ? "Sending..." : <>Send message <ArrowRight className="ml-2 w-4 h-4" /></>}
              </button>

              <div className="mt-4 border border-primary/30 rounded-lg p-4 bg-primary/5">
                <div className="font-mono text-xs text-primary mb-1">/* Availability */</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Currently leading development at Axiss Innovators. Open to the right opportunity.
                </p>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
