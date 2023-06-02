import React, { useState } from 'react';
import "./column.css";
import Task from "./Task.jsx";
import { useStore } from '../store.js';

const Column = ({ state }) => {
    const [text, setText] = useState('');
    const [open, setOpen] = useState(false);
    const tasks = useStore((store) => store.tasks.filter((task) => task.state === state));
    const addTask = useStore(store => store.addTask);
    const setDraggedTask = useStore((store) => store.setDraggedTask);
    const draggedTask = useStore((store) => store.draggedTask);
    const moveTask = useStore((store) => store.moveTask);

    return (
        <div
            className="column"
            onDragOver={(e) => {
                e.preventDefault();
            }}
            onDrop={(e) => {
                console.log(draggedTask);
                moveTask(draggedTask, state);
                setDraggedTask(null);
            }}
        >
            <div className="titleWrapper">
                <p>{state}</p>
                <button onClick={() => setOpen(true)}>Add</button>
            </div>
            <p>{state}</p>
            {tasks.map((task) => <Task title={task.title} key={task.title} />)}
            {open && <div className="modal">
                <div className="modalContent">
                    <input type="text" onChange={(e) => setText(e.target.value)} value={text} />
                    <button onClick={() => {
                        addTask(text, state);
                        setText('');
                        setOpen(false);
                    }}>Submit</button>
                </div>
            </div>}
        </div>
    )
}

export default Column