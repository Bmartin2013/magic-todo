import React, { useState } from "react";

const EditTodoItem = ({ submitEdition, currentDescription }) => {
    const [onChangeValue, setOnChangeValue] = useState(currentDescription);

    return ((
        <div>
            <input type="text" value={onChangeValue} onChange={e => setOnChangeValue(e.target.value)} />
            <button onClick={() => submitEdition(onChangeValue)}>save</button>
        </div>
    ))
}

export default EditTodoItem;