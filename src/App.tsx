import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";

export type TasksType = {
    id: number
    title: string
    isDone: boolean
}

export type FilterValueType = "All" | "Active" | "Completed"

function App() {

    const [tasks, setTasks] = useState<TasksType[]>(
        [
            {id: 1, title: 'HTML&CSS', isDone: true},
            {id: 2, title: 'JS', isDone: true},
            {id: 3, title: 'ReactJS', isDone: false},
            {id: 4, title: 'ReactJS', isDone: true},
            {id: 5, title: 'ReactJS', isDone: false},
        ]
    )

    const [filterValue, setFilterValue] = useState<FilterValueType>("All")

    const removeTask = (id: number) => {
        const filteredTasks = tasks.filter(task => task.id !== id)
        setTasks(filteredTasks)
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

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={filteredTasks()} removeTask={removeTask}
                      changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
