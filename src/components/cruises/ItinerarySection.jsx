import { itinerary } from "../../data/itinerary";
import TimelineCard from "../cards/TimelineCard";

export default function ItinerarySection() {
  return (
    <section>
      {/* Header */}
      <div className="flex items-center justify-between mb-stack-lg">
        <h2 className="font-h2 text-h2">The Voyage Itinerary</h2>

        <button className="text-primary font-label-md hover:underline">
          Download Full PDF
        </button>
      </div>

      {/* Timeline */}
      <div className="space-y-stack-md border-l-2 border-outline-variant ml-4 pl-8 relative">
        {itinerary.map((item, index) => (
          <TimelineCard key={item.id} item={item} isActive={index === 0} />
        ))}
      </div>
    </section>
  );
}
