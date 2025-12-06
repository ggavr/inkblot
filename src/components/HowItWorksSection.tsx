import { Package, BookOpenCheck, Sparkles, Heart } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: Heart,
      title: "Choose Your Experience",
      description: "Select your preferred tropes, heat level, and reading pace. We match you with stories that resonate."
    },
    {
      number: "02",
      icon: Package,
      title: "Receive Your Box",
      description: "Your immersive reading kit arrives discreetly — book, scents, objects, and ritual instructions."
    },
    {
      number: "03",
      icon: Sparkles,
      title: "Read with Rituals",
      description: "Light the candle. Open the playlist. Use the prompts. Transform reading into a sensory journey."
    },
    {
      number: "04",
      icon: BookOpenCheck,
      title: "Keep the Memories",
      description: "The book is yours. Return the ritual kit for your next adventure, or keep it as a keepsake."
    }
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-secondary tracking-[0.25em] uppercase text-sm font-medium mb-4">
            The Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            How It <span className="italic text-secondary">Works</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className="relative group"
            >
              {/* Connector Line (hidden on mobile, last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-full h-px bg-gradient-to-r from-secondary/30 to-transparent" />
              )}

              <div className="text-center">
                {/* Step Icon (Numbers removed) */}
                <div className="relative inline-block mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-background-alt border border-secondary/30 flex items-center justify-center group-hover:border-secondary/50 group-hover:shadow-glow-gold transition-all duration-500">
                    <step.icon className="w-8 h-8 text-secondary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
