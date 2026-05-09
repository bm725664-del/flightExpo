const AirlineInfo = ({ name, image, description }) => {
  return (
    <>
      <div
        className="
            flex flex-col items-center
            text-center
            lg:w-40
          "
      >
        <div
          className="
              mb-4 flex h-20 w-20 items-center justify-center
              rounded-2xl
              bg-neutral-100
              p-4
              transition-transform duration-300
              group-hover:scale-110
              dark:bg-neutral-800
            "
        >
          <img
            src={image}
            alt={name}
            className="h-full w-full object-contain"
          />
        </div>

        <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
          {name}
        </h3>

        <p className="mt-1 text-xs text-neutral-500">{description}</p>
      </div>
    </>
  );
};

export default AirlineInfo;
