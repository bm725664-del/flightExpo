export default function CruiseCategoryCard({ item }) {
  return (
    <article className="group relative h-[450px] rounded-[32px] overflow-hidden cursor-pointer shadow-[0_20px_60px_rgba(0,0,0,0.18)] hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.28)] transition-all duration-700">
      {/* Background Image */}
      <img
        src={item?.image}
        alt={item?.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-primary/10 transition-opacity duration-700" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="bg-white/15 text-white text-[10px] uppercase tracking-[0.25em] px-4 py-2 rounded-full">
              Luxury Voyage
            </span>

            <span className="material-symbols-outlined text-white group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </div>

          <h3 className="text-white font-h2 text-h2 mb-3">{item?.title}</h3>

          <p className="text-white/80 leading-relaxed">{item?.description}</p>
        </div>
      </div>
    </article>
  );
}
