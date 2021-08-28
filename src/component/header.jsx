import React from "react";
import { Link } from "react-router-dom";
import Logo from "./img/Logo.png";
const Header = () => {
  return (
    <header>
      <div className="cont flex">
        <div>
          <img src={Logo} alt="" />
        </div>
        <ul className="flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/pages">Pages</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to=""></Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
