import React from "react";
import {FilterValueType, TasksType} from "../App";
import {Task} from "./Task";
import {Button} from "./Button";

type TodolistPropsType = {
    title: string
    tasks: TasksType[]
    removeTask: (id: number) => void
    changeFilter: (filter: FilterValueType) => void
};
export const Todolist = ({title, tasks, removeTask, changeFilter}: TodolistPropsType) => {

    const mappedTasks = tasks.length ?
        tasks.map(task => {
            return <Task key={task.id} removeTask={removeTask} {...task}/>
        }) : <div>No tasks</div>


    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title={"+"}/>
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