import React, { useEffect, useState } from "react";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import IndicatorList from "../components/IndicatorList/IndicatorList";
import TodoList from "../components/TodoList/TodoList";
import { execute } from "../core/useCase/LoadTodoItem"

const headerProps = {
  title: "Another TODO APP (With AI)",
  description: " Let the AI complete a list of useful things for you",
};

const baseItem = {
  done: false,
  id: new Date().getTime(),
  pinned: false,
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

  const createItem = (addItem) => {
    console.log("item", addItem)
    setList(prevList => [...prevList, addItem]);
  };

  const handleAddItem = async (e) => {
    e.preventDefault();
    if (description) {
      const response = await execute(description);
      console.log("response", response)
      setAnswer(response);
    }
    //setDescription("");
  };

  useEffect(() => {
    if (answer?.length > 0) {
      answer?.map(item => createItem({ ...baseItem, description: item }));
      // Puedes realizar otras acciones aquí cuando `answer` se actualice
    }
  }, [answer]);

  return (
    <>
      <HeroBanner
        handleSubmit={handleAddItem}
        handleToggleIndicators={handleToggleIndicators}
        headerProps={headerProps}
        handleSubmitWithAi={handleSubmitWithAi}
        aiTitle={"Back to normal"}
        description={description}
        setDescription={setDescription}
      >
        <TodoList list={list} updateItem={updateItem} />
      </HeroBanner>
      {toggleIndicators && <IndicatorList list={list} />}
    </>
  );
};

export default AiTodoList;
