import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20 pb-32">
      <header className="mb-20 max-w-2xl">
        <div className="font-mono text-primary text-sm mb-6">
          // Contact
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
          Get in touch.
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Open to full-time engineering roles, contract work, and technical consulting.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Column: Info */}
        <div className="space-y-16">
          <section>
            <h2 className="font-mono text-primary text-sm font-bold mb-6">OPEN TO</h2>
            <ul className="space-y-3">
              {[
                "Full-time engineering roles",
                "Contract and freelance work",
                "Technical consulting",
                "Open-source collaboration"
              ].map((item, i) => (
                <li key={i} className="text-muted-foreground flex items-center text-lg">
                  <span className="text-border mr-4 font-mono">-</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-mono text-primary text-sm font-bold mb-6">REACH ME DIRECTLY</h2>
            <div className="space-y-4 text-lg text-muted-foreground font-mono">
              <p>Email: <a href="mailto:hello@stephensalano.dev" className="text-foreground hover:text-primary transition-colors">hello@stephensalano.dev</a></p>
              <p>LinkedIn: <a href="#" className="text-foreground hover:text-primary transition-colors">linkedin.com/in/stephensalano</a></p>
              <p>GitHub: <a href="#" className="text-foreground hover:text-primary transition-colors">github.com/stephensalano</a></p>
            </div>
          </section>
        </div>

        {/* Right Column: Form */}
        <div className="bg-card border border-border p-8 md:p-10 rounded-2xl shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          
          {isSuccess ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20 relative z-10">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Message sent.</h3>
              <p className="text-muted-foreground font-mono">I'll be in touch soon.</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-10 text-sm font-mono text-primary hover:underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-muted-foreground mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-mono text-muted-foreground mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-mono text-muted-foreground mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-mono text-muted-foreground mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-y"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-8 py-4 text-sm font-bold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
              >
                {isSubmitting ? "Sending..." : (
                  <>Send message <ArrowRight className="ml-2 w-4 h-4" /></>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
