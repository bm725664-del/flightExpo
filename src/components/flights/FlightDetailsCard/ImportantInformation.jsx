import { useState } from "react";
import { ChevronDown } from "lucide-react";

const ImportantInformation = () => {
  const [open, setOpen] = useState(true);
  const [checked, setChecked] = useState(false);

  return (
    <section className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden w-full">
      {/* Accordion Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 md:px-6 py-5 font-bold text-sm md:text-base hover:bg-gray-50 transition-colors"
      >
        <span className="text-left">
          Please read this Important Information
        </span>

        <ChevronDown
          size={20}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Content */}
      {open && (
        <div className="px-4 md:px-6 pb-5">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
              className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />

            <span className="text-xs md:text-sm text-gray-600 leading-relaxed">
              I accept that the information I provided is accurate and that I
              have read and agree to the Important Information outlined above,
              Terms & Conditions, and Privacy Policy.
            </span>
          </label>
        </div>
      )}
    </section>
  );
};

export default ImportantInformation;
