import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import {v1} from 'uuid';
//CRUD
//C
//R
//U
//D

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterValueType = "all" | "active" | "completed"

const App = () => {
//BLL:
    const todoListTitle: string = "What to learn"

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS/ES6", isDone: true},
        {id: v1(), title: "React", isDone: false},
    ])

    const removeTask = (taskID: string) => {
        /*const filteredTasks = tasks.filter(t => t.id !== taskID) //true || false
         setTasks(filteredTasks) //set - устанавливать, назначать, определять, get - получать, т.е. функция устанавливает значение тасков!!*/
        setTasks(tasks.filter(t => t.id !== taskID)) //- укореченная версия
    }

    const addTask = (title: string) => {
        const newTask: TaskType = {id: v1(), title: title, isDone: false}
        setTasks([newTask, ...tasks])
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

    const changeTaskStatus = (taskID: string, isDone: boolean) => {
        setTasks(tasks.map(t => t.id === taskID ? {...t, isDone} : t))//isDone: isDone сокращаем
    }

//UI:
    return (
        <div className="App">
            <TodoList title={todoListTitle} tasks={tasksForRender} removeTask={removeTask} changeFilter={changeFilter} filter={filter}
                      addTask={addTask} changeTaskStatus={changeTaskStatus}/>
        </div>

    );
}

export default App;
