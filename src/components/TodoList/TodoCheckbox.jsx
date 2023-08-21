import React from "react";
import "./TodoCheckbox.scss";

const TodoCheckbox = ({ handleMarkItemAsDone, description }) => {
  return (
    <label className="cnt-todo-checkbox">
      <input type="checkbox" onChange={handleMarkItemAsDone} />
      <span></span>
      {description}
    </label>
  );
};

export default TodoCheckbox;
