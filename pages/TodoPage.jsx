import React, { useState } from "react"
import "./todoPage.scss"

const TodoPage = () => {
    const [note, setNote] = useState("");
    const [todoItems, setTodoItems] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodoItems([...todoItems, note])
    }

    return (
        <>
            <div className="cnt-todo-form">
                <form className="todo-form" onSubmit={handleSubmit}>
                    <label>Todo item:</label>
                    <input type="text" name="item" value={note} onChange={(e) => setNote(e.target.value)} />
                    <input type="submit" value="save" />
                </form>
            </div>

            <div className="cnt-todo-list">
                <ul>
                    {todoItems?.map(item => <li>{item}</li>)}
                </ul>

            </div>

        </>
    )
}

export default TodoPage;