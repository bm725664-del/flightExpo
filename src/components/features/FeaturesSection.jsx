import FeatureCard from "../ui/FeatureCard";
import SectionHeading from "./FeatureHeading";

export default function FeaturesSection() {
  return (
    <section className="bg-surface-container-low py-stack-xl">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <SectionHeading />
        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          <FeatureCard />
          <FeatureCard
            cardIcon={"verified_user"}
            cardTitle={"Best Price Guarantee"}
            cardDescription={
              "Exclusive member-only rates at the world's most sought-after properties. Luxury travel, optimized value."
            }
          />
          <FeatureCard
            cardIcon={"eco"}
            cardTitle={"Sustainable Travel"}
            cardDescription={
              "Curated experiences that respect local communities and environments without compromising on comfort."
            }
          />
        </div>
      </div>
    </section>
  );
}
