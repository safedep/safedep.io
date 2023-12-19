import React from "react";

const FooterSection: React.FC = () => (
  <footer className="bg-blue-700 text-white p-4 text-center">
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xl font-semibold">Your Brand Name</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-300">
            About
          </a>
          <a href="#" className="hover:text-blue-300">
            Security
          </a>
          <a href="#" className="hover:text-blue-300">
            Policy
          </a>
        </div>
      </div>
      <p className="text-sm text-white mt-2">
        &copy; 2023 Your Company. All rights reserved.
      </p>
    </div>
  </footer>
);

export default FooterSection;
