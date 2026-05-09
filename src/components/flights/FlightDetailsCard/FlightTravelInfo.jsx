const FlightTravelInfo = ({ departure, arrival }) => {
  return (
    <>
      <div
        className="
            grid flex-1 grid-cols-3
            items-center gap-4
          "
      >
        {/* Departure */}
        <div>
          <h2
            className="
                text-3xl font-extrabold
                text-neutral-900
                dark:text-white
              "
          >
            {departure.time}
          </h2>

          <p className="mt-1 text-sm font-bold text-neutral-700 dark:text-neutral-300">
            {departure.airport}
          </p>

          <p className="mt-1 text-xs text-neutral-400">{departure.city}</p>
        </div>

        {/* Flight Path */}
        <div className="px-3 text-center">
          <p className="mb-4 text-sm font-semibold text-neutral-500">17h 15m</p>

          <div className="mb-3 flex items-center gap-2">
            <div className="h-[2px] flex-1 bg-primary/30"></div>

            {/* Stop Indicator */}
            <div
              className="
                  relative flex h-4 w-4
                  items-center justify-center
                "
            >
              <div
                className="
                    h-3.5 w-3.5 rounded-full
                    border-[3px] border-primary
                    bg-white
                    dark:bg-neutral-900
                  "
              />

              <div
                className="
                    absolute h-6 w-6 rounded-full
                    bg-primary/10 blur-sm
                  "
              />
            </div>

            <div className="h-[2px] flex-1 bg-primary/30"></div>
          </div>
        </div>

        {/* Arrival */}
        <div className="text-right">
          <h2
            className="
                text-3xl font-extrabold
                text-neutral-900
                dark:text-white
              "
          >
            {arrival.time}
            <sup className="ml-1 text-sm font-medium text-red-500">+1</sup>
          </h2>

          <p className="mt-1 text-sm font-bold text-neutral-700 dark:text-neutral-300">
            {arrival.airport}
          </p>

          <p className="mt-1 text-xs text-neutral-400">{arrival.city}</p>
        </div>
      </div>
    </>
  );
};

export default FlightTravelInfo;
