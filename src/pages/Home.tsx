import Hero from "../sections/Hero";
import WhoWeAre from "../sections/WhoWeAre";
import FeaturedProperties from "../sections/FeaturedProperties";
import ServicesSection from "../sections/ServicesSection";
import WhyChooseHorizon from "../sections/WhyChooseHorizon";
import TeamSection from "../sections/TeamSection";
import CTASection from "../sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <FeaturedProperties />
      <ServicesSection />
      <WhyChooseHorizon />
      <TeamSection />
      <CTASection />
    </>
  );
}
