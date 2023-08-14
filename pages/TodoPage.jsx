import React, { useEffect, useState } from "react"
import "./todoPage.scss"
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const TodoPage = () => {

    const [list, setList] = useState([]);
    const filteredList = list.filter(item => !item.done && list.length > 0)

    const handleAddItem = addItem => {
        setList([...list, addItem]);
    }

    const handleClearAllItems = () => {
        const deletedItems = list.map(item => ({ id: item.id, description: item.description, done: true }))
        setList(deletedItems);
    }

    const updateItem = (id, updatedItem) => {
        const updatedList = list.map((item) =>
            item.id === id ? updatedItem : item
        );
        setList(updatedList);
    };


    return (
        <>
            <TodoForm handleAddItem={handleAddItem} />
            <TodoList list={filteredList} updateItem={updateItem} />
            {filteredList.length > 0 && <button onClick={handleClearAllItems}>Clear All</button>}
        </>
    )
}

export default TodoPage;