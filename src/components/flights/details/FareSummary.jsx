const FareSummary = () => {
  return (
    <aside className="lg:col-span-4">
      <div className="glass-card sticky top-28 rounded-[32px] border border-outline-variant/20 p-stack-lg soft-shadow">
        {/* Heading */}
        <h3 className="mb-stack-lg font-h3 text-on-surface">Fare Summary</h3>

        {/* Fare Breakdown */}
        <div className="mb-stack-xl space-y-stack-md">
          <div className="flex items-center justify-between">
            <span className="font-body-md text-on-surface-variant">
              Adult x 1
            </span>

            <span className="font-h3 text-on-surface">£8,450.00</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-body-md text-on-surface-variant">
              Taxes & Fees
            </span>

            <span className="font-body-md text-on-surface">£420.00</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-body-md text-on-surface-variant">
              Priority Handling
            </span>

            <span className="font-label-md text-tertiary">Included</span>
          </div>

          {/* Total */}
          <div className="flex items-end justify-between border-t border-outline-variant/20 pt-stack-md">
            <span className="font-h3 text-on-surface">Total</span>

            <div className="text-right">
              <p className="font-display-xl text-h2 leading-none text-primary">
                £8,870.00
              </p>

              <p className="mt-1 text-label-sm text-outline">
                All taxes included
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-stack-md">
          <button className="w-full rounded-2xl bg-primary py-stack-md font-h3 text-on-primary shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95">
            Confirm Selection
          </button>

          <button className="w-full rounded-2xl border border-outline-variant py-stack-md font-label-md text-on-surface-variant transition-all hover:bg-surface-container-low">
            Save for Later
          </button>
        </div>

        {/* Notice */}
        <div className="mt-stack-lg flex items-center gap-stack-sm rounded-xl bg-tertiary/5 p-stack-sm">
          <span className="material-symbols-outlined text-tertiary">bolt</span>

          <p className="font-label-sm text-tertiary">
            Rare find: Only 2 First Class seats left at this price.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default FareSummary;
