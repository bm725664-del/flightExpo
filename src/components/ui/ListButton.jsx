const ListButton = ({ buttonText, handleOnClick }) => {
  return (
    <button
      onClick={handleOnClick}
      className="
              w-full rounded-2xl
              bg-primary px-6 py-4
              text-sm font-bold text-white
              shadow-lg shadow-primary/20
              transition-all duration-300
              hover:-translate-y-0.5
              hover:brightness-110
              active:scale-95
            "
    >
      {buttonText}
    </button>
  );
};

export default ListButton;
