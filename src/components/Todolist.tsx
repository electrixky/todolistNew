import React, {ChangeEvent, KeyboardEvent, useRef, useState} from "react";
import {FilterValueType, TasksType} from "../App";
import {Task} from "./Task";
import {Button} from "./Button";
import s from "./todolist.module.css"

type TodolistPropsType = {
    title: string
    tasks: TasksType[]
    removeTask: (id: string) => void
    addTask: (newTitle: string) => void
    changeFilter: (filter: FilterValueType) => void
    changeTaskStatus: (id: string, newStatus: boolean) => void
    filter: FilterValueType
};
export const Todolist = ({
                             title,
                             tasks,
                             removeTask,
                             addTask,
                             changeFilter,
                             changeTaskStatus,
                             filter
                         }: TodolistPropsType) => {

    // const inputRef = useRef<HTMLInputElement | null>(null)
    const [taskTitle, setTaskTitle] = useState("")
    const [error, setError] = useState<string | null>(null)

    const mappedTasks = tasks.length ?
        tasks.map(task => {
            return <Task key={task.id} removeTask={removeTask} changeTaskStatus={changeTaskStatus} {...task}/>
        }) : <div>No tasks</div>

    // const addTaskHandler = () => {
    //     if (inputRef.current) {
    //         addTask(inputRef.current.value)
    //         inputRef.current.value = ""
    //     }
    // }

    const addTaskHandler = () => {
        if (taskTitle.trim()) {
            addTask(taskTitle.trim())
        } else {
            setError("Title is required.")
        }
        setTaskTitle("")
    }

    const addNewTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setTaskTitle(e.currentTarget.value)
    }

    const addTaskOnKeyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter")
            addTaskHandler()
    }

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input
                    value={taskTitle}
                    onChange={addNewTitleHandler}
                    onKeyUp={addTaskOnKeyUpHandler}
                    className={error ? s.error : ""}
                />
                <Button
                    title={"+"}
                    onClick={addTaskHandler}
                />
            </div>
            {error && <span className={s.errorMessage}>Title is required.</span>}
            {mappedTasks}
            <div>
                <Button title={"All"} onClick={() => changeFilter("All")}
                        className={filter === "All" ? s.activeFilter : ""}/>
                <Button title={"Active"} onClick={() => changeFilter("Active")}
                        className={filter === "Active" ? s.activeFilter : ""}/>
                <Button title={"Completed"} onClick={() => changeFilter("Completed")}
                        className={filter === "Completed" ? s.activeFilter : ""}/>
            </div>
        </div>
    );
};