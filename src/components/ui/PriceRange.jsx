export default function PriceRange() {
  return (
    <div className="space-y-5">
      {/* Slider */}
      <div className="relative">
        <input
          type="range"
          min="600"
          max="5000"
          step="100"
          defaultValue="3500"
          className="
            h-2 w-full cursor-pointer appearance-none rounded-full
            bg-neutral-200 accent-primary
            dark:bg-neutral-800
          "
        />

        {/* Value Bubble */}
        <div
          className="
            absolute -top-10 left-[70%]
            -translate-x-1/2
            rounded-xl bg-primary
            px-3 py-1
            text-xs font-semibold text-white
            shadow-lg
          "
        >
          $3500
        </div>
      </div>

      {/* Min Max */}
      <div className="flex items-center gap-4">
        <div
          className="
            flex-1 rounded-2xl border border-neutral-200
            bg-neutral-50 px-4 py-3
            dark:border-neutral-800
            dark:bg-neutral-900
          "
        >
          <p
            className="
              mb-1 text-[10px] font-bold uppercase
              tracking-wide text-neutral-400
            "
          >
            Min
          </p>

          <p className="text-sm font-bold text-neutral-900 dark:text-white">
            $600
          </p>
        </div>

        <div
          className="
            flex-1 rounded-2xl border border-neutral-200
            bg-neutral-50 px-4 py-3 text-right
            dark:border-neutral-800
            dark:bg-neutral-900
          "
        >
          <p
            className="
              mb-1 text-[10px] font-bold uppercase
              tracking-wide text-neutral-400
            "
          >
            Max
          </p>

          <p className="text-sm font-bold text-neutral-900 dark:text-white">
            $5000+
          </p>
        </div>
      </div>
    </div>
  );
}
