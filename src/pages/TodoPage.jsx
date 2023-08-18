import React, { useState } from "react";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import IndicatorList from "../components/Indicator/IndicatorList";

const TodoPage = () => {
  const [list, setList] = useState([]);

  const handleAddItem = (addItem) => {
    setList([...list, addItem]);
  };

  const updateItem = (id, updatedItem) => {
    const updatedList = list.map((item) =>
      item.id === id ? updatedItem : item
    );
    setList(updatedList);
  };

  const handlePin = (item) => {
    const isPinned = item.pinned;
    updateItem(item.id, { ...item, pinned: !isPinned });
  };

  return (
    <>
      <HeroBanner handleAddItem={handleAddItem} list={list} updateItem={updateItem} handlePin={handlePin} />
      <IndicatorList list={list} />
    </>
  );
};

export default TodoPage;
