import React from 'react';
import "./task.css";


const Task = ({ title }) => {
    return (
        <div className='task'>{title}</div>
    )
}

export default Task