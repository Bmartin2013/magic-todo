import React from "react";
import classnames from "classnames";
import "./todoList.scss";

const TodoList = ({ list, updateItem, handlePin }) => {
  const handleMarkItemAsDone = (item) =>
    updateItem(item.id, { ...item, done: item.done ? !item.done : true });

  return (
    <div class="cnt-todo-list">
      <ul>
        <li class="todo-title">List Preview</li>
        {list?.map((item) => (
          <li
            key={item.id}
            className={classnames("cnt-list-item", {
              done: item.done,
              pinned: item.pinned,
            })}
          >
            <label class="container">
              <input
                type="checkbox"
                onChange={() => handleMarkItemAsDone(item)}
              />
              <span className="checkmark"></span>
              {item.description}
            </label>
            <button onClick={() => handlePin(item)} className="pin">
              {item.pinned ? "Pinned" : "Pin"}
            </button>
          </li>
        ))}
        {/* blur the ones that are covered by this footer */}
        {list.length > 5 && (
          <li className="todo-footer">Click here to enjoy the full app</li>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
