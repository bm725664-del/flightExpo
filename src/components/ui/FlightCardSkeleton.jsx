export default function FlightCardSkeleton() {
  return (
    <div
      className="
        overflow-hidden rounded-3xl
        border border-neutral-200/70
        bg-white/70
        p-6 shadow-lg
        backdrop-blur-xl
        dark:border-neutral-800
        dark:bg-neutral-900/70
      "
    >
      <div
        className="
          flex flex-col gap-8
          lg:flex-row lg:items-center
        "
      >
        {/* Airline Logo Skeleton */}
        <div
          className="
            flex flex-col items-center
            gap-4 lg:w-32
          "
        >
          <div
            className="
              shimmer h-20 w-20 rounded-2xl
              bg-neutral-200
              dark:bg-neutral-800
            "
          />

          <div
            className="
              shimmer h-4 w-24 rounded-lg
              bg-neutral-200
              dark:bg-neutral-800
            "
          />

          <div
            className="
              shimmer h-3 w-20 rounded-lg
              bg-neutral-200
              dark:bg-neutral-800
            "
          />
        </div>

        {/* Flight Details */}
        <div className="flex-1 space-y-6">
          {/* Top Row */}
          <div className="flex items-center justify-between gap-6">
            <div className="space-y-3">
              <div
                className="
                  shimmer h-8 w-24 rounded-xl
                  bg-neutral-200
                  dark:bg-neutral-800
                "
              />

              <div
                className="
                  shimmer h-4 w-16 rounded-lg
                  bg-neutral-200
                  dark:bg-neutral-800
                "
              />
            </div>

            {/* Flight Path */}
            <div className="flex flex-1 items-center gap-3 px-4">
              <div
                className="
                  shimmer h-1 flex-1 rounded-full
                  bg-neutral-200
                  dark:bg-neutral-800
                "
              />

              <div
                className="
                  shimmer h-10 w-10 rounded-full
                  bg-neutral-200
                  dark:bg-neutral-800
                "
              />

              <div
                className="
                  shimmer h-1 flex-1 rounded-full
                  bg-neutral-200
                  dark:bg-neutral-800
                "
              />
            </div>

            <div className="space-y-3 text-right">
              <div
                className="
                  shimmer ml-auto h-8 w-24 rounded-xl
                  bg-neutral-200
                  dark:bg-neutral-800
                "
              />

              <div
                className="
                  shimmer ml-auto h-4 w-16 rounded-lg
                  bg-neutral-200
                  dark:bg-neutral-800
                "
              />
            </div>
          </div>

          {/* Bottom Meta */}
          <div className="flex items-center justify-between gap-4">
            <div
              className="
                shimmer h-6 w-28 rounded-full
                bg-neutral-200
                dark:bg-neutral-800
              "
            />

            <div
              className="
                shimmer h-4 w-40 rounded-lg
                bg-neutral-200
                dark:bg-neutral-800
              "
            />
          </div>
        </div>

        {/* Pricing Section */}
        <div
          className="
            w-full border-t border-neutral-200
            pt-6 lg:w-48
            lg:border-l lg:border-t-0
            lg:pl-6 lg:pt-0
            dark:border-neutral-800
          "
        >
          <div className="space-y-4">
            <div
              className="
                shimmer h-4 w-20 rounded-lg
                bg-neutral-200
                dark:bg-neutral-800
              "
            />

            <div
              className="
                shimmer h-10 w-32 rounded-xl
                bg-neutral-200
                dark:bg-neutral-800
              "
            />

            <div
              className="
                shimmer h-14 w-full rounded-2xl
                bg-neutral-200
                dark:bg-neutral-800
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
