import HeroSection from "@/components/home/HeroSection";
import FeaturedServices from "@/components/home/FeaturedServices";
import AboutPreview from "@/components/home/AboutPreview";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import CallToAction from "@/components/home/CallToAction";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedServices />
      <AboutPreview />
      <UpcomingEvents />
      <CallToAction />
    </main>
  );
};

export default Home;