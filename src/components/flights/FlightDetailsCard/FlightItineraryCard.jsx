import {
  PlaneTakeoff,
  Clock3,
  Luggage,
  ArrowRightLeft,
  Timer,
} from "lucide-react";

const FlightItineraryCard = ({ flightType = "one-way" }) => {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm w-full">
      {/* Header */}
      <div className="bg-sky-100 px-4 md:px-6 py-3 flex flex-wrap items-center gap-2 font-bold text-sm md:text-base text-blue-700">
        <PlaneTakeoff size={20} />

        <span>Departure</span>

        <span className="font-normal text-gray-600 text-sm">
          [ London to Kansas City ]
        </span>
      </div>

      <div className="bg-white p-4 md:p-6 space-y-8 relative">
        {/* ===================== LEG 1 ===================== */}
        <div className="space-y-4">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
            <div className="flex flex-row lg:flex-col gap-3 lg:w-32">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbKAiT8C4fvb5fEG0rzRawfbgik2m4XbO3IV_1pu4dQDGWEo8GolJNMdolIUNZKogARAmfyBY6MbPb67fl5MHbl2m5y90a8GQ9yV6hm6phsCuBc5bgbCshEQxkoVcz8G9tApYFRiHM0uNH2CWetjDyYfR52aZMW9vwYwNtrkZG1iCTgKNMPBaTXWtgkJEu0fOElxap7oHCWQMFKiPp_NZ0ZZPStrWxLhBHXgHOpzHd_LjIO6AZjp3Bh8Nutw6GcfQW9Zl8o1KaAzo"
                alt="Air France"
                className="h-6 w-fit grayscale opacity-80"
              />

              <div className="space-y-1">
                <p className="text-xs font-bold text-gray-500">AF 9301</p>

                <p className="text-xs text-gray-500">Japan Airlines</p>

                <p className="text-xs text-gray-500">Economy</p>
              </div>
            </div>

            {/* Flight Route */}
            <div className="flex-1 flex flex-col md:flex-row items-center justify-between gap-6 w-full">
              {/* Departure */}
              <div className="text-center">
                <p className="font-bold text-2xl">10:45</p>

                <p className="text-sm text-blue-600 font-semibold">
                  London (LHR)
                </p>

                <p className="text-xs text-gray-500">May 10, 2026</p>

                <p className="text-xs text-blue-600">Terminal 3</p>
              </div>

              {/* Duration */}
              <div className="flex-1 flex flex-col items-center max-w-[220px] w-full">
                <div className="w-full h-[1px] bg-gray-300 flex items-center justify-center">
                  <Clock3 size={18} className="text-blue-600 bg-white px-1" />
                </div>

                <p className="text-sm font-bold mt-2">8h 21m</p>
              </div>

              {/* Arrival */}
              <div className="text-center">
                <p className="font-bold text-2xl">14:06</p>

                <p className="text-sm text-blue-600 font-semibold">
                  Detroit (HND)
                </p>

                <p className="text-xs text-gray-500">May 10, 2026</p>

                <p className="text-xs text-blue-600">Terminal M</p>
              </div>
            </div>
          </div>

          {/* Luggage */}
          <div className="flex justify-start md:justify-end">
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
              <Luggage size={14} className="text-gray-500" />

              <span className="text-xs font-semibold text-gray-600">
                Hand Luggage Only
              </span>
            </div>
          </div>
        </div>

        {flightType !== "one-way" && (
          <>
            <div className="relative flex items-center justify-center py-2">
              <div className="absolute w-full h-[1px] bg-gray-200"></div>

              <div className="relative bg-orange-100 text-orange-600 px-4 md:px-6 py-2 rounded-full flex flex-wrap justify-center items-center gap-3 text-xs font-bold shadow-sm text-center">
                <ArrowRightLeft size={16} />

                <span>Flight Change at Detroit (DTW)</span>

                <span className="hidden sm:block w-[1px] h-3 bg-orange-300"></span>

                <Timer size={16} />

                <span>Layover of 1h 49m</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
                {/* Airline Info */}
                <div className="flex flex-row lg:flex-col gap-3 lg:w-32">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQe3itvVvzqCaV0CqF-Vk2rK1sHgcerSSvSBe2rfljjBP1aJl8fPzyfp6CvNCr5pI6QltT28r4pirlb0ppkVkXZhEptguQIjdoWWcolwRKpkuwgR1evxk3dGj3uhxu_-oY4QSAowReEu2YBVYCL9tRS6qAtr0tHNLMqaqrtzwnLlW9XDm6mK19g3hMzO7v5aeuaKoC8YOuCiQIQRpXfa5RMA7OZHPht7PfKm0vVabtoGRBw23zGJ3GcYLRdEmJ8S9FnDUG9xbwTsE"
                    alt="Air France"
                    className="h-6 w-fit grayscale opacity-80"
                  />

                  <div className="space-y-1">
                    <p className="text-xs font-bold text-gray-500">AF 5966</p>

                    <p className="text-xs text-gray-500">Air France</p>

                    <p className="text-xs text-gray-500">Economy</p>
                  </div>
                </div>

                {/* Flight Route */}
                <div className="flex-1 flex flex-col md:flex-row items-center justify-between gap-6 w-full">
                  {/* Departure */}
                  <div className="text-center">
                    <p className="font-bold text-2xl">15:55</p>

                    <p className="text-sm text-blue-600 font-semibold">
                      Detroit (DTW)
                    </p>

                    <p className="text-xs text-gray-500">May 10, 2026</p>

                    <p className="text-xs text-blue-600">Terminal M</p>
                  </div>

                  {/* Duration */}
                  <div className="flex-1 flex flex-col items-center max-w-[220px] w-full">
                    <div className="w-full h-[1px] bg-gray-300 flex items-center justify-center">
                      <Clock3
                        size={18}
                        className="text-blue-600 bg-white px-1"
                      />
                    </div>

                    <p className="text-sm font-bold mt-2">2h 2m</p>
                  </div>

                  {/* Arrival */}
                  <div className="text-center">
                    <p className="font-bold text-2xl">16:57</p>

                    <p className="text-sm text-blue-600 font-semibold">
                      Kansas City (MCI)
                    </p>

                    <p className="text-xs text-gray-500">May 10, 2026</p>
                  </div>
                </div>
              </div>

              {/* Luggage */}
              <div className="flex justify-start md:justify-end">
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
                  <Luggage size={14} className="text-gray-500" />

                  <span className="text-xs font-semibold text-gray-600">
                    Hand Luggage Only
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FlightItineraryCard;
