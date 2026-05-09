const FlightHeroSection = () => {
  return (
    <section className="relative h-[520px] w-full overflow-hidden sm:h-[620px] lg:h-[716px]">
      {/* Background Image */}
      <img
        className="absolute inset-0 h-full w-full object-cover"
        alt="Luxury first-class airplane cabin"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNSnDjY5AhBD3vOMAldqG677x4UxuAbR9daRyE_rVMs7Tqj_COwIz2zA8lnKYK16wqlr8qEhw_LJxM_TpFrSDP5_aza1NYYzmeh6kbUD1mgRNweGBJgxaIAZgj7KnjYo3IkggHpO0lDErlDVciWH7jL-JGlLq6tdrLHKgh2bd5GvOTZpORT8xuQgnPj_DuqBKNGWiZl-rlmVRH3MMnDc9Loe3HB9leAn3dBwdW0BWXCC-vCqqik6l5FYWp9_9DNddVEuqz0k_oJ2c"
      />

      {/* Overlay */}
      <div className="absolute inset-0 cinematic-gradient"></div>

      {/* Content */}
      <div className="absolute inset-0 mx-auto flex max-w-container-max flex-col justify-end px-4 pb-8 sm:px-6 sm:pb-10 lg:px-margin-desktop lg:pb-stack-xl">
        {/* Top Badge Section */}
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-stack-md">
          <span className="w-fit rounded-full bg-tertiary/10 px-3 py-1 text-xs font-label-sm uppercase tracking-widest text-tertiary sm:px-stack-sm">
            First Class
          </span>

          <span className="text-sm font-label-md text-white/80 sm:text-base">
            Japan Airlines • Boeing 787-9 Dreamliner
          </span>
        </div>

        {/* Bottom Content */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          {/* Route */}
          <div className="space-y-3">
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Departure */}
              <div>
                <h1 className="text-4xl font-display-xl text-white sm:text-5xl lg:text-display-lg">
                  LHR
                </h1>

                <p className="text-sm font-body-md text-white/70 sm:text-base">
                  London Heathrow
                </p>
              </div>

              {/* Flight Icon */}
              <span className="material-symbols-outlined text-3xl text-white sm:text-[40px] lg:text-[48px]">
                flight_takeoff
              </span>

              {/* Arrival */}
              <div>
                <h1 className="text-4xl font-display-xl text-white sm:text-5xl lg:text-display-lg">
                  HND
                </h1>

                <p className="text-sm font-body-md text-white/70 sm:text-base">
                  Tokyo Haneda
                </p>
              </div>
            </div>
          </div>

          {/* Duration Card */}
          <div className="glass-card w-full rounded-2xl border border-white/20 p-4 sm:w-fit sm:p-stack-md">
            <p className="mb-1 text-xs font-label-sm uppercase tracking-tighter text-on-surface-variant sm:text-sm">
              Total Duration
            </p>

            <p className="text-2xl font-h2 text-primary sm:text-3xl">13h 45m</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlightHeroSection;
