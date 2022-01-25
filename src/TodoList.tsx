import React, {useState, KeyboardEvent, ChangeEvent} from "react";
import TodoListHeader from "./TodoListHeader";
import Button from "./Button";
import {TaskType, FilterValueType} from "./App";
import Task from "./Task";

type PropsType = {
    title: string
    tasks: Array<TaskType>,
    filter: FilterValueType,
    removeTask: (taskID: string) => void
    changeFilter: (filter: FilterValueType) => void
    addTask: (title: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean) => void
}

const TodoList = (props: PropsType) => {

    const [title, setTitle] = useState("")

    const [error, setError] = useState<boolean>(false)

    const tasksComponents = props.tasks.map(t => {
        // const changeTaskStatus = () => {props.changeTaskStatus(t.id, t.isDone)}
        return (<Task key={t.id} removeTask={props.removeTask} changeTaskStatus={props.changeTaskStatus} {...t}/>)
    })

    const onKeyPressAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === "Enter" && onClickAddTask()
        //e.charCode === 13 && onClickAddTask()
    }
    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setError(false)
        setTitle(e.currentTarget.value)
    }
    const onClickAddTask = () => {
        const trimTitle = title.trim()
        if (trimTitle) {
            props.addTask(trimTitle)
        } else {
            setError(true)
        }
        setTitle("")
    }
    const setAllFilter = () => props.changeFilter("all")
    const setActiveFilter = () => props.changeFilter("active")
    const setCompletedFilter = () => props.changeFilter("completed")
    const errorMessageStyle = {color: "white", backgroundColor: "red"}
    const errorMessage = error ? <div style={errorMessageStyle}>Title is required!</div> : null
    return (
        <div className="App">
            <div>
                <TodoListHeader title={props.title}/>
                <div>
                    <input
                        value={title}
                        onChange={onChangeSetTitle}
                        onKeyPress={onKeyPressAddTask}
                        className={error ? "error" : ""}
                    />
                    <button onClick={onClickAddTask}>+</button>
                    {errorMessage}
                </div>
                <ul>
                    {tasksComponents}
                </ul>
                <div>
                    <Button active={props.filter === "all"} title="All" onClickHandler={setAllFilter}/>
                    <Button active={props.filter === "active"} title="Active" onClickHandler={setActiveFilter}/>
                    <Button active={props.filter === "completed"} title="Completed"
                            onClickHandler={setCompletedFilter}/>
                </div>
            </div>
        </div>
    );
}

export default TodoList;

