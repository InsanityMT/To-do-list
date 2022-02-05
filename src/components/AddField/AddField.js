import React from 'react'
import { nanoid } from 'nanoid'
import './AddField.css';
function AddField(props) {
    const [value, setValue] = React.useState('')

    const handleAddClick = React.useCallback(() => {
        if (value) {
            props.add({ value, id: nanoid(), checked: false })
            setValue('')
        }
    }, [setValue, value, props])

    return (
        <div className="addField">
            <input type="text" onKeyPress={(e) => e.key === 'Enter' ? handleAddClick() : undefined} value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter the text of the task...." />
            <button onClick={() => handleAddClick()}>+</button>
        </div>
    );
}

export default AddField;