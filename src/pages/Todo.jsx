import React, { useState } from "react";
import AiTodoList from "./AiTodoList";
import ManualList from "./ManualList";

const Todo = () => {
  const [toggleIndicators, setToggleIndicators] = useState(false);
  const [isSubmitWithAi, setIsSubmitWithAI] = useState(false);

  const handleToggleIndicators = () => setToggleIndicators(!toggleIndicators);
  const handleSubmitWithAi = () => setIsSubmitWithAI(!isSubmitWithAi);

  return isSubmitWithAi ? (
    <AiTodoList
      handleToggleIndicators={handleToggleIndicators}
      handleSubmitWithAi={handleSubmitWithAi}
      toggleIndicators={toggleIndicators}
    />
  ) : (
    <ManualList
      handleToggleIndicators={handleToggleIndicators}
      toggleIndicators={toggleIndicators}
      handleSubmitWithAi={handleSubmitWithAi}
    />
  );
};

export default Todo;
