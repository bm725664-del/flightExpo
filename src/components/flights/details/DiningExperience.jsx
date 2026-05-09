const DiningExperience = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-inverse-surface p-6 sm:p-8 lg:rounded-[40px] lg:p-stack-xl">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20 md:left-auto md:w-1/2 md:opacity-30">
        <img
          className="h-full w-full object-cover"
          alt="Fine dining"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNyboordn7LapSShePxI5SbPN4kNZOKU5EDa79Jv99Rb9DD_P2p3qDqLfVdhD7rHUasfRVXu7jGwTw3_sdk5OKOh22DMsXNP1JR0jtdYgnW5llufVhySq6Y8Uu7PoKoc3MPPw61yqDlwo7OyLkrhcnWmoaxeh773qP2XaNmy0ZHfPQjemXgUHZiVAvnp_GzjOFIM_bwQeog7KqGMWQcTIQ8w0nypzcYcLU1bfllRy0WNvzsEAPyTqb8gcSSZjNb1oWzRg09RRDvCI"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-xl">
        <span className="mb-3 block text-xs uppercase tracking-widest text-tertiary-fixed sm:text-sm">
          Culinary Excellence
        </span>

        <h3 className="mb-4 text-2xl font-h2 text-white sm:text-3xl">
          JAL BEDD Sky Auberge
        </h3>

        <p className="mb-6 text-sm leading-relaxed text-white/80 sm:text-base">
          Indulge in a menu crafted by Michelin-starred chefs.
        </p>

        <button className="rounded-full border border-white/30 px-6 py-3 text-sm text-white transition-all hover:bg-white hover:text-black sm:text-base">
          View Menu
        </button>
      </div>
    </section>
  );
};

export default DiningExperience;
