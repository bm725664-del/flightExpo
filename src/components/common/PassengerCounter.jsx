const PassengerCounter = ({
  title,
  subtitle,
  value,
  onDecrease,
  onIncrease,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="font-bold text-on-background">{title}</p>

        <p className="text-[11px] text-on-surface-variant">{subtitle}</p>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onDecrease}
          className="w-9 h-9 rounded-full border border-outline-variant/20 flex items-center justify-center text-primary hover:bg-primary/5 transition-all"
        >
          -
        </button>

        <span className="w-5 text-center font-bold text-on-background">
          {value}
        </span>

        <button
          type="button"
          onClick={onIncrease}
          className="w-9 h-9 rounded-full border border-outline-variant/20 flex items-center justify-center text-primary hover:bg-primary/5 transition-all"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default PassengerCounter;
