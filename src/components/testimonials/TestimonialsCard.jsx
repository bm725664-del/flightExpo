const TestimonialsCard = ({ index, testimonial }) => {
  return (
    <div
      key={index}
      className="group bg-surface/50 backdrop-blur-xl border border-white/20 p-stack-lg rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
    >
      {/* User Info */}
      <div className="flex items-center gap-stack-md mb-stack-md">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h5 className="font-bold text-on-background">{testimonial.name}</h5>

          <p className="text-[10px] text-primary uppercase font-bold tracking-widest">
            {testimonial.memberSince}
          </p>
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-1 text-[#FFD700] mb-stack-sm">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className="material-symbols-outlined text-sm"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            star
          </span>
        ))}
      </div>

      {/* Review */}
      <p className="text-on-surface-variant italic leading-relaxed mb-stack-md">
        "{testimonial.review}"
      </p>

      {/* Destination */}
      <div className="pt-stack-sm border-t border-outline-variant/10 flex items-center gap-2">
        <span className="material-symbols-outlined text-sm text-primary">
          explore
        </span>

        <span className="text-[11px] font-bold text-on-background uppercase tracking-widest">
          {testimonial.destination}
        </span>
      </div>
    </div>
  );
};

export default TestimonialsCard;
