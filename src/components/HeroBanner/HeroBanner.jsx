import React, { useState } from "react";
import TodoList from "../TodoList/TodoList";
import "./HeroBanner.scss";
import HeroHeader from "../HeroHeader/HeroHeader";

const HeroBanner = ({
  handleAddItem,
  list,
  updateItem,
  handleToggleIndicators,
}) => {
  const [isSubmitWithAi, setIsSubmitWithAI] = useState(false);

  return (
    <div className="cnt-hero-banner">
      <div className="hero-banner glassy">
        <span className="clarification clarification-rotated">It's just</span>
        <div className="hero-banner-container">
          <HeroHeader
            handleAddItem={handleAddItem}
            isSubmitWithAi={isSubmitWithAi}
          />

          <div className="hero-footer">
            <hr className="divider"></hr>
            <div className="footer-buttons">
              <button onClick={() => setIsSubmitWithAI(!isSubmitWithAi)}>
                Complete with AI
              </button>
              <button onClick={handleToggleIndicators}>
                Toggle Indicators
              </button>
            </div>
          </div>
        </div>
        <TodoList list={list} updateItem={updateItem} />
      </div>
    </div>
  );
};

export default HeroBanner;
