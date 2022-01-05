import React from 'react';
import { TaskType } from './App';

type TaskPropsType = TaskType

/*type TaskType = {
    id: number
    title: string
    isDone: boolean
}*/


const Task = (props: TaskPropsType) => {
    return (
        <div>
            <li>
                <input type="checkbox" checked={props.isDone}/>
                <span>{props.title}</span>
            </li>
        </div>
    );
};

export default Task;
