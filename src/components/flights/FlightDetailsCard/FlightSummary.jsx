import { CheckCircle, Plane } from "lucide-react";
const FlightSummary = ({ setShowFlightDetails, showFlightDetails }) => {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md w-full bg-white">
      {/* Header */}
      <div className="bg-[#78b34c] text-white px-4 md:px-6 py-3 flex flex-col sm:flex-row items-center justify-center gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2 font-semibold text-sm md:text-base">
          <CheckCircle size={20} />
          <span>PRICE GUARANTEE</span>
        </div>

        <span className="text-xs md:text-sm font-normal">
          Cheapest price you can't get anywhere else
        </span>
      </div>

      {/* Body */}
      <div className="p-4 md:p-6 space-y-6">
        {/* Flight Row */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-6">
          {/* Airline */}
          <div className="flex items-center gap-4 w-full xl:w-40">
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-[10px] font-bold">
              JL
            </div>

            <div>
              <p className="text-sm font-bold">Japan Airlines</p>
              <p className="text-xs text-gray-500">Economy</p>
            </div>
          </div>

          {/* Flight Details */}
          <div className="flex-1 flex flex-col md:flex-row items-center justify-between gap-6 w-full">
            {/* Departure */}
            <div className="text-center">
              <p className="text-2xl font-bold">19:00</p>
              <p className="text-xs text-gray-500">Oct 11, 2024</p>
              <p className="font-bold text-sm">LHR</p>
            </div>

            {/* Flight Line */}
            <div className="flex-1 flex flex-col items-center w-full max-w-[250px]">
              <p className="text-xs text-gray-500 mb-1">Non-stop | 13h 45m</p>

              <div className="w-full h-[2px] bg-gray-300 relative">
                <Plane
                  size={16}
                  className="absolute right-0 -top-[7px] text-blue-600"
                />
              </div>
            </div>

            {/* Arrival */}
            <div className="text-center">
              <p className="text-2xl font-bold">15:45</p>
              <p className="text-xs text-gray-500">Oct 12, 2024</p>
              <p className="font-bold text-sm">HND</p>
            </div>
          </div>

          {/* Pricing */}
          <div className="flex flex-col items-center xl:items-end w-full xl:w-40 border-t xl:border-t-0 xl:border-l border-gray-200 pt-4 xl:pt-0 xl:pl-4">
            <p className="text-xs text-gray-500">Total Fare</p>

            <p className="text-2xl font-bold text-blue-600">£8,870.00</p>

            <p className="text-xs text-red-500 font-bold">2 Seats Left</p>

            <button
              className="text-xs text-blue-600 font-bold underline mt-1"
              onClick={() => setShowFlightDetails(!showFlightDetails)}
            >
              Flight Details
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 pt-3">
          <p className="text-[#78b34c] font-bold text-center text-xs uppercase tracking-wider">
            Same day free cancellation
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlightSummary;
