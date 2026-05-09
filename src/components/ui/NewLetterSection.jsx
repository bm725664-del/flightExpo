const NewLetterSection = () => {
  return (
    <section className="py-stack-xl max-w-container-max mx-auto px-margin-desktop ">
      <div className="relative rounded-2xl overflow-hidden p-stack-xl md:p-[80px] border border-outline-variant/20">
        {/* Subtle glass effect pattern background */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #004ac6 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-2xl">
          <h2 className="font-display-xl text-display-lg md:text-display-xl text-on-background mb-stack-sm">
            Join the Inner Circle
          </h2>

          <p className="text-on-surface-variant font-body-lg mb-stack-lg leading-relaxed">
            Unlock early access to seasonal collections and private member
            events. Subscribe for a refined perspective on global exploration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md">
            <div className="flex-grow">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-surface border border-outline-variant rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-body-md transition-all shadow-sm"
              />
            </div>

            <button className="bg-primary text-white px-8 py-4 rounded-xl font-label-md hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-primary/20">
              Join
            </button>
          </div>

          <p className="mt-stack-md text-label-sm text-on-surface-variant/60">
            By joining, you agree to our privacy policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};
export default NewLetterSection;
