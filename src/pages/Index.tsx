import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import CrewImages from "@/components/CrewImages";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutPreview from "@/components/AboutPreview";
import HowItWorks from "@/components/HowItWorks";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <ServicesOverview />
      <CrewImages />
      <WhyChooseUs />
      <AboutPreview />
      <HowItWorks />
      <FinalCTA />
    </main>
  );
};

export default Index;
