import React, {ChangeEvent} from 'react';
import {TaskType} from './App';

type TaskPropsType = TaskType & {
    removeTask: (taskID: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean) => void
}

const Task: React.FC<TaskPropsType> =
    ({
         id,
         title,
         isDone,
         removeTask,
         changeTaskStatus,
     }) => {

        const onClickRemoveTask = () => removeTask(id)
        const onChangeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => changeTaskStatus(id, e.currentTarget.checked)
        return (
            <li className={isDone ? "is-done": ""}>
                <input type="checkbox" checked={isDone} onChange={onChangeTaskStatus}/>
                <span>{title}</span>
                <button onClick={onClickRemoveTask}>x</button>
            </li>

        );
    };

export default Task;
