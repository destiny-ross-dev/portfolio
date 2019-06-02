import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <h1 className="Header__title">
        Hey, I'm{" "}
        <Link to="/" className="Header__Navigation-Item">
          Destiny
        </Link>
      </h1>
      <nav className="Header__Navigation">
        <Link
          to="/about"
          className="Header__Navigation-Item"
          activeClassName="active"
        >
          About
        </Link>
        <Link
          to="/portfolio"
          className="Header__Navigation-Item"
          activeClassName="active"
        >
          Portfolio
        </Link>
        <Link
          to="/blog"
          className="Header__Navigation-Item"
          activeClassName="active"
        >
          Blog
        </Link>
        <Link
          to="/contact"
          className="Header__Navigation-Item"
          activeClassName="active"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}
export default Header;
