import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  className?: string;
}

export function SectionHeader({ title, className }: SectionHeaderProps) {
  return (
    <div className={cn("font-mono text-muted-foreground flex items-center mb-8 sm:mb-12", className)}>
      <span className="text-primary mr-3">//</span>
      <h2 className="text-lg uppercase tracking-wider">{title}</h2>
      <span className="ml-4 text-border flex-grow">――――――――――――――――――――――――――――――――</span>
    </div>
  );
}
