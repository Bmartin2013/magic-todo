import React, { useState } from "react";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import IndicatorList from "../components/IndicatorList/IndicatorList";
import TodoList from "../components/TodoList/TodoList";

const TodoPage = () => {
  const [list, setList] = useState([]);
  const [toggleIndicators, setToggleIndicators] = useState(false);
  const [isSubmitWithAi, setIsSubmitWithAI] = useState(false);

  const handleAddItem = (addItem) => {
    setList([...list, addItem]);
  };

  const updateItem = (id, updatedItem) => {
    const updatedList = list.map((item) =>
      item.id === id ? updatedItem : item
    );
    setList(updatedList);
  };

  return (
    <>
      <HeroBanner
        handleAddItem={handleAddItem}
        handleToggleIndicators={() => setToggleIndicators(!toggleIndicators)}
        handleSubmitWithAi={() => setIsSubmitWithAI(!isSubmitWithAi)}
        isSubmitWithAi={isSubmitWithAi}
      >
        <TodoList list={list} updateItem={updateItem} />
      </HeroBanner>
      {toggleIndicators && <IndicatorList list={list} />}
    </>
  );
};

export default TodoPage;
