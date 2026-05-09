const InputField = ({ icon, label, value, placeholder, onChange }) => {
  return (
    <div className="p-5 border-b lg:border-b-0 lg:border-r border-outline-variant/10 flex items-start gap-4 h-24 hover:bg-surface-container-lowest transition-all">
      <span className="material-symbols-outlined text-primary text-[20px] mt-1">
        {icon}
      </span>

      <div className="flex flex-col flex-1">
        <label className="text-[10px] uppercase font-bold italic text-outline tracking-wider mb-1">
          {label}
        </label>

        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="p-0 border-none focus:ring-0 focus:outline-none text-on-background font-bold text-body-md w-full bg-transparent placeholder:font-normal"
          type="text"
        />
      </div>
    </div>
  );
};

export default InputField;
