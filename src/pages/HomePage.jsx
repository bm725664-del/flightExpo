import MainLayout from "../layouts/MainLayout";
import HeroSection from "../components/hero/HeroSection";
import DestinationsSection from "../components/destination/DestinationsSection";
import FlightDealsSection from "../components/deals/FlightDealsSection";
import FeaturesSection from "../components/features/FeaturesSection";
import HotelSection from "../components/hotels/section/HotelSection";
import CruiseSection from "../components/cruises/CruiseSection";
import DestinationData from "../data/HomePageDestinationCardData";
import BookingWidget from "../components/booking/BookingWidget";
export default function Home() {
  return (
    <MainLayout>
      <HeroSection
        bgImage={
          "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
        }
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
    </MainLayout>
  );
}
