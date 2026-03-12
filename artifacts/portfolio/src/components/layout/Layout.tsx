import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-background flex flex-col selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* We use location as key so framer-motion re-animates on route change */}
        <motion.div
          key={location}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="h-full"
        >
          {children}
        </motion.div>
      </main>
      <footer className="py-8 border-t border-border mt-20 text-center text-sm font-mono text-muted-foreground">
        <p>/* © {new Date().getFullYear()} Stephen Salano. All rights reserved. */</p>
      </footer>
    </div>
  );
}
