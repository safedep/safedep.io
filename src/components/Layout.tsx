import React from "react";
import { Outlet } from "react-router";
import FooterSection from "./FooterSection";
import TopNavigationBar from "./TopNavigationBar";

const Layout: React.FC = () => {
  return (
    <>
      <TopNavigationBar />
      <Outlet />
      <FooterSection />
    </>
  );
};

export default Layout;
