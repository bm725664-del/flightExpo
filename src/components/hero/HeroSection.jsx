const HeroSection = ({
  title = "",
  subtitle = "",
  bgImage = "",
  BannerForm,
}) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover scale-105"
          src={
            bgImage ||
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAgOsCCPNLAsDYmnbl_f5eBu90LXUYAcDQSUSXhJk_b25_Ut3Yju_aaNgXyQeGG5NOXNsp3zjZlEUG1mnVqsOKZHnrcd-_GSPnBuEsxND-7SUWnBZDVKoiXuJbqd4sgLPS3KULhAyJqBkzDBaqk-ce0GQz5ywR1Zv_0oomaMwZ5zKHqq9eEicndAAYT6gaEjWNH6nLBZiIa4TeGu4tIo5yr_iwpZ1s-x_ff2P7eAF9p3DwkVDmTOOp51waradWngRqV4oj0KW4Zlxk"
          }
          alt="Luxury airplane travel"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-margin-mobile w-full">
        {/* Heading */}
        <h1 className="font-display-xl text-display-xl md:text-[80px] text-white drop-shadow-2xl mb-stack-xl">
          {title}
        </h1>
        <p className="text-lg text-white mb-stack-lg">{subtitle}</p>

        {/* Booking Widget */}
        <div className="max-w-6xl mx-auto">{BannerForm}</div>
      </div>
    </section>
  );
};

export default HeroSection;
