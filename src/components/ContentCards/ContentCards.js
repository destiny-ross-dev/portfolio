import React, { Component } from "react";
import "./ContentCards.css";
import ss from "../../assets/coven-ss.png";

const ContentCards = ({ banner, thumbnail, descriptionText, projectName }) => {
  return (
    <div className={`ContentCards dark-text ${banner && "banner"}`}>
      <img src={thumbnail || ss} />
      <h2>{projectName}</h2>
      <p>{descriptionText}</p>
    </div>
  );
};

export default ContentCards;
