import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.styles.css";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../utils/appSlice";

const Logo = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="logo-container">
      <div className="menu-icon" onClick={toggleMenuHandler}>
        <MenuIcon />
      </div>

      <img
        src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
        alt="Youtube Logo"
        className="logo-img"
      />

      <span className="locale">IN</span>
    </div>
  );
};

export default Logo;
