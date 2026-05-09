import { Sun, Sunrise, ChevronDown } from "lucide-react";
import CustomCheckbox from "../../ui/CustomCheckbox";
import PriceRange from "../../ui/PriceRange";
import CustomSelect from "../../ui/CustomSelect";
const stopsData = [
  {
    label: "Non-stop",
    price: "$1,240",
    checked: true,
  },
  {
    label: "1 Stop",
    price: "$890",
    checked: false,
  },
  {
    label: "2+ Stops",
    price: "$650",
    checked: false,
  },
];

const airlinesData = [
  {
    label: "British Airways",
    checked: false,
  },
  {
    label: "Japan Airlines",
    checked: true,
  },
  {
    label: "Emirates",
    checked: false,
  },
];

const departureTimes = [
  {
    label: "Early Morning",
    time: "00:00 - 06:00",
    icon: Sunrise,
    active: false,
  },
  {
    label: "Morning",
    time: "06:00 - 12:00",
    icon: Sun,
    active: true,
  },
];

export default function FlightFiltersSidebar() {
  return (
    <aside className="sticky top-28 col-span-12 space-y-6 lg:col-span-3">
      <div className="rounded-3xl border border-white/10 bg-white/70 p-6 shadow-xl backdrop-blur-xl dark:bg-neutral-900/70">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
            Filters
          </h3>

          <button className="text-sm font-semibold text-primary transition hover:underline">
            Clear all
          </button>
        </div>

        {/* Stops */}
        <div className="mb-8">
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-neutral-900 dark:text-white">
            Stops
          </h4>

          <div className="space-y-4">
            {stopsData.map((stop) => (
              <CustomCheckbox label={stop.label} price={stop.price} checked />
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-8 border-t border-neutral-200 pt-8 dark:border-neutral-800">
          <h4 className="mb-5 text-sm font-bold uppercase tracking-wide text-neutral-900 dark:text-white">
            Price Range
          </h4>

          <PriceRange />
        </div>

        {/* Departure Times */}
        <div className="mb-8 border-t border-neutral-200 pt-8 dark:border-neutral-800">
          <h4 className="mb-5 text-sm font-bold uppercase tracking-wide text-neutral-900 dark:text-white">
            Departure Times
          </h4>

          <div className="grid grid-cols-2 gap-3">
            {departureTimes.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.label}
                  className={`rounded-2xl border p-4 text-center transition-all duration-300 ${
                    item.active
                      ? "border-primary bg-primary/10"
                      : "border-neutral-200 hover:border-primary hover:bg-primary/5 dark:border-neutral-800"
                  }`}
                >
                  <Icon
                    size={22}
                    className={`mx-auto mb-2 ${
                      item.active ? "text-primary" : "text-neutral-500"
                    }`}
                  />

                  <span
                    className={`block text-[11px] font-bold uppercase tracking-wide ${
                      item.active
                        ? "text-primary"
                        : "text-neutral-700 dark:text-neutral-300"
                    }`}
                  >
                    {item.label}
                  </span>

                  <span
                    className={`text-[11px] ${
                      item.active ? "text-primary/70" : "text-neutral-400"
                    }`}
                  >
                    {item.time}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Airlines */}
        <div className="mb-8 border-t border-neutral-200 pt-8 dark:border-neutral-800">
          <h4 className="mb-5 text-sm font-bold uppercase tracking-wide text-neutral-900 dark:text-white">
            Airlines
          </h4>

          <div className="space-y-4">
            {airlinesData.map((airline) => (
              <label
                key={airline.label}
                className="flex cursor-pointer items-center gap-3 text-sm text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              >
                <input
                  type="checkbox"
                  defaultChecked={airline.checked}
                  className="h-5 w-5 rounded border-neutral-300 text-primary focus:ring-primary/20"
                />

                {airline.label}
              </label>
            ))}
          </div>
        </div>

        {/* Cabin Class */}
        <div className="border-t border-neutral-200 pt-8 dark:border-neutral-800">
          <h4 className="mb-5 text-sm font-bold uppercase tracking-wide text-neutral-900 dark:text-white">
            Cabin Class
          </h4>

          <div className="relative">
            <CustomSelect
              defaultValue="Business Class"
              options={[
                "Economy",
                "Premium Economy",
                "Business Class",
                "First Class",
              ]}
            />

            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500"
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
