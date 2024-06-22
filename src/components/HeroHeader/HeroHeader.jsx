import React from "react";
import TodoForm from "../TodoForm/TodoForm";
import "./HeroHeader.scss";

const HeroHeader = ({ handleAddItem, isSubmitWithAi }) => {
  const aiProps = {
    title: "Another TODO APP (With AI)",
    description: " Let the AI complete a list of useful things for you",
  };

  const mainProps = {
    title: "Another TODO APP ",
    description:
      " Get things done in no time with this super stylish and useful tool",
  };

  return (
    <div className="hero-banner-info">
      {isSubmitWithAi ? (
        <HeroTitle {...aiProps} />
      ) : (
        <HeroTitle {...mainProps} />
      )}
      <TodoForm handleAddItem={handleAddItem} />
    </div>
  );
};

const HeroTitle = ({ title, description }) => {
  return (
    <>
      <h1 className="title title-spaced title-shadow">{title}</h1>
      <p className="description hero-description">{description}</p>
    </>
  );
};

export default HeroHeader;
