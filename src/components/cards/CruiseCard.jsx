import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const CruiseCard = ({ item }) => {
  return (
    <NavLink to="/cruise/details">
      <div className="group relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] w-full">
        {/* Background Image */}
        <img
          className="absolute inset-0 w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
          src={item?.image}
          alt={item?.title}
        />

        {/* Overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-5">
            {/* Title + Duration */}
            <div className="flex justify-between items-start gap-3 mb-3">
              <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold leading-snug w-[70%]">
                {item?.title}
              </h3>

              <span className="bg-primary text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap">
                {item?.duration}
              </span>
            </div>

            {/* Departure */}
            <div className="flex items-center gap-2 text-white/70 text-xs sm:text-sm mb-4">
              <span className="material-symbols-outlined text-sm">
                location_on
              </span>
              <span>From {item?.departure}</span>
            </div>

            {/* Highlights */}
            <div className="border-t border-white/10 pt-4 flex flex-col gap-3">
              <div className="text-white/60 text-[10px] sm:text-xs uppercase tracking-[0.2em]">
                Highlights
              </div>

              <p className="text-white text-sm sm:text-base font-medium leading-relaxed">
                {item?.highlights?.join(" • ")}
              </p>

              {/* Price */}
              <div className="flex justify-between items-center mt-2 gap-3">
                <div>
                  <span className="text-white/70 text-xs sm:text-sm">
                    Starting from
                  </span>

                  <span className="text-white font-bold text-lg sm:text-2xl block">
                    £{item?.price?.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-center w-11 h-11 rounded-full bg-white/15 border border-white/20 text-white transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default CruiseCard;
