import React, { useState } from 'react';
import "./TodoForm.scss"


const TodoForm = ({ handleAddItem }) => {
    const [description, setDescription] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        description && handleAddItem({ done: false, id: new Date().getTime(), description, pinned: false })
        setDescription("");
    }

    return (<div className='cnt-todo-form'>
        <form onSubmit={handleSubmit} className='todo-form'>
            <label>Todo item:</label>
            <input type='text' value={description} onChange={e => { setDescription(e.target.value) }} />
            <input type="submit" name='save' />
        </form>
    </div>
    )
}

export default TodoForm;