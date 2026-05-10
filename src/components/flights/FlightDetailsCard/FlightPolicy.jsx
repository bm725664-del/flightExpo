import { XCircle, Lock, CheckCircle, PoundSterling } from "lucide-react";

const FlightPolicy = () => {
  return (
    <section className="space-y-6 w-full">
      {/* Heading */}
      <h2 className="text-2xl font-bold">
        Flight Cancellation & Change Policy
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Non-refundable Card */}
        <div className="border-2 border-blue-600 rounded-2xl p-5 md:p-6 bg-white relative shadow-sm">
          {/* Header */}
          <div className="flex justify-between items-start mb-5">
            <div>
              <p className="font-bold text-base">Fare Rules</p>
            </div>

            {/* Selected Radio */}
            <div className="w-5 h-5 rounded-full border-2 border-blue-600 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
            </div>
          </div>

          {/* List */}
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <XCircle size={18} className="text-red-500 mt-0.5" />
              <span>Non-refundable. Tax non-refundable</span>
            </li>

            <li className="flex items-start gap-2">
              <XCircle size={18} className="text-red-500 mt-0.5" />
              <span>Non-changeable</span>
            </li>

            <li className="flex items-start gap-2">
              <Lock size={18} className="text-gray-500 mt-0.5" />
              <span>All sales are final once booked</span>
            </li>
          </ul>
        </div>

        {/* Flexible Card */}
        <div className="border border-gray-200 rounded-2xl p-5 md:p-6 bg-white relative shadow-sm">
          {/* Recommended Badge */}
          <div className="absolute -top-3 right-4 bg-cyan-500 text-white text-[10px] font-bold px-3 py-1 rounded-full">
            Recommended
          </div>

          {/* Header */}
          <div className="flex justify-between items-start mb-5">
            <div>
              <p className="font-bold text-base">Fare Rules</p>
            </div>

            {/* Empty Radio */}
            <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
          </div>

          {/* List */}
          <ul className="space-y-3 text-sm text-gray-600 mb-6">
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="text-green-500 mt-0.5" />
              <span>Flexible</span>
            </li>

            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="text-green-500 mt-0.5" />
              <span>Non-refundable (partial tax refund only)</span>
            </li>

            <li className="flex items-start gap-2">
              <PoundSterling size={18} className="text-blue-600 mt-0.5" />
              <span>Changeable (Fare difference to pay if any)</span>
            </li>
          </ul>

          {/* Price */}
          <p className="text-right text-2xl font-bold text-gray-900">£667.95</p>
        </div>
      </div>
    </section>
  );
};

export default FlightPolicy;
