import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <div className="Footer dark-text">
      <div className="Footer-Contents">
        <div className="Footer-Left">
          <h3>Get In Touch</h3>
          <p>
            I'd love to hear from you.{" "}
            <a href="https://linkedin.com/in/destiny-ross">Connect</a> with me
            on LinkedIn, comment on a <Link to="/blog">blog post</Link>, or{" "}
            <a href="mailto: abc@example.com">email!</a>
          </p>
          <div className="LinksContainer">
            <i class="fa fa-at" />
            <i class="fab fa-linkedin-in" />
            <i class="fab fa-github" />
            <i class="fab fa-twitter" />
          </div>
        </div>
        <div className="Footer-Right">
          <h3>Destiny Ross</h3>
          <p>
            I built this site using <a href="https://reactjs.org/">React,</a>{" "}
            <a href="https://pages.github.com/">Github Pages</a> and{" "}
            <a href="https://fonts.google.com/">Google Fonts.</a>
          </p>
          <p className="Footer-Copyright">© 2019 Destiny Ross</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
