import React, {ChangeEvent, KeyboardEvent, useRef, useState} from "react";
import {FilterValueType, TasksType} from "../App";
import {Task} from "./Task";
import {Button} from "./Button";
import s from "./todolist.module.css"
import {AddItemForm} from "./AddItemForm";

type TodolistPropsType = {
    todolistId: string
    title: string
    tasks: TasksType[]
    removeTask: (todolistId: string, id: string) => void
    addTask: (todolistId: string, newTitle: string) => void
    changeFilter: (todolistId: string, filter: FilterValueType) => void
    changeTaskStatus: (todolistId: string, id: string, newStatus: boolean) => void
    filter: FilterValueType
    removeTodolist: (todolistId: string) => void
};
export const Todolist = ({
                             todolistId,
                             title,
                             tasks,
                             removeTask,
                             addTask,
                             changeFilter,
                             changeTaskStatus,
                             filter,
                             removeTodolist
                         }: TodolistPropsType) => {

    // const inputRef = useRef<HTMLInputElement | null>(null)



    const mappedTasks = tasks.length ?
        tasks.map(task => {
            return <Task key={task.id} todolistId={todolistId} removeTask={removeTask}
                         changeTaskStatus={changeTaskStatus} {...task}/>
        }) : <div>No tasks</div>

    // const addTaskHandler = () => {
    //     if (inputRef.current) {
    //         addTask(inputRef.current.value)
    //         inputRef.current.value = ""
    //     }
    // }

    const addTaskCallback = (title: string) => {
        addTask(todolistId, title)
    }

    return (
        <div>
            <div className={s.todolistTitleContainer}>
                <h3>{title}</h3>
                <Button title={'x'} onClick={() => removeTodolist(todolistId)}/>
            </div>
            <div>
                <AddItemForm addItem={addTaskCallback}/>
            </div>
            {mappedTasks}
            <div>
                <Button title={"All"} onClick={() => changeFilter(todolistId, "All")}
                        className={filter === "All" ? s.activeFilter : ""}/>
                <Button title={"Active"} onClick={() => changeFilter(todolistId, "Active")}
                        className={filter === "Active" ? s.activeFilter : ""}/>
                <Button title={"Completed"} onClick={() => changeFilter(todolistId, "Completed")}
                        className={filter === "Completed" ? s.activeFilter : ""}/>
            </div>
        </div>
    );
};