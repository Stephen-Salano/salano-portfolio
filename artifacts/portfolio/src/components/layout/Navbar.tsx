import { Link, useRoute } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/writing", label: "Writing" },
];

function NavItem({ href, label, onClick }: { href: string, label: string, onClick?: () => void }) {
  const [isActive] = useRoute(href);
  
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        isActive ? "text-primary" : "text-muted-foreground"
      )}
    >
      {label}
    </Link>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled ? "bg-background/80 backdrop-blur-md border-primary/20 py-4 shadow-sm shadow-black/20" : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="font-mono text-primary font-bold text-lg hover:opacity-80 transition-opacity">
          &lt;salano /&gt;
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <NavItem key={link.href} {...link} />
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-foreground p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-6 shadow-xl">
          {NAV_LINKS.map(link => (
            <NavItem 
              key={link.href} 
              {...link} 
              onClick={() => setIsMobileMenuOpen(false)}
            />
          ))}
        </div>
      )}
      
      {/* Always visible thin green border at the very bottom of the header structure */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-primary/30" />
    </header>
  );
}
