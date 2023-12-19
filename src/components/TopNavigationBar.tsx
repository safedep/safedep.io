import React from "react";
import { FaGithub } from "react-icons/fa";
import { BRAND_NAME } from "../Constants";

const TopNavigationBar: React.FC = () => (
  <nav className="bg-blue-700 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div>
        <div className="flex items-center">
          <img
            src="https://placehold.co/600x400/png"
            alt="Brand Logo"
            className="h-8 w-8 mr-2"
          />
          <p className="text-xl font-semibold">{BRAND_NAME}</p>
        </div>
      </div>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-blue-300">
          Technology
        </a>
        <a href="#" className="hover:text-blue-300">
          Blog
        </a>
      </div>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-blue-200 bg-blue-800 rounded-lg p-2">
          Schedule a Demo
        </a>
        <a
          href="https://github.com/safedep/vet"
          target="_blank"
          className="hover:text-blue-300 flex items-center"
          rel="noreferrer"
        >
          <FaGithub className="inline-block pr-1" />
        </a>
      </div>
    </div>
  </nav>
);

export default TopNavigationBar;
