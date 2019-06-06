import React, { Component } from "react";
import ContentCards from "../../components/ContentCards/ContentCards";
import { Link } from "react-router-dom";
import "./Index.css";
function Pill({ text }) {
  return (
    <div className="Pill dark-text">
      <h3>{text}</h3>
    </div>
  );
}

function IndexPage() {
  return (
    <div className="Page IndexPage">
      <div className="ContentContainer">
        <div className="CardsContainer">
          <ContentCards />
          <ContentCards />
          <ContentCards />
          <ContentCards />
        </div>
        <div className="SummaryContainer">
          <div className="Summary">
            <h2>Hello, There</h2>
            <p>
              Coming from a world of anthropology and international development,
              I have a passion for accessible people-centered design. Whether
              you need stunning visualizations or performant websites, you're in
              good hands. Read my resume{" "}
              <Link className="Summary__Link" to="/resume">
                here.
              </Link>
            </p>
          </div>
          <div className="PillContainer">
            <h2>Tools</h2>
            <Pill text="React" />
            <Pill text="Redux" />
            <Pill text="Express" />
            <Pill text="Node" />
            <Pill text="SCSS" />
            <Pill text="Adobe XD" />
            <Pill text="HTML/CSS" />
            <Pill text="UI/UX" />
            <Pill text="d3" />
            <Pill text="SQL" />
            <Pill text="C#" />
            <Pill text=".NET Framework" />
            <Pill text="Prototyping" />
            <Pill text="Frontend" />
            <Pill text="Backend" />
            <Pill text="GraphQL" />
            <Pill text="Responsive Design" />
            <Pill text="TDD" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default IndexPage;
