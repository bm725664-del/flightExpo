import { suites } from "../../data/suites";
import SuiteCard from "../cards/SuiteCard";

export default function SuiteSelectionSection() {
  return (
    <section>
      <h2 className="font-h2 text-h2 mb-stack-lg">Luxury Suite Selection</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {suites.map((item) => (
          <SuiteCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
