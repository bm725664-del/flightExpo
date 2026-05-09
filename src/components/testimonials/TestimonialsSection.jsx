import TestimonialsCard from "./TestimonialsCard";

const testimonials = [
  {
    name: "Julianne Smith",
    memberSince: "Member since 2018",
    destination: "Amalfi Coast",
    review:
      "The level of detail in our Amalfi Coast itinerary was staggering. Every sunrise felt like it was orchestrated specifically for us. Truly the peak of luxury travel.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "Marcus Sterling",
    memberSince: "Member since 2020",
    destination: "Mediterranean Marvel",
    review:
      "Mediterranean Marvel was an understatement. The private access to ancient sites after hours was a highlight I'll never forget. Luxe Travel is in a league of its own.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "Elena Rodriguez",
    memberSince: "Member since 2021",
    destination: "Nordic Fjords",
    review:
      "The sustainability focus of our Nordic Fjords expedition was impressive without compromising an ounce of comfort. A masterclass in modern exploration.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-stack-xl bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        {/* Heading */}
        <div className="text-center mb-stack-xl">
          <p className="text-primary font-label-md uppercase tracking-widest mb-2">
            Testimonials
          </p>

          <h2 className="font-display-lg text-display-lg text-on-background">
            Voices of the Extraordinary
          </h2>

          <p className="text-on-surface-variant font-body-lg mt-stack-sm max-w-2xl mx-auto">
            The world's most discerning travelers share their stories of
            unforgettable journeys crafted by Luxe Travel.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {testimonials.map((testimonial, index) => (
            <TestimonialsCard index={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
