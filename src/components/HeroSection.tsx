import React from "react";

interface HeroSectionProps {
  primaryMessage: string;
  secondaryMessage: string;
  primaryButtonName: string;
  secondaryButtonName: string;
  primaryLink: string;
  secondaryLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = (props) => (
  <section className="h-screen flex items-center bg-gradient-to-r from-blue-50 to-blue-100 text-gray-800">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 white">
        {props.primaryMessage}
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl mb-8">
        {props.secondaryMessage}
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
        <a
          href={props.primaryLink}
          className="bg-blue-500 text-white py-2 px-6 rounded-full font-semibold text-lg hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          {props.primaryButtonName}
        </a>
        <a
          href={props.secondaryLink}
          className="bg-blue-700 text-white py-2 px-6 rounded-full font-semibold text-lg hover:bg-blue-800 border border-white transition duration-300 ease-in-out"
        >
          {props.secondaryButtonName}
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
