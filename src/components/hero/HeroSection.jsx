import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = ({
  title = "Experience Luxury Beyond The Clouds",
  subtitle = "Private jets, premium destinations, and world-class travel experiences crafted for elite travelers.",
  bgImage = "",
  BannerForm,
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center   bg-black">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          className="w-full h-full object-cover scale-110"
          src={
            bgImage ||
            "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
          }
          alt="Luxury private jet travel"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-4"
        >
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[0.95] tracking-tight text-white"
          >
            <span className="block mt-4">{title}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="max-w-3xl mx-auto text-sm sm:text-md md:text-lg text-gray-200 leading-relaxed font-light"
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Booking Form */}
        {BannerForm ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {BannerForm}
          </motion.div>
        ) : null}
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 1,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-white/70"
      >
        <span className="text-sm tracking-widest uppercase mb-2">Scroll</span>

        <ChevronDown size={22} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
