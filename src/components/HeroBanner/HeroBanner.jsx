import React, { useState } from "react";
import TodoList from "../TodoList/TodoList";
import "./HeroBanner.scss";
import HeroHeader from "./Header";
import Footer from "./Footer";

const HeroBanner = ({
  handleAddItem,
  list,
  updateItem,
  handleToggleIndicators,
  handleSubmitWithAi,
  isSubmitWithAi
}) => {
  return (
    <div className="cnt-hero-banner">
      <div className="hero-banner glassy">
        <span className="clarification clarification-rotated">It's just</span>
        <div className="hero-banner-container">
          <HeroHeader
            handleAddItem={handleAddItem}
            isSubmitWithAi={isSubmitWithAi}
          />

          <Footer
            handleToggleIndicators={handleToggleIndicators}
            handleSubmitWithAi={handleSubmitWithAi}
            isSubmitWithAi={isSubmitWithAi}
          ></Footer>
        </div>
        <TodoList list={list} updateItem={updateItem} />
      </div>
    </div>
  );
};

export default HeroBanner;
