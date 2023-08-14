import React, { useState, useMemo } from "react"
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import "./todoPage.scss"

const TodoPage = () => {

    const [list, setList] = useState([]);
    const completedItems = useMemo(() => list.filter(item => item.done).length, [list])
    const filteredList = list.filter(item => !item.done && list.length > 0)

    const handleAddItem = addItem => {
        setList([...list, addItem]);
    }

    const handleClearAllItems = () => {
        const deletedItems = list.map(item => !item.pinned ? ({ ...item, done: true }): item)
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
            <p>completed items: {completedItems}</p>
        </>
    )
}

export default TodoPage;