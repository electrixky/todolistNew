import React, {ChangeEvent, KeyboardEvent, useRef, useState} from "react";
import {FilterValueType, TasksType} from "../App";
import {Task} from "./Task";
import {Button} from "./Button";
import s from "./todolist.module.css"
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";

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
    updateTask: (todolistId: string, taskId: string, title: string) => void
    updateTodolist: (todolistId: string, title: string) => void
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
                             removeTodolist,
                             updateTask,
                             updateTodolist
                         }: TodolistPropsType) => {

    // const inputRef = useRef<HTMLInputElement | null>(null)



    const mappedTasks = tasks.length ?
        tasks.map(task => {
            const changeTaskTitleHandler = (title: string) => {
                updateTask(todolistId, task.id, title)
            }

            return <Task key={task.id} todolistId={todolistId} removeTask={removeTask}
                         changeTaskStatus={changeTaskStatus} updateTask={changeTaskTitleHandler} {...task}/>
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

    const updateTodolistHandler = (title: string) => {
        updateTodolist(todolistId, title)
    }

    return (
        <div>
            <div className={s.todolistTitleContainer}>
                <EditableSpan value={title} onChange={updateTodolistHandler}/>
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