import { LandingPage } from "./landing";
import LandingPage2 from "./landing2";
import SolarSystem from "./solar-system";

export default function Home() {
  return (
    <div className="flex bg-white w-full h-full">
      {/* <LandingPage /> */}
      <LandingPage2 />
      {/* <SolarSystem /> */}
    </div>
  );
}
