import itineraries from "../../data/cruseItineraries";
import CuratedItinerariesCard from "../ui/CuratedItinerariesCard";
const CuratedItineraries = () => {
  return (
    <section className="bg-surface-container-low py-stack-xl">
      <div className="px-margin-desktop max-w-container-max mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-stack-lg">
          <div>
            <h2 className="font-h1 text-h1 text-on-surface">
              Curated Itineraries
            </h2>

            <p className="text-on-surface-variant font-body-lg">
              Award-winning routes selected for the discerning traveler.
            </p>
          </div>

          <button className="text-primary font-label-md flex items-center gap-1 hover:underline">
            View all voyages
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {itineraries.map((item, index) => (
            <CuratedItinerariesCard item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedItineraries;
