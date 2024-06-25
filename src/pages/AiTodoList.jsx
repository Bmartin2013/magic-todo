import React, { useState } from "react";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import IndicatorList from "../components/IndicatorList/IndicatorList";
import TodoList from "../components/TodoList/TodoList";

const headerProps = {
  title: "Another TODO APP (With AI)",
  description: " Let the AI complete a list of useful things for you",
};

const AiTodoList = ({
  handleToggleIndicators,
  toggleIndicators,
  handleSubmitWithAi,
}) => {
  const [description, setDescription] = useState("");
  const [list, setList] = useState([]);
  const [answer, setAnswer] = useState([]);
  const updateItem = () => {};
  const handleAddItem = () => {};

  return (
    <>
      <HeroBanner
        handleAddItem={handleAddItem}
        handleToggleIndicators={handleToggleIndicators}
        headerProps={headerProps}
        handleSubmitWithAi={handleSubmitWithAi}
        aiTitle={"Ask to the AI"}
      >
        <TodoList list={list} updateItem={updateItem} />
      </HeroBanner>
      {toggleIndicators && <IndicatorList list={list} />}
    </>
  );
};

export default AiTodoList;
