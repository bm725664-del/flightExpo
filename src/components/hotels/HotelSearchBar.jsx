import { useState } from "react";

export default function HotelSearchBar() {
  const [searchData, setSearchData] = useState({
    location: "",
    dates: "",
    guests: "2 Adults",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto bg-white/70 backdrop-blur-3xl border border-white/30 shadow-[0_20px_80px_rgba(0,0,0,0.15)] rounded-3xl overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-4">
        {/* Location */}
        <div className="px-5 sm:px-6 lg:px-8 py-5 sm:py-6 border-b md:border-b-0 md:border-r border-outline-variant/20">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-2 font-medium">
            Location
          </p>

          <input
            type="text"
            placeholder="Where are you going?"
            value={searchData.location}
            onChange={(e) =>
              setSearchData({
                ...searchData,
                location: e.target.value,
              })
            }
            className="w-full bg-transparent border-none focus:ring-0 focus:outline-none text-sm sm:text-base text-on-surface placeholder:text-on-surface-variant/60"
          />
        </div>

        {/* Dates */}
        <div className="px-5 sm:px-6 lg:px-8 py-5 sm:py-6 border-b md:border-b-0 md:border-r border-outline-variant/20">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-2 font-medium">
            Dates
          </p>

          <input
            type="date"
            value={searchData.dates}
            onChange={(e) =>
              setSearchData({
                ...searchData,
                dates: e.target.value,
              })
            }
            className="w-full bg-transparent border-none focus:ring-0 focus:outline-none text-sm sm:text-base text-on-surface"
          />
        </div>

        {/* Guests */}
        <div className="px-5 sm:px-6 lg:px-8 py-5 sm:py-6 border-b md:border-b-0 md:border-r border-outline-variant/20">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-2 font-medium">
            Guests
          </p>

          <select
            value={searchData.guests}
            onChange={(e) =>
              setSearchData({
                ...searchData,
                guests: e.target.value,
              })
            }
            className="w-full bg-transparent border-none focus:ring-0 focus:outline-none text-sm sm:text-base text-on-surface"
          >
            <option>1 Adult</option>
            <option>2 Adults</option>
            <option>Family Suite</option>
          </select>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="bg-primary text-white flex items-center justify-center gap-3 px-6 py-5 sm:py-6 md:min-h-full hover:bg-primary/90 transition-all duration-300 font-semibold tracking-[0.15em] text-sm sm:text-base"
        >
          <span className="material-symbols-outlined text-xl">search</span>
          SEARCH
        </button>
      </div>
    </form>
  );
}
