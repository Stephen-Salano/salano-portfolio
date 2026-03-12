export default function Writing() {
  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-12 py-20 pb-32">
      <header className="mb-20">
        <div className="font-mono text-primary text-sm mb-5">
          // Writing
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
          Thinking in public.
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
          Technical essays on backend systems, distributed architecture, and the engineering decisions that matter in production.
        </p>
      </header>

      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between sm:items-start p-6 border border-border/30 rounded-xl bg-card/20 opacity-50 cursor-not-allowed">
          <div className="mb-4 sm:mb-0 sm:mr-8">
            <h2 className="text-sm font-medium text-muted-foreground">
              First article coming soon — currently writing.
            </h2>
          </div>
          <div className="flex sm:flex-col items-center sm:items-end gap-4 font-mono text-xs text-muted-foreground shrink-0">
            <span>2026</span>
            <span>— min read</span>
          </div>
        </div>
      </div>
    </div>
  );
}
