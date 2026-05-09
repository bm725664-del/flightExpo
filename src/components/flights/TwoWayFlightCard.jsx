import ListButton from "../ui/ListButton";
import FlightCardBottom from "./FlightCardBottom";
import AirlineInfo from "./FlightDetailsCard/AirlineInfo";
import FlightTravelInfo from "./FlightDetailsCard/FlightTravelInfo";

export default function TwoWayFlightCard() {
  return (
    <article
      className="
        group overflow-hidden rounded-3xl
        border border-neutral-200
        bg-white
        shadow-lg
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-2xl
        dark:border-neutral-800
        dark:bg-neutral-900
      "
    >
      {/* Main Content */}
      <div
        className="
          flex flex-col gap-8
          p-6 lg:flex-row
          lg:items-center lg:p-8
        "
      >
        <AirlineInfo
          image={
            "https://lh3.googleusercontent.com/aida-public/AB6AXuArsuWSNE_oZ_MfruBKDJl6G78RqY9Uiqb7H3VJz-bIoELMGTtencryT7oKRZTmpk4TOl8jOtPYst8-YIkzSjzjPiLnxxL59FkzXVw63SeLC2YfkFxaQTV0LWhnxb4x2IjKPSr3VbJeJ6oMQbjpUj2B88EeJMky8jv09rx8IF62Sxbpw4XWCLDi1jmXg8oBy3uf5qnWloCNyPf_pxe9wpaPrpV7b0yGTB02tCF49s4x5GNwlzA1Eu8K6F1auXiFnG8wFDOYxPYPLdc"
          }
          name="Emirates"
          description="EK002 • Airbus A380"
        />
        <div className="flex flex-col">
          {/* Flight Details */}
          <FlightTravelInfo
            departure={{
              time: "20:00",
              airport: "LHR",
              city: "London Heathrow",
            }}
            arrival={{
              time: "07:15",
              airport: "DXB",
              city: "Dubai",
            }}
          />
          <FlightTravelInfo
            departure={{
              time: "07:15",
              airport: "DXB",
              city: "Dubai",
            }}
            arrival={{
              time: "20:00",
              airport: "LHR",
              city: "London Heathrow",
            }}
          />
        </div>

        {/* Pricing */}
        <div
          className="
            flex flex-col items-center
            border-t border-neutral-200
            pt-6 text-center
            lg:w-56
            lg:border-l lg:border-t-0
            lg:pl-8 lg:pt-0
            lg:text-right
            dark:border-neutral-800
          "
        >
          <p
            className="
              mb-1 text-[11px] font-bold uppercase
              tracking-[0.2em]
              text-neutral-400
            "
          >
            Per Person
          </p>

          <h2
            className="
              mb-6 text-5xl font-black
              tracking-tight text-primary
            "
          >
            $1,050
          </h2>

          <ListButton buttonText="Select Flight" />
        </div>
      </div>
      <FlightCardBottom />
    </article>
  );
}
