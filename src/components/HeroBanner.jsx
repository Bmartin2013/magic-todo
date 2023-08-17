import React from "react";
import "./HeroBanner.scss";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const HeroBanner = ({ handleAddItem, filteredList, updateItem }) => {
  return (
    <div className="cnt-hero-banner">
      <ul className="glassy">
        <li>
          <span className="clarification rotated">It's just</span>
          <h1 className="title">Another TODO APP</h1>
          <p className="description">
            Get things done in no time with this super stylish and useful tool
          </p>
          <TodoForm handleAddItem={handleAddItem} />
        </li>
        <li>
          <TodoList list={filteredList} updateItem={updateItem} />
        </li>
      </ul>
    </div>
  );
};

export default HeroBanner;
