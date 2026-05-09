import CustomHeaderSectionTwo from "../../ui/CustomHeaderSectionTwo";
import HotelCard from "../HotelCard";

import hotels from "../../../data/hotel";

export default function ExploreEliteStays() {
  return (
    <section className="py-stack-xl px-margin-desktop max-w-container-max mx-auto">
      <CustomHeaderSectionTwo
        title="Explore Elite Stays"
        description={
          "Hand-picked residences verified for their exceptional comfort and unique character."
        }
      />

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </section>
  );
}
