"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Popover, Transition, Listbox } from "@headlessui/react";
import { Calendar } from "primereact/calendar";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import {
  ArrowLeftRight,
  CalendarDays,
  ChevronDown,
  PlaneLanding,
  PlaneTakeoff,
  Search,
  Users,
  Check,
  Plus,
  Minus,
} from "lucide-react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const tripOptions = [
  { label: "Round Trip", value: "round-trip" },
  { label: "One Way", value: "one-way" },
  { label: "Multi City", value: "multi-city" },
];

const cabinOptions = ["Economy", "Premium Economy", "Business", "First Class"];

export default function ModernFlightSearch() {
  const [tripType, setTripType] = useState("round-trip");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    from: "London - LHR",
    to: "",
    departureDate: "",
    returnDate: "",
    cabin: cabinOptions[0],
  });

  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });

  const totalPassengers = useMemo(() => {
    return passengers.adults + passengers.children + passengers.infants;
  }, [passengers]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePassengerChange = (type, operation) => {
    setPassengers((prev) => {
      const current = prev[type];
      if (operation === "increment") {
        return { ...prev, [type]: current + 1 };
      }
      if (operation === "decrement" && current > 0) {
        // Ensure at least 1 adult
        if (type === "adults" && current === 1) return prev;
        return { ...prev, [type]: current - 1 };
      }
      return prev;
    });
  };

  const handleSwapLocations = () => {
    setFormData((prev) => ({
      ...prev,
      from: prev.to,
      to: prev.from,
    }));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      navigate("/flight/listing");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full py-8 sm:py-12 lg:py-18">
      <div className="max-w-screen-xl mx-auto ">
        {/* Trip Type Selector */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-start"
        >
          <div className="flex flex-wrap rounded-t-xl items-center gap-2 bg-white border border-gray-200 p-2 shadow-sm">
            {tripOptions.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setTripType(item.value)}
                className={`
                  relative px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-300
                  ${tripType === item.value ? "text-white" : "text-gray-500 hover:bg-gray-100"}
                `}
              >
                {tripType === item.value && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-blue-600 rounded-xl shadow-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Search Form */}
        <motion.form
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSearch}
          className="rounded-tr-xl rounded-b-xl   border border-gray-100 shadow-2xl overflow-visible bg-white"
        >
          <div className="flex flex-col xl:flex-row relative ">
            {/* FROM */}
            <div className="flex-1 basis-1/4 border-b xl:border-b-0 xl:border-r border-gray-100 relative p-5 sm:p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <PlaneTakeoff size={22} className="text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">
                    Flying From
                  </p>
                  <input
                    type="text"
                    value={formData.from}
                    onChange={(e) => handleInputChange("from", e.target.value)}
                    placeholder="City or Airport"
                    className="w-full bg-transparent text-lg sm:text-xl font-bold text-gray-900 placeholder:text-gray-300 outline-none truncate"
                  />
                </div>
              </div>
              {tripType !== "multi-city" && (
                <button
                  type="button"
                  onClick={handleSwapLocations}
                  className="hidden xl:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-lg items-center justify-center hover:scale-110 hover:border-blue-200 transition-all text-blue-600"
                >
                  <ArrowLeftRight size={18} />
                </button>
              )}
            </div>

            {/* TO */}
            <div className="flex-1 basis-1/4 border-t border-b xl:border-b-0 xl:border-r border-gray-100 p-5 sm:p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <PlaneLanding size={22} className="text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">
                    Flying To
                  </p>
                  <input
                    type="text"
                    value={formData.to}
                    onChange={(e) => handleInputChange("to", e.target.value)}
                    placeholder="Destination"
                    className="w-full bg-transparent text-lg sm:text-xl font-bold text-gray-900 placeholder:text-gray-300 outline-none truncate"
                  />
                </div>
              </div>
            </div>

            {/* DATES */}
            <div className="flex-1 basis-1/3 flex flex-col sm:flex-row border-b xl:border-b-0 xl:border-r border-gray-100">
              <div className="flex-1 basis-1/2 border-b sm:border-b-0 sm:border-r border-gray-100 p-5 sm:p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                    <CalendarDays size={22} className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">
                      Departure
                    </p>
                    <Calendar
                      value={formData.departureDate}
                      onChange={(e) =>
                        handleInputChange("departureDate", e.value)
                      }
                      dateFormat="dd/mm/yy"
                      placeholder="Select departure"
                      showIcon={false}
                      inline={false}
                      className="w-full date-picker-custom"
                      inputClassName="bg-transparent text-sm sm:text-base font-semibold text-gray-900 outline-none cursor-pointer w-full"
                    />
                  </div>
                </div>
              </div>

              <AnimatePresence mode="popLayout">
                {tripType !== "one-way" && tripType !== "multi-city" && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex-1 basis-1/2 p-5 sm:p-6 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                        <CalendarDays size={22} className="text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">
                          Return
                        </p>
                        <Calendar
                          value={formData.returnDate}
                          onChange={(e) =>
                            handleInputChange("returnDate", e.value)
                          }
                          dateFormat="dd/mm/yy"
                          placeholder="Select return"
                          showIcon={false}
                          inline={false}
                          className="w-full date-picker-custom"
                          inputClassName="bg-transparent text-sm sm:text-base font-semibold text-gray-900 outline-none cursor-pointer w-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* TRAVELERS & CABIN POPOVER */}
            <div className="flex-1 basis-1/5 relative">
              <Popover className="relative h-full">
                {({ open }) => (
                  <>
                    <Popover.Button className="w-full h-full p-5 sm:p-6 flex items-start gap-4 hover:bg-gray-50 transition-colors outline-none text-left">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                        <Users size={22} className="text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">
                          Travelers
                        </p>
                        <h4 className="font-bold text-gray-900">
                          {totalPassengers} Traveler
                          {totalPassengers > 1 ? "s" : ""}
                        </h4>
                        <p className="text-sm text-blue-600 font-medium truncate">
                          {formData.cabin}
                        </p>
                      </div>
                      <ChevronDown
                        size={18}
                        className={`text-gray-400 transition-transform mt-1 ${open ? "rotate-180" : ""}`}
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute right-0 z-999 mt-3 w-[600px] rounded-3xl border border-gray-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                        <div className="flex">
                          {/* Passenger Section */}
                          <div className="flex-1 p-5">
                            <div className="mb-5">
                              <h3 className="text-base font-semibold text-gray-900">
                                Passengers
                              </h3>
                              <p className="text-sm text-gray-500">
                                Select traveler count
                              </p>
                            </div>

                            <div className="space-y-4">
                              {[
                                {
                                  type: "adults",
                                  label: "Adults",
                                  desc: "12+ years",
                                },
                                {
                                  type: "children",
                                  label: "Children",
                                  desc: "2-11 years",
                                },
                                {
                                  type: "infants",
                                  label: "Infants",
                                  desc: "Under 2 years",
                                },
                              ].map((passenger) => (
                                <div
                                  key={passenger.type}
                                  className="flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3"
                                >
                                  <div>
                                    <p className="font-semibold text-gray-900">
                                      {passenger.label}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                      {passenger.desc}
                                    </p>
                                  </div>

                                  <div className="flex items-center gap-3">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        handlePassengerChange(
                                          passenger.type,
                                          "decrement",
                                        )
                                      }
                                      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:bg-gray-100 disabled:opacity-40"
                                      disabled={
                                        passenger.type === "adults"
                                          ? passengers.adults <= 1
                                          : passengers[passenger.type] === 0
                                      }
                                    >
                                      <Minus size={15} />
                                    </button>

                                    <span className="min-w-[20px] text-center text-base font-semibold text-gray-900">
                                      {passengers[passenger.type]}
                                    </span>

                                    <button
                                      type="button"
                                      onClick={() =>
                                        handlePassengerChange(
                                          passenger.type,
                                          "increment",
                                        )
                                      }
                                      className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white transition hover:scale-105"
                                    >
                                      <Plus size={15} />
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Cabin Section */}
                          <div className="flex-1 border-t border-gray-100 bg-gray-50 p-5">
                            <div className="mb-4">
                              <h3 className="text-base font-semibold text-gray-900">
                                Cabin Class
                              </h3>
                              <p className="text-sm text-gray-500">
                                Choose your preferred cabin
                              </p>
                            </div>

                            <Listbox
                              value={formData.cabin}
                              onChange={(val) =>
                                handleInputChange("cabin", val)
                              }
                            >
                              <div className="relative">
                                <Listbox.Button className="relative w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-left text-sm font-medium text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-black">
                                  <span className="block truncate">
                                    {formData.cabin}
                                  </span>

                                  <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                                    <ChevronDown className="h-4 w-4 text-gray-400" />
                                  </span>
                                </Listbox.Button>

                                <Transition
                                  as={Fragment}
                                  leave="transition ease-in duration-100"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Listbox.Options className="absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-2xl border border-gray-100 bg-white py-2 shadow-2xl focus:outline-none">
                                    {cabinOptions.map((cabin, cabinIdx) => (
                                      <Listbox.Option
                                        key={cabinIdx}
                                        className={({ active }) =>
                                          `relative cursor-pointer select-none px-4 py-3 transition ${
                                            active
                                              ? "bg-primary text-white"
                                              : "text-gray-900"
                                          }`
                                        }
                                        value={cabin}
                                      >
                                        {({ selected }) => (
                                          <div className="flex items-center justify-between">
                                            <span
                                              className={`truncate ${
                                                selected
                                                  ? "font-semibold"
                                                  : "font-medium"
                                              }`}
                                            >
                                              {cabin}
                                            </span>

                                            {selected && (
                                              <Check className="h-4 w-4" />
                                            )}
                                          </div>
                                        )}
                                      </Listbox.Option>
                                    ))}
                                  </Listbox.Options>
                                </Transition>
                              </div>
                            </Listbox>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </div>
          </div>

          {/* Multi City Form */}
          {tripType == "multi-city" && (
            <div className="flex flex-col xl:flex-row relative ">
              {/* FROM */}
              <div className="flex-1 basis-1/4 border-b xl:border-b-0 xl:border-r border-gray-100 relative p-5 sm:p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                    <PlaneTakeoff size={22} className="text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">
                      Returning From
                    </p>
                    <input
                      type="text"
                      value={formData.from}
                      onChange={(e) =>
                        handleInputChange("from", e.target.value)
                      }
                      placeholder="City or Airport"
                      className="w-full bg-transparent text-lg sm:text-xl font-bold text-gray-900 placeholder:text-gray-300 outline-none truncate"
                    />
                  </div>
                </div>
              </div>

              {/* TO */}
              <div className="flex-1 basis-1/4 border-t border-b xl:border-b-0 xl:border-r border-gray-100 p-5 sm:p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                    <PlaneLanding size={22} className="text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">
                      Returning To
                    </p>
                    <input
                      type="text"
                      value={formData.to}
                      onChange={(e) => handleInputChange("to", e.target.value)}
                      placeholder="Destination"
                      className="w-full bg-transparent text-lg sm:text-xl font-bold text-gray-900 placeholder:text-gray-300 outline-none truncate"
                    />
                  </div>
                </div>
              </div>

              {/* DATES */}
              <div className="flex-1 basis-1/3 flex flex-col sm:flex-row border-b xl:border-b-0 xl:border-r border-gray-100">
                <div className="flex-1 basis-1/2 border-b sm:border-b-0 sm:border-r border-gray-100 p-5 sm:p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                      <CalendarDays size={22} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">
                        Return Date
                      </p>
                      <Calendar
                        value={formData.departureDate}
                        onChange={(e) =>
                          handleInputChange("departureDate", e.value)
                        }
                        dateFormat="dd/mm/yy"
                        placeholder="Select departure"
                        showIcon={false}
                        inline={false}
                        className="w-full date-picker-custom"
                        inputClassName="bg-transparent text-sm sm:text-base font-semibold text-gray-900 outline-none cursor-pointer w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Swap */}
          <div className="xl:hidden flex justify-center py-3 border-t border-gray-100 relative z-10 bg-white">
            <button
              type="button"
              onClick={handleSwapLocations}
              className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ArrowLeftRight size={18} className="text-blue-600" />
            </button>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 bg-gray-50/50 p-4 sm:p-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold mb-1">
                Trusted Luxury Booking Platform
              </p>
              <h3 className="font-semibold text-gray-900">
                Real-time premium airline deals
              </h3>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full lg:w-auto lg:min-w-[240px] h-14 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all flex items-center justify-center gap-3 shadow-[0_8px_30px_rgba(37,99,235,0.24)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Searching...
                </>
              ) : (
                <>
                  <Search size={20} /> Search Flights
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
