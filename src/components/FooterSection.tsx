import React from "react";
import { BRAND_ADDRESS, BRAND_COPYRIGHT, BRAND_NAME } from "../Constants";

const FooterSection: React.FC = () => (
  <footer className="bg-blue-700 text-white p-4 text-center">
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <div className="text-left">
          <p className="text-md font-semibold">{BRAND_NAME}</p>
          <p className="text-sm whitespace-pre-wrap">{BRAND_ADDRESS}</p>
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
      <p className="text-sm text-white mt-2">&copy; {BRAND_COPYRIGHT}</p>
    </div>
  </footer>
);

export default FooterSection;
