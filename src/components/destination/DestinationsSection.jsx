import CustomHeaderSection from "../ui/CustomHeaderSection";
import DestinationCard from "../ui/DestinationCard";
export default function DestinationsSection({
  heading = "World Class Collections",
  subHeading = "Hand-picked escapes for the discerning traveler.",
  buttonName,
  cardjson,
}) {
  return (
    <section className="py-stack-xl max-w-container-max mx-auto px-margin-desktop">
      <CustomHeaderSection
        heading={heading}
        subHeading={subHeading}
        buttonName={buttonName}
      />

      {/* Destination Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {cardjson.map((destination) => (
          <DestinationCard
            href={`/flight/details`}
            key={destination.id}
            cardImage={destination.image}
            country={destination.country}
            title={destination.title}
            description={destination.description}
          />
        ))}
      </div>
    </section>
  );
}
