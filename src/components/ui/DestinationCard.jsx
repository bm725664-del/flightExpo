import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
const DestinationCard = ({ cardImage, country, title, description, href }) => {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        aspect-[4/5]
        sm:aspect-[4/5]
        md:aspect-[4/5]
        cursor-pointer
        bg-slate-200
        shadow-[0_10px_40px_rgba(0,0,0,0.12)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)]
      "
    >
      {/* Background Image */}
      <img
        src={cardImage}
        alt={title}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          rounded-3xl
          transition-transform
          duration-700
          group-hover:scale-110
        "
      />

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          rounded-3xl
          bg-gradient-to-t
          from-black/90
          via-black/20
          to-transparent
        "
      />

      {/* Content */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-10
          p-4
          sm:p-5
          md:p-6
        "
      >
        {/* Country */}
        <p
          className="
            text-primary-fixed-dim
            text-[10px]
            sm:text-xs
            font-bold
            uppercase
            tracking-[3px]
            mb-2
          "
        >
          {country}
        </p>

        {/* Title */}
        <h3
          className="
            text-white
            font-bold
            leading-tight
            text-xl
            sm:text-2xl
            md:text-3xl
            mb-2
            line-clamp-2
          "
        >
          {title}
        </h3>

        {/* Bottom Row */}
        <div className="flex items-end justify-between gap-3">
          {/* Description */}
          <p
            className="
              text-white/75
              text-xs
              sm:text-sm
              leading-relaxed
              line-clamp-2
              max-w-[80%]
            "
          >
            {description}
          </p>

          {/* Arrow Button */}
          <NavLink
            to={href}
            className="
              flex-shrink-0
              w-11
              h-11
              sm:w-12
              sm:h-12
              rounded-full
              bg-white/15
              backdrop-blur-xl
              border
              border-white/20
              flex
              items-center
              justify-center
              text-white
              transition-all
              duration-300
              group-hover:bg-primary
              group-hover:scale-110
              group-hover:rotate-[-10deg]
            "
          >
            <ArrowRight
              size={20}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
              "
            />
          </NavLink>
        </div>
      </div>

      {/* Shine Effect */}
      <div
        className="
          absolute
          inset-0
          rounded-3xl
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-700
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
          -translate-x-full
          group-hover:translate-x-full
        "
      />
    </div>
  );
};

export default DestinationCard;
