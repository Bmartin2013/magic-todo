import React from "react";
import "./HeroBanner.scss";

const Header = ({ headerProps }) => <Title {...headerProps} />;

const Title = ({ title, description }) => {
  return (
    <>
      <h1 className="title title-spaced title-shadow">{title}</h1>
      <p className="description hero-description">{description}</p>
    </>
  );
};

export default Header;
