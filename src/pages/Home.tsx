import React from "react";
import {
  HERO_PRIMARY_MESSAGE,
  HERO_SECONDARY_MESSAGE,
  TECHNOLOGY_SECTION_NAME,
} from "../Constants";
import AboutSection from "../components/AboutSection";
import LogosSection from "../components/BrandLogoSection";
import HeroSection from "../components/HeroSection";
import TechnologySection from "../components/TechnologySection";

const Home: React.FC = () => {
  return (
    <>
      <div>
        <HeroSection
          primaryMessage={HERO_PRIMARY_MESSAGE}
          secondaryMessage={HERO_SECONDARY_MESSAGE}
          primaryButtonName="Get Started"
          primaryLink="https://app.safedep.io"
          secondaryButtonName="Learn More"
          secondaryLink={`#${TECHNOLOGY_SECTION_NAME}`}
        />

        <LogosSection />
        <TechnologySection />
        <AboutSection />
      </div>
    </>
  );
};

export default Home;
