import React from "react";
import "./HeroBanner.scss";

const Footer = ({ isSubmitWithAi, handleToggleIndicators, handleSubmitWithAi }) => {
  return (
    <div className="hero-footer">
      <hr className="divider"></hr>
      <div className="footer-buttons">
        <button onClick={handleSubmitWithAi}>
        {!isSubmitWithAi ? "Complete with AI" : "Back to normal"}
        </button>
        <button onClick={handleToggleIndicators}>Toggle Indicators</button>
      </div>
    </div>
  );
};

export default Footer;
