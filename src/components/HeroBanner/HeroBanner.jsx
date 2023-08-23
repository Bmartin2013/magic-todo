import React from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import "./HeroBanner.scss";

const HeroBanner = ({ handleAddItem, list, updateItem }) => {
  return (
    <div className="cnt-hero-banner">
      <div className="hero-banner glassy">
        <span className="clarification clarification-rotated">It's just</span>
        <div className="hero-banner-info">
          <h1 className="title title-spaced title-shadow">Another TODO APP</h1>
          <p className="description hero-description">
            Get things done in no time with this super stylish and useful tool
          </p>
          <TodoForm handleAddItem={handleAddItem} />
        </div>
        <TodoList list={list} updateItem={updateItem} />
      </div>
    </div>
  );
};

export default HeroBanner;
