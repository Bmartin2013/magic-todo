import React from "react";
import "./todoList.scss";
import classnames from "classnames";

const TodoList = ({ list, updateItem }) => {
  const handleMarkItemAsDone = (item) =>
    !item.pinned && updateItem(item.id, { ...item, done: item.done ? !item.done : true });

  return (
    <div className="cnt-todo-list">
      <ul>
        {list?.map((item) => (
          <li key={item.id} className={classnames("", { 'done': item.done })}>
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
