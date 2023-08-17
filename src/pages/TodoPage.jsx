import React, { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import IndicatorsList from "../components/IndicatorsList";

const TodoPage = () => {
  const [list, setList] = useState([]);

  const filteredList = list.filter((item) => !item.done && list.length > 0);

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
      <HeroBanner handleAddItem={handleAddItem} filteredList={filteredList} updateItem={updateItem} />
      <IndicatorsList list={list} />
    </>
  );
};

export default TodoPage;
