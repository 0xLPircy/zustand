import React from 'react';
import "./column.css";
import Task from "./Task.jsx";
import { useStore } from '../store.js';

const Column = ({ state }) => {
    const tasks = useStore((store) => store.tasks.filter((task) => task.state === state));

    return (
        <div className="column">
            <p>{state}</p>
            {tasks.map((task) => <Task title={task.title} key={task.title} />)}
        </div>
    )
}

export default Column