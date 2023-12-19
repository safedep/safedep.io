import React from "react";
import { Outlet } from "react-router";
import FooterSection from "./FooterSection";
import TopNavigationBar from "./TopNavigationBar";

const Layout: React.FC = () => {
  return (
    <>
      <div className="font-sans bg-white text-gray-800">
        <TopNavigationBar />
        <Outlet />
        <FooterSection />
      </div>
    </>
  );
};

export default Layout;
