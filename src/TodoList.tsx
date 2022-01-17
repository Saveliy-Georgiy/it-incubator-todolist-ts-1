import React, {useState, KeyboardEvent, ChangeEvent} from "react";
import TodoListHeader from "./TodoListHeader";
import Button from "./Button";
import {TaskType, FilterValueType} from "./App";
import Task from "./Task";

type PropsType = {
    title: string
    tasks: Array<TaskType>,
    removeTask: (taskID: string) => void
    changeFilter: (filter: FilterValueType) => void
    addTask: (title: string) => void
}

const TodoList = (props: PropsType) => {



    const [title, setTitle] = useState("")

    const tasksComponents = props.tasks.map(t => <Task key={t.id} removeTask={props.removeTask} {...t}/>)

    const onKeyPressAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === "Enter" && onClickAddTask()
        //e.charCode === 13 && onClickAddTask()
    }
    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const onClickAddTask = () => {
        props.addTask(title)
        setTitle("")
    }
    const setAllFilter = () => props.changeFilter("all")
    const setActiveFilter = () => props.changeFilter("active")
    const setCompletedFilter = () => props.changeFilter("completed")

    return (
        <div className="App">
            <div>
                <TodoListHeader title={props.title}/>
                <div>
                    <input
                        value={title}
                        onChange={onChangeSetTitle}
                        onKeyPress={onKeyPressAddTask}
                    />
                    <button onClick={onClickAddTask}>+</button>
                </div>
                <ul>
                    {tasksComponents}
                </ul>
                <div>
                    <Button title="All" onClickHandler={setAllFilter}/>
                    <Button title="Active" onClickHandler={setActiveFilter}/>
                    <Button title="Completed" onClickHandler={setCompletedFilter}/>
                </div>
            </div>
        </div>
    );
}

export default TodoList;

