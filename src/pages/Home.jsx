import usePageTitle from "../utils/usePageTitle.js";
import Hero from "../sections/Hero.jsx";
import Intro from "../sections/Intro.jsx";
import AboutPreview from "../sections/AboutPreview.jsx";
import ServicesPreview from "../sections/ServicesPreview.jsx";
import WeddingFeature from "../sections/WeddingFeature.jsx";
import PortraitFeature from "../sections/PortraitFeature.jsx";
import PortfolioPreview from "../sections/PortfolioPreview.jsx";
import StudioServices from "../sections/StudioServices.jsx";
import Reviews from "../sections/Reviews.jsx";
import Location from "../sections/Location.jsx";
import BookingCTA from "../sections/BookingCTA.jsx";

export default function Home() {
  usePageTitle("");

  return (
    <>
      <Hero />
      <Intro />
      <AboutPreview />
      <ServicesPreview />
      <WeddingFeature />
      <PortraitFeature />
      <PortfolioPreview />
      <StudioServices />
      <Reviews />
      <Location />
      <BookingCTA />
    </>
  );
}
