import React from "react";
import classnames from "classnames";
import TodoCheckbox from "./TodoCheckbox";
import "./todoListItem.scss";

const TodoListItem = ({
  handleMarkItemAsDone,
  handlePin,
  id,
  description,
  done,
  pinned,
  className,
}) => {
  const handlePinned = () => handlePin(id, !pinned);
  const handleDone = () => handleMarkItemAsDone(id, !done);

  return (
    <li
      className={classnames("todo-list-item", {
        [className]: !!className,
        done,
        pinned,
      })}
    >
      <TodoCheckbox
        handleMarkItemAsDone={handleDone}
        description={description}
      />
      <button onClick={handlePinned} className="pin">
        {pinned ? "Pinned" : "Pin"}
      </button>
    </li>
  );
};

export default TodoListItem;
