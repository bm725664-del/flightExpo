import React from "react";
import BaggageCard from "../components/flights/FlightDetailsCard/BaggageCard";
import ContinueBookingButton from "../components/flights/FlightDetailsCard/ContinueBookingButton";
import FareSummary from "../components/flights/FlightDetailsCard/FareSummary";
import FlightItineraryCard from "../components/flights/FlightDetailsCard/FlightItineraryCard";
import FlightPolicy from "../components/flights/FlightDetailsCard/FlightPolicy";
import FlightSummary from "../components/flights/FlightDetailsCard/FlightSummary";
import ImportantInformation from "../components/flights/FlightDetailsCard/ImportantInformation";
import TravellerDetails from "../components/flights/FlightDetailsCard/TravellerDetails";
import WhyBookWithUs from "../components/flights/FlightDetailsCard/WhyBookWithUs";
import MainLayout from "../layouts/MainLayout";

const FlightDetailsPage = () => {
  const [showFlightDetails, setShowFlightDetails] = React.useState(false);
  return (
    <MainLayout>
      <div class="max-w-container-max mx-auto px-margin-desktop my-14 py-14">
        <h1 class="font-h2 text-on-surface mb-stack-lg">Your Flight details</h1>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start mb-4">
          <div class="lg:col-span-8 space-y-stack-lg">
            <FlightSummary
              setShowFlightDetails={setShowFlightDetails}
              showFlightDetails={showFlightDetails}
            />
            {showFlightDetails && <FlightItineraryCard />}
            <p class="text-primary text-xs font-semibold px-2">
              Your flight is 100% financially protected with ATOL.
            </p>
            <TravellerDetails />
            <FlightPolicy />
            <ImportantInformation />
          </div>
          <aside class="lg:col-span-4 space-y-gutter">
            <div class="sticky top-24 space-y-gutter">
              <FareSummary />
              <BaggageCard />
              <ContinueBookingButton />
              <WhyBookWithUs />
            </div>
          </aside>
        </div>
      </div>
    </MainLayout>
  );
};

export default FlightDetailsPage;
