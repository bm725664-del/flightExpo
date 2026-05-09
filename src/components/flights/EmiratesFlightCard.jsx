import ListButton from "../ui/ListButton";
import FlightCardBottom from "./FlightCardBottom";

export default function EmiratesFlightCard() {
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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuArsuWSNE_oZ_MfruBKDJl6G78RqY9Uiqb7H3VJz-bIoELMGTtencryT7oKRZTmpk4TOl8jOtPYst8-YIkzSjzjPiLnxxL59FkzXVw63SeLC2YfkFxaQTV0LWhnxb4x2IjKPSr3VbJeJ6oMQbjpUj2B88EeJMky8jv09rx8IF62Sxbpw4XWCLDi1jmXg8oBy3uf5qnWloCNyPf_pxe9wpaPrpV7b0yGTB02tCF49s4x5GNwlzA1Eu8K6F1auXiFnG8wFDOYxPYPLdc"
              alt="Emirates"
              className="h-full w-full object-contain"
            />
          </div>

          <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
            Emirates
          </h3>

          <p className="mt-1 text-xs text-neutral-500">EK002 • Airbus A380</p>
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
              20:00
            </h2>

            <p className="mt-1 text-sm font-bold text-neutral-700 dark:text-neutral-300">
              LHR
            </p>

            <p className="mt-1 text-xs text-neutral-400">London Heathrow</p>
          </div>

          {/* Flight Path */}
          <div className="px-3 text-center">
            <p className="mb-4 text-sm font-semibold text-neutral-500">
              17h 15m
            </p>

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
              21:15
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
            $1,050
          </h2>

          <ListButton buttonText="Select Flight" />
        </div>
      </div>
      <FlightCardBottom />
    </article>
  );
}
