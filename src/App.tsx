import React from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";

export type TasksType = {
    id: number
    title: string
    isDone: boolean
}
function App() {

    const tasks1: TasksType[] = [
        { id: 1, title: 'HTML&CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'ReactJS', isDone: false },
    ]

    const tasks2: TasksType[] = []


    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks1}/>
            <Todolist title="Songs" tasks={tasks2}/>
        </div>
    );
}

export default App;
