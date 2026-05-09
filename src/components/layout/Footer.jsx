export default function Footer() {
  return (
    <footer className="w-full py-stack-xl bg-primary  border-t border-outline-variant/20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop max-w-container-max mx-auto">
        {/* Brand */}
        <div className="flex flex-col gap-stack-md">
          <div className="font-display-xl text-h3 text-surface-container-lowest">
            Flight Expo
          </div>

          <p className="text-surface-container-lowest text-label-sm max-w-xs leading-relaxed">
            Redefining luxury travel since 2012. We create bespoke experiences
            for the modern explorer who demands nothing but the best.
          </p>

          {/* Social */}
          <div className="flex gap-stack-sm mt-stack-sm">
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">
                public
              </span>
            </div>

            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">
                mail
              </span>
            </div>

            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">
                share
              </span>
            </div>
          </div>
        </div>

        {/* Discover */}
        <div className="flex flex-col gap-stack-sm">
          <h5 className="font-bold text-surface-container-lowest mb-stack-sm">
            Discover
          </h5>

          <a
            href="#"
            className="text-surface-container-lowest hover:text-primary transition-colors text-label-sm"
          >
            Hotels
          </a>

          <a
            href="#"
            className="text-surface-container-lowest hover:text-primary transition-colors text-label-sm"
          >
            Flights
          </a>

          <a
            href="#"
            className="text-surface-container-lowest hover:text-primary transition-colors text-label-sm"
          >
            Cruises
          </a>

          <a
            href="#"
            className="text-surface-container-lowest hover:text-primary transition-colors text-label-sm"
          >
            Experiences
          </a>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-stack-sm">
          <h5 className="font-bold text-surface-container-lowest mb-stack-sm">
            Company
          </h5>

          <a
            href="#"
            className="text-surface-container-lowest hover:text-primary transition-colors text-label-sm"
          >
            Privacy Policy
          </a>

          <a
            href="#"
            className="text-surface-container-lowest hover:text-primary transition-colors text-label-sm"
          >
            Terms of Service
          </a>

          <a
            href="#"
            className="text-surface-container-lowest hover:text-primary transition-colors text-label-sm"
          >
            Sustainability
          </a>

          <a
            href="#"
            className="text-surface-container-lowest hover:text-primary transition-colors text-label-sm"
          >
            Press Kit
          </a>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-stack-sm">
          <h5 className="font-bold text-surface-container-lowest mb-stack-sm">
            Resources
          </h5>

          <a
            href="#"
            className="text-surface-container-lowest hover:text-primary transition-colors text-label-sm"
          >
            Travel Insurance
          </a>

          <a
            href="#"
            className="text-surface-container-lowest hover:text-primary transition-colors text-label-sm"
          >
            Contact
          </a>

          {/* Newsletter */}
          <div className="mt-stack-md">
            <p className="text-label-sm text-surface-container-lowest font-bold mb-stack-sm">
              Subscribe to Luxe Life
            </p>

            <div className="flex bg-surface rounded-lg border border-outline-variant overflow-hidden">
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border-none text-label-sm px-4 py-2 w-full focus:ring-0"
              />

              <button className="bg-primary text-white px-4 py-2">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-stack-xl border-t border-outline-variant/10 pt-stack-md px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-stack-sm">
        <p className="text-surface-container-lowest text-label-sm">
          © 2026 Flight Expo. All rights reserved.
        </p>

        <div className="flex gap-stack-md">
          <span className="text-surface-container-lowest text-[10px] uppercase tracking-widest font-bold">
            Elite Member Benefits
          </span>

          <span className="text-surface-container-lowest text-[10px] uppercase tracking-widest font-bold">
            Safe Travel Certified
          </span>
        </div>
      </div>
    </footer>
  );
}
