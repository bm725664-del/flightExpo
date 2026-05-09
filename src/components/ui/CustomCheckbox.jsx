export default function CustomCheckbox({ label, checked = false, price }) {
  return (
    <label className="group flex cursor-pointer items-center justify-between">
      <div className="flex items-center gap-3">
        {/* Hidden Input */}
        <input
          type="checkbox"
          defaultChecked={checked}
          className="peer sr-only"
        />

        {/* Custom Checkbox */}
        <div
          className="
            flex h-5 w-5 items-center justify-center rounded-md
            border border-neutral-300 bg-white
            transition-all duration-200
            peer-checked:border-primary
            peer-checked:bg-primary
            dark:border-neutral-700
            dark:bg-neutral-900
          "
        >
          <svg
            className="
              h-3.5 w-3.5 text-white opacity-0
              transition-opacity duration-200
              peer-checked:opacity-100
            "
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Label */}
        <span
          className="
            text-sm text-neutral-600 transition-colors
            group-hover:text-neutral-900
            dark:text-neutral-400
            dark:group-hover:text-white
          "
        >
          {label}
        </span>
      </div>

      {/* Price */}
      {price && (
        <span className="text-sm font-medium text-neutral-500">{price}</span>
      )}
    </label>
  );
}
