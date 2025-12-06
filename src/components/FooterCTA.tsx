import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WaitlistDialog from "./WaitlistDialog";

const FooterCTA = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-alt/50 to-background" />
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
          Ready to Read
          <br />
          <span className="italic text-secondary">Differently?</span>
        </h2>
        
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          Join hundreds of readers who have discovered 
          the joy of immersive, intentional reading. Your velvet theater awaits.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <WaitlistDialog>
            <Button variant="hero" size="xl" className="group w-full sm:w-auto min-w-[220px]">
              Join the Waitlist
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </WaitlistDialog>
          <Button variant="outline" size="xl" className="w-full sm:w-auto min-w-[220px]">
            Gift a Subscription
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
