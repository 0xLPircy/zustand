import React from 'react';
import "./task.css";
import classNames from 'classnames';
import { useStore } from '../store';
import trash from '../assets/react.svg';


const Task = ({ title }) => {
    const task = useStore((store) => store.tasks.find((task) => task.title === title));
    const deleteTask = useStore((store) => store.deleteTask);

    return (
        <div className='task'>
            <div>{task.title}</div>
            <div className='bottomWrapper'>
                <div><img src={trash} onClick={() => deleteTask(task.title)} /></div>
                <div className={classNames("status", task.state)}>{task.state}</div>
            </div>
        </div>
    )
}

export default Task