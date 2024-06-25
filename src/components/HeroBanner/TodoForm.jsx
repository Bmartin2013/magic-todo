import React from "react";

const TodoForm = ({ className, handleSubmit, description, setDescription }) => {
  return (
    <form onSubmit={handleSubmit} className={className}>
      <input
        className="glassy glassy-rounded-border"
        type="text"
        placeholder="Write here"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
    </form>
  );
};

export default TodoForm;
