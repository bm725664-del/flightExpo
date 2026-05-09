const AmenitiesSpecs = () => {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* Amenities */}
      <div className="glass-card rounded-2xl border border-outline-variant/20 p-5 sm:p-6">
        <h4 className="mb-5 flex items-center gap-2 text-xl font-h3 text-on-surface">
          <span className="material-symbols-outlined text-primary">spa</span>
          Signature Amenities
        </h4>

        <div className="space-y-4">
          {[
            ["Skincare Kit", "Shiseido Essential"],
            ["Headphones", "Bose Noise-Cancelling"],
            ["Connectivity", "Free High-Speed Wi-Fi"],
          ].map(([label, value], index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-outline-variant/10 pb-2 last:border-none"
            >
              <span className="text-sm text-on-surface-variant sm:text-base">
                {label}
              </span>

              <span className="text-sm text-on-surface sm:text-base">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Flight Specs */}
      <div className="glass-card rounded-2xl border border-outline-variant/20 p-5 sm:p-6">
        <h4 className="mb-5 flex items-center gap-2 text-xl font-h3 text-on-surface">
          <span className="material-symbols-outlined text-primary">
            analytics
          </span>
          Flight Specs
        </h4>

        <div className="grid grid-cols-2 gap-4">
          {[
            ["Altitude", "43,000 ft"],
            ["Cruise Speed", "560 mph"],
            ["Range", "8,786 mi"],
            ["Engines", "GEnx-1B"],
          ].map(([label, value], index) => (
            <div key={index}>
              <p className="text-xs uppercase text-outline sm:text-sm">
                {label}
              </p>

              <p className="text-lg font-h3 text-on-surface sm:text-xl">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSpecs;
