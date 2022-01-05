import React from 'react';
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

const App = () => {
//BLL:
    const todoListTitle1: string = "What to learn"
    const todoListTitle2: string = "What to buy"

    const tasks1: Array<TaskType> = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS/ES6", isDone: true},
        {id: 3, title: "React", isDone: false},
    ]

    const tasks2: Array<TaskType> = [
        {id: 4, title: "Water", isDone: true},
        {id: 5, title: "Milk", isDone: false},
        {id: 6, title: "Beer", isDone: true},
    ]
//UI:
    return (
        <div className="App">
            <TodoList title = {todoListTitle1} tasks = {tasks1}/>
            <TodoList title = {todoListTitle2} tasks = {tasks2}/>
            </div>

    );
}

export default App;
