const SectionHeading = ({
  subtitle = "The Luxe Standard",
  title = "Elevating Every Journey",
}) => {
  return (
    <div className="text-center mb-10 sm:mb-14 lg:mb-20 px-4">
      {/* Subtitle */}
      <p className="text-primary text-xs sm:text-sm font-medium uppercase tracking-[0.2em] mb-2 sm:mb-3">
        {subtitle}
      </p>

      {/* Main Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-on-background leading-tight">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
