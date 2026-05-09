import AmenityCard from "../cards/AmenityCard";
import { amenities } from "../../data/amenities";

export default function AmenitiesSection() {
  return (
    <section>
      <h2 className="font-h2 text-h2 mb-stack-lg">Unrivaled Ship Amenities</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-stack-md">
        {/* Featured Image */}
        <div className="md:col-span-2 md:row-span-2 relative h-80 rounded-2xl overflow-hidden group">
          <img
            loading="lazy"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAazD1PULgYrKtdycxgNag_5pVrHgv6ALnGMSJi5CbTnUSoAErttNBn1R_qWF3o3mgL-g0ev_OA0XPX3LlnKhfMe1OZF7dcnmIqHffUv04hTMjKQtWIFBPcrr1zyL68W0IINmcfsosraZz_o_qcky811Ty86rpiBwxuhgtQNQT5yxnQiHT22kXfFot-K10S16WaQD85Hp2uK7a4Qfh8d3NV_DgWvbTdXyZO29FdSt4HPnQh1xfo1nNXrVnqMNNsqbS8liFaP979T2s"
            alt="Infinity Deck Pool"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute bottom-0 left-0 p-stack-lg w-full bg-gradient-to-t from-black/60 to-transparent">
            <h4 className="font-h3 text-h3 text-white">Infinity Deck Pool</h4>

            <p className="text-white/80 font-body-md">
              Heated salt-water with panoramic views.
            </p>
          </div>
        </div>

        {/* Amenity Cards */}
        {amenities.map((item) => (
          <AmenityCard key={item.id} item={item} />
        ))}

        {/* Large Feature */}
        <div className="md:col-span-2 bg-surface-container rounded-2xl p-stack-lg flex items-center gap-stack-lg hover:shadow-lg transition-all">
          <span className="material-symbols-outlined text-primary text-4xl">
            helicopter
          </span>

          <div>
            <h4 className="font-h3 text-h3">Helicopter Pad</h4>

            <p className="text-on-surface-variant">
              Seamless shore transfers via our onboard fleet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
