import { useState } from "react";
import {
  PlaneTakeoff,
  PlaneLanding,
  CalendarDays,
  User,
  SlidersHorizontal,
  Check,
} from "lucide-react";

export default function FlightSearchSummary() {
  const [isEditing, setIsEditing] = useState(false);

  const [flightDetails, setFlightDetails] = useState({
    from: "London (LHR)",
    to: "Tokyo (HND)",
    dates: "Oct 12 — Oct 24",
    travelers: "1 Adult, Business",
  });

  const details = [
    {
      id: 1,
      label: "From",
      value: flightDetails.from,
      key: "from",
      icon: PlaneTakeoff,
    },
    {
      id: 2,
      label: "To",
      value: flightDetails.to,
      key: "to",
      icon: PlaneLanding,
    },
    {
      id: 3,
      label: "Dates",
      value: flightDetails.dates,
      key: "dates",
      icon: CalendarDays,
    },
    {
      id: 4,
      label: "Travelers",
      value: flightDetails.travelers,
      key: "travelers",
      icon: User,
    },
  ];

  const handleChange = (key, value) => {
    setFlightDetails((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <section className="mb-6 sm:mb-10">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/70 backdrop-blur-xl shadow-lg">
        <div className="flex flex-col gap-6 p-4 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Flight Details */}
          <div className="grid flex-1 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
            {details.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className={`
                    flex items-start gap-3 sm:gap-4
                    ${
                      index !== 0
                        ? "xl:border-l xl:border-neutral-200 xl:pl-6"
                        : ""
                    }
                  `}
                >
                  {/* Icon */}
                  <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={20} />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <p className="mb-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                      {item.label}
                    </p>

                    {isEditing ? (
                      <input
                        type="text"
                        value={item.value}
                        onChange={(e) => handleChange(item.key, e.target.value)}
                        className="
                          w-full
                          rounded-xl
                          border
                          border-neutral-200
                          bg-white
                          px-3
                          py-2
                          text-sm
                          sm:text-base
                          font-semibold
                          text-neutral-900
                          outline-none
                          focus:border-primary
                          focus:ring-2
                          focus:ring-primary/10
                        "
                      />
                    ) : (
                      <h3 className="truncate text-sm sm:text-base font-bold text-neutral-900">
                        {item.value}
                      </h3>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Button */}
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="
              w-full
              sm:w-auto
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-2xl
              border
              border-neutral-200
              bg-white
              px-5
              py-3
              text-sm
              font-semibold
              text-neutral-800
              transition-all
              duration-300
              hover:shadow-lg
            "
          >
            {isEditing ? (
              <>
                <Check size={18} />
                Save Changes
              </>
            ) : (
              <>
                <SlidersHorizontal size={18} />
                Modify Search
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
