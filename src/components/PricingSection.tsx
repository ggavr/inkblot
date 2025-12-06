import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import WaitlistDialog from "./WaitlistDialog";

const PricingSection = () => {
  const features = [
    "Curated indie romance books",
    "Signature scents & objects",
    "Curated playlists for each book",
    "Exclusive author content",
    "Private community access",
    "Discreet, beautiful packaging"
  ];

  return (
    <section className="py-24 md:py-32 bg-background-alt/30 relative">
      <div className="absolute inset-0 texture-noise" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-secondary tracking-[0.25em] uppercase text-sm font-medium mb-4">
            Membership
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Your Reading <span className="italic text-secondary">Ritual</span> Awaits
          </h2>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="card-inkblot p-8 md:p-10 border-secondary/30">
            {/* Badge */}
            <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6 border border-primary/30">
              Most Popular
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-5xl text-foreground">£29</span>
                <span className="text-muted-foreground">/3 months</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Billed quarterly
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              {features.map(feature => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-success" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <WaitlistDialog>
              <Button variant="velvet" size="xl" className="w-full">
                Start Your Journey
              </Button>
            </WaitlistDialog>

            <p className="text-center text-sm text-muted-foreground mt-4">
              Cancel anytime • Pause whenever you need
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
