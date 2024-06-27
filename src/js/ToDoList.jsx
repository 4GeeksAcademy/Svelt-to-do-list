import React, { useState } from "react";

const ToDoList = () => {
const [toDoItems, setToDoItems] = useState([]);
const [newItem, setNewItem] = useState("");

const handleAddItem = () => {
    if (newItem) {
        setToDoItems([...toDoItems, newItem]);
        setNewItem("");
 }
};

const handlekeyPress = (e)=> {
    if (e.key === "Enter") {
        handleAddItem();
    }
}

const handleDeleteItem = (index) => {
    const newToDoItems = [...toDoItems];
    newToDoItems.splice(index, 1);
    setToDoItems(newToDoItems);
};

return (
    <div className="container mt-4">
     <div className="row justify-content-center">
        <div className="col-md-8">
            <h2 className="text-center mb-4"></h2>
            <div className="input-group mb-3">
                <input
                type="text"
                className="form-control"
                placeholder="Add new item"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                onkeyDown={handlekeyPress}
                />
                <div className="input-group-append">
                    <button
                    className="btn btn-outline-secondary"
                 tyme="button"
                 onClick={handleAddItem}
                 >
                </button>
             </div>
           </div>
        
       <ul className="list-group">
          {toDoItems.map((item, index) => (
          <li
          key={index}
          className="list-group-Item d-flex justify-content-between align-ite"
          >
          {item}
          <button
          className="btn btn-danger btn-sm mx-5"
          onClick={() => handleDeleteItem(index)}
          >
            delete
            </button>
                </li>
                ))}
                </ul>
                </div>
                </div> 
                </div>
            );
        };

        export default ToDoList