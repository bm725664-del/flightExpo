import { ArrowRight, Wifi } from "lucide-react";

export default function FlightCardStop() {
  return (
    <article
      className="
        group overflow-hidden rounded-3xl
        border border-neutral-200
        bg-white
        shadow-lg
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-2xl
        dark:border-neutral-800
        dark:bg-neutral-900
      "
    >
      {/* Main Content */}
      <div
        className="
          flex flex-col gap-8
          p-6 lg:flex-row
          lg:items-center lg:p-8
        "
      >
        {/* Airline Info */}
        <div
          className="
            flex flex-col items-center
            text-center
            lg:w-40
          "
        >
          <div
            className="
              mb-4 flex h-20 w-20 items-center justify-center
              rounded-2xl
              bg-neutral-100
              p-4
              transition-transform duration-300
              group-hover:scale-110
              dark:bg-neutral-800
            "
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK7Oc1EDe7Iteo9zF5s0CR1dSJgtlijstZHis0Jm9LHjOhihH5H9GNG2JP5-ApaLYuNIklt2cc75cDN9O7ORwqVlqUPPpD9y-jcWpTjFDlw-fDJ2BzUjQMNDEmVU1OfVnK86_-Aanqz0N7cMAzgNTZl6ORf0aVPp_aafigVA4PZe8Ze0vqCQNlh0PeXI7INafXM3pwKtLwLhDnAmQ96I79lb02J2flLeUwDbZ_CfjMgF0dd_zQwBkxa3y8aJoNqK2_8lyJotX-dJM"
              alt="British Airways"
              className="h-full w-full object-contain"
            />
          </div>

          <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
            British Airways
          </h3>

          <p className="mt-1 text-xs text-neutral-500">BA005 • Airbus A350</p>
        </div>

        {/* Flight Details */}
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
              15:10
            </h2>

            <p className="mt-1 text-sm font-bold text-neutral-700 dark:text-neutral-300">
              LHR
            </p>

            <p className="mt-1 text-xs text-neutral-400">London Heathrow</p>
          </div>

          {/* Flight Path */}
          <div className="px-3 text-center">
            <div className="flex justify-center items-center  flex-col gap-1">
              {/* Stop Badge */}
              <span
                className="
                inline-flex items-center rounded-full
                bg-amber-500/10
                text-[10px] font-bold uppercase
                tracking-[0.2em]
                px-4 py-1
                text-amber-600
              "
              >
                1 Stop
              </span>
              <span className="w-[20px] bg-black/50 h-[1px]"></span>
              <p className="mb-4 text-sm font-semibold text-neutral-500">
                16h 20m
              </p>
            </div>

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

            {/* Stop Badge */}
            <p className="mt-1 text-sm font-bold text-neutral-500">DTW</p>
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
              16:30
              <sup className="ml-1 text-sm font-medium text-red-500">+1</sup>
            </h2>

            <p className="mt-1 text-sm font-bold text-neutral-700 dark:text-neutral-300">
              HND
            </p>

            <p className="mt-1 text-xs text-neutral-400">Tokyo Haneda</p>
          </div>
        </div>

        {/* Pricing */}
        <div
          className="
            flex flex-col items-center
            border-t border-neutral-200
            pt-6 text-center
            lg:w-56
            lg:border-l lg:border-t-0
            lg:pl-8 lg:pt-0
            lg:text-right
            dark:border-neutral-800
          "
        >
          <p
            className="
              mb-1 text-[11px] font-bold uppercase
              tracking-[0.2em]
              text-neutral-400
            "
          >
            Per Person
          </p>

          <h2
            className="
              mb-6 text-5xl font-black
              tracking-tight text-primary
            "
          >
            $890
          </h2>

          <button
            className="
              w-full rounded-2xl
              bg-primary px-6 py-4
              text-sm font-bold text-white
              shadow-lg shadow-primary/20
              transition-all duration-300
              hover:-translate-y-0.5
              hover:brightness-110
              active:scale-95
            "
          >
            Select Flight
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="
          flex flex-col gap-4
          border-t border-neutral-200
          bg-neutral-50/70
          px-6 py-4
          lg:flex-row
          lg:items-center
          lg:justify-between
          dark:border-neutral-800
          dark:bg-neutral-800/30
        "
      >
        {/* Feature */}
        <div
          className="
            flex items-center gap-2
            text-xs font-semibold
            text-sky-600
          "
        >
          <Wifi size={16} />
          High-speed Wi-Fi included
        </div>

        {/* CTA */}
        <button
          className="
            inline-flex items-center gap-2
            text-xs font-bold text-primary
            transition-all duration-300
            hover:gap-3
          "
        >
          Flight Details
          <ArrowRight size={14} />
        </button>
      </div>
    </article>
  );
}
