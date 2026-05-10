import { Plane, CheckCircle2, Armchair, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function FlightCard() {
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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2tci5yDukZJm_XCfaGLtxbAQK6EgsqZi8z1h_SpjRF3Wj-os9XHc87MVrOuEMjTrU_aG8adYWll-1IylPSIId4Ya9KdjujvkFyLuGyV7R_kfMxQ43tE7_wyY1oWd3lOVaKDqSSDNowILUxPuxDc8dOTIpwnjNA9NJ1aHDN2-COmlEwgjmtrz5Q6i8RRZ-JyHy2ow0D50jgJKWUC-T9LhNOsjQM9_Zw1iUuOjz3-ZtIweeHdTeL_WCGgEpz1DmFK2tDRrmu6jRTGA"
              alt="Japan Airlines"
              className="h-full w-full object-contain"
            />
          </div>

          <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
            Japan Airlines
          </h3>

          <p className="mt-1 text-xs text-neutral-500">JL044 • Boeing 787</p>
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
              11:45
            </h2>

            <p className="mt-1 text-sm font-bold text-neutral-700 dark:text-neutral-300">
              LHR
            </p>

            <p className="mt-1 text-xs text-neutral-400">London Heathrow</p>
          </div>

          {/* Flight Path */}
          <div className="relative px-2 text-center">
            <p className="mb-4 text-sm font-semibold text-neutral-500">
              11h 45m
            </p>

            <div className="mb-3 flex items-center gap-2">
              <div className="h-[2px] flex-1 bg-gradient-to-r from-primary/20 to-primary"></div>

              <div
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full bg-primary/10
                  text-primary
                "
              >
                <Plane size={18} className="rotate-90" />
              </div>

              <div className="h-[2px] flex-1 bg-gradient-to-r from-primary to-primary/20"></div>
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
              08:30
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
            $1,240
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
        {/* Tags */}
        <div className="flex flex-wrap items-center gap-5">
          <div
            className="
              flex items-center gap-2
              text-xs font-semibold
              text-emerald-600
            "
          >
            <CheckCircle2 size={16} />
            Same day free cancellation
          </div>

          <div
            className="
              flex items-center gap-2
              text-xs font-semibold
              text-red-500
            "
          >
            <Armchair size={16} />
            Only 7 seats left
          </div>
        </div>

        {/* CTA */}
        <NavLink
          to="/flight/details"
          className="
            inline-flex items-center gap-2
            text-xs font-bold text-primary
            transition hover:gap-3
          "
        >
          Flight Details
          <ArrowRight size={14} />
        </NavLink>
      </div>
    </article>
  );
}
