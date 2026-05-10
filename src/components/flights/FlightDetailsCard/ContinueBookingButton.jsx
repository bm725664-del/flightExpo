const ContinueBookingButton = () => {
  return (
    <button
      className="
        w-full
        bg-[#f4511e]
        hover:bg-[#e64a19]
        text-white
        py-4
        rounded-xl
        font-bold
        text-sm md:text-base
        shadow-lg shadow-orange-500/20
        hover:scale-[1.02]
        active:scale-95
        transition-all duration-200
      "
    >
      Continue Booking
    </button>
  );
};

export default ContinueBookingButton;
