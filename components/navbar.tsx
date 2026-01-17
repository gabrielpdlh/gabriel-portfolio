"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "/", external: false },
  { name: "About", href: "/about", external: false },
  { name: "Resume", href: "/Currículo-Gabriel-Padilha-Desenvolvedor(1).pdf", external: true },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-4">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mx-auto max-w-5xl"
      >
        <div className="relative rounded-2xl border border-border/20 bg-background/50 backdrop-blur-xl shadow-lg shadow-black/5">
          {/* Content */}
          <div className="px-4 sm:px-6">
            <div className="flex h-14 sm:h-16 items-center justify-between">
              {/* Logo/Brand */}
              <Link 
                href="/" 
                className="flex items-center space-x-2 group"
              >
                <span className="font-asgard text-xl font-bold tracking-tight transition-colors group-hover:text-primary/80">
                  GP
                </span>
              </Link>

              {/* Navigation Links */}
              <div className="flex items-center space-x-1 sm:space-x-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className={cn(
                        "relative px-3 py-2 text-sm font-medium transition-colors rounded-lg",
                        "hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:bg-accent/50"
                      )}
                    >
                      {item.name}
                      
                      {/* Active indicator */}
                      {isActive && (
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-foreground" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
