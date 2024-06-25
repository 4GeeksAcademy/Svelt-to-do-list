import React from "react";
import ToDoList from "../ToDoList.jsx";

//create yourfirst component
const Home = () => {  
    return (
<div className="text-center">
<h1 className="text-center at-5">ToDo List</h1>
    <ToDoList />
    </div>
    );
};

export default Home;
