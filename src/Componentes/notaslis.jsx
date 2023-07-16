import { useState } from "react";
const Notaslis = ({ item, onUpdate, onComplete,onDelete }) => {

    const [isEdit, setIsEdit] = useState(false);
    const [value, setValue] = useState(item.title ?? "");
    /*
    const [newValue, setNewValue] = useState(item.title);
    function FormEdit() {
        function handleSubmit(e) {
            e.preventDefault();
        }
    */
        function handleChange(e) {
            setValue(e.target.value);
        }

        /*function handleClickUpdateNotaslis() {
            onUpdate(item.id, newValue);
            setIsEdit(false);
        }*/

        function handleUpdate() {
            onUpdate(item.id, value);
            setIsEdit(false);
         }

        function handleSubmit(e) {
            e.preventDefault();
            onUpdate(item.id, value);
            setIsEdit(false);
        }

        function handleCheckboxChange(e) {
            onComplete(item.id, e.target.checked);
  }

        return (
            <div className="notaslis">
                {isEdit ? (
                    <form className="notaslisUpdateForm" onSubmit={handleSubmit}>
                        <input
                        className="notaslisinput"
                        type="text"
                        value={value} 
                        onChange={handleChange}                        
                    />
            <button className="button" onClick={handleUpdate}>
                Update
            </button>
        </form>
    ) : (

        <div className="notaslisInfo">
            <input
            type="checkbox"
            onChange={handleCheckboxChange} 
            checked={item.complete}  
        />
            <span
            className="notaslisTitle"
            style={{
                color: item.completed ? "#ccc" : "",
                textDecoration: item.complete ? "line-through" :  "",
            }}
            >
                {item.title}
            </span>
            <button className="button" onClick={() => setIsEdit(true)}>
                Edit
            </button>
            <button className="buttonDelete" onClick={() => onDelete(item.id)}>
                Delete
            </button>
        </div>
    )}
    </div>
    );
}
        

export default Notaslis;