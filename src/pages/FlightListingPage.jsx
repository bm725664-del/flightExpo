import FlightSearchSummary from "../components/flights/section/FlightSearchSummary";
import FlightFiltersSidebar from "../components/flights/section/FlightFiltersSidebar";
import FlightResultsSection from "../components/flights/section/FlightResultsSection";

import MainLayout from "../layouts/MainLayout";
import HomeBannerSection from "../components/flights/section/HomeBannerSection";

export default function FlightsPage() {
  return (
    <MainLayout>
      <HomeBannerSection />
      <main className="pt-24 sm:pt-28 pb-12 sm:pb-16 lg:pb-24">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-10">
          {/* Search Summary */}
          <FlightSearchSummary />

          {/* Layout */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 xl:grid-cols-[300px_1fr] gap-6 lg:gap-8 items-start">
            {/* Sidebar */}
            <aside className="xl:sticky xl:top-28">
              <FlightFiltersSidebar />
            </aside>

            {/* Results */}
            <section className="min-w-0">
              <FlightResultsSection />
            </section>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
