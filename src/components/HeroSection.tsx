import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import WaitlistDialog from "./WaitlistDialog";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Atmospheric reading scene"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      </div>

      {/* Texture Overlay */}
      <div className="absolute inset-0 texture-noise" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Tagline */}
          <p 
            className="text-secondary tracking-[0.3em] uppercase text-sm font-medium opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Augmented Reality for Romance Readers
          </p>

          {/* Main Headline */}
          <h1 
            className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight tracking-tight opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Read Deeper,
            <br />
            <span className="italic text-secondary">Feel More.</span>
          </h1>

          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            Experience indie romance like never before. Curated books delivered with scents, 
            objects, playlists, and secret scenes — a velvet, slow-burn reading ritual.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <WaitlistDialog>
              <Button variant="hero" size="xl" className="group w-full sm:w-auto min-w-[220px]">
                Join the Waitlist
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </WaitlistDialog>
            <Button 
              variant="outline" 
              size="xl" 
              className="w-full sm:w-auto min-w-[220px]"
              onClick={() => {
                document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore the Experience
            </Button>
          </div>

          {/* Trust Badge */}
          <p 
            className="text-sm text-secondary/60 pt-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            Discreet packaging · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
