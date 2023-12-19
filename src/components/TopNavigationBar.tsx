import React from "react";

const TopNavigationBar: React.FC = () => (
  <nav className="bg-blue-700 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div>
        <p className="text-xl font-semibold">Your Brand Name</p>
      </div>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-blue-300">
          Product
        </a>
        <a href="#" className="hover:text-blue-300">
          Technology
        </a>
        <a href="#" className="hover:text-blue-300">
          Login
        </a>
      </div>
    </div>
  </nav>
);

export default TopNavigationBar;
