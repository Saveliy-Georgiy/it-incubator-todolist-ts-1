import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
//CRUD
//C
//R
//U
//D

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type FilterValueType = "all" | "active" | "completed"

const App = () => {
//BLL:
    const todoListTitle: string = "What to learn"

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS/ES6", isDone: true},
        {id: 3, title: "React", isDone: false},
    ])

    const removeTask = (taskID: number) => {
        /*const filteredTasks = tasks.filter(t => t.id !== taskID) //true || false
         setTasks(filteredTasks) //set - устанавливать, назначать, определять, get - получать, т.е. функция устанавливает значение тасков!!*/
        setTasks(tasks.filter(t => t.id !== taskID)) //- укореченная версия
    }

    const [filter, setFilter] = useState<FilterValueType>("all")

    const changeFilter = (filter: FilterValueType) => {
        setFilter(filter)
    }

    const getTasksForRender = () => {
        switch (filter) {
            case "active":
                return tasks.filter(t => !t.isDone)
            case "completed":
                return tasks.filter(t => t.isDone)
            default:
                return tasks
        }
    }

    const tasksForRender = getTasksForRender();

//UI:
    return (
        <div className="App">
            <TodoList title={todoListTitle} tasks={tasksForRender} removeTask={removeTask} changeFilter={changeFilter}/>
        </div>

    );
}

export default App;
