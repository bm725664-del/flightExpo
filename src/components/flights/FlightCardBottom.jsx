import { ArrowRight, UtensilsCrossed } from "lucide-react";

const FlightCardBottom = () => {
  return (
    <>
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
            text-emerald-600
          "
        >
          <UtensilsCrossed size={16} />
          World-class dining experience
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
    </>
  );
};

export default FlightCardBottom;
