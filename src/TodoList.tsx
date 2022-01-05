import React from "react";
import TodoListHeader from "./TodoListHeader";
import Button from "./Button";
import {TaskType} from "./App";
import Task from "./Task";

type PropsType = {
    title: string
    tasks: Array<TaskType>
}

const TodoList = (props: PropsType) => {
    return (
        <div className="App">
            <div>
              <TodoListHeader title={props.title}/>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    <Task key={props.tasks[0].id}
                          {...props.tasks[0]} // все свойства таски
                    />
                    <Task key={props.tasks[1].id} {...props.tasks[1]}/>
                    <Task key={props.tasks[2].id} {...props.tasks[2]}/>
                    {/*<li key={props.tasks[0].id}>
                        <input type="checkbox" checked={props.tasks[0].isDone}/>
                        <span>{props.tasks[0].title}</span>
                    </li>
                    <li key={props.tasks[1].id}>
                        <input type="checkbox" checked={props.tasks[1].isDone}/>
                        <span>{props.tasks[1].title}</span>
                    </li>
                    <li key={props.tasks[2].id}>
                        <input type="checkbox" checked={props.tasks[2].isDone}/>
                        <span>{props.tasks[2].title}</span>
                    </li>*/}
                </ul>
                <div>
                    <Button title="All"/>
                    <Button title="Active"/>
                    <Button title="Completed"/>
                </div>
            </div>
        </div>
    );
}

export default TodoList;