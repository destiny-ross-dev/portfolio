import React, { Component } from "react";
import ContentCards from "../components/ContentCards/ContentCards";
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
        <div className="SummaryContainer dark-text">
          <div className="Summary">
            <h2>Hello, World</h2>
            <p>
              Coming from a world of anthropology and international development,
              I have an eye toward people-center design.
            </p>
          </div>
          <div className="PillContainer">
            <h2>Tools</h2>
            <Pill text="React" />
            <Pill text="Redux" />
            <Pill text="Express" />
            <Pill text="Node" />
            <Pill text="Adobe XD" />
            <Pill text="SCSS" />
            <Pill text="SQL" />
            <Pill text="C#" />
            <Pill text=".NET Framework" />
            <Pill text="HTML/CSS" />
            <Pill text="UI/UX" />
            <Pill text="D3" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default IndexPage;
