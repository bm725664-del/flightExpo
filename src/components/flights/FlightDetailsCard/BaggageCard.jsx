import { Luggage } from "lucide-react";

const BaggageCard = () => {
  return (
    <div className="bg-white rounded-2xl p-4 md:p-5 border border-gray-200 shadow-sm space-y-4 w-full">
      {/* Title */}
      <p className="font-bold text-sm md:text-base">
        Add your check-in baggage
      </p>

      {/* Content */}
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="p-3 bg-blue-100 rounded-xl flex-shrink-0">
          <Luggage size={24} className="text-blue-600" />
        </div>

        {/* Description */}
        <div className="flex-1">
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            <span className="font-bold">Upto 65% cheaper</span> than you would
            pay at the airport. Price is{" "}
            <span className="text-[#78b34c] font-bold">£128.99</span> for 1Pcs
            per passenger (excluding infants).
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-2">
        {/* Price */}
        <p className="text-blue-600 font-bold text-lg">+£128.99</p>

        {/* Button */}
        <button className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 transition-colors text-white text-xs font-bold px-5 py-2.5 rounded-lg uppercase tracking-wider">
          Add bag for all
        </button>
      </div>
    </div>
  );
};

export default BaggageCard;
