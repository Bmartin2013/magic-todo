import React from "react";
import "./todoList.scss";
import TodoListItem from "./TodoListItem";

const TodoList = ({ list, updateItem }) => {
  const handleMarkItemAsDone = (id, done) => {
    const idToMark = list.findIndex((item) => item.id === id);
    updateItem(id, { ...list[idToMark], done: done });
  };

  const handlePin = (id, pinned) => {
    const idToPin = list.findIndex((item) => item.id === id);
    updateItem(id, { ...list[idToPin], pinned: pinned });
  };

  return (
    <div class="cnt-todo-list align-column">
      <strong className="todo-title title-spaced-small">List Preview</strong>
      {list.length === 0 ? (
        <p className="todo-description">Create your first task to start filling the list</p>
      ) : (
        <ul>
          {list?.map((item) => (
            <TodoListItem
              handleMarkItemAsDone={handleMarkItemAsDone}
              handlePin={handlePin}
              className="cnt-list-item"
              {...item}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
