import { HeroSection } from "./Sections/HeroSection";
import WorkSection from "./Sections/WorkSection";
import Toolbox from "./Sections/Toolbox";
import SocialsExperience from "./Sections/SocialsExperience";
import BlogSection from "./Sections/BlogSection";
import Contact from "./Sections/Contact";
import FooterSection from "./Sections/FooterSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col flex-1 space-y-10 items-center justify-center">
      <HeroSection />
      <WorkSection />
      <Toolbox />
      <SocialsExperience />
      <BlogSection />
      <Contact />
      <FooterSection />
    </div>
  );
}
