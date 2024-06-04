import React, { useState } from "react";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import IndicatorList from "../components/Indicator/IndicatorList";

const TodoPage = () => {
  const [list, setList] = useState([]);
  const [toggleIndicators, setToggleIndicators] = useState(false);

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
        handleToggleIndicators={() => setToggleIndicators(!toggleIndicators)}
      />
      {toggleIndicators && <IndicatorList list={list} />}
    </>
  );
};

export default TodoPage;
