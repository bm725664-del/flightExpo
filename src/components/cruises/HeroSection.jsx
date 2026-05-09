import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex h-screen items-end overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop"
        alt="Luxury Cruise"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 mx-auto flex w-full max-w-container-max items-end justify-between px-6 pb-20"
      >
        <div className="max-w-2xl text-white">
          <p className="mb-4 uppercase tracking-[0.2em]">
            Premium Mediterranean Collection
          </p>

          <h1 className="mb-6 text-6xl font-extrabold">Mediterranean Marvel</h1>

          <div className="flex flex-wrap gap-8">
            <span>12 Nights</span>
            <span>Starting from $4,200</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
