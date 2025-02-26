import AboutSection from "./sections/about";
import ContactSection from "./sections/contact";
import LandingSection from "./sections/landing";
import ProjectSection from "./sections/projects";
import SkillsSection from "./sections/skills";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full bg-bgPrimary overflow-x-hidden">
      <LandingSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}

// #ef7eaa for svg
