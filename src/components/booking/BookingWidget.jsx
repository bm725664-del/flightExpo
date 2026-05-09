"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Popover, Transition, Listbox } from "@headlessui/react";
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

const tripOptions = [
  { label: "Round Trip", value: "round-trip" },
  { label: "One Way", value: "one-way" },
  { label: "Multi City", value: "multi-city" },
];

const cabinOptions = ["Economy", "Premium Economy", "Business", "First Class"];

export default function ModernFlightSearch() {
  const [tripType, setTripType] = useState("round-trip");
  const [loading, setLoading] = useState(false);

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
      console.log("Search Payload:", { tripType, formData, passengers });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12"
        >
          <p className="text-blue-600 uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold mb-4">
            Luxury Flight Booking
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Search to unlock the
            <span className="text-blue-600 block mt-2">Cheapest Deals</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Compare premium fares from top global airlines with real-time
            pricing and exclusive luxury travel offers.
          </p>
        </motion.div>

        {/* Trip Type Selector */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center mb-6 sm:mb-8"
        >
          <div className="flex flex-wrap items-center gap-2 rounded-2xl bg-white border border-gray-200 p-2 shadow-sm">
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
          className="bg-white rounded-[28px] border border-gray-100 shadow-2xl overflow-visible"
        >
          <div className="grid grid-cols-1 xl:grid-cols-12 relative">
            {/* FROM */}
            <div className="xl:col-span-3 border-b xl:border-b-0 xl:border-r border-gray-100 relative p-5 sm:p-6 hover:bg-gray-50 transition-colors">
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

              {/* Swap Button (Desktop) */}
              <button
                type="button"
                onClick={handleSwapLocations}
                className="hidden xl:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-lg items-center justify-center hover:scale-110 hover:border-blue-200 transition-all text-blue-600"
              >
                <ArrowLeftRight size={18} />
              </button>
            </div>

            {/* TO */}
            <div className="border-t border-b xl:border-b-0 xl:border-r border-gray-100 p-5 sm:p-6 hover:bg-gray-50 transition-colors">
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
            <div className="xl:col-span-4 grid grid-cols-1 sm:grid-cols-2 border-b xl:border-b-0 xl:border-r border-gray-100">
              <div className="border-b sm:border-b-0 sm:border-r border-gray-100 p-5 sm:p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                    <CalendarDays size={22} className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">
                      Departure
                    </p>
                    <input
                      type="date"
                      value={formData.departureDate}
                      onChange={(e) =>
                        handleInputChange("departureDate", e.target.value)
                      }
                      className="w-full bg-transparent text-sm sm:text-base font-semibold text-gray-900 outline-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <AnimatePresence mode="popLayout">
                {tripType !== "one-way" && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-5 sm:p-6 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                        <CalendarDays size={22} className="text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">
                          Return
                        </p>
                        <input
                          type="date"
                          value={formData.returnDate}
                          onChange={(e) =>
                            handleInputChange("returnDate", e.target.value)
                          }
                          className="w-full bg-transparent text-sm sm:text-base font-semibold text-gray-900 outline-none cursor-pointer"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* TRAVELERS & CABIN POPOVER */}
            <div className="xl:col-span-2 relative">
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
                      <Popover.Panel className="absolute right-0 z-50 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
                        {/* Passenger Controls */}
                        <div className="space-y-4 mb-6">
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
                              className="flex items-center justify-between"
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
                                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-50"
                                  disabled={
                                    passenger.type === "adults"
                                      ? passengers.adults <= 1
                                      : passengers[passenger.type] === 0
                                  }
                                >
                                  <Minus size={14} />
                                </button>
                                <span className="w-4 text-center font-semibold">
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
                                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50"
                                >
                                  <Plus size={14} />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Cabin Selection */}
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-sm font-semibold text-gray-900 mb-3">
                            Cabin Class
                          </p>
                          <Listbox
                            value={formData.cabin}
                            onChange={(val) => handleInputChange("cabin", val)}
                          >
                            <div className="relative">
                              <Listbox.Button className="w-full relative border border-gray-200 rounded-xl p-3 text-left sm:text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                                <span className="block truncate">
                                  {formData.cabin}
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                  <ChevronDown
                                    className="h-4 w-4 text-gray-400"
                                    aria-hidden="true"
                                  />
                                </span>
                              </Listbox.Button>
                              <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50">
                                  {cabinOptions.map((cabin, cabinIdx) => (
                                    <Listbox.Option
                                      key={cabinIdx}
                                      className={({ active }) =>
                                        `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                                          active
                                            ? "bg-blue-50 text-blue-900"
                                            : "text-gray-900"
                                        }`
                                      }
                                      value={cabin}
                                    >
                                      {({ selected }) => (
                                        <>
                                          <span
                                            className={`block truncate ${selected ? "font-medium" : "font-normal"}`}
                                          >
                                            {cabin}
                                          </span>
                                          {selected ? (
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                                              <Check
                                                className="h-4 w-4"
                                                aria-hidden="true"
                                              />
                                            </span>
                                          ) : null}
                                        </>
                                      )}
                                    </Listbox.Option>
                                  ))}
                                </Listbox.Options>
                              </Transition>
                            </div>
                          </Listbox>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </div>
          </div>

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
                  <Search size={20} />
                  Search Flights
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
