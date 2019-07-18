import React, { Component } from "react";
import "./ContentCards.css";
import ss from "../../assets/coven-ss.png";

const ContentCards = ({ banner, thumbnail }) => {
  return (
    <div className={`ContentCards dark-text ${banner && "banner"}`}>
      <img src={thumbnail || ss} />
      <h2>Coven E-Commerce</h2>
      <p>
        E-Commerce site built with React + Redux, Express, Postgres and Node.
        Stripe integration for payment processing.
      </p>
    </div>
  );
};

export default ContentCards;
