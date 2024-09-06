import React from "react";
import {TasksType} from "../App";
import {Task} from "./Task";
import {Button} from "./Button";

type TodolistPropsType = {
    title: string
    tasks: TasksType[]
};
export const Todolist = ({title, tasks}: TodolistPropsType) => {

    const mappedTasks = tasks.length ?
        tasks.map(task => {
            return <Task key={task.id} {...task}/>
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