import React from "react";
import { HERO_PRIMARY_MESSAGE, HERO_SECONDARY_MESSAGE } from "../Constants";
import LogosSection from "../components/BrandLogoSection";
import HeroSection from "../components/HeroSection";

const Home: React.FC = () => {
  return (
    <>
      <div>
        <HeroSection
          primaryMessage={HERO_PRIMARY_MESSAGE}
          secondaryMessage={HERO_SECONDARY_MESSAGE}
          primaryButtonName="Get Started"
          primaryLink="#"
          secondaryButtonName="Learn More"
          secondaryLink="#"
        />

        <LogosSection />
      </div>
    </>
  );
};

export default Home;