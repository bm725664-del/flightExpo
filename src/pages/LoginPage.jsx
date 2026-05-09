import { useState } from "react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body-md">
      <main className="flex min-h-screen overflow-hidden">
        {/* Left Backdrop Section */}
        <section className="hidden lg:flex lg:w-1/2 relative flex-col justify-end p-margin-desktop overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk1nTkFI_R9fECOZt3j5ktGL7xkorhQj3LJztMpqZ-Hf3g7WvdUNV5xkbxXg00KhsW2bTbVqfxPD-SQqEuwHueqzgbtZsqRXV6mJcRtDYwece0DbkaJIkGHODR-C2r7U2yNEvfq10PABtoWrRTZTwJzNmvDLR3tr75BeoM89a772o0sQAlLFWDoJ7mgkcDfUnsGJAS37mei2mToW87_t6yHlMmFKiRLUw1TdGjT41YVG5C2_ssn52qAF8zaswg19NlsylLnuZE46A"
              alt="Luxury Travel"
              className="w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Glass Overlay */}
            <div className="absolute inset-0 backdrop-blur-[2px] bg-black/10"></div>
          </div>

          {/* Quote */}
          <div className="relative z-10 max-w-lg mb-stack-xl">
            <h1 className="font-display-xl text-display-lg text-white mb-stack-md leading-tight">
              Travel is the only thing you buy that makes you richer.
            </h1>

            <p className="font-body-lg text-white/80 italic">— Anonymous</p>
          </div>

          {/* Branding */}
          <div className="relative z-10 flex items-center gap-stack-sm">
            <span className="font-display-xl text-h3 text-white tracking-tighter">
              LUXE TRAVEL
            </span>
          </div>
        </section>

        {/* Right Login Section */}
        <section className="w-full lg:w-1/2 bg-surface-container-lowest flex flex-col items-center justify-center p-margin-mobile md:p-margin-desktop relative">
          {/* Top Header */}
          <header className="absolute top-8 left-0 right-0 px-margin-desktop flex justify-center lg:justify-start">
            <div className="font-display-xl text-h3 text-primary tracking-tighter">
              LUXE TRAVEL
            </div>
          </header>

          {/* Login Card */}
          <div className="w-full max-w-md bg-white/60 backdrop-blur-xl border border-white/20 rounded-3xl p-stack-xl shadow-2xl">
            {/* Toggle */}
            <div className="bg-surface-container-low p-1 rounded-full flex w-fit mb-stack-lg border border-outline-variant/20 mx-auto">
              <button className="px-stack-lg py-2 rounded-full font-label-md bg-white text-primary shadow-md transition-all">
                Sign In
              </button>

              <button className="px-stack-lg py-2 rounded-full font-label-md text-on-surface-variant hover:text-primary transition-colors">
                Create Account
              </button>
            </div>

            {/* Heading */}
            <div className="text-center mb-stack-lg">
              <h2 className="font-h1 text-h1 text-on-background mb-stack-sm">
                Welcome Back
              </h2>

              <p className="font-body-md text-on-surface-variant">
                Please enter your details to access your elite member dashboard.
              </p>
            </div>

            {/* Social Login */}
            <div className="w-full grid grid-cols-2 gap-stack-md mb-stack-lg">
              <button className="flex items-center justify-center gap-2 py-3 px-stack-md rounded-xl border border-outline-variant/30 hover:bg-surface-container-low transition-all group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDdZd5JzDCo27obUmd-QyMFtZAYLscnwYvwhgDC8xq_mx41-iBFr4PqPxI_vYk0Lt3GYELilEqTem-VLJv_1rqJqFjFJN6L3Vbkx11oitxKNq6gbwwv5vogGcwrxDkjlCfppAQRL5r_SxgRBVM_U5CCzVlrhFXUNc2J1Ka0_PF3dMCnGL25IMxl_cttO65xanUSRC5ymCc7jdAo2PBuB5y8RZJP3s3aUk1cfeTTcCkdkCrMJG_DhHlwpXWMGix_Q3BeHBWno0maPA"
                  alt="Google"
                  className="w-5 h-5"
                />

                <span className="font-label-md">Google</span>
              </button>

              <button className="flex items-center justify-center gap-2 py-3 px-stack-md rounded-xl border border-outline-variant/30 hover:bg-surface-container-low transition-all">
                <span className="material-symbols-outlined text-[20px]">
                  ios
                </span>

                <span className="font-label-md">Apple</span>
              </button>
            </div>

            {/* Divider */}
            <div className="w-full flex items-center gap-stack-md mb-stack-lg">
              <div className="h-[1px] bg-outline-variant/30 flex-1"></div>

              <span className="font-label-sm text-outline uppercase tracking-widest">
                or with email
              </span>

              <div className="h-[1px] bg-outline-variant/30 flex-1"></div>
            </div>

            {/* Form */}
            <form className="space-y-stack-md">
              {/* Email */}
              <div className="space-y-unit">
                <label className="font-label-md text-on-surface ml-1">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="alex@luxetravel.com"
                  className="w-full h-14 px-stack-md rounded-xl bg-white/70 border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                />
              </div>

              {/* Password */}
              <div className="space-y-unit">
                <div className="flex justify-between items-center ml-1">
                  <label className="font-label-md text-on-surface">
                    Password
                  </label>

                  <a
                    href="#"
                    className="text-primary font-label-sm hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full h-14 px-stack-md rounded-xl bg-white/70 border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant hover:text-on-surface transition-colors"
                  >
                    <span className="material-symbols-outlined">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-stack-sm pt-2">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary"
                />

                <label
                  htmlFor="remember"
                  className="font-body-md text-on-surface-variant"
                >
                  Keep me signed in for 30 days
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full h-14 bg-primary text-white rounded-xl font-h3 text-body-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl mt-stack-lg"
              >
                Sign In
              </button>
            </form>

            {/* Terms */}
            <p className="mt-stack-xl font-label-sm text-on-surface-variant text-center">
              By continuing, you agree to our{" "}
              <a href="#" className="text-primary hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-primary hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>

          {/* Footer */}
          <footer className="absolute bottom-8 left-0 right-0 px-margin-desktop flex justify-center">
            <p className="font-label-sm text-outline-variant">
              © 2024 Luxe Travel Global. All rights reserved.
            </p>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default LoginPage;
