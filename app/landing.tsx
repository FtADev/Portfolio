import { AnimatedText } from "./components/ui/animated-text";
import { ShootingStars } from "./components/ui/shooting-stars";
import { StarsBackground } from "./components/ui/stars-background";
import { TypewriterEffectSmooth } from "./components/ui/typewriter-effect";
import DeveloperPart from "./developer-part";

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
      {/* <StarsBackground />
      <ShootingStars /> */}
      <div className="absolute w-full text-center top-20 left-0 right-0 text-white ">
        <div className="flex flex-col gap-5">
          <span className="text-3xl italic">Hello! It's</span>
          <span className="mx-auto text-7xl text-center">
            <TypewriterEffectSmooth words={words} />
          </span>
        </div>
      </div>
      <div className="flex h-full w-full">
        <DeveloperPart title="Back-End Developer" color="bg-slate-800" />
        <DeveloperPart title="Front-End Developer" color="bg-slate-600" />
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


{/* <span className="text-neutral-400">
            {"Connectivity".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span> */}