import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProjectData {
  title: string;
  description: string;
  tech: string[];
  comment: string;
  github: string;
}

export function ProjectCard({ project, className }: { project: ProjectData, className?: string }) {
  return (
    <div className={cn("group flex flex-col bg-card border border-border rounded-xl p-6 sm:p-8 hover:border-primary/50 transition-colors duration-300 relative overflow-hidden", className)}>
      {/* Subtle hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="flex justify-between items-start mb-4 relative z-10">
        <h3 className="font-mono text-xl font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
        <a 
          href={project.github} 
          target="_blank" 
          rel="noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label={`View ${project.title} on GitHub`}
        >
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
      
      <p className="text-muted-foreground mb-6 flex-grow leading-relaxed relative z-10">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6 relative z-10">
        {project.tech.map(t => (
          <span key={t} className="text-xs font-mono px-2.5 py-1 bg-muted rounded text-muted-foreground border border-border/50">
            {t}
          </span>
        ))}
      </div>
      
      <div className="mt-auto pt-4 border-t border-border/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative z-10">
        <span className="font-mono text-sm text-primary">
          {project.comment}
        </span>
        <a 
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
}
