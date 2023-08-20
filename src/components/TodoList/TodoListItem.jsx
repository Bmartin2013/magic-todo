import React from "react";
import classnames from "classnames";
import "./todoList.scss";

const TodoListItem = ({ handleMarkItemAsDone, handlePin, id, description, done, pinned }) => {
  return (
    <li key={id} className={classnames("cnt-list-item", { done, pinned })}>
      <label class="container">
        <input type="checkbox" onChange={() => handleMarkItemAsDone(id, done)} />
        <span className="checkmark"></span>
        {description}
      </label>
      <button onClick={() => handlePin(id,pinned)} className="pin">
        {pinned ? "Pinned" : "Pin"}
      </button>
    </li>
  );
};

export default TodoListItem;
