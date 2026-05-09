import { ChevronDown } from "lucide-react";

export default function CustomSelect({ options = [], defaultValue }) {
  return (
    <div className="relative">
      <select
        defaultValue={defaultValue}
        className="
          w-full appearance-none rounded-2xl
          border border-neutral-200
          bg-white px-4 py-3.5
          text-sm font-semibold text-neutral-900
          shadow-sm outline-none
          transition-all duration-300
          hover:border-neutral-300
          focus:border-primary
          focus:ring-4 focus:ring-primary/10
          dark:border-neutral-800
          dark:bg-neutral-900
          dark:text-white
        "
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>

      <ChevronDown
        size={18}
        className="
          pointer-events-none absolute
          right-4 top-1/2
          -translate-y-1/2
          text-neutral-500
        "
      />
    </div>
  );
}
