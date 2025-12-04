import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What genres do you curate?",
      answer: "We focus exclusively on indie romance — slow burn, forbidden, second chance, roadtrip, enemies-to-lovers, and more. We specialize in hidden gems that deserve a wider audience. No mainstream bestsellers here; just intimate stories from talented indie authors."
    },
    {
      question: "How are books selected for me?",
      answer: "When you join, you complete a detailed preference quiz covering tropes, heat level, triggers to avoid, and reading pace. Our curators — all passionate romance readers — hand-select each book to match your unique taste."
    },
    {
      question: "Is the packaging discreet?",
      answer: "Absolutely. Your box arrives in plain packaging with no indication of contents. Your guilty pleasures stay between you and us. Even the return label is neutral."
    },
    {
      question: "What if I don't like a book?",
      answer: "It is rare, but it happens. If a book truly misses the mark, let us know and we will credit you for your next box. We are here to bring you joy, not disappointment."
    },
    {
      question: "Can I keep the ritual items?",
      answer: "The book is always yours to keep. The scent vials and smaller keepsakes are yours too. Larger items (like specialty candles or reusable objects) can be returned with your next box, or purchased at a member discount."
    },
    {
      question: "How do the playlists work?",
      answer: "Each book comes with a QR code linking to a Spotify playlist curated specifically for that story. Some playlists are scene-specific — you'll see chapter markers in your reading guide indicating when to listen to each track."
    },
    {
      question: "Can I pause or cancel anytime?",
      answer: "Yes, always. Life gets busy, TBR piles grow tall. Pause for a month or cancel entirely — no questions, no guilt. Your community access remains active for 30 days after cancellation."
    }
  ];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-secondary tracking-[0.25em] uppercase text-sm font-medium mb-4">
            Questions
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Frequently <span className="italic text-secondary">Asked</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-secondary/20 rounded-lg px-6 bg-card/50 data-[state=open]:border-secondary/40 transition-colors duration-300"
            >
              <AccordionTrigger className="text-left font-display text-lg text-foreground hover:text-secondary transition-colors py-5 [&[data-state=open]>svg]:text-secondary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
