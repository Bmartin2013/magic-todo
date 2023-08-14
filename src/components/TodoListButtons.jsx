import React from "react";

const TodoListButtons = ({showEditButton, setEditItem, handleMarkItemAsDone, handlePin, isPinned}) => {

    return (
        <>
            {showEditButton && <button onClick={setEditItem}>edit item</button>}
            <button onClick={handleMarkItemAsDone}>Mark as done</button>
            <button onClick={handlePin}> {!isPinned ? `Pin` : `Unpin`}</button>
        </>
    )
}

export default TodoListButtons;