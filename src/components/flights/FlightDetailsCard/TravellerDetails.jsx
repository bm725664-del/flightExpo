import { CalendarDays, ChevronDown } from "lucide-react";

const TravellerDetails = () => {
  return (
    <section className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 border border-gray-200 shadow-md space-y-8 w-full">
      {/* Heading */}
      <h2 className="text-2xl font-bold">Traveller’s Detail</h2>

      {/* Contact Information */}
      <div className="space-y-4">
        <h3 className="font-bold text-base">Contact Information</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>

            <input
              type="email"
              placeholder="Enter email"
              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />

            <p className="text-xs text-gray-500">
              Your booking confirmation will be sent to this email address.
            </p>
          </div>

          {/* Contact Number */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              Contact Number <span className="text-red-500">*</span>
            </label>

            <div className="flex flex-col sm:flex-row gap-3">
              <select className="sm:w-1/3 w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-3 text-[11px] outline-none focus:ring-2 focus:ring-blue-500">
                <option value="+91">India (+91)</option>
                <option value="+1">United States (+1)</option>
                <option value="+44">United Kingdom (+44)</option>
                <option value="+61">Australia (+61)</option>
                <option value="+81">Japan (+81)</option>
                {/* <option value="+86">China (+86)</option>
                <option value="+49">Germany (+49)</option>
                <option value="+33">France (+33)</option>
                <option value="+39">Italy (+39)</option>
                <option value="+34">Spain (+34)</option>
                <option value="+971">United Arab Emirates (+971)</option>
                <option value="+966">Saudi Arabia (+966)</option>
                <option value="+65">Singapore (+65)</option>
                <option value="+60">Malaysia (+60)</option>
                <option value="+66">Thailand (+66)</option>
                <option value="+92">Pakistan (+92)</option>
                <option value="+880">Bangladesh (+880)</option>
                <option value="+94">Sri Lanka (+94)</option>
                <option value="+7">Russia (+7)</option>
                <option value="+55">Brazil (+55)</option>
                <option value="+27">South Africa (+27)</option>
                <option value="+82">South Korea (+82)</option>
                <option value="+31">Netherlands (+31)</option>
                <option value="+41">Switzerland (+41)</option>
                <option value="+64">New Zealand (+64)</option>
                <option value="+20">Egypt (+20)</option>
                <option value="+62">Indonesia (+62)</option>
                <option value="+63">Philippines (+63)</option>
                <option value="+84">Vietnam (+84)</option> */}
              </select>

              <input
                type="tel"
                placeholder="Enter number"
                className="sm:w-2/3 w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <p className="text-xs text-gray-500">
              We ask for your mobile number so we can call or WhatsApp you about
              changes.
            </p>
          </div>
        </div>
      </div>

      {/* Passenger Details */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2">
          <h3 className="font-bold text-base">
            Passenger Details{" "}
            <span className="font-normal text-gray-500 text-sm">
              (Please enter all details as shown on the passport.)
            </span>
          </h3>
        </div>

        {/* Passenger Card */}
        <div className="border border-gray-200 rounded-xl p-4 md:p-6 space-y-6">
          <p className="font-bold text-sm">Lead Passenger</p>

          {/* Form Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Title */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-500">
                Title <span className="text-red-500">*</span>
              </label>

              <select className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500">
                <option>Mr</option>
                <option>Mrs</option>
                <option>Ms</option>
              </select>
            </div>

            {/* First Name */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-500">
                First Name <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                placeholder="Enter first name"
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-500">
                Last Name <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                placeholder="Enter last name"
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* DOB */}
            <div className="space-y-2 relative">
              <label className="text-xs font-semibold text-gray-500">
                Date of Birth <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                placeholder="dd-mm-yyyy"
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />

              <CalendarDays
                size={18}
                className="absolute right-3 top-9 text-gray-400"
              />
            </div>
          </div>

          {/* Additional Info Button */}
          <button className="w-full flex justify-between items-center text-sm font-semibold text-gray-800 pt-4 border-t border-gray-100 hover:text-blue-600 transition">
            Click here for additional information
            <ChevronDown size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TravellerDetails;
