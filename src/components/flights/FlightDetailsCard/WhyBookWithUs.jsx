import {
  PoundSterling,
  ShieldCheck,
  Users,
  Percent,
  Smile,
  BookOpen,
} from "lucide-react";

const features = [
  {
    icon: PoundSterling,
    title: "Best Price Guaranteed",
  },
  {
    icon: ShieldCheck,
    title: "ATOL Protected",
  },
  {
    icon: Users,
    title: "Refer & Earn Unlimited",
  },
  {
    icon: Percent,
    title: "Discounted Fares",
  },
  {
    icon: Smile,
    title: "90% Happy Repeat Clients",
  },
  {
    icon: BookOpen,
    title: "Book with £50 per person",
  },
];

const WhyBookWithUs = () => {
  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 border border-gray-200 shadow-sm w-full">
      {/* Heading */}
      <p className="font-bold text-sm md:text-base mb-6">Why book with us?</p>

      {/* Features Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="text-center space-y-3 flex flex-col items-center"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                <Icon size={22} className="text-blue-600" />
              </div>

              {/* Text */}
              <p className="text-xs md:text-sm font-semibold text-gray-600 leading-snug">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyBookWithUs;
