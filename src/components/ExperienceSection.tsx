import scentImg from "@/assets/scent-element.jpg";
import playlistImg from "@/assets/playlist-element.jpg";
import objectsImg from "@/assets/objects-element.jpg";
import secretsImg from "@/assets/secrets-element.jpg";

const ExperienceSection = () => {
  const elements = [
    {
      image: scentImg,
      title: "Signature Scents",
      description: "Each story comes with a curated fragrance. Rain on pavement. Woodsmoke. Library dust. Close your eyes, breathe in, and step into the world.",
      tags: ["Petrichor", "Old Books", "Jasmine Night"]
    },
    {
      image: objectsImg,
      title: "Tactile Objects",
      description: "A pressed flower from chapter seven. A vintage key that unlocks nothing — and everything. Objects that make the story tangible.",
      tags: ["Keepsakes", "Props", "Mementos"]
    },
    {
      image: playlistImg,
      title: "Curated Playlists",
      description: "Every arc has its soundtrack. Tension, release, longing, resolution — we compose the emotional landscape for your reading.",
      tags: ["Scene-Matched", "Atmospheric", "Emotional"]
    },
    {
      image: secretsImg,
      title: "Secret Scenes",
      description: "Exclusive content from the author. Extended scenes, alternative endings, character letters — the story continues in your hands.",
      tags: ["Author Extras", "Bonus Content", "Exclusive"]
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-background-alt/30 relative">
      <div className="absolute inset-0 texture-noise" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-secondary tracking-[0.25em] uppercase text-sm font-medium mb-4">
            The Elements
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            The <span className="italic text-secondary">Immersive</span> Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every sense engaged. Every emotion heightened. 
            This is not just reading — it is living the story.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {elements.map((element, index) => (
            <div 
              key={element.title}
              className="group relative overflow-hidden rounded-lg border border-secondary/20 bg-card hover:border-secondary/40 transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={element.image} 
                  alt={element.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-2xl text-foreground mb-2">
                  {element.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {element.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {element.tags.map(tag => (
                    <span 
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-primary/30 text-primary-foreground border border-primary/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
