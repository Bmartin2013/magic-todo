import React from "react";
import "./HeroBanner.scss";
import HeroHeader from "./Header";
import Footer from "./Footer";
import TodoForm from "./TodoForm";

const HeroBanner = ({
  handleSubmit,
  handleToggleIndicators,
  handleSubmitWithAi,
  headerProps,
  children,
  aiTitle,
  description,
  setDescription,
}) => {
  return (
    <div className="cnt-hero-banner">
      <div className="hero-banner glassy">
        <span className="clarification clarification-rotated">It's just</span>
        <div className="hero-banner-container">
          <div className="hero-banner-info">
            <HeroHeader headerProps={headerProps}></HeroHeader>
            <TodoForm handleSubmit={handleSubmit} description={description} setDescription={setDescription}/>
          </div>

          <Footer
            handleToggleIndicators={handleToggleIndicators}
            handleSubmitWithAi={handleSubmitWithAi}
            aiTitle={aiTitle}
          ></Footer>
        </div>
        {children}
      </div>
    </div>
  );
};

export default HeroBanner;
