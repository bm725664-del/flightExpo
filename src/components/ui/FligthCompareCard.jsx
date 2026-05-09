const FligthCompareCard = ({
  title = "Europe",
  subtitle = "Premium Business Class",
  badge = "Trending",
  routes = [
    { from: "From London", price: "$890" },
    { from: "From New York", price: "$950" },
    { from: "From Tokyo", price: "$1,100" },
  ],
  buttonText = "View All European Routes",
}) => {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm border border-outline-variant/10 flex flex-col gap-5 hover:shadow-xl transition-all duration-300 w-full">
      {/* Header */}
      <div className="flex justify-between items-start gap-3">
        <div>
          <h4 className="text-xl sm:text-2xl font-semibold text-on-background leading-snug">
            {title}
          </h4>

          <p className="text-sm sm:text-base text-on-surface-variant mt-1">
            {subtitle}
          </p>
        </div>

        {/* Badge */}
        <div className="bg-primary-fixed text-primary px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap">
          {badge}
        </div>
      </div>

      {/* Routes */}
      <div className="space-y-2 sm:space-y-3 mt-1">
        {routes.map((route, index) => (
          <div
            key={index}
            className={`flex justify-between items-center py-3 ${
              index !== routes.length - 1
                ? "border-b border-outline-variant/10"
                : ""
            }`}
          >
            <span className="text-sm sm:text-base text-on-surface-variant">
              {route.from}
            </span>

            <span className="font-bold text-primary text-sm sm:text-base">
              {route.price}
            </span>
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="mt-auto w-full py-3 sm:py-4 rounded-xl border border-primary text-primary text-sm sm:text-base font-medium hover:bg-primary hover:text-white transition-all duration-300">
        {buttonText}
      </button>
    </div>
  );
};

export default FligthCompareCard;
