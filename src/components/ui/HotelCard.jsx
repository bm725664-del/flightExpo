const HotelCard = ({
  Key,
  image,
  title = "Aura Santorini Sanctuary",
  description = "Immersive volcanic views meets minimalist Cycladic architecture.",
  rating = "5.0",
}) => {
  return (
    <div
      id={Key}
      className="w-full sm:w-[350px] lg:w-[450px] flex-shrink-0 group"
    >
      {/* Image Container */}
      <div className="relative h-[240px] sm:h-[300px] lg:h-[340px] rounded-2xl overflow-hidden mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Rating Badge */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold text-primary flex items-center gap-1 shadow-md">
          <span
            className="material-symbols-outlined text-[12px]"
            style={{
              fontVariationSettings: '"FILL" 1',
            }}
          >
            star
          </span>

          {rating}
        </div>
      </div>

      {/* Content */}
      <div className="px-1">
        <h4 className="text-xl sm:text-2xl font-semibold text-on-background leading-snug">
          {title}
        </h4>

        <p className="text-sm sm:text-base text-on-surface-variant mt-2 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HotelCard;
