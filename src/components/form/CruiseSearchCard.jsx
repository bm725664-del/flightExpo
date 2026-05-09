const CruiseSearchCard = () => {
  return (
    <div className="glass-card max-w-4xl mx-auto rounded-3xl p-stack-md shadow-2xl border border-white/30 flex flex-col md:flex-row items-center gap-gutter">
      {/* Destination */}
      <div className="flex-1 w-full text-left px-stack-md border-r border-outline-variant/30 md:mb-0 mb-stack-md">
        <label className="block font-label-sm text-on-surface-variant uppercase mb-1">
          Destination
        </label>

        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">public</span>

          <select className="bg-transparent border-none focus:ring-0 w-full font-h3 text-on-surface py-0 cursor-pointer">
            <option>Caribbean</option>
            <option>Mediterranean</option>
            <option>Arctic</option>
            <option>Galapagos</option>
          </select>
        </div>
      </div>

      {/* Month */}
      <div className="flex-1 w-full text-left px-stack-md border-r border-outline-variant/30 md:mb-0 mb-stack-md">
        <label className="block font-label-sm text-on-surface-variant uppercase mb-1">
          Month
        </label>

        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">
            calendar_today
          </span>

          <select className="bg-transparent border-none focus:ring-0 w-full font-h3 text-on-surface py-0 cursor-pointer">
            <option>July 2024</option>
            <option>August 2024</option>
            <option>September 2024</option>
          </select>
        </div>
      </div>

      {/* Cruise Line */}
      <div className="flex-1 w-full text-left px-stack-md">
        <label className="block font-label-sm text-on-surface-variant uppercase mb-1">
          Cruise Line
        </label>

        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">
            directions_boat
          </span>

          <select className="bg-transparent border-none focus:ring-0 w-full font-h3 text-on-surface py-0 cursor-pointer">
            <option>Celebrity Cruises</option>
            <option>Royal Caribbean</option>
            <option>Silver Sea</option>
          </select>
        </div>
      </div>

      {/* Search Button */}
      <button className="bg-primary-container text-on-primary-container h-16 w-16 rounded-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg">
        <span className="material-symbols-outlined text-[32px]">search</span>
      </button>
    </div>
  );
};

export default CruiseSearchCard;
