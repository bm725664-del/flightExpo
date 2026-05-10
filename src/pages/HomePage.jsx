import MainLayout from "../layouts/MainLayout";
import HeroSection from "../components/hero/HeroSection";
import DestinationsSection from "../components/destination/DestinationsSection";
import FlightDealsSection from "../components/deals/FlightDealsSection";
import FeaturesSection from "../components/features/FeaturesSection";
import HotelSection from "../components/hotels/section/HotelSection";
import CruiseSection from "../components/cruises/CruiseSection";
import DestinationData from "../data/HomePageDestinationCardData";
import BookingWidget from "../components/booking/BookingWidget";
import TestimonialsSection from "../components/testimonials/TestimonialsSection";
import NewLetterSection from "../components/ui/NewLetterSection";
import bannerImage from "../assets/imaage/banner.png";
export default function Home() {
  return (
    <MainLayout>
      <HeroSection
        bgImage={bannerImage}
        BannerForm={<BookingWidget />}
        title={"Redefined Elegance"}
        subtitle={
          "Experience the thrill of flying with our premium travel options."
        }
      />
      <DestinationsSection cardjson={DestinationData} buttonName={"View All"} />
      <FeaturesSection />
      <CruiseSection />
      <HotelSection />
      <FlightDealsSection />
      <TestimonialsSection />
      <NewLetterSection />
    </MainLayout>
  );
}
