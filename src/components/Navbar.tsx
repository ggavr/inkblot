import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import WaitlistDialog from "./WaitlistDialog";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: "Experience", href: "#experience" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-background/90 backdrop-blur-md border-b border-secondary/10" 
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="/" 
          className="font-display text-2xl text-foreground hover:text-secondary transition-colors"
          aria-label="Inkblot Home"
        >
          Inkblot
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-secondary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <WaitlistDialog>
            <Button variant="velvet" size="sm">
              Join Waitlist
            </Button>
          </WaitlistDialog>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 bottom-0 bg-background/95 backdrop-blur-md border-t border-secondary/10 transition-all duration-300 overflow-y-auto",
          isMobileMenuOpen 
            ? "opacity-100 visible translate-y-0" 
            : "opacity-0 invisible translate-y-4"
        )}
        style={{ top: '4rem' }} /* Match h-16 navbar height */
      >
        <div className="px-6 py-6 space-y-2 flex flex-col h-full">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="block text-xl font-medium text-foreground hover:text-secondary transition-colors py-4 border-b border-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-6 mt-auto pb-safe">
            <WaitlistDialog>
              <Button variant="velvet" className="w-full h-12 text-lg">
                Join Waitlist
              </Button>
            </WaitlistDialog>
            {/* Extra padding for devices with home indicator */}
            <div className="h-6" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
