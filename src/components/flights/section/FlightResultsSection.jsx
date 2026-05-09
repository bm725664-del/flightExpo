import FlightCard from "../FlightCard";
import { flights } from "../../../data/flights";
import FlightSortingBar from "./FlightSortingBar";
import FlightPromoBanner from "./FlightPromoBanner";
import FlightCardSkeleton from "../../ui/FlightCardSkeleton";
import React from "react";
import FlightCardStop from "../FlightCard3";
import EmiratesFlightCard from "../EmiratesFlightCard";

export default function FlightResultsSection() {
  const [showSkeleton, setShowSkeleton] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 2000); // Simulate loading for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (showSkeleton) {
    return (
      <section className="col-span-12 lg:col-span-9 space-y-gutter">
        <FlightSortingBar />
        <FlightCardSkeleton />
      </section>
    );
  }

  return (
    <section className="col-span-12 lg:col-span-9 space-y-gutter">
      <FlightSortingBar />

      {flights.map((item) => (
        <FlightCard key={item.id} item={item} />
      ))}
      {flights.map((item) => (
        <FlightCardStop key={item.id} item={item} />
      ))}
      {flights.map((item) => (
        <EmiratesFlightCard key={item.id} item={item} />
      ))}

      <FlightPromoBanner />
    </section>
  );
}
