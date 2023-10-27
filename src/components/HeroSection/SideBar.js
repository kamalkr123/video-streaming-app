import React from "react";
import { sideBarData } from "../../Data";
import "./HeroSection.styles.css";

const SideBar = () => {
  return (
    <div className="sidebar-menu">
      {sideBarData.map((item) => {
        return (
          <div className="menu-item" key={item.id}>
            <div className="item-icon">{item.icon}</div>
            <p className="item-text">{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
