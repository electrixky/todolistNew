import React from "react";
import {TasksType} from "../App";
import {Task} from "./Task";
import {Button} from "./Button";

type TodolistPropsType = {
    title: string
    tasks: TasksType[]
    removeTask: (id: number) => void
};
export const Todolist = ({title, tasks, removeTask}: TodolistPropsType) => {

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
                <Button title={"All"}/>
                <Button title={"Active"}/>
                <Button title={"Complete"}/>
            </div>
        </div>
    );
};