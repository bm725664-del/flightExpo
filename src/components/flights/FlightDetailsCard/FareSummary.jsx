import { Plane } from "lucide-react";

const FareSummary = () => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm w-full">
      {/* Header */}
      <div className="bg-gray-100 px-4 md:px-6 py-3 flex items-center gap-2 font-bold text-sm md:text-base text-blue-600">
        <Plane size={18} />
        <span>Fare Summary</span>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 space-y-5">
        {/* Fare */}
        <div className="flex justify-between items-start gap-4">
          <div>
            <p className="font-bold text-sm md:text-base">Fare for 1 Adult</p>

            <p className="text-xs text-gray-500">
              1 x Adult Ticket{" "}
              <span className="font-normal">(Inc. Fees and Tax)</span>
            </p>
          </div>

          <p className="font-bold text-sm md:text-base whitespace-nowrap">
            £8,450.00
          </p>
        </div>

        {/* Taxes */}
        <div className="flex justify-between items-center">
          <p className="font-bold text-sm md:text-base">Taxes & Fees</p>

          <p className="font-bold text-sm md:text-base">£420.00</p>
        </div>

        {/* Total */}
        <div className="border-t border-dashed border-gray-300 pt-4 flex justify-between items-center">
          <p className="font-bold text-base md:text-lg">Total Fare</p>

          <p className="text-2xl md:text-3xl font-bold text-blue-600">
            £8,870.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default FareSummary;
