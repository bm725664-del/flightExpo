import HotelSearchBar from "../HotelSearchBar";

export default function HotelHeroSection() {
  return (
    <section className="relative h-screen min-h-[780px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqQiWkEq8xHfVYpCp9tah3KUm2L2TxLWpJUZsp8VrkiWpMlpScxJFTdbKUYWrkGPvtMAe86OUrLLUL1_TGXNjBzI1FOgOSRnBWtnR3Tdvopqjni00KiHZO2L6nLEGJCCzfiwyR5Ot-o2ntSKSo3ktWhyl_wen-qcraDqfOfmnWz1QS5Ec6nmvg_ecTADraxNiJPPE3Gfxh7fpnVSOVIs_A6XmhnGSPTQPpGV_7lRdJhRnCUuTaq6Zr7tRfJQ8Xs5UujoqEfjiNjbU"
          alt="Luxury Hotel"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-container-max px-margin-desktop text-center">
        <h1 className="font-display-xl text-display-xl text-white mb-stack-lg drop-shadow-2xl">
          World-Class Stays
        </h1>

        <HotelSearchBar />
      </div>
    </section>
  );
}
