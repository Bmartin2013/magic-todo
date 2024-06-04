import React from "react";
import TodoForm from "../TodoForm/TodoForm";
import "./HeroBannerMain.scss";

const HeroBannerMain = ({
  handleAddItem
}) => {
  return (
    <div className="hero-banner-info">
      <h1 className="title title-spaced title-shadow">Another TODO APP</h1>
      <p className="description hero-description">
        Get things done in no time with this super stylish and useful tool
      </p>
      <TodoForm handleAddItem={handleAddItem} />
    </div>
  );
};

export default HeroBannerMain;
