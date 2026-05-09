import CruiseCategoryCard from "../../components/cruises/CruiseCategoryCard";

import { cruiseCategories } from "../../data/cruiseCategories";

export default function CruiseCategoriesSection() {
  return (
    <section className="py-[120px] bg-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-12 h-[2px] bg-primary" />

            <span className="uppercase tracking-[0.3em] text-primary font-label-sm">
              Explore Journeys
            </span>
          </div>

          <h2 className="font-display-lg text-display-lg text-on-surface mb-5">
            Sail Your Way
          </h2>

          <p className="text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Discover bespoke voyages crafted for discerning travelers seeking
            refined elegance, immersive destinations, and world-class onboard
            experiences.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {cruiseCategories.map((item) => (
            <CruiseCategoryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
