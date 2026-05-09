const CTASection = () => {
  return (
    <section className="bg-primary py-stack-xl mb-stack-xl">
      <div className="px-margin-desktop max-w-container-max mx-auto text-center">
        <h2 className="font-display-xl text-white mb-stack-md">
          Ready for the Horizon?
        </h2>

        <p className="text-on-primary-container font-body-lg mb-stack-lg max-w-xl mx-auto">
          Join our Membership program to unlock exclusive early-bird rates and
          private shore excursions.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-stack-md">
          <button className="px-stack-xl py-stack-md bg-white text-primary rounded-full font-h3 hover:scale-105 transition-transform shadow-xl">
            Join Membership
          </button>

          <button className="px-stack-xl py-stack-md border border-white/40 text-white rounded-full font-h3 hover:bg-white/10 transition-colors">
            Request a Brochure
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
