import { Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-secondary/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl text-foreground">
              Inkblot
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-secondary transition-colors">About</a>
            <a href="#" className="hover:text-secondary transition-colors">Privacy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms</a>
            <a href="#" className="hover:text-secondary transition-colors">Contact</a>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary/40 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary/40 transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-secondary/10 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Inkblot. All rights reserved.</p>
          <p className="mt-2 text-xs text-muted-foreground/60">
            Your guilty pleasure, beautifully packaged.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
