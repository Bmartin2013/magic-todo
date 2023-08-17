import React from "react";
import "./todolist.scss";

const TodoList = ({ list, updateItem }) => {
  const handleMarkItemAsDone = (item) =>
    !item.pinned && updateItem(item.id, { ...item, done: true });

  return (
    <div className="cnt-todo-list">
      <ul>
        {list?.map((item) => (
          <li key={item.id}>
            <label className="container">
              <input
                type="checkbox"
                onChange={() => handleMarkItemAsDone(item)}
              />
              <span className="checkmark"></span>
              {item.description}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
