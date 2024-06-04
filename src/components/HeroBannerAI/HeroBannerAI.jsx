import React from "react";
import TodoForm from "../TodoForm/TodoForm";
import "./HeroBannerAI.scss";

const HeroBannerAI = ({
  handleAddItem
}) => {
  return (
    <div className="hero-banner-info">
      <h1 className="title title-spaced title-shadow">Another TODO APP (With AI)</h1>
      <p className="description hero-description">
        Let the AI complete a list of useful things for you
      </p>
      <TodoForm handleAddItem={handleAddItem} />
    </div>
  );
};

export default HeroBannerAI;
