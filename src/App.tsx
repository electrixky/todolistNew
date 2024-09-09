import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";
import {v1} from "uuid";

export type TasksType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterValueType = "All" | "Active" | "Completed"

function App() {

    const [tasks, setTasks] = useState<TasksType[]>(
        [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'ReactJS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
        ]
    )

    const [filterValue, setFilterValue] = useState<FilterValueType>("All")

    const removeTask = (id: string) => {
        const filteredTasks = tasks.filter(task => task.id !== id)
        setTasks(filteredTasks)
    }

    const addTask = (newTitle: string) => {
        const newTask = {id: v1(), title: newTitle, isDone: false}
        setTasks([newTask, ...tasks])
    }

    const filteredTasks = () => {
        switch (filterValue) {
            case "All":
                return tasks
            case "Active":
                return tasks.filter(task => !task.isDone)
            case "Completed":
                return tasks.filter(task => task.isDone)
        }
    }

    const changeFilter = (filter: FilterValueType) => {
        setFilterValue(filter)
    }

    const changeTaskStatus = (id: string, newStatus: boolean) => {
        const newState = tasks.map(task => task.id === id ? {...task, isDone: newStatus} : task)
        setTasks(newState)
    }

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={filteredTasks()} removeTask={removeTask} addTask={addTask}
                      changeFilter={changeFilter} changeTaskStatus={changeTaskStatus} filter={filterValue}/>
        </div>
    );
}

export default App;
