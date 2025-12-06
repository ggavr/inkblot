import { Lock, Users, MessageCircleHeart } from "lucide-react";
import { Button } from "@/components/ui/button";

const CommunitySection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Icon */}
        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-background-alt border border-secondary/30 flex items-center justify-center">
          <Lock className="w-8 h-8 text-secondary" />
        </div>

        {/* Content */}
        <p className="text-secondary tracking-[0.25em] uppercase text-sm font-medium mb-4">
          The Inner Circle
        </p>
        
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
          A <span className="italic text-secondary">Safe Space</span> for Readers
        </h2>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Join a private community where guilty pleasures are celebrated, not judged. 
          Discuss tropes, share recommendations, and connect with readers who understand 
          the magic of a perfectly slow burn.
        </p>

        {/* Features */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Users className="w-5 h-5 text-secondary" />
            <span>Private Discord</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-secondary/30" />
          <div className="flex items-center gap-3 text-muted-foreground">
            <MessageCircleHeart className="w-5 h-5 text-secondary" />
            <span>Book Clubs</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-secondary/30" />
          <div className="flex items-center gap-3 text-muted-foreground">
            <Lock className="w-5 h-5 text-secondary" />
            <span>Author AMAs</span>
          </div>
        </div>

        <Button variant="outline" size="lg" asChild>
          <a 
            href="https://discord.com/channels/1442556988163751970/1442559941918326939" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Join the Community
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CommunitySection;
