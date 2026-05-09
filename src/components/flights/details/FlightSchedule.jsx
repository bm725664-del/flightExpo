const FlightSchedule = () => {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-h2 text-on-surface sm:text-3xl">
        Flight Schedule
      </h2>

      <div className="relative">
        <div className="absolute bottom-4 left-[11px] top-4 w-[2px] bg-outline-variant/30"></div>

        {/* Departure */}
        <div className="relative pb-8 pl-10 sm:pl-12">
          <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary">
            <div className="h-2 w-2 rounded-full bg-white"></div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xl font-h3 text-on-surface sm:text-2xl">
                19:00
              </p>

              <p className="text-sm font-body-md text-on-surface-variant sm:text-base">
                London Heathrow (LHR) • Terminal 3
              </p>

              <div className="mt-3 flex items-center gap-3 rounded-xl border border-outline-variant/10 bg-surface-container-low p-3">
                <span className="material-symbols-outlined text-primary">
                  king_bed
                </span>

                <p className="text-sm font-label-sm text-on-surface-variant">
                  Elite Lounge Access: The Concorde Room
                </p>
              </div>
            </div>

            <p className="text-sm font-label-md text-on-surface-variant">
              Fri, Oct 11
            </p>
          </div>
        </div>

        {/* Mid Flight */}
        <div className="relative pb-8 pl-10 sm:pl-12">
          <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-outline-variant bg-surface-container-highest">
            <span className="material-symbols-outlined text-[14px] text-on-surface-variant">
              schedule
            </span>
          </div>

          <div className="rounded-2xl border border-dashed border-outline-variant/30 bg-surface-container-low/50 p-4">
            <p className="font-label-md text-on-surface-variant">
              Cruising over Northern Europe & Asia
            </p>

            <p className="mt-1 text-sm text-outline">
              Flight JL044 • Non-stop Service
            </p>
          </div>
        </div>

        {/* Arrival */}
        <div className="relative pl-10 sm:pl-12">
          <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary">
            <div className="h-2 w-2 rounded-full bg-white"></div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xl font-h3 text-on-surface sm:text-2xl">
                15:45{" "}
                <span className="text-sm font-normal text-on-surface-variant">
                  +1 Day
                </span>
              </p>

              <p className="text-sm font-body-md text-on-surface-variant sm:text-base">
                Tokyo Haneda (HND) • Terminal 3
              </p>

              <p className="mt-1 text-sm italic text-outline">
                Local time in Tokyo is GMT+9
              </p>
            </div>

            <p className="text-sm font-label-md text-on-surface-variant">
              Sat, Oct 12
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlightSchedule;
