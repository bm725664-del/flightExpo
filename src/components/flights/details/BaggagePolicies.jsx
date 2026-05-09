const BaggagePolicies = () => {
  return (
    <section className="border-t border-outline-variant/20 pt-8">
      <h2 className="mb-6 text-2xl font-h2 text-on-surface sm:text-3xl">
        Baggage & Terms
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          ["luggage", "3 x 32kg", "Checked baggage allowance per passenger."],
          ["work", "2 x 10kg", "Carry-on bags plus one personal item."],
          [
            "verified",
            "Fully Flexible",
            "Free cancellations up to 24h before departure.",
          ],
        ].map(([icon, title, desc], index) => (
          <div
            key={index}
            className="rounded-2xl border border-outline-variant/10 p-5"
          >
            <span className="material-symbols-outlined text-3xl text-primary">
              {icon}
            </span>

            <p className="mt-4 text-xl font-h3 text-on-surface">{title}</p>

            <p className="mt-2 text-sm text-on-surface-variant sm:text-base">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BaggagePolicies;
