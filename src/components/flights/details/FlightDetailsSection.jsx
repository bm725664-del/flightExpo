import AmenitiesSection from "./AmenitiesSection";
import BaggagePolicies from "./BaggagePolicies";
import CabinExperience from "./CabinExperience";
import DiningExperience from "./DiningExperience";
import FlightSchedule from "./FlightSchedule";

const FlightDetailsSection = () => {
  return (
    <div className="space-y-stack-xl lg:col-span-8">
      <FlightSchedule />
      <CabinExperience />
      <DiningExperience />
      <AmenitiesSection />
      <BaggagePolicies />
    </div>
  );
};

export default FlightDetailsSection;
