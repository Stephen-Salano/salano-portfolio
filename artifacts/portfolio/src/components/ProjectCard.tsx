import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProjectData {
  title: string;
  description: string;
  tech: string[];
  comment: string;
  github: string;
  githubPrivate?: boolean;
}

export function ProjectCard({ project, className }: { project: ProjectData, className?: string }) {
  return (
    <div className={cn("group flex flex-col bg-card border border-border rounded-xl p-6 sm:p-8 hover:border-primary/50 transition-colors duration-300 relative overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="flex justify-between items-start mb-4 relative z-10">
        <h3 className="font-mono text-lg font-bold text-foreground group-hover:text-primary transition-colors pr-4">{project.title}</h3>
        {!project.githubPrivate && (
          <a 
            href={project.github} 
            target="_blank" 
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors shrink-0"
            aria-label={`View ${project.title} on GitHub`}
          >
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        )}
        {project.githubPrivate && (
          <ArrowUpRight className="w-5 h-5 text-muted-foreground/30 shrink-0" />
        )}
      </div>
      
      <p className="text-muted-foreground mb-6 flex-grow leading-relaxed relative z-10 text-sm">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6 relative z-10">
        {project.tech.map(t => (
          <span key={t} className="text-xs font-mono px-2.5 py-1 bg-muted rounded text-muted-foreground border border-border/50">
            {t}
          </span>
        ))}
      </div>
      
      <div className="mt-auto pt-4 border-t border-border/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 relative z-10">
        <span className="font-mono text-xs text-primary">
          {project.comment}
        </span>
        <div className="flex flex-col items-start sm:items-end shrink-0">
          {project.githubPrivate ? (
            <>
              <span className="text-sm font-medium text-muted-foreground">View on GitHub →</span>
              <span className="text-xs font-mono text-muted-foreground/50">(private repo)</span>
            </>
          ) : (
            <a 
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap"
            >
              View on GitHub →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
