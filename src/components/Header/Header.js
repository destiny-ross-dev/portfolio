import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <h1 className="Header__title">
        Hey, I'm{" "}
        <Link exact to="/" className="Header__Navigation-Item">
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
          to="/projects"
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
      </nav>
    </div>
  );
}
export default Header;
