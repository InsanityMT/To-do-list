import './AddField.css';
function AddField() {
    return (
        <div className="addField">
            <input type="text" placeholder="Enter the text of the task...."></input>
            <button>+</button>
        </div>
    );
}

export default AddField;