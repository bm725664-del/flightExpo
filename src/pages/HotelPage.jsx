import HotelHeroSection from "../components/hotels/section/HotelHeroSection";
import FeaturedCollectionsSection from "../components/hotels/section/FeaturedCollectionsSection";
import LuxeStandardSection from "../components/hotels/section/LuxeStandardSection";
import ExploreEliteStaysSection from "../components/hotels/section/ExploreEliteStaysSection";
import MainLayout from "../layouts/MainLayout";

export default function HotelPage() {
  return (
    <>
      <MainLayout>
        <HotelHeroSection />
        <FeaturedCollectionsSection />
        <ExploreEliteStaysSection />
        <LuxeStandardSection />
      </MainLayout>
    </>
  );
}
