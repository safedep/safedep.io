import React from "react";
import LogosSection from "./BrandLogoSection";
import HeroSection from "./HeroSection";
import { HERO_PRIMARY_MESSAGE, HERO_SECONDARY_MESSAGE } from "../Constants";

const Home: React.FC = () => {
  return (
    <>
      <div className="font-sans bg-white text-gray-800">
        <HeroSection
          primaryMessage={HERO_PRIMARY_MESSAGE}
          secondaryMessage={HERO_SECONDARY_MESSAGE}
          primaryLink="#"
          secondaryLink="#"
        />

        <LogosSection />
      </div>
    </>
  );
};

export default Home;
