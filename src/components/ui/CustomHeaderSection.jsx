const CustomHeaderSection = ({
  badge = "",
  heading,
  subHeading,
  buttonName,
  onClick,
}) => {
  return (
    <div
      className="
        flex
        flex-col
        lg:flex-row
        lg:items-end
        lg:justify-between
        gap-5
        md:gap-6
        mb-8
        md:mb-12
      "
    >
      {/* Left Content */}
      <div className="max-w-3xl">
        {badge && (
          <p className="text-primary uppercase tracking-[0.2em] text-label-sm font-bold mb-2">
            {badge}
          </p>
        )}
        <h2
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-bold
            leading-tight
            text-on-background
            mb-3
            md:mb-4
          "
        >
          {heading}
        </h2>

        <p
          className="
            text-sm
            sm:text-base
            md:text-lg
            leading-relaxed
            text-on-surface-variant
            max-w-2xl
          "
        >
          {subHeading}
        </p>
      </div>

      {buttonName && (
        <button
          className="text-primary w-fit font-label-md border-b border-primary pb-1 flex items-center gap-1 group"
          onClick={onClick}
        >
          {" "}
          {buttonName}{" "}
          <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
            {" "}
            arrow_forward{" "}
          </span>{" "}
        </button>
      )}
    </div>
  );
};

export default CustomHeaderSection;
