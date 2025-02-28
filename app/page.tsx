import AboutSection from "./sections/about";
import ContactSection from "./sections/contact";
import FooterSection from "./sections/footer";
import LandingSection from "./sections/landing";
import ProjectSection from "./sections/projects";
import ServicesSection from "./sections/services";
import SkillsSection from "./sections/skills";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full bg-bgPrimary overflow-x-hidden">
      <LandingSection />
      <AboutSection />
      <ServicesSection />
      <ProjectSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

// #ef7eaa for svg
// #FFD6E8 for shape
