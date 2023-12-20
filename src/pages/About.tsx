import React from "react";

const About: React.FC = () => {
  return (
    <div className="h-screen flex bg-gradient-to-r from-blue-50 to-blue-100 text-gray-800 px-48 pt-16">
      <div className="container mx-auto">
        <h1 className="text-2xl sm:text-4xl md:text-6xl">About</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-200">Column 1</div>
          <div className="bg-blue-300">Column 2</div>
        </div>
      </div>
    </div>
  );
};

export default About;
