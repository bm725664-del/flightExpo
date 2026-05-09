import FareSummary from "../components/flights/details/FareSummary";
import FlightDetailsSection from "../components/flights/details/FlightDetailsSection";
import FlightHeroSection from "../components/flights/details/FlightHeroSection";
import MainLayout from "../layouts/MainLayout";

const FlightDetailsPage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <FlightHeroSection />

      {/* Main Content */}
      <section className="mx-auto grid max-w-container-max grid-cols-1 gap-6 px-4 py-8 sm:px-6 md:gap-8 lg:grid-cols-12 lg:gap-gutter lg:px-margin-desktop lg:py-stack-xl">
        {/* Flight Details */}
        <div className="space-y-6 md:space-y-8 lg:col-span-8 lg:space-y-stack-xl">
          <FlightDetailsSection />
        </div>

        {/* Fare Summary */}
        <div className="lg:col-span-4">
          {/* Mobile & Tablet */}
          <div className="lg:hidden">
            <FareSummary />
          </div>

          {/* Desktop Sticky Sidebar */}
          <div className="hidden lg:block">
            <FareSummary />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default FlightDetailsPage;
