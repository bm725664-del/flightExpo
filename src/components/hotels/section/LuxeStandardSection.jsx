const features = [
  {
    title: "Exclusive Inventory",
    description:
      "Access rooms and suites not available on public booking platforms.",
  },
  {
    title: "Personal Guest Relations",
    description:
      "A dedicated Luxe Travel manager for every booking to handle custom requests.",
  },
  {
    title: "Verified Experience",
    description:
      "We ensure photos and amenities match the real-world reality perfectly.",
  },
];

export default function LuxeStandardSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN9BdrlU4HfSO5cnp32cjyugPk2LcimsLfazee45-wxljFAFykHWPFY7fXFAGc5WofInxsLBmTUUezW6I7BkfKY8NDyiFugCXadkfkKmakoMG7Dn2-XvOCmq_OoTLJv1LIZzzCphT1urzgRyD5RLidyUXz_qRnt_s_An_qZnb3Stix99U5qrDPN0aD6t3ZWKpx4KMmxYrq-jIBB7me65L6yXw5OiYWn62A5G3i85tXYza-nebhgcs6q_yVSKAberQBZ3YEXYWvySs"
                alt="Luxury Hotel Inspection"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Stats Card */}
            <div className="hidden md:block absolute bottom-6 right-6 lg:-bottom-10 lg:-right-10 bg-white/80 backdrop-blur-2xl border border-white/40 shadow-2xl rounded-3xl p-6 max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <span className="material-symbols-outlined text-primary text-4xl">
                  verified
                </span>

                <span className="text-4xl font-bold text-on-background">
                  150+
                </span>
              </div>

              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Quality checkpoints for every property in our collection.
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2">
            {/* Subtitle */}
            <p className="text-primary uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold mb-4">
              Our Philosophy
            </p>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-on-background mb-6 leading-tight">
              The Luxe Standard
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed mb-8 sm:mb-10">
              We don't just list hotels; we vet them. Every partner hotel
              undergoes a rigorous 150-point inspection covering everything from
              pillow ergonomics to the precision of the concierge's local
              knowledge.
            </p>

            {/* Features */}
            <ul className="space-y-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="bg-primary/10 p-2 rounded-full shrink-0">
                    <span className="material-symbols-outlined text-primary text-lg">
                      check
                    </span>
                  </div>

                  {/* Text */}
                  <div>
                    <h5 className="font-semibold text-on-background text-base sm:text-lg mb-1">
                      {feature.title}
                    </h5>

                    <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button className="mt-10 sm:mt-12 px-6 sm:px-8 py-4 bg-on-background text-white rounded-full font-medium hover:bg-primary transition-all duration-300 flex items-center gap-3 text-sm sm:text-base">
              Learn More About Vetting
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
