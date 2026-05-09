import FligthCompareCard from "../ui/FligthCompareCard";
import flights from "../../data/flights";
import CustomHeaderSection from "../ui/CustomHeaderSection";
export default function FlightDealsSection() {
  return (
    <section className="py-stack-xl max-w-container-max mx-auto px-margin-desktop ">
      <CustomHeaderSection
        heading={"Global Flight Deals"}
        subHeading={" Compare premium cabin fares from major global hubs."}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {flights.map((flight) => (
          <FligthCompareCard
            key={flight.id}
            title={flight?.airline || ""}
            subtitle={flight?.subtitle || ""}
            badge={flight?.badge || "Trending"}
            routes={flight?.routes || []}
          />
        ))}
      </div>
    </section>
  );
}
