import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import gemIcon from "@/assets/favicon-gem.png";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { Menu, X, Phone } from "lucide-react"; // Using Lucide React icons for a better look

const navItems = [
  { to: "/", label: "خانه" },
  { to: "/catalog", label: "سنگ‌های خام" },
  { to: "/about", label: "درباره ما" },
  { to: "/contact", label: "تماس" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  
  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled 
          ? "bg-background/90 backdrop-blur-lg shadow-md border-b border-border/50" 
          : "bg-background/70 backdrop-blur-md border-b border-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <img 
              src={gemIcon} 
              alt="لوگو" 
              className="h-8 w-8 transition-transform duration-300 group-hover:rotate-12" 
            />
            <div className="absolute inset-0 rounded-full bg-accent/20 blur-md scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span className="font-extrabold tracking-tight text-gradient text-lg">
            {siteConfig.name}
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-200",
                  isActive 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                )
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 w-6 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent -translate-x-1/2 rounded-full"></span>
                  )}
                </>
              )}
            </NavLink>
          ))}
          
          <div className="flex items-center gap-3 mr-2">
            <ThemeToggle />
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              <Phone className="h-4 w-4" />
              <span>{siteConfig.phone}</span>
            </a>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/90 backdrop-blur-lg animate-in slide-in-from-top-10 duration-300">
          <div className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "flex items-center rounded-lg px-3 py-3 text-sm font-medium transition-colors",
                    isActive 
                      ? "bg-accent/50 text-foreground" 
                      : "text-muted-foreground hover:bg-accent/30 hover:text-foreground"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="flex items-center justify-between mt-2 pt-3 border-t border-border/50">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-2 text-sm font-medium text-primary"
              >
                <Phone className="h-4 w-4" />
                <span>{siteConfig.phone}</span>
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}