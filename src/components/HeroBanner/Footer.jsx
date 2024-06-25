import React from "react";
import "./HeroBanner.scss";

const Footer = ({ aiTitle, handleToggleIndicators, handleSubmitWithAi }) => {
  return (
    <div className="hero-footer">
      <hr className="divider"></hr>
      <div className="footer-buttons">
        <button onClick={handleSubmitWithAi}>
        {aiTitle}
        </button>
        <button onClick={handleToggleIndicators}>Toggle Indicators</button>
      </div>
    </div>
  );
};

export default Footer;
