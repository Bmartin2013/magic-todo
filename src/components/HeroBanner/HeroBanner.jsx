import React from "react";
import "./HeroBanner.scss";
import HeroHeader from "./Header";
import Footer from "./Footer";

const HeroBanner = ({
  handleAddItem,
  handleToggleIndicators,
  handleSubmitWithAi,
  isSubmitWithAi,
  children
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
        {children}
      </div>
    </div>
  );
};

export default HeroBanner;
