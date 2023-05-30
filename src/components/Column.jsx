import React from 'react';
import "./column.css";
import Task from "./Task.jsx";

const Column = ({ state }) => {
    return (
        <div className="column">
            <p>{state}</p>
            <Task title="Todo" />
        </div>
    )
}

export default Column