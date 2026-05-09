import { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Hotels", path: "/hotels" },
  { name: "Cruises", path: "/cruises" },
  { name: "Contact", path: "/contact-us" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-[30px] border-b border-white/20 shadow-2xl shadow-on-background/10">
        <div className="flex justify-between items-center h-20 px-margin-desktop max-w-container-max mx-auto">
          {/* Logo */}
          <NavLink
            to="/"
            className="font-display-xl text-h3 tracking-tighter text-primary"
          >
            LUXE TRAVEL
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-stack-lg font-display-lg text-body-md">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `transition-all pb-1 ${
                    isActive
                      ? "text-primary border-b-2 border-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-stack-md">
            <div className="flex items-center gap-stack-sm mr-4">
              <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:scale-105 transition-transform">
                notifications
              </span>

              <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:scale-105 transition-transform">
                favorite
              </span>
            </div>

            <button className="bg-primary text-white px-6 py-2 rounded-full font-label-md hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-primary/20">
              Sign In
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center group"
          >
            {/* Top Line */}
            <span
              className={`absolute w-6 h-[2px] bg-on-surface transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45" : "-translate-y-2"
              }`}
            />

            {/* Middle Line */}
            <span
              className={`absolute w-6 h-[2px] bg-on-surface transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Bottom Line */}
            <span
              className={`absolute w-6 h-[2px] bg-on-surface transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-4 mb-4 bg-surface/90 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl p-6">
            {/* Mobile Links */}
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-2xl font-label-md transition-all ${
                      isActive
                        ? "bg-primary text-white shadow-lg"
                        : "text-on-surface-variant hover:bg-surface-container-high hover:text-primary"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-outline-variant/20 my-6"></div>

            {/* Mobile Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="w-11 h-11 rounded-full bg-surface-container-high flex items-center justify-center hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-on-surface-variant">
                    notifications
                  </span>
                </button>

                <button className="w-11 h-11 rounded-full bg-surface-container-high flex items-center justify-center hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-on-surface-variant">
                    favorite
                  </span>
                </button>
              </div>

              <button className="bg-primary text-white px-5 py-2.5 rounded-full font-label-md hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
        />
      )}
    </>
  );
}
