import Hero from "../sections/Hero";
import OurStory from "../sections/OurStory";
import FeaturedMenu from "../sections/FeaturedMenu";
import CoffeeExperience from "../sections/CoffeeExperience";
import SignatureDrinks from "../sections/SignatureDrinks";
import GallerySection from "../sections/GallerySection";
import WhyChooseUs from "../sections/WhyChooseUs";
import Reviews from "../sections/Reviews";
import ReservationCTA from "../sections/ReservationCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <OurStory />
      <FeaturedMenu />
      <CoffeeExperience />
      <SignatureDrinks />
      <GallerySection />
      <WhyChooseUs />
      <Reviews />
      <ReservationCTA />
    </>
  );
}
