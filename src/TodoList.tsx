import React from "react";
import TodoListHeader from "./TodoListHeader";
import Button from "./Button";
import {TaskType, FilterValueType} from "./App";
import Task from "./Task";

type PropsType = {
    title: string
    tasks: Array<TaskType>,
    removeTask: (taskID: number) => void
    changeFilter: (filter: FilterValueType) => void
}

const TodoList = (props: PropsType) => {

    const tasksComponents = props.tasks.map(t => <Task key={t.id} removeTask={props.removeTask} {...t}/>)

    return (
        <div className="App">
            <div>
              <TodoListHeader title={props.title}/>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {tasksComponents}
                </ul>
                <div>
                    <Button title="All" onClickHandler={() => props.changeFilter("all")}/>
                    <Button title="Active"  onClickHandler={() => props.changeFilter("active")}/>
                    <Button title="Completed"  onClickHandler={() => props.changeFilter("completed")}/>
                </div>
            </div>
        </div>
    );
}

export default TodoList;