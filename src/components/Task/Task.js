import './Task.css';
function Task(props) {
    return (
        <div className="task">
            <input
              type='checkbox' 
              value={props.checked} 
              onChange={(event) => props.onChange(props.id, { value: props.message, checked: event.target.checked, id: props.id })} 
             />
            <span style={{ textDecoration: props.checked ? 'line-through' : 'none'}}>{props.message}</span>
            <span style={{ marginLeft: 'auto', marginRight: '20px', cursor: 'pointer' }} onClick={() => props.deleteTask(props.id)}>x</span>
        </div>
    );
}

export default Task;