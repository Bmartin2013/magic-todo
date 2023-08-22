import React, { useState } from "react";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import IndicatorList from "../components/Indicator/IndicatorList";
import EnjoyAppBtn from "../components/EnjoyAppBtn/EnjoyAppBtn";

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

  return (
    <>
      <HeroBanner
        handleAddItem={handleAddItem}
        list={list}
        updateItem={updateItem}
      />
      <IndicatorList list={list} />
      <EnjoyAppBtn/>
    </>
  );
};

export default TodoPage;
