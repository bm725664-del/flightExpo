import { hotelCollections } from "../../../data/hotelCollections";
import CustomHeaderSectionTwo from "../../ui/CustomHeaderSectionTwo";
import DestinationCard from "../../ui/DestinationCard";

export default function FeaturedCollectionsSection() {
  return (
    <section className="py-stack-xl px-margin-desktop max-w-container-max mx-auto">
      <CustomHeaderSectionTwo
        title="Featured Collections"
        badge="Curated Selection"
      />

      {/* Destination Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {hotelCollections.map((destination) => (
          <DestinationCard
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
