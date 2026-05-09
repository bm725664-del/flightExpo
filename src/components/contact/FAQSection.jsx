const faqs = [
  {
    question: "How do I access 24/7 concierge?",
    answer:
      "Membership provides a direct digital line and private phone number to our global concierge team instantly upon registration.",
  },
  {
    question: "Do you handle group bookings?",
    answer:
      "Yes, our corporate and group divisions specialize in managing private jet charters and multi-suite hotel buyouts for high-capacity events.",
  },
  {
    question: "Can I modify my itinerary?",
    answer:
      "Elite members enjoy flexible cancellation and real-time itinerary updates through their dedicated account manager.",
  },
  {
    question: "What are the membership tiers?",
    answer:
      "We offer Premier, Elite, and Ambassador tiers, each designed to provide scaling levels of global access and personalized benefits.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-surface-container-low py-stack-xl border-t border-outline-variant/10">
      <div className="px-margin-desktop max-w-container-max mx-auto">
        {/* Heading */}
        <div className="text-center mb-stack-xl">
          <h2 className="font-display-lg text-display-lg mb-stack-sm">
            Common Inquiries
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Quick answers to frequently asked questions from our elite
            travelers.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg max-w-5xl mx-auto mb-stack-xl">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-stack-lg bg-surface rounded-2xl border border-outline-variant/20 hover:shadow-md transition-shadow"
            >
              <h4 className="font-h3 text-h3 mb-unit">{faq.question}</h4>

              <p className="font-body-md text-body-md text-on-surface-variant">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Expert CTA */}
        <div className="bg-primary p-stack-xl rounded-[40px] text-center shadow-2xl shadow-primary/30 relative overflow-hidden">
          {/* Background Image Overlay */}
          <div
            className="absolute inset-0 opacity-10 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200')",
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <h3 className="font-display-lg text-display-lg text-on-primary mb-stack-sm">
              Speak to an Expert
            </h3>

            <p className="font-body-lg text-body-lg text-on-primary/80 mb-stack-lg max-w-xl mx-auto">
              Still have questions? Schedule a consultation with a travel
              specialist to design your dream escape.
            </p>

            <button className="bg-white text-primary font-h3 text-h3 px-stack-xl py-stack-md rounded-full hover:scale-105 transition-transform shadow-lg">
              Schedule Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
