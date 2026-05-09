import { useState } from "react";
import { suites } from "../../data/suites";

export default function BookingSidebar() {
  const [selectedSuite, setSelectedSuite] = useState(suites[1]);

  const [travelers, setTravelers] = useState(2);

  const [departureDate, setDepartureDate] = useState("2026-07-18");

  const [insuranceEnabled, setInsuranceEnabled] = useState(true);

  const cruisePrice = 4200;

  const suiteUpgrade = selectedSuite?.popular ? 1800 : 900;

  const insuranceFee = insuranceEnabled ? 320 : 0;

  const subtotal = (cruisePrice + suiteUpgrade) * travelers;

  const total = subtotal + insuranceFee;

  return (
    <aside className="lg:sticky lg:top-28">
      <div className="bg-white rounded-[32px] border border-outline-variant/10 shadow-[0_10px_50px_rgba(0,0,0,0.06)] overflow-hidden">
        {/* Top */}
        <div className="p-8 border-b border-outline-variant/10">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-primary font-bold mb-2">
                Mediterranean Marvel
              </p>

              <h3 className="text-h2 font-bold text-on-surface">
                Reserve Your Voyage
              </h3>
            </div>

            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-label-sm font-bold">
              Limited Suites
            </div>
          </div>

          <p className="text-on-surface-variant leading-relaxed">
            Secure your place aboard our flagship luxury cruise experience.
          </p>
        </div>

        {/* Form */}
        <div className="p-8 space-y-6">
          {/* Departure */}
          <div>
            <label className="block text-label-sm uppercase tracking-widest font-bold mb-3 text-on-surface-variant">
              Departure Date
            </label>

            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="w-full rounded-2xl border border-outline-variant/20 px-5 py-4 bg-surface focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Travelers */}
          <div>
            <label className="block text-label-sm uppercase tracking-widest font-bold mb-3 text-on-surface-variant">
              Travelers
            </label>

            <div className="flex items-center justify-between rounded-2xl border border-outline-variant/20 px-5 py-4 bg-surface">
              <button
                onClick={() => setTravelers((prev) => Math.max(1, prev - 1))}
                className="w-10 h-10 rounded-full border border-outline-variant/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                -
              </button>

              <span className="font-bold text-h3">{travelers}</span>

              <button
                onClick={() => setTravelers((prev) => prev + 1)}
                className="w-10 h-10 rounded-full border border-outline-variant/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                +
              </button>
            </div>
          </div>

          {/* Suite Selection */}
          <div>
            <label className="block text-label-sm uppercase tracking-widest font-bold mb-3 text-on-surface-variant">
              Suite Selection
            </label>

            <div className="space-y-3">
              {suites.map((suite) => {
                const active = selectedSuite?.id === suite?.id;

                return (
                  <button
                    key={suite?.id}
                    onClick={() => setSelectedSuite(suite)}
                    className={`w-full rounded-2xl border p-4 text-left transition-all ${
                      active
                        ? "border-primary bg-primary/5 shadow-lg"
                        : "border-outline-variant/20 hover:border-primary/30"
                    }`}
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="font-bold text-on-surface">
                          {suite?.title}
                        </h4>

                        <p className="text-label-sm text-on-surface-variant mt-1">
                          {suite?.size}
                        </p>
                      </div>

                      {active && (
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                          <span className="material-symbols-outlined text-white text-[16px]">
                            check
                          </span>
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Insurance */}
          <div className="rounded-2xl border border-outline-variant/20 p-5 bg-surface">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="font-bold text-on-surface mb-1">
                  Premium Protection
                </h4>

                <p className="text-label-sm text-on-surface-variant leading-relaxed">
                  Includes cancellation coverage, medical assistance, and
                  priority support.
                </p>
              </div>

              <button
                onClick={() => setInsuranceEnabled(!insuranceEnabled)}
                className={`w-14 h-8 rounded-full relative transition-all ${
                  insuranceEnabled ? "bg-primary" : "bg-outline-variant"
                }`}
              >
                <span
                  className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-all ${
                    insuranceEnabled ? "left-7" : "left-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="border-t border-outline-variant/10 p-8 bg-surface">
          <div className="space-y-4">
            {/* Base */}
            <div className="flex justify-between text-on-surface-variant">
              <span>Cruise Fare × {travelers}</span>

              <span>£{(cruisePrice * travelers).toLocaleString()}</span>
            </div>

            {/* Suite */}
            <div className="flex justify-between text-on-surface-variant">
              <span>Suite Upgrade × {travelers}</span>

              <span>£{(suiteUpgrade * travelers).toLocaleString()}</span>
            </div>

            {/* Insurance */}
            {insuranceEnabled && (
              <div className="flex justify-between text-on-surface-variant">
                <span>Protection Plan</span>

                <span>£{insuranceFee.toLocaleString()}</span>
              </div>
            )}

            {/* Divider */}
            <div className="border-t border-outline-variant/10 pt-4 flex justify-between items-end">
              <div>
                <p className="text-label-sm uppercase tracking-widest text-on-surface-variant mb-1">
                  Total
                </p>

                <h3 className="text-h1 font-bold text-primary">
                  £{total.toLocaleString()}
                </h3>
              </div>

              <p className="text-label-sm text-on-surface-variant">
                Taxes Included
              </p>
            </div>
          </div>

          {/* CTA */}
          <button className="w-full mt-8 bg-primary text-white py-5 rounded-2xl font-bold text-body-lg shadow-[0_10px_30px_rgba(0,74,198,0.3)] hover:scale-[1.02] hover:bg-primary/90 transition-all duration-300">
            Reserve Suite
          </button>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-6 mt-6 text-on-surface-variant">
            <div className="flex items-center gap-2 text-label-sm">
              <span className="material-symbols-outlined text-[18px]">
                verified
              </span>
              Secure Booking
            </div>

            <div className="flex items-center gap-2 text-label-sm">
              <span className="material-symbols-outlined text-[18px]">
                payments
              </span>
              Flexible Payment
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
