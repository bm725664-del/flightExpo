import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "Bespoke Trip Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted:", formData);

    // Add API / Email Logic Here
  };

  return (
    <section className="lg:col-span-7 bg-surface-container-lowest p-stack-xl rounded-3xl shadow-2xl shadow-on-background/5 border border-outline-variant/20">
      {/* Heading */}
      <h2 className="font-h2 text-h2 mb-stack-lg">Send a Message</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-stack-md">
        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
          {/* Full Name */}
          <div className="flex flex-col gap-unit">
            <label className="font-label-md text-label-md text-on-surface-variant ml-unit">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-surface-container-low border-none rounded-xl p-stack-md focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-all font-body-md outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-unit">
            <label className="font-label-md text-label-md text-on-surface-variant ml-unit">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="john@luxetravel.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-surface-container-low border-none rounded-xl p-stack-md focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-all font-body-md outline-none"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-unit">
          <label className="font-label-md text-label-md text-on-surface-variant ml-unit">
            Subject
          </label>

          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full bg-surface-container-low border-none rounded-xl p-stack-md focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-all font-body-md appearance-none outline-none"
          >
            <option>Bespoke Trip Inquiry</option>
            <option>Membership Services</option>
            <option>Concierge Assistance</option>
            <option>Corporate Travel</option>
          </select>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-unit">
          <label className="font-label-md text-label-md text-on-surface-variant ml-unit">
            Message
          </label>

          <textarea
            rows="5"
            name="message"
            placeholder="Tell us about your next adventure..."
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-surface-container-low border-none rounded-xl p-stack-md focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-all font-body-md resize-none outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-primary text-on-primary font-h3 text-h3 py-stack-md rounded-2xl mt-stack-md hover:scale-[1.02] transition-transform shadow-xl shadow-primary/20 active:scale-95"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
