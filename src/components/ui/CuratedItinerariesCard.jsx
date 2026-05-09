import React from "react";

const CuratedItinerariesCard = ({ item, index }) => {
  return (
    <div
      key={index}
      className="bg-surface p-stack-md rounded-3xl shadow-md flex gap-stack-md hover:shadow-xl transition-all group"
    >
      {/* Image */}
      <div className="w-1/3 rounded-2xl overflow-hidden bg-surface-container-highest flex items-center justify-center">
        <img
          className="w-full h-full object-cover"
          src={item.image}
          alt={item.title}
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex justify-between items-start mb-2">
          <span className="bg-tertiary/10 text-tertiary px-3 py-1 rounded-full font-label-sm">
            {item.duration}
          </span>

          <span className="font-h3 text-primary">{item.price}</span>
        </div>

        <h4 className="font-h3 text-h3 mb-2 group-hover:text-primary transition-colors">
          {item.title}
        </h4>

        <div className="flex items-center gap-2 text-on-surface-variant font-label-sm mb-4 flex-wrap">
          {item.route.map((place, idx) => (
            <React.Fragment key={idx}>
              <span>{place}</span>

              {idx < item.route.length - 1 && (
                <span className="material-symbols-outlined text-[14px]">
                  east
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        <button className="w-full py-2 bg-secondary-container text-on-secondary-container rounded-xl font-label-md">
          Explore Route
        </button>
      </div>
    </div>
  );
};

export default CuratedItinerariesCard;
