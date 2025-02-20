import { AnimatedText } from "./components/ui/animated-text";
import { BackgroundBeams } from "./components/ui/background-beams";
import { ShootingStars } from "./components/ui/shooting-stars";
import { StarsBackground } from "./components/ui/stars-background";
import { TypewriterEffectSmooth } from "./components/ui/typewriter-effect";

export const LandingPage = () => {
  const words = [
    {
      text: "Fatemeh",
      className: "text-7xl",
    },
    {
      text: "Akhlaghi",
      className: "text-7xl",
    },
  ];
  return (
    <div className="relative w-screen h-screen">
      <StarsBackground />
      <ShootingStars />
      <div className="absolute w-full text-center top-20 left-0 right-0 text-white ">
        <div className="flex flex-col gap-5">
          <span className="text-3xl italic">Hello! It's</span>
          <span className="mx-auto text-7xl text-center">
            <TypewriterEffectSmooth words={words} />
          </span>
        </div>
      </div>
      <div className="flex h-full w-full">
        <div className="flex flex-col w-1/2 justify-start pt-72 bg-slate-800 hover:w-2/3 transition-all duration-1000">
          <div className="flex flex-col mx-auto text-center gap-5">
            <span className="text-white text-2xl">As a</span>
            <span className="text-white text-5xl">
              <AnimatedText text="Back-End Developer" />
            </span>
            <button className="transition duration-200 p-[3px] relative w-60 mx-auto mt-14 animate-pulse">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2 bg-[#50586C] rounded-[6px] relative text-white hover:bg-transparent">
                Explore My Projects
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-col w-1/2 justify-start pt-72 bg-slate-600 hover:w-2/3 transition-all duration-1000">
          <div className="flex flex-col mx-auto text-center gap-5">
            <span className="text-white text-2xl">As a</span>
            <span className="text-white text-5xl">
              <AnimatedText text="Front-End Developer" />
            </span>
            <button className="p-[3px] relative mx-auto mt-14 animate-pulse w-60">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2 bg-cyan-800 rounded-[6px] relative text-white hover:bg-transparent">
                Explore My Projects
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// light: [#FAD0C9] dark: [#6E6E6D]
// light: [#DCE2F0] dark: [#50586C]
// light: [#FFDFDE] dark: [#6A7BA2]
// light: [#FAD0C9] dark: [#6E6E6D]

// light: [#F2EDD7] dark: [#755139]

// light: [#DCE2F0] dark: [#50586C]
// light: [#F9EBDE] dark: [#815854]

// light: [#FAD0C9] dark: [#6E6E6D]
