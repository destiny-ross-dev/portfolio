import React, { Component } from "react";
import "./ContentCards.css";

const ContentCards = ({ banner, thumbnail, descriptionText, projectName }) => {
  return (
    <div className={`ContentCards dark-text ${banner && "banner"}`}>
      <img src={thumbnail} />
      <h2>{projectName}</h2>
      <p>{descriptionText}</p>
    </div>
  );
};

export default ContentCards;
