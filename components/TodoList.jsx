import React, { useState } from "react";
import EditTodoItem from "./EditTodoItem";

const TodoList = ({ list, updateItem }) => {
    const [isEditing, setIsEditing] = useState(false);

    const submitEdition = (item, description) => {
        updateItem(item.id, { ...item, description });
        setIsEditing(false);
    }


    const handleMarkItemAsDone = (item) => updateItem(item.id, { ...item, done: true })

    return (
        <div className="cnt-todo-list">
            <ul>
                {list?.map((item) =>
                    <li key={item.id}>
                        {item.description}
                        {!isEditing && <button onClick={() => setIsEditing(item.id)}>edit item</button>}
                        {isEditing === item.id && <EditTodoItem currentDescription={item.description}
                            submitEdition={(description) => submitEdition(item, description)} />}
                        <button onClick={() => handleMarkItemAsDone(item)}>Mark as done</button>
                    </li>)}
            </ul>
        </div>
    )
}

export default TodoList;