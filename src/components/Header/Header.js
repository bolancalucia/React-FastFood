import React from "react";
import logo from "../../assets/images/Header.png";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Link to="/">
      <header className="header">
        <img className="header-img" src={logo} alt="Fast Food" />
      </header>
    </Link>
  );
};

export default Header;
