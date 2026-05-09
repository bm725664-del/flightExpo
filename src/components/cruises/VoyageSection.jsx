const VoyageSection = () => {
  return (
    <section className="py-stack-xl px-margin-desktop max-w-container-max mx-auto overflow-hidden">
      <div className="text-center mb-stack-xl">
        <h2 className="font-h1 text-display-lg text-on-surface">
          The Art of the Voyage
        </h2>

        <p className="text-on-surface-variant font-body-lg max-w-2xl mx-auto mt-stack-sm">
          Beyond the horizon lies a world of refined indulgence, where every
          moment is curated for your pleasure.
        </p>
      </div>

      <div className="grid grid-cols-12 grid-rows-2 gap-gutter h-[800px]">
        {/* Main Feature: Cabins */}
        <div className="col-span-12 md:col-span-7 row-span-2 relative rounded-[40px] overflow-hidden group shadow-2xl">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            alt="Luxury cruise suite"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgcHdY81DFrIclaR7atBzDzqbQw_Rdpq078royQWb9MwryxRd34Lc0Krj9PviP9psdoO7PhR_956xKskmfoQB2Ec_Mh5CetjH6gm2yRJAlPeJ3gDsDjbvpBGuFAKzrSUFCVaoFnP58iZoBvxQ3YWteLvEIlwxIx6DBUfTecSO0sDPicvSdj7pJ8lDWSEF0a9bLWJ7uLqjYz3CdkgpVs4zf8QWy-E9KEj_ah--wCOzplV9UZSNa0Hg1gJEYb6vLU7t0bR5Efgywj1U"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

          <div className="absolute bottom-stack-lg left-stack-lg p-stack-md glass-card rounded-2xl max-w-md">
            <h3 className="text-on-surface font-h2 text-h2 mb-2">
              Grand Sanctuary Suites
            </h3>

            <p className="text-on-surface-variant font-body-md">
              Spacious residences with private verandas and 24-hour butler
              service.
            </p>
          </div>
        </div>

        {/* Dining */}
        <div className="col-span-12 md:col-span-5 relative rounded-[40px] overflow-hidden group shadow-xl">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            alt="Luxury cruise dining"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsvRn619po-bQ9KN404-lbptRJXhFhYBxbfut2GJ2SRHOrhGNiIKWDOHuqj35k9McQXA3QUbFCiGm0wrwp3GCg5YfHCFS5qT-v_nvXktaffNYHpBVxnl7kHQGWsIorCiNkLe8R88tx9JIqZcWlfzbgCE-QftMXlMFTmGTuDc_wuEf6dnloFZ32upgcq3Wqu1PFzbgHJE7Lh-DPLJhyjMG4FrpNq13ZVg6ijswKTf2_EeKonCOQuynTeVEYHKvCcUs0B_SqS8Xshxs"
          />

          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h3 className="text-white font-h2 text-h2 mb-2 drop-shadow-md">
              Michelin-Inspired Dining
            </h3>
          </div>
        </div>

        {/* Spa */}
        <div className="col-span-12 md:col-span-5 relative rounded-[40px] overflow-hidden group shadow-xl">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            alt="Luxury cruise spa"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBsABXwEQaDp659lXqCNk5g9aa6jreJ_lE2ZioWHlv2SS0ncfzcoUJWgOQaHWngvh31fNCpkeTPpBnXVJhmlRmo-BZ0i-3VLkhoVv_zM94TmfZqgqVaBWqwjeKYath8FeQ_KHJeSVqJWga0419gdWI8bZROaBfCkmrghn9YA2ZzYHpbXQ9VtZApKNqS5RUWXsNaGePfeOjqhfwzvTSGHNHYhxaVReYv84brpz-jR1vBzqJ2QR-xyiu2wrcLAxz1M3Ur48negfCMWA"
          />

          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h3 className="text-white font-h2 text-h2 mb-2 drop-shadow-md">
              Oceanic Vitality Spa
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoyageSection;
