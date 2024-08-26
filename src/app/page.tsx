import Elements from "./widgets/keyelements";
import Hero from "./widgets/hero";
import Secpage from "./widgets/intorduction";
import Health from "./widgets/health";

export default function Home() {
  return (
   <div>
    {/* Hero  */}
    <Hero/>
    {/* introdution */}
    <Secpage/>
    {/* Elements */}
    <Elements/>
    {/* healths */}
    <Health/>
   </div>

  );
}
