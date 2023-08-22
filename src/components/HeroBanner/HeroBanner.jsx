import React from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import "./HeroBanner.scss";

const HeroBanner = ({ handleAddItem, list, updateItem }) => {
  return (
    <div className="cnt-hero-banner">
      <div className="hero-banner glassy glassy-rounded-border">
        <span className="clarification clarification-rotated">It's just</span>
        {/* Banner Content */}
        <div className="hero-banner-info align-column">
          <h1 className="title title-spaced title-shadow">Another TODO APP</h1>
          <p className="description hero-description">
            Get things done in no time with this super stylish and useful tool
          </p>
          <TodoForm handleAddItem={handleAddItem} />
        </div>
        {/* Todo List */}
        <div className="todo-list">
          <TodoList list={list} updateItem={updateItem} />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
