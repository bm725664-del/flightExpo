const CustomHeaderSectionTwo = ({
  title = "Featured Collections",
  badge = "",
  description = "",
  textCenter = false,
}) => {
  return (
    <div
      className={`${
        textCenter
          ? "max-w-3xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20"
          : "mb-10 sm:mb-14 lg:mb-16"
      } px-4 sm:px-0`}
    >
      {/* Badge */}
      {badge && (
        <p className="text-primary uppercase tracking-[0.2em] text-[11px] sm:text-xs md:text-sm font-medium mb-3 sm:mb-4">
          {badge}
        </p>
      )}

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-on-background leading-tight sm:leading-[1.1] mb-4 sm:mb-6">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="text-sm sm:text-base lg:text-lg text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default CustomHeaderSectionTwo;
