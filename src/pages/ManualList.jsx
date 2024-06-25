import React, { useState } from "react";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import IndicatorList from "../components/IndicatorList/IndicatorList";
import TodoList from "../components/TodoList/TodoList";

const ManualList = ({
  handleToggleIndicators,
  toggleIndicators,
  handleSubmitWithAi,
}) => {

  const [description, setDescription] = useState("");
  const [list, setList] = useState([]);

  const headerProps = {
    title: "Another TODO APP ",
    description:
      " Get things done in no time with this super stylish and useful tool",
  };

  const baseItem = {
    done: false,
    id: new Date().getTime(),
    pinned: false,
  };

  const handleAddItem = (addItem) => {
    console.log("item", addItem)
    setList([...list, addItem]);
  };

  const updateItem = (id, updatedItem) => {
    const updatedList = list.map((item) =>
      item.id === id ? updatedItem : item
    );
    setList(updatedList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    description && handleAddItem({ ...baseItem, description });
    setDescription("");
  };

  return (
    <>
      <HeroBanner
        handleSubmit={handleSubmit}
        handleToggleIndicators={handleToggleIndicators}
        headerProps={headerProps}
        handleSubmitWithAi={handleSubmitWithAi}
        aiTitle={"Back to TODO"}
        description={description}
        setDescription={setDescription}
      >
        <TodoList list={list} updateItem={updateItem} />
      </HeroBanner>
      {toggleIndicators && <IndicatorList list={list} />}
    </>
  );
};

export default ManualList;
