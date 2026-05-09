import MainLayout from "../layouts/MainLayout";
import HeroSection from "../components/hero/HeroSection";
import DestinationsSection from "../components/destination/DestinationsSection";
import FlightDealsSection from "../components/deals/FlightDealsSection";
import FeaturesSection from "../components/features/FeaturesSection";
import HotelSection from "../components/hotels/section/HotelSection";
import CruiseSection from "../components/cruises/CruiseSection";
import HomeBannerImage from "../assets/imaage/flight1.jpg";
import DestinationData from "../data/HomePageDestinationCardData";
import BookingWidget from "../components/booking/BookingWidget";
export default function Home() {
  return (
    <MainLayout>
      <HeroSection
        bgImage={HomeBannerImage}
        BannerForm={<BookingWidget />}
        title="Best Way"
      />
      <DestinationsSection cardjson={DestinationData} buttonName={"View All"} />
      <FeaturesSection />
      <CruiseSection />
      <HotelSection />
      <FlightDealsSection />
    </MainLayout>
  );
}
