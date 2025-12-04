import { Sparkles, Heart, BookOpen, Theater } from "lucide-react";

const ConceptSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Curated Indie Romance",
      description: "Hand-picked hidden gems from indie authors — slow burn, forbidden, roadtrip, and more."
    },
    {
      icon: Sparkles,
      title: "Immersive Objects",
      description: "Tactile items that bring scenes to life — a pressed flower, a vintage key, a silk ribbon."
    },
    {
      icon: Heart,
      title: "Signature Scents",
      description: "Custom fragrances that evoke the mood of each story — petrichor, old books, midnight jasmine."
    },
    {
      icon: Theater,
      title: "Curated Playlists",
      description: "Carefully composed soundtracks to enhance every chapter and emotional beat."
    }
  ];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-alt/30 to-background" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p 
            className="text-secondary tracking-[0.25em] uppercase text-sm font-medium mb-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            The Concept
          </p>
          <h2 
            className="font-display text-4xl md:text-5xl text-foreground mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            What is <span className="italic text-secondary">Inkblot</span>?
          </h2>
          <p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            More than a book subscription — it is an augmented reality experience 
            that transforms reading into a sensory ritual. A velvet theater for your guilty pleasures.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="card-inkblot p-6 text-center group opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:border-primary/40 transition-colors duration-500">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
