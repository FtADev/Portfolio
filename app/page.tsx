import AboutPage from "./sections/about";
import LandingPage from "./sections/landing";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full bg-bgPrimary overflow-x-hidden">
      <LandingPage />
      <AboutPage />
    </div>
  );
}
