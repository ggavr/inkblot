import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ConceptSection from "@/components/ConceptSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ExperienceSection from "@/components/ExperienceSection";
import CommunitySection from "@/components/CommunitySection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <div id="experience">
          <ConceptSection />
        </div>
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
        <ExperienceSection />
        <CommunitySection />
        <div id="pricing">
          <PricingSection />
        </div>
        <div id="faq">
          <FAQSection />
        </div>
        <FooterCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
