import { ArrowRight } from "lucide-react";

export default function FlightPromoBanner() {
  return (
    <section
      className="
        relative overflow-hidden rounded-[2.5rem]
        shadow-2xl
      "
    >
      {/* Background Image */}
      <div className="relative h-[420px] w-full">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrKBQ0eX3_jlHMQvT3tnYsKq-SRpd8KXnzUpV_AGpvJC5x9c9JLsKJH6Kx_iaOtwWjtVeEcXoZrBe5YU-i5X4q915zXKPlDH5J2BMHggz9Fsd_P2H36otQNvHZjptddwTj8kvkqd0AXJ-sUDJpJV0En7TCxS09SjdCCyyTaeJywx7Ta2nc9QfJrht9CThtDBcq5hduyJ0aY1enElVAtfUiMeSqr3aUI_fBgrHeo0gFeuuEok61uZ4g-2VQc-F4QKH_2JRP2_64VAM"
          alt="Luxury Flight Cabin"
          className="
            h-full w-full object-cover
            transition-transform duration-[1400ms]
            hover:scale-105
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-black/90
            via-black/50
            to-black/10
          "
        />
      </div>

      {/* Content */}
      <div
        className="
          absolute inset-0
          flex items-center
          p-6 sm:p-10 lg:p-14
        "
      >
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className="
              mb-6 inline-flex items-center
              rounded-full
              border border-white/10
              bg-white/10
              px-5 py-2
              backdrop-blur-md
            "
          >
            <span
              className="
                text-[11px] font-black uppercase
                tracking-[0.25em]
                text-white
              "
            >
              Member Privilege
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              mb-5 max-w-xl
              text-4xl font-black leading-tight
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Elevate Your
            <span className="block text-primary">Journey</span>
          </h2>

          {/* Description */}
          <p
            className="
              mb-8 max-w-lg
              text-base leading-relaxed
              text-white/75
              sm:text-lg
            "
          >
            Upgrade to First Class on Japan Airlines for an additional $1,999.
            Experience culinary excellence and premium comfort at 35,000 feet.
          </p>

          {/* CTA */}
          <button
            className="
              group inline-flex items-center gap-3
              rounded-2xl
              bg-white px-7 py-4
              text-sm font-bold text-neutral-900
              shadow-2xl
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-primary
              hover:text-white
            "
          >
            Claim Offer
            <ArrowRight
              size={18}
              className="
                transition-transform duration-300
                group-hover:translate-x-1
              "
            />
          </button>
        </div>
      </div>

      {/* Floating Glow */}
      <div
        className="
          absolute -right-24 top-10
          h-64 w-64 rounded-full
          bg-primary/20 blur-3xl
        "
      />
    </section>
  );
}
