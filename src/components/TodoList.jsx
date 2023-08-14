import React, { useState } from "react";
import EditTodoItem from "./EditTodoItem";
import TodoListButtons from "./TodoListButtons";

const TodoList = ({ list, updateItem }) => {
    const [isEditing, setIsEditing] = useState(false);

    const submitEdition = (item, description) => {
        updateItem(item.id, { ...item, description });
        setIsEditing(false);
    }

    const handleMarkItemAsDone = (item) => !item.pinned && updateItem(item.id, { ...item, done: true })

    const handlePin = (item) => {
        const isPinned = item.pinned;
        updateItem(item.id, { ...item, pinned: !isPinned })
    }

    return (
        <div className="cnt-todo-list">
            <ul>
                {list?.map((item) =>
                    <li key={item.id}>
                        {item.description}
                        <TodoListButtons
                            showEditButton={!isEditing}
                            setEditItem={() => setIsEditing(item.id)}
                            handleMarkItemAsDone={() => handleMarkItemAsDone(item)}
                            handlePin={() => handlePin(item)}
                            isPinned={item.pinned}
                        />
                        {isEditing === item.id && <EditTodoItem currentDescription={item.description}
                            submitEdition={(description) => submitEdition(item, description)} />}
                    </li>)}
            </ul>
        </div>
    )
}

export default TodoList;