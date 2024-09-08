import React, {ChangeEvent, useRef, useState} from "react";
import {FilterValueType, TasksType} from "../App";
import {Task} from "./Task";
import {Button} from "./Button";
import {log} from "util";

type TodolistPropsType = {
    title: string
    tasks: TasksType[]
    removeTask: (id: string) => void
    addTask: (newTitle: string) => void
    changeFilter: (filter: FilterValueType) => void
};
export const Todolist = ({title, tasks, removeTask, addTask, changeFilter}: TodolistPropsType) => {

    // const inputRef = useRef<HTMLInputElement | null>(null)
    const [taskTitle, setTaskTitle] = useState("")

    const mappedTasks = tasks.length ?
        tasks.map(task => {
            return <Task key={task.id} removeTask={removeTask} {...task}/>
        }) : <div>No tasks</div>

    // const addTaskHandler = () => {
    //     if (inputRef.current) {
    //         addTask(inputRef.current.value)
    //         inputRef.current.value = ""
    //     }
    // }

    const addTaskHandler = () => {
        addTask(taskTitle)
        setTaskTitle("")
    }

    const addNewTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(e.currentTarget.value)
    }

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input
                    value={taskTitle}
                    onChange={addNewTitleHandler}
                    onKeyUp={e => {
                        if (e.key === "Enter")
                            addTaskHandler()
                    }}/>
                <Button
                    title={"+"}
                    onClick={addTaskHandler}
                />
            </div>
            {mappedTasks}
            <div>
                <Button title={"All"} onClick={() => changeFilter("All")}/>
                <Button title={"Active"} onClick={() => changeFilter("Active")}/>
                <Button title={"Complete"} onClick={() => changeFilter("Completed")}/>
            </div>
        </div>
    );
};