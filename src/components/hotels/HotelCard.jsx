const HotelCard = ({ hotel }) => {
  return (
    <div className="bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
      {/* Image */}
      <div className="h-56 sm:h-64 relative overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Rating */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-md">
          <span
            className="material-symbols-outlined text-amber-500 text-sm"
            style={{
              fontVariationSettings: '"FILL" 1',
            }}
          >
            star
          </span>

          {hotel.rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <div className="flex justify-between items-start gap-4 mb-2">
          <h4 className="text-lg sm:text-xl font-bold text-on-background leading-snug">
            {hotel.title}
          </h4>

          <span className="text-primary font-bold text-base sm:text-lg whitespace-nowrap">
            ${hotel.price}
            <span className="text-on-surface-variant font-normal text-xs sm:text-sm">
              /night
            </span>
          </span>
        </div>

        {/* Location */}
        <p className="text-on-surface-variant text-sm sm:text-base mb-5 flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">location_on</span>

          {hotel.location}
        </p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2">
          {hotel.amenities.map((item, index) => (
            <span
              key={index}
              className="px-3 py-2 bg-tertiary/10 text-tertiary rounded-full text-xs sm:text-sm flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-sm">
                {item.icon}
              </span>

              {item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HotelCard;
