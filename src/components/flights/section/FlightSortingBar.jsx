export default function FlightSortingBar() {
  return (
    <div className="flex items-center justify-between glass-panel p-2 rounded-2xl border border-white custom-shadow">
      {[
        {
          title: "Cheapest",
          price: "$890",
          time: "16h 20m",
          active: true,
        },

        {
          title: "Fastest",
          price: "$1,420",
          time: "11h 45m",
        },

        {
          title: "Best",
          price: "$1,240",
          time: "13h 10m",
        },
      ].map((item) => (
        <button
          key={item.title}
          className={`flex-1 py-3 rounded-xl transition-all ${
            item.active
              ? "bg-primary text-white"
              : "text-on-surface-variant hover:bg-surface-container-high"
          }`}
        >
          <span className="font-label-md">{item.title}</span>

          <span className="block text-[10px] opacity-80">
            {item.price} • {item.time}
          </span>
        </button>
      ))}
    </div>
  );
}
