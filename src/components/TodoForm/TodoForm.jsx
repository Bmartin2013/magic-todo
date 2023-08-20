import React, { useState } from "react";

const TodoForm = ({ handleAddItem, className }) => {
  const [description, setDescription] = useState("");
  const baseItem = {
    done: false,
    id: new Date().getTime(),
    pinned: false,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    description && handleAddItem({ ...baseItem, description });
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <input
        className="glassy glassy-rounded-border"
        type="text"
        placeholder="Write your task here and press enter"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
    </form>
  );
};

export default TodoForm;
