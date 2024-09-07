import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";

export type TasksType = {
    id: number
    title: string
    isDone: boolean
}
function App() {

    const [tasks, setTasks] = useState<TasksType[]>(
        [
            { id: 1, title: 'HTML&CSS', isDone: true },
            { id: 2, title: 'JS', isDone: true },
            { id: 3, title: 'ReactJS', isDone: false },
            { id: 4, title: 'ReactJS', isDone: true },
            { id: 5, title: 'ReactJS', isDone: false },
        ]
    )

    const removeTask = (id: number) => {
        const filteredTasks = tasks.filter(task=>task.id!==id)
        setTasks(filteredTasks)
    }

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks} removeTask={removeTask}/>
        </div>
    );
}

export default App;
