import React from "react";
import SideBar from "./SideBar";

import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const HeroSection = () => {
  const isMenuOpen = useSelector((store) => store.app.isSideBarOpen);

  return (
    <main className="hero-section">
      {isMenuOpen ? <SideBar /> : null}
      <Outlet />
    </main>
  );
};

export default HeroSection;
