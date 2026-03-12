export default function Writing() {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-12 py-20 pb-32">
      <header className="mb-24">
        <div className="font-mono text-primary text-sm mb-6">
          // Writing
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-8">
          Thinking in public.
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Technical essays on backend systems, distributed architecture, and the engineering decisions that matter in production.
        </p>
      </header>

      <div className="space-y-6">
        {/* Placeholder Article Row */}
        <div className="group flex flex-col sm:flex-row justify-between sm:items-center p-8 border border-border/40 rounded-xl bg-card/20 opacity-50 grayscale cursor-not-allowed transition-all">
          <div className="mb-4 sm:mb-0 max-w-xl">
            <h2 className="text-xl font-medium text-foreground mb-2">
              First article coming soon — currently writing.
            </h2>
            <p className="text-muted-foreground line-clamp-2">
              Deep dives into systems architecture, JVM tuning, and lessons learned from scaling fintech infrastructure.
            </p>
          </div>
          <div className="flex sm:flex-col items-center sm:items-end justify-between gap-4 font-mono text-sm text-muted-foreground shrink-0">
            <span>2026</span>
            <span>— min read</span>
          </div>
        </div>
      </div>
    </div>
  );
}
