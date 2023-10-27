import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UserAuth from "./UserAuth";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section className="header-section">
        <Logo />
        <SearchBar />
        <UserAuth />
      </section>
      <Outlet />
    </>
  );
};

export default Header;
