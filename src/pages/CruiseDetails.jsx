import HeroSection from "../components/cruises/HeroSection";
import MainLayout from "../layouts/MainLayout";
import OverviewSection from "../components/cruises/OverviewSection";
import ItinerarySection from "../components/cruises/ItinerarySection";
import AmenitiesSection from "../components/cruises/AmenitiesSection";
import SuiteSelectionSection from "../components/cruises/SuiteSelectionSection";
import BookingSidebar from "../components/cruises/BookingSidebar";
const CruiseDetails = () => {
  return (
    <MainLayout>
      <HeroSection />
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-10 px-6 py-20 lg:grid-cols-12">
        <div className="space-y-20 lg:col-span-8">
          <OverviewSection />
          <ItinerarySection />
          <AmenitiesSection />
          <SuiteSelectionSection />
        </div>

        <div className="lg:col-span-4">
          <BookingSidebar />
        </div>
      </div>
    </MainLayout>
  );
};

export default CruiseDetails;
