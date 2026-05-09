const FeatureCard = ({
  cardIcon = "concierge",
  cardTitle = "Elite Concierge",
  cardDescription = "24/7 personalized service from experts who know your preferences before you do. Your wishes are our commands.",
}) => {
  return (
    <div className="bg-surface p-5 sm:p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/10 w-full">
      {/* Icon */}
      <div className="bg-primary/10 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
        <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">
          {cardIcon}
        </span>
      </div>

      {/* Content */}
      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 text-on-background leading-snug">
        {cardTitle}
      </h4>

      <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
        {cardDescription}
      </p>
    </div>
  );
};

export default FeatureCard;
