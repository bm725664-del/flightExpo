import { useRef } from "react";
import hotels from "../../../data/hotel";
import HotelCard from "../../ui/HotelCard";

export default function HotelSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 320 : 500;

      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="sm:py-16 lg:py-24 overflow-hidden py-stack-xl max-w-container-max mx-auto">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          {/* Title */}
          <div>
            <p className="text-primary uppercase tracking-[0.2em] text-xs sm:text-sm font-medium mb-2">
              Luxury Escapes
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-on-background leading-tight">
              The Sanctuary Collection
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-outline flex items-center justify-center hover:bg-on-background hover:text-white transition-all duration-300"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-outline flex items-center justify-center hover:bg-on-background hover:text-white transition-all duration-300"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Slider */}
      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth px-4 sm:px-6 lg:px-10 pb-4 hide-scrollbar"
      >
        {hotels?.map((item, index) => (
          <div
            key={index}
            className="min-w-[85%] sm:min-w-[350px] lg:min-w-[450px]"
          >
            <HotelCard
              image={item.image}
              title={item.title}
              description={item.description}
              rating={item.rating}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
