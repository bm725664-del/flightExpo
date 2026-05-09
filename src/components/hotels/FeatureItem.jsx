export default function FeatureItem({ item }) {
  return (
    <div className="group relative bg-white/70 backdrop-blur-2xl border border-white/30 rounded-[28px] p-8 overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500">
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-tertiary/5" />

      {/* Icon */}
      <div className="relative z-10 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
        <span className="material-symbols-outlined text-primary text-[30px]">
          {item?.icon}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="font-bold text-[24px] leading-tight text-on-background mb-4">
          {item?.title}
        </h3>

        <p className="text-on-surface-variant leading-relaxed text-body-md">
          {item?.description}
        </p>
      </div>

      {/* Decorative Blur */}
      <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </div>
  );
}
