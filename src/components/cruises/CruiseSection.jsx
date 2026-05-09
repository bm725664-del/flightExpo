import CruiseCard from "../cards/CruiseCard";
import cruises from "../../data/cruises";
import CustomHeaderSection from "../ui/CustomHeaderSection";
export default function CruiseSection() {
  return (
    <section className="py-stack-xl bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <CustomHeaderSection
          badge="Ocean Escapes"
          heading={"Cruise Experiences"}
          subHeading={
            "Sail through the world's most breathtaking destinations aboard ultra-luxury cruise liners designed for unforgettable voyages."
          }
          buttonName={"Explore All Cruises"}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          {cruises?.map((item) => (
            <CruiseCard item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
